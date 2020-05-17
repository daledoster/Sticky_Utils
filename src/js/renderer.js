var {ipcRenderer} = require('electron')
function send2main() {
  ipcRenderer.send('create-new-instance')
}
