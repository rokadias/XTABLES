(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8964:function(e,s,t){Promise.resolve().then(t.bind(t,476))},476:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return i}});var l=t(7437),n=t(2265),r=function(e){let{index:s,ip:t,messages:n}=e;return(0,l.jsxs)("div",{className:"border border-[#ededed] rounded-md pt-[20px] text-left p-[24px] border-t border-t-[#eee] mt-[30px]",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center mb-[2px]",children:[(0,l.jsxs)("h6",{className:"uppercase font-bold text-xl",children:["Client #",s,"\xa0"]}),(0,l.jsx)("div",{className:"bg-[#4cae50] text-white inline-block  p-[5px] px-[10px] rounded-[15px] text-[12px] font-bold ml-[12px]",children:"Connected"})]}),(0,l.jsxs)("div",{className:"flex flex-row items-center mb-[12px]",children:[(0,l.jsx)("div",{className:"mt-[8px] text-left text-[14px]",children:t}),(0,l.jsxs)("div",{className:" flex-1 text-right text-[#7c7c7c] text-[11px]",children:[n," requests in last minute"]})]}),(0,l.jsx)("div",{className:"bg-gray-200 w-full h-0.5 my-5 rounded-2xl"}),(0,l.jsx)("button",{className:"flex w-full items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-600 rounded-lg hover:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-80",children:(0,l.jsx)("span",{className:"mx-1 justify-center flex-1",children:"Disconnect"})})]})},i=function(){let[e,s]=(0,n.useState)(null);return((0,n.useEffect)(()=>{let e=async()=>{try{let e=await fetch("/api/get"),t=await e.json();console.log(t),s(t)}catch(e){console.error("Error fetching data:",e)}};e();let t=setInterval(e,1e3);return()=>clearInterval(t)},[]),e)?(0,l.jsx)("div",{className:"flex bg-gray-200 h-screen w-screen -mx-auto",children:(0,l.jsxs)("div",{className:"p-6 bg-white shadow-lg shadow-black/10 rounded-md max-w-4xl w-full my-6 mx-auto",children:[(0,l.jsxs)("div",{className:"flex items-center justify-center",children:[(0,l.jsx)("img",{src:"favicon.ico",alt:"Logo",width:"50px",height:"50px"}),(0,l.jsx)("span",{className:"bg-[#f5f6f8] rounded-md p-2 ml-3 text-lg font-bold uppercase",children:"System Status"})]}),(0,l.jsx)("div",{className:"my-6 mx-auto w-full",children:(0,l.jsxs)("div",{className:"border border-gray-200 rounded-md p-6 mt-6",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center mb-2",children:[(0,l.jsx)("h6",{className:"uppercase font-bold text-xl",children:"XTABLES\xa0"}),(0,l.jsx)("div",{className:"bg-green-500 text-white inline-block p-2 px-4 rounded-full text-xs font-bold ml-3",children:"Fully Operational"})]}),(0,l.jsxs)("div",{className:"flex flex-row items-center mb-3",children:[(0,l.jsx)("div",{className:"mt-2 text-left text-sm",children:e.ip}),(0,l.jsxs)("div",{className:"flex-1 text-right text-gray-500 text-xs",children:[e.totalMessages.toLocaleString()," requests in last minute"]})]}),(0,l.jsx)("div",{className:"bg-gray-200 w-full h-0.5 my-5 rounded-2xl"}),(0,l.jsx)("button",{className:"flex w-full items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-600 rounded-lg hover:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-80",children:(0,l.jsx)("span",{className:"mx-1 justify-center flex-1",children:"Reboot"})})]})}),(0,l.jsx)("h1",{className:"font-bold flex justify-center text-2xl",children:"Clients"}),(0,l.jsx)("div",{className:"bg-gray-200 w-full h-0.5 mb-3 mt-1 rounded-2xl"}),(0,l.jsx)("div",{className:"my-6 mx-auto w-full flex-1 h-96 overflow-y-scroll",children:e.clientDataList.map((e,s)=>(0,l.jsx)(r,{index:s+1,ip:e.clientIP,messages:e.messages.toLocaleString()},s+1))})]})}):(0,l.jsx)("div",{children:"Loading..."})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=8964)}),_N_E=e.O()}]);