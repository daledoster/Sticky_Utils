const {app, BrowserWindow} = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    width: 400,
    height: 650,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.setMenu(null);
  win.loadFile('./src/views/index.html');
}

app.whenReady().then(createWindow);
