let currentQuestionIndex = 0;
let userAnswers = {};
let showIndonesian = false;

const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const domElements = {
    questionCounter: document.getElementById('question-counter'),
    progress: document.getElementById('progress'),
    questionImages: document.getElementById('question-images'),
    questionEn: document.getElementById('question-en'),
    questionId: document.getElementById('question-id'),
    optionsText: document.getElementById('options-text'),
    inputArea: document.getElementById('input-area'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    reviewContainer: document.getElementById('review-container'),
    langToggleBtn: document.getElementById('lang-toggle-btn')
};

function switchScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

document.getElementById('start-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    userAnswers = {};
    loadQuestion(0);
    switchScreen('quiz');
});

document.getElementById('restart-btn').addEventListener('click', () => {
    switchScreen('start');
});

domElements.prevBtn.addEventListener('click', () => {
    saveCurrentAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
});

domElements.nextBtn.addEventListener('click', () => {
    saveCurrentAnswer();
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        generateReview();
        switchScreen('result');
    }
});

function loadQuestion(index) {
    const q = quizData[index];
    domElements.questionCounter.textContent = `Soal ${index + 1} dari ${quizData.length}`;
    
    // Load Images
    domElements.questionImages.innerHTML = '';
    if (q.images && q.images.length > 0) {
        q.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            domElements.questionImages.appendChild(img);
        });
    }

    // Default texts
    let enText = q.soal_en;
    let idText = q.soal_id;

    // Inline dropdown parsing logic
    let isInlineDropdown = false;
    if (q.ui_info.type === 'dropdown') {
        // If there's [Dropdown 1] in text, we replace it with empty selects for now (will populate later)
        if (enText.includes('[Dropdown 1]')) {
            isInlineDropdown = true;
            q.ui_info.dropdowns.forEach((dd, idx) => {
                const selectHtml = `<select class="inline-select" name="q_${index}_${idx}"></select>`;
                enText = enText.replace(`[${dd.id}]`, selectHtml);
                idText = idText.replace(`[${dd.id}]`, selectHtml);
            });
            // We wrap it in pre for monospace code block style
            enText = `<div class="inline-dropdown-text">${enText}</div>`;
            idText = `<div class="inline-dropdown-text">${idText}</div>`;
        }
    }

    domElements.questionEn.innerHTML = enText;
    domElements.questionId.innerHTML = idText;
    
    domElements.prevBtn.disabled = index === 0;
    domElements.nextBtn.textContent = index === quizData.length - 1 ? 'Selesai & Lihat Hasil' : 'Selanjutnya';
    
    showIndonesian = false;
    updateLanguageView();
    
    if (q.ui_info.type === 'multiple-choice' || q.ui_info.type === 'true-false' || isInlineDropdown) {
        domElements.optionsText.innerHTML = ''; 
        domElements.optionsText.style.display = 'none';
    } else {
        domElements.optionsText.innerHTML = `<pre>${q.pilihan_en}</pre>`;
        domElements.optionsText.style.display = 'block';
    }
    
    renderInputs(q, index, isInlineDropdown);
    restoreAnswer(index);
}

