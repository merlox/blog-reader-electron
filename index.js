const { app, BrowserWindow } = require('electron')
const fetch = require('node-fetch')
const clientId = '2f8d10fd37bf'
const clientSecret = '044668c4933995815fea35d03d2c40daebf58965'
let myWindow

app.on('ready', () => {
  myWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  // myWindow.openDevTools()
  myWindow.loadFile('index.html')
})
