document.getElementById('searchButton').addEventListener('click', () => {
    const term = document.getElementById('first').value;
    const location = document.getElementById('second').value;
    window.electron.send('search', { term, location });
});

window.electron.receive('search-result', (result) => {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
    const resultDiv = document.createElement('div');
    resultDiv.textContent = JSON.stringify(result);
    resultContainer.appendChild(resultDiv);
});
