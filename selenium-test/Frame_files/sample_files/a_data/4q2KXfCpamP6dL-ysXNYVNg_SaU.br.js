(function(){for(var t=_d.getElementsByTagName("a"),i=!1,u,r=_G!==undefined&&_G.NTT!==undefined?_G.NTT:null,n=0;n<t.length;n++)typeof t[n]=="undefined"||!t[n].hasAttribute("target")||t[n].getAttribute("target")!="_blank"||!t[n].hasAttribute("href")||typeof t[n].getAttribute("href")=="undefined"||typeof t[n].getAttribute("href").startsWith=="undefined"||t[n].getAttribute("href").indexOf("javascript")>=0||t[n].getAttribute("href").indexOf("/rebates/welcome")>=0||t[n].hasAttribute("class")&&t[n].getAttribute("class").indexOf("b_ignbt")>=0||t[n].hasAttribute("onclick")&&t[n].getAttribute("onclick").indexOf("return false;")>=0||sj_be(t[n],"click",function(n){for(var t=sj_et(n);t!=null;){if(t.tagName.toLowerCase()=="a"){r!=null&&(u=sb_st(function(){i=!0},r));break}t=t.parentNode}});r!=null&&(window.history.scrollRestoration="auto",_d.addEventListener("visibilitychange",function(){if(_d.visibilityState==="visible"&&(sj_evt.fire("openNewTabonP1"),sb_ct(u),i&&(window.history.scrollRestoration="manual",i=!1,window.location.href.indexOf("/search")>=0))){Log&&Log.Log&&Log.Log("NTRef","Refresh","");var n=window.location.href+(window.location.href.indexOf("&ntref=1")<0?"&ntref=1":"");window.location.href=n}}))})()