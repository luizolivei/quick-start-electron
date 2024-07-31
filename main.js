const { app, BrowserWindow, ipcMain } = require('electron');
const scrapeGoogleBusiness = require('./searchExample');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: true
        }
    });

    mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

ipcMain.on('search', async (event, { first, second }) => {
    console.log("first name", first);
    console.log("second name", second);
    const result = await scrapeGoogleBusiness();
    event.sender.send('search-result', result);
});