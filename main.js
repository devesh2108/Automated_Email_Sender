"use strict";
const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const {download} = require("electron-dl");
const path = require("path");
const url = require("url");
const delay = require("delay");
const https = require("http");
const { shell } = require('electron');

let win,win2, loading,portwindow1,portwindow2,portwindow3;
app.mainWindow = win;

// const Store = require("electron-store");
// const store = new Store();
let vkb;
// store.delete('deviceID');
// store.set("unicorn", "🦄");
// console.log(store.get("url"));
// // console.log(store.get("unicorn"));
// if (store.get("url") == undefined) {
//   console.log("inside");

//   store.set("url", "http://localhost");
// }
// console.log("default " + store.get("url"));

// const exec = require('child_process').exec;
function childRun(){
  shell.openItem(app.getAppPath()+'\\spreadsheet.bat');
}
// console.log(childPorcess.pid);

function initApp() {
  showLoading(childRun);
}

function showLoading(callback) {
  loading = new BrowserWindow({
    show: false,
    width: 500,
    height: 500,
    frame: false,
    webPreferences: {
        nodeIntegration: true
    }
  });
  loading.once("show", callback);
  
  // loading.webContents.openDevTools();
  loading.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/splash_screen.html"),
      protocol: "file:",
      slashes: true
    })
  );
  loading.show();
}


ipcMain.on('openChildWindow', () => {
  win2 = new BrowserWindow({
    width: 480,
    height: 500,
  })
})

function serverOne() {
  portwindow1 = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 1200,
    minHeight: 720,
    frame: false,
    show: false,
    webPreferences: {
      experimentalFeatures: true
    }
  });
  portwindow1.webContents.once("dom-ready", () => {

    portwindow1.setFullScreen(false);
    portwindow1.maximize();
    portwindow1.show();
    portwindow1.loadURL("http://localhost:3001");
  });
  portwindow1.on("closed", () => {
    portwindow1 = null;
  });

  // portwindow1.webContents.openDevTools();
  portwindow1.loadURL("http://localhost:3001");
}

function serverTwo() {
  portwindow2 = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 1200,
    minHeight: 720,
    frame: false,
    show: false,
    webPreferences: {
      experimentalFeatures: true
    }
  });
  portwindow2.webContents.once("dom-ready", () => {
    portwindow2.setMenu(null);

    portwindow2.setFullScreen(false);
    portwindow2.maximize();
    portwindow2.show();
    portwindow2.loadURL("http://localhost:3002");
  });
  portwindow2.on("closed", () => {
    portwindow2 = null;
  });

  portwindow2.loadURL("http://localhost:3002");
}

function serverThree() {
  portwindow3 = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 1200,
    minHeight: 720,
    frame: false,
    show: false,
    webPreferences: {
      experimentalFeatures: true
    }
  });

  portwindow3.webContents.once("dom-ready", () => {
    portwindow3.setMenu(null);

    portwindow3.setFullScreen(false);
    portwindow3.maximize();
    portwindow3.show();
    portwindow3.loadURL("http://localhost:3003");
  });
  portwindow3.on("closed", () => {
    portwindow3 = null;
  });

  portwindow3.loadURL("http://localhost:3003");
}
app.on("ready", initApp);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    initApp();
  }
});

// https.get('http://localhost:1818/hardware/signin', (resp) => {
// });

ipcMain.on("overlay-close", (event, url) => {
  app.quit();
});

ipcMain.on("fullscreen-toggle", (event, data) => {
  console.log("fullscreen  " + data.msg);
  event.returnValue = "ack";
  if (data.msg == "f") {
    win.setFullScreen(true);
  } else {
    win.setFullScreen(false);
    if (win.isMaximized()) {
      console.log("isMaxi");
      win.unmaximize();
    } else {
      console.log("isnotMaxi");
      win.maximize();
    }
  }
});

ipcMain.on("getIP", (event, data) => {
  require("getmac").getMac(function(err, macAddress) {
    if (err) throw err;
    console.log(macAddress);
    event.returnValue = macAddress;
  });
});

ipcMain.on("download", (event, info) => {
    console.log(info.url);
    
  info.properties.onProgress = status =>
    win.webContents.send("download progress", status);
    
    download(BrowserWindow.getFocusedWindow(), info.url, info.properties).then(
    dl => win.webContents.send("download complete", dl.getSavePath())
  );
});

ipcMain.on("startServer1", (event, data) => {
  event.returnValue = "ack";
  shell.openItem(app.getAppPath()+'\\mail.bat');
  setTimeout(function() {
    serverOne();
  }, 3000);
  console.log("Starting Server : One ");
});

ipcMain.on("startServer2", (event, data) => {
  event.returnValue = "ack";
  shell.openItem(app.getAppPath()+'\\mail1.bat');
  setTimeout(function() {
    serverTwo();
  }, 3000);
  console.log("Starting Server : Two ");
});

ipcMain.on("startServer3", (event, data) => {
  event.returnValue = "ack";
  shell.openItem(app.getAppPath()+'\\mail2.bat');
  setTimeout(function() {
    serverThree();
  }, 3000);
  console.log("Starting Server : Three ");
});