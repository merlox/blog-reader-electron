const { app, BrowserWindow } = require('electron')
let myWindow

app.on('ready', () => {
  myWindow = new BrowserWindow({
    width: 1000,
    height: 850,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  // myWindow.openDevTools()
  myWindow.loadFile('index.html')
})