function renderInputs(q, index, isInlineDropdown) {
    const container = domElements.inputArea;
    container.innerHTML = '';
    
    const ui = q.ui_info;
    
    if (ui.type === 'multiple-choice') {
        ui.options.forEach((opt, i) => {
            const label = document.createElement('label');
            label.className = ui.is_multi ? 'checkbox-option' : 'radio-option';
            
            const input = document.createElement('input');
            input.type = ui.is_multi ? 'checkbox' : 'radio';
            input.name = `q_${index}`;
            input.value = opt.substring(0, 1); 
            
            const span = document.createElement('span');
            span.textContent = opt;
            
            label.appendChild(input);
            label.appendChild(span);
            container.appendChild(label);
        });
    } 
    else if (ui.type === 'true-false') {
        const table = document.createElement('table');
        table.className = 'tf-table';
        table.innerHTML = `
            <thead>
                <tr>
                    <th></th>
                    <th>True</th>
                    <th>False</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        const tbody = table.querySelector('tbody');
        ui.statements.forEach((stmt, i) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="tf-statement">${stmt}</td>
                <td class="tf-radio-cell"><input type="radio" name="q_${index}_${i}" value="True"></td>
                <td class="tf-radio-cell"><input type="radio" name="q_${index}_${i}" value="False"></td>
            `;
            tbody.appendChild(tr);
        });
        container.appendChild(table);
    }
    else if (ui.type === 'dropdown') {
        if (isInlineDropdown) {
            // Options need to be injected into the inline selects which are inside questionEn/Id
            ui.dropdowns.forEach((dd, idx) => {
                const selects = document.querySelectorAll(`select[name="q_${index}_${idx}"]`);
                selects.forEach(sel => {
                    sel.innerHTML = '<option value="">-- Select --</option>';
                    dd.options.forEach(opt => {
                        sel.innerHTML += `<option value="${opt}">${opt}</option>`;
                    });
                    
                    // Sync selects across EN and ID
                    sel.addEventListener('change', (e) => {
                        selects.forEach(s => s.value = e.target.value);
                    });
                });
            });
        } else {
            const div = document.createElement('div');
            div.className = 'dropdown-container';
            for (let i = 0; i < ui.count; i++) {
                const dd = ui.dropdowns[i];
                const label = dd && dd.label ? dd.label : `Bagian ${i+1}`;
                const options = dd && dd.options ? dd.options : (ui.fallback_options || []);
                const item = document.createElement('div');
                item.className = 'dropdown-item';
                item.innerHTML = `<span style="color:var(--text-muted)">${label}:</span>
                    <select class="dropdown-select" name="q_${index}_${i}">
                        <option value="">-- Select --</option>
                        ${options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                    </select>`;
                div.appendChild(item);
            }
            container.appendChild(div);
        }
    }
    else if (ui.type === 'matching') {
        const div = document.createElement('div');
        div.className = 'dropdown-container';
        for (let i = 0; i < ui.count; i++) {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            
            let inputHtml = '';
            if (ui.options && ui.options.length > 0) {
                inputHtml = `<select class="dropdown-select" name="q_${index}_${i}">
                    <option value="">-- Select --</option>
                    ${ui.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                </select>`;
            } else {
                inputHtml = `<input type="text" class="dropdown-select" name="q_${index}_${i}" placeholder="Ketik jawaban">`;
            }
            
            item.innerHTML = `<span style="color:var(--text-muted)">Bagian ${i+1}:</span>${inputHtml}`;
            div.appendChild(item);
        }
        container.appendChild(div);
    }
    else {
        const textarea = document.createElement('textarea');
        textarea.className = 'generic-input';
        textarea.name = `q_${index}`;
        textarea.placeholder = "Ketik jawaban Anda di sini...";
        container.appendChild(textarea);
    }
}

function saveCurrentAnswer() {
    const q = quizData[currentQuestionIndex];
    const ui = q.ui_info;
    
    if (ui.type === 'multiple-choice') {
        if (ui.is_multi) {
            const checked = Array.from(document.querySelectorAll(`input[name="q_${currentQuestionIndex}"]:checked`)).map(cb => cb.value);
            userAnswers[currentQuestionIndex] = checked.join(', ');
        } else {
            const checked = document.querySelector(`input[name="q_${currentQuestionIndex}"]:checked`);
            userAnswers[currentQuestionIndex] = checked ? checked.value : '';
        }
    } 
    else if (ui.type === 'true-false') {
        let ans = [];
        for (let i = 0; i < ui.statements.length; i++) {
            const checked = document.querySelector(`input[name="q_${currentQuestionIndex}_${i}"]:checked`);
            ans.push(checked ? checked.value : '-');
        }
        userAnswers[currentQuestionIndex] = ans.join('|||');
    }
    else if (ui.type === 'dropdown') {
        let ans = [];
        const isInline = q.soal_en.includes('[Dropdown 1]');
        for (let i = 0; i < ui.count; i++) {
            const sel = document.querySelector(`select[name="q_${currentQuestionIndex}_${i}"]`);
            ans.push(sel ? sel.value || '-' : '-');
        }
        userAnswers[currentQuestionIndex] = ans.join('|||');
    }
    else if (ui.type === 'matching') {
        let ans = [];
        for (let i = 0; i < ui.count; i++) {
            const sel = document.querySelector(`select[name="q_${currentQuestionIndex}_${i}"]`);
            if (sel) {
                ans.push(sel.value || '-');
            } else {
                const inp = document.querySelector(`input[name="q_${currentQuestionIndex}_${i}"]`);
                ans.push(inp ? inp.value || '-' : '-');
            }
        }
        userAnswers[currentQuestionIndex] = ans.join('|||');
    }
    else {
        const val = document.querySelector(`textarea[name="q_${currentQuestionIndex}"]`).value;
        userAnswers[currentQuestionIndex] = val;
    }
}

