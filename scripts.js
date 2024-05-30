
function saveNote() {
    const diaryText = document.getElementById('diary-text').value;
    const date = new Date().toISOString();

    if (diaryText) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ text: diaryText, date: date });
        localStorage.setItem('notes', JSON.stringify(notes));

        document.getElementById('diary-text').value = '';
        displayNotes();
    }
}

function displayNotes() {
    const diaryEntries = document.getElementById('diary-entries');
    diaryEntries.innerHTML = '';

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.sort((a, b) => new Date(b.date) - new Date(a.date)); 

    notes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.textContent = `${new Date(note.date).toLocaleDateString()} - ${note.text}`;
        diaryEntries.appendChild(listItem);
    });
}
document.getElementById('save-btn').addEventListener('click', saveNote);

window.onload = displayNotes;
