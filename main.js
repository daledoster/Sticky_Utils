const {app, BrowserWindow} = require('electron');
const {ipcMain} = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    width: 400,
    height: 550,
    'minWidth': 400,
    'minHeight': 550,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // win.webContents.openDevTools();
  win.setMenu(null);
  win.loadFile('./src/views/index.html');
}

ipcMain.on('create-new-instance',()=>{
  createWindow();
})

app.whenReady().then(createWindow);
