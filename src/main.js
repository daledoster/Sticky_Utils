const {app, BrowserWindow} = require('electron');

function createWindow () {
  // Create the browser window
  let win = new BrowserWindow({
    width: 400,
    height: 650,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.setMenu(null);
  // and load the index.html of the app
  win.loadFile('views/index.html');
}

app.whenReady().then(createWindow);
