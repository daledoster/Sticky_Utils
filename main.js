const {app, BrowserWindow} = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 650,
    'minWidth': 400,
    'minHeight': 400,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.webContents.openDevTools();
  win.setMenu(null);
  win.loadFile('./src/views/index.html');
}

app.whenReady().then(createWindow);
