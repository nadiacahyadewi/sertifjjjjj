import json
import os
import re

def get_images_for_question(q_no, img_dir):
    images = []
    if not os.path.exists(img_dir):
        return images
    
    for f in sorted(os.listdir(img_dir)):
        if not f.endswith(".jpg"): continue
        name = f[:-4]
        if name == str(q_no) or name.startswith(f"{q_no}-"):
            images.append(f"../Sample Soft Dev/{f}")
    return images

def parse_options(item):
    pilihan = item.get("pilihan_en", "")
    jawaban = item.get("jawaban", "")
    soal_en = item.get("soal_en", "")
    
    mc_pattern = re.compile(r"^[A-Z]\.\s", re.MULTILINE)
    if mc_pattern.search(pilihan):
        lines = pilihan.split("\n")
        options = []
        for line in lines:
            if re.match(r"^[A-Z]\.\s", line.strip()):
                options.append(line.strip())
        
        if len(options) >= 2:
            is_multi = len(jawaban.split(",")) > 1 or "and" in jawaban
            return {
                "type": "multiple-choice",
                "is_multi": is_multi,
                "options": options
            }

    if "True / False" in pilihan or "True or False" in soal_en:
        statements = []
        for line in soal_en.split("\n"):
            line = line.strip()
            if line.startswith("-"):
                statements.append(line[1:].strip())
        
        ans_parts = jawaban.split(",")
        count = max(len(ans_parts), len(statements), 1)
        
        return {
            "type": "true-false",
            "count": count,
            "statements": statements
        }

    if "Dropdown" in pilihan or "drop-down" in soal_en.lower():
        dropdown_data = []
        lines = pilihan.split("\n")
        for line in lines:
            if "Dropdown" in line and ":" in line:
                parts = line.split(":", 1)
                id_raw = parts[0].strip()
                # Remove " options" or " option" if it exists so ID matches [Dropdown 1]
                id_clean = re.sub(r'(?i)\s+options?', '', id_raw)
                
                opts = [opt.strip() for opt in parts[1].split(",")]
                dropdown_data.append({
                    "id": id_clean,
                    "options": opts
                })
        
        if not dropdown_data:
            ans_lines = jawaban.split("\n")
            count = max(1, len(ans_lines))
            # Fallback options from jawaban
            fallback_opts = []
            for line in ans_lines:
                clean_opt = re.sub(r'^\d+\.\s*', '', line.strip())
                if clean_opt:
                    fallback_opts.append(clean_opt)
            
            return {
                "type": "dropdown",
                "count": count,
                "dropdowns": [],
                "fallback_options": fallback_opts
            }
            
        return {
            "type": "dropdown",
            "count": len(dropdown_data),
            "dropdowns": dropdown_data
        }
        
    if "Terms:" in pilihan or "Descriptions:" in pilihan:
        ans_lines = jawaban.split("\n")
        count = max(1, len(ans_lines))
        options = []
        for line in ans_lines:
            clean_line = re.sub(r'^\d+\.\s*', '', line.strip())
            term = clean_line.split(":")[0].strip()
            if term and term not in options:
                options.append(term)
                
        return {
            "type": "matching",
            "count": count,
            "options": options
        }
        
    return {
        "type": "generic"
    }

def build_js():
    base_dir = r"c:\Users\PREDATOR\Documents\KULIAH\latihan sertifikasi internasional"
    data_file = os.path.join(base_dir, "data.json")
    img_dir = os.path.join(base_dir, "Sample Soft Dev")
    
    with open(data_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    parsed_data = []
    for item in data:
        parsed_item = item.copy()
        q_no = item["no"]
        
        parsed_item["images"] = get_images_for_question(q_no, img_dir)
        parsed_item["ui_info"] = parse_options(item)
        parsed_data.append(parsed_item)

    quiz_dir = os.path.join(base_dir, "quiz")
    if not os.path.exists(quiz_dir):
        os.makedirs(quiz_dir)

    js_content = f"const quizData = {json.dumps(parsed_data, indent=4)};\n"
    
    with open(os.path.join(quiz_dir, 'data.js'), 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("quiz/data.js created successfully with image mapping.")

if __name__ == "__main__":
    build_js()