function restoreAnswer(index) {
    const ans = userAnswers[index];
    if (!ans) return;
    
    const q = quizData[index];
    const ui = q.ui_info;
    
    if (ui.type === 'multiple-choice') {
        if (ui.is_multi) {
            const parts = ans.split(', ');
            parts.forEach(p => {
                const cb = document.querySelector(`input[name="q_${index}"][value="${p}"]`);
                if(cb) cb.checked = true;
            });
        } else {
            const rb = document.querySelector(`input[name="q_${index}"][value="${ans}"]`);
            if(rb) rb.checked = true;
        }
    }
    else if (ui.type === 'true-false') {
        const parts = ans.split('|||');
        for (let i = 0; i < ui.statements.length; i++) {
            if(parts[i] === '-') continue;
            const rb = document.querySelector(`input[name="q_${index}_${i}"][value="${parts[i]}"]`);
            if(rb) rb.checked = true;
        }
    }
    else if (ui.type === 'dropdown') {
        const isInline = q.soal_en.includes('[Dropdown 1]');
        const parts = ans.split('|||');
        for (let i = 0; i < ui.count; i++) {
            if(parts[i] === '-') continue;
            if (isInline) {
                const selects = document.querySelectorAll(`select[name="q_${index}_${i}"]`);
                selects.forEach(sel => sel.value = parts[i]);
            } else {
                const sel = document.querySelector(`select[name="q_${index}_${i}"]`);
                if(sel) sel.value = parts[i];
            }
        }
    }
    else if (ui.type === 'matching') {
        const parts = ans.split('|||');
        for (let i = 0; i < ui.count; i++) {
            if(parts[i] === '-') continue;
            const sel = document.querySelector(`select[name="q_${index}_${i}"]`);
            if (sel) {
                sel.value = parts[i];
            } else {
                const input = document.querySelector(`input[name="q_${index}_${i}"]`);
                if(input) input.value = parts[i];
            }
        }
    }
    else {
        const textarea = document.querySelector(`textarea[name="q_${index}"]`);
        if(textarea) textarea.value = ans;
    }
}

function isAnswerEmpty(ans) {
    if (!ans) return true;
    // Remove delimiters, whitespace, and dash-only entries
    const clean = ans.replace(/\|\|\|/g, '').replace(/[\s,-]/g, '');
    return clean === '';
}

function generateReview() {
    const container = domElements.reviewContainer;
    container.innerHTML = '';
    
    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;
    
    quizData.forEach((q, i) => {
        const rawAns = userAnswers[i] || '';
        const isUnanswered = isAnswerEmpty(rawAns);
        // Format display answer: replace ||| with comma for display
        const displayAns = rawAns.replace(/\|\|\|/g, ', ');
        const ans = isUnanswered ? '<i>Tidak dijawab</i>' : displayAns;
        
        // Grading logic
        let isCorrect = false;
        if (!isUnanswered) {
            isCorrect = checkAnswer(q, rawAns);
        }
        
        if (isUnanswered) {
            unansweredCount++;
        } else if (isCorrect) {
            correctCount++;
        } else {
            wrongCount++;
        }
        
        // Status badge
        let statusClass, statusText, itemClass;
        if (isUnanswered) {
            statusClass = 'unanswered';
            statusText = '⚪ Tidak Dijawab';
            itemClass = 'is-unanswered';
        } else if (isCorrect) {
            statusClass = 'correct';
            statusText = '✅ Benar';
            itemClass = 'is-correct';
        } else {
            statusClass = 'wrong';
            statusText = '❌ Salah';
            itemClass = 'is-wrong';
        }
        
        // Build options HTML if available
        let optionsHtml = '';
        if (q.ui_info.type === 'multiple-choice' && q.ui_info.options && q.ui_info.options.length > 0) {
            const optItems = q.ui_info.options.map(opt => `<li>${opt}</li>`).join('');
            optionsHtml = `
                <div class="review-options">
                    <div class="review-opt-title">Pilihan:</div>
                    <ul>${optItems}</ul>
                </div>`;
        } else if (q.pilihan_en && q.pilihan_en.trim() !== '' && q.pilihan_en.trim() !== 'True / False choices.') {
            const optItems = q.pilihan_en.split('\n').map(opt => `<li>${opt}</li>`).join('');
            optionsHtml = `
                <div class="review-options">
                    <div class="review-opt-title">Pilihan:</div>
                    <ul>${optItems}</ul>
                </div>`;
        }
        
        const div = document.createElement('div');
        div.className = `review-item ${itemClass}`;
        div.innerHTML = `
            <span class="review-status ${statusClass}">${statusText}</span>
            <h3>${q.no}. ${q.soal_en}</h3>
            <h4>Soal: ${q.soal_id}</h4>
            
            ${optionsHtml}
            
            <div style="margin-top:1rem">
                <div style="color:var(--text-muted); font-size:0.9rem; margin-bottom:0.5rem">Jawaban Anda:</div>
                <div class="ans-box user-ans">${ans}</div>
                
                <div style="color:var(--text-muted); font-size:0.9rem; margin-bottom:0.5rem">Kunci Jawaban:</div>
                <div class="ans-box correct-ans">${q.jawaban}</div>
                
                <div class="explanation">
                    <strong>Penjelasan:</strong><br>
                    ${q.penjelasan}
                </div>
            </div>
        `;
        container.appendChild(div);
    });
    
    // Update score summary
    const total = quizData.length;
    const percentage = Math.round((correctCount / total) * 100);
    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('score-correct').textContent = correctCount;
    document.getElementById('score-wrong').textContent = wrongCount;
    document.getElementById('score-unanswered').textContent = unansweredCount;
}

