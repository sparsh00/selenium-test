(function(){function u(n){typeof sj_log=="function"&&n&&sj_log("CI.ClaritySydney","Full","".concat(n.projectId,"|").concat(n.userId,"|").concat(n.sessionId,"|").concat(n.pageNum))}function i(){n||(setTimeout(f,r),n=!0)}function t(n,t){sj_evt.bind(n,t,!0,null,!0)}function f(){var n,t,i;(function(n,t,i,r,u,f,e){n[i]=n[i]||function(){(n[i].q=n[i].q||[]).push(arguments)};f=t.createElement(r);f.async=1;f.crossorigin="anonymous";f.src="https://www.clarity.ms/tag/"+u;e=t.getElementsByTagName(r)[0];e.parentNode.insertBefore(f,e)})(window,document,"clarity","script","5w3v3h29ks");n=_w.clarity;sj_evt.bind("ajax.load",function(){return _w.clarity("start")});sj_evt.bind("ajax.unload",function(){return _w.clarity("stop")});sj_evt.bind("MapsProcessingStarted",function(){return _w.clarity("pause")});sj_evt.bind("MapsProcessingFinished",function(){return _w.clarity("resume")});sj_evt.bind("clarity.trigger",function(n){var t=n[1]||"";typeof sj_log=="function"&&sj_log("CI.ClarityTrigger","Upgrade",t);_w.clarity("upgrade",t)},!0);n("metadata",u);t=typeof sj_cook!="undefined"?sj_cook.get("MUID"):null;i=t?t.indexOf("="):-1;n("set","customVersion","1.0");typeof _G!="undefined"?(n("set","g","defined"),n("set","vertical",_G.V),n("set","market",_G.Mkt),n("set","flight",_G.cfs?_G.cfs.split(","):[]),n("set","answers",_G.cai),t&&i>0&&n("identify",t.substr(i+1),_G.SID,_G.IG)):n("set","g","undefined")}var r=3e3,n=!1;_w.AM&&_w.AM.push("clarity.ms");typeof _G!="undefined"&&(_G.V==="web"?(_G.aad||(t("aad:ssoattempt",function(){n=!0}),t("onP1",i)),t("aad:tokenfailed",function(){n=!1;i()})):_G.baw||t("onP1",function(){return i}))})()