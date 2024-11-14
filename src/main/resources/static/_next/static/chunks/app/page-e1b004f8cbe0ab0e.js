(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8964:function(e,t,s){Promise.resolve().then(s.bind(s,2235))},2235:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var l=s(7437),i=s(2265),n=s(7583),a=s.n(n),o=function(e){let{isOpen:t,onClose:s,statistics:i}=e;return(0,l.jsxs)(a(),{isOpen:t,onRequestClose:s,contentLabel:"Client Statistics",className:"bg-white rounded-lg p-8 max-w-2xl w-full mx-auto my-auto shadow-lg max-h-[90vh] overflow-y-auto",overlayClassName:"fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center fadeInFast",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4 text-center text-gray-700",children:"Client Information"}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold text-lg text-gray-600",children:"Memory Usage"}),(0,l.jsx)("table",{className:"w-full text-left text-gray-700",children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"Free Memory (MB):"}),(0,l.jsx)("td",{children:null==i?void 0:i.freeMemoryMB})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"Used Memory (MB):"}),(0,l.jsx)("td",{children:null==i?void 0:i.usedMemoryMB})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"Max Memory (MB):"}),(0,l.jsx)("td",{children:null==i?void 0:i.maxMemoryMB})]})]})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold text-lg text-gray-600",children:"CPU & Thread Information"}),(0,l.jsx)("table",{className:"w-full text-left text-gray-700",children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"CPU Load (%):"}),(0,l.jsx)("td",{children:null==i?void 0:i.processCpuLoadPercentage.toFixed(2)})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"Available Processors:"}),(0,l.jsx)("td",{children:null==i?void 0:i.availableProcessors})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"Total Threads:"}),(0,l.jsx)("td",{children:null==i?void 0:i.totalThreads})]})]})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold text-lg text-gray-600",children:"System Status"}),(0,l.jsx)("table",{className:"w-full text-left text-gray-700",children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"Health Status:"}),(0,l.jsx)("td",{className:"font-bold ".concat((null==i?void 0:i.health)==="GOOD"?"text-green-500":(null==i?void 0:i.health)==="OKAY"?"text-yellow-500":(null==i?void 0:i.health)==="STRESSED"?"text-orange-500":(null==i?void 0:i.health)==="OVERLOAD"?"text-red-600":(null==i?void 0:i.health)==="CRITICAL"?"text-red-800":"text-gray-500"),children:null==i?void 0:i.health})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"IP Address:"}),(0,l.jsxs)("td",{children:[null==i?void 0:i.ip,"/",null==i?void 0:i.hostname]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"Process ID:"}),(0,l.jsx)("td",{children:null==i?void 0:i.processId})]})]})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold text-lg text-gray-600",children:"Java Environment"}),(0,l.jsx)("table",{className:"w-full text-left text-gray-700",children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"Java Version:"}),(0,l.jsx)("td",{children:null==i?void 0:i.javaVersion})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"Java Vendor:"}),(0,l.jsx)("td",{children:null==i?void 0:i.javaVendor})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"py-2",children:"JVM Name:"}),(0,l.jsx)("td",{children:null==i?void 0:i.jvmName})]})]})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold text-lg text-gray-600",children:"Client Version"}),(0,l.jsx)("p",{className:"text-gray-700",children:null==i?void 0:i.version})]})]}),(0,l.jsx)("button",{onClick:s,className:"mt-6 px-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none",children:"Close"})]})},r=function(e){let{index:t,ip:s,messages:n,onDisconnectClick:a,hostname:r,stats:c,identifier:d}=e,[x,m]=(0,i.useState)(!1),h=()=>{m(!0),fetch("http://localhost:4880/api/ping?uuid="+d,{method:"POST",headers:{"Content-Type":"application/json"}}).then(()=>{m(!1)}).catch(()=>{m(!1)})},[u,f]=(0,i.useState)(!1),p=()=>f(!0);return(0,l.jsxs)("div",{className:"border-2 border-gray-900 rounded-md pt-[20px] text-left p-[24px] shadow-2xl mt-[30px]",children:[(0,l.jsx)(o,{isOpen:u,onClose:()=>f(!1),statistics:null!=c?c:null}),(0,l.jsxs)("div",{className:"flex flex-row items-center mb-[2px]",children:[(0,l.jsx)("h6",{className:"uppercase font-bold text-xl text-white",children:c?c.hostname:"Client #".concat(t)}),(0,l.jsx)("div",{className:"bg-[#4cae50] text-white inline-block p-[5px] px-[10px] rounded-[15px] text-[12px] font-bold ml-[12px]",children:"Connected"}),c?(0,l.jsx)("div",{className:"hidden md:block text-white inline-block p-[5px] px-[10px] rounded-[15px] text-[12px] font-bold ml-[12px] "+("GOOD"===c.health?"bg-[#4cae50]":"OKAY"===c.health||"STRESSED"===c.health?"bg-yellow-600":"bg-red-700"),children:c.health}):null,c?(0,l.jsx)("button",{onClick:()=>{p(),h()},className:"bg-indigo-500 text-white inline-block p-[5px] px-[10px] rounded-[6px] text-[12px] font-bold ml-auto",children:"Information"}):null]}),(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between mb-3 space-y-2 md:space-y-0 md:space-x-4",children:[(0,l.jsxs)("div",{className:"mt-[8px] text-left text-[14px] text-gray-500",children:[s,"\xa0|\xa0",r]}),(0,l.jsxs)("div",{className:"flex-1 text-right text-gray-500 text-[11px]",children:[n," RIM"]})]}),(0,l.jsx)("button",{onClick:()=>h(),disabled:x,className:"mb-2 flex w-full items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80 "+(x?"cursor-not-allowed opacity-45":"cursor-pointer"),children:x?(0,l.jsxs)("span",{className:"flex items-center justify-center flex-1",children:[(0,l.jsxs)("svg",{className:"animate-spin h-5 w-5 mr-2 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,l.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,l.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"})]}),"Loading..."]}):(0,l.jsx)("span",{className:"mx-1 justify-center flex-1",children:"Debug Information"})}),(0,l.jsx)("button",{onClick:()=>a(),disabled:x,className:"flex w-full items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-600 rounded-lg hover:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-80 "+(x?"cursor-not-allowed opacity-45":"cursor-pointer"),children:x?(0,l.jsxs)("span",{className:"flex items-center justify-center flex-1",children:[(0,l.jsxs)("svg",{className:"animate-spin h-5 w-5 mr-2 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,l.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,l.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"})]}),"Loading..."]}):(0,l.jsx)("span",{className:"mx-1 justify-center flex-1",children:"Disconnect"})})]})},c=s(4365),d=s.n(c),x=e=>{let{children:t}=e,[s,n]=(0,i.useState)(!1),[a,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=()=>{setTimeout(()=>n(!0),800)};return"complete"===document.readyState?e():(window.addEventListener("load",e),document.addEventListener("DOMContentLoaded",e)),()=>{window.removeEventListener("load",e),document.removeEventListener("DOMContentLoaded",e)}},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",opacity:s&&a?0:1,visibility:s&&a?"hidden":"visible",transition:"opacity 1s ease, visibility 1s ease"},className:"bg-gradient-to-r from-slate-900 to-slate-700",children:[(0,l.jsx)("img",{src:"/logo.png",alt:"Logo",className:"xl:w-[30rem] lg:w-[25rem] sm:w-[20rem] w-[15rem]",style:{marginBottom:"16px"}}),(0,l.jsx)("div",{className:"font-extrabold text-xl text-white",style:{textAlign:"center"},children:(0,l.jsx)(d(),{onInit:e=>{e.changeDelay(3).typeString("XTABLES DASHBOARD").pauseFor(300).callFunction(()=>{o(!0)}).start()}})})]}),(0,l.jsx)("div",{style:{opacity:s&&a?1:0,transition:"opacity 1s ease"},children:t})]})};s(7449);var m=function(){var e,t,s,n,a,o;let c="http://localhost:4880",d={status:"OFFLINE",ip:"Disconnected",totalMessages:0,clientDataList:[]},m=async()=>{await fetch(c+"/api/reboot",{method:"POST",headers:{"Content-Type":"application/json"}})},h=async e=>{await fetch(c+"/api/disconnect?uuid="+e,{method:"POST",headers:{"Content-Type":"application/json"}})},[u,f]=(0,i.useState)(d),[p,g]=(0,i.useState)(0),[v,j]=(0,i.useState)(0),[y,w]=(0,i.useState)({diff:0,prevTime:Date.now()}),[N,b]=(0,i.useState)(0),[S,C]=(0,i.useState)(0);return((0,i.useEffect)(()=>{let e=setInterval(async()=>{try{let e=await fetch(c+"/api/get"),t=await e.json();f(t),w(e=>{let t=Date.now();return{diff:t-e.prevTime,prevTime:t}})}catch(e){f(d),g(0),j(0),console.error("Error fetching data:",e)}},150);return()=>clearInterval(e)},[]),(0,i.useEffect)(()=>{if(y.diff>0&&void 0!==u.framesForwarded&&void 0!==u.totalMessages){let e=u.framesForwarded-N,t=u.totalMessages-S,s=e/y.diff*1e3,l=t/y.diff*1e3;g(s),j(l),b(u.framesForwarded),C(u.totalMessages)}},[u,y]),u)?(0,l.jsx)(x,{children:(0,l.jsx)("div",{className:" flex min-h-screen w-screen bg-gradient-to-r from-slate-500 to-slate-800 overflow-hidden",children:(0,l.jsxs)("div",{className:"p-6 bg-gray-800 shadow-lg shadow-black/10 lg:rounded-md max-w-7xl w-full lg:my-6 mx-auto flex flex-grow flex-col ",children:[(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)("img",{src:"/logo.png",className:"xl:w-[30rem] lg:w-[25rem] sm:w-[20rem]",alt:"Logo"})}),(0,l.jsx)("div",{className:"my-6 mx-auto w-full",children:(0,l.jsxs)("div",{className:"shadow-2xl border-2 border-gray-900 rounded-md p-6 mt-6",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center mb-2",children:[(0,l.jsx)("h6",{className:"uppercase font-extrabold text-xl text-white",children:"XTABLES\xa0"}),(0,l.jsx)("div",{className:"text-white inline-block p-2 px-4 rounded-full text-xs font-bold ml-3 "+((null==u?void 0:u.status)==="ONLINE"?"bg-green-500":(null==u?void 0:u.status)==="STARTING"?"bg-yellow-500":(null==u?void 0:u.status)==="REBOOTING"?"bg-amber-100":"bg-red-500"),children:(null==u?void 0:u.status)==="ONLINE"?"Fully Operational":(null==u?void 0:u.status)==="STARTING"?"Starting Service":(null==u?void 0:u.status)==="REBOOTING"?"Rebooting":"Offline"})]}),(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between mb-3 space-y-2 md:space-y-0 md:space-x-4",children:[(0,l.jsx)("div",{className:"text-sm text-gray-500 md:text-left text-center w-full md:w-auto",children:(null==u?void 0:u.ip)&&(null==u?void 0:u.hostname)?"".concat(null==u?void 0:u.ip," | ").concat(null==u?void 0:u.hostname):"Disconnected"}),(0,l.jsxs)("div",{className:"text-xs text-gray-500 text-center w-full md:w-auto",children:[null!==(a=null==u?void 0:null===(e=u.framesForwarded)||void 0===e?void 0:e.toLocaleString())&&void 0!==a?a:0,"\xa0FIM\xa0|\xa0",60*p<0?"RESET":(60*p).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}),"\xa0FPM\xa0|\xa0",p<0?"RESET":p.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}),"\xa0FPS"]}),(0,l.jsxs)("div",{className:"text-xs text-gray-500 text-center md:text-right w-full md:w-auto",children:[null!==(o=null==u?void 0:null===(t=u.totalMessages)||void 0===t?void 0:t.toLocaleString())&&void 0!==o?o:0,"\xa0RIM\xa0|\xa0",60*v<0?"RESET":(60*v).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}),"\xa0RPM\xa0|\xa0",v<0?"RESET":v.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}),"\xa0RPS"]})]}),(0,l.jsx)("button",{onClick:m,disabled:"ONLINE"!==u.status,className:"flex w-full items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-600 rounded-lg hover:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-80 "+("ONLINE"!==u.status?"cursor-not-allowed opacity-45":"cursor-pointer"),children:"STARTING"===u.status||"REBOOTING"===u.status?(0,l.jsxs)("span",{className:"flex items-center mx-1 justify-center flex-1",children:[(0,l.jsxs)("svg",{className:"animate-spin h-5 w-5 mr-2 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,l.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,l.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"})]}),"Starting..."]}):(0,l.jsx)("span",{className:"mx-1 justify-center flex-1",children:"Reboot"})})]})}),(null==u?void 0:null===(s=u.clientDataList)||void 0===s?void 0:s.length)>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"font-bold flex justify-center text-2xl text-white",children:"Clients"}),(0,l.jsx)("div",{className:"flex-1 w-full overflow-y-auto no-scrollbar min-h-0 flex-grow max-h-[40vh]",children:null==u?void 0:null===(n=u.clientDataList)||void 0===n?void 0:n.map((e,t)=>(0,l.jsx)(r,{index:t+1,hostname:null==e?void 0:e.hostname,ip:null==e?void 0:e.clientIP,messages:e.messages.toLocaleString(),identifier:e.identifier,stats:(null==e?void 0:e.stats)?JSON.parse(e.stats):null,onDisconnectClick:()=>h(e.identifier)},t+1))})]})]})})}):(0,l.jsx)("div",{children:"Loading..."})}}},function(e){e.O(0,[292,971,23,744],function(){return e(e.s=8964)}),_N_E=e.O()}]);