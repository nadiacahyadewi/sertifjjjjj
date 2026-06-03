from fpdf import FPDF
import os

class PDF(FPDF):
    # Dihapus method header() agar tidak ada header di atas halaman
    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, f'Halaman {self.page_no()}', 0, 0, 'C')

import json

def main():
    pdf = PDF()
    pdf.add_page()
    pdf.set_auto_page_break(auto=True, margin=15)
    
    data_file = os.path.join(r"c:\Users\PREDATOR\Documents\KULIAH\latihan sertifikasi internasional", "data.json")
    with open(data_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    for item in data:
        # Nomer Soal
        pdf.set_font("Arial", 'B', 12)
        pdf.cell(0, 10, f"Nomor {item['no']}.", ln=1)
        
        # Soal EN
        pdf.set_font("Arial", 'B', 11)
        pdf.cell(0, 6, "Question (English):", ln=1)
        pdf.set_font("Arial", '', 11)
        pdf.multi_cell(0, 6, item['soal_en'])
        pdf.ln(2)
        
        # Soal ID
        pdf.set_font("Arial", 'B', 11)
        pdf.cell(0, 6, "Soal (Terjemahan):", ln=1)
        pdf.set_font("Arial", 'I', 11)
        pdf.multi_cell(0, 6, item['soal_id'])
        pdf.ln(3)
        
        # Pilihan Jawaban
        pdf.set_font("Arial", 'B', 11)
        pdf.cell(0, 6, "Options:", ln=1)
        pdf.set_font("Arial", '', 11)
        pdf.multi_cell(0, 6, item['pilihan_en'])
        pdf.ln(4)
        
        # Jawaban
        pdf.set_font("Arial", 'B', 12)
        pdf.cell(25, 7, "Jawaban: ")
        pdf.set_font("Arial", 'B', 12)
        pdf.multi_cell(0, 7, item['jawaban'])
        pdf.ln(2)
        
        # Penjelasan
        pdf.set_font("Arial", 'B', 12)
        pdf.cell(28, 7, "Penjelasan: ")
        pdf.ln(7)
        pdf.set_font("Arial", '', 11)
        pdf.multi_cell(0, 6, item['penjelasan'])
        pdf.ln(10)
        
        # Separator line
        pdf.line(10, pdf.get_y(), 200, pdf.get_y())
        pdf.ln(5)

    output_path = os.path.join(r"c:\Users\PREDATOR\Documents\KULIAH\latihan sertifikasi internasional", "Pembahasan_Soal.pdf")
    pdf.output(output_path)
    print(f"PDF saved as {output_path}")

if __name__ == "__main__":
    main()
