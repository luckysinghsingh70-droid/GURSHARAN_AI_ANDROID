
const {app,BrowserWindow,ipcMain,shell}=require("electron");
const {execFile}=require("child_process"); const path=require("path");
const {route}=require("../shared/master-agent");
const safe={notepad:["notepad.exe",[]],calculator:["calc.exe",[]],explorer:["explorer.exe",[]]};
function win(){const w=new BrowserWindow({width:1440,height:900,minWidth:1000,minHeight:650,backgroundColor:"#020817",webPreferences:{preload:path.join(__dirname,"preload.js"),contextIsolation:true,nodeIntegration:false}});w.loadFile("index.html")}
app.whenReady().then(()=>{win();
ipcMain.handle("route",(_,t,s)=>route(t,s));
ipcMain.handle("safeApp",(_,n)=>new Promise(r=>{if(!safe[n])return r({ok:false,error:"Not allowlisted"});execFile(...safe[n],e=>r(e?{ok:false,error:e.message}:{ok:true}))}));
ipcMain.handle("web",async(_,url)=>{try{const u=new URL(url);if(!["http:","https:"].includes(u.protocol))throw Error("Web URL only");await shell.openExternal(u.toString());return{ok:true}}catch(e){return{ok:false,error:e.message}}})
});
app.on("window-all-closed",()=>{if(process.platform!=="darwin")app.quit()});