function checkAnswer(q, userAns) {
    if (isAnswerEmpty(userAns)) return false;
    
    const jawaban = q.jawaban.trim();
    const user = userAns.trim();
    
    // For multiple-choice (single): compare first letter (A, B, C, D)
    if (q.ui_info.type === 'multiple-choice' && !q.ui_info.is_multi) {
        const correctLetter = jawaban.charAt(0).toUpperCase();
        const userLetter = user.charAt(0).toUpperCase();
        return userLetter === correctLetter;
    }
    
    // For multiple-choice (multi): compare sorted selected letters
    if (q.ui_info.type === 'multiple-choice' && q.ui_info.is_multi) {
        // jawaban formats: "A dan D", "A, B, D", "B dan E", "A dan B dan C"
        // Split by separators (dan, and, comma) then get first letter of each part
        const correctLetters = jawaban
            .split(/[,]|\s+dan\s+|\s+and\s+/i)
            .map(s => s.trim())
            .filter(s => s.length > 0)
            .map(s => s.charAt(0).toUpperCase())
            .sort();
        
        // User answer is saved as "A, D" format from checkboxes
        const userLetters = user
            .split(',')
            .map(s => s.trim())
            .filter(s => s.length > 0)
            .map(s => s.charAt(0).toUpperCase())
            .sort();
        
        return correctLetters.join(',') === userLetters.join(',');
    }
    
    // For true-false: compare ||| separated values
    if (q.ui_info.type === 'true-false') {
        const correctParts = jawaban.toLowerCase().split(',').map(s => s.trim());
        const userParts = user.split('|||').map(s => s.trim().toLowerCase());
        if (correctParts.length !== userParts.length) return false;
        return correctParts.every((v, idx) => v === userParts[idx]);
    }
    
    // For dropdown: compare values part by part (user picks values, jawaban has "Label: value")
    if (q.ui_info.type === 'dropdown') {
        let lines = jawaban.split('\n').map(s => s.trim()).filter(s => s);
        
        // Extract just the value after colon (or the whole line if no colon)
        const correctValues = lines.map(line => {
            let val = line.replace(/^\d+\.\s*/, '');
            const colonIdx = val.indexOf(':');
            if (colonIdx !== -1) {
                val = val.substring(colonIdx + 1).trim();
            }
            return val.toLowerCase();
        });
        
        // User answer is saved with ||| delimiter
        const userParts = user.split('|||').map(s => s.trim().toLowerCase());
        const userFiltered = userParts.filter(s => s && s !== '-');
        
        if (correctValues.length !== userFiltered.length) return false;
        return correctValues.every((v, idx) => v === userFiltered[idx]);
    }
    
    // For matching: user picks the key (e.g. "branch"), jawaban has "key: description"
    if (q.ui_info.type === 'matching') {
        let lines = jawaban.split('\n').map(s => s.trim()).filter(s => s);
        
        // Extract just the key before colon
        const correctKeys = lines.map(line => {
            let val = line.replace(/^\d+\.\s*/, '');
            const colonIdx = val.indexOf(':');
            if (colonIdx !== -1) {
                val = val.substring(0, colonIdx).trim();
            }
            return val.toLowerCase();
        });
        
        // User answer is saved with ||| delimiter
        const userParts = user.split('|||').map(s => s.trim().toLowerCase());
        const userFiltered = userParts.filter(s => s && s !== '-');
        
        if (correctKeys.length !== userFiltered.length) return false;
        return correctKeys.every((v, idx) => v === userFiltered[idx]);
    }
    
    // Fallback: loose text comparison
    return user.toLowerCase() === jawaban.toLowerCase();
}

// Language Toggle Logic
domElements.langToggleBtn.addEventListener('click', () => {
    showIndonesian = !showIndonesian;
    updateLanguageView();
});

function updateLanguageView() {
    if (showIndonesian) {
        domElements.questionEn.style.display = 'none';
        domElements.questionId.style.display = 'block';
        domElements.langToggleBtn.textContent = 'Show English';
    } else {
        domElements.questionEn.style.display = 'block';
        domElements.questionId.style.display = 'none';
        domElements.langToggleBtn.textContent = 'Translate to Indonesia';
    }
}
