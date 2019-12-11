const { app, BrowserWindow, ipcMain } = require('electron');

const url = `file://${__dirname}/dist/index.html`;
let win;
function createWindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 830,
        // width: 1000,
        webPreferences: {
            nodeIntegration: true
        },
        transparent: true
    });

    win.webContents.openDevTools();
    win.loadURL(`${ url }`);
}

app.on('ready', createWindow);
ipcMain.on('mini', (event, arg) => {
    win.minimize();
});

ipcMain.on('exit', () => {
	win = null;
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
