document.getElementById('searchButton').addEventListener('click', () => {
    const first = document.getElementById('first').value;
    const second = document.getElementById('second').value;
    window.electron.send('search', { first, second });
});

window.electron.receive('search-result', (result) => {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
    const resultDiv = document.createElement('div');
    resultDiv.textContent = JSON.stringify(result);
    resultContainer.appendChild(resultDiv);
});
