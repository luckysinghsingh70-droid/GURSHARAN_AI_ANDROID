
const {contextBridge,ipcRenderer}=require("electron");
contextBridge.exposeInMainWorld("gursharan",{route:(t,s)=>ipcRenderer.invoke("route",t,s),safeApp:n=>ipcRenderer.invoke("safeApp",n),web:u=>ipcRenderer.invoke("web",u)});
