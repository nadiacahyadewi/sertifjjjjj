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
                const item = document.createElement('div');
                item.className = 'dropdown-item';
                item.innerHTML = `<span style="color:var(--text-muted)">Bagian ${i+1}:</span>
                    <select class="dropdown-select" name="q_${index}_${i}">
                        <option value="">-- Select --</option>
                        ${ui.fallback_options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
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
        userAnswers[currentQuestionIndex] = ans.join(', ');
    }
    else if (ui.type === 'dropdown') {
        let ans = [];
        const isInline = q.soal_en.includes('[Dropdown 1]');
        for (let i = 0; i < ui.count; i++) {
            if (isInline) {
                // Read from the visible select (EN or ID)
                const sel = document.querySelector(`select[name="q_${currentQuestionIndex}_${i}"]`);
                ans.push(sel ? sel.value || '-' : '-');
            } else {
                const sel = document.querySelector(`select[name="q_${currentQuestionIndex}_${i}"]`);
                ans.push(sel ? sel.value || '-' : '-');
            }
        }
        userAnswers[currentQuestionIndex] = ans.join(', ');
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
        userAnswers[currentQuestionIndex] = ans.join(', ');
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
        const parts = ans.split(', ');
        for (let i = 0; i < ui.statements.length; i++) {
            if(parts[i] === '-') continue;
            const rb = document.querySelector(`input[name="q_${index}_${i}"][value="${parts[i]}"]`);
            if(rb) rb.checked = true;
        }
    }
    else if (ui.type === 'dropdown') {
        const isInline = q.soal_en.includes('[Dropdown 1]');
        const parts = ans.split(', ');
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
        const parts = ans.split(', ');
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

function generateReview() {
    const container = domElements.reviewContainer;
    container.innerHTML = '';
    
    quizData.forEach((q, i) => {
        const ans = userAnswers[i] || '<i>Tidak dijawab</i>';
        const div = document.createElement('div');
        div.className = 'review-item';
        div.innerHTML = `
            <h3>${q.no}. ${q.soal_en}</h3>
            <h4>Soal: ${q.soal_id}</h4>
            
            <div style="margin-top:1.5rem">
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
