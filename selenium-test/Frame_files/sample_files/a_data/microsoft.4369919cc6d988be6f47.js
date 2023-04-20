/*! For license information please see microsoft.4369919cc6d988be6f47.js.LICENSE.txt */
(self.webpackChunk_msnews_msnews_experiences=self.webpackChunk_msnews_msnews_experiences||[]).push([["microsoft"],{51992:function(t,e,i){"use strict";i.d(e,{Z:function(){return L}});var n=i(45362),o=i(26454),r=i(6709),a=i(27981),s=i(92173),l=i(74539);function c(t,e){for(var i=[],n=null,o=t.getNext();o;){var r=o.getPlugin();r&&(n&&(0,l.mf)(n.setNextPlugin)&&(0,l.mf)(r.processTelemetry)&&n.setNextPlugin(r),(0,l.mf)(r.isInitialized)&&r.isInitialized()||i.push(r),n=r,o=o.getNext())}(0,l.tO)(i,(function(i){i.initialize(t.getCfg(),t.core(),e,t.getNext())}))}function d(t){return t.sort((function(t,e){var i=0,n=(0,l.mf)(e.processTelemetry);return(0,l.mf)(t.processTelemetry)?i=n?t.priority-e.priority:1:n&&(i=-1),i}))}var u=500,h=function(t){function e(){var i,n=t.call(this)||this;function o(t){t&&t.length>0&&(function(t){(0,l.tO)(t,(function(t){t.priority<u&&(0,l._y)("Channel has invalid priority"+t.identifier)}))}(t=t.sort((function(t,e){return t.priority-e.priority}))),i.push(t))}return n.identifier="ChannelControllerPlugin",n.priority=500,(0,r.Z)(e,n,(function(t,e){t.setNextPlugin=function(t){},t.processTelemetry=function(t,e){i&&(0,l.tO)(i,(function(i){i.length>0&&n._getTelCtx(e).createNew(i).processNext(t)}))},t.getChannelControls=function(){return i},t.initialize=function(n,r,a){t.isInitialized()||(e.initialize(n,r,a),function(t,e){i=[],t&&(0,l.tO)(t,(function(t){return o(t)}));if(e){var n=[];(0,l.tO)(e,(function(t){t.priority>u&&n.push(t)})),o(n)}}((n||{}).channels,a),(0,l.tO)(i,(function(t){return c(new s.V(t,n,r),a)})))}})),n}var i;return(0,n.ne)(e,t),e._staticInit=(i=e.prototype,(0,l.l_)(i,"ChannelControls",i.getChannelControls),void(0,l.l_)(i,"channelQueue",i.getChannelControls)),e}(a.i),p=i(206),g=i(26932),f=i(85282),v=i(29179),m=i(80221),b=i(33220);function y(t,e){return new g.Jk(e)}var w=function t(){var e,i,a,u,w,x=!1;(0,r.Z)(t,this,(function(t){t._extensions=new Array,i=new h,t.logger=new m.AQ({loggingLevelConsole:p.X.CRITICAL}),e=[],t.isInitialized=function(){return x},t.initialize=function(e,o,r,u){t.isInitialized()&&(0,l._y)("Core should not be initialized more than once"),e&&!(0,l.le)(e.instrumentationKey)||(0,l._y)("Please provide instrumentation key"),a=u,t._notificationManager=u,t.config=e||{},u&&!0!==t.config.disableDbgExt&&u.addNotificationListener((0,b.p)(e)),t.config.enablePerfMgr&&(0,l.sO)(t.config,"createPerfMgr",y),e.extensions=(0,l.le)(e.extensions)?[]:e.extensions,(0,l.qK)(e,v.F).NotificationManager=u,r&&(t.logger=r);var h=[];h.push.apply(h,(0,n.$h)((0,n.$h)([],o,!1),e.extensions,!1)),h=d(h);var p=[],g=[],f={};(0,l.tO)(h,(function(t){((0,l.le)(t)||(0,l.le)(t.initialize))&&(0,l._y)("Extensions must provide callback to initialize");var e=t.priority,n=t.identifier;t&&e&&((0,l.le)(f[e])?f[e]=n:r.warnToConsole("Two extensions have same priority #"+e+" - "+f[e]+", "+n)),!e||e<i.priority?p.push(t):g.push(t)})),h.push(i),p.push(i),h=d(h),t._extensions=h,c(new s.V([i],e,t),h),c(new s.V(p,e,t),h),t._extensions=p,0===t.getTransmissionControls().length&&(0,l._y)("No channels available"),x=!0,t.releaseQueue()},t.getTransmissionControls=function(){return i.getChannelControls()},t.track=function(i){(0,l.sO)(i,v.z,t.config.instrumentationKey,null,l.F),(0,l.sO)(i,"time",(0,l.Y6)(new Date),null,l.F),(0,l.sO)(i,"ver","4.0",null,l.le),t.isInitialized()?t.getProcessTelContext().processNext(i):e.push(i)},t.getProcessTelContext=function(){var e=t._extensions,n=e;return e&&0!==e.length||(n=[i]),new s.V(n,t.config,t)},t.getNotifyMgr=function(){return a||(a=(0,o.pu)({addNotificationListener:function(t){},removeNotificationListener:function(t){},eventsSent:function(t){},eventsDiscarded:function(t,e){},eventsSendRequest:function(t,e){}}),t._notificationManager=a),a},t.getCookieMgr=function(){return w||(w=(0,f.Nz)(t.config,t.logger)),w},t.setCookieMgr=function(t){w=t},t.getPerfMgr=function(){return u||t.config&&t.config.enablePerfMgr&&(0,l.mf)(t.config.createPerfMgr)&&(u=t.config.createPerfMgr(t,t.getNotifyMgr())),u||(0,g.j5)()},t.setPerfMgr=function(t){u=t},t.eventCnt=function(){return e.length},t.releaseQueue=function(){e.length>0&&((0,l.tO)(e,(function(e){t.getProcessTelContext().processNext(e)})),e=[])}}))},x=i(60851),C=i(4248),$=i(91254),k=function(t){function e(){var i=t.call(this)||this;return(0,r.Z)(e,i,(function(t,e){t.initialize=function(i,n,o,r){i&&!i.endpointUrl&&(i.endpointUrl="https://browser.events.data.microsoft.com/OneCollector/1.0/"),t.getWParam=function(){return $.x9?0:-1};try{e.initialize(i,n,o,r)}catch(e){t.logger.throwInternal(p.X.CRITICAL,C.p3.FailedToInitializeSDK,"Initialization Failed: "+(0,x.eU)(e)+"\n - Note: Channels must be provided through config.channels only")}},t.track=function(t){var i=t;if(i){var n=i.ext=i.ext||{};n.sdk=n.sdk||{},n.sdk.ver=$.vs}e.track(i)}})),i}return(0,n.ne)(e,t),e}(w),L=k},4248:function(t,e,i){"use strict";i.d(e,{mh:function(){return r},p3:function(){return l},vi:function(){return s},zU:function(){return a}});var n=i(45362),o=i(206),r={NotSet:0,Pii_DistinguishedName:1,Pii_GenericData:2,Pii_IPV4Address:3,Pii_IPv6Address:4,Pii_MailSubject:5,Pii_PhoneNumber:6,Pii_QueryString:7,Pii_SipAddress:8,Pii_SmtpAddress:9,Pii_Identity:10,Pii_Uri:11,Pii_Fqdn:12,Pii_IPV4AddressLegacy:13,CustomerContent_GenericContent:32},a={Normal:1,CostDeferred:2,RealTime:3,Immediate:4},s={Unspecified:0,String:1,Int32:2,UInt32:3,Int64:4,UInt64:5,Double:6,Bool:7,Guid:8,DateTime:9},l=(0,n.uc)((0,n.uc)({},o.v),{AuthHandShakeError:501,AuthRedirectFail:502,BrowserCannotReadLocalStorage:503,BrowserCannotWriteLocalStorage:504,BrowserDoesNotSupportLocalStorage:505,CannotParseBiBlobValue:506,CannotParseDataAttribute:507,CVPluginNotAvailable:508,DroppedEvent:509,ErrorParsingAISessionCookie:510,ErrorProvidedChannels:511,FailedToGetCookies:512,FailedToInitializeCorrelationVector:513,FailedToInitializeSDK:514,InvalidContentBlob:515,InvalidCorrelationValue:516,SessionRenewalDateIsZero:517,SendPostOnCompleteFailure:518,PostResponseHandler:519,SDKNotInitialized:520})},91254:function(t,e,i){"use strict";i.d(e,{Do:function(){return C},Sn:function(){return m},Vv:function(){return w},cm:function(){return $},dH:function(){return v},ej:function(){return x},hK:function(){return L},if:function(){return T},jM:function(){return b},l7:function(){return k},mJ:function(){return I},ot:function(){return O},vs:function(){return h},x9:function(){return f},yj:function(){return y}});var n,o=i(21908),r=i(26454),a=i(4248),s=i(60851),l=i(74539),c=i(85282),d=i(39860),u=i(42774),h="1DS-Web-JS-3.1.10",p="withCredentials",g=((n={})[0]=a.vi.Unspecified,n[2]=a.vi.Double,n[1]=a.vi.String,n[3]=a.vi.Bool,n[4098]=a.vi.Double,n[4097]=a.vi.String,n[4099]=a.vi.Bool,n),f=Boolean((0,s.Me)()),v=Boolean((0,s.Jj)());function m(t){return!(""===t||(0,l.le)(t))}function b(t){if(t){var e=t.indexOf("-");if(e>-1)return t.substring(0,e)}return""}function y(t,e,i){if(!e&&!m(e)||"string"!=typeof t)return null;var n=typeof e;if("string"===n||"number"===n||"boolean"===n||(0,l.kJ)(e))e={value:e};else if("object"!==n||e.hasOwnProperty("value")){if((0,l.le)(e.value)||""===e.value||!(0,l.HD)(e.value)&&!(0,l.hj)(e.value)&&!(0,l.jn)(e.value)&&!(0,l.kJ)(e.value))return null}else e={value:i?JSON.stringify(e):e};if((0,l.kJ)(e.value)&&!S(e.value))return null;if(!(0,l.le)(e.kind)){if((0,l.kJ)(e.value)||!D(e.kind))return null;e.value=e.value.toString()}return e}function w(t,e,i){var n=-1;if(!(0,l.o8)(t))if(e>0&&(32===e?n=8192:e<=13&&(n=e<<5)),function(t){if(t>=0&&t<=9)return!0;return!1}(i))-1===n&&(n=0),n|=i;else{var o=g[F(t)]||-1;-1!==n&&-1!==o?n|=o:o===a.vi.Double&&(n=o)}return n}function x(t){return(0,c.p7)(null)?C((0,c.JP)(null),t):""}function C(t,e,i){var n;return void 0===i&&(i=!0),t&&(n=t.get(e),i&&n&&decodeURIComponent&&(n=decodeURIComponent(n))),n||""}function $(t){void 0===t&&(t="D");var e=(0,d.GW)();return"B"===t?e="{"+e+"}":"P"===t?e="("+e+")":"N"===t&&(e=e.replace(/-/g,"")),e}function k(t,e,i,n,r){var a={},s=!1,c=0,d=arguments.length,u=Object[o.hB],h=arguments;for("[object Boolean]"===u.toString.call(h[0])&&(s=h[0],c++);c<d;c++){t=h[c];(0,l.rW)(t,(function(t,e){s&&e&&(0,l.Kn)(e)?(0,l.kJ)(e)?(a[t]=a[t]||[],(0,l.tO)(e,(function(e,i){e&&(0,l.Kn)(e)?a[t][i]=k(!0,a[t][i],e):a[t][i]=e}))):a[t]=k(!0,a[t],e):a[t]=e}))}return a}var L=d.Jj;function D(t){return t===a.mh.NotSet||t>a.mh.NotSet&&t<=a.mh.Pii_IPV4AddressLegacy||t===a.mh.CustomerContent_GenericContent}function S(t){return t.length>0}function T(t,e){var i=t;i.timings=i.timings||{},i.timings.processTelemetryStart=i.timings.processTelemetryStart||{},i.timings.processTelemetryStart[e]=L()}function F(t){var e=0;if(null!=t){var i=typeof t;"string"===i?e=1:"number"===i?e=2:"boolean"===i?e=3:i===o.fK&&(e=4,(0,l.kJ)(t)?(e=4096,t.length>0&&(e|=F(t[0]))):(0,l.nr)(t,"value")&&(e=8192|F(t.value)))}return e}o.jA,o.fK,o.jA,l.tO,l.UA,l.Mr,l.Xz,l.FY,l.Y6,s.b$,l.HD,l.hj,l.jn,l.mf,l.kJ,l.Kn,l.nd,s.MF,l.Y6,s.cp,c.p7,c.UY,l.l_,d.c9,d.Ib,l.Id,l.rW,l.Ym,l.o8,l.le,l.nr,l.mf,l.Kn,l.J_,l.kJ,l.VZ,l.HD,l.hj,l.jn,l.Y6,l.tO,l.UA,l.Mr,l.Xz,l.nd,r.pu,l.FY,l.l_,d.Ib,l.m6,s.w1,d.GW,d.Jj,d.pZ,u.az,u._l,u.CN,u.F6,d.DO;function I(){return!!(0,s.a8)("chrome")}function O(t,e,i,n,o){function r(t,e,i){try{t[e]=i}catch(t){}}void 0===n&&(n=!1),void 0===o&&(o=!1);var a=new XMLHttpRequest;return n&&r(a,"Microsoft_ApplicationInsights_BypassAjaxInstrumentation",n),i&&r(a,p,i),a.open(t,e,!o),i&&r(a,p,i),a}},206:function(t,e,i){"use strict";var n;i.d(e,{X:function(){return n},v:function(){return o}}),function(t){t[t.CRITICAL=1]="CRITICAL",t[t.WARNING=2]="WARNING"}(n||(n={}));var o={BrowserDoesNotSupportLocalStorage:0,BrowserCannotReadLocalStorage:1,BrowserCannotReadSessionStorage:2,BrowserCannotWriteLocalStorage:3,BrowserCannotWriteSessionStorage:4,BrowserFailedRemovalFromLocalStorage:5,BrowserFailedRemovalFromSessionStorage:6,CannotSendEmptyTelemetry:7,ClientPerformanceMathError:8,ErrorParsingAISessionCookie:9,ErrorPVCalc:10,ExceptionWhileLoggingError:11,FailedAddingTelemetryToBuffer:12,FailedMonitorAjaxAbort:13,FailedMonitorAjaxDur:14,FailedMonitorAjaxOpen:15,FailedMonitorAjaxRSC:16,FailedMonitorAjaxSend:17,FailedMonitorAjaxGetCorrelationHeader:18,FailedToAddHandlerForOnBeforeUnload:19,FailedToSendQueuedTelemetry:20,FailedToReportDataLoss:21,FlushFailed:22,MessageLimitPerPVExceeded:23,MissingRequiredFieldSpecification:24,NavigationTimingNotSupported:25,OnError:26,SessionRenewalDateIsZero:27,SenderNotInitialized:28,StartTrackEventFailed:29,StopTrackEventFailed:30,StartTrackFailed:31,StopTrackFailed:32,TelemetrySampledAndNotSent:33,TrackEventFailed:34,TrackExceptionFailed:35,TrackMetricFailed:36,TrackPVFailed:37,TrackPVFailedCalc:38,TrackTraceFailed:39,TransmissionFailed:40,FailedToSetStorageBuffer:41,FailedToRestoreStorageBuffer:42,InvalidBackendResponse:43,FailedToFixDepricatedValues:44,InvalidDurationValue:45,TelemetryEnvelopeInvalid:46,CreateEnvelopeError:47,CannotSerializeObject:48,CannotSerializeObjectNonSerializable:49,CircularReferenceDetected:50,ClearAuthContextFailed:51,ExceptionTruncated:52,IllegalCharsInName:53,ItemNotInArray:54,MaxAjaxPerPVExceeded:55,MessageTruncated:56,NameTooLong:57,SampleRateOutOfRange:58,SetAuthContextFailed:59,SetAuthContextFailedAccountName:60,StringValueTooLong:61,StartCalledMoreThanOnce:62,StopCalledWithoutStart:63,TelemetryInitializerFailed:64,TrackArgumentsNotSpecified:65,UrlTooLong:66,SessionStorageBufferFull:67,CannotAccessCookie:68,IdTooLong:69,InvalidEvent:70,FailedMonitorAjaxSetRequestHeader:71,SendBrowserInfoOnUserInit:72,PluginException:73,NotificationException:74,SnippetScriptLoadFailure:99,InvalidInstrumentationKey:100,CannotParseAiBlobValue:101,InvalidContentBlob:102,TrackPageActionEventFailed:103,FailedAddingCustomDefinedRequestContext:104,InMemoryStorageBufferFull:105}},27981:function(t,e,i){"use strict";i.d(e,{i:function(){return a}});var n=i(92173),o=i(74539),r=i(29179),a=function(){function t(){var t=this,e=!1,i=null,a=null;t.core=null,t.diagLog=function(e){return t._getTelCtx(e).diagLog()},t.isInitialized=function(){return e},t.setInitialized=function(t){e=t},t.setNextPlugin=function(t){a=t},t.processNext=function(t,e){e?e.processNext(t):a&&(0,o.mf)(a.processTelemetry)&&a.processTelemetry(t,null)},t._getTelCtx=function(e){void 0===e&&(e=null);var o=e;if(!o){var r=i||new n.V(null,{},t.core);o=a&&a.getPlugin?r.createNew(null,a.getPlugin):r.createNew(null,a)}return o},t._baseTelInit=function(s,l,c,d){s&&(0,o.sO)(s,r.F,[],null,o.le),!d&&l&&(d=l.getProcessTelContext().getNext());var u=a;a&&a.getPlugin&&(u=a.getPlugin()),t.core=l,i=new n.V(d,s,l,u),e=!0}}return t.prototype.initialize=function(t,e,i,n){this._baseTelInit(t,e,i,n)},t}()},29179:function(t,e,i){"use strict";i.d(e,{F:function(){return o},z:function(){return n}});var n="iKey",o="extensionConfig"},85282:function(t,e,i){"use strict";i.d(e,{JP:function(){return b},Nz:function(){return y},UY:function(){return D},kj:function(){return v},p7:function(){return w}});var n=i(206),o=i(60851),r=i(74539),a="toGMTString",s="toUTCString",l="expires",c="",d=null,u=null,h=null,p=(0,o.Me)(),g={},f={};function v(t,e){var i=y._ckMgr||f._ckMgr;return i||(i=y._ckMgr=y(t,e),f._ckMgr=i),i}function m(t){return!t||t.isEnabled()}function b(t,e){var i;if(t)i=t.getCookieMgr();else if(e){var n=e.cookieCfg;i=n._ckMgr?n._ckMgr:y(e)}return i||(i=v(e,(t||{}).logger)),i}function y(t,e){var i=function(t){var e=t.cookieCfg=t.cookieCfg||{};if((0,r.sO)(e,"domain",t.cookieDomain,r.BX,r.le),(0,r.sO)(e,"path",t.cookiePath||"/",null,r.le),(0,r.le)(e.enabled)){var i=void 0;(0,r.o8)(t.isCookieUseDisabled)||(i=!t.isCookieUseDisabled),(0,r.o8)(t.disableCookiesUsage)||(i=!t.disableCookiesUsage),e.enabled=i}return e}(t||f),n=i.path||"/",d=i.domain,h=!1!==i.enabled,p={isEnabled:function(){var t=h&&w(e),i=f._ckMgr;return t&&i&&p!==i&&(t=m(i)),t},setEnabled:function(t){h=!1!==t},set:function(t,e,h,g,f){var v=!1;if(m(p)){var b={},y=(0,r.nd)(e||c),w=y.indexOf(";");if(-1!==w&&(y=(0,r.nd)(e.substring(0,w)),b=x(e.substring(w+1))),(0,r.sO)(b,"domain",g||d,r.fQ,r.o8),!(0,r.le)(h)){var k=(0,o.w1)();if((0,r.o8)(b.expires)){var S=(0,r.m6)()+1e3*h;if(S>0){var T=new Date;T.setTime(S),(0,r.sO)(b,l,C(T,k?a:s)||C(T,k?a:s)||c,r.fQ)}}k||(0,r.sO)(b,"max-age",c+h,null,r.o8)}var F=(0,o.k$)();F&&"https:"===F.protocol&&((0,r.sO)(b,"secure",null,null,r.o8),null===u&&(u=!D(((0,o.jW)()||{}).userAgent)),u&&(0,r.sO)(b,"SameSite","None",null,r.o8)),(0,r.sO)(b,"path",f||n,null,r.o8),(i.setCookie||L)(t,$(y,b)),v=!0}return v},get:function(t){var e=c;return m(p)&&(e=(i.getCookie||k)(t)),e},del:function(t,e){var i=!1;return m(p)&&(i=p.purge(t,e)),i},purge:function(t,n){var r,a=!1;if(w(e)){var s=((r={}).path=n||"/",r.expires="Thu, 01 Jan 1970 00:00:01 GMT",r);(0,o.w1)()||(s["max-age"]="0"),(i.delCookie||L)(t,$(c,s)),a=!0}return a}};return p._ckMgr=p,p}function w(t){if(null===d){d=!1;try{d=void 0!==(p||{}).cookie}catch(e){t&&t.throwInternal(n.X.WARNING,n.v.CannotAccessCookie,"Cannot access document.cookie - "+(0,r.jj)(e),{exception:(0,o.eU)(e)})}}return d}function x(t){var e={};if(t&&t.length){var i=(0,r.nd)(t).split(";");(0,r.tO)(i,(function(t){if(t=(0,r.nd)(t||c)){var i=t.indexOf("=");-1===i?e[t]=null:e[(0,r.nd)(t.substring(0,i))]=(0,r.nd)(t.substring(i+1))}}))}return e}function C(t,e){return(0,r.mf)(t[e])?t[e]():null}function $(t,e){var i=t||c;return(0,r.rW)(e,(function(t,e){i+="; "+t+((0,r.le)(e)?c:"="+e)})),i}function k(t){var e=c;if(p){var i=p.cookie||c;h!==i&&(g=x(i),h=i),e=(0,r.nd)(g[t]||c)}return e}function L(t,e){p&&(p.cookie=t+"="+e)}function D(t){return!!(0,r.HD)(t)&&(!(!(0,r._Q)(t,"CPU iPhone OS 12")&&!(0,r._Q)(t,"iPad; CPU OS 12"))||(!!((0,r._Q)(t,"Macintosh; Intel Mac OS X 10_14")&&(0,r._Q)(t,"Version/")&&(0,r._Q)(t,"Safari"))||(!(!(0,r._Q)(t,"Macintosh; Intel Mac OS X 10_14")||!(0,r.Id)(t,"AppleWebKit/605.1.15 (KHTML, like Gecko)"))||(!(!(0,r._Q)(t,"Chrome/5")&&!(0,r._Q)(t,"Chrome/6"))||(!(!(0,r._Q)(t,"UnrealEngine")||(0,r._Q)(t,"Chrome"))||!(!(0,r._Q)(t,"UCBrowser/12")&&!(0,r._Q)(t,"UCBrowser/11")))))))}},39860:function(t,e,i){"use strict";i.d(e,{DO:function(){return x},GW:function(){return b},Ib:function(){return p},Jj:function(){return y},TJ:function(){return v},c9:function(){return f},nD:function(){return m},pZ:function(){return w}});var n,o=i(26454),r=i(85282),a=i(60851),s=i(74539),l=i(42774),c="visibilitychange",d="pagehide",u="pageshow",h=null;function p(t,e){var i=!1,n=(0,a.Jj)();n&&(i=(0,s.pZ)(n,t,e),i=(0,s.pZ)(n.body,t,e)||i);var o=(0,a.Me)();return o&&(i=(0,s.pZ)(o,t,e)||i),i}function g(t,e,i){var n=!1;if(e&&t&&(0,s.kJ)(t)){var o=[];(0,s.tO)(t,(function(t){(0,s.HD)(t)&&(i&&-1!==(0,s.UA)(i,t)?o.push(t):n=p(t,e)||n)})),!n&&o.length>0&&(n=g(o,e))}return n}function f(t,e){return g(["beforeunload","unload","pagehide"],t,e)}function v(t,e){var i=!1;return e&&-1!==(0,s.UA)(e,d)||(i=p(d,t)),e&&-1!==(0,s.UA)(e,c)||(i=p(c,(function(e){var i=(0,a.Me)();t&&i&&"hidden"===i.visibilityState&&t(e)}))||i),!i&&e&&(i=v(t)),i}function m(t,e){var i=!1;return e&&-1!==(0,s.UA)(e,u)||(i=p(u,t)),e&&-1!==(0,s.UA)(e,c)||(i=p(c,(function(e){var i=(0,a.Me)();t&&i&&"visible"===i.visibilityState&&t(e)}))||i),!i&&e&&(i=m(t)),i}function b(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace($,(function(t){var e=0|(0,l.az)(15);return("x"===t?e:3&e|8).toString(16)}))}function y(){var t=(0,a.r)();return t&&t.now?t.now():(0,s.m6)()}function w(t){void 0===t&&(t=22);for(var e=(0,l._l)()>>>0,i=0,n="";n.length<t;)i++,n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63&e),e>>>=6,5===i&&(e=((0,l._l)()<<2&4294967295|3&e)>>>0,i=0);return n}function x(){for(var t,e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],i="",n=0;n<4;n++)i+=e[15&(t=(0,l._l)())]+e[t>>4&15]+e[t>>8&15]+e[t>>12&15]+e[t>>16&15]+e[t>>20&15]+e[t>>24&15]+e[t>>28&15];var o=e[8+(3&(0,l._l)())|0];return i.substr(0,8)+i.substr(9,4)+"4"+i.substr(13,3)+o+i.substr(16,3)+i.substr(19,12)}var C={_canUseCookies:void 0,isTypeof:s.Ym,isUndefined:s.o8,isNullOrUndefined:s.le,hasOwnProperty:s.nr,isFunction:s.mf,isObject:s.Kn,isDate:s.J_,isArray:s.kJ,isError:s.VZ,isString:s.HD,isNumber:s.hj,isBoolean:s.jn,toISOString:s.Y6,arrForEach:s.tO,arrIndexOf:s.UA,arrMap:s.Mr,arrReduce:s.Xz,strTrim:s.nd,objCreate:o.pu,objKeys:s.FY,objDefineAccessors:s.l_,addEventHandler:p,dateNow:s.m6,isIE:a.w1,disableCookies:function(){k().setEnabled(!1)},newGuid:b,perfNow:y,newId:w,randomValue:l.az,random32:l._l,mwcRandomSeed:l.CN,mwcRandom32:l.F6,generateW3CId:x},$=/[xy]/g;s.pZ,s.pZ,s.pD,s.pD;function k(t,e){var i=(0,r.kj)(t,e),o=C._canUseCookies;return null===h&&(h=[],n=o,(0,s.l_)(C,"_canUseCookies",(function(){return n}),(function(t){n=t,(0,s.tO)(h,(function(e){e.setEnabled(t)}))}))),-1===(0,s.UA)(h,i)&&h.push(i),(0,s.jn)(o)&&i.setEnabled(o),(0,s.jn)(n)&&i.setEnabled(n),i}},33220:function(t,e,i){"use strict";i.d(e,{j:function(){return l},p:function(){return c}});var n,o=i(60851),r=["eventsSent","eventsDiscarded","eventsSendRequest","perfEvent"],a=null;function s(t,e){return function(){var i=arguments,n=l(e);if(n){var o=n.listener;o&&o[t]&&o[t].apply(o,i)}}}function l(t){var e,i=a;return i||!0===t.disableDbgExt||(i=a||((e=(0,o.a8)("Microsoft"))&&(a=e.ApplicationInsights),a)),i?i.ChromeDbgExt:null}function c(t){if(!n){n={};for(var e=0;e<r.length;e++)n[r[e]]=s(r[e],t)}return n}},80221:function(t,e,i){"use strict";i.d(e,{AQ:function(){return h},vH:function(){return u}});var n=i(206),o=i(60851),r=i(6709),a=i(74539),s=i(33220);function l(t){return t?'"'+t.replace(/\"/g,"")+'"':""}function c(t,e){var i=(0,o.dr)();if(i){var n="log";i[t]&&(n=t),(0,a.mf)(i[n])&&i[n](e)}}var d=function(){function t(t,e,i,n){void 0===i&&(i=!1);var r=this;r.messageId=t,r.message=(i?"AI: ":"AI (Internal): ")+t;var a="";(0,o.nS)()&&(a=(0,o.xA)().stringify(n));var s=(e?" message:"+l(e):"")+(n?" props:"+l(a):"");r.message+=s}return t.dataType="MessageData",t}();function u(t,e){return(t||{}).logger||new h(e)}var h=function t(e){this.identifier="DiagnosticLogger",this.queue=[];var i=0,o={};(0,r.Z)(t,this,(function(t){function r(t,i){var n=e[t];return(0,a.le)(n)?i:n}function l(t,i){var n=(0,s.j)(e);n&&n.diagLog&&n.diagLog(t,i)}(0,a.le)(e)&&(e={}),t.consoleLoggingLevel=function(){return r("loggingLevelConsole",0)},t.telemetryLoggingLevel=function(){return r("loggingLevelTelemetry",1)},t.maxInternalMessageLimit=function(){return r("maxMessageLimit",25)},t.enableDebugExceptions=function(){return r("enableDebugExceptions",!1)},t.throwInternal=function(e,i,r,s,c){void 0===c&&(c=!1);var u=new d(i,r,c,s);if(t.enableDebugExceptions())throw u;var h=e===n.X.CRITICAL?"errorToConsole":"warnToConsole";if((0,a.o8)(u.message))l("throw"+(e===n.X.CRITICAL?"Critical":"Warning"),u);else{var p=t.consoleLoggingLevel();if(c){var g=+u.messageId;!o[g]&&p>=e&&(t[h](u.message),o[g]=!0)}else p>=e&&t[h](u.message);t.logInternalMessage(e,u)}},t.warnToConsole=function(t){c("warn",t),l("warning",t)},t.errorToConsole=function(t){c("error",t),l("error",t)},t.resetInternalMessageCount=function(){i=0,o={}},t.logInternalMessage=function(e,r){if(!(i>=t.maxInternalMessageLimit())){var a=!0,s="AITR_"+r.messageId;if(o[s]?a=!1:o[s]=!0,a&&(e<=t.telemetryLoggingLevel()&&(t.queue.push(r),i++,l(e===n.X.CRITICAL?"error":"warn",r)),i===t.maxInternalMessageLimit())){var c="Internal events throttle limit per PageView reached for this app.",u=new d(n.v.MessageLimitPerPVExceeded,c,!1);t.queue.push(u),e===n.X.CRITICAL?t.errorToConsole(c):t.warnToConsole(c)}}}}))}},60851:function(t,e,i){"use strict";i.d(e,{JO:function(){return R},Jj:function(){return b},MF:function(){return H},MX:function(){return S},Me:function(){return y},Z3:function(){return P},a8:function(){return v},b$:function(){return F},cp:function(){return M},dr:function(){return $},eU:function(){return O},gz:function(){return T},jW:function(){return x},k$:function(){return C},nS:function(){return L},r:function(){return k},w1:function(){return I},xA:function(){return D}});var n=i(21908),o=i(26454),r=i(74539),a="window",s="JSON",l="msie",c="trident/",d=null,u=null,h=!1,p=null,g=null;function f(t,e){var i=!1;if(t){try{if(!(i=e in t)){var o=t[n.hB];o&&(i=e in o)}}catch(t){}if(!i)try{var a=new t;i=!(0,r.o8)(a[e])}catch(t){}}return i}function v(t){var e=(0,o.Rd)();return e&&e[t]?e[t]:t===a&&m()?window:null}function m(){return Boolean(typeof window===n.fK&&window)}function b(){return m()?window:v(a)}function y(){return Boolean(typeof document===n.fK&&document)?document:v("document")}function w(){return Boolean(typeof navigator===n.fK&&navigator)}function x(){return w()?navigator:v("navigator")}function C(t){if(t&&h){var e=v("__mockLocation");if(e)return e}return typeof location===n.fK&&location?location:v("location")}function $(){return typeof console!==n.jA?console:v("console")}function k(){return v("performance")}function L(){return Boolean(typeof JSON===n.fK&&JSON||null!==v(s))}function D(){return L()?JSON||v(s):null}function S(){return v("crypto")}function T(){return v("msCrypto")}function F(){var t=x();return!(!t||!t.product)&&"ReactNative"===t.product}function I(){var t=x();if(t&&(t.userAgent!==u||null===d)){var e=((u=t.userAgent)||"").toLowerCase();d=(0,r._Q)(e,l)||(0,r._Q)(e,c)}return d}function O(t){var e=Object[n.hB].toString.call(t),i="";return"[object Error]"===e?i="{ stack: '"+t.stack+"', message: '"+t.message+"', name: '"+t.name+"'":L()&&(i=D().stringify(t)),e+i}function H(){return null===g&&(g=w()&&Boolean(x().sendBeacon)),g}function R(t){var e=!1;try{e=!!v("fetch");var i=v("Request");e&&t&&i&&(e=f(i,"keepalive"))}catch(t){}return e}function M(){return null===p&&(p="undefined"!=typeof XDomainRequest)&&P()&&(p=p&&!f(v("XMLHttpRequest"),"withCredentials")),p}function P(){var t=!1;try{t=!!v("XMLHttpRequest")}catch(t){}return t}},74539:function(t,e,i){"use strict";i.d(e,{Ax:function(){return _},BX:function(){return d},F:function(){return z},FY:function(){return M},HD:function(){return $},Id:function(){return m},J_:function(){return w},Kn:function(){return h},Mr:function(){return F},UA:function(){return T},VZ:function(){return C},Xz:function(){return I},Y6:function(){return D},Ym:function(){return s},_Q:function(){return y},_y:function(){return j},fQ:function(){return N},hj:function(){return k},jj:function(){return E},jn:function(){return L},kJ:function(){return x},l_:function(){return P},le:function(){return c},m6:function(){return A},mf:function(){return p},nd:function(){return O},nr:function(){return u},o8:function(){return l},pD:function(){return f},pZ:function(){return g},qK:function(){return V},rW:function(){return v},sO:function(){return B},tO:function(){return S},xe:function(){return b}});var n=i(21908),o=i(26454),r=n.RJ;n.Pw.freeze,n.Pw.seal;function a(t){return n.V4.toString.call(t)}function s(t,e){return typeof t===e}function l(t){return void 0===t||typeof t===n.jA}function c(t){return null===t||l(t)}function d(t){return!c(t)}function u(t,e){return t&&n.CY.call(t,e)}function h(t){return typeof t===n.fK}function p(t){return typeof t===n.cb}function g(t,e,i,n){void 0===n&&(n=!1);var o=!1;if(!c(t))try{c(t.addEventListener)?c(t.attachEvent)||(t.attachEvent("on"+e,i),o=!0):(t.addEventListener(e,i,n),o=!0)}catch(t){}return o}function f(t,e,i,n){if(void 0===n&&(n=!1),!c(t))try{c(t.removeEventListener)?c(t.detachEvent)||t.detachEvent("on"+e,i):t.removeEventListener(e,i,n)}catch(t){}}function v(t,e){if(t)for(var i in t)n.CY.call(t,i)&&e.call(t,i,t[i])}function m(t,e){if(t&&e){var i=e.length,n=t.length;if(t===e)return!0;if(n>=i){for(var o=n-1,r=i-1;r>=0;r--){if(t[o]!=e[r])return!1;o--}return!0}}return!1}function b(t,e){var i=!1;if(t&&e){var n=e.length;if(t===e)return!0;if(t.length>=n){for(var o=0;o<n;o++)if(t[o]!==e[o])return!1;i=!0}}return i}function y(t,e){return!(!t||!e)&&-1!==t.indexOf(e)}function w(t){return"[object Date]"===a(t)}function x(t){return"[object Array]"===a(t)}function C(t){return"[object Error]"===a(t)}function $(t){return"string"==typeof t}function k(t){return"number"==typeof t}function L(t){return"boolean"==typeof t}function D(t){if(t){if(t.toISOString)return t.toISOString();if(w(t)){var e=function(t){var e=String(t);return 1===e.length&&(e="0"+e),e};return t.getUTCFullYear()+"-"+e(t.getUTCMonth()+1)+"-"+e(t.getUTCDate())+"T"+e(t.getUTCHours())+":"+e(t.getUTCMinutes())+":"+e(t.getUTCSeconds())+"."+String((t.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}}}function S(t,e,i){var n=t.length;try{for(var o=0;o<n&&(!(o in t)||-1!==e.call(i||t,t[o],o,t));o++);}catch(t){}}function T(t,e,i){var n=t.length,o=i||0;try{for(var r=Math.max(o>=0?o:n-Math.abs(o),0);r<n;r++)if(r in t&&t[r]===e)return r}catch(t){}return-1}function F(t,e,i){var n=t.length,o=i||t,r=new Array(n);try{for(var a=0;a<n;a++)a in t&&(r[a]=e.call(o,t[a],t))}catch(t){}return r}function I(t,e,i){var n,o=t.length,r=0;if(arguments.length>=3)n=i;else{for(;r<o&&!(r in t);)r++;n=t[r++]}for(;r<o;)r in t&&(n=e(n,t[r],r,t)),r++;return n}function O(t){return"string"!=typeof t?t:t.replace(/^\s+|\s+$/g,"")}var H=!{toString:null}.propertyIsEnumerable("toString"),R=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];function M(t){var e=typeof t;e===n.cb||e===n.fK&&null!==t||(0,o.ZU)("objKeys called on non-object");var i=[];for(var r in t)t&&n.CY.call(t,r)&&i.push(r);if(H)for(var a=R.length,s=0;s<a;s++)t&&n.CY.call(t,R[s])&&i.push(R[s]);return i}function P(t,e,i,n){if(r)try{var o={enumerable:!0,configurable:!0};return i&&(o.get=i),n&&(o.set=n),r(t,e,o),!0}catch(t){}return!1}function A(){var t=Date;return t.now?t.now():(new t).getTime()}function E(t){return C(t)?t.name:""}function B(t,e,i,n,o){var r=i;return t&&((r=t[e])===i||o&&!o(r)||n&&!n(i)||(r=i,t[e]=r)),r}function V(t,e,i){var n;return t?!(n=t[e])&&c(n)&&(n=l(i)?{}:i,t[e]=n):n=l(i)?{}:i,n}function z(t){return!t}function N(t){return!!t}function j(t){throw new Error(t)}function _(t){return t&&(t=(0,n.Pw)(n.rl?(0,n.rl)({},t):t)),t}},26932:function(t,e,i){"use strict";i.d(e,{Jk:function(){return s},Lm:function(){return c},j5:function(){return d}});var n=i(6709),o=i(74539),r=null,a=function(){function t(e,i,n){var r,a=this,s=!1;(a.start=(0,o.m6)(),a.name=e,a.isAsync=n,a.isChildEvt=function(){return!1},(0,o.mf)(i))&&(s=(0,o.l_)(a,"payload",(function(){return!r&&(0,o.mf)(i)&&(r=i(),i=null),r})));a.getCtx=function(e){return e?e===t.ParentContextKey||e===t.ChildrenContextKey?a[e]:(a.ctx||{})[e]:null},a.setCtx=function(e,i){if(e)if(e===t.ParentContextKey)a[e]||(a.isChildEvt=function(){return!0}),a[e]=i;else if(e===t.ChildrenContextKey)a[e]=i;else{(a.ctx=a.ctx||{})[e]=i}},a.complete=function(){var e=0,n=a.getCtx(t.ChildrenContextKey);if((0,o.kJ)(n))for(var r=0;r<n.length;r++){var l=n[r];l&&(e+=l.time)}a.time=(0,o.m6)()-a.start,a.exTime=a.time-e,a.complete=function(){},!s&&(0,o.mf)(i)&&(a.payload=i())}}return t.ParentContextKey="parent",t.ChildrenContextKey="childEvts",t}(),s=function t(e){this.ctx={},(0,n.Z)(t,this,(function(t){t.create=function(t,e,i){return new a(t,e,i)},t.fire=function(t){t&&(t.complete(),e&&(0,o.mf)(e.perfEvent)&&e.perfEvent(t))},t.setCtx=function(e,i){e&&((t.ctx=t.ctx||{})[e]=i)},t.getCtx=function(e){return(t.ctx||{})[e]}}))},l="CoreUtils.doPerf";function c(t,e,i,n,r){if(t){var s=t;if((0,o.mf)(s.getPerfMgr)&&(s=s.getPerfMgr()),s){var c=void 0,d=s.getCtx(l);try{if(c=s.create(e(),n,r)){if(d&&c.setCtx&&(c.setCtx(a.ParentContextKey,d),d.getCtx&&d.setCtx)){var u=d.getCtx(a.ChildrenContextKey);u||(u=[],d.setCtx(a.ChildrenContextKey,u)),u.push(c)}return s.setCtx(l,c),i(c)}}catch(t){c&&c.setCtx&&c.setCtx("exception",t)}finally{c&&s.fire(c),s.setCtx(l,d)}}}return i()}function d(){return r}},92173:function(t,e,i){"use strict";i.d(e,{V:function(){return d}});var n=i(80221),o=i(26932),r=i(206),a=i(74539),s=i(60851),l=function(t,e){var i=this,n=null,l=(0,a.mf)(t.processTelemetry),c=(0,a.mf)(t.setNextPlugin);i._hasRun=!1,i.getPlugin=function(){return t},i.getNext=function(){return n},i.setNext=function(t){n=t},i.processTelemetry=function(a,d){d||(d=e);var u=t?t.identifier:"TelemetryPluginChain";(0,o.Lm)(d?d.core():null,(function(){return u+":processTelemetry"}),(function(){if(t&&l){i._hasRun=!0;try{d.setNext(n),c&&t.setNextPlugin(n),n&&(n._hasRun=!1),t.processTelemetry(a,d)}catch(i){var e=n&&n._hasRun;n&&e||d.diagLog().throwInternal(r.X.CRITICAL,r.v.PluginException,"Plugin ["+t.identifier+"] failed during processTelemetry - "+(0,s.eU)(i)),n&&!e&&n.processTelemetry(a,d)}}else n&&(i._hasRun=!0,n.processTelemetry(a,d))}),(function(){return{item:a}}),!a.sync)}};function c(t,e){var i=[];if(t&&t.length>0)for(var n=null,o=0;o<t.length;o++){var r=t[o];if(r&&(0,a.mf)(r.processTelemetry)){var s=new l(r,e);i.push(s),n&&n.setNext(s),n=s}}return i.length>0?i[0]:null}var d=function t(e,i,o,r){var s=this,l=null;null!==r&&(e&&(0,a.mf)(e.getPlugin)?l=function(t,e,i){var n=[],o=!i;if(t)for(;t;){var r=t.getPlugin();(o||r===i)&&(o=!0,n.push(r)),t=t.getNext()}return o||n.push(i),c(n,e)}(e,s,r||e.getPlugin()):r?l=function(t,e,i){var n=t,o=!1;return i&&t&&(n=[],(0,a.tO)(t,(function(t){(o||t===i)&&(o=!0,n.push(t))}))),i&&!o&&(n||(n=[]),n.push(i)),c(n,e)}(e,s,r):(0,a.o8)(r)&&(l=c(e,s))),s.core=function(){return o},s.diagLog=function(){return(0,n.vH)(o,i)},s.getCfg=function(){return i},s.getExtCfg=function(t,e){var n;if(void 0===e&&(e={}),i){var o=i.extensionConfig;o&&t&&(n=o[t])}return n||e},s.getConfig=function(t,e,n){var o;void 0===n&&(n=!1);var r=s.getExtCfg(t,null);return r&&!(0,a.le)(r[e])?o=r[e]:i&&!(0,a.le)(i[e])&&(o=i[e]),(0,a.le)(o)?n:o},s.hasNext=function(){return null!=l},s.getNext=function(){return l},s.setNext=function(t){l=t},s.processNext=function(t){var e=l;e&&(l=e.getNext(),e.processTelemetry(t,s))},s.createNew=function(e,n){return void 0===e&&(e=null),new t(e||l,i,o,n)}}},42774:function(t,e,i){"use strict";i.d(e,{CN:function(){return g},F6:function(){return f},_l:function(){return p},az:function(){return h}});var n=i(60851),o=i(74539),r=4294967296,a=4294967295,s=!1,l=123456789,c=987654321;function d(t){t<0&&(t>>>=0),l=123456789+t&a,c=987654321-t&a,s=!0}function u(){try{var t=2147483647&(0,o.m6)();d((Math.random()*r^t)+t)}catch(t){}}function h(t){return t>0?Math.floor(p()/a*(t+1))>>>0:0}function p(t){var e,i=(0,n.MX)()||(0,n.gz)();return i&&i.getRandomValues?e=i.getRandomValues(new Uint32Array(1))[0]&a:(0,n.w1)()?(s||u(),e=f()&a):e=Math.floor(r*Math.random()|0),t||(e>>>=0),e}function g(t){t?d(t):u()}function f(t){var e=((c=36969*(65535&c)+(c>>16)&a)<<16)+(65535&(l=18e3*(65535&l)+(l>>16)&a))>>>0&a|0;return t||(e>>>=0),e}},6709:function(t,e){"use strict";var i="constructor",n="prototype",o="function",r="_dynClass",a="_unknown_",s=Object,l=s.getPrototypeOf,c=0;function d(t,e){return t&&s.prototype.hasOwnProperty.call(t,e)}function u(t){return t&&(t===s.prototype||t===Array.prototype)}function h(t){return u(t)||t===Function.prototype}function p(t){if(t){if(l)return l(t);var e=t.__proto__||t.prototype||(t.constructor?t.constructor.prototype:null);if(e)return e}return null}function g(t,e){var i=[],n=s.getOwnPropertyNames;if(n)i=n(t);else for(var o in t)"string"==typeof o&&d(t,o)&&i.push(o);if(i&&i.length>0)for(var r=0;r<i.length;r++)e(i[r])}function f(t,e,n){return e!==i&&typeof t[e]===o&&(n||d(t,e))}function v(t){throw new TypeError("DynamicProto: "+t)}function m(t,e){for(var i=t.length-1;i>=0;i--)if(t[i]===e)return!0;return!1}function b(t,e,i,n){var a=null;if(t&&d(i,r)){var s=t._dynInstFuncs||{};if((a=(s[i._dynClass]||{})[e])||v("Missing ["+e+"] "+o),!a._dynInstChk&&!1!==s._dynInstChk){for(var l=!d(t,e),c=p(t),u=[];l&&c&&!h(c)&&!m(u,c);){var g=c[e];if(g){l=g===n;break}u.push(c),c=p(c)}try{l&&(t[e]=a),a._dynInstChk=1}catch(t){s._dynInstChk=!1}}}return a}function y(t,e,i){var n=e[t];return n===i&&(n=p(e)[t]),typeof n!==o&&v("["+t+"] is not a "+o),n}function w(t,e,i,n,o){if(!u(t)){var r=i._dynInstFuncs=i._dynInstFuncs||{},a=r[e]=r[e]||{};!1!==r._dynInstChk&&(r._dynInstChk=!!o),g(i,(function(e){f(i,e,!1)&&i[e]!==n[e]&&(a[e]=i[e],delete i[e],(!d(t,e)||t[e]&&!t[e]._isDynProxy)&&(t[e]=function(t,e){var i=function(){return(b(this,e,t,i)||y(e,t,i)).apply(this,arguments)};return i._isDynProxy=1,i}(t,e)))}))}}function x(t,e){return d(t,n)?t.name||e||a:((t||{}).constructor||{}).name||e||a}function C(t,e,i,o){d(t,n)||v("theClass is an invalid class definition.");var a=t.prototype;(function(t,e){if(l)for(var i=[],n=p(e);n&&!h(n)&&!m(i,n);){if(n===t)return!0;i.push(n),n=p(n)}return!1})(a,e)||v("["+x(t)+"] is not in class hierarchy of ["+x(e)+"]");var s=null;d(a,r)?s=a._dynClass:(s="_dynCls$"+x(t,"_")+"$"+c,c++,a._dynClass=s);var u=C._dfOpts,b=!!u.useBaseInst;b&&o&&void 0!==o.useBaseInst&&(b=!!o.useBaseInst);var y=function(t){var e={};return g(t,(function(i){!e[i]&&f(t,i,!1)&&(e[i]=t[i])})),e}(e),$=function(t,e,i,n){function o(t,e,i){var o=e[i];if(o._isDynProxy&&n){var r=t._dynInstFuncs||{};!1!==r._dynInstChk&&(o=(r[e._dynClass]||{})[i]||o)}return function(){return o.apply(t,arguments)}}var r={};g(i,(function(t){r[t]=o(e,i,t)}));for(var a=p(t),s=[];a&&!h(a)&&!m(s,a);)g(a,(function(t){!r[t]&&f(a,t,!l)&&(r[t]=o(e,a,t))})),s.push(a),a=p(a);return r}(a,e,y,b);i(e,$);var k=!!l&&!!u.setInstFuncs;k&&o&&(k=!!o.setInstFuncs),w(a,s,e,y,!1!==k)}C._dfOpts={setInstFuncs:!0,useBaseInst:!0},e.Z=C},98544:function(t,e,i){"use strict";i.d(e,{Z:function(){return xt}});var n=i(45362),o=0,r=1,a=4,s=5,l=i(91254),c=i(26932),d=i(60851),u=i(39860),h=i(4248),p=i(74539),g=i(206),f=i(27981),v="REAL_TIME",m="POST",b="drop",y="send",w="requeue",x="rspFail",C="application/x-json-stream",$="cache-control",k="content-type",L="kill-duration",D="time-delta-millis",S="AuthMsaDeviceTicket";function T(t){var e=(t.ext||{}).intweb;return e&&(0,l.Sn)(e.msfpc)?e.msfpc:null}function F(t){for(var e=null,i=0;null===e&&i<t.length;i++)e=T(t[i]);return e}var I=function(){function t(e,i){var n=i?[].concat(i):[],o=this,r=F(n);o.iKey=function(){return e},o.Msfpc=function(){return r||""},o.count=function(){return n.length},o.events=function(){return n},o.addEvent=function(t){return!!t&&(n.push(t),r||(r=T(t)),!0)},o.split=function(i,o){var a;if(i<n.length){var s=n.length-i;(0,p.le)(o)||(s=o<s?o:s),a=n.splice(i,s),r=F(n)}return new t(e,a)}}return t.create=function(e,i){return new t(e,i)},t}(),O=i(21908),H="constructor",R="prototype",M="function",P="_dynClass",A="_unknown_",E=Object,B=E.getPrototypeOf,V=0;function z(t,e){return t&&E.prototype.hasOwnProperty.call(t,e)}function N(t){return t&&(t===E.prototype||t===Array.prototype)}function j(t){return N(t)||t===Function.prototype}function _(t){if(t){if(B)return B(t);var e=t.__proto__||t.prototype||(t.constructor?t.constructor.prototype:null);if(e)return e}return null}function U(t,e){var i=[],n=E.getOwnPropertyNames;if(n)i=n(t);else for(var o in t)"string"==typeof o&&z(t,o)&&i.push(o);if(i&&i.length>0)for(var r=0;r<i.length;r++)e(i[r])}function q(t,e,i){return e!==H&&typeof t[e]===M&&(i||z(t,e))}function W(t){throw new TypeError("DynamicProto: "+t)}function Z(t,e){for(var i=t.length-1;i>=0;i--)if(t[i]===e)return!0;return!1}function G(t,e,i,n){var o=null;if(t&&z(i,P)){var r=t._dynInstFuncs||{};if((o=(r[i._dynClass]||{})[e])||W("Missing ["+e+"] "+M),!o._dynInstChk&&!1!==r._dynInstChk){for(var a=!z(t,e),s=_(t),l=[];a&&s&&!j(s)&&!Z(l,s);){var c=s[e];if(c){a=c===n;break}l.push(s),s=_(s)}try{a&&(t[e]=o),o._dynInstChk=1}catch(t){r._dynInstChk=!1}}}return o}function Q(t,e,i){var n=e[t];return n===i&&(n=_(e)[t]),typeof n!==M&&W("["+t+"] is not a "+M),n}function K(t,e,i,n,o){if(!N(t)){var r=i._dynInstFuncs=i._dynInstFuncs||{},a=r[e]=r[e]||{};!1!==r._dynInstChk&&(r._dynInstChk=!!o),U(i,(function(e){q(i,e,!1)&&i[e]!==n[e]&&(a[e]=i[e],delete i[e],(!z(t,e)||t[e]&&!t[e]._isDynProxy)&&(t[e]=function(t,e){var i=function(){return(G(this,e,t,i)||Q(e,t,i)).apply(this,arguments)};return i._isDynProxy=1,i}(t,e)))}))}}function X(t,e){return z(t,R)?t.name||e||A:((t||{}).constructor||{}).name||e||A}function Y(t,e,i,n){z(t,R)||W("theClass is an invalid class definition.");var o=t.prototype;(function(t,e){if(B)for(var i=[],n=_(e);n&&!j(n)&&!Z(i,n);){if(n===t)return!0;i.push(n),n=_(n)}return!1})(o,e)||W("["+X(t)+"] is not in class hierarchy of ["+X(e)+"]");var r=null;z(o,P)?r=o._dynClass:(r="_dynCls$"+X(t,"_")+"$"+V,V++,o._dynClass=r);var a=Y._dfOpts,s=!!a.useBaseInst;s&&n&&void 0!==n.useBaseInst&&(s=!!n.useBaseInst);var l=function(t){var e={};return U(t,(function(i){!e[i]&&q(t,i,!1)&&(e[i]=t[i])})),e}(e),c=function(t,e,i,n){function o(t,e,i){var o=e[i];if(o._isDynProxy&&n){var r=t._dynInstFuncs||{};!1!==r._dynInstChk&&(o=(r[e._dynClass]||{})[i]||o)}return function(){return o.apply(t,arguments)}}var r={};U(i,(function(t){r[t]=o(e,i,t)}));for(var a=_(t),s=[];a&&!j(a)&&!Z(s,a);)U(a,(function(t){!r[t]&&q(a,t,!B)&&(r[t]=o(e,a,t))})),s.push(a),a=_(a);return r}(o,e,l,s);i(e,c);var d=!!B&&!!a.setInstFuncs;d&&n&&(d=!!n.setInstFuncs),K(o,r,e,l,!1!==d)}Y._dfOpts={setInstFuncs:!0,useBaseInst:!0};var J=Y,tt=2e6,et=Math.min(tt,65e3),it=/\./,nt=function t(e,i,n,o){var r="data",a="baseData",s=!!o,d=i,u={};J(t,this,(function(t){function i(t,e,o,r,a,c,h){(0,p.rW)(t,(function(t,g){var f=null;if(g||(0,l.Sn)(g)){var v=o,m=t,b=a,y=e;if(s&&!r&&it.test(t)){var w=t.split("."),x=w.length;if(x>1){b&&(b=b.slice());for(var C=0;C<x-1;C++){var $=w[C];y=y[$]=y[$]||{},v+="."+$,b&&b.push($)}m=w[x-1]}}var k=r&&function(t,e){var i=u[t];return void 0===i&&(t.length>=7&&(i=(0,p.xe)(t,"ext.metadata")||(0,p.xe)(t,"ext.web")),u[t]=i),i}(v);if(f=!k&&d&&d.handleField(v,m)?d.value(v,m,g,n):(0,l.yj)(m,g,n)){var L=f.value;if(y[m]=L,c&&c(b,m,f),h&&"object"==typeof L&&!(0,p.kJ)(L)){var D=b;D&&(D=D.slice()).push(m),i(g,L,v+"."+m,r,D,c,h)}}}}))}t.createPayload=function(t,e,i,n,o,r){return{apiKeys:[],payloadBlob:"",overflow:null,sizeExceed:[],failedEvts:[],batches:[],numEvents:0,retryCnt:t,isTeardown:e,isSync:i,isBeacon:n,sendType:r,sendReason:o}},t.appendPayload=function(i,n,o){var r=i&&n&&!i.overflow;return r&&(0,c.Lm)(e,(function(){return"Serializer:appendPayload"}),(function(){for(var e=n.events(),r=i.payloadBlob,a=i.numEvents,s=!1,l=[],c=[],d=i.isBeacon,u=d?65e3:3984588,h=d?et:tt,g=0,f=0;g<e.length;){var v=e[g];if(v){if(a>=o){i.overflow=n.split(g);break}var m=t.getEventBlob(v);if(m&&m.length<=h){var b=m.length;if(r.length+b>u){i.overflow=n.split(g);break}r&&(r+="\n"),r+=m,++f>20&&(r.substr(0,1),f=0),s=!0,a++}else m?l.push(v):c.push(v),e.splice(g,1),g--}g++}if(l&&l.length>0&&i.sizeExceed.push(I.create(n.iKey(),l)),c&&c.length>0&&i.failedEvts.push(I.create(n.iKey(),c)),s){i.batches.push(n),i.payloadBlob=r,i.numEvents=a;var y=n.iKey();-1===(0,p.UA)(i.apiKeys,y)&&i.apiKeys.push(y)}}),(function(){return{payload:i,theBatch:{iKey:n.iKey(),evts:n.events()},max:o}})),r},t.getEventBlob=function(t){try{return(0,c.Lm)(e,(function(){return"Serializer.getEventBlob"}),(function(){var e={};e.name=t.name,e.time=t.time,e.ver=t.ver,e.iKey="o:"+(0,l.jM)(t.iKey);var n={},o=t.ext;o&&(e.ext=n,(0,p.rW)(o,(function(t,e){i(e,n[t]={},"ext."+t,!0,null,null,!0)})));var s=e.data={};s.baseType=t.baseType;var c=s.baseData={};return i(t.baseData,c,a,!1,[a],(function(t,e,i){ot(n,t,e,i)}),!0),i(t.data,s,r,!1,[],(function(t,e,i){ot(n,t,e,i)}),!0),JSON.stringify(e)}),(function(){return{item:t}}))}catch(t){return null}}}))};function ot(t,e,i,n){if(n&&t){var o=(0,l.Vv)(n.value,n.kind,n.propertyType);if(o>-1){var r=t.metadata;r||(r=t.metadata={f:{}});var a=r.f;if(a||(a=r.f={}),e)for(var s=0;s<e.length;s++){var c=e[s];a[c]||(a[c]={f:{}});var d=a[c].f;d||(d=a[c].f={}),a=d}a=a[i]={},(0,p.kJ)(n.value)?a.a={t:o}:a.t=o}}}var rt,at,st,lt=function(){function t(){}return t.shouldRetryForStatus=function(t){return!(t>=300&&t<500&&408!=t&&429!=t||501==t||505==t)},t.getMillisToBackoffForRetry=function(t){var e,i=Math.floor(1200*Math.random())+2400;return e=Math.pow(2,t)*i,Math.min(e,6e5)},t}(),ct=function t(){var e={};J(t,this,(function(t){t.setKillSwitchTenants=function(t,i){if(t&&i)try{var n=(a=t.split(","),s=[],a&&(0,p.tO)(a,(function(t){s.push((0,p.nd)(t))})),s);if("this-request-only"===i)return n;for(var o=1e3*parseInt(i,10),r=0;r<n.length;++r)e[n[r]]=(0,p.m6)()+o}catch(t){return[]}var a,s;return[]},t.isTenantKilled=function(t){var i=e,n=(0,p.nd)(t);return void 0!==i[n]&&i[n]>(0,p.m6)()||(delete i[n],!1)}}))},dt=function t(){var e=!0,i=!0,n=!0,o="use-collector-delta",r=!1;J(t,this,(function(t){t.allowRequestSending=function(){return e},t.firstRequestSent=function(){n&&(n=!1,r||(e=!1))},t.shouldAddClockSkewHeaders=function(){return i},t.getClockSkewHeaderValue=function(){return o},t.setClockSkew=function(t){r||(t?(o=t,i=!0,r=!0):i=!1,e=!0)}}))},ut=((rt={})[1]=w,rt[100]=w,rt[200]="sent",rt[8004]=b,rt[8003]=b,rt),ht={},pt={};function gt(t){try{return t.responseText}catch(t){}return""}function ft(t,e){var i=!1;if(t&&e){var n=(0,p.FY)(t);if(n&&n.length>0)for(var o=e.toLowerCase(),r=0;r<n.length;r++){var a=n[r];if(a&&(0,p.nr)(e,a)&&a.toLowerCase()===o){i=!0;break}}}return i}function vt(t,e,i,n){e&&i&&i.length>0&&(n&&ht[e]?(t.hdrs[ht[e]]=i,t.useHdrs=!0):t.url+="&"+e+"="+i)}st=S,ht[at=S]=st,pt[st]=at;var mt=function t(e,i,n,o){this._responseHandlers=[];var r,a,s,u,f="?cors=true&"+k.toLowerCase()+"="+C,v=new ct,w=!1,S=new dt,T=!1,F=0,I=!0,H=[],R={},M=[],P=null,A=!1,E=!1,B=!1;J(t,this,(function(t){var V=!0;function z(t,e){for(var i=0,n=null,o=0;null==n&&o<t.length;)1===(i=t[o])?(0,d.cp)()?n=N:(0,d.Z3)()&&(n=_):2===i&&(0,d.JO)(e)?n=j:T&&3===i&&(0,d.MF)()&&(n=q),o++;return n?{_transport:i,_isSync:e,sendPOST:n}:null}function N(t,e,i){var n=new XDomainRequest;n.open(m,t.urlString),n.onload=function(){var t=gt(n);U(e,200,{},t),ot(t)},n.onerror=function(){U(e,400,{})},n.ontimeout=function(){U(e,500,{})},n.onprogress=function(){},i?n.send(t.data):r._setTimeoutOverride((function(){n.send(t.data)}),0)}function j(t,e,i){var n,o=!1,r=!1,a=((n={body:t.data,method:m}).Microsoft_ApplicationInsights_BypassAjaxInstrumentation=!0,n);i&&(a.keepalive=!0,2===t._sendReason&&(o=!0)),V&&(a.credentials="include"),t.headers&&(0,p.FY)(t.headers).length>0&&(a.headers=t.headers),fetch(t.urlString,a).then((function(t){var i={},n="";t.headers&&t.headers.forEach((function(t,e){i[e]=t})),t.body&&t.text().then((function(t){n=t})),r||(r=!0,U(e,t.status,i,n),ot(n))})).catch((function(t){r||(r=!0,U(e,0,{}))})),o&&!r&&(r=!0,U(e,200,{}))}function _(t,e,i){function n(t,e,i){if(!t[i]&&e&&e.getResponseHeader){var n=e.getResponseHeader(i);n&&(t[i]=(0,p.nd)(n))}return t}function o(t){var e={};return t.getAllResponseHeaders?e=function(t){var e={};if((0,p.HD)(t)){var i=(0,p.nd)(t).split(/[\r\n]+/);(0,p.tO)(i,(function(t){if(t){var i=t.indexOf(": ");if(-1!==i){var n=(0,p.nd)(t.substring(0,i)).toLowerCase(),o=(0,p.nd)(t.substring(i+1));e[n]=o}else e[(0,p.nd)(t)]=1}}))}return e}(t.getAllResponseHeaders()):(e=n(e,t,D),e=n(e,t,L),e=n(e,t,"kill-duration-seconds")),e}function r(t,i){U(e,t.status,o(t),i)}var a=(0,l.ot)(m,t.urlString,V,!0,i);(0,p.rW)(t.headers,(function(t,e){a.setRequestHeader(t,e)})),a.onload=function(){var t=gt(a);r(a,t),ot(t)},a.onerror=function(){r(a)},a.ontimeout=function(){r(a)},a.send(t.data)}function U(t,e,i,n){try{t(e,i,n)}catch(t){r.diagLog().throwInternal(g.X.WARNING,h.p3.SendPostOnCompleteFailure,(0,d.eU)(t))}}function q(t,e,i){var n=200,o=t._thePayload;try{var a=(0,d.jW)();if(!a.sendBeacon(t.urlString,t.data))if(o){var s=[];(0,p.tO)(o.batches,(function(e){if(s&&e&&e.count()>0){for(var i=e.events(),n=0;n<i.length;n++)if(!a.sendBeacon(t.urlString,P.getEventBlob(i[n]))){s.push(e.split(n));break}}else s.push(e.split(0))})),rt(s,8003,o.sendType,!0)}else n=0}catch(t){r.diagLog().warnToConsole("Failed to send telemetry using sendBeacon API. Ex:"+t),n=0}finally{U(e,n,{},"")}}function W(t){return 2===t||3===t}function Z(t){return E&&W(t)&&(t=2),t}function G(){return!w&&F<i}function Q(){var t=M;return M=[],t}function K(t,e,i){var n=!1;return t&&t.length>0&&!w&&a[e]&&P&&(n=0!==e||G()&&(i>0||S.allowRequestSending())),n}function X(t){var e={};return t&&(0,p.tO)(t,(function(t,i){e[i]={iKey:t.iKey(),evts:t.events()}})),e}function Y(t,i,n,o,u){if(t&&0!==t.length)if(w)rt(t,1,o);else{o=Z(o);try{var p=t,f=0!==o;(0,c.Lm)(s,(function(){return"HttpManager:_sendBatches"}),(function(r){r&&(t=t.slice(0));for(var s=[],c=null,h=(0,l.hK)(),p=a[o]||(f?a[1]:a[0]),g=(E||W(o)||p&&3===p._transport)&&!I&&T&&(0,d.MF)();K(t,o,i);){var m=t.shift();m&&m.count()>0&&(v.isTenantKilled(m.iKey())?s.push(m):(c=c||P.createPayload(i,n,f,g,u,o),P.appendPayload(c,m,e)?null!==c.overflow&&(t=[c.overflow].concat(t),c.overflow=null,et(c,h,(0,l.hK)(),u),h=(0,l.hK)(),c=null):(et(c,h,(0,l.hK)(),u),h=(0,l.hK)(),t=[m].concat(t),c=null)))}c&&et(c,h,(0,l.hK)(),u),t.length>0&&(M=t.concat(M)),rt(s,8004,o)}),(function(){return{batches:X(p),retryCount:i,isTeardown:n,isSynchronous:f,sendReason:u,useSendBeacon:W(o),sendType:o}}),!f)}catch(t){r.diagLog().throwInternal(g.X.WARNING,h.p3.CannotSerializeObject,"Unexpected Exception sending batch: "+(0,d.eU)(t))}}}function J(t,e){var i={url:f,hdrs:{},useHdrs:!1};i.hdrs=(0,l.l7)(i.hdrs,R),i.useHdrs=(0,p.FY)(i.hdrs).length>0,vt(i,"client-id","NO_AUTH",e),vt(i,"client-version",l.vs,e);var n="";(0,p.tO)(t.apiKeys,(function(t){n.length>0&&(n+=","),n+=t})),vt(i,"apikey",n,e),vt(i,"upload-time",(0,p.m6)().toString(),e);var o=function(t){for(var e=0;e<t.batches.length;e++){var i=t.batches[e].Msfpc();if(i)return encodeURIComponent(i)}return""}(t);if((0,l.Sn)(o)&&(i.url+="&ext.intweb.msfpc="+o),S.shouldAddClockSkewHeaders()&&vt(i,"time-delta-to-apply-millis",S.getClockSkewHeaderValue(),e),s.getWParam){var r=s.getWParam();r>=0&&(i.url+="&w="+r)}for(var a=0;a<H.length;a++)i.url+="&"+H[a].name+"="+H[a].value;return i}function tt(t,e,i){t[e]=t[e]||{},t[e][r.identifier]=i}function et(e,i,o,u){if(e&&e.payloadBlob&&e.payloadBlob.length>0){var h=!!t.sendHook,g=a[e.sendType];!W(e.sendType)&&e.isBeacon&&2===e.sendReason&&(g=a[2]||a[3]||g);var f=B;(e.isBeacon||3===g._transport)&&(f=!1);var m=J(e,f);f=f||m.useHdrs;var b=(0,l.hK)();(0,c.Lm)(s,(function(){return"HttpManager:_doPayloadSend"}),(function(){for(var a=0;a<e.batches.length;a++)for(var y=e.batches[a].events(),w=0;w<y.length;w++){var x=y[w];if(A){var L=x.timings=x.timings||{};tt(L,"sendEventStart",b),tt(L,"serializationStart",i),tt(L,"serializationCompleted",o)}x.sendAttempt>0?x.sendAttempt++:x.sendAttempt=1}rt(e.batches,1e3+(u||0),e.sendType,!0);var T={data:e.payloadBlob,urlString:m.url,headers:m.hdrs,_thePayload:e,_sendReason:u};f&&(ft(T.headers,$)||(T.headers[$]="no-cache, no-store"),ft(T.headers,k)||(T.headers["content-type"]=C));var H=null;g&&(H=function(i){S.firstRequestSent();var o=function(i,o){!function(e,i,o,a){var s=9e3,c=null,d=!1,u=!1;try{var h=!0;if(typeof e!==O.jA){if(i){S.setClockSkew(i[D]);var g=i["kill-duration"]||i["kill-duration-seconds"];(0,p.tO)(v.setKillSwitchTenants(i["kill-tokens"],g),(function(t){(0,p.tO)(o.batches,(function(e){if(e.iKey()===t){c=c||[];var i=e.split(0);o.numEvents-=i.count(),c.push(i)}}))}))}if(200==e)return void(s=200);(!lt.shouldRetryForStatus(e)||o.numEvents<=0)&&(h=!1),s=9e3+e%1e3}if(h){s=100;var f=o.retryCnt;0===o.sendType&&(f<n?(d=!0,it((function(){0===o.sendType&&F--,Y(o.batches,f+1,o.isTeardown,E?2:o.sendType,5)}),E,lt.getMillisToBackoffForRetry(f))):u=!0)}}finally{d||(S.setClockSkew(),function(e,i,n,o){try{o&&r._backOffTransmission(),200===i&&(o||e.isSync||r._clearBackOff(),function(t){if(A){var e=(0,l.hK)();(0,p.tO)(t,(function(t){t&&t.count()>0&&function(t,e){A&&(0,p.tO)(t,(function(t){tt(t.timings=t.timings||{},"sendEventCompleted",e)}))}(t.events(),e)}))}}(e.batches)),rt(e.batches,i,e.sendType,!0)}finally{0===e.sendType&&(F--,5!==n&&t.sendQueuedRequests(e.sendType,n))}}(o,s,a,u)),rt(c,8004,o.sendType)}}(i,o,e,u)},a=e.isTeardown||e.isSync;try{g.sendPOST(i,o,a),t.sendListener&&t.sendListener(T,i,a,e.isBeacon)}catch(t){r.diagLog().warnToConsole("Unexpected exception sending payload. Ex:"+(0,d.eU)(t)),U(o,0,{})}}),(0,c.Lm)(s,(function(){return"HttpManager:_doPayloadSend.sender"}),(function(){if(H)if(0===e.sendType&&F++,h&&!e.isBeacon&&3!==g._transport){var i={data:T.data,urlString:T.urlString,headers:(0,l.l7)({},T.headers)},n=!1;(0,c.Lm)(s,(function(){return"HttpManager:_doPayloadSend.sendHook"}),(function(){try{t.sendHook(i,(function(t){n=!0,I||t._thePayload||(t._thePayload=t._thePayload||T._thePayload,t._sendReason=t._sendReason||T._sendReason),H(t)}),e.isSync||e.isTeardown)}catch(t){n||H(T)}}))}else H(T)}))}),(function(){return{thePayload:e,serializationStart:i,serializationCompleted:o,sendReason:u}}),e.isSync)}e.sizeExceed&&e.sizeExceed.length>0&&rt(e.sizeExceed,8003,e.sendType),e.failedEvts&&e.failedEvts.length>0&&rt(e.failedEvts,8002,e.sendType)}function it(t,e,i){e?t():r._setTimeoutOverride(t,i)}function ot(e){var i=t._responseHandlers;try{for(var n=0;n<i.length;n++)try{i[n](e)}catch(t){r.diagLog().throwInternal(g.X.CRITICAL,h.p3.PostResponseHandler,"Response handler failed: "+t)}if(e){var o=JSON.parse(e);(0,l.Sn)(o.webResult)&&(0,l.Sn)(o.webResult.msfpc)&&u.set("MSFPC",o.webResult.msfpc,31536e3)}}catch(t){}}function rt(t,e,i,n){if(t&&t.length>0&&o){var a=o[(u=e,p=ut[u],(0,l.Sn)(p)||(p="oth",u>=9e3&&u<=9999?p=x:u>=8e3&&u<=8999?p=b:u>=1e3&&u<=1999&&(p=y)),p)];if(a){var d=0!==i;(0,c.Lm)(s,(function(){return"HttpManager:_sendBatchesNotification"}),(function(){it((function(){try{a.call(o,t,e,d,i)}catch(t){r.diagLog().throwInternal(g.X.CRITICAL,h.p3.NotificationException,"send request notification failed: "+t)}}),n||d,0)}),(function(){return{batches:X(t),reason:e,isSync:d,sendSync:n,sendType:i}}),!d)}}var u,p}t.initialize=function(t,e,i,n,o){var l;o||(o={}),f=t+f,B=!(0,p.o8)(o.avoidOptions)&&!o.avoidOptions,s=e,u=e.getCookieMgr(),A=!s.config.disableEventTimings;var c=!!s.config.enableCompoundKey;r=i;var h=o.valueSanitizer,g=o.stringifyObjects;(0,p.o8)(o.enableCompoundKey)||(c=!!o.enableCompoundKey),T=!(0,d.b$)(),P=new nt(s,h,g,c);var v=n;if(!n){I=!1;var m=(0,d.k$)();m&&m.protocol&&"file:"===m.protocol.toLowerCase()&&(V=!1);var b=[];b=(0,d.b$)()?[2,1]:[1,2,3];var y=o.transports;y&&((0,p.hj)(y)?b=[y].concat(b):(0,p.kJ)(y)&&(b=y.concat(b))),n=z(b,!1),v=z(b,!0),n||r.diagLog().warnToConsole("No available transport to send events")}(l={})[0]=n,l[1]=v||z([1,2,3],!0),l[2]=z([3,2,1],!0)||v,l[3]=z([2,3,1],!0)||v,a=l},t._getDbgPlgTargets=function(){return[a[0],v,P,a]},t.addQueryStringParameter=function(t,e){for(var i=0;i<H.length;i++)if(H[i].name===t)return void(H[i].value=e);H.push({name:t,value:e})},t.addHeader=function(t,e){R[t]=e},t.canSendRequest=function(){return G()&&S.allowRequestSending()},t.sendQueuedRequests=function(t,e){(0,p.o8)(t)&&(t=0),E&&(t=Z(t),e=2),K(M,t,0)&&Y(Q(),0,!1,t,e||0)},t.isCompletelyIdle=function(){return!w&&0===F&&0===M.length},t.setUnloading=function(t){E=t},t.addBatch=function(t){if(t&&t.count()>0){if(v.isTenantKilled(t.iKey()))return!1;M.push(t)}return!0},t.teardown=function(){M.length>0&&Y(Q(),0,!0,2,2)},t.pause=function(){w=!0},t.resume=function(){w=!1,t.sendQueuedRequests(0,4)},t.sendSynchronousBatch=function(t,e,i){t&&t.count()>0&&((0,p.le)(e)&&(e=1),E&&(e=Z(e),i=2),Y([t],0,!1,e,i||0))}}))},bt=l.dH?window:void 0,yt="eventsDiscarded",wt=function(t){function e(){var i,n=t.call(this)||this;n.identifier="PostChannel",n.priority=1011,n.version="3.1.10";var f,m,b,y,w,x=!1,C=[],$=null,k=!1,L=0,D=500,T=0,F=1e4,O={},H=v,R=null,M=null,P=0,A=0,E={},B=-1,V=!0,z=!1;return J(e,n,(function(t,e){function n(t,e){if(t.sendAttempt||(t.sendAttempt=0),t.latency||(t.latency=h.zU.Normal),t.ext&&t.ext.trace&&delete t.ext.trace,t.ext&&t.ext.user&&t.ext.user.id&&delete t.ext.user.id,V&&(t.ext=(0,p.Ax)(t.ext),t.baseData&&(t.baseData=(0,p.Ax)(t.baseData)),t.data&&(t.data=(0,p.Ax)(t.data))),t.sync)if(P||k)t.latency=h.zU.RealTime,t.sync=!1;else if(m)return V&&(t=(0,p.Ax)(t)),void m.sendSynchronousBatch(I.create(t.iKey,[t]),!0===t.sync?1:t.sync,3);var i=t.latency,n=T,o=F;i===h.zU.Immediate&&(n=L,o=D);var r=!1;if(n<o)r=!Q(t,e);else{var a=h.zU.Normal,l=20;i===h.zU.Immediate&&(a=h.zU.Immediate,l=1),r=!0,function(t,e,i,n){for(;i<=e;){var o=Z(t,e,!0);if(o&&o.count()>0){var r=o.split(0,n),a=r.count();if(a>0)return i===h.zU.Immediate?L-=a:T-=a,nt(yt,[r],s),!0}i++}return K(),!1}(t.iKey,t.latency,a,l)&&(r=!Q(t,e))}r&&it(yt,[t],s)}function N(t,e,i){var n=X(t,e,i);return m.sendQueuedRequests(e,i),n}function j(){return T>0}function _(){if(B>=0&&X(B,0,w)&&m.sendQueuedRequests(0,w),L>0&&!M&&!k){var t=O[H][2];t>=0&&(M=U((function(){M=null,N(h.zU.Immediate,0,1),_()}),t))}var e=O[H][1];!R&&!$&&e>=0&&!k&&(j()?R=U((function(){R=null,N(0===A?h.zU.RealTime:h.zU.Normal,0,1),A++,A%=2,_()}),e):A=0)}function U(e,i){0===i&&P&&(i=1);var n=1e3;return P&&(n=lt.getMillisToBackoffForRetry(P-1)),t._setTimeoutOverride(e,i*n)}function q(){null!==R&&(t._clearTimeoutOverride(R),R=null,A=0)}function W(e,i){q(),$&&(t._clearTimeoutOverride($),$=null),k||N(h.zU.Normal,e,i)}function Z(t,e,i){var n=E[e];n||(e=h.zU.Normal,n=E[e]);var o=n.iKeyMap[t];return!o&&i&&(o=I.create(t),n.batches.push(o),n.iKeyMap[t]=o),o}function G(e,i){m.canSendRequest()&&!P&&(b>0&&T>b&&(i=!0),i&&null==$&&t.flush(e,null,20))}function Q(t,e){V&&(t=(0,p.Ax)(t));var i=t.latency,n=Z(t.iKey,i,!0);return!!n.addEvent(t)&&(i!==h.zU.Immediate?(T++,e&&0===t.sendAttempt&&G(!t.sync,y>0&&n.count()>=y)):L++,!0)}function K(){for(var t=0,e=0,i=function(i){var n=E[i];n&&n.batches&&(0,p.tO)(n.batches,(function(n){i===h.zU.Immediate?t+=n.count():e+=n.count()}))},n=h.zU.Normal;n<=h.zU.Immediate;n++)i(n);T=e,L=t}function X(e,i,n){var o=!1,r=0===i;return!r||m.canSendRequest()?(0,c.Lm)(t.core,(function(){return"PostChannel._queueBatches"}),(function(){for(var t=[],i=h.zU.Immediate;i>=e;){var n=E[i];n&&n.batches&&n.batches.length>0&&((0,p.tO)(n.batches,(function(e){m.addBatch(e)?o=o||e&&e.count()>0:t=t.concat(e.events()),i===h.zU.Immediate?L-=e.count():T-=e.count()})),n.batches=[],n.iKeyMap={}),i--}t.length>0&&it(yt,t,a),o&&B>=e&&(B=-1,w=0)}),(function(){return{latency:e,sendType:i,sendReason:n}}),!r):(B=B>=0?Math.min(B,e):e,w=Math.max(w,n)),o}function Y(t,e){N(h.zU.Normal,0,e),J((function(){t&&t(),C.length>0?$=U((function(){return Y(C.shift(),e)}),0):($=null,j()&&_())}))}function J(t){m.isCompletelyIdle()?t():$=U((function(){J(t)}),.25)}function tt(){(O={}).REAL_TIME=[2,1,0],O.NEAR_REAL_TIME=[6,3,0],O.BEST_EFFORT=[18,9,0]}function et(e,i){var n=t._notificationManager||{},o=n[e];if(o)try{o.apply(n,i)}catch(i){t.diagLog().throwInternal(g.X.CRITICAL,h.p3.NotificationException,e+" notification failed: "+i)}}function it(t,e){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];e&&e.length>0&&et(t,[e].concat(i))}function nt(t,e){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];e&&e.length>0&&(0,p.tO)(e,(function(e){e&&e.count()>0&&et(t,[e.events()].concat(i))}))}function ot(){y=i&&i.disableAutoBatchFlushLimit?0:Math.max(1500,F/6)}tt(),E[h.zU.Immediate]={batches:[],iKeyMap:{}},E[h.zU.RealTime]={batches:[],iKeyMap:{}},E[h.zU.CostDeferred]={batches:[],iKeyMap:{}},E[h.zU.Normal]={batches:[],iKeyMap:{}},ot(),m=new mt(500,2,1,{requeue:function(e,i){var o=[];(0,p.tO)(e,(function(e){e&&e.count()>0&&(0,p.tO)(e.events(),(function(e){e&&(e.sync&&(e.latency=h.zU.Immediate,e.sync=!1),e.sendAttempt<6?((0,l.if)(e,t.identifier),n(e,!1)):o.push(e))}))})),o.length>0&&it(yt,o,r);z&&W(2,2)},send:function(t,e,i){t&&t.length>0&&et("eventsSendRequest",[e>=1e3&&e<=1999?e-1e3:0,!0!==i])},sent:function(t,e){nt("eventsSent",t,e),_()},drop:function(t,e){nt(yt,t,e>=8e3&&e<=8999?e-8e3:o)},rspFail:function(t){nt(yt,t,r),_()},oth:function(t,e){nt(yt,t,o),_()}}),t._getDbgPlgTargets=function(){return[m]},t.initialize=function(n,o,r){(0,c.Lm)(o,(function(){return"PostChannel:initialize"}),(function(){var a=o;e.initialize(n,o,r),t.setInitialized(!1);var s=t._getTelCtx();n.extensionConfig[t.identifier]=n.extensionConfig[t.identifier]||{},i=s.getExtCfg(t.identifier),t._setTimeoutOverride=i.setTimeoutOverride?i.setTimeoutOverride:setTimeout.bind(bt),t._clearTimeoutOverride=i.clearTimeoutOverride?i.clearTimeoutOverride:clearTimeout.bind(bt),V=!i.disableOptimizeObj&&(0,l.mJ)();var c=a.getWParam;a.getWParam=function(){var t=0;return i.ignoreMc1Ms0CookieProcessing&&(t|=2),t|c()},i.eventsLimitInMem>0&&(F=i.eventsLimitInMem),i.immediateEventLimit>0&&(D=i.immediateEventLimit),i.autoFlushEventsLimit>0&&(b=i.autoFlushEventsLimit),ot(),i.httpXHROverride&&i.httpXHROverride.sendPOST&&(f=i.httpXHROverride),(0,l.Sn)(n.anonCookieName)&&m.addQueryStringParameter("anoncknm",n.anonCookieName),m.sendHook=i.payloadPreprocessor,m.sendListener=i.payloadListener;var h=i.overrideEndpointUrl?i.overrideEndpointUrl:n.endpointUrl;function p(t){"beforeunload"!==(t||(0,d.Jj)().event).type&&(z=!0,m.setUnloading(z)),W(2,2)}t._notificationManager=n.extensionConfig.NotificationManager,m.initialize(h,t.core,t,f,i);var g=n.disablePageUnloadEvents||[];(0,u.c9)(p,g),(0,u.TJ)(p,g),(0,u.nD)((function(t){z=!1,m.setUnloading(z)}),n.disablePageShowEvents),t.setInitialized(!0)}),(function(){return{coreConfig:n,core:o,extensions:r}}))},t.processTelemetry=function(e,o){(0,l.if)(e,t.identifier);var r=(o=t._getTelCtx(o)).getExtCfg(t.identifier),a=!!i.disableTelemetry;r&&(a=a||!!r.disableTelemetry);var s=e;a||x||(i.overrideInstrumentationKey&&(s.iKey=i.overrideInstrumentationKey),r&&r.overrideInstrumentationKey&&(s.iKey=r.overrideInstrumentationKey),n(s,!0),z?W(2,2):_()),t.processNext(s,o)},t.setEventQueueLimits=function(t,e){F=t>0?t:1e4,b=e>0?e:0,ot();var i=T>t;if(!i&&y>0)for(var n=h.zU.Normal;!i&&n<=h.zU.RealTime;n++){var o=E[n];o&&o.batches&&(0,p.tO)(o.batches,(function(t){t&&t.count()>=y&&(i=!0)}))}G(!0,i)},t.teardown=function(){W(2,2),x=!0,m.teardown()},t.pause=function(){q(),k=!0,m.pause()},t.resume=function(){k=!1,m.resume(),_()},t.addResponseHandler=function(t){m._responseHandlers.push(t)},t._loadTransmitProfiles=function(t){q(),tt(),H=v,_(),(0,p.rW)(t,(function(t,e){var i=e.length;if(i>=2){var n=i>2?e[2]:0;if(e.splice(0,i-2),e[1]<0&&(e[0]=-1),e[1]>0&&e[0]>0){var o=e[0]/e[1];e[0]=Math.ceil(o)*e[1]}n>=0&&e[1]>=0&&n>e[1]&&(n=e[1]),e.push(n),O[t]=e}}))},t.flush=function(t,e,i){void 0===t&&(t=!0),k||(q(),i=i||1,t?(X(h.zU.Normal,0,i),K(),null==$?$=U((function(){Y(e,i)}),0):C.push(e)):(N(h.zU.Normal,1,i),null!=e&&e()))},t.setMsaAuthTicket=function(t){m.addHeader(S,t)},t.hasEvents=j,t._setTransmitProfile=function(t){H!==t&&void 0!==O[t]&&(q(),H=t,_())},t._backOffTransmission=function(){P<4&&(P++,q(),_())},t._clearBackOff=function(){P&&(P=0,q(),_())}})),n}return(0,n.ne)(e,t),e}(f.i),xt=wt},53475:function(t,e,i){"use strict";i.d(e,{Z:function(){return Bt}});var n=i(45362),o="constructor",r="prototype",a="function",s="_dynClass",l="_unknown_",c=Object,d=c.getPrototypeOf,u=0;function h(t,e){return t&&c.prototype.hasOwnProperty.call(t,e)}function p(t){return t&&(t===c.prototype||t===Array.prototype)}function g(t){return p(t)||t===Function.prototype}function f(t){if(t){if(d)return d(t);var e=t.__proto__||t.prototype||(t.constructor?t.constructor.prototype:null);if(e)return e}return null}function v(t,e){var i=[],n=c.getOwnPropertyNames;if(n)i=n(t);else for(var o in t)"string"==typeof o&&h(t,o)&&i.push(o);if(i&&i.length>0)for(var r=0;r<i.length;r++)e(i[r])}function m(t,e,i){return e!==o&&typeof t[e]===a&&(i||h(t,e))}function b(t){throw new TypeError("DynamicProto: "+t)}function y(t,e){for(var i=t.length-1;i>=0;i--)if(t[i]===e)return!0;return!1}function w(t,e,i,n){var o=null;if(t&&h(i,s)){var r=t._dynInstFuncs||{};if((o=(r[i._dynClass]||{})[e])||b("Missing ["+e+"] "+a),!o._dynInstChk&&!1!==r._dynInstChk){for(var l=!h(t,e),c=f(t),d=[];l&&c&&!g(c)&&!y(d,c);){var u=c[e];if(u){l=u===n;break}d.push(c),c=f(c)}try{l&&(t[e]=o),o._dynInstChk=1}catch(t){r._dynInstChk=!1}}}return o}function x(t,e,i){var n=e[t];return n===i&&(n=f(e)[t]),typeof n!==a&&b("["+t+"] is not a "+a),n}function C(t,e,i,n,o){if(!p(t)){var r=i._dynInstFuncs=i._dynInstFuncs||{},a=r[e]=r[e]||{};!1!==r._dynInstChk&&(r._dynInstChk=!!o),v(i,(function(e){m(i,e,!1)&&i[e]!==n[e]&&(a[e]=i[e],delete i[e],(!h(t,e)||t[e]&&!t[e]._isDynProxy)&&(t[e]=function(t,e){var i=function(){return(w(this,e,t,i)||x(e,t,i)).apply(this,arguments)};return i._isDynProxy=1,i}(t,e)))}))}}function $(t,e){return h(t,r)?t.name||e||l:((t||{}).constructor||{}).name||e||l}function k(t,e,i,n){h(t,r)||b("theClass is an invalid class definition.");var o=t.prototype;(function(t,e){if(d)for(var i=[],n=f(e);n&&!g(n)&&!y(i,n);){if(n===t)return!0;i.push(n),n=f(n)}return!1})(o,e)||b("["+$(t)+"] is not in class hierarchy of ["+$(e)+"]");var a=null;h(o,s)?a=o._dynClass:(a="_dynCls$"+$(t,"_")+"$"+u,u++,o._dynClass=a);var l=k._dfOpts,c=!!l.useBaseInst;c&&n&&void 0!==n.useBaseInst&&(c=!!n.useBaseInst);var p=function(t){var e={};return v(t,(function(i){!e[i]&&m(t,i,!1)&&(e[i]=t[i])})),e}(e),w=function(t,e,i,n){function o(t,e,i){var o=e[i];if(o._isDynProxy&&n){var r=t._dynInstFuncs||{};!1!==r._dynInstChk&&(o=(r[e._dynClass]||{})[i]||o)}return function(){return o.apply(t,arguments)}}var r={};v(i,(function(t){r[t]=o(e,i,t)}));for(var a=f(t),s=[];a&&!g(a)&&!y(s,a);)v(a,(function(t){!r[t]&&m(a,t,!d)&&(r[t]=o(e,a,t))})),s.push(a),a=f(a);return r}(o,e,p,c);i(e,w);var x=!!d&&!!l.setInstFuncs;x&&n&&(x=!!n.setInstFuncs),C(o,a,e,p,!1!==x)}k._dfOpts={setInstFuncs:!0,useBaseInst:!0};var L=k,D=i(91254),S=i(74539),T=i(27981),F=i(85282),I=i(60851),O=["AX","EX","SF","CS","CF","CT","CU","DC","DF","H5","HL","WS","WP"];function H(t,e){void 0===e&&(e=O);var i=null;if(t)for(var n=t.split(","),o=0;o<n.length;o++)R(n[o],e)&&(i?i+=","+n[o]:i=n[o]);return i}function R(t,e){if(void 0===e&&(e=O),!t||t.length<4)return!1;for(var i=!1,n=t.substring(0,3).toString().toUpperCase(),o=0;o<e.length;o++)if(e[o]+":"===n&&t.length<=256){i=!0;break}return i}var M=function(){function t(t,e){this.core=e,this.appExpId=null,this.flightIdNameSpaces=O.slice(0),this.expIdCookieName="Treatments",this._cookieMgr=(0,F.JP)(e),this._propertiesConfig=t;var i=(0,I.Me)();if(i){var n=i.documentElement;i&&(this.locale=n.lang)}this.env=t.env?t.env:this._getMetaDataFromDOM("awa-").env}return t.prototype.getExpId=function(){return this._propertiesConfig.expId?this._readExpIdFromCoreData(this._propertiesConfig.expId):this._readExpIdFromCookie()},t.prototype._getMetaDataFromDOM=function(t){var e,i={},n=(0,I.Me)();if(n){e=n&&n.querySelectorAll("meta");for(var o=0;o<e.length;o++){var r=e[o];if(r.name)if(0===r.name.toLowerCase().indexOf(t))i[r.name.replace(t,"")]=r.content}}return i},t.prototype._setAppExpId=function(t){t!==this.appExpId&&(this.appExpId=H(t,this.flightIdNameSpaces))},t.prototype._getAppExpId=function(){return this.appExpId},t.prototype._readExpIdFromCookie=function(){var t=(0,D.Do)(this._cookieMgr,this.expIdCookieName);return this._setAppExpId(t),this._getAppExpId()},t.prototype._readExpIdFromCoreData=function(t){return this._setAppExpId(t),this._getAppExpId()},t.validateAppExpId=H,t._staticInit=void(0,S.l_)(t.prototype,"expId",t.prototype.getExpId),t}(),P=function(){},A=i(39860),E=function(){function t(e,i,n){this.core=n,this._propertiesConfig=i;var o=this._cookieMgr=(0,F.JP)(n,e);if(o&&o.isEnabled()){if(!this._propertiesConfig.hashIdentifiers&&!this._propertiesConfig.dropIdentifiers){var r=(0,D.Do)(o,"MUID");r&&this.setLocalId("t:"+r)}if(this._propertiesConfig.enableApplicationInsightsUser){var a=(0,D.Do)(o,t.userCookieName);if(a){var s=a.split(t.cookieSeparator);s.length>0&&(this.id=s[0])}if(!this.id){this.id=(0,A.pZ)(e&&!(0,S.o8)(e.idLength)?e.idLength:22);var l=new Date,c=(0,S.Y6)(l);this.accountAcquisitionDate=c;var d=[this.id,c],u=this._propertiesConfig.cookieDomain?this._propertiesConfig.cookieDomain:void 0;o.set(t.userCookieName,d.join(t.cookieSeparator),31536e3,u)}}}if("undefined"!=typeof navigator){var h=navigator;this.locale=h.userLanguage||h.language}}return t.prototype.getLocalId=function(){if(this._customLocalId)return this._customLocalId;if(!this._propertiesConfig.hashIdentifiers&&!this._propertiesConfig.dropIdentifiers){var t=(0,D.Do)(this._cookieMgr,"MUID");t&&this.setLocalId("t:"+t)}},t.prototype.setLocalId=function(t){this._customLocalId=t},t.cookieSeparator="|",t.userCookieName="ai_user",t._staticInit=void(0,S.l_)(t.prototype,"localId",t.prototype.getLocalId,t.prototype.setLocalId),t}(),B="([\\d,.]+)",V="Unknown",z="Edg/",N=[{ua:"OPR/",b:"Opera"},{ua:"PhantomJS",b:"PhantomJS"},{ua:"Edge",b:"Edge"},{ua:z,b:"Edge"},{ua:"Electron",b:"Electron"},{ua:"Chrome",b:"Chrome"},{ua:"Trident",b:"MSIE"},{ua:"MSIE ",b:"MSIE"},{ua:"Firefox",b:"Firefox"},{ua:"Safari",b:"Safari"},{ua:"SkypeShell",b:"SkypeShell"}],j=[{br:"Microsoft Edge",b:"Edge"},{br:"Google Chrome",b:"Chrome"},{br:"Opera",b:"Opera"}];function _(t,e){return e.indexOf(t)>-1}function U(t,e){for(var i=0;i<e.length;i++)if(t==e[i].brand)return e[i].version;return null}function q(t,e){return"MSIE"===e?function(t){var e=t.match(new RegExp("MSIE ([\\d,.]+)"));if(e)return e[1];var i=t.match(new RegExp("rv:([\\d,.]+)"));if(i)return i[1]}(t):function(t,e){"Safari"===t?t="Version":"Edge"===t&&_(z,e)&&(t="Edg");var i=e.match(new RegExp(t+"/"+B));if(i)return i[1];if("Opera"===t&&(i=e.match(new RegExp("OPR/([\\d,.]+)"))))return i[1];return V}(e,t)}var W=function(){function t(e,i){var n=(0,F.JP)(i),o=e||{};L(t,this,(function(t){var e=(0,I.k$)();if(e){var i=e.hostname;i&&(t.domain="file:"===e.protocol?"local":i)}if(o.populateBrowserInfo){var r=o.userAgent,a=(o.userAgentData||{}).brands,s=(0,I.jW)();s&&(r=r||s.userAgent||"",a=a||(s.userAgentData||{}).brands),function(e,i){if((0,S.kJ)(i))try{for(var n=0;n<j.length;n++){var o=U(j[n].br,i);if(o)return t.browser=j[n].b,void(t.browserVer=o)}}catch(t){}if(e){var r=function(t){if(t)for(var e=0;e<N.length;e++)if(_(N[e].ua,t))return N[e].b;return V}(e);t.browser=r,t.browserVer=q(e,r)}}(r,a);var l=function(){var t={h:0,w:0},e=(0,I.Jj)();return e&&e.screen&&(t.h=screen.height,t.w=screen.width),t}();t.screenRes=l.w+"X"+l.h}t.getUserConsent=function(){return o.userConsented||!!(0,D.Do)(n,o.userConsentCookieName||"MSCC")},t.getUserConsentDetails=function(){try{var t=o.callback;if(t&&t.userConsentDetails){var e=t.userConsentDetails();if(e)return JSON.stringify({Required:e.Required||!1,Analytics:e.Analytics||!1,SocialMedia:e.SocialMedia||!1,Advertising:e.Advertising||!1})}}catch(t){}return null},(0,S.l_)(t,"userConsent",t.getUserConsent)}))}return t._staticInit=void(0,S.l_)(t.prototype,"userConsent",t.prototype.getUserConsent),t}(),Z={WIN:/(windows|win32)/i,WINRT:/ arm;/i,WINPHONE:/windows\sphone\s\d+\.\d+/i,OSX:/(macintosh|mac os x)/i,IOS:/(ipad|iphone|ipod)(?=.*like mac os x)/i,LINUX:/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,ANDROID:/android/i,CROS:/CrOS/i},G={5.1:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"},Q="Unknown",K=[{r:Z.WINPHONE,os:"Windows Phone"},{r:Z.WINRT,os:"Windows RT"},{r:Z.WIN,os:"Windows"},{r:Z.IOS,os:"iOS"},{r:Z.ANDROID,os:"Android"},{r:Z.LINUX,os:"Linux"},{r:Z.CROS,os:"Chrome OS"},{s:"x11",os:"Unix"},{s:"blackberry",os:"BlackBerry"},{s:"symbian",os:"Symbian"},{s:"nokia",os:"Nokia"},{r:Z.OSX,os:"Mac OS X"}];function X(t,e){return"Windows"===e?Y(t,"Windows NT"):"Android"===e?Y(t,e):"Mac OS X"===e?function(t){var e=t.match(new RegExp("Mac OS X ([\\d,_,.]+)"));if(e){var i=e[1].replace(/_/g,".");if(i){var n=J(i);return n?i.split(n)[0]:i}}return Q}(t):"iOS"===e?function(t){var e=t.match(new RegExp("OS ([\\d,_,.]+)"));if(e){var i=e[1].replace(/_/g,".");if(i){var n=J(i);return n?i.split(n)[0]:i}}return Q}(t):Q}function Y(t,e){var i=t.match(new RegExp(e+" ([\\d,.]+)"));return i?G[i[1]]?G[i[1]]:i[1]:Q}function J(t){return t.indexOf(".")>-1?".":t.indexOf("_")>-1?"_":null}var tt=function(t){if(t.populateOperatingSystemInfo){var e=(0,I.jW)()||{},i=t.userAgent||e.userAgent||"",n=t.userAgentData||e.userAgentData||{};if(i){var o=function(t){for(var e=0;e<K.length;e++){var i=K[e];if(i.r&&t.match(i.r))return i.os;if(i.s&&-1!==t.indexOf(i.s))return i.os}return Q}(i.toLowerCase());this.name=o,this.ver=X(i,o)}this.name&&this.name!==Q||!(0,S.HD)(n.platform)||(this.name=n.platform)}},et=function(){function t(t,e){this.core=e,t.serviceName&&(this.serviceName=t.serviceName),this._cookieMgr=(0,F.JP)(e)}return t.prototype.getMsfpc=function(){return(0,D.Do)(this._cookieMgr,"MSFPC")},t.prototype.getAnid=function(){return(0,D.Do)(this._cookieMgr,"ANON").slice(0,34)},t._staticInit=((0,S.l_)(t.prototype,"msfpc",t.prototype.getMsfpc),void(0,S.l_)(t.prototype,"anid",t.prototype.getAnid)),t}(),it=function(t){this.popSample=100,this.eventFlags=0,t.hashIdentifiers&&(this.eventFlags=1048576|this.eventFlags),t.dropIdentifiers&&(this.eventFlags=2097152|this.eventFlags)},nt=function(){var t=(new Date).getTimezoneOffset(),e=t%60,i=(t-e)/60,n="+";i>0&&(n="-"),i=Math.abs(i),e=Math.abs(e),this.tz=n+(i<10?"0"+i:i.toString())+":"+(e<10?"0"+e:e.toString())},ot=function(){},rt=function(){function t(){}return t.prototype.setId=function(t){this.customId=t},t.prototype.getId=function(){return(0,S.HD)(this.customId)?this.customId:this.automaticId},t._staticInit=void(0,S.l_)(t.prototype,"id",t.prototype.getId,t.prototype.setId),t}(),at=function(t,e,i,n){if(t.enableApplicationInsightsTrace){this.traceId=e||(0,A.DO)(),this.parentId=i,this.name=n;var o=(0,I.k$)();o&&o.pathname&&(this.name=o.pathname)}},st=i(21908),lt=(st.RJ,st.Pw.freeze);st.Pw.seal;({toString:null}).propertyIsEnumerable("toString");function ct(t){return lt&&(t=lt(t)),t}var dt=ct({id:"id",ver:"ver",appName:"name",locale:"locale",expId:"expId",env:"env"}),ut=ct({domain:"domain",browser:"browser",browserVer:"browserVer",screenRes:"screenRes",userConsent:"userConsent",consentDetails:"consentDetails"}),ht=ct({locale:"locale",localId:"localId",id:"id"}),pt=ct({osName:"name",ver:"ver"}),gt=ct({ver:"ver",seq:"seq",installId:"installId",epoch:"epoch"}),ft=ct({msfpc:"msfpc",anid:"anid",serviceName:"serviceName"}),vt=ct({popSample:"popSample",eventFlags:"eventFlags"}),mt=ct({tz:"tz"}),bt=ct({sessionId:"sesId"}),yt=ct({localId:"localId",deviceClass:"deviceClass",make:"make",model:"model"}),wt=ct({role:"role",roleInstance:"roleInstance",roleVer:"roleVer"}),xt=ct({traceId:"traceID",traceName:"name",parentId:"parentID"}),Ct=ct({UserExt:"user",DeviceExt:"device",TraceExt:"trace",WebExt:"web",AppExt:"app",OSExt:"os",SdkExt:"sdk",IntWebExt:"intweb",UtcExt:"utc",LocExt:"loc",CloudExt:"cloud"}),$t=i(42774),kt="MicrosoftApplicationsTelemetryDeviceId";var Lt,Dt,St=function(){function t(t,e){this._sequenceId=0;var i=t.propertyStorageOverride;this.seq=this._sequenceId,this.epoch=(0,$t._l)(!1).toString();var n=(0,F.JP)(e,t);if(n.isEnabled()||i){var o=function(t,e,i){return e?e.getProperty(i)||"":(0,D.Do)(t,i)}(n,i,kt);o||(o=(0,A.GW)()),function(t,e,i,n){e?e.setProperty(i,n):t.set(i,n,31536e3)}(n,i,kt,o),this.installId=o}else n.purge(kt)}return t.prototype.getSequenceId=function(){return++this._sequenceId},t}(),Tt=i(80221),Ft=i(206),It=i(4248),Ot=i(26454);function Ht(){return void 0===Lt&&(Lt=!!Mt(Dt.LocalStorage)),Lt}function Rt(){return Ht()?Mt(Dt.LocalStorage):null}function Mt(t){var e,i,n=null;try{var o=(0,Ot.Rd)();if(!o)return null;i=new Date,(n=t===Dt.LocalStorage?o.localStorage:o.sessionStorage)&&(0,S.mf)(n.setItem)&&(n.setItem(i,i),e=n.getItem(i)!==i,n.removeItem(i),e&&(n=null))}catch(t){n=null}return n}!function(t){t[t.LocalStorage=0]="LocalStorage",t[t.SessionStorage=1]="SessionStorage"}(Dt||(Dt={}));var Pt=function(){function t(e,i){var n,o,r=(0,Tt.vH)(e),a=(0,F.JP)(e);L(t,this,(function(e){var s,l={sessionRenewalMs:(s=i).sessionRenewalMs&&function(){return s.sessionRenewalMs},sessionExpirationMs:s.sessionExpirationMs&&function(){return s.sessionExpirationMs},cookieDomain:s.cookieDomain&&function(){return s.cookieDomain},namePrefix:s.namePrefix&&function(){return s.namePrefix},sessionAsGuid:function(){return s.sessionAsGuid},idLength:function(){return s.idLength?s.idLength:22}};function c(t){var i=e.automaticSession,n=t.split("|");n.length>0&&i.setId(n[0]);try{if(n.length>1){var o=+n[1];i.acquisitionDate=+new Date(o),i.acquisitionDate=i.acquisitionDate>0?i.acquisitionDate:0}if(n.length>2){var a=+n[2];i.renewalDate=+new Date(a),i.renewalDate=i.renewalDate>0?i.renewalDate:0}}catch(t){r.throwInternal(Ft.X.CRITICAL,It.p3.ErrorParsingAISessionCookie,"Error parsing ai_session cookie, session will be reset: "+t)}0===i.renewalDate&&r.throwInternal(Ft.X.WARNING,It.p3.SessionRenewalDateIsZero,"AI session renewal date is 0, session will be reset.")}function d(){var t=e.automaticSession,i=(new Date).getTime(),n=e.config.sessionAsGuid();!(0,S.o8)(n)&&n?(0,S.jn)(n)?t.setId((0,D.cm)()):t.setId((0,D.cm)(n)):t.setId((0,A.pZ)(l&&l.idLength?l.idLength():22)),t.acquisitionDate=i,t.renewalDate=i,u(t.getId(),t.acquisitionDate,t.renewalDate),Ht()||r.throwInternal(Ft.X.WARNING,It.p3.BrowserDoesNotSupportLocalStorage,"Browser does not support local storage. Session durations will be inaccurate.")}function u(t,i,r){var s=i+e.config.sessionExpirationMs(),l=r+e.config.sessionRenewalMs(),c=new Date,d=[t,i,r];s<l?c.setTime(s):c.setTime(l);var u=e.config.cookieDomain?e.config.cookieDomain():null;a.set(o(),d.join("|")+";expires="+c.toUTCString(),null,u),n=(new Date).getTime()}(0,S.mf)(i.sessionExpirationMs)||(l.sessionExpirationMs=function(){return t.acquisitionSpan}),(0,S.mf)(i.sessionRenewalMs)||(l.sessionRenewalMs=function(){return t.renewalSpan}),e.config=l,o=function(){return e.config.namePrefix&&e.config.namePrefix()?t.cookieNameConst+e.config.namePrefix():t.cookieNameConst},e.automaticSession=new rt,e.update=function(){e.automaticSession.getId()||function(){var t=(0,D.ej)(o());if(t&&(0,S.mf)(t.split))c(t);else{var i=function(t,e){var i=Rt();if(null!==i)try{return i.getItem(e)}catch(e){Lt=!1,t.throwInternal(Ft.X.CRITICAL,It.p3.BrowserCannotReadLocalStorage,"Browser failed read of local storage. "+e)}return null}(r,o());i&&c(i)}e.automaticSession.getId()||d()}();var i=e.automaticSession,a=e.config,s=(new Date).getTime(),l=s-i.acquisitionDate>a.sessionExpirationMs(),h=s-i.renewalDate>a.sessionRenewalMs();if(l||h)d();else{(!n||s-n>t.cookieUpdateInterval)&&(i.renewalDate=s,u(i.getId(),i.acquisitionDate,i.renewalDate))}},e.backup=function(){var t,i,n,a=e.automaticSession;t=a.getId(),i=a.acquisitionDate,n=a.renewalDate,function(t,e,i){var n=Rt();if(null!==n)try{n.setItem(e,i)}catch(e){Lt=!1,t.throwInternal(Ft.X.CRITICAL,It.p3.BrowserCannotWriteLocalStorage,"Browser failed write to local storage. "+e)}}(r,o(),[t,i,n].join("|"))}}))}return t.acquisitionSpan=864e5,t.renewalSpan=18e5,t.cookieUpdateInterval=6e4,t.cookieNameConst="ai_session",t}(),At=S.HD,Et=function(){function t(t,e,i){var n=this;n.app=new M(e,i),n.cloud=new P,n.user=new E(t,e,i),n.os=new tt(e),n.web=new W(e,i),n.sdk=new St(t,i),n.intWeb=new et(e,i),n.utc=new it(e),n.loc=new nt,n.device=new ot,n.telemetryTrace=new at(e),n.sessionManager=new Pt(i,e),n.session=new rt}return t.prototype.getSessionId=function(){var t=this.session;if(t&&At(t.customId))return t.customId;var e=this.sessionManager;e.update();var i=e.automaticSession;if(i){var n=i.getId();n&&At(n)&&(t.automaticId=n)}return t.automaticId},t.prototype.applyApplicationContext=function(t){var e=this.app,i=t.ext[Ct.AppExt];(0,S.sO)(i,dt.id,e.id,At),(0,S.sO)(i,dt.ver,e.ver,At),(0,S.sO)(i,dt.appName,e.name,At),(0,S.sO)(i,dt.locale,e.locale,At),(0,S.sO)(i,dt.expId,e.getExpId(),At),(0,S.sO)(i,dt.env,e.env,At)},t.prototype.applyUserContext=function(t){var e=this.user,i=t.ext[Ct.UserExt];(0,S.sO)(i,ht.localId,e.getLocalId(),At),(0,S.sO)(i,ht.locale,e.locale,At),(0,S.sO)(i,ht.id,e.id,At)},t.prototype.applyWebContext=function(t){var e=this.web,i=t.ext[Ct.WebExt];(0,S.sO)(i,ut.domain,e.domain,At),(0,S.sO)(i,ut.browser,e.browser,At),(0,S.sO)(i,ut.browserVer,e.browserVer,At),(0,S.sO)(i,ut.screenRes,e.screenRes,At),i[ut.userConsent]=e.getUserConsent(),i[ut.consentDetails]=e.getUserConsentDetails()},t.prototype.applyOsContext=function(t){var e=this.os,i=t.ext[Ct.OSExt];(0,S.sO)(i,pt.osName,e.name,At),(0,S.sO)(i,pt.ver,e.ver,At)},t.prototype.applySdkContext=function(t){var e=this.sdk,i=t.ext[Ct.SdkExt];i[gt.seq]=e.getSequenceId(),i[gt.epoch]=e.epoch,(0,S.sO)(i,gt.installId,e.installId,At)},t.prototype.applyIntWebContext=function(t){var e=this.intWeb,i=t.ext[Ct.IntWebExt];(0,S.sO)(i,ft.msfpc,e.getMsfpc(),At),(0,S.sO)(i,ft.anid,e.getAnid(),At),(0,S.sO)(i,ft.serviceName,e.serviceName,At)},t.prototype.applyUtcContext=function(t){var e=this.utc,i=t.ext[Ct.UtcExt];i[vt.popSample]=e.popSample,e.eventFlags>0&&(i[vt.eventFlags]=e.eventFlags)},t.prototype.applyLocContext=function(t){t.ext[Ct.LocExt][mt.tz]=this.loc.tz},t.prototype.applySessionContext=function(t){t.ext[Ct.AppExt][bt.sessionId]=this.getSessionId()},t.prototype.applyDeviceContext=function(t){var e=this.device,i=t.ext[Ct.DeviceExt];(0,S.sO)(i,yt.localId,e.localId,At),(0,S.sO)(i,yt.make,e.make,At),(0,S.sO)(i,yt.model,e.model,At),(0,S.sO)(i,yt.deviceClass,e.deviceClass,At)},t.prototype.applyCloudContext=function(t){var e=this.cloud,i=t.ext[Ct.CloudExt];(0,S.sO)(i,wt.role,e.role,At),(0,S.sO)(i,wt.roleInstance,e.roleInstance,At),(0,S.sO)(i,wt.roleVer,e.roleVer,At)},t.prototype.applyAITraceContext=function(t){var e=this.telemetryTrace,i=t.ext[Ct.TraceExt];(0,S.sO)(i,xt.traceId,e.traceId,At),(0,S.sO)(i,xt.traceName,e.name,At),(0,S.sO)(i,xt.parentId,e.parentId,At)},t}(),Bt=function(t){function e(){var i,n=t.call(this)||this;n.identifier="SystemPropertiesCollector",n.priority=3,n.version="3.1.10";var o={};return L(e,n,(function(e,r){e.initialize=function(o,r,a){t.prototype.initialize.call(n,o,r,a),i=new Et(o,e._getTelCtx().getExtCfg(e.identifier),r)},e.processTelemetry=function(t,n){(0,D.if)(t,e.identifier),n=e._getTelCtx(n);var r,a,s=t.ext=t.ext?t.ext:{};t.data=t.data?t.data:{},s[Ct.AppExt]=s[Ct.AppExt]||{},s[Ct.UserExt]=s[Ct.UserExt]||{},s[Ct.WebExt]=s[Ct.WebExt]||{},s[Ct.OSExt]=s[Ct.OSExt]||{},s[Ct.SdkExt]=s[Ct.SdkExt]||{},s[Ct.IntWebExt]=s[Ct.IntWebExt]||{},s[Ct.UtcExt]=s[Ct.UtcExt]||{},s[Ct.LocExt]=s[Ct.LocExt]||{},s[Ct.DeviceExt]=s[Ct.DeviceExt]||{},s[Ct.TraceExt]=s[Ct.TraceExt]||{},s[Ct.CloudExt]=s[Ct.CloudExt]||{},i.applyApplicationContext(t),i.applyUserContext(t),i.applyWebContext(t),i.applyOsContext(t),i.applySdkContext(t),i.applyIntWebContext(t),i.applyUtcContext(t),i.applyLocContext(t),i.applySessionContext(t),i.applyDeviceContext(t),i.applyAITraceContext(t),i.applyCloudContext(t),(0,S.tO)((0,S.FY)(s),(function(t){0===(0,S.FY)(s[t]).length&&delete s[t]})),r=o,a=t.data,r&&(0,S.rW)(r,(function(t,e){a[t]||(a[t]=e)})),e.processNext(t,n)},e.getPropertiesContext=function(){return i},e.setProperty=function(t,e){o[t]=e}})),n}return(0,n.ne)(e,t),e}(T.i)},21908:function(t,e,i){"use strict";i.d(e,{CY:function(){return p},Pw:function(){return l},RJ:function(){return h},V4:function(){return c},bO:function(){return s},cb:function(){return n},fK:function(){return o},hB:function(){return a},jA:function(){return r},rl:function(){return d},yu:function(){return u}});var n="function",o="object",r="undefined",a="prototype",s="hasOwnProperty",l=Object,c=l[a],d=l.assign,u=l.create,h=l.defineProperty,p=c[s]},26454:function(t,e,i){"use strict";i.d(e,{Rd:function(){return r},ZU:function(){return a},pu:function(){return s}});var n=i(21908),o=null;function r(t){return void 0===t&&(t=!0),o&&t||(typeof globalThis!==n.jA&&globalThis&&(o=globalThis),typeof self!==n.jA&&self&&(o=self),typeof window!==n.jA&&window&&(o=window),typeof i.g!==n.jA&&i.g&&(o=i.g)),o}function a(t){throw new TypeError(t)}function s(t){var e=n.yu;if(e)return e(t);if(null==t)return{};var i=typeof t;function o(){}return i!==n.fK&&i!==n.cb&&a("Object prototype may only be an Object:"+t),o[n.hB]=t,new o}},45362:function(t,e,i){"use strict";i.d(e,{$h:function(){return l},ne:function(){return s},uc:function(){return r}});var n=i(21908),o=i(26454),r=(((0,o.Rd)()||{}).Symbol,((0,o.Rd)()||{}).Reflect,n.rl||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var r in e=arguments[i])n.V4[n.bO].call(e,r)&&(t[r]=e[r]);return t}),a=function(t,e){return a=n.Pw.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e[n.bO](i)&&(t[i]=e[i])},a(t,e)};function s(t,e){function i(){this.constructor=t}typeof e!==n.cb&&null!==e&&(0,o.ZU)("Class extends value "+String(e)+" is not a constructor or null"),a(t,e),t[n.hB]=null===e?(0,o.pu)(e):(i[n.hB]=e[n.hB],new i)}function l(t,e){for(var i=0,n=e.length,o=t.length;i<n;i++,o++)t[o]=e[i];return t}},52708:function(t,e,i){"use strict";i.d(e,{DO:function(){return l},ZP:function(){return c}});var n=i(26007),o=i(2619),r=i(11162);const a={steps:94,clipLight:0,clipDark:0},s=(Object.assign({},a),Object.assign(Object.assign({},a),{baseColor:(0,r.in)("#0078D4")}),{backgroundColor:"#FFFFFF",contrast:0,density:0,designUnit:4,baseHeightMultiplier:8,baseHorizontalSpacingMultiplier:3,direction:n.N.ltr,cornerRadius:2,elevatedCornerRadius:4,focusOutlineWidth:2,fontWeight:{light:100,semilight:200,normal:400,semibold:600,bold:700},disabledOpacity:.3,outlineWidth:1,neutralPalette:["#FFFFFF","#FCFCFC","#FAFAFA","#F7F7F7","#F5F5F5","#F2F2F2","#EFEFEF","#EDEDED","#EAEAEA","#E8E8E8","#E5E5E5","#E2E2E2","#E0E0E0","#DDDDDD","#DBDBDB","#D8D8D8","#D6D6D6","#D3D3D3","#D0D0D0","#CECECE","#CBCBCB","#C9C9C9","#C6C6C6","#C3C3C3","#C1C1C1","#BEBEBE","#BCBCBC","#B9B9B9","#B6B6B6","#B4B4B4","#B1B1B1","#AFAFAF","#ACACAC","#A9A9A9","#A7A7A7","#A4A4A4","#A2A2A2","#9F9F9F","#9D9D9D","#9A9A9A","#979797","#959595","#929292","#909090","#8D8D8D","#8A8A8A","#888888","#858585","#838383","#808080","#7D7D7D","#7B7B7B","#787878","#767676","#737373","#717171","#6E6E6E","#6B6B6B","#696969","#666666","#646464","#616161","#5F5F5F","#5C5C5C","#5A5A5A","#575757","#545454","#525252","#4F4F4F","#4D4D4D","#4A4A4A","#484848","#454545","#424242","#404040","#3D3D3D","#3B3B3B","#383838","#363636","#333333","#313131","#2E2E2E","#2B2B2B","#292929","#262626","#242424","#212121","#1E1E1E","#1B1B1B","#181818","#151515","#121212","#101010","#000000"],accentPalette:["#FFFFFF","#FBFDFE","#F6FAFE","#F2F8FD","#EEF6FC","#E9F4FB","#E5F1FB","#E1EFFA","#DCEDF9","#D8EAF8","#D4E8F8","#CFE6F7","#CBE4F6","#C7E1F6","#C2DFF5","#BEDDF4","#BADAF3","#B6D8F3","#B1D6F2","#ADD4F1","#A9D1F0","#A4CFF0","#A0CDEF","#9CCAEE","#97C8EE","#93C6ED","#8FC4EC","#8AC1EB","#86BFEB","#82BDEA","#7DBAE9","#79B8E8","#75B6E8","#70B3E7","#6CB1E6","#68AFE5","#63ADE5","#5FAAE4","#5BA8E3","#56A6E3","#52A3E2","#4EA1E1","#499FE0","#459DE0","#419ADF","#3D98DE","#3896DD","#3493DD","#3091DC","#2B8FDB","#278DDB","#238ADA","#1E88D9","#1A86D8","#1683D8","#1181D7","#0D7FD6","#097DD5","#047AD5","#0078D4","#0075CF","#0072C9","#006FC4","#006CBE","#0069B9","#0066B4","#0063AE","#0060A9","#005CA3","#00599E","#005699","#005393","#00508E","#004D88","#004A83","#00477D","#004478","#004173","#003E6D","#003B68","#003862","#00355D","#003258","#002F52","#002B4D","#002847","#002542","#00223C","#001F36","#001B30","#00182B","#001525","#00121F","#000000"],accentBaseColor:"#0078D4",accentFillRestDelta:0,accentFillHoverDelta:4,accentFillActiveDelta:-5,accentFillFocusDelta:0,accentFillSelectedDelta:12,accentForegroundRestDelta:0,accentForegroundHoverDelta:6,accentForegroundActiveDelta:-4,accentForegroundFocusDelta:0,neutralFillRestDelta:7,neutralFillHoverDelta:10,neutralFillActiveDelta:5,neutralFillFocusDelta:0,neutralFillSelectedDelta:7,neutralFillInputRestDelta:0,neutralFillInputHoverDelta:0,neutralFillInputActiveDelta:0,neutralFillInputFocusDelta:0,neutralFillInputSelectedDelta:0,neutralFillStealthRestDelta:0,neutralFillStealthHoverDelta:5,neutralFillStealthActiveDelta:3,neutralFillStealthFocusDelta:0,neutralFillStealthSelectedDelta:7,neutralFillToggleHoverDelta:8,neutralFillToggleActiveDelta:-5,neutralFillToggleFocusDelta:0,baseLayerLuminance:-1,neutralFillCardDelta:3,neutralForegroundDarkIndex:93,neutralForegroundLightIndex:0,neutralForegroundHoverDelta:0,neutralForegroundActiveDelta:0,neutralForegroundFocusDelta:0,neutralDividerRestDelta:8,neutralOutlineRestDelta:25,neutralOutlineHoverDelta:40,neutralOutlineActiveDelta:16,neutralOutlineFocusDelta:25});function l(t,e){return(0,o.Z)(t)?t(e):t}var c=s},8340:function(t,e,i){"use strict";i.d(e,{$p:function(){return h},ET:function(){return u},K2:function(){return g},Kf:function(){return d},lB:function(){return n},mq:function(){return l},sF:function(){return p},uZ:function(){return f},vm:function(){return s}});var n,o=i(11162),r=i(60279),a=i(9791);function s(t){const e=(0,a.Z)(t);return function(t){return"function"==typeof t?i=>e(Object.assign({},i,{backgroundColor:t(i)})):e(t)}}function l(t,e){const i=(0,a.Z)(e);return e=>"function"==typeof e?n=>i(Object.assign({},n,{backgroundColor:e(n)}))[t]:i(e)[t]}!function(t){t.rest="rest",t.hover="hover",t.active="active",t.focus="focus",t.selected="selected"}(n||(n={}));const c=(0,a.Z)((t=>{let e=(0,o.in)(t);if(null!==e)return e;if(e=(0,o.hg)(t),null!==e)return e;throw new Error(`${t} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`)}));function d(t){return(0,o.pJ)(t)||(0,o.b4)(t)}function u(t,e){return c(t).equalValue(c(e))}const h=(0,a.Z)(((t,e)=>(0,r.wo)(c(t),c(e))),((t,e)=>t+e));function p(t){return(0,r.hM)(c(t))}function g(...t){return e=>Math.max.apply(null,t.map((t=>t(e))))}const f=(t,e,i)=>Math.min(Math.max(t,e),i)},17533:function(t,e,i){"use strict";i.d(e,{jq:function(){return l}});var n=i(33390),o=i(8340),r=i(9739);const a=(0,o.K2)(n.MY,n.jW,n.hD,n.VQ,n.qD,n.fq,n.gs,n.IU);function s(t){return e=>{const i=(0,r.BD)(e),o=i>=a(e)?-1:1;return(0,r.qZ)(i+o*t(e),(0,n.yv)(e))}}const l=(0,o.vm)(s(n.qD)),c=(0,o.vm)(s(n.fq)),d=(0,o.vm)(s(n.gs)),u=(0,o.vm)(s(n.IU)),h=(0,o.vm)(s(n.Uy));(0,o.vm)((t=>({rest:l(t),hover:c(t),active:d(t),focus:u(t),selected:h(t)})))},89967:function(t,e,i){"use strict";i.d(e,{Xi:function(){return c},wF:function(){return l}});var n=i(33390),o=i(8340),r=i(9739);const a=(0,o.K2)(n.MY,n.jW,n.hD,n.VQ);function s(t){return e=>{const i=(0,r.BD)(e),o=i>=a(e)?-1:1;return(0,r.qZ)(i+o*t(e),(0,n.yv)(e))}}const l=(0,o.vm)(s(n.MY)),c=(0,o.vm)(s(n.jW)),d=(0,o.vm)(s(n.hD)),u=(0,o.vm)(s(n.VQ)),h=(0,o.vm)(s(n.y$));(0,o.vm)((t=>({rest:l(t),hover:c(t),active:d(t),focus:u(t),selected:h(t)})))},22263:function(t,e,i){"use strict";i.d(e,{Q:function(){return c}});var n=i(33390),o=i(8340),r=i(52708),a=i(9739);function s(t,e,i,o,s,l){return c=>{const d=(0,r.DO)(t,c),u=(0,a.Yc)(c)?-1:1,h=(0,a.Ce)(n.Cz)(d)(a.Tq)((()=>u))((0,a.iC)((0,r.DO)(e,c)))(c),p=(0,a.Ik)(t,h)(c),g=(0,r.DO)(i,c),f=(0,r.DO)(o,c),v=(0,r.DO)(s,c),m=(0,r.DO)(l,c);return function(t,e,i,n,o,r,s){const l=t+i*Math.abs(n-o),c=1===i?n<o:i*n>i*o,d=c?t:l,u=c?l:t,h=d+i*r,p=d+i*s;return{rest:(0,a.qZ)(d,e),hover:(0,a.qZ)(u,e),active:(0,a.qZ)(h,e),focus:(0,a.qZ)(p,e)}}(p,d,u,g,f,v,m)}}function l(t){return s(n.yv,t,0,0,0,0)}const c=(0,o.mq)(o.lB.rest,(0,o.vm)(l(4.5)));(0,o.mq)(o.lB.rest,(0,o.vm)(l(3)))},97164:function(t,e,i){"use strict";function n(t){return(...e)=>i=>{const n=e[0];let o="function"==typeof n?n(i):n;for(let n=1;n<e.length;n++){const r=e[n];o=t(o,"function"==typeof r?r(i):r)}return o}}i.d(e,{A4:function(){return L},$B:function(){return D},s5:function(){return k},l$:function(){return S}});const o=n(((t,e)=>t+e)),r=n(((t,e)=>t-e)),a=n(((t,e)=>t*e));n(((t,e)=>t/e));function s(...t){return o.apply(this,t)}function l(...t){return r.apply(this,t)}function c(...t){return a.apply(this,t)}var d,u,h,p=i(2696),g=i(82917),f=i(33390),v=i(9739),m=i(8340);function b(t,e){return i=>-1===(0,f.q2)(i)?e(i):t(i)}!function(t){t[t.L1=0]="L1",t[t.L1Alt=3]="L1Alt",t[t.L2=10]="L2",t[t.L3=13]="L3",t[t.L4=16]="L4"}(d||(d={})),function(t){t[t.L1=76]="L1",t[t.L1Alt=76]="L1Alt",t[t.L2=79]="L2",t[t.L3=82]="L3",t[t.L4=85]="L4"}(u||(u={})),function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(h||(h={}));const y=(0,v.hi)(f.yv,(t=>{const e=(0,f.q2)(t);return new p.h(e,e,e,1).toStringHexRGB()})),w=t=>(0,g.uZ)(l(y,f.Dk)(t),0,(0,f.yv)(t).length-1),x=(0,m.K2)(f.MY,f.jW,f.hD),C=(0,m.K2)(s(y,f.Dk),x),$=t=>{const e=.14,i=new p.h(e,e,e,1);return(0,v.hi)(f.yv,i.toStringHexRGB())(t)},k=(0,m.vm)(b((0,v.qZ)(l(w,f.Dk),f.yv),(0,v.Qs)(f.yv)(0,l($,c(f.Dk,5))))),L=(0,m.vm)(b((0,v.qZ)(w,f.yv),(0,v.Qs)(f.yv)(0,l($,c(f.Dk,4))))),D=(0,m.vm)(b((0,v.qZ)(s(w,f.Dk),f.yv),(0,v.Qs)(f.yv)(f.Dk,l($,c(f.Dk,3))))),S=((0,m.vm)(b((0,v.qZ)(y,f.yv),(0,v.Qs)(f.yv)(0,l($,c(f.Dk,3))))),(0,m.vm)(b((0,v.qZ)(C,f.yv),(0,v.Qs)(f.yv)(x,l($,c(f.Dk,2))))),(0,m.vm)(b((0,v.qZ)(s(C,f.Dk),f.yv),(0,v.Qs)(f.yv)(s(x,f.Dk),l($,f.Dk)))),(0,m.vm)(b((0,v.qZ)(s(C,c(f.Dk,2)),f.yv),(0,v.Qs)(f.yv)(s(x,c(f.Dk,2)),$))))},9739:function(t,e,i){"use strict";i.d(e,{BD:function(){return f},Ce:function(){return p},Ik:function(){return s},Qs:function(){return u},Tq:function(){return g},Yc:function(){return c},hi:function(){return l},iC:function(){return v},qZ:function(){return d}});var n,o=i(52708),r=i(33390),a=i(8340);function s(t,e){return i=>{if(!(0,a.Kf)(e))return-1;const n=(0,o.DO)(t,i),r=n.indexOf(e);return-1!==r?r:n.findIndex((t=>(0,a.Kf)(t)&&(0,a.ET)(e,t)))}}function l(t,e){return i=>{const n=(0,o.DO)(t,i),r=(0,o.DO)(e,i),l=s(n,r)(i);let c;if(-1!==l)return l;try{c=(0,a.sF)(r)}catch(t){c=-1}return-1===c?0:n.map(((t,e)=>({luminance:(0,a.sF)(t),index:e}))).reduce(((t,e)=>Math.abs(e.luminance-c)<Math.abs(t.luminance-c)?e:t)).index}}function c(t){return(0,a.sF)((0,r.Cz)(t))<=(-.1+Math.sqrt(.21))/2}function d(t,e){return"function"==typeof t?i=>e(i)[(0,a.uZ)(t(i),0,e(i).length-1)]:e[(0,a.uZ)(t,0,e.length-1)]}function u(t){return(e,i)=>n=>d(c(n)?(0,o.DO)(i,n):(0,o.DO)(e,n),t(n))}function h(t,e,i=0,n=t.length-1){if(n===i)return t[i];const o=Math.floor((n-i)/2)+i;return e(t[o])?h(t,e,i,o):h(t,e,o+1,n)}function p(t){return e=>i=>n=>r=>s=>{const l=(0,o.DO)(t,s),c=(0,o.DO)(e,s),d=c.length,u=(0,a.uZ)(i(l,c,s),0,d-1),p=n(u,c,s);const g=[].concat(c),f=d-1;let v=u;return-1===p&&(g.reverse(),v=f-v),h(g,(function(t){return r((0,a.$p)(l,t))}),v,f)}}function g(t,e,i){return l(e,t)(i)}function f(t){return l(r.yv,(0,r.Cz)(t))(t)}function v(t){return e=>e>=t}!function(t){t.neutral="neutral",t.accent="accent"}(n||(n={}))},33390:function(t,e,i){"use strict";i.d(e,{Cz:function(){return r},Dk:function(){return b},IU:function(){return f},MY:function(){return s},Uy:function(){return v},VQ:function(){return d},fq:function(){return p},gs:function(){return g},hD:function(){return c},jW:function(){return l},q2:function(){return m},qD:function(){return h},y$:function(){return u},yv:function(){return a}});var n=i(52708);function o(t){return e=>e&&void 0!==e[t]?e[t]:n.ZP[t]}const r=o("backgroundColor"),a=(o("accentBaseColor"),o("cornerRadius"),o("elevatedCornerRadius"),o("neutralPalette")),s=(o("accentPalette"),o("contrast"),o("designUnit"),o("baseHeightMultiplier"),o("baseHorizontalSpacingMultiplier"),o("direction"),o("outlineWidth"),o("focusOutlineWidth"),o("disabledOpacity"),o("accentFillRestDelta"),o("accentFillHoverDelta"),o("accentFillActiveDelta"),o("accentFillFocusDelta"),o("accentFillSelectedDelta"),o("accentForegroundRestDelta"),o("accentForegroundHoverDelta"),o("accentForegroundActiveDelta"),o("accentForegroundFocusDelta"),o("neutralFillRestDelta")),l=o("neutralFillHoverDelta"),c=o("neutralFillActiveDelta"),d=o("neutralFillFocusDelta"),u=o("neutralFillSelectedDelta"),h=(o("neutralFillInputRestDelta"),o("neutralFillInputHoverDelta"),o("neutralFillInputActiveDelta"),o("neutralFillInputFocusDelta"),o("neutralFillInputSelectedDelta"),o("neutralFillStealthRestDelta")),p=o("neutralFillStealthHoverDelta"),g=o("neutralFillStealthActiveDelta"),f=o("neutralFillStealthFocusDelta"),v=o("neutralFillStealthSelectedDelta"),m=(o("neutralFillToggleHoverDelta"),o("neutralFillToggleActiveDelta"),o("neutralFillToggleFocusDelta"),o("baseLayerLuminance")),b=o("neutralFillCardDelta");o("neutralForegroundDarkIndex"),o("neutralForegroundLightIndex"),o("neutralForegroundHoverDelta"),o("neutralForegroundActiveDelta"),o("neutralForegroundFocusDelta"),o("neutralDividerRestDelta"),o("neutralOutlineRestDelta"),o("neutralOutlineHoverDelta"),o("neutralOutlineActiveDelta"),o("fontWeight"),o("neutralOutlineFocusDelta")},20005:function(t,e,i){"use strict";i.d(e,{gn:function(){return n}});function n(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}},38178:function(t,e,i){"use strict";i.d(e,{v:function(){return p}});var n=i(30291),o=i(65473);const r=o.ZP.createContext({}),{Provider:a,Consumer:s}=r;var l=i(67514),c=i(54716);const d=(0,l.create)((0,c.Z)()),u=(new l.SheetsManager,new l.SheetsRegistry);function h(t,e){return"string"==typeof t&&"string"==typeof e?t.concat(" ",e):"string"==typeof t?t:"string"==typeof e?e:void 0}class p extends o.ZP.Component{constructor(t,e){super(t,e),this.hasCreatedIntialStyleSheets=!1,this.index=p.index-=1,this.designSystem=e}static set jss(t){p.sheetManager.jss=t}static get jss(){return p.sheetManager.jss}static subscribe(t){return p.sheetManager.subscribe(t)}static unsubscribe(t){p.sheetManager.unsubscribe(t)}render(){if(!this.hasCreatedIntialStyleSheets){if(this.styles){const t={meta:this.managedComponent.displayName||this.managedComponent.name,index:this.index};"function"==typeof p.createGenerateClassName&&(t.generateClassName=p.createGenerateClassName(this.designSystem)),p.sheetManager.add(this.styles,this.designSystem,t)}this.props.jssStyleSheet&&this.createPropStyleSheet(),this.hasCreatedIntialStyleSheets=!0}return o.ZP.createElement(this.managedComponent,this.managedComponentProps())}componentDidUpdate(t){const e=!!this.props.jssStyleSheet,i=!!t.jssStyleSheet;this.designSystem!==this.context?(this.styles&&(p.sheetManager.update(this.styles,this.designSystem,this.context),this.forceUpdate()),i&&e?(t.jssStyleSheet===this.props.jssStyleSheet?p.sheetManager.update(this.props.jssStyleSheet,this.designSystem,this.context):(p.sheetManager.remove(t.jssStyleSheet,this.designSystem),this.createPropStyleSheet(this.context)),this.forceUpdate()):i&&!e?p.sheetManager.remove(t.jssStyleSheet,this.designSystem):!i&&e&&(this.createPropStyleSheet(this.context),this.forceUpdate()),this.designSystem=this.context):i&&e&&t.jssStyleSheet!==this.props.jssStyleSheet&&(p.sheetManager.remove(t.jssStyleSheet,this.designSystem),this.createPropStyleSheet(),this.forceUpdate()),i&&!e?p.sheetManager.remove(t.jssStyleSheet,this.designSystem):!i&&e&&(this.createPropStyleSheet(),this.forceUpdate())}componentWillUnmount(){this.styles&&p.sheetManager.remove(this.styles,this.designSystem),this.props.jssStyleSheet&&p.sheetManager.remove(this.props.jssStyleSheet,this.designSystem),p.index++,this.hasCreatedIntialStyleSheets=!1}primaryStyleSheet(){if(this.styles)return p.sheetManager.get(this.styles,this.designSystem)}secondaryStyleSheet(){if(this.props.jssStyleSheet)return p.sheetManager.get(this.props.jssStyleSheet,this.designSystem)}managedComponentProps(){const t=Object.assign(Object.assign({},this.props),{managedClasses:this.getManagedClassNames(),ref:this.props.innerRef});return delete t.jssStyleSheet,delete t.innerRef,t}getManagedClassNames(){let t={},e={};const i=this.primaryStyleSheet(),o=this.secondaryStyleSheet();return i&&i.hasOwnProperty("classes")&&(t=Object.assign({},i.classes)),o&&o.hasOwnProperty("classes")&&(e=Object.assign({},o.classes)),(0,n.Z)(t,e,h)}createPropStyleSheet(t=this.designSystem){const e=this.primaryStyleSheet(),i={meta:`${this.managedComponent.displayName||this.managedComponent.name} - jssStyleSheet`,index:e?e.options.index+1:this.index+1};"function"==typeof p.createGenerateClassName&&(i.generateClassName=p.createGenerateClassName(t)),p.sheetManager.add(this.props.jssStyleSheet,t,i)}}p.contextType=r,p.index=-1e3,p.sheetManager=new class{constructor(){this.jss=d,this.registry=new WeakMap}add(t,e,i){const n=this.getTracker(t,e);if(Array.isArray(n))return void n[1]++;let o=this.registry.get(t);void 0===o&&(o=new WeakMap,this.registry.set(t,o)),this.registry.get(t).set(e,[this.createStyleSheet(t,e,i),1])}get(t,e){const i=this.getTracker(t,e);if(Array.isArray(i)&&i[0])return i[0]}update(t,e,i){const n=this.getTracker(t,e);if(n)if(1===n[1]&&!this.get(t,i)&&t&&"object"==typeof t){const o=n[0];o.update(i),this.notify("update",o),this.registry.get(t).delete(e),this.registry.get(t).set(i,n)}else this.remove(t,e),this.add(t,i,n[0].options)}remove(t,e){const i=this.getTracker(t,e);if(Array.isArray(i)&&(i[1]--,0===i[1])){const n=i[0];this.jss.removeStyleSheet(n),u.remove(n),this.notify("remove",n),this.registry.get(t).delete(e)}}count(t,e){const i=this.getTracker(t,e);return Array.isArray(i)?i[1]:-1}clean(){this.registry=new WeakMap}getTracker(t,e){const i=this.registry.get(t);if(i instanceof WeakMap){const t=i.get(e);if(Array.isArray(t))return t}}createStyleSheet(t,e,i={}){const n="function"==typeof t?t(e):t,o=this.jss.createStyleSheet(n,Object.assign({link:!0},i));return o.update(e).attach(),u.add(o),this.notify("add",o),o}notify(t,e){Array.isArray(this.subscribers)&&this.subscribers.forEach((i=>i({type:t,sheet:e})))}subscribe(t){return Array.isArray(this.subscribers)||(this.subscribers=[]),-1===this.subscribers.indexOf(t)&&this.subscribers.push(t),()=>{this.unsubscribe(t)}}unsubscribe(t){if(Array.isArray(this.subscribers)){const e=this.subscribers.indexOf(t);-1!==e&&this.subscribers.splice(e,1)}}}},20654:function(t,e,i){"use strict";var n=i(39619),o=i(80329);e.Z=new class{constructor(){this._breakpoints=o.R1,this._defaultBreakpoint=0,this.subscriptions=[],this.update=()=>{const t=(0,n.N)()?(0,o.wk)(window.innerWidth,this._breakpoints):this.defaultBreakpoint;this.breakpoint!==t&&(this.breakpoint=t,this.notifySubscribers(this.breakpoint)),this.openRequestAnimationFrame=!1},this.currentBreakpoint=()=>this.breakpoint,this.requestFrame=()=>{this.openRequestAnimationFrame||(this.openRequestAnimationFrame=!0,window.requestAnimationFrame(this.update))},(0,n.N)()?(this.breakpoint=(0,o.wk)(window.innerWidth,this._breakpoints),window.addEventListener("resize",this.requestFrame)):this.breakpoint=this.defaultBreakpoint}get breakpoints(){return this._breakpoints}set breakpoints(t){this._breakpoints=t,this.update()}get defaultBreakpoint(){return this._defaultBreakpoint}set defaultBreakpoint(t){this._defaultBreakpoint=t,this.update()}subscribe(t){this.subscriptions.includes(t)||this.subscriptions.push(t)}unsubscribe(t){this.subscriptions=this.subscriptions.filter((e=>t!==e))}notifySubscribers(t){this.subscriptions.forEach((e=>{e(t)}))}}},80329:function(t,e,i){"use strict";i.d(e,{R1:function(){return n},wk:function(){return o}});const n=[0,540,768,1084,1400,1779];function o(t,e=n){for(let i=e.length-1;i>=0;i--)if(t>=e[i])return i}},33832:function(t,e,i){"use strict";var n;i.d(e,{$B:function(){return l},$Y:function(){return s},BE:function(){return g},BJ:function(){return r},Lp:function(){return d},Q6:function(){return o},RN:function(){return p},bq:function(){return c},ei:function(){return h},ho:function(){return a},kL:function(){return v},mr:function(){return f},oM:function(){return m},wn:function(){return u}}),function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(n||(n={}));const o=40,r=37,a=39,s=38,l=35,c=13,d=27,u=36,h=32,p=9,g="ArrowLeft",f="ArrowRight",v="Enter",m="Tab"},26007:function(t,e,i){"use strict";var n;i.d(e,{N:function(){return n}}),function(t){t.ltr="ltr",t.rtl="rtl"}(n||(n={}))},94731:function(t,e,i){"use strict";function n(t,e,i){return i<t?e:i>e?t:i}i.d(e,{w:function(){return n}})},99478:function(t,e,i){"use strict";function n(t,...e){return t.replace(/{(\d+)}/g,(function(t,i){if(i>=e.length)return t;const n=e[i];return"number"==typeof n||n?n:""}))}function o(t){return!t||!t.trim()}i.d(e,{TF:function(){return o},WU:function(){return n}})},15933:function(t,e,i){"use strict";var n;i.d(e,{H:function(){return n}}),function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(n||(n={}))},34757:function(){var t;!function(t){var e=function(){function t(){}return t.getGlobal=function(){return"undefined"!=typeof globalThis&&globalThis?globalThis:"undefined"!=typeof self&&self?self:"undefined"!=typeof window&&window?window:null},t.hasWindow=function(){return Boolean("object"==typeof window&&window)},t.getGlobalInst=function(t){if("window"===t&&this.hasWindow())return window;var e=this.getGlobal();return e&&e[t]?e[t]:null},t}();t.getGlobalWindow=e}(t||(t={})),function(t){var e=function(){function t(){}return t.trackerConfig={useTelemetryService:!1,selectorMethod:".",directFunctionCall:!0,impressionIdParamName:"",publisherName:"msnperegrine"},t}();t.Config=e}(t||(t={})),t||(t={}),function(t){var e=function(){this.element=null,this.trackBeacons=[]};t.VideoTrackEvents=e}(t||(t={})),function(t){var e=function(){function t(){}return t.appinsights={stagingConnectionString:"9b1500b8-3f89-4126-8af8-cd9020439a04",prodConnectionString:"922c1827-2168-46e4-b953-34fef5deff39"},t.msn={videoViewIdMacro:"VIDEO_VIEW_ID"},t}();t.Constants=e}(t||(t={})),function(t){t._window=t.getGlobalWindow.getGlobalInst("window");var e=function(){function e(){}return e.isDebug=function(t){return"true"===this.getQueryParam("na-debug",t.location.search)},e.getRid=function(e){if(t.config.publisherName.indexOf("msn")>=0)for(var i=0;i<e.beacons.length;i++){if(0==e.beacons[i].url.indexOf("https://srtb.msn.com"))return this.getQueryParam("rid",e.beacons[i].url)}return e.impid},e.replaceQueryParam=function(t,e,i){var n=this.getQueryParam(t,i),o=t.concat("=").concat(n),r=t.concat("=").concat(e);return i&&i.indexOf(o)>=0?i.replace(o,r):i},e.getQueryParam=function(t,e){var i=this.getQueryParams(new RegExp("^"+this.escapeRegExp(t)+"$"),e);return i&&i.length>0?i[0].value:null},e.getQueryParams=function(t,e){return e&&e.indexOf("?")>=0&&(e=e.substring(e.indexOf("?")+1)),this.getKeyValuePairs(t,e,"&")},e.getKeyValuePairs=function(t,e,i){if(!e||!t||!t.test)return[];for(var n=[],o=e.split(i),r=0;r<o.length;r++){var a=o[r],s=a.indexOf("=");if(-1!==s){var l=a.substring(0,s).trim(),c=a.substring(s+1).trim();t.test(l)&&n.push({name:l,value:c})}}return n},e.escapeRegExp=function(t){return t?t.replace(this.regexSpecialCharsRegex,"\\$1"):t},e.consoleLog=function(t,e){this.isDebug(e)&&console.log(t)},e.JSONstringify=function(t){if("function"==typeof JSON.stringify)return JSON.stringify(t)},e.getMetaContentByName=function(e,i){try{i||(i=t._window);for(var n=i.document.getElementsByTagName("meta"),o=0;o<n.length;o++)if(n[o].getAttribute("name")===e)return n[o].getAttribute("content");return""}catch(t){return""}},e.loadScript=function(t,e){var i=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.src=t,n.onload=e,n.onreadystatechange=function(){"complete"===this.readyState&&e()},i.appendChild(n)},e.fireBeacon=function(e){e&&t._window&&t._window.Image&&((new t._window.Image).src=e)},e.addQueryParam=function(t,e,i){return t+=-1==t.indexOf("?")?"?":"&",t+=e+"="+i},e.isIE=function(t){return t.navigator.userAgent.indexOf("MSIE ")>-1},e.getCurrentScriptTag=function(t){if(!t)return null;if((e=t.document.currentScript)&&e.src)return e.src;var e,i=t.document.getElementsByTagName("script");if(i&&i.length>0&&-1!=(e=i[i.length-1]).src.indexOf("nativeads/msantracker"))return e.src;var n="",o=t.document.querySelector("script[src*='nativeads/msantracker']");return o&&(n=o.src),n},e.isMSN=function(t){return t?-1!=t.location.href.indexOf("msn.com"):null},e.isStagingEnv=function(t){if(!t)return null;var e=this.getCurrentScriptTag(t);return!!e&&-1!=e.indexOf("nativeads/staging/")},e.getPublisherName=function(t){return t?this.getQueryParam("publisherName",t):""},e.inIframe=function(){try{return t._window.self!==t._window.top}catch(t){return!0}},e.getTargetWindow=function(){return this.inIframe()?t._window.parent:t._window},e.isDocumentReady=function(t){return!!t&&(!(!t.navigator.userAgent||-1===t.navigator.userAgent.indexOf("Android")||"loaded"!=t.document.readyState)||"complete"==t.document.readyState)},e.getVideoViewId=function(){return this.getGuid().replace(/-/g,"")},e.getGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))},e.regexSpecialCharsRegex="/([.*+?^=!:${}()|[]/\\])/g",e}();t.utils=e}(t||(t={})),function(t){var e=function(){function e(){}return e.initialize=function(t){t=t},e.logEvent=function(t,e,i){this.logEventForMSN(t,e,i)},e.logEventForMSN=function(e,i,n){if(i&&n){var o=void 0;this.elementsToTrack&&e&&this.elementsToTrack[e]&&(o=this.elementsToTrack[e]),n.publishername=t.config.publisherName;var r=this.targetWindow.btoa(t.utils.JSONstringify(n)).substring(0,1800),a="https://srtb.msn.com/log?r="+o+"&n="+i+"&d="+encodeURIComponent(r);t.utils.fireBeacon(a),n.rid=o,t.utils.consoleLog("TelemetryEvent: "+i+" "+t.utils.JSONstringify(n),this.targetWindow)}},e.setElementToTrack=function(t,e){t&&e&&(this.elementsToTrack[t]=e)},e.logAdView=function(t,e,i){var n={elementId:e,percentage:i.percentage,duration:i.duration,type:i.type,triggerType:i.triggerType,url:i.url};this.logEvent(t,"mt_view",n)},e.logVideoAdPlay=function(t,e,i){var n={elementId:e,percentage:i.percentage,duration:i.duration,type:i.type,triggerType:i.triggerType,url:i.url};this.logEvent(t,"mt_view",n)},e.logAdClick=function(t,e,i){var n={elementId:e,type:i.type,url:i.url};this.logEvent(t,"mt_click",n)},e.targetWindow=t._window,e.elementsToTrack={},e}();t.Telemetry=e}(t||(t={})),function(t){var e=function(){function e(){}return e.trackElement=function(t,i,n,o,r){var a=e.DEFAULT_PERCENTINVIEW,s=e.DEFAULT_DURATIONINVIEW;return o&&(o.percentage&&(a=o.percentage),o.duration&&(s=o.duration)),e.elementsToTrack.push({selector:t,element:i,targetWindow:n,percentInView:a,milliSecondsInView:s,viewBeacon:o,action:r}),null==e.processing&&(e.processing=setInterval(e.process,e.interval)),this},e.process=function(){try{if(e.elementsToTrack.length>0){for(var i=0;i<e.elementsToTrack.length;i++)e.appearedElements.indexOf(i)<0&&e.elementsWaitingForTimeout.indexOf(i)<0&&e.isElementInView(e.elementsToTrack[i])&&(e.elementsWaitingForTimeout.push(i),setTimeout(e.checkAfterTimeout,e.elementsToTrack[i].milliSecondsInView,e.elementsToTrack[i],i));e.elementsToTrack.length===e.appearedElements.length&&e.stopProcessing()}}catch(i){var n=e.elementsToTrack;n.length>0&&n[0]&&n[0].viewBeacon?t.Telemetry.logEvent(n[0].viewBeacon.guid,"mt_err",{msg:i.message,details:n[0].viewBeacon}):t.Telemetry.logEvent("","mt_err",{msg:i.message})}},e.checkAfterTimeout=function(t,i){e.appearedElements.indexOf(i)<0&&e.isElementInView(t)&&(e.appearedElements.push(i),t.action.call(void 0,t.selector,t.viewBeacon,t.targetWindow)),e.elementsWaitingForTimeout.splice(e.elementsWaitingForTimeout.indexOf(i),1)},e.isElementInView=function(i){var n=i.targetWindow,o=n.document;if(!i.element)return!1;var r,a=i.element,s=o.getElementsByTagName("body");s&&(r=s[0]);var l=a.getBoundingClientRect();if(!l)return!1;var c=-1===l.left?0:l.left,d=-1===l.top?0:l.top,u=a.offsetHeight,h=a.offsetWidth,p=o.elementFromPoint(c+h/2,d+u/2);if("msnperegrine"!=t.config.publisherName&&(!p||p&&a!==p&&!a.contains(p)))return!1;var g=n.innerHeight||o.clientWidth||r.clientWidth,f=n.innerWidth||o.clientHeight||r.clientHeight,v=n.pageYOffset,m=v+g,b=d+n.scrollY,y=b+u,w=n.pageXOffset,x=w+f,C=c+n.scrollX,$={pTop:v,pBottom:m,pLeft:w,pRight:x,eTop:b,eBottom:y,eLeft:C,eRight:C+h,eWidth:h,eHeight:u,percentInView:i.percentInView};return e.validateIsElementInView($)},e.validateIsElementInView=function(t){if(t.eBottom<=t.pTop||t.eTop>=t.pBottom||t.eRight<=t.pLeft||t.eLeft>=t.pRight)return!1;var e=0,i=0,n=0,o=0;t.pTop>t.eTop&&t.pTop<t.eBottom&&(e=t.pTop-t.eTop),t.pBottom<t.eBottom&&t.pBottom>t.eTop&&(n=t.eBottom-t.pBottom),t.pLeft>t.eLeft&&t.pLeft<t.eRight&&(o=t.pLeft-t.eLeft),t.pRight<t.eRight&&t.pRight>t.eLeft&&(i=t.eRight-t.pRight);var r=o+i;return(e+n)*t.eWidth+r*t.eHeight<=t.eHeight*t.eWidth*(100-t.percentInView)/100},e.stopProcessing=function(){clearInterval(e.processing),e.processing=null},e.DEFAULT_PERCENTINVIEW=50,e.DEFAULT_DURATIONINVIEW=1e3,e.elementsToTrack=[],e.appearedElements=[],e.elementsWaitingForTimeout=[],e.processing=null,e.interval=100,e}();t.AppearUtils=e}(t||(t={})),function(t){var e=function(){function e(){}return e.trackElement=function(i,n,o,r,a,s){for(var l=t.utils.getVideoViewId(),c=[],d=0;d<r.length;d++){var u=r[d];if(e.toTrackUrlCounts=e.toTrackUrlCounts+1,"videoView"!=u.type){var h=t.utils.getQueryParam("rlink",u.url),p=decodeURIComponent(h),g=t.utils.replaceQueryParam("vi",l,p),f=encodeURIComponent(g);u.url=t.utils.replaceQueryParam("rlink",f,u.url)}c.push({selector:i,element:n,videoParenentElement:a,videoBeacon:u,action:s,targetWindow:o,percentInView:u.percentage?u.percentage:50})}return e.elementsToTrack.push({element:n,trackBeacons:c}),null==e.processing&&(e.processing=setInterval(e.process,e.interval)),n.onplay=function(){e.refreshBeaconsWhenStart(n,o)},n.onseeking=function(){e.refreshBeaconsWhenStart(n,o)},this},e.untrackElement=function(t){var i=e.getElementBeaconsIndex(e.elementsToTrack,t);i>=0&&e.elementsToTrack.splice(i,1)},e.getElementBeaconsIndex=function(t,e){if(t&&t.length>0)for(var i=0;i<t.length;i++)if(t[i].element==e)return i;return-1},e.refreshBeaconsWhenStart=function(i,n){if(i&&0==i.currentTime){var o=t.utils.getVideoViewId(),r=e.getElementBeaconsIndex(e.elementsToTrack,i);if(r>=0){for(var a=e.elementsToTrack[r].trackBeacons,s=[],l=0;l<a.length;l++){var c=a[l],d=c.videoBeacon;if("videoView"!=d.type){e.trackedBeacons.indexOf(d.url)>=0&&(e.toTrackUrlCounts=e.toTrackUrlCounts+1);var u=t.utils.getQueryParam("rlink",d.url),h=decodeURIComponent(u),p=t.utils.replaceQueryParam("vi",o,h),g=encodeURIComponent(p);d.url=t.utils.replaceQueryParam("rlink",g,d.url)}s.push({selector:c.selector,element:c.element,videoParenentElement:c.videoParenentElement,videoBeacon:d,action:c.action,targetWindow:n,percentInView:c.percentInView?c.percentInView:50})}e.elementsToTrack[r].trackBeacons=s}null==e.processing&&(e.processing=setInterval(e.process,e.interval))}},e.process=function(){try{if(e.elementsToTrack&&e.elementsToTrack.length>0){for(var i=0;i<e.elementsToTrack.length;i++)for(var n=e.elementsToTrack[i].trackBeacons,o=0;o<n.length;o++){var r=n[o];e.trackedBeacons.indexOf(r.videoBeacon.url)<0&&e.trackPlay(r)}e.toTrackUrlCounts===e.trackedBeacons.length&&e.stopProcessing()}}catch(i){var a=e.elementsToTrack;if(a&&a.length>0&&a[0].trackBeacons&&a[0].trackBeacons[0].videoBeacon){var s=a[0].trackBeacons[0].videoBeacon;t.Telemetry.logEvent(s.guid,"mt_err",{msg:i.message,details:s})}else t.Telemetry.logEvent("","mt_err",{msg:i.message})}},e.trackPlay=function(i){var n=i.element,o=i.videoBeacon.duration,r=1e3*n.currentTime,a=i.videoBeacon.type,s={targetWindow:i.targetWindow,element:i.videoParenentElement?i.videoParenentElement:i.element,percentInView:i.percentInView};t.AppearUtils.isElementInView(s)&&e.trackedBeacons.indexOf(i.videoBeacon.url)<0&&("videoView"==a?this.checkPlayedTime(n)>=o&&(i.action.call(void 0,i.selector,i.videoBeacon),e.trackedBeacons.push(i.videoBeacon.url)):(0==o&&r>o||o>0&&this.checkCurrentTime(r,o))&&(i.action.call(void 0,i.selector,i.videoBeacon),e.trackedBeacons.push(i.videoBeacon.url)))},e.checkCurrentTime=function(t,e){return t>=e-50&&t<=e+50},e.checkPlayedTime=function(t){var e=0;if(t.played&&t.played.length>0)for(var i=0;i<t.played.length;i++)e+=t.played.end(i)-t.played.start(i);return 1e3*e},e.stopProcessing=function(){clearInterval(e.processing),e.processing=null},e.elementsToTrack=[],e.trackedBeacons=[],e.processing=null,e.interval=100,e.toTrackUrlCounts=0,e}();t.PlayUtils=e}(t||(t={})),function(t){var e=function(){this.type="view",this.url="",this.guid="",this.triggerType="view",this.percentage=50,this.duration=1e3};t.ViewBeacon=e}(t||(t={})),function(t){var e=function(){this.type="videoView",this.url="",this.guid="",this.triggerType="play",this.percentage=50,this.duration=0};t.VideoBeacon=e}(t||(t={})),function(t){var e=function(){this.impid="",this.rid="",this.beacons=[]};t.TrackableElement=e}(t||(t={})),function(t){function e(e){var n=new t.TrackableElement,o=new URLSearchParams(t.scriptSrc);if(o){var r="";if(o.has("v")){if(r=o.get("v"),o.has("d")){var a=o.get("d");t.Telemetry.logEvent("","mt_info",{msg:"Version",clientVersion:a})}var s=decodeURI(r),l=new URLSearchParams(s),c=t.config.impressionIdParamName;if(l.has(c)&&(n.impid=l.get(c)),""!=n.impid){l.has("rId")&&(n.rid=l.get("rId"));var d=new t.ViewBeacon;d.url=s,n.beacons=[d],i([n],e,!1)}else t.Telemetry.logEvent("","mt_err",{msg:"view_id is empty or null",url:s})}else t.Telemetry.logEvent("","mt_err",{msg:"viewability beacon not present",url:t.scriptSrc})}else t.Telemetry.logEvent("","mt_err",{msg:"invalid script src url for params",url:t.scriptSrc})}function i(e,i,o){void 0===o&&(o=!0),!e&&e&&e.length>0?t.Telemetry.logEvent("","mt_err",{msg:"elements null or empty"}):e.forEach((function(e){var o=t.utils.getGuid();if(e.rid||(e.rid=t.utils.getRid(e)),t.Telemetry.setElementToTrack(o,e.rid),e.beacons&&e.impid){var r=e.impid;"msn"==t.config.publisherName&&(r="bing-"+e.impid);var a=!0;e.element&&(a=!1);var s=t.config.selectorMethod+""+r;if(a){var l=i.document.querySelector(s);l&&(e.element=l)}if(e.element)n(e,s,i,r,o);else{t.Telemetry.logEvent(o,"mt_err",{msg:"No element with id or element, setting an interval to wait",id:r,selector:s});var c=setInterval((function(){var a=i.document.querySelector(s);a&&(t.Telemetry.logEvent(o,"mt_info",{msg:"Found element after retry",element:s}),clearInterval(c),e.element=a,n(e,s,i,r,o))}),100)}}else t.Telemetry.logEvent(o,"mt_err",{msg:"Beacon or imp id is empty or null"})}))}function n(e,i,n,o,r){var a=e.beacons,s=[];a&&a.length>0&&a.forEach((function(a){t.Telemetry.logEvent(r,"mt_info",{msg:"Beacon Information",id:o,beaconUrl:a.url}),a.guid=r,"play"==a.triggerType?s.push(a):function(e,i,n,o){var r=this;if(e.triggerType&&"view"!==e.triggerType)if("click"===e.type){i.element.addEventListener("click",(function(i){t.Telemetry.logAdClick(e.guid,r.id,e),t.utils.fireBeacon(e.url)}))}else t.Telemetry.logEvent(e.guid,"mt_err",{msg:"Unsupported tracker event",impid:i.impid});else{var a=e;t.AppearUtils.trackElement(n,i.element,o,a,(function(e,i,n){var o=e.split(t.config.selectorMethod)[1];t.Telemetry.logAdView(i.guid,o,i),t.utils.fireBeacon(i.url),console.log("[MSAN view beacon fired] "+i.url)}))}}(a,e,i,n)})),s&&s.length>0&&function(e,i,n,o){var r=e;t.PlayUtils.trackElement(n,i.element,o,r,i.videoParenentElement,(function(e,i){var n=e.split(t.config.selectorMethod)[1];t.Telemetry.logVideoAdPlay(i.guid,n,i),t.utils.fireBeacon(i.url),console.log("[MSAN video beacon fired] "+i.url)}))}(s,e,i,n)}t.config=null,t.isInitialized=!1,t.scriptSrc="",t.Initialize=function(){t.config=t.Config.trackerConfig,t.Telemetry.initialize(t._window),"msnperegrine"!=t.config.publisherName&&t.Telemetry.logEvent("","mt_info",{msg:"MSANTracker JS Inserted"});var i=t.utils.getCurrentScriptTag(t._window);if(i){if(t.scriptSrc=i,!t.isInitialized&&!t.config.directFunctionCall)var n=setInterval((function(){t.utils.isDocumentReady(t._window)&&(t.isInitialized=!0,t.Telemetry.logEvent("","mt_info",{msg:"Document in ready state"}),clearInterval(n),e(t._window))}),100)}else"msnperegrine"!=t.config.publisherName&&t.Telemetry.logEvent("","mt_err",{msg:"Cannot find current script src"})},t.ProcessTrackers=e,t.TrackElements=function(e,n,o){if(void 0===o&&(o=!0),t.Telemetry.logEvent("","mt_info",{msg:"MSANTracker function called",directCall:o}),e||t.Telemetry.logEvent("","mt_err",{msg:"elements null or empty"}),!t.isInitialized&&o)var r=setInterval((function(){t.utils.isDocumentReady(n)&&(t.isInitialized=!0,t.Telemetry.logEvent("","mt_info",{msg:"Document in ready state"}),clearInterval(r),i(e,n,o))}),100);else o&&i(e,n,o)}}(t||(t={})),t._window&&(t.Initialize(),t._window.MSANTracker=t)},73011:function(t,e,i){"use strict";i.d(e,{kU:function(){return p}});var n=i(33940),o=i(65620),r=i(48839);class a extends r.I{constructor(){super(...arguments),this.appearance="primary"}}(0,n.gn)([o.Lj],a.prototype,"appearance",void 0),(0,n.gn)([(0,o.Lj)({attribute:"fill"})],a.prototype,"fill",void 0),(0,n.gn)([(0,o.Lj)({attribute:"color"})],a.prototype,"color",void 0),(0,n.gn)([o.Lj],a.prototype,"download",void 0),(0,n.gn)([o.Lj],a.prototype,"href",void 0),(0,n.gn)([o.Lj],a.prototype,"hreflang",void 0),(0,n.gn)([o.Lj],a.prototype,"ping",void 0),(0,n.gn)([o.Lj],a.prototype,"referrerpolicy",void 0),(0,n.gn)([o.Lj],a.prototype,"rel",void 0),(0,n.gn)([o.Lj],a.prototype,"target",void 0),(0,n.gn)([o.Lj],a.prototype,"type",void 0);var s=i(39181);var l=i(53046),c=i(67020),d=i(56201),u=i(40082),h=i(26755);const p=a.compose({baseName:"ad-label",template:(t,e)=>s.d`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        style="${t=>t.fill&&t.color?`background-color: var(--ad-label-fill-${t.fill}); color: var(--ad-label-color-${t.color})`:void 0}"
    >
        <slot></slot>
    </a>
`,styles:(t,e)=>l.i`
    ${(0,c.j)("inline-block")} :host {
        box-sizing: border-box;
        font-family: ${h.SVJ};
        font-size: ${h.G8g};
        font-weight: 400;
        ${""} 
        z-index: 4;
    }

    .control {
        text-align: center;
        border-radius: calc(${h.UWU} * 1px);
        padding: 0 6px;
        min-width: 24px;
        text-decoration: none;
        height: 16px;
        border: calc(${h.Han} * 1px) solid ${h.CHi};
        color: ${h.CHi};
    }

    .control:${d.b} {
        outline: none;
        border: calc(${h.Han} * 1px) solid ${h.yGg};
    }
`.withBehaviors((0,u.vF)(l.i`
                :host {
                    forced-color-adjust: auto;
                }
            `)),shadowOptions:{delegatesFocus:!0}})},2407:function(t,e,i){"use strict";i.d(e,{Xe:function(){return F}});var n=i(33940),o=i(65620),r=i(87697),a=i(33832),s=i(48839),l=i(82500);class c extends s.I{}class d extends((0,l.Um)(c)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class u extends d{onTitleClicked(){this.$emit("action-title-clicked")}handleTextInput(){this.inputControl&&(this.value=this.inputControl.value,this.$emit("action-text-input",this.inputControl.value))}addToWatchlist(t){this.inputControl&&(this.inputControl.value="",this.value=""),this.$emit("action-add-to-watchlist",t)}handleOnKeyDownSearchBox(t){if(!this.moneyCardContentData.showSuggestions)return!0;switch(t.keyCode){case a.$Y:t.preventDefault(),this.activeSuggestion=this.searchSuggestions.length-1,this.activeId=this.searchSuggestions[this.activeSuggestion].quoteId,this.focusSelectedElement();break;case a.Q6:t.preventDefault(),this.activeSuggestion=0,this.activeId=this.searchSuggestions[this.activeSuggestion].quoteId,this.focusSelectedElement();break;default:return!0}return!0}focusSelectedElement(){this.selectedSuggestion.querySelectorAll("li").forEach((t=>{if(t.id===this.activeId){t.focus()}}))}handleOnKeyDownAutoSuggestBox(t){switch(t.keyCode){case a.Q6:t.preventDefault(),this.searchSuggestions.length>0&&(this.activeSuggestion=(this.activeSuggestion+1)%this.searchSuggestions.length,this.activeId=this.searchSuggestions[this.activeSuggestion].quoteId);break;case a.$Y:t.preventDefault(),this.searchSuggestions.length>0&&(this.activeSuggestion=(this.activeSuggestion+this.searchSuggestions.length-1)%this.searchSuggestions.length,this.activeId=this.searchSuggestions[this.activeSuggestion].quoteId);break;case a.ei:case a.bq:if(t.preventDefault(),this.searchSuggestions.length>0){this.inputControl.value="",this.activeSuggestion=-1;this.selectedSuggestion.querySelectorAll("li").forEach((t=>{if(t.id===this.activeId){t.click()}}))}break;case a.Lp:t.preventDefault(),this.activeSuggestion=-1,this.inputControl.value="",this.$emit("action-text-input",this.inputControl.value);break;default:return}}getSuggestionClass(t,e,i){return t===this.activeId?i:e}}(0,n.gn)([(0,o.Lj)({attribute:"layout"})],u.prototype,"layout",void 0),(0,n.gn)([r.LO],u.prototype,"moneyCardContentData",void 0),(0,n.gn)([r.LO],u.prototype,"searchSuggestions",void 0),(0,n.gn)([r.LO],u.prototype,"goBackTelemetryTag",void 0),(0,n.gn)([r.LO],u.prototype,"addToWatchlistTelemetryTag",void 0),(0,n.gn)([r.LO],u.prototype,"activeSuggestion",void 0),(0,n.gn)([r.LO],u.prototype,"activeId",void 0);var h=i(39181),p=i(58952),g=i(13988),f=i(18864);const v=h.d`
    <li
        id="${t=>t.quoteId}"
        tabindex="0"
        active=${(t,e)=>t.quoteId===e.parent.activeId||null}
        class="${(t,e)=>e.parent.getSuggestionClass(t.quoteId,"suggestion-entry","suggestion-entry-selected")}"
        part="${(t,e)=>e.parent.getSuggestionClass(t.quoteId,"suggestion-entry","suggestion-entry-selected")}"
        aria-label="${t=>t.longName} ${t=>t.exchangeName}"
        @click="${(t,e)=>e.parent.addToWatchlist(t.quoteId)}"
        data-t="${(t,e)=>e.parent.addToWatchlistTelemetryTag}"
    >
        <div class="suggestion-item" part="suggestion-item">
            <div class="suggestion-company" part="suggestion-company">
                <span class="suggestion-symbol" part="suggestion-symbol"
                    >${t=>t.equitySymbol}</span
                >
                <span class="suggestion-name" part="suggestion-name"
                    >${t=>t.longName}</span
                >
            </div>
            <div class="suggestion-market" part="suggestion-market">
                <span class="suggestion-market-str">${t=>t.exchangeName}</span>
            </div>
            <div class="suggestion-add-icon">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17 9.53v.94h-6.53V17h-.94v-6.53H3v-.94h6.53V3h.94v6.53H17z"
                    />
                </svg>
            </div>
        </div>
    </li>
`,m=h.d`
    <div class="search-area" part="search-area">
        <div class="search-icon" part="search-icon">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 118.5 3zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                />
            </svg>
        </div>
        <input
            class="search-input"
            part="search-input"
            type="search"
            autofocus="autofocus"
            @input=${t=>t.handleTextInput()}
            @keydown="${(t,e)=>t.handleOnKeyDownSearchBox(e.event)}"
            aria-label="${t=>{var e;return null===(e=t.moneyCardContentData)||void 0===e?void 0:e.searchPlaceholder}}"
            placeholder="${t=>{var e;return null===(e=t.moneyCardContentData)||void 0===e?void 0:e.searchPlaceholder}}"
            :value="${t=>t.value}"
            ${(0,p.i)("inputControl")}
        />
        ${(0,g.g)((t=>{var e;return!0===(null===(e=t.moneyCardContentData)||void 0===e?void 0:e.showSuggestions)}),h.d`
                <ul
                    class="suggestions-list"
                    part="suggestions-list"
                    tabindex="-1"
                    @keydown="${(t,e)=>t.handleOnKeyDownAutoSuggestBox(e.event)}"
                    ${(0,p.i)("selectedSuggestion")}
                >
                    ${(0,f.rx)(((t,e)=>t.searchSuggestions),v)}
                </ul>
            `)}
        ${(0,g.g)((t=>{var e;return!0===(null===(e=t.moneyCardContentData)||void 0===e?void 0:e.noSuggestion)}),h.d`
                <div class="suggestions-list" part="suggestions-list">
                    <div class="no-suggestion-str">
                        ${t=>{var e;return null===(e=t.moneyCardContentData)||void 0===e?void 0:e.noSuggestionHint}}
                    </div>
                </div>
            `)}
    </div>
`;var b=i(53046),y=i(67020),w=i(40082),x=i(56201),C=i(26755),$=i(2658),k=i(62734),L=i(22674),D=i(15933);const S=b.i`
    .suggestion-add-icon {
        padding-left: 10px;
    }
`,T=b.i`
    .suggestion-add-icon {
        padding-right: 10px;
    }
`,F=u.compose({baseName:"add-watchlist-money-card",template:(t,e)=>h.d`
    <div class="title" part="title">
        <button
            class="title-button"
            part="title-button"
            @click="${t=>t.onTitleClicked()}"
            aria-label="${t=>{var e;return null===(e=t.moneyCardContentData)||void 0===e?void 0:e.goBackLabel}}"
            data-t="${t=>t.goBackTelemetryTag}"
        >
            <span class="title-content">
                &lrm;${t=>{var e;return null===(e=t.moneyCardContentData)||void 0===e?void 0:e.titleContent}}
            </span>
        </button>
    </div>
    ${m}
`,styles:(t,e)=>b.i`
        ${(0,y.j)("grid")} :host {
            box-sizing: border-box;
            position: relative;
            width: 100%;
            outline: none;
            padding: 12px 16px;
            height: 100%;
            grid-template-rows: auto 1fr;
        }

        :host([layout="full"]) .title {
            align-items: center;
            display: grid;
            grid-column-gap: 8px;
            grid-template-columns: 1fr auto;
            height: 24px;
            margin-bottom: 11px;
        }

        :host([layout="half"]) .title {
            align-items: center;
            display: grid;
            grid-template-columns: 1fr auto;
            grid-column-gap: 8px;
            margin-bottom: 8px;
            height: 16px;
        }

        .title-button {
            border: none;
            display: flex;
            font-size: ${C.sNp};
            line-height: ${C.vgC};
            font-weight: 500;
            color: ${C.Q5n};
            background-color: transparent;
            outline: none;
            cursor: pointer;
            padding: 0px;
        }

        .title-button:focus {
            text-decoration: underline;
        }

        .title-content {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-inline-end: 12px;
        }

        .search-area {
            display: grid;
            grid-template-columns: auto 1fr;
            height: calc(${$.i} * 1px);
            position: relative;
            border: 1px solid ${C.akT};
        }

        .search-icon {
            width: 20px;
            padding: 6px 10px;
        }

        svg path {
            fill: ${C.CHi};
        }

        .search-input {
            color: ${C.CHi};
            background: transparent;
            font-size: ${C.cSu};
            line-height: ${C.RUt};
            height: calc(${$.i} * 1px);
            border: none;
            outline: none;
        }

        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
            display: none;
        }

        .suggestion-add-icon {
            padding-left: 10px;
        }

        .suggestions-list {
            margin: 0px;
            display: block;
            position: absolute;
            box-sizing: border-box;
            top: 40px;
            width: 100%;
            padding: 4px;
            background: ${C.jql};
            --elevation: 10;
            ${k.XC};
            z-index: 9999;
            border: 1px solid transparent;
        }

        .no-suggestion-str {
            margin: 3px 9px;
            font-size: ${C.cSu};
            line-height: ${C.RUt};
        }

        .suggestion-entry-selected {
            font-family: ${C.SVJ};
            outline: none;
            list-style: none;
            border: none;
            width: 258px;
            height: 47px;
            padding: 0px;
            background: ${C.XiB};
            text-decoration: none;
            cursor: pointer;
        }

        .suggestion-entry {
            border: none;
            outline: none;
            list-style: none;
            width: 258px;
            height: 47px;
            padding: 0px;
            background: ${C.jql};
            text-decoration: none;
            cursor: pointer;
        }

        .suggestion-entry:hover .suggestion-item {
            background: ${C.XiB};
        }

        .suggestion-entry,
        .search-input,
        .title-button {
            font-family: ${C.SVJ};
        }

        .suggestion-item {
            display: grid;
            grid-template-columns: 140px 66px 32px;
            grid-column-gap: 2px;
            height: 40px;
            padding: 5px 8px 2px 8px;
        }

        .suggestion-company {
            display: grid;
            text-align: start;
            grid-template-rows: 20px 20px;
        }

        .suggestion-add-icon {
            padding-top: 9px;
        }

        .suggestion-symbol {
            display: block;
            font-weight: 800;
            font-size: ${C.cSu};
            line-height: ${C.RUt};
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: ${C.CHi};
        }

        .suggestion-name {
            display: block;
            font-weight: 600;
            font-size: ${C.sNp};
            line-height: ${C.vgC};
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: ${C.CHi};
        }

        .suggestion-market {
            display: flex;
            position: relative;
            padding-top: 8px;
        }

        .suggestion-market-str {
            position: absolute;
            right: 0px;
            font-weight: 600;
            text-align: end;
            font-size: ${C.sNp};
            line-height: ${C.vgC};
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: ${C.CHi};
        }
    `.withBehaviors(new L.O(S,T),(0,w.vF)(b.i`
            :host {
                forced-color-adjust: auto;
            }
            svg path {
                fill: ${D.H.ButtonText};
            }
            .suggestion-entry:hover .suggestion-item,
            .suggestion-entry:${x.b} .suggestion-item {
                forced-color-adjust: none;
                background: ${D.H.Highlight};
            }
            .suggestion-entry:hover .suggestion-item *,
            .suggestion-entry:hover .suggestion-item svg path,
            .suggestion-entry:${x.b} .suggestion-item *,
            .suggestion-entry:${x.b}  .suggestion-item svg path {
                color: ${D.H.HighlightText};
                fill: currentcolor;
            }
        `))})},40184:function(t,e,i){"use strict";i.d(e,{Tn:function(){return l},Uk:function(){return c}});var n=i(33940),o=i(65620),r=i(48657),a=i(42582),s=i(53046);class l extends a.Zb{constructor(){super(),this.cardFillColor="#222",this.size="_1x_2y"}}(0,n.gn)([o.Lj],l.prototype,"size",void 0);const c=l.compose({baseName:"article-card",template:r.O,styles:(t,e)=>s.i`
    ${(0,a.F)(t,e)}

    @supports not (contain: content) {
        :host {
            overflow: hidden;
        }
    }
    :host([size="_1x_2y"]) {
        --card-height: 304px;
        --card-width: 300px;
    }

    :host([size="_2x_2y"]) {
        --card-height: 304px;
        --card-width: 612px;
    }

    :host([size="_1x_1y"]) {
        --card-height: 146px;
        --card-width: 300px;
    }
`,shadowOptions:{delegatesFocus:!0}})},33064:function(t,e,i){"use strict";i.d(e,{MJ:function(){return I}});var n=i(33940),o=i(87697),r=i(65620),a=i(48839),s=i(22680),l=i(11162),c=i(2696),d=i(40184);function u(t,e){return e&&e.some((e=>e.slot===t))}var h=i(56618),p=i(42582);class g extends p.Zb{constructor(){super(),this.cardFillColor="#222",this.size="_1x_2y",this.expanded=!1}}(0,n.gn)([r.Lj],g.prototype,"size",void 0),(0,n.gn)([(0,r.Lj)({mode:"boolean"})],g.prototype,"expanded",void 0);class f extends a.I{constructor(){super(...arguments),this.headingLevel=2,this.isArticleCard=()=>this.parent instanceof d.Tn,this.isFlexArticleCard=()=>this.parent instanceof g}connectedCallback(){super.connectedCallback(),this.imagePosition||(this.imagePosition="end"),this.parent=(0,s.T)(this),this.parent&&(this.notifier=o.y$.getNotifier(this.parent),this.notifier.subscribe(this,"cardFillColor"),this.notifier.subscribe(this,"size"),this.handleChange(this.parent,"cardFillColor"),this.handleChange(this.parent,"size"),this.addEventListener("mouseover",this.mouseOver),this.addEventListener("mouseout",this.mouseOut),this.addEventListener("focusin",this.focusIn),this.addEventListener("focusout",this.focusOut))}disconnectedCallback(){super.disconnectedCallback(),this.notifier&&(this.notifier.unsubscribe(this,"cardFillColor"),this.notifier.unsubscribe(this,"size"),this.removeEventListener("mouseover",this.mouseOver),this.removeEventListener("mouseout",this.mouseOut),this.removeEventListener("focusin",this.focusIn),this.removeEventListener("focusout",this.focusOut))}handleChange(t,e){switch(this.half="_1x_1y"===t.size,e){case"cardFillColor":if(!t.cardFillColor)break;this.gradientColor=t.cardFillColor,this.gradientVariables=this.generateGradientVariables();break;case"size":this.wide="_2x_2y"===t.size}}handleContentCardLinkClick(t){return this.$emit("link-invoked",t),!0}generateGradientVariables(){const{r:t,g:e,b:i}=(0,l.in)(this.gradientColor),n=new c.h(t,e,i,u("image",this.childElements)?this.half?.6:.8:.6).toStringWebRGBA(),o=new c.h(t,e,i,0).toStringWebRGBA();return`--gradient-mid-color: ${n}; --gradient-color: ${this.gradientColor}; --radial-gradient-color: ${o}`}mouseOver(){this.setExpanded(!0),this.hasHover=!0}mouseOut(){this.hasFocus||this.setExpanded(!1),this.hasHover=!1}focusIn(){this.setExpanded(!0),this.hasFocus=!0}focusOut(){this.hasHover||this.setExpanded(!1),this.hasFocus=!1}filteredContentIndicator(){return Array.isArray(this.contentIndicatorNodes)?this.contentIndicatorNodes.filter((t=>t instanceof h.K)):[]}setExpanded(t){this.filteredContentIndicator().forEach((e=>e.expanded=t))}}(0,n.gn)([(0,r.Lj)({attribute:"heading-level",mode:"fromView",converter:r.Id})],f.prototype,"headingLevel",void 0),(0,n.gn)([r.Lj],f.prototype,"href",void 0),(0,n.gn)([r.Lj],f.prototype,"target",void 0),(0,n.gn)([(0,r.Lj)({attribute:"image-position"})],f.prototype,"imagePosition",void 0),(0,n.gn)([(0,r.Lj)({attribute:"immersive-card",mode:"boolean"})],f.prototype,"immersiveCard",void 0),(0,n.gn)([o.LO],f.prototype,"anchorTelemetryTag",void 0),(0,n.gn)([o.LO],f.prototype,"childElements",void 0),(0,n.gn)([o.LO],f.prototype,"wide",void 0),(0,n.gn)([o.LO],f.prototype,"half",void 0),(0,n.gn)([o.LO],f.prototype,"notifier",void 0),(0,n.gn)([o.LO],f.prototype,"parent",void 0),(0,n.gn)([o.LO],f.prototype,"gradientColor",void 0),(0,n.gn)([o.LO],f.prototype,"gradientVariables",void 0),(0,n.gn)([o.LO],f.prototype,"contentIndicatorNodes",void 0);var v=i(26755),m=i(22674),b=i(53046),y=i(67020),w=i(56201),x=i(40082),C=i(15933);const $=b.i`
    .hide-story-wrapper {
        right: 16px;
    }

    .hide-story {
        right: -32px;
    }

    :host([immersive-card]) .image {
        right: 0;
    }

    :host([immersive-card]) .image-pos-start .image {
        right: initial;
        left: 0;
    }

    :host([immersive-card]) .text {
        left: 0;
    }

    :host([immersive-card]) .image-pos-start .text {
        right: 0;
        left: initial;
    }

    :host([immersive-card]) .gradient {
        left: 0;
        right: -84px;
    }

    :host([immersive-card]) .wide.no-image .gradient {
        right: -100%;
    }

    :host([immersive-card]) .image-pos-start .gradient {
        right: 0;
        left: -120px;
    }

    :host([immersive-card]) .wide .gradient {
        background: linear-gradient(
            270deg,
            transparent 0%,
            var(--gradient-mid-color) 102px,
            var(--gradient-color) 246px
        );
    }

    :host([immersive-card]) .wide.image-pos-start .gradient {
        background: linear-gradient(
            90deg,
            transparent 0%,
            var(--gradient-mid-color) 102px,
            var(--gradient-color) 246px
        );
    }

    :host([immersive-card]) .wide .heading:after {
        right: -100%;
        left: 0;
    }

    :host([immersive-card]) .wide.image-pos-start .heading:after {
        left: -100%;
        right: 0;
    }

    ::slotted([slot="content-indicator"]) {
        left: calc(var(--msft-article-padding) * 1px);
        pointer-events: none;
    }

    :host([immersive-card]) .wide.image-pos-start ::slotted([slot="content-indicator"]) {
        left: calc(50% + var(--msft-article-padding) * 1px);
    }

    :host([immersive-card]) .half .text {
        padding: 16px 0 16px 16px;
    }

    :host([immersive-card]) .half .image {
        padding: 16px 16px 6px 8px;
    }

    :host([immersive-card]) .half .gradient,
    :host([immersive-card]) .no-image.half .gradient {
        background: linear-gradient(
            76.68deg,
            var(--gradient-color) 0%,
            var(--gradient-mid-color) 100%
        );
    }

    :host([immersive-card]) .no-image.half .actions {
        left: 16px;
    }
`,k=b.i`
    .hide-story-wrapper {
        left: 16px;
    }

    .hide-story {
        left: -32px;
    }

    :host([immersive-card]) .image {
        left: 0;
    }

    :host([immersive-card]) .image-pos-start .image {
        left: initial;
        right: 0;
    }

    :host([immersive-card]) .text {
        right: 0;
    }

    :host([immersive-card]) .image-pos-start .text {
        left: 0;
        right: initial;
    }

    :host([immersive-card]) .gradient {
        right: 0;
        left: -120px;
    }

    :host([immersive-card]) .wide.no-image .gradient {
        left: -100%;
    }

    :host([immersive-card]) .image-pos-start .gradient {
        left: 0;
        right: -120px;
    }

    :host([immersive-card]) .wide .gradient {
        background: linear-gradient(
            90deg,
            transparent 0%,
            var(--gradient-mid-color) 102px,
            var(--gradient-color) 246px
        );
    }

    :host([immersive-card]) .wide.image-pos-start .gradient {
        background: linear-gradient(
            270deg,
            transparent 0%,
            var(--gradient-mid-color) 102px,
            var(--gradient-color) 246px
        );
    }

    ::slotted([slot="content-indicator"]) {
        right: calc(var(--msft-article-padding) * 1px);
    }

    :host([immersive-card]) .wide.image-pos-start ::slotted([slot="content-indicator"]) {
        right: calc(50% + var(--msft-article-padding) * 1px);
    }

    :host([immersive-card]) .half .text {
        padding: 16px 16px 16px 0px;
    }

    :host([immersive-card]) .half .image {
        padding: 16px 8px 16px 16px;
    }

    :host([immersive-card]) .half .gradient,
    :host([immersive-card]) .no-image.half .gradient {
        background: linear-gradient(
            294deg,
            var(--gradient-color) 0%,
            var(--gradient-mid-color) 100%
        );
    }

    :host([immersive-card]) .no-image.half .actions {
        right: 16px;
    }
`;var L=i(39181),D=i(81422),S=i(58689),T=i(90960);const F=t=>e=>u(t,e.childElements)?L.d`<div id="${t}" class="${t}" part="${t}">
            <slot name="${t}"></slot>
        </div>`:"",I=f.compose({baseName:"article",template:(t,e)=>L.d`
    <template
        role="article"
        ?immersive-card="${t=>t.isArticleCard()||t.isFlexArticleCard()}"
        ${(0,D.p)({property:"childElements",filter:(0,S.R)()})}
    >
        <div
            part="article"
            class="article${t=>u("image",t.childElements)?` image-pos-${t.imagePosition}`:" no-image"}${t=>t.wide?" wide":""}
                    ${t=>t.half?u("abstract",t.childElements)?" has-abstract half":"half":""}
                ${t=>u("content-indicator",t.contentIndicatorNodes)?"":" no-content-indicator"}
                ${t=>t.isFlexArticleCard()?" flex-card":""}"
            style="${t=>t.gradientVariables}"
        >
            ${t=>"start"===t.imagePosition?F("image")(t):""}
            <div class="text" part="text">
                <div class="gradient" part="gradient"></div>
                ${t=>u("start",t.childElements)?L.d`<slot name="start" part="start"></slot>`:""}
                ${F("attribution")}
                <a
                    id="heading"
                    class="heading"
                    part="heading"
                    href="${t=>t.href?t.href:void 0}"
                    target=${t=>t.target?t.target:void 0}
                    @click=${(t,e)=>t.handleContentCardLinkClick(e.event)}
                    data-t="${t=>t.anchorTelemetryTag}"
                >
                    <span role="heading" aria-level="${t=>t.headingLevel}"
                        ><slot></slot></span
                ></a>
                ${F("abstract")}
                <div class="actions" part="actions">
                    <slot name="start-action"></slot><slot name="end-action"></slot>
                </div>
            </div>
            ${t=>"end"===t.imagePosition?F("image")(t):""}
            ${t=>u("hide-story",t.childElements)?L.d`<div class="hide-story-wrapper" part="hide-story-wrapper">
                          ${F("hide-story")}
                      </div>`:""}
            <slot name="content-indicator" ${(0,T.Q)("contentIndicatorNodes")}></slot>
        </div>
    </template>
`,styles:(t,e)=>b.i`
    ${(0,y.j)("block")} :host {
        --msft-article-padding: 16;
        --msft-flex-button-padding: 40;
        --msft-card-font-color: ${v.CHi};
        width: 100%;
        height: 100%;
        outline: none;
    }

    .article {
        position: relative;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr auto;
        column-gap: calc(var(--msft-article-padding) * 1px);
    }

    .heading,
    .abstract {
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }

    .heading {
        font-weight: 600;
        text-decoration: none;
        color: var(--msft-card-font-color);
        font-size: var(--msft-article-heading-font-size, 16px);
        line-height: var(--msft-article-heading-line-height, 24px);
        -webkit-line-clamp: var(--heading-max-lines, 3);
        margin: 0;
        outline: 0;
    }

    :host([immersive-card]) .article.half {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 0;
        width: 100%;
        height: 100%;
        overflow: visible;
        position: relative;
        background: #FFFFFF;
    }

    :host([immersive-card]) .half .text {
        grid-column: 1/2;
        height: 100%;
        position: unset;
    }

    :host([immersive-card]) .half .image {
        grid-column: 2/3;
        width: 82px;
        height: 82px;
        position: relative;
        z-index: 1;
        pointer-events: none;
    }

    :host([immersive-card]) .half .image ::slotted(img) {
        border-radius: var(--half-card-image-corner-radius, 6px);
    }

    :host([immersive-card]) .half .actions {
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

    :host([immersive-card]) .article.no-image.half {
        display: flex;
        grid-template-columns: none;
    }

    :host([immersive-card]) .no-image.half .text {
        padding: 16px;
    }

    :host([immersive-card]) .no-image.half .actions {
        padding: 0;
    }

    :host([immersive-card]) .half .gradient,
    :host([immersive-card]) .no-image.half .gradient {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    :host([immersive-card]:hover) .half .gradient,
    :host([immersive-card]:hover) .no-image.half .gradient {
        background: var(--gradient-color);
        opacity: 0.4;
        z-index: -1;
    }

    :host([immersive-card]:hover) .article.half,
    :host([immersive-card]:hover) .no-image.half {
        background: transparent;
    }

    :host([immersive-card]) .half .heading,
    :host([immersive-card]) .no-image.half .heading {
        font-size: var(--msft-article-heading-font-size, 14px);
        line-height: var(--msft-article-heading-line-height, 20px);
        -webkit-line-clamp: var(--heading-max-lines, 2);
        margin-bottom: 0;
    }

    :host([immersive-card]) .has-abstract.half .heading {
        -webkit-line-clamp: var(--heading-max-lines, 1);
    }

    :host([immersive-card]) .half .abstract,
    :host([immersive-card]) .no-image.half .abstract {
        font-size: var(--abstract-font-size, 12px);
        line-height: var(--abstract-line-height, 16px);
        -webkit-line-clamp: var(--heading-max-lines, 1);
        margin-bottom: 0;
    }

    :host([immersive-card]) .article.no-image.half .attribution ::slotted(msft-attribution) {
        max-width: 100%;
    }

    :host([immersive-card]) .half .attribution ::slotted(msft-attribution) {
        margin-bottom: 14px;
        max-width: 170px;
        overflow: hidden;
    }

    .heading:hover,
    .heading:${w.b} {
        text-decoration: underline;
    }

    .heading:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        width: var(--card-width);
        height: var(--card-height);
        z-index: 1;
    }

    .wide .heading:after,
    .no-image .heading:after {
        top: 0;
    }

    .abstract,
    ::slotted(p) {
        -webkit-line-clamp: var(--abstract-max-lines, 3);
        font-weight: 400;
        font-size: var(--abstract-font-size, 14px);
        line-height: var(--abstract-line-height, 20px);
        font-kerning: auto;
        margin: 0;
        opacity: 0.8;
    }

    :host([immersive-card]) {
        background: ${v.IfY};
    }

    :host([immersive-card]) .no-image {
        background: #FFFFFF;
    }

    :host([immersive-card]) ::slotted(img) {
        max-width: 100%;
    }

    .image-pos-end {
        grid-template-columns: auto 1fr;
    }

    :host([immersive-card]) .article {
        position: relative;
        overflow: visible;
        grid-template-columns: none;
        height: 100%;
        display: block;
    }

    :host([immersive-card]) .attribution ::slotted(msft-attribution),
    :host([immersive-card]) .abstract {
        color: var(--msft-card-font-color);
        margin-bottom: 12px;
    }

    :host([immersive-card]) .heading {
        color: var(--msft-card-font-color);
        margin-bottom: 6px;
    }

    :host([immersive-card]) .image {
        position: absolute;
        display: block;
        max-width: 100%;
        top: 0;
        transition: opacity 0.1s linear;
    }

    :host([immersive-card]:${w.b}) .image,
    :host([immersive-card]:hover) .image {
        opacity: 0.5;
    }

    :host([immersive-card]) .text {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 1;
        padding: 24px calc(var(--msft-article-padding) * 1px) 16px
            calc(var(--msft-article-padding) * 1px);
        box-sizing: border-box;
    }

    :host([immersive-card]) .gradient {
        background: linear-gradient(
            180deg,
            transparent 0%,
            var(--gradient-mid-color) 62.5%,
            var(--gradient-color) 100%
        );
        position: absolute;
        top: -21px;
        bottom: 79px;
        z-index: -1;
    }

    :host([immersive-card]) .no-image .gradient,
    :host([immersive-card]) .wide.no-image .gradient {
        background: linear-gradient(
            44.24deg,
            var(--gradient-color) 0%,
            var(--gradient-mid-color) 100%
        );
    }

    :host([immersive-card]) .no-image .gradient,
    :host([immersive-card]) .wide .gradient {
        bottom: 0;
    }

    :host([immersive-card]) ::slotted([slot="start"]),
    :host([immersive-card]) ::slotted([slot="end"]) {
        color: var(--msft-card-font-color);
        position: relative;
    }

    :host([immersive-card]) .wide .text {
        height: 100%;
        width: 50%;
    }

    :host([immersive-card]) .text {
        padding: 52px calc(var(--msft-article-padding) * 1px) 16px
            calc(var(--msft-article-padding) * 1px);
    }


    :host([immersive-card]) .no-image .text {
        height: 100%;
        width: 100%;
        bottom: initial;
        padding: 56px calc(var(--msft-article-padding) * 1px) 16px
            calc(var(--msft-article-padding) * 1px);
    }

    :host([immersive-card]) .actions {
        display: flex;
        justify-content: space-between;
    }

    :host([immersive-card]) .article.no-image .actions,
    :host([immersive-card]) .article.wide .actions,
    :host([immersive-card]) .article.wide.image-pos-end.flex-card .actions {
        position: absolute;
        bottom: calc(var(--msft-article-padding) * 1px);
        width: calc(100% - calc(var(--msft-article-padding) * 2px));
    }

    :host([immersive-card]) .article.wide.flex-card .actions {
        width: calc(100% - calc((var(--msft-article-padding) * 2px) + (var(--msft-flex-button-padding) * 1px)))
    } 

    ::slotted([slot="start-action"]),
    ::slotted([slot="end-action"]),
    ::slotted([slot="hide-story"]) {
        z-index: 4;
    }

    :host([immersive-card]) .hide-story-wrapper {
        position: absolute;
        display: flex;
        flex-direction: row;
        top: 16px;
    }

    :host([immersive-card]) .hide-story {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.1s linear;
    }

    :host([immersive-card]:hover) .hide-story,
    :host([immersive-card]:focus-within) .hide-story {
        opacity: 1;
    }

    :host([immersive-card]) ::slotted(fluent-button),
    ::slotted(fluent-button) {
        --control-corner-radius: 40;
        height: 28px;
        min-width: 28px;
    }

    ::slotted([slot="hide-story"]) {
        font-family: ${v.SVJ};
        display: flex;
        padding: 0;
        justify-content: center;
        align-items: center;
        position: relative;
        outline: none;
        font-size: ${v.cSu};
        line-height: ${v.RUt};
        height: 28px;
        min-width: 28px;
        background-color: rgba(0,0,0,0.54);
        color: #FFFFFF;
        fill: #FFFFFF;
        cursor: pointer;
        border-radius: 100%;
        border: 2px solid transparent;
        margin-inline-start: 4px;
    }

    ::slotted([slot="hide-story"]:${w.b}) {
        border-color: ${v.yGg};
    }

    ::slotted([slot="hide-story"]:${w.b}),
    ::slotted([slot="hide-story"]:hover) {
        background-color: rgba(0,0,0,0.62);
    }

    ::slotted([slot="hide-story"]:active) {
        background-color: rgba(0,0,0,0.49);
    }

    ::slotted([slot="content-indicator"]) {
        position: absolute;
        top: calc(var(--msft-article-padding) * 1px);
        z-index: 1;
    }

    @supports not (contain: content) {
        :host([immersive-card]) {
          overflow: hidden;
        }
    }
`.withBehaviors(new m.O($,k),(0,x.vF)(b.i`
            :host([immersive-card]),
            :host([immersive-card]) .heading {
                background: ${C.H.ButtonFace};
                color: ${C.H.ButtonText};
            }

            :host([immersive-card]) .attribution ::slotted(msft-attribution),
            :host([immersive-card]) .abstract {
                background: ${C.H.ButtonFace};
                color: ${C.H.CanvasText};
            }

            :host([href]) .heading,
            :host([immersive-card][href]) .heading {
                color: ${C.H.LinkText};
            }

            .heading:hover,
            .heading:${w.b} {
                text-decoration: underline;
            }

            :host([immersive-card]) .gradient {
                background: linear-gradient(
                    180deg,
                    transparent 0%,
                    ${C.H.ButtonFace} 62.5%,
                    ${C.H.ButtonFace} 100%
                );
            }

            :host([immersive-card]) .wide .gradient {
                background: linear-gradient(
                    270deg,
                    transparent 0%,
                    ${C.H.ButtonFace} 102px,
                    ${C.H.ButtonFace} 246px
                );
            }
        
            :host([immersive-card]) .wide.image-pos-start .gradient {
                background: linear-gradient(
                    90deg,
                    transparent 0%,
                    ${C.H.ButtonFace} 102px,
                    ${C.H.ButtonFace} 246px
                );
            }

            :host([immersive-card]) .no-image .gradient,
            :host([immersive-card]) .wide.no-image .gradient {
                background: linear-gradient(
                    65.94deg,
                    ${C.H.ButtonFace} 8.23%,
                    ${C.H.ButtonFace} 93.81%
                );
            }

            :host([immersive-card]) .hide-story {
                background: none;
            }

            .abstract,
            ::slotted(p) {
                opacity: 1;
            }

            ::slotted([slot="hide-story"]) {
                background-color: ${C.H.ButtonFace};
                border-color: ${C.H.ButtonText};
                fill: ${C.H.ButtonText};
            }

            ::slotted([slot="hide-story"]:hover),
            ::slotted([slot="hide-story"]:${w.b}) {
                background-color: ${C.H.Highlight};
                border-color: ${C.H.ButtonText};
                fill: ${C.H.HighlightText};
            }

            :host([immersive-card]) .half .gradient,
            :host([immersive-card]) .no-image.half .gradient {
                background: ${C.H.ButtonFace};
            }
        `)),shadowOptions:{delegatesFocus:!0}})},28195:function(t,e,i){"use strict";i.d(e,{x:function(){return o}});var n=i(48839);class o extends n.I{handleImageContentChange(){this.imageContainer.classList.toggle("image",this.image.assignedNodes().length>0)}}},76445:function(t,e,i){"use strict";i.d(e,{B4:function(){return u}});var n=i(28195),o=i(39181),r=i(58952);var a=i(53046),s=i(67020),l=i(40082),c=i(26755),d=i(15933);const u=n.x.compose({baseName:"attribution",template:(t,e)=>o.d`
    <span part="image" ${(0,r.i)("imageContainer")}>
        <slot
            name="image"
            ${(0,r.i)("image")}
            @slotchange=${t=>t.handleImageContentChange()}
        ></slot>
    </span>
    <span part="content" class="content">
        <slot></slot>
    </span>
`,styles:(t,e)=>a.i`
        ${(0,s.j)("inline-flex")} :host {
            box-sizing: border-box;
            font-family: ${c.SVJ};
            font-size: ${c.sNp};
            font-weight: 400;
            line-height: ${c.vgC};
            align-items: center;
            color: ${c.Q5n};
            min-height: 16px;
        }

        .content {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .image {
            display: flex;
            margin-inline-end: calc(${c._5n} * 2px);
        }
    `.withBehaviors((0,l.vF)(a.i`
                :host,
                .content {
                    color: ${d.H.CanvasText};
                    fill: currentcolor;
                }
            `))})},55978:function(t,e,i){"use strict";i.d(e,{$:function(){return n},u:function(){return c}});var n,o=i(33940),r=i(65620),a=i(87697),s=i(48839),l=i(56618);!function(t){t.default="default",t.condensed="condensed",t.infoPane="infoPane",t.infoPane1x3y="infoPane1x3y",t.infoPaneSplitVertical="infoPaneSplitVertical",t.infoPaneSplitHorizontal="infoPaneSplitHorizontal"}(n||(n={}));class c extends s.I{constructor(){super(...arguments),this.layout=n.default,this.headinglevel=3}handleStartActionsContentChange(){this.startActionsContainer.classList.toggle("start-actions",this.startActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}handleEndActionsContentChange(){this.endActionsContainer.classList.toggle("end-actions",this.endActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}abstractChanged(){this.$fastController.isConnected&&(this.hasAbstract=this.abstract.length>0)}handleMediaContentChange(){this.mediaContainer.classList.toggle("media",this.media.assignedNodes().length>0)}handleBackgroundImageContentChange(){this.backgroundImageContainer.classList.toggle("background-image",this.backgroundImage.assignedNodes().length>0)}handleContentCardLinkClick(t){return this.$emit("link-invoked",t),!0}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseover",this.mouseOver),this.addEventListener("mouseout",this.mouseOut),this.addEventListener("focusin",this.focusIn),this.addEventListener("focusout",this.focusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseover",this.mouseOver),this.removeEventListener("mouseout",this.mouseOut),this.removeEventListener("focusin",this.focusIn),this.removeEventListener("focusout",this.focusOut)}mouseOver(){this.setExpanded(!0),this.hasHover=!0}mouseOut(){this.hasFocus||this.setExpanded(!1),this.hasHover=!1}focusIn(){this.setExpanded(!0),this.hasFocus=!0}focusOut(){this.hasHover||this.setExpanded(!1),this.hasFocus=!1}filteredContentIndicator(){return this.contentIndicatorNodes.filter((t=>t instanceof l.K))}setExpanded(t){this.filteredContentIndicator().forEach((e=>e.expanded=t))}}(0,o.gn)([r.Lj],c.prototype,"layout",void 0),(0,o.gn)([(0,r.Lj)({attribute:"heading-level",mode:"fromView",converter:r.Id})],c.prototype,"headinglevel",void 0),(0,o.gn)([(0,r.Lj)({mode:"fromView"})],c.prototype,"href",void 0),(0,o.gn)([a.LO],c.prototype,"anchorTelemetryTag",void 0),(0,o.gn)([a.LO],c.prototype,"mediaNodes",void 0),(0,o.gn)([a.LO],c.prototype,"hasAbstract",void 0),(0,o.gn)([a.LO],c.prototype,"hasFooter",void 0),(0,o.gn)([a.LO],c.prototype,"abstract",void 0),(0,o.gn)([a.LO],c.prototype,"iconSlottedNodes",void 0),(0,o.gn)([(0,r.Lj)({attribute:"image-priority",mode:"boolean"})],c.prototype,"imagePriority",void 0),(0,o.gn)([r.Lj],c.prototype,"target",void 0),(0,o.gn)([a.LO],c.prototype,"hoverActionsSlottedNodes",void 0),(0,o.gn)([a.LO],c.prototype,"contentIndicatorNodes",void 0)},71095:function(t,e,i){"use strict";i.d(e,{On:function(){return w}});var n=i(55978),o=i(39181),r=i(58952),a=i(81422),s=i(58689),l=i(13988),c=i(90960);const d=o.d`
    <div
        class="footer ${t=>t.hasAbstract?"has-abstract-footer":""} ${t=>t.hasFooter?"":"footer__hidden"}"
        part="footer"
    >
        <span part="start-actions" ${(0,r.i)("startActionsContainer")}>
            <slot
                name="start-actions"
                ${(0,r.i)("startActions")}
                @slotchange=${t=>t.handleStartActionsContentChange()}
            ></slot>
        </span>
        <span part="end-actions" ${(0,r.i)("endActionsContainer")}>
            <slot
                name="end-actions"
                ${(0,r.i)("endActions")}
                @slotchange=${t=>t.handleEndActionsContentChange()}
            ></slot>
        </span>
    </div>
`;var u=i(67020),h=i(56201),p=i(40082),g=i(53046),f=i(15933),v=i(26755),m=i(22674);const b=g.i`
    .hover-actions {
        right: 8px;
    }

    .icon {
        left: 0;
    }

    :host([layout="default"]) .media-wrapper {
        float: right;
    }

    :host([layout="infoPane1x3y"]) ::slotted([slot="content-indicator"]),
    :host([layout="infoPane"]) ::slotted([slot="content-indicator"]),
    .media-wrapper ::slotted([slot="content-indicator"]) {
        left: 8px;
    }
`,y=g.i`
    .hover-actions {
        left: 8px;
    }

    .icon {
        right: 0;
    }

    :host([layout="default"]) .media-wrapper {
        float: left;
    }

    :host([layout="infoPane1x3y"]) ::slotted([slot="content-indicator"]),
    :host([layout="infoPane"]) ::slotted([slot="content-indicator"]),
    .media-wrapper ::slotted([slot="content-indicator"]) {
        right: 8px;
    }
`,w=n.u.compose({baseName:"content-card",template:(t,e)=>o.d`
    <template
        ${(0,a.p)({property:"mediaNodes",filter:(0,s.R)("[slot='media'], [slot='icon']")})}
    >
        <span part="background-image" ${(0,r.i)("backgroundImageContainer")}>
            <slot
                name="background-image"
                ${(0,r.i)("backgroundImage")}
                @slotchange=${t=>t.handleBackgroundImageContentChange()}
            ></slot>
        </span>
        <div class="mask" part="mask"></div>
        <div class="body ${t=>t.hasAbstract?"has-abstract":""}" part="body">
            ${(0,l.g)((t=>{var e;return(null===(e=t.mediaNodes)||void 0===e?void 0:e.length)>0}),o.d` <div class="media-wrapper" part="media-wrapper">
                    <div part="media" ${(0,r.i)("mediaContainer")}>
                        <slot
                            name="media"
                            ${(0,r.i)("media")}
                            @slotchange=${t=>t.handleMediaContentChange()}
                        ></slot>
                        <slot
                            name="content-indicator"
                            ${(0,c.Q)("contentIndicatorNodes")}
                        ></slot>
                        <span
                            part="icon"
                            ${(0,r.i)("iconContainer")}
                            class="${t=>t.iconSlottedNodes&&t.iconSlottedNodes.length?"icon":"icon__hidden"}"
                        >
                            <slot
                                name="icon"
                                ${(0,r.i)("icon")}
                                ${(0,c.Q)("iconSlottedNodes")}
                            ></slot>
                        </span>
                    </div>
                </div>`)}
            <div class="heading-container" part="heading-container">
                ${(0,l.g)((t=>{var e;return 0===(null===(e=t.mediaNodes)||void 0===e?void 0:e.length)}),o.d`
                        <slot
                            name="content-indicator"
                            ${(0,c.Q)("contentIndicatorNodes")}
                        ></slot>
                    `)}
                <slot name="attribution"></slot>
                <span
                    class="heading-wrapper"
                    part="heading-wrapper"
                    role="heading"
                    aria-level=${t=>t.headinglevel}
                >
                    <a
                        class="heading"
                        part="heading"
                        href=${t=>t.href?t.href:void 0}
                        target=${t=>t.target?t.target:void 0}
                        @click=${(t,e)=>t.handleContentCardLinkClick(e.event)}
                        data-t="${t=>t.anchorTelemetryTag}"
                        ><slot></slot
                    ></a>
                </span>
            </div>
            <div class="abstract" part="abstract">
                <slot name="abstract" ${(0,c.Q)("abstract")}></slot>
            </div>
            <slot name="call-to-action"></slot>
            ${(0,l.g)((t=>t.layout!==n.$.default),d)}
        </div>
        ${(0,l.g)((t=>t.layout===n.$.default),d)}
        <span
            part="hover-actions"
            class="${t=>t.hoverActionsSlottedNodes&&t.hoverActionsSlottedNodes.length?"hover-actions":"hover-actions__hidden"}"
        >
            <slot name="hover-actions" ${(0,c.Q)("hoverActionsSlottedNodes")}></slot>
        </span>
    </template>
`,styles:(t,e)=>g.i`
    ${(0,u.j)("flex")} :host {
        --icon-size: 24px;
        position: relative;
        width: auto;
        box-sizing: border-box;
        font-family: ${v.SVJ};
        flex-direction: column;
        outline: none;
        height: 100%;
        overflow: hidden;
    }

    :host(:hover) .hover-actions {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
    }

    :host(:hover) .background-image,
    :host(:hover) .media {
        filter: brightness(0.9);
    }

    .body {
        display: grid;
        justify-content: center;
        row-gap: 8px;
        column-gap: 10px;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto;
    }

    :host([layout="default"]) .body .abstract {
        display: none;
    }

    :host([layout="default"]) .body {
        display: block;
    }

    :host([layout="default"]) .has-abstract .heading {
        -webkit-line-clamp: var(--heading-max-lines, 2);
    }

    :host([layout="default"]) .has-abstract .media-wrapper {
        margin-inline-start: 16px;
    }

    :host([image-priority]) .has-abstract .media-wrapper {
        margin-inline-start: 0;
    }

    .footer {
        padding-inline-start: var(--footer-start-padding, 16px);
        padding-inline-end: var(--footer-start-padding, 16px);
        padding-top: var(--footer-padding-top, 0);
        padding-bottom: var(--footer-padding-bottom, 4px);
        margin-top: auto;
        font-size: var(--footer-font-size, ${v.sNp});
        line-height: var(--footer-line-height, ${v.vgC});
    }

    .footer,
    .start-actions,
    .end-actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: ${v.Q5n};
        fill: ${v.Q5n};
    }

    .footer__hidden {
        display: none;
    }

    .hover-actions {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 8px;
        z-index: 2;
        opacity: 0;
    }

    .hover-actions__hidden {
        display: none;
    }

    .hover-actions:focus-within {
        opacity: 1;
    }

    .heading-container {
        grid-row: 1;
        display: flex;
        flex-direction: column;
        padding-inline-start: var(--heading-start-padding, 16px);
        padding-inline-end: var(--heading-end-padding, 16px);
        padding-bottom: 0;
        padding-top: 16px;
    }

    .heading-wrapper a:after {
        bottom: 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    :host([layout="condensed"]) .body {
        gap: 0;
    }

    :host([layout="condensed"]) .footer {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: var(--footer-grid-column-end, auto);
        padding-inline-start: 16px;
    }

    :host([layout="condensed"]) .media-wrapper {
        position: relative;
        grid-row: 1 / span 2;
        margin-top: 5px;
    }

    :host([layout="condensed"]) .heading-container {
        padding-top: 0px;
        --heading-end-padding: 12px;
    }

    :host([layout="condensed"]) ::slotted([slot="attribution"]) {
        margin-bottom: 0px
    }

    .icon {
        position: absolute;
        display: inline-flex;
        top: auto;
        bottom: 0;
        justify-content: center;
        align-items: center;
        margin: 0 0 4px 0;
        margin-inline-start: 4px;
    }

    .icon__hidden {
        display: none;
    }

    ::slotted([slot="icon"]) {
        width: var(--icon-size);
        height: var(--icon-size);
        fill: #FFF;
    }

    ::slotted([slot="attribution"]) {
        margin-bottom: 6px
    }

    ::slotted([slot="abstract"]) {
        margin: 2px 0;
    }

    .media-wrapper {
        grid-row: 1;
        grid-column: 2;
        margin-inline-end: var(--media-inline-padding, 16px);
        margin-top: 16px;
    }

    .media {
        display: flex;
        position: relative;
    }

    :host([image-priority]) .heading {
        -webkit-line-clamp: var(--heading-max-lines, 2);
    }

    :host([image-priority]) .body {
        grid-template-columns: 1;
    }

    :host([image-priority]) .media-wrapper {
        grid-row: 1;
        grid-column: span 2;
        margin: 0;
    }

    :host([image-priority]) .heading-container {
        grid-row: 2;
        grid-column: span 2;
        padding-top: 10px;
        padding-inline-start: var(--heading-start-padding, 16px);
    }

    :host([image-priority]) ::slotted([slot="media"]),
    :host([layout="infoPaneSplitHorizontal"]) ::slotted([slot="media"]) {
        border-radius: 0px;
    }

    :host([layout="infoPane"]) .media-wrapper, :host([layout="infoPane1x3y"]) .media-wrapper {
        grid-row: 1;
        grid-column: 1;
        margin-top: 0;
        width: fit-content;
        height: fit-content;
    }

    :host([layout="infoPane"]) .icon, :host([layout="infoPaneSplitVertical"]) .icon, :host([layout="infoPane1x3y"]) .icon {
        display: inline;
        left: 0;
        top: 0;
        margin: 4px 0 0;
        margin-inline-start: 4px;
    }

    :host([layout="infoPaneSplitVertical"]) .icon {
        display: block;
    }

    :host([layout="infoPaneSplitHorizontal"]) .icon {
        bottom: 0px;
    }
    
    :host([layout="infoPaneSplitHorizontal"]) .heading-container,
    :host([layout="infoPane"]) .heading-container, :host([layout="infoPane1x3y"]) .heading-container {
        align-self: end;
    }

    :host([layout="infoPaneSplitHorizontal"]) .body,
    :host([layout="infoPane"]) .body, :host([layout="infoPane1x3y"]) .body {
        height: 100%;
        grid-template-rows: 1fr auto;
    }

    ::slotted([slot="call-to-action"]) {
        width: calc(100% - 32px);
        grid-row: 3;
        z-index: 1;
        grid-column: 1 / span 2;
        margin: 0 16px;
    }

    ::slotted([slot="media"]) {
        border-radius: calc(var(--content-card-corner-radius, 2) * 2px)
    }

    :host([layout="default"]) .has-abstract .abstract {
        display: block;
        padding: 0 16px 16px 16px;
    }

    .abstract {
        position: relative;
        margin: 0;
        font-size: var(--abstract-font-size, ${v.cSu});
        line-height: var(--abstract-line-height, ${v.RUt});
        font-weight: 400;
        grid-column: span 2;
        box-sizing: content-box;
        color: ${v.Q5n};
        padding: 0 16px;
    }

    ::slotted([slot="start-actions"]),
    ::slotted([slot="end-actions"]) {
        z-index: 2;
        display: grid;
        gap: 5px;
        align-items: center;
        grid-auto-flow: column;
    }

    ::slotted([slot="call-to-action"]) {
        z-index: 2;
    }

    ::slotted(fluent-button[slot="start-actions"]),
    ::slotted(fluent-button[slot="end-actions"]) {
        color: ${v.Q5n};
        fill: ${v.Q5n};
    }
    
    ::slotted(fluent-button[appearance="stealth"]:not(:hover)), :slotted([slot="hover-actions"]:not(:hover)) {
        background: transparent;
    }

    .heading {
        text-decoration: none;
        outline: none;
        color: ${v.CHi};
        font-size: var(--heading-font-size, ${v.PwC});
        line-height: var(--heading-line-height, ${v.b3W});
        font-weight: 600;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(--heading-max-lines, 3);
        white-space: initial;
    }

    .mask {
        display: none;
    }

    .heading:hover,
    .heading:${h.b} {
        text-decoration: underline;
    }

    .heading::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    :host([layout="infoPane"]), :host([layout="infoPane1x3y"]) {
        justify-content: flex-end;
        border: none;
    }

    :host(:not([layout="infoPane"])) .has-abstract-footer, :host(:not([layout="infoPane1x3y"])) .has-abstract-footer {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background: ${v.IfY};
        box-shadow: 0px -25px 15px ${v.IfY};
    }

    :host([layout="infoPane"]) .heading-container, :host([layout="infoPane1x3y"]) .heading-container {
        grid-column: 1 / 3;
        z-index: 1;
    }

    :host([layout="infoPane"]) .has-abstract .heading-container, :host([layout="infoPane1x3y"]) .has-abstract .heading-container  {
        grid-area: 2/ 1 / span 2 / auto;
        --heading-start-padding: 16px;
        --heading-end-padding: 0;
        padding-bottom: 12px;
        padding-top: 8px;
        align-self: flex-start;
    }

    :host([layout="infoPane"]) .abstract, :host([layout="infoPane1x3y"]) .abstract, :host([layout="infoPaneSplitHorizontal"]) .abstract  {
        grid-row: 2;
        grid-column: 2;
        color: ${v.CHi};
        padding: 8px 16px 0 16px;
        align-self: end;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }

    :host([layout="infoPane"]) .abstract, :host([layout="infoPane1x3y"]) .abstract  {
        display: none;
    }

    :host([layout="infoPane"]) .has-abstract, :host([layout="infoPane1x3y"]) .has-abstract {
        grid-template-columns: 1fr 1fr;
        gap: 0 10px;
    }

    :host([layout="infoPane"]) .has-abstract .footer, :host([layout="infoPane1x3y"]) .has-abstract .footer {
        min-height: calc(40px - 4px);
    }

    :host([layout="infoPane"]) .has-abstract .abstract, :host([layout="infoPane1x3y"]) .has-abstract .abstract {
        display: -webkit-box;
        align-self: flex-end;
    }

    :host([layout="infoPane"]) .mask, :host([layout="infoPane1x3y"]) .mask {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: var(--mask-gradient, linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0,0,0,0) 176px));
    }
    
    :host([layout="infoPane1x3y"]) .mask {
        background-image: var(--mask-gradient, linear-gradient(rgba(0, 0, 0, 0), rgba(0,0,0,1) 69px, rgba(0,0,0,1)));
        top: 257px;
    }

    :host([layout="infoPane"]) .has-abstract .has-abstract-footer, :host([layout="infoPane1x3y"]) .has-abstract .has-abstract-footer {
        grid-row: 3;
        grid-column: 2;
        position: inherit;
        align-self: flex-end;
        max-height: 40px;
    }

    :host([layout="infoPane"]) .footer, :host([layout="infoPane1x3y"]) .footer  {
        margin-top: unset;
        grid-row: 2;
        grid-column: 1 / span 2;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
    }


    :host([layout="infoPane"]) ::slotted(msft-attribution[slot="attribution"]), :host([layout="infoPane1x3y"]) ::slotted(msft-attribution[slot="attribution"]) {
        color: ${v.CHi};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13), 0px 0px 2.22px rgba(0, 0, 0, 0.11);
    }


    :host([layout="infoPaneSplitVertical"]) {
        grid-template-columns: 304px 1fr;
        grid-template-rows: auto;
        background: ${v.IfY};
    }

    :host([layout="infoPaneSplitVertical"]) ::slotted([slot="media"]) {
        border-radius: 0px;
    }

    :host([layout="infoPaneSplitVertical"]) .media-wrapper {
        grid-row: 1 / span 2;
        grid-column: 1;
        margin: 0;
    }

    :host([layout="infoPaneSplitVertical"]) .heading-container {
        grid-row: 1;
        grid-column: 2;
        --heading-start-padding: 4px;
        --heading-end-padding: 16px;
        padding-bottom: 0;
        padding-top: 16px;
    }

    :host([layout="infoPaneSplitVertical"]) .footer {
        grid-row: 2;
        grid-column: 2;
        padding-inline-start: 0;
        padding-inline-end: 16px;
        padding-top: 0;
    }

    :host([layout="infoPaneSplitHorizontal"]) .body {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 326px auto auto;
        row-gap: 4px;
        background: ${v.IfY};
    }

    :host([layout="infoPaneSplitHorizontal"]) .media-wrapper {
        grid-column: 1 / span 2;
        margin: 0;
    }

    :host([layout="infoPaneSplitHorizontal"]) .heading-container {
        grid-column: 1;
        grid-row: 2 / span 2;
        --heading-start-padding: 16px;
        --heading-end-padding: 0;
        padding-bottom: 12px;
        padding-top: 12px;
    }

    :host([layout="infoPaneSplitHorizontal"]) .footer {
        grid-column: 2;
        grid-row: 3;
        box-shadow: none;
    }

    :host([layout="infoPaneSplitHorizontal"]) .abstract {
        color: inherit;
        align-self: inherit;
        padding: 12px 16px 0 16px;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    :host([layout="infoPane1x3y"]) .background-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 136px;
    }

    .background-image ::slotted(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    :host([layout="infoPane1x3y"]) ::slotted([slot="content-indicator"]),
    :host([layout="infoPane"]) ::slotted([slot="content-indicator"]),
    .media-wrapper ::slotted([slot="content-indicator"]) {
        position: absolute;
        top: 8px;
        z-index: 1;
    }

    ::slotted([slot="content-indicator"]) {
        margin-bottom: 26px;
        align-self: flex-start;
    }

`.withBehaviors(new m.O(b,y),(0,p.vF)(g.i`
                .heading {
                    color: ${f.H.LinkText};
                    background: ${f.H.ButtonFace};
                }
                .abstract {
                    color: ${f.H.ButtonText};
                }
                .icon {
                    background-color: #000;
                    height: fit-content;
                }
                :host([layout="infoPane"]) .abstract,
                :host([layout="infoPane1x3y"]) .abstract,
                :host([layout="infoPaneSplitHorizontal"]) .abstract {
                    color: ${f.H.ButtonText};
                    background: ${f.H.ButtonFace};
                }
                .footer,
                .start-actions,
                .end-actions,
                ::slotted([slot="start-actions"]),
                ::slotted([slot="end-actions"]) {
                    background: ${f.H.ButtonFace};
                    color: ${f.H.ButtonText};
                    fill: currentcolor;
                }
                :host([layout="infoPane"]) .mask,
                :host([layout="infoPane1x3y"]) .mask {
                    background-image: none;
                }
                :host([layout="infoPane"]) .has-abstract .footer,
                :host([layout="infoPane1x3y"]) .has-abstract .footer,
                :host([layout="infoPane"]) .footer,
                :host([layout="infoPane1x3y"]) .footer,
                :host(:not([layout="infoPane"])) .has-abstract-footer,
                :host(:not([layout="infoPane1x3y"])) .has-abstract-footer {
                    background: ${f.H.ButtonFace};
                    box-shadow: none;
                }
                ::slotted(fluent-button[appearance="stealth"]:not(:hover)) {
                    background: ${f.H.ButtonFace};
                }
            `)),shadowOptions:{delegatesFocus:!0}})},56618:function(t,e,i){"use strict";i.d(e,{K:function(){return s}});var n=i(33940),o=i(65620),r=i(87697),a=i(48839);class s extends a.I{constructor(){super(...arguments),this.expanded=!1}defaultItemsChanged(){this.$fastController.isConnected&&(this.shouldanimate=this.defaultItems.length>0)}}(0,n.gn)([(0,o.Lj)({mode:"boolean"})],s.prototype,"expanded",void 0),(0,n.gn)([r.LO],s.prototype,"defaultItems",void 0),(0,n.gn)([(0,o.Lj)({mode:"boolean",attribute:"animate"})],s.prototype,"shouldanimate",void 0)},99348:function(t,e,i){"use strict";i.d(e,{tO:function(){return m}});var n=i(56618),o=i(39181),r=i(90960);var a=i(26755),s=i(22674),l=i(67020),c=i(40082),d=i(53046),u=i(16859),h=i(15933);const p=d.i`
    :host::after {
        transform: translateX(-100%) translateX(20px);
    }
    :host([animate]) .label {
        transform: translateX(-100%);
    }
`,g=d.i`
    :host::after {
        transform: translateX(100%) translateX(-20px);
    }
    :host([animate]) .label {
        transform: translateX(100%);
    }
`,f=d.i`
    :host {
        color: #000;
    }
    :host::after {
        background: rgba(255, 255, 255, 0.46);
    }
`,v=d.i`
    :host {
        color: #fff;
    }
    :host::after {
        background: rgba(0, 0, 0, 0.54);
    }
`,m=n.K.compose({baseName:"content-indicator",template:(t,e)=>o.d`
    <span class="icon-container" part="icon-container" aria-hidden="true">
        <slot name="icon"></slot>
    </span>
    <span class="label-container" part="label-container">
        <span class="label" part="label">
            <slot
                ${(0,r.Q)({property:"defaultItems",filter:t=>{var e;return t instanceof HTMLElement&&null!==t.offsetParent||t instanceof Text&&!!(null===(e=t.textContent)||void 0===e?void 0:e.trim().length)}})}
            ></slot>
        </span>
    </span>
`,styles:(t,e)=>d.i`
        ${(0,l.j)("inline-flex")} :host {
            align-items: center;
            box-sizing: border-box;
            contain: content;
            overflow: hidden;
        }

        .label-container {
            overflow: hidden;
        }

        :host,
        :host::after {
            ${""}
            border-radius: 4px;
        }

        :host::after {
            content: "";
            height: 100%;
            position: absolute;
            width: 100%;
            z-index: -1;
        }

        .icon-container,
        .label {
            min-height: 20px;
            min-width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            fill: currentcolor;
        }

        :host([animate])::after,
        .label {
            transition: transform 250ms cubic-bezier(0.17, 0.17, 0, 1);
        }

        .label {
            font-family: ${a.SVJ};
            font-size: ${a.sNp};
            font-weight: 600;
            line-height: ${a.vgC};
            text-overflow: ellipsis;
            padding: 0 4px;
        }

        :host([expanded][animate])::after,
        :host([expanded][animate]) .label {
            transform: translateX(0%);
        }

        .label {
            transform: translateX(-100%);
        }

        ::slotted([slot="icon"]) {
            display: block;
            fill: currentcolor;
        }
    `.withBehaviors(new s.O(p,g),new u.Y(f,v),(0,c.vF)(d.i`
                :host {
                    forced-color-adjust: auto;
                }
                ::slotted([slot="icon"]) {
                    color: ${h.H.ButtonText};
                    fill: currentcolor;
                }
                .icon-container,
                :host([expanded][animate]) .label,
                :host::after {
                    background: ${h.H.ButtonFace};
                    color: ${h.H.ButtonText};
                    fill: currentcolor;
                    border-radius: calc(${a.UWU} * 1px);
                }
                .label {
                    background: transparent;
                }
            `))})},27126:function(t,e,i){"use strict";i.d(e,{PY:function(){return f}});var n,o=i(33940),r=i(65620),a=i(87697),s=i(48839);!function(t){t.C1="C1",t.C2="C2",t.C3="C3",t.C4="C4",t.C5="C5",t.C6="C6"}(n||(n={}));class l extends s.I{constructor(){super(...arguments),this.layout=n.C4,this.enableNavigation=!1,this.ready=!1}layoutChanged(){this.updateLayout()}cardTemplateMapChanged(){this.updateLayout()}dataChanged(){this.updateLayout()}layoutStylesChanged(t,e){t&&this.$fastController.removeStyles(t),this.$fastController.addStyles(e)}selectTemplate(t){return this.cardTemplateMap[t.card_template_type]}updateLayout(){if(void 0!==this.data){const t=this.data[this.layout];this.cards=this.data.cards.map((e=>{const i=void 0===t?null:t.find((t=>t.id===e.id));return i?Object.assign({},e,i):e})).sort(((t,e)=>t.card_dom_order&&e.card_dom_order?t.card_dom_order<e.card_dom_order?-1:t.card_dom_order>e.card_dom_order?1:0:0))}}handleKeyDown(t){var e,i;if(!this.enableNavigation)return!0;const n=Array.from(this.getRootNode().querySelectorAll(this.tagName)||[]).reduce(((t,e)=>{var i;return Array.from((null===(i=e.shadowRoot)||void 0===i?void 0:i.children)||[]).forEach((e=>{e.offsetHeight>0&&e.offsetWidth>0&&t.push(e)})),t}),[]),o=n.reduce(((t,e,i)=>{const{offsetLeft:n,offsetHeight:o,offsetTop:r,offsetWidth:a}=e;return"style"!==e.tagName.toLowerCase()&&t.push({x:n,y:r,x2:n+a,y2:r+o,index:i}),t}),[]),r=null!==(i=null!==(e=n.findIndex((e=>t.composedPath().find((t=>t===e)))))&&void 0!==e?e:n.findIndex((t=>"style"!==t.tagName.toLowerCase())))&&void 0!==i?i:0,a=t=>{const e=t.currentTarget;e&&(e.removeAttribute("tabindex"),e.removeEventListener("blur",a))},s=o.reduce(((t,e,i)=>{var n;const a=o[r||0],s={x:["ArrowLeft","ArrowRight"],y:["ArrowUp","ArrowDown"]},l=t=>Math.min(e[`${t}2`],a[`${t}2`])-Math.max(e[t],a[t]),c=t=>Math.abs(e[t]>=a[`${t}2`]?e[t]-a[`${t}2`]:a[t]-e[`${t}2`]);for(const o in s){const d=o,u=l("x"===d?"y":"x"),h=c(d);if(u>0){const o=e[d]>=a[`${d}2`]?1:0,l=s[d][o];i!==r&&(void 0===t[l]||((null===(n=t[l])||void 0===n?void 0:n.distance)||0)>h)&&(t[l]=Object.assign({},e,{overlap:u,distance:h})),"y"===d&&("ArrowUp"===l?t[l]&&(!t.PageUp||t.PageUp.y>e.y)&&(t.PageUp=e):(!t.PageDown||t.PageDown.y2<e.y2)&&(t.PageDown=e))}}return(!t.Home||t.Home.x>e.x||t.Home.y>e.y)&&(t.Home=e),(!t.End||t.End.x<e.x||t.End.y<e.y)&&(t.End=e),t}),{}),l=s[t.key];var c;return void 0!==l&&(c=l.index,n&&n.length>c&&(n[c].setAttribute("tabindex","0"),n[c].addEventListener("blur",a),n[c].focus())),!0}}(0,o.gn)([r.Lj],l.prototype,"layout",void 0),(0,o.gn)([(0,r.Lj)({attribute:"enable-navigation",mode:"boolean"})],l.prototype,"enableNavigation",void 0),(0,o.gn)([a.LO],l.prototype,"cards",void 0),(0,o.gn)([a.LO],l.prototype,"cardTemplateMap",void 0),(0,o.gn)([a.LO],l.prototype,"data",void 0),(0,o.gn)([a.LO],l.prototype,"layoutStyles",void 0),(0,o.gn)([a.LO],l.prototype,"ready",void 0);var c=i(26755),d=i(53046),u=i(67020);var h=i(39181),p=i(18864);const g=h.d`${(t,e)=>e.parent.selectTemplate(t)}`,f=l.compose({baseName:"feed-layout",template:(t,e)=>h.d`
    <template @keydown="${(t,e)=>t.handleKeyDown(e.event)}">
        ${(0,p.rx)((t=>t.cards),g)}
    </template>
`,styles:(t,e)=>d.i`
    ${(0,u.j)("grid")}

    :host {
        font-family: ${c.SVJ};
        width: auto;
        grid-auto-rows: 146px;
        grid-auto-columns: 300px;
        grid-gap: 12px;
    }
}
`})},22528:function(t,e,i){"use strict";i.d(e,{sG:function(){return p}});var n=i(33940),o=i(48839),r=i(87697),a=i(37802),s=i(26007),l=i(26755);class c extends o.I{constructor(){super(),this.direction=s.N.ltr,this.currentSlotElementWidth=0,this.currentContentGapSize=0,this.setFlippersVisabilityFromPageState=()=>{const t=this.viewport.clientWidth,e=this.container.clientWidth;if(!t||!e||t>=e)return void this.setFlippersHiddenVisibility(!0,!0);const i=this.viewport.scrollLeft;0!==i?t+Math.abs(i)>=e?this.setFlippersHiddenVisibility(!1,!0):this.setFlippersHiddenVisibility(!1,!1):this.setFlippersHiddenVisibility(!0,!1)},this.handleResize=()=>{this.setFlippersVisabilityFromPageState()},this.handleResize=(0,a.Z)(this.handleResize,200)}connectedCallback(){super.connectedCallback(),this.direction=l.o7V.getValueFor(this),this.setFlippersVisabilityFromPageState(),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){window.removeEventListener("resize",this.handleResize)}handleChange(){this.direction=l.o7V.getValueFor(this),this.flipperNext.children[0].hidden=!1,this.flipperPrevious.children[0].hidden=!0}handleSlotContentChange(){const t=this.viewportSlot.assignedElements();t.length>0&&(this.currentSlotElementWidth=t[0].clientWidth);const e=window.getComputedStyle(this.container).rowGap;this.currentContentGapSize=e?Number(e.replace(/px/,"")):0,this.setFlippersVisabilityFromPageState()}slideKeyPressHandler(t){const e="rtl"!==this.direction;e||(t*=-1);const i=this.viewport.scrollLeft;if(e&&t<0&&0===i||!e&&t>0&&0===i)return;const n=this.viewport.clientWidth,o=this.container.clientWidth;if(n<=0||o<=0)return;if(n>=o)return void this.setFlippersHiddenVisibility(!0,!0);const r=t*this.getScrollDistance();(e&&t>0||!e&&t<0)&&((Math.abs(r)+Math.abs(i)>=o||o-(Math.abs(r)+Math.abs(i))<=n)&&this.hideFlipperNext(!0),this.hideFlipperPrevious(!1)),e&&t<0&&(r+i<=0&&this.hideFlipperPrevious(!0),this.hideFlipperNext(!1)),!e&&t>0&&(r+i>=0&&this.hideFlipperPrevious(!0),this.hideFlipperNext(!1)),requestAnimationFrame((()=>{this.viewport.scrollTo(this.viewport.scrollLeft+r,0)}))}hideFlipperNext(t){this.flipperNext.children[0].hidden=t}hideFlipperPrevious(t){this.flipperPrevious.children[0].hidden=t}setFlippersHiddenVisibility(t,e){this.hideFlipperPrevious(t),this.hideFlipperNext(e)}getOneElementUnit(){return this.currentSlotElementWidth+this.currentContentGapSize}getScrollDistance(){const t=this.viewport.clientWidth;if(t<=0)return 0;const e=this.getOneElementUnit();if(!e||e<=0)return 0;const i=Math.floor(t/e)*e;return i<=0?e:i}}(0,n.gn)([r.LO],c.prototype,"direction",void 0),(0,n.gn)([r.LO],c.prototype,"flipperNextTelemetryTag",void 0),(0,n.gn)([r.LO],c.prototype,"flipperPreviousTelemetryTag",void 0);var d=i(53046);var u=i(39181),h=i(58952);const p=c.compose({baseName:"horizontal-card-slider",template:(t,e)=>u.d`
    <div
        ${(0,h.i)("viewport")}
        class="viewport"
        part="viewport"
        direction="${t=>t.direction?t.direction:"ltr"}"
    >
        <div class="container" part="container" ${(0,h.i)("container")}>
            <slot
                ${(0,h.i)("viewportSlot")}
                @slotchange=${t=>t.handleSlotContentChange()}
            ></slot>
        </div>
    </div>
    <div class="flipper-container" part="flipper-container">
        <slot ${(0,h.i)("flipperPrevious")} name="flipper-previous">
            <fluent-flipper
                direction="${t=>"rtl"===t.direction?"next":"previous"}"
                class="flipper-previous"
                part="flipper-previous"
                @click="${t=>t.slideKeyPressHandler(-1)}"
                data-t="${t=>t.flipperPreviousTelemetryTag}"
                hidden
            ></fluent-flipper>
        </slot>
        <slot ${(0,h.i)("flipperNext")} name="flipper-next">
            <fluent-flipper
                direction="${t=>"rtl"===t.direction?"previous":"next"}"
                class="flipper-next"
                part="flipper-next"
                @click="${t=>t.slideKeyPressHandler(1)}"
                data-t="${t=>t.flipperNextTelemetryTag}"
                hidden
            ></fluent-flipper>
        </slot>
    </div>
`,styles:(t,e)=>d.i`
    :host {
        --viewport-width: auto;
        --viewport-height: auto;
        --element-gap: 12px;
        height: var(--viewport-height);
        overflow: hidden;
        width: var(--viewport-width);
        position: relative;
        display: flex;
    }

    .flipper-container {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        padding: 20px;
        display: flex;
        align-items: center;
        pointer-events: none;
        z-index: 0;
    }

    .viewport {
        height: var(--viewport-height);
        overflow-x: hidden;
        scroll-behavior: smooth;
        width: var(--viewport-width);
        white-space: nowrap;
    }

    .container {
        display: flex;
        flex-direction: row;
        gap: var(--element-gap);
        width: max-content;
    }

    .flipper-next {
        margin-inline-start: auto;
    }

    .flipper-next,
    .flipper-previous {
        pointer-events: all;
        z-index: 2;
    }
`})},38526:function(t,e,i){"use strict";i.d(e,{m3:function(){return w}});var n,o=i(33940),r=i(39181),a=i(87697),s=i(65620),l=i(48839);!function(t){t.single="single",t.double="double",t.split="split",t.triple="triple",t.mosaic="mosaic",t.list="list"}(n||(n={}));const c=new Map;class d extends l.I{constructor(){super(...arguments),this.dividerTemplate=null,this.layout=n.single}itemsChanged(t,e){this.$fastController.isConnected&&(this.dividerTemplate=function(t){if(c.has(t))return c.get(t);if(t<1)return c.set(t,null),null;const e=new Array(t).fill("").map(((t,e)=>r.d`<div class="divider divider-${e+1}" part="divider"></div>`)).reduce(((t,e)=>r.d`${t}${e}`));return c.set(t,e),e}(this.items.length-1))}}(0,o.gn)([a.LO],d.prototype,"items",void 0),(0,o.gn)([a.LO],d.prototype,"dividerTemplate",void 0),(0,o.gn)([s.Lj],d.prototype,"layout",void 0),(0,o.gn)([s.Lj],d.prototype,"topic",void 0);var u=i(90960),h=i(13988);var p=i(26755),g=i(22674),f=i(53046),v=i(67020),m=i(40082);const b=f.i`
    :host([layout="double"]) .divider-1 {
        left: 0;
    }

    :host([layout="triple"]) .divider-1 {
        left: 0;
    }

    :host([layout="triple"]) .divider-2 {
        left: 0;
    }

    :host([layout="mosaic"]) .divider-1 {
        left: 0;
    }

    :host([layout="mosaic"]) .divider-2 {
        left: 1px;
    }
`,y=f.i`
    :host([layout="double"]) .divider-1 {
        right: 0;
    }

    :host([layout="triple"]) .divider-1 {
        right: 0;
    }

    :host([layout="triple"]) .divider-2 {
        right: 0;
    }

    :host([layout="mosaic"]) .divider-1 {
        right: 0;
    }

    :host([layout="mosaic"]) .divider-2 {
        right: 1px;
    }
`,w=d.compose({baseName:"info-pane-slide",template:(t,e)=>r.d`
    <template>
        <slot
            ${(0,u.Q)({property:"items",filter:t=>t instanceof HTMLElement&&null!==t.offsetParent})}
        ></slot>
        ${(0,h.g)((t=>t.layout===n.list),r.d` <span class="topic">${t=>t.topic}</span> `)}
        ${t=>t.dividerTemplate}
    </template>
`,styles:(t,e)=>f.i`
        ${(0,v.j)("grid")} :host {
            box-sizing: border-box;
            font-family: ${p.SVJ};
            font-size: ${p.cSu};
            line-height: ${p.RUt};
            color: ${p.CHi};
            height: 100%;
            width: 100%;
            position: relative;
        }

        :host([layout="single"]) {
            grid-template-columns: 1fr;
        }

        :host([layout="double"]) {
            grid-template-columns: 1fr 1fr;
        }

        :host([layout="split"]) {
            grid-template-rows: 1fr 1fr;
        }

        :host([layout="triple"]) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        :host([layout="mosaic"]) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
        }

        :host([layout="mosaic"]) ::slotted(:first-child) {
            grid-row: 1 / span 2;
            grid-column: 1;
        }

        :host([layout="mosaic"]) ::slotted(msft-content-card:not(:first-child)) {
            --mask-gradient: linear-gradient(rgba(0, 0, 0, 0), ${p.IfY});
        }

        :host([layout="list"]) {
            grid-template-rows: auto 1fr 1fr 1fr;
            grid-template-columns: 3fr 2fr;
        }

        :host([layout="list"]) ::slotted(:first-child) {
            grid-row: 1 / span 4;
            grid-column: 1;
        }

        :host([layout="list"]) ::slotted(msft-content-card:not(:first-child)) {
            background: ${p.IfY};
            --heading-font-size: ${p.cSu};
            --heading-line-height: ${p.RUt};
        }

        .topic {
            grid-row: 1;
            grid-column: 2;
            font-size: ${p.PwC};
            line-height: ${p.b3W};
            background: ${p.IfY};
            padding: 6px 12px;
        }

        .divider {
            background: rgba(255, 255, 255, 0.4);
            position: absolute;
            left: 20px;
            right: 20px;
            top: 20px;
            bottom: 20px;
            z-index: 1;
            pointer-events: none;
            opacity: 0;
        }

        :host([layout="double"]) .divider-1 {
            grid-column: 2;
            width: 1px;
            opacity: 1;
        }

        :host([layout="split"]) .divider-1 {
            grid-row: 2;
            height: 1px;
            top: 0;
            opacity: 1;
        }

        :host([layout="triple"]) .divider-1 {
            grid-column: 2;
            width: 1px;
            opacity: 1;
        }

        :host([layout="triple"]) .divider-2 {
            grid-column: 3;
            width: 1px;
            opacity: 1;
        }

        :host([layout="mosaic"]) .divider-1 {
            grid-column: 2;
            grid-row: 1 / span 2;
            width: 1px;
            opacity: 1;
        }

        :host([layout="mosaic"]) .divider-2 {
            grid-column: 2;
            grid-row: 2;
            height: 1px;
            top: 0;
            opacity: 1;
        }
    `.withBehaviors(new g.O(b,y),(0,m.vF)(f.i`
                .divider {
                    background: none;
                }
            `))})},31768:function(t,e,i){"use strict";i.d(e,{o8:function(){return k}});var n=i(33940),o=i(65620),r=i(87697),a=i(39181),s=i(13988);const l=a.d`
    <svg width="12" height="20" viewBox="0 -1 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 7C2.14063 7 2.27083 7.02607 2.39063 7.07813C2.51041 7.1302 2.61459 7.20313 2.70313 7.29687C2.79687 7.3854 2.86979 7.4896 2.92187 7.6094C2.97396 7.7292 3 7.8594 3 8C3 8.1406 2.97396 8.2708 2.92187 8.3906C2.86979 8.5104 2.79687 8.6172 2.70313 8.71093C2.61459 8.79947 2.51041 8.8698 2.39063 8.92187C2.27083 8.97393 2.14063 9 2 9C1.85937 9 1.72917 8.97393 1.60937 8.92187C1.48959 8.8698 1.38281 8.79947 1.28906 8.71093C1.20052 8.6172 1.13021 8.5104 1.07813 8.3906C1.02604 8.2708 1 8.1406 1 8C1 7.8594 1.02604 7.7292 1.07813 7.6094C1.13021 7.4896 1.20052 7.3854 1.28906 7.29687C1.38281 7.20313 1.48959 7.1302 1.60937 7.07813C1.72917 7.02607 1.85937 7 2 7ZM8 7C8.1406 7 8.2708 7.02607 8.3906 7.07813C8.5104 7.1302 8.6146 7.20313 8.70313 7.29687C8.79687 7.3854 8.8698 7.4896 8.92187 7.6094C8.97393 7.7292 9 7.8594 9 8C9 8.1406 8.97393 8.2708 8.92187 8.3906C8.8698 8.5104 8.79687 8.6172 8.70313 8.71093C8.6146 8.79947 8.5104 8.8698 8.3906 8.92187C8.2708 8.97393 8.1406 9 8 9C7.8594 9 7.7292 8.97393 7.6094 8.92187C7.4896 8.8698 7.3828 8.79947 7.28907 8.71093C7.20053 8.6172 7.1302 8.5104 7.07813 8.3906C7.02607 8.2708 7 8.1406 7 8C7 7.8594 7.02607 7.7292 7.07813 7.6094C7.1302 7.4896 7.20053 7.3854 7.28907 7.29687C7.3828 7.20313 7.4896 7.1302 7.6094 7.07813C7.7292 7.02607 7.8594 7 8 7ZM14 7C14.1406 7 14.2708 7.02607 14.3906 7.07813C14.5104 7.1302 14.6146 7.20313 14.7031 7.29687C14.7969 7.3854 14.8698 7.4896 14.9219 7.6094C14.9739 7.7292 15 7.8594 15 8C15 8.1406 14.9739 8.2708 14.9219 8.3906C14.8698 8.5104 14.7969 8.6172 14.7031 8.71093C14.6146 8.79947 14.5104 8.8698 14.3906 8.92187C14.2708 8.97393 14.1406 9 14 9C13.8594 9 13.7292 8.97393 13.6094 8.92187C13.4896 8.8698 13.3828 8.79947 13.2891 8.71093C13.2005 8.6172 13.1302 8.5104 13.0781 8.3906C13.0261 8.2708 13 8.1406 13 8C13 7.8594 13.0261 7.7292 13.0781 7.6094C13.1302 7.4896 13.2005 7.3854 13.2891 7.29687C13.3828 7.20313 13.4896 7.1302 13.6094 7.07813C13.7292 7.02607 13.8594 7 14 7Z"
        />
    </svg>
`;var c=a.d`
    <msft-content-card
        href="${t=>t.href}"
        target="${(t,e)=>e.parent.target}"
        title="${t=>t.title}"
        data-t="${t=>t.telemetry_context&&t.telemetry_context.card}"
        :anchorTelemetryTag=${t=>t.telemetry_context&&t.telemetry_context.url}
    >
        ${t=>t.title}
        <img slot="media" src="${t=>t.media_src}" alt="${t=>t.media_alt}" />
        ${(0,s.g)((t=>t.content_indicator_icon),a.d`
                <msft-content-indicator slot="content-indicator">
                    ${t=>t.content_indicator_icon}
                </msft-content-indicator>
            `)}
        ${(0,s.g)((t=>t.attribution_src||t.attribution_title),a.d`
                <msft-attribution slot="attribution">
                    ${(0,s.g)((t=>t.attribution_src),a.d`
                            <img
                                slot="image"
                                src="${t=>t.attribution_src}"
                                alt="${t=>t.attribution_alt}"
                            />
                        `)}
                    <span class="attribution-container">
                        <span class="attribution-title">${t=>t.attribution_title}</span>
                        ${(0,s.g)((t=>t.attribution_publishedDate),a.d`
                                <span class="attribution-separator">&middot;</span>
                                <span class="attribution-date">
                                    ${t=>t.attribution_publishedDate}
                                </span>
                            `)}
                    </span>
                </msft-attribution>
            `)}
        ${(0,s.g)((t=>t.more_actions),a.d`
                ${(0,s.g)((t=>t.comment_count),a.d` <div
                        slot="start-actions"
                        class="like-button"
                    >
                        <svg
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 2.5C0 1.11929 1.11929 0 2.5 0H11.5C12.8807 0 14 1.11929 14 2.5V7.5C14 8.88071 12.8807 10 11.5 10H7.68787L4.62533 12.6797C3.99168 13.2342 3 12.7842 3 11.9422V10H2.5C1.11929 10 0 8.88071 0 7.5V2.5ZM2.5 1C1.67157 1 1 1.67157 1 2.5V7.5C1 8.32843 1.67157 9 2.5 9H4V11.8981L7.31213 9H11.5C12.3284 9 13 8.32843 13 7.5V2.5C13 1.67157 12.3284 1 11.5 1H2.5Z"
                            />
                        </svg>
                        <span>${t=>t.comment_count}</span>
                    </div>`)}
                <fluent-button
                    appearance="stealth"
                    class="actions-button"
                    slot="end-actions"
                    @click=${(t,e)=>e.parent.actionTriggered(t)}
                    @keypress=${(t,e)=>e.parent.actionTriggered(t)}
                    data-t="${t=>t.telemetry_context&&t.telemetry_context.button}"
                >
                    ${l}
                </fluent-button>
            `)}
    </msft-content-card>
`;const d='\n    <path d="M2 7a.942.942 0 0 1 .703.297A.941.941 0 0 1 3 8c0 .14-.026.27-.078.39a1.03 1.03 0 0 1-.531.532A.97.97 0 0 1 2 9a.97.97 0 0 1-.39-.078 1.103 1.103 0 0 1-.32-.211 1.103 1.103 0 0 1-.212-.32A.969.969 0 0 1 1 8a.969.969 0 0 1 .29-.703A.97.97 0 0 1 2 7Zm6 0a.941.941 0 0 1 .703.297A.941.941 0 0 1 9 8a.97.97 0 0 1-.078.39 1.03 1.03 0 0 1-.531.532A.97.97 0 0 1 8 9a.97.97 0 0 1-.39-.078 1.103 1.103 0 0 1-.32-.211 1.103 1.103 0 0 1-.212-.32A.97.97 0 0 1 7 8a.97.97 0 0 1 .29-.703A.97.97 0 0 1 8 7Zm6 0a.94.94 0 0 1 .703.297A.941.941 0 0 1 15 8a.97.97 0 0 1-.297.71A.97.97 0 0 1 14 9a.97.97 0 0 1-.39-.078 1.102 1.102 0 0 1-.32-.211 1.103 1.103 0 0 1-.212-.32A.97.97 0 0 1 13 8a.97.97 0 0 1 .29-.703A.97.97 0 0 1 14 7Z"/>\n',u=a.d`
    <svg width="12" height="20" viewBox="0 -2 16 16" xmlns="http://www.w3.org/2000/svg">
        ${d}
    </svg>
`;var h=a.d`
    <msft-content-card
        href="${t=>t.href}"
        layout="condensed"
        target="${(t,e)=>e.parent.target}"
        title="${t=>t.title}"
        data-t="${t=>t.telemetry_context&&t.telemetry_context.card}"
        :anchorTelemetryTag=${t=>t.telemetry_context&&t.telemetry_context.url}
    >
        ${t=>t.title}
        ${(0,s.g)((t=>t.media_src),a.d`
                <img
                    slot="media"
                    src="${t=>t.media_src}"
                    alt="${t=>t.media_alt}"
                    width="${t=>t.media_width}"
                    height="${t=>t.media_height}"
                />
            `)}
        ${(0,s.g)((t=>t.content_indicator_icon),a.d`
                <msft-content-indicator slot="content-indicator">
                    ${t=>t.content_indicator_icon}
                </msft-content-indicator>
            `)}
        ${(0,s.g)((t=>t.attribution_src||t.attribution_title),a.d`
                <div slot="attribution" class="attribution-condensed-container">
                    <msft-attribution>
                        ${(0,s.g)((t=>t.attribution_src),a.d`
                                <img
                                    slot="image"
                                    src="${t=>t.attribution_src}"
                                    alt="${t=>t.attribution_alt}"
                                    width="${t=>t.attribution_width}"
                                    height="${t=>t.attribution_height}"
                                />
                            `)}
                        <span class="attribution-container">
                            <span class="attribution-title">
                                ${t=>t.attribution_title}
                            </span>
                            ${(0,s.g)((t=>t.attribution_publishedDate),a.d`
                                    <span class="attribution-separator">&middot;</span>
                                    <span class="attribution-date">
                                        ${t=>t.attribution_publishedDate}
                                    </span>
                                `)}
                        </span>
                    </msft-attribution>
                    ${(0,s.g)((t=>t.more_actions),a.d`
                            <fluent-button
                                class="actions-button"
                                appearance="stealth"
                                @click=${(t,e)=>e.parent.actionTriggered(t,e.event)}
                                @keypress=${(t,e)=>e.parent.actionTriggered(t,e.event)}
                                data-t="${t=>t.telemetry_context&&t.telemetry_context.button}"
                            >
                                ${u}
                            </fluent-button>
                        `)}
                </div>
            `)}
    </msft-content-card>
`;const p=a.d`
    <svg width="16" height="16" viewBox="0 -1 16 16" xmlns="http://www.w3.org/2000/svg">
        ${d}
    </svg>
`;var g,f=a.d`
    <msft-content-card
        layout="condensed"
        href="${t=>t.href}"
        target="${(t,e)=>e.parent.target}"
        title="${t=>t.title}"
        class="social-reaction-card"
    >
        ${t=>t.title}
        ${(0,s.g)((t=>t.content_indicator_icon),a.d`
                <msft-content-indicator slot="content-indicator">
                    ${t=>t.content_indicator_icon}
                </msft-content-indicator>
            `)}
        <img
            slot="media"
            src="${t=>t.media_src}"
            alt="${t=>t.media_alt}"
            width="${t=>t.media_width}"
            height="${t=>t.media_height}"
        />
        ${(0,s.g)((t=>t.media_icon),a.d` <div class="media-icon" slot="icon">${'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1" width=36 height=36>\n    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="#FFFFFF" fill-rule="evenodd">\n        <g id="ic_fluent_play_circle_24_regular" fill="#FFFFFF" fill-rule="nonzero">\n            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM9.053 8.585a.5.5 0 0 1 .587-.256l.084.033 6.382 3.19a.5.5 0 0 1 .076.848l-.076.047-6.382 3.191a.5.5 0 0 1-.716-.357L9 15.19V8.809a.5.5 0 0 1 .053-.224Z" fill-rule="nonzero" fill="#FFF" id="🎨-Color"/>\n        </g>\n    </g>\n</svg>\n'}</div> `)}
        ${(0,s.g)((t=>t.attribution_src||t.attribution_title),a.d`
                <msft-attribution slot="attribution">
                    ${(0,s.g)((t=>t.attribution_src),a.d`
                            <img
                                slot="image"
                                src="${t=>t.attribution_src}"
                                alt="${t=>t.attribution_alt}"
                                width="${t=>t.attribution_width}"
                                height="${t=>t.attribution_height}"
                            />
                        `)}
                    <span class="attribution-container">
                        <span class="attribution-title">${t=>t.attribution_title}</span>
                        ${(0,s.g)((t=>t.attribution_publishedDate),a.d`
                                <span class="attribution-separator">&middot;</span>
                                <span class="attribution-date">
                                    ${t=>t.attribution_publishedDate}
                                </span>
                            `)}
                    </span>
                </msft-attribution>
            `)}
        ${(0,s.g)((t=>t.more_actions),a.d`
                <div slot="start-actions" class="like-button">
                    ${(0,s.g)((t=>t.social_reaction_count),a.d`
                            ${(0,s.g)((t=>t.social_reaction_angry),a.d`${'\n    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M16 8c.04-2.12-.82-4.18-2.36-5.64A7.598 7.598 0 0 0 8 0C5.86-.04 3.82.82 2.34 2.36A7.655 7.655 0 0 0 0 8c-.04 2.12.82 4.18 2.34 5.66A7.732 7.732 0 0 0 8 16c2.12.04 4.18-.82 5.64-2.34A7.642 7.642 0 0 0 16 8z" fill="url(#b)"/><path d="M6.04 5.04c-1.3 0-2.36 1.04-2.38 2.34v.02C3.66 8.7 4.7 9.76 6 9.78h.02c1.3 0 2.36-1.04 2.38-2.34v-.02c0-1.3-1.04-2.36-2.34-2.38h-.02z" fill="url(#c)"/><path d="M4.46 7.42c0 .88.7 1.58 1.58 1.58.42 0 .82-.16 1.12-.46.3-.3.48-.7.46-1.12 0-.88-.7-1.58-1.58-1.58a1.573 1.573 0 0 0-1.58 1.58z" fill="#fff"/><path d="M5.48 6.86a.71.71 0 0 0-.22.56c-.02.42.32.78.76.8h.04c.22 0 .42-.08.56-.22.16-.14.24-.36.22-.56 0-.2-.08-.4-.22-.56a.757.757 0 0 0-.56-.24.712.712 0 0 0-.58.22z" fill="#000"/><path d="M7.6 7.06c-.08-.3-.22-.58-.44-.8a1.78 1.78 0 0 0-1.22-.42c-.4-.02-.78.16-1.04.48l2.7.74z" fill="#D32B00"/><path d="M10 5.04c-1.3 0-2.36 1.06-2.38 2.36v.02c0 .64.24 1.24.7 1.68.94.92 2.44.92 3.36 0 .46-.44.7-1.06.7-1.68 0-1.3-1.06-2.36-2.36-2.38H10z" fill="url(#d)"/><path d="M8.42 7.42C8.42 8.3 9.12 9 10 9c.42 0 .82-.16 1.12-.46.3-.3.48-.7.46-1.12 0-.88-.7-1.58-1.58-1.58-.42 0-.82.16-1.12.46-.3.28-.46.7-.46 1.12z" fill="#fff"/><path d="M9.44 6.86a.71.71 0 0 0-.22.56c-.02.42.32.78.76.8h.04c.22 0 .42-.08.56-.22.16-.16.24-.36.22-.58 0-.2-.08-.4-.22-.56a.77.77 0 0 0-.58-.24c-.22 0-.42.08-.56.24z" fill="#000"/><path d="M8.38 7.12c.1-.32.26-.6.5-.82.3-.3.7-.46 1.12-.46.4 0 .8.14 1.1.42l-2.72.86z" fill="#D32B00"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.51 6.454a.258.258 0 0 1 .316-.183l2.72.72a.258.258 0 0 1-.132.498l-2.72-.72a.258.258 0 0 1-.183-.315zm6.997-.047a.258.258 0 0 1-.174.32l-2.7.8a.258.258 0 1 1-.146-.494l2.7-.8c.136-.04.28.037.32.174z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 4.824a.258.258 0 0 1-.114.346l-2.74 1.38a.258.258 0 0 1-.232-.46l2.74-1.38a.258.258 0 0 1 .346.114zm-6.9 0a.258.258 0 0 1 .346-.114l2.74 1.38a.258.258 0 0 1-.232.46l-2.74-1.38a.258.258 0 0 1-.114-.346z" fill="#5B3C22"/><path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="m10.49 12.27-.14.252.14-.252a.31.31 0 0 1-.3.54l.15-.27-.15.27-.004-.002a1.31 1.31 0 0 0-.133-.062 3.954 3.954 0 0 0-.44-.157 5.713 5.713 0 0 0-1.689-.22c-.728.01-1.262.13-1.608.243a3.018 3.018 0 0 0-.469.196.692.692 0 0 0-.018.011l-.002.002v-.001a.31.31 0 0 1-.335-.52l.168.26-.168-.26.002-.001.004-.002.01-.007.034-.02a3.642 3.642 0 0 1 .582-.247c.403-.131 1-.262 1.792-.272a6.33 6.33 0 0 1 1.872.245 4.554 4.554 0 0 1 .647.245l.038.02.011.005.004.002.002.002z" fill="#FF783F"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.955 11.37a5.15 5.15 0 0 1 2.849.788.31.31 0 0 1-.328.524 4.53 4.53 0 0 0-2.51-.693h-.002a4.58 4.58 0 0 0-1.757.353 3.226 3.226 0 0 0-.545.298.828.828 0 0 0-.023.017l-.004.003a.31.31 0 0 1-.39-.48l.195.24-.196-.24h.001l.001-.001.004-.003.011-.01.039-.028a3.845 3.845 0 0 1 .663-.365 5.198 5.198 0 0 1 1.992-.402zm-2.32 1.29z" fill="#401E13"/></g><defs><linearGradient id="b" x1="8" y1=".69" x2="8" y2="16.692" gradientUnits="userSpaceOnUse"><stop stop-color="#FF7B44"/><stop offset="1" stop-color="#E62E00"/></linearGradient><linearGradient id="c" x1="6.045" y1="4.86" x2="6.045" y2="9.61" gradientUnits="userSpaceOnUse"><stop stop-color="#E73304"/><stop offset="1" stop-color="#F4692D"/></linearGradient><linearGradient id="d" x1="10.004" y1="4.86" x2="10.004" y2="9.606" gradientUnits="userSpaceOnUse"><stop stop-color="#E73304"/><stop offset="1" stop-color="#F4692D"/></linearGradient></defs></svg>\n'}`)}
                            ${(0,s.g)((t=>t.social_reaction_like),a.d`${'\n<svg width="15" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.078 9.32.2-.68h3c.32-.5.7-1.04 1.1-1.6.8-1.12 1.36-1.82 1.7-2.1.9-.7 1.46-1.16 1.7-1.36.9-.8 1.4-1.4 1.5-1.82.04-.34.18-.68.4-.96.1-.12.24-.2.4-.2.26 0 .52.18.76.52.36.48.36 1.16.04 2-.18.46-.4.9-.66 1.32-.2.28-.38.56-.54.86-.18.36-.26.78-.2 1.18.68.04 1.34.14 2 .32 1.34.36 2 .88 2 1.58 0 .2-.04.4-.12.6-.08.2-.18.28-.28.28l.3.22c.22.28.32.62.3.96 0 .22-.12.44-.3.58-.1.08-.2.14-.3.2l.16.3c.1.28.1.58.02.86-.06.22-.18.42-.36.56-.12.12-.28.2-.44.24v.74c-.06.54-.26.88-.6 1.04-.72.36-1.12.54-1.2.58-.56.16-1.36.2-2.4.12-1.12-.1-2.22-.26-3.3-.52-.6-.14-1.1-.26-1.5-.38h-3c-.12-.3-.22-.6-.28-.92-.2-.68-.3-1.4-.32-2.1.02-.8.08-1.62.22-2.42Z" fill="#FDCE4C"/></svg>\n'}`)}
                            ${(0,s.g)((t=>t.social_reaction_love),a.d`${'\n<svg width="16" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.578 2.3c-.84-.96-1.98-1.58-3.26-1.52-1.28.08-2.44.74-3.16 1.8-.2-.2-.36-.46-.58-.66-.24-.22-.5-.42-.78-.6-.6-.36-1.28-.56-1.96-.56-1.32.04-2.54.68-3.32 1.74a4.82 4.82 0 0 0-.84 3.64c.24 1.34 1.04 2.48 2 3.4 1.66 1.58 3.56 2.78 5.22 4.34.14.14.26.16.4.02.26-.24.48-.52.76-.74.28-.22.56-.48.86-.7 1.08-.84 2.2-1.64 3.24-2.56 1.14-1.02 2.12-2.26 2.4-3.8.26-1.34-.1-2.72-.98-3.8Z" fill="#F4322A"/></svg>\n'}`)}
                            ${(0,s.g)((t=>t.social_reaction_sad),a.d`${'\n    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M16 8c.04-2.12-.82-4.18-2.36-5.64A7.598 7.598 0 0 0 8 0C5.86-.04 3.82.82 2.34 2.36A7.655 7.655 0 0 0 0 8c-.04 2.12.82 4.18 2.34 5.66A7.732 7.732 0 0 0 8 16c2.12.04 4.18-.82 5.64-2.34A7.642 7.642 0 0 0 16 8z" fill="#FDCD4D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.862 12.086c-2.486-1.03-4.94-1.028-7.34-.002a.31.31 0 0 1-.244-.569c2.56-1.093 5.186-1.092 7.82 0a.31.31 0 0 1-.236.57z" fill="#FEE154"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.886 11.374a6.04 6.04 0 0 0-2.678-.562h-.016a6.066 6.066 0 0 0-2.698.562l-.008.004-.009.003c-.28.116-.542.303-.809.532a.412.412 0 1 1-.536-.626c.29-.25.626-.5 1.022-.665A6.89 6.89 0 0 1 8.2 9.987a6.864 6.864 0 0 1 3.026.635c.395.165.732.415 1.022.665a.412.412 0 1 1-.537.626c-.266-.229-.527-.416-.808-.532l-.009-.003-.008-.004z" fill="#32150C"/><path d="M11.3 4.7c-.44-.46-1.06-.72-1.7-.7-1.32 0-2.4 1.08-2.4 2.4 0 1.32 1.08 2.4 2.4 2.4.64.02 1.26-.24 1.7-.7.46-.44.72-1.06.7-1.7.02-.64-.24-1.26-.7-1.7z" fill="url(#b)"/><path d="M8.1 4.7c-.44-.46-1.06-.72-1.7-.7C5.08 4 4 5.08 4 6.4c-.02.64.24 1.24.7 1.7.44.46 1.06.72 1.7.7.64.02 1.26-.24 1.7-.7.46-.44.72-1.06.7-1.7.02-.64-.24-1.26-.7-1.7z" fill="url(#c)"/><path d="M5.28 5.28c-.32.28-.48.7-.48 1.12 0 .88.72 1.6 1.6 1.6.42 0 .84-.16 1.14-.46.3-.3.48-.7.46-1.14 0-.88-.72-1.6-1.6-1.6-.42 0-.84.16-1.12.48z" fill="url(#d)"/><path d="M8.46 5.28c-.3.28-.46.7-.46 1.12C8 7.28 8.72 8 9.6 8c.42 0 .84-.16 1.14-.46.3-.3.48-.7.46-1.14 0-.88-.72-1.6-1.6-1.6-.42 0-.84.16-1.14.48z" fill="url(#e)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.898 1.508a.31.31 0 0 1 .394.19 4.024 4.024 0 0 0 1.486 1.969l.005.003c.268.197.573.341.9.432a.31.31 0 0 1-.166.596 3.392 3.392 0 0 1-1.097-.527 4.643 4.643 0 0 1-1.712-2.27.31.31 0 0 1 .19-.393zm-1.796 0a.31.31 0 0 1 .19.394 4.643 4.643 0 0 1-1.712 2.27 3.392 3.392 0 0 1-1.097.526.31.31 0 0 1-.166-.596c.327-.09.632-.235.9-.431l.005-.004a4.024 4.024 0 0 0 1.486-1.969.31.31 0 0 1 .394-.19z" fill="#976537"/><path d="M5.82 5.84c-.14.14-.22.34-.22.56 0 .44.34.8.78.8h.02c.22 0 .42-.08.56-.24a.79.79 0 0 0 .24-.56c0-.22-.08-.42-.24-.56a.726.726 0 0 0-.56-.24c-.22 0-.42.08-.58.24zm3.22 0c-.16.14-.24.34-.24.56 0 .44.34.8.78.8h.02c.22 0 .42-.08.56-.24a.79.79 0 0 0 .24-.56c0-.22-.08-.42-.24-.56a.726.726 0 0 0-.56-.24c-.22 0-.42.08-.56.24z" fill="#000"/></g><defs><linearGradient id="b" x1="9.6" y1="3.992" x2="9.6" y2="8.793" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FDCD4D"/></linearGradient><linearGradient id="c" x1="6.4" y1="3.992" x2="6.4" y2="8.793" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FDCD4D"/></linearGradient><linearGradient id="d" x1="6.4" y1="6.52" x2="6.4" y2="7.8" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#E7F9FF"/></linearGradient><linearGradient id="e" x1="9.6" y1="6.52" x2="9.6" y2="7.8" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#E7F9FF"/></linearGradient></defs></svg>\n'}`)}
                            ${(0,s.g)((t=>t.social_reaction_surprised),a.d`${'\n    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M16 8c.04-2.12-.82-4.18-2.36-5.64A7.598 7.598 0 0 0 8 0C5.86-.04 3.82.82 2.34 2.36A7.655 7.655 0 0 0 0 8c-.04 2.12.82 4.18 2.34 5.66A7.732 7.732 0 0 0 8 16c2.12.04 4.18-.82 5.64-2.34A7.642 7.642 0 0 0 16 8Z" fill="#FDCD4D"/><path d="m6.34 10.34-.16.4c-.12.42-.2.84-.24 1.26-.22 2.3.44 3.44 2 3.44s2.28-1.02 2.16-3.08c-.04-.46-.12-.9-.24-1.34-.12-.36-.18-.6-.2-.68" stroke="#FEE154" stroke-width=".722" stroke-linecap="round"/><path d="M8 9.3c-.4 0-.8.12-1.1.36-.3.24-.56.54-.72.9-.06.12-.12.26-.18.4-.28.76-.28 1.58 0 2.32.4 1.06 1.06 1.58 2 1.6.94-.02 1.6-.56 1.98-1.6.3-.88.26-1.84-.12-2.7a2.61 2.61 0 0 0-.76-.92c-.3-.24-.7-.36-1.1-.36Z" fill="#fff"/><path d="M8 9.3c.4 0 .78.12 1.1.36.32.24.58.56.76.92.38.86.42 1.82.12 2.7-.38 1.06-1.04 1.58-1.98 1.6-.94-.02-1.6-.56-2-1.6-.28-.76-.28-1.58 0-2.34.04-.14.1-.26.18-.4.16-.36.42-.66.72-.9.32-.22.7-.34 1.1-.34Z" stroke="url(#b)" stroke-width=".722" stroke-linecap="round"/><path d="M11.86 2.54c-.6-.62-1.42-.96-2.26-.94a2.99 2.99 0 0 0-2.26.94c-.62.6-.94 1.42-.94 2.26-.02.84.32 1.66.94 2.26.6.62 1.42.96 2.26.94.86.02 1.66-.32 2.26-.94.62-.58.96-1.4.94-2.26a2.99 2.99 0 0 0-.94-2.26Z" fill="url(#c)"/><path d="M8.66 2.54c-.6-.62-1.42-.96-2.26-.94a2.99 2.99 0 0 0-2.26.94c-.62.6-.94 1.42-.94 2.26-.02.84.32 1.66.94 2.26.6.62 1.42.96 2.26.94.86.02 1.66-.32 2.26-.94.62-.58.96-1.4.94-2.26a2.99 2.99 0 0 0-.94-2.26Z" fill="url(#d)"/><path d="M4.7 3.1c-.46.44-.7 1.06-.7 1.7-.02.64.24 1.26.7 1.7.44.46 1.06.72 1.7.7.64 0 1.26-.24 1.7-.7.46-.44.72-1.06.7-1.7 0-.64-.24-1.26-.7-1.7-.44-.46-1.06-.7-1.7-.7-.64-.02-1.26.24-1.7.7Z" fill="#fff"/><path d="M7.9 3.1c-.46.44-.7 1.06-.7 1.7-.02.64.24 1.26.7 1.7.44.46 1.06.72 1.7.7.64 0 1.26-.24 1.7-.7.46-.44.72-1.06.7-1.7 0-.64-.24-1.26-.7-1.7-.44-.46-1.06-.7-1.7-.7-.64-.02-1.26.24-1.7.7Z" fill="#fff"/><path d="M5.68 4.1a1 1 0 0 0-.28.7c0 .54.42 1 .96 1h.04c.26 0 .52-.1.72-.28.2-.18.3-.44.28-.72a1 1 0 0 0-.28-.7.95.95 0 0 0-.72-.3c-.26 0-.52.1-.72.3ZM8.88 4.1a1 1 0 0 0-.28.7c0 .54.42 1 .96 1h.04c.26 0 .52-.1.72-.28.2-.18.3-.44.28-.72a1 1 0 0 0-.28-.7.95.95 0 0 0-.72-.3c-.26 0-.52.1-.72.3Z" fill="#000"/><path d="M7.12.6C6.72.54 6.3.54 5.9.6c-.86.12-1.64.54-2.2 1.2M8.86.6c.4-.06.82-.06 1.22 0 .86.12 1.64.54 2.2 1.2" stroke="#976537" stroke-width=".619" stroke-linecap="round"/></g><defs><linearGradient id="b" x1="7.997" y1="16.086" x2="7.997" y2="9.198" gradientUnits="userSpaceOnUse"><stop stop-color="#8D503D"/><stop offset="1" stop-color="#32150C"/></linearGradient><linearGradient id="c" x1="9.6" y1="1.53" x2="9.6" y2="7.931" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FDCD4D"/></linearGradient><linearGradient id="d" x1="6.4" y1="1.53" x2="6.4" y2="7.931" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FDCD4D"/></linearGradient></defs></svg>\n'}`)}
                            ${(0,s.g)((t=>t.social_reaction_thinking),a.d`${'\n    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8c0-2.2-.78-4.1-2.36-5.64C12.1.78 10.2 0 8 0 5.8 0 3.9.78 2.34 2.36.78 3.9 0 5.8 0 8c0 2.22.78 4.1 2.34 5.66C3.9 15.22 5.8 16 8 16s4.1-.78 5.64-2.34C15.22 12.1 16 10.2 16 8z" fill="#FDCE4C"/><path d="M11.86 3.34c-.62-.62-1.38-.94-2.26-.94-.88 0-1.64.32-2.26.94-.62.62-.94 1.38-.94 2.26 0 .88.32 1.64.94 2.26.62.62 1.38.94 2.26.94.88 0 1.64-.32 2.26-.94.62-.62.94-1.38.94-2.26 0-.88-.32-1.64-.94-2.26z" fill="url(#a)"/><path d="M8.66 3.34c-.62-.62-1.38-.94-2.26-.94-.88 0-1.64.32-2.26.94-.62.62-.94 1.38-.94 2.26 0 .88.32 1.64.94 2.26.62.62 1.38.94 2.26.94.88 0 1.64-.32 2.26-.94.62-.62.94-1.38.94-2.26 0-.88-.32-1.64-.94-2.26z" fill="url(#b)"/><path d="M4.7 3.9c-.46.48-.7 1.04-.7 1.7 0 .66.24 1.24.7 1.7.46.46 1.04.7 1.7.7.66 0 1.22-.24 1.7-.7.46-.46.7-1.04.7-1.7 0-.66-.24-1.22-.7-1.7-.48-.46-1.04-.7-1.7-.7-.66 0-1.24.24-1.7.7z" fill="#fff"/><path d="M7.9 3.9c-.46.48-.7 1.04-.7 1.7 0 .66.24 1.24.7 1.7.46.46 1.04.7 1.7.7.66 0 1.22-.24 1.7-.7.46-.46.7-1.04.7-1.7 0-.66-.24-1.22-.7-1.7-.48-.46-1.04-.7-1.7-.7-.66 0-1.24.24-1.7.7z" fill="#fff"/><path d="M6.64 3.62c-.16.16-.24.34-.24.56 0 .22.08.42.24.58.16.16.34.22.56.22.22 0 .4-.08.58-.22.16-.16.22-.36.22-.58 0-.22-.08-.4-.22-.56a.801.801 0 0 0-.58-.24c-.22 0-.4.08-.56.24zm3.2 0c-.16.16-.24.34-.24.56 0 .22.08.42.24.58.16.16.34.22.56.22.22 0 .4-.08.58-.22.16-.16.22-.36.22-.58 0-.22-.08-.4-.22-.56a.801.801 0 0 0-.58-.24c-.22 0-.4.08-.56.24z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.364 9.446a.425.425 0 0 1 .59.118c.275.413.556.588.839.63.297.045.69-.043 1.206-.357a.425.425 0 0 1 .442.726c-.603.366-1.201.558-1.774.472-.587-.087-1.056-.452-1.42-1a.425.425 0 0 1 .117-.589z" fill="#FEE154"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.21 9.43a.425.425 0 0 1 .56-.22c.754.331 1.54.46 2.384.367a.425.425 0 0 1 .092.845 5.422 5.422 0 0 1-2.817-.433.425.425 0 0 1-.218-.56z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.72 1.361c.334-.083.655-.127.92-.127a.266.266 0 1 1 0 .532 3.43 3.43 0 0 0-.796.112l-.009.002c-.621.132-1.094.372-1.452.713a.266.266 0 1 1-.366-.386c.44-.418 1.007-.697 1.703-.846zm2.627.408.125-.513.833.102.014.003c.657.148 1.223.428 1.664.846l-.276.442-2.36-.88z" fill="#976537"/><mask id="c" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" fill="#C4C4C4"/></mask><g mask="url(#c)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.281 11.185c-.276.613-1.21 1.595-2.733.617A55.468 55.468 0 0 0 5.524 9.49c-.462-.364-1.376-.83-1.345.221-.016.307.083.99.603 1.269.425.229 1.596.903 2.417 1.379a.601.601 0 0 0-.57.89l-.09.109a.6.6 0 0 0-.513.886 1.74 1.74 0 0 0-.06.144.601.601 0 0 0-.092 1.101l.146.078c.068.154.161.314.283.479 1.208 1.644 3.315 2.162 4.4 2 .896-.148 2.825-.963 2.8-3.8-.026-2.837.341-3.661.428-3.764.19-.51.465-1.559.05-1.663-.417-.105-.869.278-1.043.483l-.657 1.884z" fill="#000"/><path d="M8.86 11.057c1.523.978 2.457-.004 2.734-.617l.656-1.884c.175-.204.627-.588 1.043-.483.415.104.14 1.152-.05 1.663-.087.103-.453.927-.428 3.764.025 2.837-1.903 3.652-2.8 3.8-1.084.162-3.192-.356-4.4-2-1.208-1.644.408-2.72 1.378-3.408-.75-.436-2.38-1.379-2.899-1.658-.52-.28-.618-.962-.603-1.268-.03-1.051.884-.586 1.345-.222a55.465 55.465 0 0 1 4.024 2.313z" fill="#D4EFF6"/><path d="M8.234 13.149a.601.601 0 0 0-.25-.813l-1.235-.655a.6.6 0 1 0-.563 1.062l1.235.655a.6.6 0 0 0 .813-.25z" fill="#D4EFF6"/><path d="M7.634 14.149a.601.601 0 0 0-.25-.813l-1.235-.655a.6.6 0 1 0-.563 1.062l1.235.655a.6.6 0 0 0 .813-.25z" fill="#D4EFF6"/><path d="M7.234 15.149a.601.601 0 0 0-.25-.813l-1.235-.655a.6.6 0 1 0-.563 1.062l1.235.655a.6.6 0 0 0 .813-.25z" fill="#D4EFF6"/><path d="m5.41 13.425-.1.218c.642.16 1.224.452 1.74.853a6.114 6.114 0 0 0-1.64-1.07zm.422-.79c.326.037.86.302 1.614.8-.644-.51-1.133-.84-1.447-.999l-.167.199z" fill="#9EC9D6"/></g><defs><linearGradient id="a" x1="9.6" y1="2.398" x2="9.6" y2="8.801" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FFB400"/></linearGradient><linearGradient id="b" x1="6.4" y1="2.398" x2="6.4" y2="8.801" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FFB400"/></linearGradient></defs></svg>\n'}`)}
                            <span style="margin-inline-end: 30px"
                                >${t=>t.social_reaction_count}</span
                            >
                        `)}
                    ${(0,s.g)((t=>t.comment_count),a.d`
                            <svg
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 2.5C0 1.11929 1.11929 0 2.5 0H11.5C12.8807 0 14 1.11929 14 2.5V7.5C14 8.88071 12.8807 10 11.5 10H7.68787L4.62533 12.6797C3.99168 13.2342 3 12.7842 3 11.9422V10H2.5C1.11929 10 0 8.88071 0 7.5V2.5ZM2.5 1C1.67157 1 1 1.67157 1 2.5V7.5C1 8.32843 1.67157 9 2.5 9H4V11.8981L7.31213 9H11.5C12.3284 9 13 8.32843 13 7.5V2.5C13 1.67157 12.3284 1 11.5 1H2.5Z"
                                />
                            </svg>
                            <span>${t=>t.comment_count}</span>
                        `)}
                </div>
                <fluent-button
                    appearance="stealth"
                    class="actions-button"
                    slot="end-actions"
                    @click=${(t,e)=>e.parent.actionTriggered(t)}
                    @keypress=${(t,e)=>e.parent.actionTriggered(t)}
                >
                    ${p}
                </fluent-button>
            `)}
    </msft-content-card>
`,v=i(48839);!function(t){t.ordered="ordered",t.unordered="unordered"}(g||(g={}));class m extends v.I{constructor(){super(...arguments),this.listType=g.unordered,this.ready=!1,this.dividerEnabled=!1,this.touchHoverUnderlineDisabled=!1,this.templateByType={"content-card":c,"condensed-card":h,"social-reactions-card":f}}selectTemplate(){return this.templateByType[this.itemTemplate]}actionTriggered(t,e){this.$emit("action-triggered",{data:t,event:e})}}(0,n.gn)([(0,o.Lj)({attribute:"list-type"})],m.prototype,"listType",void 0),(0,n.gn)([r.LO],m.prototype,"data",void 0),(0,n.gn)([(0,o.Lj)({attribute:"item-template"})],m.prototype,"itemTemplate",void 0),(0,n.gn)([r.LO],m.prototype,"ready",void 0),(0,n.gn)([o.Lj],m.prototype,"target",void 0),(0,n.gn)([(0,o.Lj)({attribute:"divider-enabled",mode:"boolean"})],m.prototype,"dividerEnabled",void 0),(0,n.gn)([(0,o.Lj)({attribute:"touch-hover-underline-disabled",mode:"boolean"})],m.prototype,"touchHoverUnderlineDisabled",void 0);var b=i(53046),y=i(67020),w=i(40082),x=i(26755);var C=i(18864);const $=a.d`<li>${(t,e)=>e.parent.selectTemplate()}</li>`,k=m.compose({baseName:"list-card",template:(t,e)=>a.d`
    <slot></slot>
    ${(0,s.g)((t=>"unordered"===t.listType),a.d`
            <ul
                class="unordered-list ${t=>t.dividerEnabled?"divider":""} ${t=>t.touchHoverUnderlineDisabled?"touch-underline-disabled":""}"
                part="unordered-list"
            >
                ${(0,C.rx)((t=>t.data),$)}
            </ul>
        `)}
    ${(0,s.g)((t=>"ordered"===t.listType),a.d`
            <ol
                class="ordered-list ${t=>t.dividerEnabled?"divider":""} ${t=>t.touchHoverUnderlineDisabled?"touch-underline-disabled":""}"
                part="ordered-list"
            >
                ${(0,C.rx)((t=>t.data),$)}
            </ol>
        `)}
    <slot name="footer" part="footer"></slot>
`,styles:(t,e)=>b.i`
        ${(0,y.j)("flex")} :host {
            box-sizing: border-box;
            font-family: ${x.SVJ};
            font-size: ${x.cSu};
            line-height: ${x.RUt};
            color: ${x.CHi};
            height: 100%;
            width: 100%;
            flex-direction: column;
        }

        .ordered-list,
        .unordered-list {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
            margin: 8px 0;
        }

        .ordered-list {
            list-style: decimal;
            padding-inline-start: 30px;
        }

        msft-content-card {
            --heading-font-size: ${x.cSu};
            --heading-line-height: ${x.RUt};
        }

        .touch-underline-disabled msft-content-card::part(heading):hover,
        .touch-underline-disabled msft-content-card::part(heading):focus {
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
        }

        msft-content-card[layout="condensed"] {
            margin-bottom: 11px;
        }

        .ordered-list msft-content-card {
            display: block;
            --heading-start-padding: 4px;
        }

        ::slotted(*) {
            display: grid;
            grid-template-columns: auto 1fr auto;
            grid-gap: 12px;
            margin: 8px 12px 0 12px;
            font-size: ${x.PwC};
            line-height: ${x.b3W};
            align-items: center;
            font-weight: bold;
        }

        ::slotted([slot="footer"]) {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-gap: 12px;
            font-weight: unset;
            margin: 0px 12px 8px 12px;
            font-size: ${x.sNp};
            line-height: ${x.vgC};
            align-items: center;
        }

        .unordered-list {
            list-style: none;
            padding: 0;
        }

        .attribution-container {
            display: flex;
            max-width: 154px;
        }

        .attribution-condensed-container {
            display: grid;
            grid-template-columns: minmax(0px, 1fr) auto;
            column-gap: 6px;
        }

        .attribution-condensed-container .attribution-container {
            display: flex;
            max-width: 100%;
        }

        .attribution-condensed-container .actions-button {
            z-index: 2;
            margin-top: 2px;
        }

        .actions-button {
            width: 24px;
            height: 24px;
            min-width: 24px;
            justify-content: center;
        }

        .actions-button::part(control) {
            padding: 0;
        }

        .like-button {
            font-size: ${x.sNp};
        }

        .attribution-title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .attribution-separator {
            margin: 0 3px;
        }

        .attribution-date {
            white-space: nowrap;
        }

        .divider li::after {
            background: rgba(0, 0, 0, 0.1);
            content: "";
            height: 1px;
            display: block;
            margin-left: 12px;
            margin-right: 12px;
            margin-bottom: 5px;
        }

        .divider li:nth-last-child(1)::after {
            display: none;
        }

        .media-icon {
            width: 36px;
            height: 36px;
        }

        .social-reaction-card::part(icon) {
            background: none;
            filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2));
            left: 50%;
            top: 50%;
            margin: 0;
            transform: translate(-50%, -50%);
        }
    `.withBehaviors((0,w.vF)(b.i`
                :host {
                    forced-color-adjust: auto;
                }
            `))})},88449:function(t,e,i){"use strict";i.d(e,{Pw:function(){return L}});var n=i(19289),o=i(39181),r=i(58952),a=i(13988);const s=(t,e)=>o.d`
    <div class="popover-arrow" part="popover-arrow">
        <svg
            width="16"
            height="6"
            viewBox="0 0 16 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.473.708 3.689 3.996C2.562 5.326 1.333 5.99 0 5.99c.987.02 14.998 0 16 0-1.332 0-2.563-.667-3.692-1.999L9.528.708a2.002 2.002 0 0 0-3.055 0Z"
                fill="#F2F2F2"
            />
        </svg>
    </div>
    <div class="options-list" part="options-list">
        ${(0,a.g)((t=>!0===t.userSignedIn),o.d`
                <a
                    class="option-item"
                    part="option-item"
                    @mousedown="${(t,e)=>t.addSymbolAction(e.event)}"
                >
                    <div class="option-svg" part="option-svg">
                        <svg
                            width="11"
                            height="12"
                            viewBox="0 0 11 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.6396 5.9V6.6H5.73965V11.5H5.03965V6.6H0.139648V5.9H5.03965V1H5.73965V5.9H10.6396Z"
                                fill="black"
                                fill-opacity="0.83"
                                stroke="black"
                                stroke-opacity="0.83"
                                stroke-width="0.2"
                            />
                        </svg>
                    </div>
                    <div class="option-str" part="option-str">
                        <span>${t=>t.addSymbolOptStr}</span>
                    </div>
                </a>
            `)}
        <a
            class="option-item"
            part="option-item"
            @mousedown="${(t,e)=>t.hideCardAction(e.event)}"
        >
            <div class="option-svg" part="option-svg">
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M.409.146A.5.5 0 0 0 .36.797L.41.853l2.689 2.69A6.656 6.656 0 0 0 .46 7.373a.5.5 0 0 0 .97.243 5.658 5.658 0 0 1 2.386-3.355l1.207 1.206a2.666 2.666 0 0 0 3.77 3.77l3.945 3.946a.5.5 0 0 0 .755-.651l-.048-.056L9.37 8.402V8.4l-.799-.799L6.66 5.69h.002L4.74 3.77l-.755-.754-2.87-2.87a.5.5 0 0 0-.707 0Zm5.321 6.03 2.356 2.356A1.666 1.666 0 0 1 5.73 6.176Zm1.197-3.843a6.66 6.66 0 0 0-1.925.283l.824.824a5.667 5.667 0 0 1 6.598 4.18.5.5 0 0 0 .97-.242 6.667 6.667 0 0 0-6.467-5.045Zm.13 2.339 2.534 2.533a2.668 2.668 0 0 0-2.534-2.533Z"
                        fill="#000"
                        fill-opacity=".83"
                    />
                </svg>
            </div>
            <div class="option-str" part="option-str">
                <span>${t=>t.hideCardOptStr}</span>
            </div>
        </a>
        <a
            class="option-item"
            part="option-item"
            @mousedown="${(t,e)=>t.dataProviderAction(e.event)}"
        >
            <div class="option-svg" part="option-svg">
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.5 9c0 .693-.235 1.332-.63 1.84l2.769 2.768a.375.375 0 1 1-.53.53l-2.77-2.768A3 3 0 1 1 7.5 9Zm-3 2.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                        fill="#000"
                        fill-opacity=".83"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.125 2.25a.375.375 0 0 0-.375.375v2.7c-.26.053-.512.133-.75.237V2.625C3 2.004 3.504 1.5 4.125 1.5h3.814c.299 0 .585.119.796.33l2.936 2.935c.21.211.329.497.329.796v6.814c0 .621-.504 1.125-1.125 1.125h-.44a1.121 1.121 0 0 0-.266-.422l-.328-.328h1.034a.375.375 0 0 0 .375-.375V6H8.625A1.125 1.125 0 0 1 7.5 4.875V2.25H4.125Zm4.125.155v2.47c0 .207.168.375.375.375h2.47L8.25 2.405Z"
                        fill="#000"
                        fill-opacity=".83"
                    />
                </svg>
            </div>
            <div class="option-str" part="option-str">
                <span>${t=>t.dataProviderOptStr}</span>
            </div>
        </a>
        <a
            class="option-item"
            part="option-item"
            @mousedown="${(t,e)=>t.moreSettingAction(e.event)}"
        >
            <div class="option-svg" part="option-svg">
                <svg
                    width="11"
                    height="3"
                    viewBox="0 0 11 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.5 1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM6.5 1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM9.25 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
                        fill="#000"
                        fill-opacity=".83"
                    />
                </svg>
            </div>
            <div class="option-str" part="option-str">
                <span>${t=>t.moreSettingOptStr}</span>
            </div>
        </a>
    </div>
`;var l=i(18864);const c=(t,e)=>o.d` <div class="quote-row">
    <div class="quote-view" part="quote-view" id="quoteItemView">
        <a
            class="quote-titles-cntr"
            part="quote-titles-cntr"
            href="${t=>t.quoteHref}"
            target=${t=>t.target}
        >
            <span class="quote-title" part="quote-title">
                ${(0,a.g)((t=>t.displayName.length<=8),o.d`<p class="quote-title-str" part="quote-title-str">
                        ${t=>t.displayName}
                    </p>`)}
                ${(0,a.g)((t=>t.displayName.length>8),o.d`<p class="quote-title-str" part="quote-title-str">
                        ${t=>t.symbol}
                    </p>`)}
            </span>
            <span class="sec-title" part="sec-title">
                <p class="sec-title-str" part="sec-title-str">${t=>t.displayName}</p>
            </span>
        </a>
        <div class="price" part="price">
            <span class="price-str" part="price-str">${t=>t.price}</span>
        </div>
        <a
            class="change-values ${(t,e)=>e.parent.getQuoteColor(t.gain,t.unchanged,"quote-red","quote-green","quote-grey")}"
            part="change-values ${(t,e)=>e.parent.getQuoteColor(t.gain,t.unchanged,"quote-red","quote-green","quote-grey")}"
            @click="${(t,e)=>e.parent.changeShowingValue()}"
        >
            ${(0,a.g)(((t,e)=>e.parent.showChangeValue),o.d`
                    <span class="change-values-str" part="change-values-str"
                        >&lrm;${t=>t.changeValue}</span
                    >
                `)}
            ${(0,a.g)(((t,e)=>!e.parent.showChangeValue),o.d`
                    <span class="change-values-percentage" part="change-values-percentage"
                        >&lrm;${t=>t.changePcnt}</span
                    >
                `)}
        </a>
    </div>
</div>`,d=(t,e)=>o.d`
    <div class="quote-list" part="quote-list">
        ${(0,l.rx)((t=>t.quoteItems&&t.quoteItems.map((e=>Object.assign(Object.assign({},e),{target:t.target})))),c)}
    </div>
    <div class="footer" part="footer">
        <fluent-anchor
            class="sd-action"
            part="sd-action"
            target=${t=>t.target}
            href="${t=>t.footerLink}"
        >
            ${t=>t.footer}
        </fluent-anchor>
    </div>
`,u=(t,e)=>o.d`
    <div class="empty-item" part="empty-item">
        <div class="empty-str" part="empty-str">
            <span>
                ${t=>t.emptyWatchlistStr}&lrm;
            </span>
        </div>
        <fluent-button
            class="add-symbol-button sd-action"
            appearance="outline"
            part="add-symbol-button"
            @click="${(t,e)=>t.addSymbolAction(e.event)}"
        >
            &lrm;${t=>t.addSymbolBtnStr}
        </fluent-button>
    </div>
    ${(0,a.g)((t=>t.layout===n.NV.full),o.d`
            <div class="quote-list-empty-watchlist" part="quote-list">
                ${(0,l.rx)((t=>t.quoteItems&&t.quoteItems.map((e=>Object.assign(Object.assign({},e),{target:t.target})))),c)}
            </div>
        `)}
`,h=(t,e)=>o.d`
    <a
        class="suggestion-entry"
        part="suggestion-entry"
        @click="${(t,e)=>e.parent.addToWatchlist(t.quoteId)}"
    >
        <div class="suggestion-item" part="suggestion-item">
            <div class="suggestion-company" part="suggestion-company">
                <span class="suggestion-symbol" part="suggestion-symbol"
                    >${t=>t.equitySymbol}</span
                >
                <span class="suggestion-name" part="suggestion-name"
                    >${t=>t.longName}</span
                >
            </div>
            <div class="suggestion-market" part="suggestion-market">
                <span class="suggestion-market-str">${t=>t.exchangeName}</span>
            </div>
            <div class="suggestion-add-icon">
                <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.5 4.9V5.6H5.6V10.5H4.9V5.6H0V4.9H4.9V0H5.6V4.9H10.5Z"
                        fill="black"
                        fill-opacity="0.83"
                    />
                </svg>
            </div>
        </div>
    </a>
`,p=(t,e)=>o.d`
    <div class="search-area" part="search-area">
        <div class="search-button" part="search-button">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.5 3a5.5 5.5 0 0 1 4.227 9.02l4.127 4.126a.5.5 0 0 1-.638.765l-.07-.057-4.126-4.127A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
                    fill="#212121"
                />
            </svg>
        </div>
        <input
            class="search-input"
            part="search-input"
            type="search"
            autofocus="autofocus"
            @input=${t=>t.handleTextInput()}
            placeholder="${t=>t.searchPlaceholder}"
            :value="${t=>t.value}"
            ${(0,r.i)("inputControl")}
        />
        ${(0,a.g)((t=>!0===t.showSuggestions),o.d`
                <div class="suggestions-list" part="suggestions-list">
                    ${(0,l.rx)((t=>t.searchSuggestions),h)}
                </div>
            `)}
        ${(0,a.g)((t=>!0===t.noSuggestion),o.d`
                <div class="suggestions-list" part="suggestions-list">
                    <div class="no-suggestion-str">
                        ${t=>t.noSuggestionHint}
                    </div>
                </div>
            `)}
    </div>
`;var g=i(53046),f=i(67020),v=i(40082),m=i(26755),b=i(2658),y=i(22674),w=i(56201),x=i(15933),C=i(13543);const $=g.i`
    .options-list {
        right: 16px;
    }

    .option-str {
        padding: 0px 10px 3px 0px;
    }

    .popover-arrow {
        left: 264px;
    }
`,k=g.i`
    .options-list {
        left: 16px;
    }

    .option-str {
        padding: 0px 0px 3px 10px;
    }

    .popover-arrow {
        left: 25px;
    }
`,L=n.SD.compose({baseName:"money-card",template:(t,e)=>o.d`
    <div class="title" part="title" ${(0,r.i)("titleArea")}>
        ${(0,a.g)((t=>t.cardType===n.Lb.AddWatchlist),o.d`
                <a
                    class="title-link"
                    part="title-link"
                    @click="${t=>t.onTitleClicked()}"
                >
                    <div class="title-content">
                        &lrm;${t=>t.titleStr}
                    </div>
                </a>
            `)}
        ${(0,a.g)((t=>t.cardType!=n.Lb.AddWatchlist),o.d`
                <a
                    class="title-link"
                    part="title-link"
                    href="${t=>t.titleLink}"
                    target=${t=>t.target}
                >
                    <div class="title-content">
                        &lrm;${t=>t.titleStr}
                    </div>
                </a>
                <fluent-button
                    id="option-button"
                    class="option-button"
                    part="option-button"
                    slot="option-actions"
                    @click="${t=>t.optionClicked()}"
                    @blur="${t=>t.onBlurOption()}"
                    ref="optButton"
                >
                    <slot name="option-button-svg"></slot>
                </fluent-button>
            `)}
    </div>
    ${(0,a.g)((t=>t.optionSwitch),s)}
    ${(0,a.g)((t=>t.cardType===n.Lb.ShowData),d)}
    ${(0,a.g)((t=>t.cardType===n.Lb.EmptyWatchlist),u)}
    ${(0,a.g)((t=>t.cardType===n.Lb.AddWatchlist),p)}
`,styles:(t,e)=>g.i`
    ${(0,f.j)("grid")} :host {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        outline: none;
        padding: 8px;
        height: 100%;
        grid-template-rows: auto 1fr;
    }

    :host([layout="full"]) .footer {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-top: 8px;
    }

    :host([layout="full"]) .price-str {
        font-size: ${m.PwC};
        font-weight: 500;
        height: 23px;
        line-height: ${m.RUt};
    }

    :host([layout="full"]) .quote-list {
        grid-row-gap: 24px;
        height: 200px;
    }

    :host([layout="full"]) .quote-title-str {
        color: ${m.CHi};
        font-size: ${m.cSu};
        font-weight: 600;
        height: 18px;
        line-height: ${m.vgC};
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0px;
    }

    :host([layout="full"]) .sec-title-str {
        font-size: ${m.sNp};
        height: 14px;
        line-height: ${m.vgC};
    }

    :host([layout="full"]) .title {
        align-items: center;
        display: grid;
        grid-column-gap: 8px;
        grid-template-columns: 1fr auto;
        height: 24px;
        margin-bottom: 11px;
    }

    :host([layout="half"]) .footer {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-top: 8px;
    }

    :host([layout="half"]) .price-str {
        font-size: ${m.cSu};
        font-weight: 500;
        height: 18px;
        line-height: 18px;
    }

    :host([layout="half"]) .quote-list {
        grid-row-gap: 6px;
        height: 54px;
    }

    :host([layout="half"]) .quote-title-str {
        color: ${m.CHi};
        font-size: ${m.PwC};
        font-weight: 600;
        height: 18px;
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0px;
    }

    :host([layout="half"]) .sec-title-str {
        display: none;
    }

    :host([layout="half"]) .title {
        align-items: center;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-column-gap: 8px;
        margin-bottom: 8px;
    }

    .change-values {
        border-radius: calc(${m.UWU} * 1px);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        display: flex;
        justify-content: center;
        height: 24px;
        padding: 0 6px;
    }

    .change-values-str,
    .change-values-percentage {
        font-size: ${m.sNp};
        line-height: ${m.vgC};
        display: flex;
        justify-content: flex-end;
    }

    .operation-btn::part(actions) {
        border: none;
        padding-right: 0px;
        padding-left: 0px;
        height: 32px;
        width: 99px;
    }

    .option-button {
        display: none;
        --control-corner-radius: 20;
        height: 24px;
        width: 24px;
        min-width: 24px;
    }

    .option-button::part(control) {
        padding: 0
    }

    .index-logo {
        justify-content: flex-start;
        fill: ${m.CHi};
    }

    .operation-btn {
        height: calc(${b.i} * 1px);
        width: 99px;
    }

    .price {
        align-items: center;
        display: flex;
        justify-content: flex-end;
    }

    .price-str {
    }

    .quote-green {
        color: #ffffff;
        background: #107c10;
    }

    .quote-list {
        display: grid;
    }

    .quote-list-empty-watchlist {
        display: grid;
        grid-row-gap: 24px;
        height: 88px;
        margin-bottom: 44px;
    }

    .quote-red {
        color: #ffffff;
        background: #d33e3e;
    }

    .quote-grey {
        color: #ffffff;
        background: #808080;
    }

    .quote-titles-cntr {
        text-decoration: none;
    }

    .quote-view {
        align-items: center;
        display: grid;
        grid-column-gap: 10px;
        grid-template-columns: var(--quote-grid-columns-ltr);
    }

    .sec-title-str {
        color: ${m.Q5n};
        margin: 0px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .title-link {
        font-weight: 500;
        color: ${m.CHi};
        display: flex;
        font-size: ${m.sNp};
        justify-content: flex-start;
        line-height: ${m.vgC};
        outline: none;
        cursor: pointer;
        text-decoration: none;
    }

    .title-link:${w.b} {
        text-decoration: underline;
    }

    .title-content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 6px;
        padding-inline-end: 12px;
    }

    .empty-item {
        width: 146px;
        height: 54px;
        align-items: center;
        display: grid;
        border-radius: calc(${m.UWU} * 1px);
        border: 1px solid ${m.dtw};
        grid-template-rows: auto 1fr;
        grid-row-gap: 8px;
        justify-content: center;
        padding: 18px 60px 19px 60px;
    }

    .empty-str {
        font-family: Segoe UI;
        font-size: ${m.cSu};
        line-height: ${m.RUt};
        text-align: center;
    }

    .add-symbol-button {
        border-color: #00B294;
        color: #00B294;
    }

    .search-area {
        display: grid;
        grid-template-columns: auto 1fr;
        height: calc(${b.i} * 1px);
        width: 266px;
        position: relative;
        border: 1px solid ${m.dtw};
    }

    .search-button {
        border: none;
        background: transparent;
        width: 20px;
        padding: 6px 10px;
    }

    .search-input {
        background: transparent;
        font-size: ${m.cSu};
        line-height: ${m.RUt};
        height: calc(${b.i} * 1px);
        border: none;
        outline: none;
    }

    .quote-row {
        padding: 0 8px;
    }

    .sd-action {
        height: 24px;
    }

    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }

    .popover-arrow {
        position: absolute;
        z-index: 9998;
        top: 31px;
    }

    .options-list {
        display: block;
        position: absolute;
        background: #F2F2F2;
        top: 44px;
        padding: 5px 0px;
        border-radius: 3px;
        z-index: 9999;
    }

    .option-item {
        cursor: pointer;
        display: grid;
        grid-template-columns: 28px auto;
        height: 20px;
        width: 100%;
        margin: 0px;
        padding: 3px 0px 3px 0px;
    }

    .option-item:hover{
        background: ${m.XiB};
    }

    .option-svg {
        display: flex;
        align-items: center;
        width: 28px;
        height: 20px;
    }

    .option-svg svg{
        margin: 0 auto;
        display: block;
    }

    .option-str {
        height: 16px;
        font-size: ${m.sNp};
        line-height: ${m.RUt};
    }

    .suggestions-list {
        display: block;
        position: absolute;
        box-sizing: border-box;
        top: 40px;
        width: 100%;
        padding: 4px;
        -webkit-box-shadow: 0 0 10px ${m.dtw};
        -moz-box-shadow: 0 0 10px ${m.dtw};
        box-shadow: 0 0 10px ${m.dtw};
        z-index: 9999;
    }

    .no-suggestion-str {
        font-size: ${m.cSu};
        line-height: ${m.vgC};
        height: 16px;
        margin: 5px 0px 5px 9px;
    }

    .suggestion-entry {
        text-decoration: none;
        cursor: pointer;
    }

    .suggestion-entry:hover .suggestion-item{
        background: ${m.XiB};
    }

    .suggestion-item {
        display: grid;
        grid-template-columns: 148px 70px 32px;
        grid-column-gap: 2px;
        height: 40px;
        padding: 5px 8px 2px 8px;
    }

    .suggestion-company {
        display: grid;
        grid-template-rows: 20px 20px;
    }

    .suggestion-add-icon {
        padding-top: 9px;
        padding-left: 10px;
    }

    .suggestion-add-icon svg path{
        fill: ${m.CHi};
    }

    .suggestion-symbol {
        font-weight: 800;
        font-size: ${m.cSu};
        line-height: ${m.RUt};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${m.CHi};
    }

    .suggestion-name {
        font-weight: 600;
        font-size: ${m.sNp};
        line-height: ${m.RUt};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${m.CHi};
    }

    .suggestion-market {
        position: relative;
        text-align: right;
        padding-top: 8px;
    }

    .suggestion-market-str {
        position: absolute;
        height: 100%;
        right: 0px;
        font-weight: 600;
        font-size: ${m.sNp};
        line-height: ${m.RUt};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${m.CHi};
    }

    ${C.U}
`.withBehaviors(new y.O($,k),(0,v.vF)(g.i`
            :host {
                forced-color-adjust: auto;
            }
            .option-item,
            .suggestion-add-icon svg path,
            .option-svg svg path,
            .search-button svg path {
                color: ${x.H.ButtonText};
                fill: currentcolor;
                fill-opacity: 1;
            }
            .options-list {
                forced-color-adjust: none;
                background: ${x.H.ButtonFace};
                box-shadow: 0 0 0 calc((v${m.Han} * 1px)) ${x.H.CanvasText};
            }
            .option-item:hover,
            .option-item:hover .option-svg svg path {
                background: ${x.H.Highlight};
                color: ${x.H.HighlightText};
                fill: currentcolor;
            }
            .add-symbol-button:hover {
                border-color: ${x.H.HighlightText};
                color: ${x.H.HighlightText};
            }
            .suggestions-list {
                forced-color-adjust: none;
                background: ${x.H.Canvas};
                box-shadow: 0 0 0 calc((v${m.Han} * 1px)) ${x.H.CanvasText};
            }
            .suggestion-entry .suggestion-item * {
                color: ${x.H.ButtonText};
                fill: currentcolor;
            }
            .suggestion-entry:hover .suggestion-item,
            .suggestion-entry:${w.b} .suggestion-item {
                background: ${x.H.Highlight};
            }
            .suggestion-entry:hover .suggestion-item *,
            .suggestion-entry:hover .suggestion-item svg path,
            .suggestion-entry:${w.b} .suggestion-item *,
            .suggestion-entry:${w.b}  .suggestion-item svg path {
                color: ${x.H.HighlightText};
                fill: currentcolor;
            }
        `))})},19289:function(t,e,i){"use strict";i.d(e,{SD:function(){return g},NV:function(){return n},Lb:function(){return r},WT:function(){return a},aZ:function(){return o}});var n,o,r,a,s=i(33940),l=i(65620),c=i(87697),d=i(48839),u=i(82500);class h extends d.I{}class p extends((0,u.Um)(h)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}!function(t){t.full="full",t.half="half"}(n||(n={})),function(t){t.Currency="currencyPair",t.Commodity="future",t.ETF="etf",t.Funds="fund",t.Indices="index",t.Stocks="stock"}(o||(o={})),function(t){t.ShowData="showData",t.EmptyWatchlist="emptyWatchlist",t.AddWatchlist="addWatchlist"}(r||(r={})),function(t){t.Watchlist="watchlist",t.Market="market"}(a||(a={}));class g extends p{constructor(){super(...arguments),this.layout=n.half,this.optionSwitch=!1,this.target="_blank",this.showChangeValue=!1,this.swapGainLossColor=!1}getQuoteColor(t,e,i,n,o){return e?o:this.swapGainLossColor?t?i:n:t?n:i}optionClicked(){this.$emit("action-click-option");const t=this.titleArea.querySelector("#option-button");t&&t.focus()}blurOption(){const t=this.titleArea.querySelector("#option-button");t&&t.blur()}onBlurOption(){this.$emit("action-blur-option")}onTitleClicked(){this.$emit("action-title-clicked")}changeShowingValue(){this.showChangeValue=!this.showChangeValue}handleTextInput(){this.inputControl&&(this.value=this.inputControl.value,this.$emit("action-text-input",this.inputControl.value))}addToWatchlist(t){this.inputControl&&(this.inputControl.value="",this.value=""),this.$emit("action-add-to-watchlist",t)}addSymbolAction(t){0===t.button&&(this.$emit("action-add-symbol"),this.blurOption())}hideCardAction(t){0===t.button&&(this.$emit("action-hide-card"),this.blurOption())}dataProviderAction(t){0===t.button&&(this.$emit("action-data-provider"),this.blurOption(),window.open(this.dataProviderLink))}moreSettingAction(t){0===t.button&&(this.$emit("action-more-setting"),this.blurOption())}}(0,s.gn)([l.Lj],g.prototype,"layout",void 0),(0,s.gn)([l.Lj],g.prototype,"titleStr",void 0),(0,s.gn)([l.Lj],g.prototype,"titleLink",void 0),(0,s.gn)([(0,l.Lj)({mode:"boolean"})],g.prototype,"userSignedIn",void 0),(0,s.gn)([l.Lj],g.prototype,"dataFrom",void 0),(0,s.gn)([l.Lj],g.prototype,"quoteItems",void 0),(0,s.gn)([(0,l.Lj)({mode:"boolean"})],g.prototype,"optionSwitch",void 0),(0,s.gn)([l.Lj],g.prototype,"cardType",void 0),(0,s.gn)([(0,l.Lj)()],g.prototype,"footer",void 0),(0,s.gn)([(0,l.Lj)()],g.prototype,"footerLink",void 0),(0,s.gn)([(0,l.Lj)()],g.prototype,"dataProviderLink",void 0),(0,s.gn)([l.Lj],g.prototype,"target",void 0),(0,s.gn)([c.LO],g.prototype,"showChangeValue",void 0),(0,s.gn)([(0,l.Lj)({mode:"boolean"})],g.prototype,"swapGainLossColor",void 0),(0,s.gn)([l.Lj],g.prototype,"addSymbolBtnStr",void 0),(0,s.gn)([l.Lj],g.prototype,"emptyWatchlistStr",void 0),(0,s.gn)([l.Lj],g.prototype,"searchSuggestions",void 0),(0,s.gn)([(0,l.Lj)({mode:"boolean"})],g.prototype,"showSuggestions",void 0),(0,s.gn)([l.Lj],g.prototype,"searchPlaceholder",void 0),(0,s.gn)([(0,l.Lj)({mode:"boolean"})],g.prototype,"noSuggestion",void 0),(0,s.gn)([l.Lj],g.prototype,"noSuggestionHint",void 0),(0,s.gn)([l.Lj],g.prototype,"addSymbolOptStr",void 0),(0,s.gn)([l.Lj],g.prototype,"hideCardOptStr",void 0),(0,s.gn)([l.Lj],g.prototype,"dataProviderOptStr",void 0),(0,s.gn)([l.Lj],g.prototype,"moreSettingOptStr",void 0)},51670:function(t,e,i){"use strict";i.d(e,{Um:function(){return m}});var n=i(33940),o=i(65620),r=i(87697),a=i(48839);class s extends a.I{moneyCardContentDataChanged(){"Default"!==this.cardStyle&&void 0===this.moneyCardContentData.actionAppearance&&(this.moneyCardContentData.actionAppearance="outline")}getQuoteColor(t,e,i,n,o){return e?o:this.moneyCardContentData.swapGainLossColor?t?i:n:t?n:i}changeShowingValue(){this.showChangeValue=!this.showChangeValue}connectedCallback(){super.connectedCallback(),this.showChangeValue=!1}}(0,n.gn)([(0,o.Lj)({attribute:"layout"})],s.prototype,"layout",void 0),(0,n.gn)([o.Lj],s.prototype,"cardStyle",void 0),(0,n.gn)([o.Lj],s.prototype,"target",void 0),(0,n.gn)([r.LO],s.prototype,"moneyCardContentData",void 0),(0,n.gn)([r.LO],s.prototype,"quoteItems",void 0),(0,n.gn)([r.LO],s.prototype,"showChangeValue",void 0),(0,n.gn)([r.LO],s.prototype,"headerTelemetryTag",void 0),(0,n.gn)([r.LO],s.prototype,"switchValueTelemetryTag",void 0),(0,n.gn)([r.LO],s.prototype,"seeMoreTelemetryTag",void 0);var l=i(39181),c=i(13988),d=i(18864);const u=(t,e)=>l.d` <a
    class="quote-row"
    part="quote-row"
    href="${t=>t.quoteHref}"
    target=${(t,e)=>e.parent.target}
    aria-label="${t=>t.displayName} ${t=>t.symbol} ${t=>t.price} ${t=>t.changePcnt}"
    data-t="${t=>t.telemetryTag}"
>
    <div class="quote-view" part="quote-view">
        <div class="quote-title-container" part="quote-title-container">
            <span class="quote-title" part="quote-title">
                <p
                    class="quote-title-content"
                    part="quote-title-content"
                    title="${t=>t.displayName} (${t=>t.symbol})"
                >
                    ${t=>t.symbol}
                </p>
            </span>
            <span class="sec-title" part="sec-title">
                <p
                    class="sec-title-str"
                    part="sec-title-str"
                    title="${t=>t.displayName} (${t=>t.symbol})"
                >
                    ${t=>t.displayName}
                </p>
            </span>
        </div>
        <div class="quote-title-container" part="quote-title-container">
            <div class="price" part="price">
                <span class="price-str" part="price-str">${t=>t.price}</span>
            </div>
        </div>
        <button
            class="change-values ${(t,e)=>e.parent.getQuoteColor(t.gain,t.unchanged,"quote-red","quote-green","quote-grey")}"
            part="change-values ${(t,e)=>e.parent.getQuoteColor(t.gain,t.unchanged,"quote-red","quote-green","quote-grey")}"
            @click="${(t,e)=>e.parent.changeShowingValue()}"
            aria-label="${(t,e)=>e.parent.showChangeValue?`${t.changeValue} ${t.displayName} ${t.changePcnt}`:`${t.changePcnt} ${t.displayName} ${t.changeValue}`}"
            data-t="${(t,e)=>e.parent.switchValueTelemetryTag}"
        >
            ${(0,c.g)(((t,e)=>e.parent.showChangeValue),l.d`
                    <span class="change-button-area" part="change-button-area">
                        <span
                            class="change-values-percentage"
                            part="change-values-percentage"
                        >
                            &lrm;${t=>t.changeValue}
                        </span>
                    </span>
                `)}
            ${(0,c.g)(((t,e)=>!e.parent.showChangeValue),l.d`
                    <span class="change-button-area" part="change-button-area">
                        <span
                            class="change-values-percentage"
                            part="change-values-percentage"
                        >
                            &lrm;${t=>t.changePcnt}&lrm;
                        </span>
                    </span>
                `)}
        </button>
    </div>
</a>`;var h=i(26755),p=i(53046),g=i(67020),f=i(40082),v=i(15933);const m=s.compose({baseName:"show-quotes-money-card",template:(t,e)=>l.d`
    <msft-structured-data-card
        target=${t=>t.target}
        :headerTelemetryTag=${t=>t.headerTelemetryTag}
        :seeMoreTelemetryTag=${t=>t.seeMoreTelemetryTag}
        :data=${t=>t.moneyCardContentData}
    >
        <slot name="more-actions" slot="more-actions"></slot>
        <slot name="pin" slot="pin"></slot>
        <slot name="title-icon" slot="title-icon"></slot>
        <div class="quote-list" part="quote-list">
            ${(0,d.rx)((t=>t.quoteItems),u)}
        </div>
        <slot name="footer-start" slot="footer-start"></slot>
        <slot name="footer-end" slot="footer-end"></slot>
    </msft-structured-data-card>
`,styles:(t,e)=>p.i`
        ${(0,g.j)("flex")} :host {
            height: 100%;
            --quote-grid-columns: 111px 81px 56px;
        }

        :host(:focus) {
            outline: none;
        }

        msft-structured-data-card::part(title-link)::after {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        .price-str {
            color: ${h.CHi};
            font-weight: 600;
            text-align: end;
            width: 100%;
            font-size: var(--price-content-font-size, ${h.PwC});
            line-height: var(--price-content-line-height, ${h.b3W});
        }

        .quote-list {
            margin-top: var(--quote-list-margin-top, 12px);
            display: grid;
            grid-template-rows: var(--quote-list-grid-rows, repeat(auto-fill, 52px));
            row-gap: var(--quote-list-grid-gap, 2px);
            z-index: 1;
        }

        .quote-title-content {
            color: ${h.CHi};
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0;
            font-size: var(--quote-title-font-size, ${h.cSu});
            line-height: var(--quote-title-line-height, ${h.RUt});
        }

        .sec-title-str {
            color: ${h.Q5n};
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: ${h.sNp};
            line-height: ${h.vgC};
        }

        .quote-row {
            cursor: pointer;
            text-decoration: none;
            padding: var(--quote-row-padding, 8px 8px);
            margin: var(--quote-row-margin, 0px 8px);
        }

        .quote-row:hover {
            background: ${h.QpD};
        }

        .change-values {
            height: 24px;
            font-family: var(--body-font);
            border-radius: 4px;
            border: 0;
            padding: 0;
            cursor: pointer;
            outline: none;
        }

        .change-values:focus-visible {
            outline-color: ${h.yGg};
            outline-width: 2px;
            outline-style: auto;
        }

        .change-button-area {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        .change-values-percentage {
            margin-top: 4px;
            margin-bottom: 4px;
            margin-inline-end: 8px;
            display: block;
            font-size: ${h.sNp};
            font-weight: 600;
            line-height: ${h.vgC};
            text-align: end;
        }

        .price {
            align-items: center;
            display: flex;
        }

        .quote-title-container {
            text-decoration: none;
        }

        .quote-view {
            align-items: center;
            display: grid;
            grid-column-gap: 8px;
            grid-template-columns: var(--quote-grid-columns);
        }

        .quote-green {
            color: #ffffff;
            background: #107c10;
        }

        .quote-red {
            color: #ffffff;
            background: #d33e3e;
        }

        .quote-grey {
            color: #ffffff;
            background: #808080;
        }
    `.withBehaviors((0,f.vF)(p.i`
                :host {
                    forced-color-adjust: auto;
                }

                .title-link:hover {
                    text-decoration: underline;
                }

                .change-values,
                .quote-row:hover {
                    forced-color-adjust: none;
                    background: ${v.H.ButtonFace};
                    box-shadow: 0 0 0 calc((${h.vxp} - ${h.Han}) * 1px)
                        ${v.H.LinkText};
                    color: ${v.H.ButtonText};
                }

                ::slotted(*[slot="option-button"]) {
                    fill: ${v.H.ButtonText};
                }

                ::slotted([slot="option-button"]:hover) {
                    background: ${v.H.Highlight};
                    fill: ${v.H.HighlightText};
                }

                .change-values:focus-visible {
                    outline-color: ${v.H.Highlight};
                }
            `))})},75630:function(t,e,i){"use strict";i.d(e,{F9:function(){return O}});var n,o,r,a=i(33940),s=i(65620),l=i(87697),c=i(39181),d=i(48839);!function(t){t.half="1x_1y",t.full="1x_2y",t.tall="1x_3y"}(n||(n={})),function(t){t.preGame="pre-game",t.inprogressGame="inprogress-game",t.postGame="post-game"}(o||(o={})),function(t){t.singleparticipant="single",t.dualparticipants="dual"}(r||(r={}));class u extends d.I{constructor(){super(...arguments),this.cardLayout=n.half,this.sportsMatchData=[],this.clickthroughTarget="_blank"}}function h(t,e){if(t){if("tennis"===e.toLowerCase()){const e=t.split(", "),i=/\((.*?)\)/i;let n,o="";return e.forEach((t=>{t.includes("(")?(o+=t.charAt(0),n=t.match(i),null!=n&&(o+=n[1].sup()+"  ")):o+=t+"  "})),c.d` ${o.trim()} `}return t}}(0,a.gn)([(0,s.Lj)({attribute:"card-layout"})],u.prototype,"cardLayout",void 0),(0,a.gn)([s.Lj],u.prototype,"background",void 0),(0,a.gn)([s.Lj],u.prototype,"uxstyle",void 0),(0,a.gn)([l.LO],u.prototype,"sportsMatchupCardData",void 0),(0,a.gn)([l.LO],u.prototype,"sportsMatchData",void 0),(0,a.gn)([(0,s.Lj)({attribute:"clickthrough-target"})],u.prototype,"clickthroughTarget",void 0),(0,a.gn)([l.LO],u.prototype,"matchTelemetryTags",void 0),(0,a.gn)([l.LO],u.prototype,"headerTelemetryTag",void 0),(0,a.gn)([l.LO],u.prototype,"seeMoreTelemetryTag",void 0);var p=i(26755),g=i(22674),f=i(53046),v=i(56201),m=i(40082),b=i(95263),y=i(13543),w=i(16859);const x=f.i`
    .sports-match-score-container {
        flex-direction: row;
    }
`,C=f.i`
    .sports-match-score-container {
        flex-direction: row-reverse;
    }
`,$=f.i`
    :host([uxstyle="widget"]) .sd-action {
        color: #003e92;
    }
`,k=f.i`
    :host([uxstyle="widget"]) .sd-action {
        color: #99ebff;
    }
`;var L=i(13988),D=i(18864),S=i(99478);const T=(t,e)=>c.d`
    <slot name="sports-header-icon"></slot>
    <a
        class="sports-matchup-card-header-title-link"
        href=${t=>{var e;return null===(e=t.sportsMatchupCardData)||void 0===e?void 0:e.cardTitleClickthroughUrl}}
        target=${t=>t.clickthroughTarget}
        data-t="${t=>t.headerTelemetryTag}"
    >
        <div class="sports-matchup-card-header-title">
            ${t=>{var e;return"widget"==t.uxstyle?"":null===(e=t.sportsMatchupCardData)||void 0===e?void 0:e.cardTitle}}
        </div>
    </a>
    <div class="sports-matchup-card-header-action-button" id="sports-matchup-action">
        <slot name="more-actions"></slot>
    </div>
`,F=(t,e)=>c.d`
    <a
        class="sports-match-clickthrough-link"
        href=${t=>t.matchClickthroughUrl?t.matchClickthroughUrl:void 0}
        target=${(t,e)=>e.parent.clickthroughTarget}
        data-t="${(t,e)=>e.parent.matchTelemetryTags&&t.matchClickthroughUrl?e.parent.matchTelemetryTags.get(t.matchClickthroughUrl):""}"
    >
        <div
            class="sports-match ${(t,e)=>{return"cricket"===(i=e.parent.sportsMatchupCardData.dataType+"")||"tennis"===i||"Tennis"===i?"long-score":"";var i}}"
        >
            <div class="sports-match-participants">
                <div class="sports-match-dual-participants">
                    <div class="sports-match-participant participant-one">
                        ${(0,L.g)((t=>t.participantOneImageUrl&&!(0,S.TF)(t.participantOneImageUrl)),c.d` <div
                                class="sports-match-participant-image"
                            >
                                <img
                                    role="presentation"
                                    src="${t=>t.participantOneImageUrl}"
                                    alt="${t=>t.participantOneImageAltText}"
                                    elementtiming="${(t,e)=>e.parent.sportsMatchupCardData.elementTiming}"
                                    onLoad="${(t,e)=>e.parent.sportsMatchupCardData.imgLoadCallback?e.parent.sportsMatchupCardData.imgLoadCallback("sports"):void 0}"
                                />
                            </div>`)}
                        <div
                            class="sports-match-participant-name ${t=>1==t.participantOneIsWinner&&t.gameStateCatetory==o.postGame?"winner":0==t.participantOneIsWinner&&t.gameStateCatetory==o.postGame?"loser":""}"
                        >
                            ${t=>t.participantOneName}
                        </div>
                        <div class="sports-match-score-container">
                            ${(0,L.g)((t=>t.gameStateCatetory==o.inprogressGame||t.gameStateCatetory==o.postGame),c.d`
                                    <div
                                        class="sports-match-participant-score ${t=>1==t.participantOneIsWinner&&t.gameStateCatetory==o.postGame?"winner":0==t.participantOneIsWinner&&t.gameStateCatetory==o.postGame?"loser":""}"
                                    >
                                        ${(t,e)=>h(t.participantOneScore+"",e.parent.sportsMatchupCardData.dataType+"")}
                                    </div>
                                    <div class="sports-match-participant-winner-tag">
                                        ${(0,L.g)((t=>1==t.participantOneIsWinner&&t.gameStateCatetory==o.postGame),c.d`
                                                <svg
                                                    width="5"
                                                    height="10"
                                                    viewBox="0 0 5 10"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M5 0L0 5.21739L5 10V0Z" />
                                                </svg>
                                            `)}
                                    </div>
                                `)}
                        </div>
                    </div>
                    <div class="sports-match-participant participant-two">
                        ${(0,L.g)((t=>t.participantTwoImageUrl&&!(0,S.TF)(t.participantTwoImageUrl)),c.d` <div
                                class="sports-match-participant-image"
                            >
                                <img
                                    role="presentation"
                                    src="${t=>t.participantTwoImageUrl}"
                                    alt="${t=>t.participantTwoImageAltText}"
                                />
                            </div>`)}
                        <div
                            class="sports-match-participant-name ${t=>1==t.participantTwoIsWinner?"winner":0==t.participantTwoIsWinner?"loser":""}"
                        >
                            ${t=>t.participantTwoName}
                        </div>
                        <div class="sports-match-score-container">
                            ${(0,L.g)((t=>t.gameStateCatetory==o.inprogressGame||t.gameStateCatetory==o.postGame),c.d`
                                    <div
                                        class="sports-match-participant-score ${t=>1==t.participantTwoIsWinner&&t.gameStateCatetory==o.postGame?"winner":0==t.participantTwoIsWinner&&t.gameStateCatetory==o.postGame?"loser":""}"
                                    >
                                        ${(t,e)=>h(t.participantTwoScore+"",e.parent.sportsMatchupCardData.dataType+"")}
                                    </div>
                                    <div class="sports-match-participant-winner-tag">
                                        ${(0,L.g)((t=>1==t.participantTwoIsWinner&&t.gameStateCatetory==o.postGame),c.d`
                                                <svg
                                                    width="5"
                                                    height="10"
                                                    viewBox="0 0 5 10"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M5 0L0 5.21739L5 10V0Z" />
                                                </svg>
                                            `)}
                                    </div>
                                `)}
                        </div>
                    </div>
                </div>
            </div>
            <div class="sports-match-details">
                ${(0,L.g)((t=>t.gameStateCatetory==o.preGame),c.d`
                        <div class="sports-match-detail-attributes pre-game">
                            <div class="sports-match-detail-attribute-game-date">
                                ${t=>t.gameDate}
                            </div>
                            <div class="sports-match-detail-attribute-game-time">
                                ${t=>t.gameStartTime}
                            </div>
                            <div class="sports-match-detail-attribute-game-tv-channel">
                                ${t=>t.tvChannel}
                            </div>
                        </div>
                    `)}
                ${(0,L.g)((t=>t.gameStateCatetory==o.inprogressGame),c.d`
                        <div class="sports-match-detail-attributes inprogress-game">
                            <div class="sports-match-detail-attribute-game-clock">
                                ${t=>t.gamePeriodAndClock}
                            </div>
                            <div class="sports-match-detail-attribute-game-tv-channel">
                                ${t=>t.tvChannel}
                            </div>
                        </div>
                    `)}
                ${(0,L.g)((t=>t.gameStateCatetory==o.postGame),c.d`
                        <div class="sports-match-detail-attributes post-game">
                            <div class="sports-match-detail-attribute-game-state">
                                ${t=>t.gameState}
                            </div>
                            <div class="sports-match-detail-attribute-game-date">
                                ${t=>t.gameDate}
                            </div>
                        </div>
                    `)}
            </div>
        </div>
    </a>
`,I=(t,e)=>c.d`
    <fluent-anchor
        class="sd-action"
        part="sd-action"
        href=${t=>{var e;return null===(e=t.sportsMatchupCardData)||void 0===e?void 0:e.seeMoreClickthroughUrl}}
        target=${t=>t.clickthroughTarget}
        data-t="${t=>t.seeMoreTelemetryTag}"
    >
        ${t=>{var e;return null===(e=t.sportsMatchupCardData)||void 0===e?void 0:e.seeMoreText}}
    </fluent-anchor>
`,O=u.compose({baseName:"sports-matchup-card",template:(t,e)=>c.d`
    <div class="sports-matchup-card">
        <div class="sports-matchup-card-header">
            ${T}
        </div>
        <div class="sports-matches">
            ${(0,D.rx)((t=>t.sportsMatchData),F)}
        </div>
        <div class="sports-matchup-card-footer">
            ${I}
        </div>
    </div>
`,styles:(t,e)=>f.i`
    ${y.U}
    :host {
        font-family: ${p.SVJ};
    }

    .sports-matchup-card {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 12px 0;
        height: 100%;
    }

    :host([background="dynamic"]) .sports-matchup-card {
        background: ${b.w_};
    }

    :host([background="gradient"]) .sports-matchup-card {
        background: ${b.Sf};
    }

    .sports-matchup-card-header {
        display: flex;
        flex-direction: row;
        min-height: 24px;
        padding: 0 16px;
    }

    ::slotted([slot="sports-header-icon"]) {
        padding-inline-end: 6px;
        margin-top: 6px;
    }

    .sports-matchup-card-header-title-link {
        color: ${p.CHi};
        display: flex;
        flex: 1;
        min-width: 0;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 0.7px;
        text-transform: uppercase;
        z-index: 2;
    }

    .sports-matchup-card-header-title {
        font-size: ${p.sNp};
        line-height: ${p.vgC};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-inline-end: 12px;
    }

    .sports-matchup-card-header-title-link:hover,
    .sports-matchup-card-header-title-link:active,
    .sports-matchup-card-header-title-link:${v.b} {
        text-decoration: underline;
        outline: none;
    }

    .sports-matchup-card-header-action-button {
        z-index: 2;
        display: flex;
        margin-top: -4px;
    }

    .sports-match-clickthrough-link {
        color: ${p.CHi};
        text-decoration: none;
        z-index: 2;
        overflow: hidden;
        margin: 0 6px;
    }

    .sports-match-clickthrough-link a::after {
        position: absolute;
        content: "";
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
    }

    .sports-match-clickthrough-link:hover,
    .sports-match-clickthrough-link:${v.b} {
        background: ${p.QpD};
        border-radius: calc(${p.UWU} * 2px);
        overflow: hidden;
    }

    .sports-matches {
        display: grid;
        row-gap: 14px;
        padding-top: 12px;
    }

    :host([uxstyle="widget"]):host([card-layout="1x_1y"]) .sports-matches {
        padding-top: 28px;
    }

    :host([uxstyle="widget"]):host([card-layout="1x_3y"]) .sports-matches {
        row-gap: 20px;
        padding-top: 14px;
    }

    .sports-match {
        align-items: center;
        display: flex;
        flex-direction: row;
        padding: 0 16px;
    }

    .sports-match-dual-participants {
        display: flex;
        flex-direction: column;
        padding: 2px 0;
        width: 204px;
        gap: 4px;
    }

    .sports-match-participant {
        align-items: center;
        display: flex;
        flex-direction: row;
        height: 28px;
    }

    .sports-match-participant-image {
        height: 28px;
        padding-inline-end: 8px;
        width: 28px;
    }

    .sports-match-participant-image img {
        width: 100%;
    }

    .sports-match-participant-name {
        flex: 1;
        font-size: ${p.cSu};
        line-height: ${p.RUt};
        overflow: hidden;
        padding-inline-end: 8px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .sports-match-score-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .sports-match-participant-score {
        font-size: ${p.cSu};
        line-height: ${p.RUt};
        overflow: hidden;
        padding-inline-end: 4px;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .sports-match-participant-name.winner,
    .sports-match-participant-score.winner,
    .sports-match-detail-attribute-game-time {
        font-weight: bold;
    }

    .long-score .sports-match-participant-name {
        font-size: ${p.sNp};
        line-height: ${p.vgC};
    }

    .long-score .sports-match-participant-score {
        font-size: ${p.sNp};
        line-height: ${p.vgC};
    }

    .long-score .sports-match-participant-name.winner,
    .long-score .sports-match-participant-score.winner {
        font-weight: 600;
    }

    .sports-match-participant-winner-tag {
        padding-inline-end: 4px;
        width: 5px;
        height: 24px;
    }

    .sports-match-participant-winner-tag > svg > path {
        fill: currentColor;
    }

    .sports-match-participant-name.loser,
    .sports-match-participant-score.loser {
        color: ${p.CHi};
    }

    .sports-match-details {
        font-size: ${p.sNp};
        width: 64px;
        color: ${p.CHi};
    }

    .sports-match-detail-attributes {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 0;
    }

    .sports-match-detail-attribute {
        flex: 1;
        min-width: 0;
    }

    .sports-match-detail-attribute-game-clock,
    .sports-match-detail-attribute-game-state,
    .sports-match-detail-attribute-game-date,
    .sports-match-detail-attribute-game-time,
    .sports-match-detail-attribute-game-tv-channel {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        color: ${p.CHi};
    }

    .inprogress-game .sports-match-detail-attribute-game-clock {
        color: #cc0000;
        font-weight: bold;
    }

    .sports-matchup-card-footer {
        display: flex;
        justify-content: center;
        padding: 0 16px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 8px;
    }

    .sports-matchup-card-footer-seemore-arrow > svg > path {
        fill: currentcolor;
    }

    ::slotted([slot="more-actions"]) {
        --control-corner-radius: 20;
        height: 24px;
        width: 24px;
        min-width: 24px;
        background: ${p.wFS};
    }

    ::slotted([slot="more-actions"])::part(control) {
        padding: 0;
    }

    ::slotted([slot="more-actions"]:hover) {
        background: ${p.XiB};
    }

    .sd-action {
        height: 24px;
    }

    .sd-action::part(control) {
        padding: 0 24px;
    }

    .sd-action::part(control)::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }

    :host([uxstyle="widget"]) .sd-action {
        background: transparent
    }
`.withBehaviors(new w.Y($,k),new g.O(x,C),(0,m.vF)(f.i`
                :host {
                    forced-color-adjust: auto;
                }
            `))})},16590:function(t,e,i){"use strict";i.d(e,{xb:function(){return v}});var n=i(33940),o=i(65620),r=i(87697),a=i(48839);class s extends a.I{constructor(){super(...arguments),this.pinned=!1}}(0,n.gn)([o.Lj],s.prototype,"target",void 0),(0,n.gn)([(0,o.Lj)({mode:"boolean"})],s.prototype,"pinned",void 0),(0,n.gn)([r.LO],s.prototype,"data",void 0),(0,n.gn)([r.LO],s.prototype,"headerTelemetryTag",void 0),(0,n.gn)([r.LO],s.prototype,"seeMoreTelemetryTag",void 0);var l=i(67020),c=i(56201),d=i(40082),u=i(53046),h=i(15933),p=i(26755);var g=i(39181),f=i(13988);const v=s.compose({baseName:"structured-data-card",template:(t,e)=>g.d`
    <div class="title" part="title">
        ${(0,f.g)((t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.titleContent}),g.d`
                <a
                    class="title-link"
                    part="title-link"
                    href="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.link}}"
                    target=${t=>t.target}
                    title="${t=>{var e,i,n;return null!==(i=null===(e=t.data)||void 0===e?void 0:e.titleContentHint)&&void 0!==i?i:null===(n=t.data)||void 0===n?void 0:n.titleContent}}"
                    data-t="${t=>t.headerTelemetryTag}"
                >
                    <slot name="title-icon"></slot>
                    <div class="title-content" part="title-content">
                        ${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.titleContent}}
                    </div>
                    <slot name="weather-pen-btn"></slot>
                    <slot name="weather-map-btn"></slot>
                </a>
            `)}
        <slot name="pin"></slot>
        <slot name="more-actions"></slot>
    </div>
    <slot></slot>
    <div class="footer" part="footer">
        <slot name="footer-start"></slot>
        ${(0,f.g)((t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.footerContent}),g.d`
                <fluent-anchor
                    class="sd-action"
                    part="sd-action"
                    appearance="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.actionAppearance}}"
                    href="${t=>{var e,i,n;return(null===(e=t.data)||void 0===e?void 0:e.footerLink)?null===(i=t.data)||void 0===i?void 0:i.footerLink:null===(n=t.data)||void 0===n?void 0:n.link}}"
                    target=${t=>t.target}
                    data-t="${t=>t.seeMoreTelemetryTag}"
                >
                    ${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.footerContent}}
                </fluent-anchor>
            `)}
        <slot name="footer-end"></slot>
    </div>
`,styles:(t,e)=>u.i`
    ${(0,l.j)("grid")}:host {
        position: relative;
        width: auto;
        height: 100%;
        box-sizing: border-box;
        font-family: ${p.SVJ};
        grid-template-rows: auto 1fr auto;
        padding: var(--content-padding, 16px 0);
        outline: none;
    }

    :host([pinned]) {
        /* with this change, we are remove top padding from the card to support the grab handle extending from the title */
        padding: var(--content-padding, 0 16px 16px 16px);
    }

    :host([pinned]) .title-link {
        cursor: pointer;
    }

    :host([pinned]) .title {
        cursor: var(--cursor-styles);
        /* with this, we are only adding top padding to the title to support the grab handle in Prong 2 and removing from the card */
        padding: var(--title-padding, 16px 0 0);
    }

    .footer {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        padding: var(--footer-padding, 0 16px);
    }

    .title {
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr auto auto;
        grid-gap: 8px;
        padding: var(--title-padding, 0 16px);
        overflow: visible;
        align-items: center;
    }

    .title-link {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 8px;
        color: ${p.CHi};
        font-size: ${p.sNp};
        justify-content: flex-start;
        line-height: ${p.vgC};
        outline: none;
        cursor: pointer;
        text-decoration: none;
        margin-inline-end: auto;
    }

    .title-link:hover,
    .title-link:active,
    .title-link:${c.b} {
        text-decoration: underline;
    }

    .title-content {
        font-size: ${p.sNp};
        line-height: ${p.vgC};
        margin-top: 4px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: var(--title-max-lines, 1);
    }

    ::slotted([slot="title-icon"]) {
        margin-top: 4px;
    }

    .sd-action {
        --control-corner-radius: 16;
        grid-column: 2;
        z-index: 1;
    }

    .sd-action:not([appearance="lightweight"]) {
        font-size: ${p.sNp};
        line-height: ${p.vgC};
    }

    .sd-action::part(control) {
        width: 100%;
        padding: var(--sd-action-padding, 0px 24px);
    }

    .sd-action::part(content) {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    ::slotted([slot="more-actions"]) {
        min-width: var(--more-actions-size, 24px);
        width: var(--more-actions-size, 24px);
        height: var(--more-actions-size, 24px);
        --control-corner-radius: var(--more-actions-corner-radius, 16);
        z-index: 1;
        grid-column: 3;
        background-color: transparent;
    }

    ::slotted([slot="more-actions"]:hover) {
        background-color: ${p.QpD};
     }
     
     ::slotted([slot="more-actions"]:active) {
        background-color: ${p.sG3};
     }

    ::slotted([slot="pin"]) {
        fill: ${p.CHi};
        margin-inline-end: 6px;
    }
`.withBehaviors((0,d.vF)(u.i`
                .title-link {
                    color: ${h.H.CanvasText};
                }
                a[href] {
                    color: ${h.H.LinkText};
                }
            `))})},95263:function(t,e,i){"use strict";i.d(e,{Sf:function(){return c},w_:function(){return l},A4:function(){return p}});var n=i(98648),o=i(42355),r=i(26755),a=i(65390);const{create:s}=n.L,l=s("gradient-white-fill").withDefault((t=>(0,a.Y)(.8,1,o.w.create(1,1,1),r.wFS.getValueFor(t)))),c=s("gradient-background-fill").withDefault((t=>(0,a.Y)(0,1,null,r.wFS.getValueFor(t)))),d=s("neutral-fill-bubble-on-rest").withDefault((t=>function(t,e){const i=t.closestIndexOf(e);return t.get(i-5)}(r.yvm.getValueFor(t),r.wFS.getValueFor(t))));s("neutral-foreground-hint-on-bubble-on-rest").withDefault((t=>r.axZ.getValueFor(t).evaluate(t,d.getValueFor(t))));function u(t,e,i){return t.get(t.closestIndexOf((n=e,o.w.create(n,n,n)))-i);var n}const h=s({name:"neutral-layer-card-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>u(r.yvm.getValueFor(t),r.q2d.getValueFor(t),r.YL4.getValueFor(t))}),p=s("neutral-layer-card").withDefault((t=>h.getValueFor(t).evaluate(t)))},13543:function(t,e,i){"use strict";i.d(e,{U:function(){return r},W:function(){return o}});var n=i(53046);const o=n.i`
    .line-clamp {
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(--heading-max-lines, 3);
    }
`,r=n.i`
    .sd-action:not([appearance="lightweight"]) {
        --control-corner-radius: 999;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
    }

    .sd-action::part(control) {
        width: 100%;
    }

    .sd-action::part(content) {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`},65390:function(t,e,i){"use strict";i.d(e,{Y:function(){return r}});var n=i(11162),o=i(2696);function r(t=0,e=1,i,r){const a=r.toColorString(),{r:s,g:l,b:c}=(0,n.in)(a),d=`linear-gradient(160deg, ${new o.h(s,l,c,t).toStringWebRGBA()}, ${new o.h(s,l,c,e).toStringWebRGBA()})`;if(i){return[d,null==i?void 0:i.toColorString()].join()}return d}},16859:function(t,e,i){"use strict";i.d(e,{Y:function(){return l}});var n=i(26755),o=i(78125),r=i(11162),a=i(60279);const s=(0,i(9791).Z)((t=>{let e=(0,r.in)(t);if(null!==e)return e;if(e=(0,r.hg)(t),null!==e)return e;throw new Error(`${t} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`)}));class l{constructor(t,e){this.cache=new WeakMap,this.light=t,this.dark=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&n.IfY.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new c(this.light,this.dark,t),i=n.IfY.getValueFor(t);n.IfY.subscribe(e,t),e.attach(i),this.cache.set(t,e)}}class c{constructor(t,e,i){this.light=t,this.dark=e,this.source=i,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(t))}attach(t){if(window.matchMedia("(forced-colors: active)").matches)return;const e=(i=t.toColorString(),(0,a.hM)(s(i))<=o.h.DarkMode?"dark":"light");var i;this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}},30224:function(t,e,i){"use strict";i.d(e,{To:function(){return gt}});var n=i(39181),o=i(13988),r=i(18864),a=i(88516),s=i(38637),l=i(77234);const c=n.d`
    <svg
        width="7"
        height="10"
        viewBox="0 0 7 10"
        class="weather-current-precipitation-glyph"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.97 5.7c.19.36.28.76.28 1.17a3.06 3.06 0 01-.92 2.21 3.11 3.11 0 01-4.9-.63A3.17 3.17 0 010 6.87c0-.4.1-.8.27-1.17L3.1 0l2.87 5.7z"
        />
    </svg>
`,d=n.d`
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        class="weather-current-airquality-glyph"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.8125 5.99414C9.29688 5.99414 9.74805 5.93359 10.166 5.8125C10.5879 5.6875 11.0137 5.51562 11.4434 5.29688C11.5059 5.26562 11.5664 5.25 11.625 5.25C11.7266 5.25 11.8145 5.28711 11.8887 5.36133C11.9629 5.43555 12 5.52344 12 5.625C12 5.76562 11.9355 5.875 11.8066 5.95312C11.7363 5.99609 11.6602 6.03711 11.5781 6.07617C11.5 6.11523 11.4219 6.15234 11.3438 6.1875C10.9414 6.37109 10.5273 6.51172 10.1016 6.60938C9.67969 6.70312 9.25 6.75 8.8125 6.75C8.27344 6.75 7.75781 6.68164 7.26562 6.54492C6.77344 6.4082 6.29102 6.21094 5.81836 5.95312C5.72852 5.90234 5.63477 5.85547 5.53711 5.8125C5.44336 5.76562 5.34766 5.72266 5.25 5.68359V4.88086C5.41406 4.93945 5.57227 5.00391 5.72461 5.07422C5.88086 5.14062 6.0332 5.21484 6.18164 5.29688C6.5957 5.51953 7.01953 5.69141 7.45312 5.8125C7.88672 5.93359 8.33984 5.99414 8.8125 5.99414ZM8.8125 8.24414C9.29688 8.24414 9.74805 8.18359 10.166 8.0625C10.5879 7.9375 11.0137 7.76562 11.4434 7.54688C11.5059 7.51562 11.5664 7.5 11.625 7.5C11.7266 7.5 11.8145 7.53711 11.8887 7.61133C11.9629 7.68555 12 7.77344 12 7.875C12 8.01562 11.9355 8.125 11.8066 8.20312C11.6113 8.32812 11.4004 8.43555 11.1738 8.52539C10.9473 8.61133 10.7227 8.6875 10.5 8.75391V10.5C10.5 10.6055 10.4805 10.7031 10.4414 10.793C10.4023 10.8828 10.3477 10.9629 10.2773 11.0332C10.2109 11.0996 10.1328 11.1523 10.043 11.1914C9.95312 11.2305 9.85547 11.25 9.75 11.25H4.5C4.39453 11.25 4.29688 11.2305 4.20703 11.1914C4.11719 11.1523 4.03711 11.0996 3.9668 11.0332C3.90039 10.9629 3.84766 10.8828 3.80859 10.793C3.76953 10.7031 3.75 10.6055 3.75 10.5V7.53516C3.65625 7.52734 3.5625 7.52148 3.46875 7.51758C3.375 7.50977 3.2832 7.50586 3.19336 7.50586C2.95117 7.50586 2.7168 7.52148 2.49023 7.55273C2.26758 7.58398 2.04688 7.63086 1.82812 7.69336C1.61328 7.75195 1.40039 7.82422 1.18945 7.91016C0.982422 7.99609 0.771484 8.09375 0.556641 8.20312C0.494141 8.23438 0.433594 8.25 0.375 8.25C0.273438 8.25 0.185547 8.21289 0.111328 8.13867C0.0371094 8.06445 0 7.97656 0 7.875C0 7.73438 0.0644531 7.625 0.193359 7.54688C0.404297 7.41797 0.630859 7.30469 0.873047 7.20703C1.11523 7.10938 1.36523 7.02734 1.62305 6.96094C1.88086 6.89453 2.13867 6.8457 2.39648 6.81445C2.6582 6.7793 2.91016 6.76172 3.15234 6.76172C3.25391 6.76172 3.35352 6.76562 3.45117 6.77344C3.54883 6.77734 3.64844 6.7832 3.75 6.79102V5.28516C3.65625 5.27734 3.5625 5.27148 3.46875 5.26758C3.375 5.25977 3.2832 5.25586 3.19336 5.25586C2.95117 5.25586 2.7168 5.27148 2.49023 5.30273C2.26758 5.33398 2.04688 5.38086 1.82812 5.44336C1.61328 5.50195 1.40039 5.57422 1.18945 5.66016C0.982422 5.74609 0.771484 5.84375 0.556641 5.95312C0.494141 5.98438 0.433594 6 0.375 6C0.273438 6 0.185547 5.96289 0.111328 5.88867C0.0371094 5.81445 0 5.72656 0 5.625C0 5.48438 0.0644531 5.375 0.193359 5.29688C0.404297 5.16797 0.630859 5.05469 0.873047 4.95703C1.11523 4.85938 1.36523 4.77734 1.62305 4.71094C1.88086 4.64453 2.13867 4.5957 2.39648 4.56445C2.6582 4.5293 2.91016 4.51172 3.15234 4.51172C3.25391 4.51172 3.35352 4.51562 3.45117 4.52344C3.54883 4.52734 3.64844 4.5332 3.75 4.54102V3.03516C3.65625 3.02734 3.5625 3.02148 3.46875 3.01758C3.375 3.00977 3.2832 3.00586 3.19336 3.00586C2.95117 3.00586 2.7168 3.02148 2.49023 3.05273C2.26758 3.08398 2.04688 3.13086 1.82812 3.19336C1.61328 3.25195 1.40039 3.32422 1.18945 3.41016C0.982422 3.49609 0.771484 3.59375 0.556641 3.70312C0.494141 3.73437 0.433594 3.75 0.375 3.75C0.273438 3.75 0.185547 3.71289 0.111328 3.63867C0.0371094 3.56445 0 3.47656 0 3.375C0 3.23438 0.0644531 3.125 0.193359 3.04688C0.404297 2.91797 0.630859 2.80469 0.873047 2.70703C1.11523 2.60937 1.36523 2.52734 1.62305 2.46094C1.88086 2.39453 2.13867 2.3457 2.39648 2.31445C2.6582 2.2793 2.91016 2.26172 3.15234 2.26172C3.25391 2.26172 3.35352 2.26563 3.45117 2.27344C3.54883 2.27734 3.64844 2.2832 3.75 2.29102V1.5C3.75 1.39453 3.76953 1.29687 3.80859 1.20703C3.84766 1.11719 3.90039 1.03906 3.9668 0.972656C4.03711 0.902344 4.11719 0.847656 4.20703 0.808594C4.29688 0.769531 4.39453 0.75 4.5 0.75H9.75C9.85547 0.75 9.95312 0.769531 10.043 0.808594C10.1328 0.847656 10.2109 0.902344 10.2773 0.972656C10.3477 1.03906 10.4023 1.11719 10.4414 1.20703C10.4805 1.29687 10.5 1.39453 10.5 1.5V3.46289C10.668 3.4082 10.8281 3.3457 10.9805 3.27539C11.1328 3.20117 11.2871 3.125 11.4434 3.04688C11.4746 3.03125 11.5039 3.01953 11.5312 3.01172C11.5586 3.00391 11.5898 3 11.625 3C11.7266 3 11.8145 3.03711 11.8887 3.11133C11.9629 3.18555 12 3.27344 12 3.375C12 3.51562 11.9355 3.625 11.8066 3.70312C11.5957 3.83203 11.3672 3.94727 11.1211 4.04883C10.875 4.14648 10.6211 4.23047 10.3594 4.30078C10.1016 4.36719 9.83984 4.41797 9.57422 4.45312C9.3125 4.48438 9.05859 4.5 8.8125 4.5C8.27344 4.5 7.75781 4.43164 7.26562 4.29492C6.77344 4.1582 6.29102 3.96094 5.81836 3.70312C5.72852 3.65234 5.63477 3.60547 5.53711 3.5625C5.44336 3.51562 5.34766 3.47266 5.25 3.43359V2.63086C5.41406 2.68945 5.57227 2.75391 5.72461 2.82422C5.88086 2.89062 6.0332 2.96484 6.18164 3.04688C6.5957 3.26953 7.01953 3.44141 7.45312 3.5625C7.89062 3.68359 8.3457 3.74414 8.81836 3.74414C8.97461 3.74414 9.13086 3.73828 9.28711 3.72656C9.44336 3.71094 9.59766 3.68945 9.75 3.66211V1.5H4.5V10.5H9.75V8.92969C9.4375 8.97656 9.125 9 8.8125 9C8.27344 9 7.75781 8.93164 7.26562 8.79492C6.77344 8.6582 6.29102 8.46094 5.81836 8.20312C5.72852 8.15234 5.63477 8.10547 5.53711 8.0625C5.44336 8.01562 5.34766 7.97266 5.25 7.93359V7.13086C5.41406 7.18945 5.57227 7.25391 5.72461 7.32422C5.88086 7.39062 6.0332 7.46484 6.18164 7.54688C6.5957 7.76953 7.01953 7.94141 7.45312 8.0625C7.88672 8.18359 8.33984 8.24414 8.8125 8.24414Z"
        />
    </svg>
`,u=n.d`
    <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        class="weather-home-glyph"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.6013 0.43316C5.25918 0.125798 4.74041 0.125792 4.39831 0.43316L1.0983 3.39808C0.908321 3.56878 0.799805 3.81216 0.799805 4.06756V8.30004C0.799805 8.79708 1.20275 9.20004 1.6998 9.20004H2.8998C3.39686 9.20004 3.7998 8.79708 3.7998 8.30004V5.90004C3.7998 5.73438 3.93412 5.60004 4.0998 5.60004H5.89981C6.06546 5.60004 6.1998 5.73438 6.1998 5.90004V8.30004C6.1998 8.79708 6.60277 9.20004 7.0998 9.20004H8.29981C8.79684 9.20004 9.19981 8.79708 9.19981 8.30004V4.06756C9.19981 3.81216 9.09127 3.56878 8.90131 3.39808L5.6013 0.43316Z"
        />
    </svg>
`,h=n.d`
    <svg
        width="10"
        height="10"
        viewBox="0 0 12 12"
        class="weather-detect-glyph"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6 0C6.3077 0 6.5613 0.231624 6.59596 0.530027L6.6 0.6L6.60021 1.38838C8.68853 1.6575 10.3428 3.31199 10.6117 5.4004L11.4 5.4C11.7314 5.4 12 5.66863 12 6C12 6.3077 11.7684 6.5613 11.47 6.59596L11.4 6.6L10.6116 6.60021C10.3425 8.68832 8.68832 10.3425 6.60021 10.6116L6.6 11.4C6.6 11.7314 6.33137 12 6 12C5.6923 12 5.4387 11.7684 5.40404 11.47L5.4 11.4L5.4004 10.6117C3.31199 10.3428 1.6575 8.68853 1.38838 6.60021L0.6 6.6C0.268629 6.6 0 6.33137 0 6C0 5.6923 0.231624 5.4387 0.530027 5.40404L0.6 5.4L1.3883 5.4004C1.65718 3.31179 3.31179 1.65718 5.4004 1.3883L5.4 0.6C5.4 0.268629 5.66863 0 6 0ZM6 2.55C4.09462 2.55 2.55 4.09462 2.55 6C2.55 7.90538 4.09462 9.45 6 9.45C7.90538 9.45 9.45 7.90538 9.45 6C9.45 4.09462 7.90538 2.55 6 2.55ZM6 3.6C7.32548 3.6 8.4 4.67452 8.4 6C8.4 7.32548 7.32548 8.4 6 8.4C4.67452 8.4 3.6 7.32548 3.6 6C3.6 4.67452 4.67452 3.6 6 3.6Z"
        />
    </svg>
`,p=n.d`
    <svg 
        width="7" 
        height="12"
        viewBox="0 0 7 12"
        class="weather-arrow-glyph">
            <path d="M0.528512 0.861886C0.268165 1.12224 0.268165 1.54435 0.528512 1.8047L4.72379 5.99996L0.528512 10.1952C0.268165 10.4556 0.268165 10.8777 0.528512 11.138C0.788865 11.3984 1.21097 11.3984 1.47133 11.138L6.13799 6.47136C6.39832 6.21103 6.39832 5.78889 6.13799 5.52856L1.47133 0.861886C1.21097 0.601539 0.788865 0.601539 0.528512 0.861886Z">
            </>
    </svg>
`,g=n.d`
    <fluent-anchor
        class="weather-feedback"
        part="weather-feedback"
        href="${t=>t.weatherData.feedbackLink}"
        aria-label="${t=>t.weatherData.feedbackTooltip}"
        title="${t=>t.weatherData.feedbackTooltip}"
        target=${t=>t.target}
        data-t="${t=>t.feedbackTelemetryTag}"
    >
        <span
            class="weather-feedback-icon"
            part="weather-feedback-icon"
            tabIndex="-1"
            role="presentation"
            aria-hidden="true"
        >
            <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.40039 2.7998V10.1369H8.3489L10.8594 11.808V10.1369H12.6004V2.7998H1.40039ZM2.88492 4.40869H9.49144V5.27142H2.88492V4.40869ZM2.88492 6.42173H7.19859V7.28447H2.88492V6.42173Z"
                />
            </svg>
        </span>
    </fluent-anchor>
`,f=n.d`
    <div class="weather-brand-icon" part="weather-brand-icon">
        <slot name="weather-brand-icon"></slot>
    </div>
`,v=n.d`
    <div class="weather-pen-btn" part="weather-pen-btn">
        <slot name="weather-pen-btn"></slot>
    </div>
`,m=n.d`
    <div class="weather-map-btn" part="weather-map-btn">
        <slot name="weather-map-btn"></slot>
    </div>
`,b=n.d`
    ${(0,o.g)((t=>t.showBrandIcon),f)}
    <a
        class="weather-header"
        part="weather-header"
        href="${t=>t.weatherData.link}"
        target=${t=>t.target}
        title="${t=>t.weatherData.locationName}"
        data-t="${t=>t.headerTelemetryTag||t.locationTelemetryTag}"
    >
        ${t=>t.weatherData.locationName}
    </a>
    ${v} ${(0,o.g)((t=>t.wceV2),m)}
`,y=n.d`
    <a
        class="weather-header"
        part="weather-header"
        href="${t=>t.weatherData.link}"
        target=${t=>t.target}
        title="${t=>t.weatherData.titleContent}"
        data-t="${t=>t.headerTelemetryTag||t.locationTelemetryTag}"
    >
        <span class="weather-header-cont">${t=>t.weatherData.titleContent}</span>
    </a>
`,w=n.d`
    <div class="weather-locationwithedit-light">
        <a
            class="weather-location"
            part="weather-location"
            href="${t=>t.weatherData.link}"
            target=${t=>t.target}
            title="${t=>t.weatherData.locationName}"
            data-t="${t=>t.locationTelemetryTag}"
        >
            ${t=>t.weatherData.locationMode==s.EM.SpecifyLoc?u:h}
            ${t=>t.weatherData.locationName}
        </a>
        ${v}
    </div>
`,x=n.d`
    ${(0,o.g)((t=>!t.wceV2),n.d` <div class="weather-title" part="weather-title">
                ${(0,o.g)((t=>"light"!=t.background),b)}
                ${(0,o.g)((t=>"light"==t.background),y)}
                <div class="more-actions" part="more-actions">
                    <slot name="more-actions"></slot>
                </div>
            </div>
            ${(0,o.g)((t=>"light"==t.background),w)}`)}
    ${(0,o.g)((t=>t.wceV2),n.d`
            <div class="weather-title" part="weather-title">
                ${b}
                <div class="more-actions" part="more-actions">
                    <slot name="more-actions"></slot>
                </div>
            </div>
        `)}
`,C=n.d`
    ${(0,o.g)((t=>t.weatherData.precipitation),n.d`
            <li
                class="weather-current-container-item"
                part="weather-current-container-item"
                title="${t=>(t.weatherData.precipitationLabel?t.weatherData.precipitationLabel+" ":"")+t.weatherData.precipitation}"
                aria-label="${t=>(t.weatherData.precipitationLabel?t.weatherData.precipitationLabel+" ":"")+t.weatherData.precipitation}"
            >
                ${c}
                <span
                    class="weather-current-container-item-text"
                    part="weather-current-container-item-text"
                >
                    ${t=>t.weatherData.precipitation}
                </span>
            </li>
        `)}
    ${(0,o.g)((t=>t.weatherData.aqi),n.d` <li
            class="weather-current-container-item"
            part="weather-current-container-item"
        >
        <a
           class="weather-current-container-item"
           part="weather-current-container-item"
           href="${t=>t.weatherData.link}"
           target=${t=>t.target}
           title="${t=>(t.weatherData.aqiLabel?t.weatherData.aqiLabel+" ":"")+t.weatherData.aqi}"
           aria-label="${t=>(t.weatherData.aqiLabel?t.weatherData.aqiLabel+" ":"")+t.weatherData.aqi}"
           data-t="${t=>t.weatherAqiTelemetryTag}"
        >
            ${d}
            <span
                class="weather-current-container-item-text"
                part="weather-current-container-item-text"
            >
                ${t=>t.weatherData.aqi}
            </span>
        </li>`)}
`,$=n.d`
    <div class="weather-current-info" part="weather-current-info">
        ${(0,o.g)((t=>t.weatherData.weatherSummary),n.d`
                <span
                    class="weather-current-summary"
                    part="weather-current-summary"
                    title="${t=>t.weatherData.weatherSummary}"
                >
                    ${t=>t.weatherData.weatherSummary}
                </span>
            `)}
        ${(0,o.g)((t=>!t.weatherData.weatherSummary),n.d`
                <span
                    class="weather-current-skycode"
                    part="weather-current-skycode"
                    title="${t=>t.weatherData.skycode}"
                >
                    ${t=>t.weatherData.skycode}
                </span>
            `)}
        ${(0,o.g)((t=>(t.weatherData.precipitation||t.weatherData.aqi)&&(!t.weatherData.weatherSummary||t.weatherData.weatherSummary.length<=15)),n.d`
                <div>
                    <ul
                        class="weather-current-container"
                        part="weather-current-container"
                    >
                        ${C}
                    </ul>
                </div>
            `)}
    </div>
`,k=n.d`
    ${(0,o.g)((t=>t.weatherData.nowcast&&t.weatherData.nowcast.precipitationType!=a.H.NoRain),n.d`<div class="weather-nowcast" part="weather-nowcast">
            <span>${c} ${t=>{var e;return null===(e=t.weatherData.nowcast)||void 0===e?void 0:e.summary}}</span>
        </div>`)}
`,L=n.d`
    <div
        class="weather-alert"
        part="weather-alert"
        title="${t=>t.weatherData.alertTitle}"
    >
        <div class="weather-alert-info" part="weather-alert-info">
            <div class="weather-alert-icon" part="weather-alert-icon">
                ${t=>t.weatherData.alertIcon}
            </div>
            <span class="weather-alert-item1">${t=>t.weatherData.alertEvent}</span>
        </div>
        <div class="weather-alert-sig" part="weather-alert-sig">
            <span class="weather-alert-item2">
                ${t=>t.weatherData.alertSig}
            </span>
        </div>
    </div>
`,D=n.d`
    ${(0,o.g)((t=>{var e,i;return null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.showArrow}),n.d` <a
            class="weather-alert-arrow"
            part="weather-alert-arrow"
            href="${t=>{var e,i,n,o;return(null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.summaryLink)||(null===(o=null===(n=t.weatherData)||void 0===n?void 0:n.backgroundData)||void 0===o?void 0:o.link)||t.weatherData.link}}"
            data-t="${t=>t.summaryTelemetryTag}"
        >
            ${p}
        </a>`)}
`,S=n.d`
    <div class="summary-oneline" part="summary-oneline">
        <a
            class="summary-oneline-info"
            part="summary-oneline-info"
            title="${t=>{var e,i,n,o;return(null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.summaryHint)||(null===(o=null===(n=t.weatherData)||void 0===n?void 0:n.summaryData)||void 0===o?void 0:o.summaryLine1)||""}}"
            href="${t=>{var e,i,n,o;return(null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.summaryLink)||(null===(o=null===(n=t.weatherData)||void 0===n?void 0:n.backgroundData)||void 0===o?void 0:o.link)||t.weatherData.link}}"
            style="${t=>{var e,i;return(null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.showUnderline)?"text-decoration: underline;":""}}"
            data-t="${t=>t.summaryTelemetryTag}"
        >
            ${(0,o.g)((t=>{var e,i;return null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.summaryIcon}),n.d`${t=>{var e;return null===(e=t.weatherData.summaryData)||void 0===e?void 0:e.summaryIcon}}`)}
            ${t=>{var e,i;return null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.summaryLine1}}
        </a>
    </div>
    ${D}
`,T=n.d`
    <a
        class="summary-twoline"
        part="summary-twoline"
        title="${t=>{var e,i;return(null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.summaryHint)||""}}"
        href="${t=>{var e,i,n,o;return(null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.summaryLink)||(null===(o=null===(n=t.weatherData)||void 0===n?void 0:n.backgroundData)||void 0===o?void 0:o.link)||t.weatherData.link}}"
        style="${t=>{var e,i;return(null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.showUnderline)?"text-decoration: underline;":""}}"
        data-t="${t=>t.summaryTelemetryTag}"
    >
        <div class="summary-twoline-info" part="summary-twoline-info">
            ${(0,o.g)((t=>{var e,i;return null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.summaryIcon}),n.d` <div
                    class="summary-twoline-icon"
                    part="summary-twoline-icon"
                >
                    ${t=>{var e;return null===(e=t.weatherData.summaryData)||void 0===e?void 0:e.summaryIcon}}
                </div>`)}
            <span class="summary-twoline-item1"
                >${t=>{var e;return null===(e=t.weatherData.summaryData)||void 0===e?void 0:e.summaryLine1}}</span
            >
        </div>
        <div class="summary-twoline-sig" part="summary-twoline-sig">
            <span class="summary-twoline-item2">
                ${t=>{var e;return null===(e=t.weatherData.summaryData)||void 0===e?void 0:e.summaryLine2}}
            </span>
        </div>
    </a>
    ${D}
`,F=n.d`
    ${(0,o.g)((t=>{var e,i,n,o;return(null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.summaryLine1)&&!(null===(o=null===(n=t.weatherData)||void 0===n?void 0:n.summaryData)||void 0===o?void 0:o.summaryLine2)}),S)}
    ${(0,o.g)((t=>{var e,i,n,o;return(null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.summaryData)||void 0===i?void 0:i.summaryLine1)&&(null===(o=null===(n=t.weatherData)||void 0===n?void 0:n.summaryData)||void 0===o?void 0:o.summaryLine2)}),T)}
`,I=n.d`
    <div class="weather-footer" part="weather-footer">
        <fluent-anchor
            class="sd-action"
            part="sd-action"
            href="${t=>t.weatherData.link}"
            target=${t=>t.target}
            data-t="${t=>t.seeForecastTelemetryTag}"
        >
            ${t=>t.weatherData.footerContent} ${(0,o.g)((t=>t.wceV2),p)}
        </fluent-anchor>
    </div>
    <a
        class="weather-fullcardcover"
        part="weather-fullcardcover"
        href="${t=>{var e,i;return(null===(i=null===(e=t.weatherData)||void 0===e?void 0:e.backgroundData)||void 0===i?void 0:i.link)||t.weatherData.link}}"
        target=${t=>t.target}
        data-t="${t=>t.blankAreaTelemetryTag||t.seeForecastTelemetryTag}"
    >
    </a>
`,O=n.d`
    <li>
        <fluent-anchor
            class="weather-forecast-item ${(t,e)=>4===e.parent.weatherData.forecastData.length?"weather-forecast-item-4col":"weather-forecast-item-5col"} ${(t,e)=>e.parent.weatherData.dataProvider?"weather-forecast-item-pro":"weather-forecast-item-npro"}"
            part="${(t,e)=>4===e.parent.weatherData.forecastData.length?"weather-forecast-item-4col":"weather-forecast-item-5col"}"
            href="${t=>t.forecastLink}"
            target=${(t,e)=>e.parent.target}
            @focus="${(t,e)=>e.parent.focusOnForecastHandler()}"
            data-t="${(t,e)=>e.parent.forecastDayTelemetryTags&&e.parent.forecastDayTelemetryTags[e.index]||e.parent.forecastDayTelemetryTag}"
        >
            <div
                class="weather-forecast-day"
                part="weather-forecast-day"
                aria-label=${t=>t.dayOfWeekName||t.dayOfWeek}
            >
                ${t=>t.dayOfWeek}
            </div>
            ${t=>t.skycodeIcon}
            <div class="weather-forecast-temp" part="weather-forecast-temp">
                <div
                    class="weather-forecast-high"
                    part="weather-forecast-high"
                    aria-label="${t=>(t.highTempLabel?t.highTempLabel+" ":"")+t.highTemperature+"°"}"
                >
                    ${t=>t.highTemperature}°
                </div>
                <div
                    class="weather-forecast-low"
                    part="weather-forecast-low"
                    aria-label="${t=>(t.lowTempLabel?t.lowTempLabel+" ":"")+t.lowTemperature+"°"}"
                >
                    ${t=>t.lowTemperature}°
                </div>
            </div>
        </fluent-anchor>
    </li>
`,H=n.d`
    <div
        class="weather-forecast-container"
        @mouseover="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
        @mouseout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
    >
        <div class="weather-forecast-update-time">
            ${(0,o.g)((t=>t.weatherData.showUpdateTime&&t.weatherData.updateTime),n.d` ${t=>t.weatherData.updateTime} `)}
        </div>
        <ul class="weather-forecast" part="weather-forecast">
            ${(0,r.rx)((t=>t.weatherData.forecastData),O,{positioning:!0})}
        </ul>
        ${(0,o.g)((t=>t.weatherData.dataProvider),n.d`
                <div class="weather-footer-provider" part="weather-footer-provider">
                    ${t=>t.weatherData.dataProvider}
                </div>
            `)}
    </div>
`,R=n.d`
    <fluent-anchor
        class="weekend-anchor"
        href="${t=>t.weatherData.goodWeatherRecommendationTips}"
        target="${t=>t.target}"
        data-t="${t=>t.goodWeatherWeekendTelemetryTag}"
    >
        <div class="weekend-container">
            <div class="weekend-text">
                <div class="weekend-weather">
                    ${t=>t.weatherData.goodWeatherWeekend}
                </div>
                <div>
                    ${t=>t.weatherData.goodWeatherRecommendationTips}
                </div>
            </div>
            <div class="weekend-image">
                <img src=${t=>t.weatherData.goodWeatherWeekendImage} />
            </div>
        </div>
    </fluent-anchor>
`,M=t=>n.d`
    ${(0,o.g)((t=>!!t.weatherData.forecastData&&t.weatherData.forecastData.length),H)}
`,P=t=>n.d`
    ${(0,o.g)((t=>t.showMiniMapByData),n.d`<msft-weather-minimap
        :minimapData="${t=>Object.assign({minimapButtons:t.weatherData.minimapButtons,minimapTooltip:t.weatherData.minimapTooltip,staticMapLink:t.weatherData.staticMapLink,weatherMinimapLink:t.weatherData.weatherMinimapLink},t.weatherData.minimap)}"
        minimapTelemetryTag="${t=>t.minimapTelemetryTag}"
        defaultMapPageUrl="${t=>t.weatherData.defaultMapPageUrl}"
        target="${t=>t.target}"
        style="width:100%; height:100%; position:absolute"
        @focusmap=${t=>t.focusOnMinimapHandler()}
        @mouseover="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
        @mouseout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
    ></msft-weather-minimap>`)}
    ${(0,o.g)((t=>t.weatherData.nowcast&&!t.showMiniMapByData),n.d`<msft-weather-nowcast
        :nowcastData="${t=>t.weatherData.nowcast}"
        telemetryTag="${t=>t.nowcastTelemetryTags}"
        href="${t=>t.weatherData.link}"
        target="${t=>t.target}"
        class="nowcast"
        background="${t=>t.background}"
    ></msft-weather-nowcast>`)}
`,A=(t,e)=>n.d`
    ${(0,o.g)((t=>!t.primaryCarousel),n.d`
    <div
        class="weather-forecast-map-rotation-container weather-forecast-region-container ${t=>t.getRotationStyle()}"
    >
        ${M()} ${P()}
    </div>
`)}
    ${(0,o.g)((t=>t.primaryCarousel),n.d`
    <div class="weather-forecast-region-container">
        ${(0,o.g)((t=>"dailyforecast"===t.primaryCarousel),H)}
        ${(0,o.g)((t=>"goodweatherweekend"===t.primaryCarousel),R)}
        ${(0,o.g)((t=>t.showMiniMap||"severeweather"===t.primaryCarousel||"normalmap"===t.primaryCarousel||"hurricane"===t.primaryCarousel),n.d`<msft-weather-minimap
            :minimapData="${t=>Object.assign({minimapButtons:t.weatherData.minimapButtons,minimapTooltip:t.weatherData.minimapTooltip,staticMapLink:t.weatherData.staticMapLink,staticForegroundMapLink:t.weatherData.staticForegroundMapLink,weatherMinimapLink:t.weatherData.weatherMinimapLink},t.weatherData.minimap)}"
            minimapTelemetryTag="${t=>t.minimapTelemetryTag}"
            defaultMapPageUrl="${t=>t.weatherData.defaultMapPageUrl}"
            target="${t=>t.target}"
            style="width:100%; height:100%; position:absolute"
            @focusmap=${t=>t.focusOnMinimapHandler()}
            @mouseover="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
            @mouseout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
        ></msft-weather-minimap>`)}
        ${(0,o.g)((t=>!t.showMiniMap&&("nowcast"===t.primaryCarousel||"nowcastalert"===t.primaryCarousel)),n.d`<msft-weather-nowcast
            :nowcastData="${t=>t.weatherData.nowcast}"
            telemetryTag="${t=>t.nowcastTelemetryTags}"
            href="${t=>t.weatherData.link}"
            target="${t=>t.target}"
            class="nowcast"
            background="${t=>t.background}"
        ></<msft-weather-nowcast>`)}
    </div>
`)}
`;var E=i(40082),B=i(53046),V=i(15933),z=i(26755),N=i(22674),j=i(67020),_=i(56201),U=i(95263),q=i(16859),W=i(13543);const Z=B.i`
    .weather-current-container {
        float: right;
    }
    .weather-map-btn {
        margin: 4px 8px 0px 0px;
    }
    .weather-alert-arrow {
        margin-left: 6px;
    }
    .weather-brand-icon {
        margin: 4px 13px 0px -4px;
    }
`,G=B.i`
    .weather-current-container {
        float: left;
    }
    .weather-map-btn {
        margin: 4px 0px 0px 8px;
    }
    .weather-alert-arrow {
        margin-right: 6px;
    }
    .weather-brand-icon {
        margin: 4px -4px 0px 13px;
    }
`,Q=B.i`
    :host {
        --weather-card-forecast-background: rgba(255, 255, 255, 0.5);
        --weather-card-forecast-hover-background: rgba(255, 255, 255, 0.8);
        --weather-card-cta-background: rgba(0, 0, 0, 0.05);
        --weather-card-cta-hover-background: rgba(0, 0, 0, 0.11);
    }
`,K=B.i`
    :host {
        --weather-card-forecast-background: rgba(255, 255, 255, 0.03);
        --weather-card-forecast-hover-background: rgba(255, 255, 255, 0.08);
        --weather-card-cta-background: rgba(255, 255, 255, 0.09);
        --weather-card-cta-hover-background: rgba(255, 255, 255, 0.15);
    }
`,X=(t,e)=>B.i`
    ${W.U}
    ${(0,j.j)("flex")}
    
    :host {
        position: relative;
        width: auto;
        height: 100%;
        box-sizing: border-box;
        font-family: ${z.SVJ};
        flex-direction: column;
        outline: none;
    }

    .weather-container {
        overflow: hidden;
        padding: 12px 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: calc(${z.UWU} * 1px);
        height: 100%;
        z-index: 0;
    }
    
    :host([place="carousel"])
    .weather-container {
        padding: 12px 16px 20px 16px;
    }

    :host([background="dynamic"])
    .weather-container {
        background: ${U.w_};
    }

    :host([background="light"])
    .weather-container {
        background: ${U.Sf};
    }

    .weather-title {
        display: flex;
    }

    .weather-header {
        font-size: ${z.sNp};
        line-height: ${z.vgC};
        margin-top: 4px;
        color: var(--textStyle);
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.7px;
        outline: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 240px;
        z-index: 2;
    }

    :host([wceV2]) .weather-header {
        font-weight: 600;
    }

    .weather-header:hover,
    .weather-header:active,
    .weather-header:${_.b} {
        text-decoration: underline;
    }

    .weather-header-cont {
        margin-top: 0px;
        margin-inline-start: 2px;
        font-weight: 600;
    }

    .weather-locationwithedit-light {
        margin: 0 auto;
        display: inline-flex;
        align-items: center;
        height: 20px;
    }

    .weather-location {
        font-size: ${z.sNp};
        line-height: ${z.vgC};
        font-weight: 500;
        color: var(--textStyle);
        text-align: center;
        letter-spacing: 0.12px;
        text-decoration: none;
        outline: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        z-index: 3;
        display: block;
        max-width: 230px;
    }

    .weather-location:hover,
    .weather-location:active,
    .weather-location:${_.b} {
        text-decoration: underline;
    }

    .weather-home-glyph,
    .weather-detect-glyph {
        fill: currentcolor;
        margin-inline-end: 3px;
    }

    .weather-arrow-glyph {
        height: 12px;
        width: auto;
        position: relative;
        top: 1px;
    }

    .more-actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-inline-start: auto;
        margin-inline-end: 0px;
        z-index: 2;
    }

    .weather-brand-icon, .weather-pen-btn, .weather-map-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        z-index: 2;
    }

    .weather-pen-btn {
        margin: 4px 4px 0px;
    }

    :host([background="light"]) .weather-pen-btn {
        margin: 0px 4px;
    }

    :host([wceV2]) .weather-pen-btn {
        margin: 4px 4px 0px;
    }

    .weather-current {
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    :host([layout="half"]) .weather-current {
        margin: 5px 0;
    }

    :host([layout="full"]) .weather-current {
        margin: 8px 0;
    }

    :host([background="light"]) .weather-current {
        margin-top: 0;
    }

    .weather-current-image {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        z-index: 2;
    }

    .weather-current-temperature {
        font-size: 46px;
        line-height: 44px;
        color: var(--textStyle);
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        display: flex;
        align-items: flex-start;
        margin-inline-start: 5px;
        margin-inline-end: 10px;
        z-index: 2;
    }

    .weather-current-temperature-num {
        line-height: 43px;
    }
    
    .weather-degree-switch {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        margin-inline-start: 5px;
    }

    .weather-degree-current {
        font-size: ${z.PwC};
        line-height: ${z.b3W};
        position: relative;
        top: 2px;
        color: var(--textStyle);
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        margin-inline-start: 3px;
    }

    .weather-degree-no-switch {
        font-size: 24px;
        line-height: 32px;
        top: 0px;
    }

    .weather-degree-alternate {
        align-items: center;
        font-size: ${z.sNp};
        line-height: ${z.vgC};
        margin-top: 3px;
        text-decoration: none;
        color: ${z.Q5n};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        margin-inline-start: auto;
        margin-inline-end: 0px;
        border-top: 1px solid ${z.Q5n};
        border-radius: 0px;
        z-index: 3;
        background: transparent;
        max-height: 20px;
        min-width: 20px;
        width: 20px;
    }

    .weather-degree-alternate:hover,
    .weather-degree-alternate:active,
    .weather-degree-alternate:${_.b} {
        color: var(--textStyle);
    }

    .weather-degree-alternate::part(control) {
        width: 20px;
        height: 20px;
    }

    .weather-feedback {
        min-width: 22px;
        width: 22px;
        height: 22px;
        border-radius: 16px;
        background: none;
        margin: 1px 5px;
        z-index: 3;
    }

    .weather-feedback::part(control) {
        padding: 0;
    }

    .weather-feedback:hover {
        background: var(--neutral-fill-rest);
    }

    .weather-feedback-icon {
        display: flex;
    }

    .weather-feedback-icon svg {
        fill: var(--neutral-foreground-rest);
    }

    .weather-current-info {
        margin-inline-start: auto;
        margin-inline-end: 0px;
        color: var(--textStyle);
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        flex-flow: column nowrap;
        max-width: 168px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: end;
    }

    .weather-nowcast,
    .summary-oneline {
        margin-inline-start: auto;
        margin-inline-end: 0px;
        color: ${z.CHi};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        flex-flow: column nowrap;
        max-width: 168px;
        text-wrap: balance;
        text-align: end;
    }
    .summary-oneline-info {
        z-index: 2;
        color: var(--textStyle);
        text-decoration: none;
    }

    .summary-oneline-info svg {
        margin-inline: auto 4px;
    }

    .weather-current-skycode,
    .weather-current-summary {
        font-size: ${z.cSu};
        line-height: ${z.RUt};
        color: var(--textStyle);
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
    }

    .weather-current-summary {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .weather-alert,
    .summary-twoline {
        margin-inline-start: auto;
        margin-inline-end: 0px;
        color: var(--textStyle);
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
        font-weight: 500;
        font-size: ${z.cSu};
        line-height: ${z.RUt};
        text-transform: uppercase;
        max-width: 168px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: end;
        text-decoration: none;
    }

    .summary-twoline {
        font-weight: 400;
        z-index: 2;
        text-transform: none;
    }
    
    .summary-twoline:hover,
    .summary-twoline:active,
    .summary-twoline:${_.b} {
        text-decoration: underline;
    }

    .weather-alert-arrow {
        z-index: 2;
    }

    .weather-alert-info,
    .summary-twoline-info {
        display: flex;
        align-items: center;
        margin-inline-start: auto;
        margin-inline-end: 0px;
        height: 20px;
    }

    .weather-alert-icon,
    .summary-twoline-icon {
        margin-inline-start: auto;
        margin-inline-end: 2px;
    }

    .weather-alert-icon svg,
    .summary-twoline-icon svg,
    .weather-alert-sig,
    .summary-twoline-sig {
        display: flex;
    }

    .weather-alert-item1,
    .weather-alert-item2,
    .summary-twoline-item1,
    .summary-twoline-item2 {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .weather-alert-item2,
    .summary-twoline-item2 {
        margin-inline-start: auto;
        margin-inline-end: 0px;
    }

    .weather-current-container {
        display: flex;
        margin: 0px;
        float: right
    }

    .weather-current-container > li {
        padding-inline-start: 10px;
        padding-inline-end: 1px;
        padding-bottom: 2px;
    }

    .weather-current-container-item {
        display: flex;
        align-items: center;
        text-decoration: none;
        z-index: 3;
    }

    .weather-current-precipitation-glyph {
        margin-inline-start: auto;
        margin-inline-end: 4px;
        fill: currentcolor;
    }

    .weather-current-container-item-text {
        font-size: ${z.cSu};
        display: flex;
        margin-inline-end: 0px;
        color: var(--textStyle);
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13),
            0px 0px 2.22px rgba(0, 0, 0, 0.11);
    }

    .weather-current-airquality-glyph {
        margin-inline-start: auto;
        margin-inline-end: 4px;
        fill: var(--textStyle);
    }

    .weather-forecast-map-rotation-container {
        overflow: hidden;
    }

    .weather-forecast-region-container {
        position: relative;
        height: 136px;
        z-index: 2;
    }

    .weather-forecast-container {
        height: 100%;
    }

    .weather-large-more-container {
        height: 136px;
        position: relative;
        margin-bottom: 6px;
        z-index: 2;
        display: flex;
        justify-content: center;
    }

    /* styles for init rotation */
    .weather-rotate-container>* {
        position: absolute;
        top: 101%;
        left: 0;
        animation: 10s autoplay_init 2.5 ease-in-out;
    }
    .weather-rotate-container>*:nth-child(1) {
        animation-delay: 0s;
        animation-fill-mode: forwards;
        animation-iteration-count: 2.5;
    }
    .weather-rotate-container>*:nth-child(2) {
        animation-delay: 5s;
        animation-iteration-count: 2;
    }

    .weather-rotate-container-running > * {
        animation-play-state: running;
    }

    .weather-rotate-container-paused > * {
        animation-play-state: paused;
    }

    /* styles for focus on forecast, make the first element invisable */
    .weather-rotate-container-on-forecast>*:nth-child(2) {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px; 
    }

    /* styles for focus on minimap, make the first element invisiable */
    .weather-rotate-container-on-map>*:nth-child(1) {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px; 
    }

    .weather-forecast {
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding: 0px;
        margin: 0px;
        position: relative;
        width: 268px;
    }

    .weather-forecast-update-time {
        display: none;
    }

    .weather-forecast-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    .weather-forecast-item-pro {
        height: 120px;
    }

    .weather-forecast-item-npro {
        height: 132px;
    }

    .weather-forecast-item-4col {
        width: 64px;
        min-width: 64px;
        border-radius: 6px;
    }

    .weather-forecast-item-5col {
        width: 50px;
        min-width: 50px;
        border-radius: 4px;
    }

    @keyframes autoplay_init {
        0% {top: 101%; }
        5% {top: 0%; }
        50% {top: 0%; }
        55% {top: -101%; }
        100% {top: -101%; }
    }

    .nowcast:${_.b} {
        outline: none;
    }

    .weekend-anchor::part(control) {
        padding: 0;
    }

    .weekend-anchor {
        background: var(--weather-card-forecast-background);
        border-radius: calc(${z.UWU} * 1px);
        height: 124px;
        
    }

    .weekend-anchor:hover,
    .weekend-anchor:active,
    .weekend-anchor:${_.b} {
        background: var(--weather-card-forecast-hover-background);
    }

    .weekend-container {
        display: flex;
        white-space: normal;
        height: 124px;
        width: 268px;
    }

    .weekend-text {
        width: 144px;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        margin-left: 20px;
        margin-top: 16px;
        margin-bottom: 22px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .weekend-weather {
        font-weight: 500;
    }

    .weekend-image {
        width: 93px;
        height: 100%;
        margin-right: 6px;
        display: flex;
        align-items: flex-end;
    }

    :host([background="light"])
    .weather-forecast-item {
        background: var(--weather-card-forecast-background);
    }

    :host([background="light"])
    .weather-forecast-item:hover,
    .weather-forecast-item:active,
    .weather-forecast-item:${_.b} {
        background: var(--weather-card-forecast-hover-background);
    }

    .weather-forecast-item::part(control) {
        width: 100%;
        padding: 9px 0;
        color: var(--textStyle)
    }

    .weather-forecast-item svg,
    .weather-forecast-item img {
        width: 24px;
        height: 24px;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .weather-forecast-day {
        font-size: ${z.sNp};
        line-height: ${z.vgC};
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 500;
        margin-top: 2px;
    }
   
    :host([background="light"])
    .weather-forecast-day {
        text-transform: none;
    }

    .weather-forecast-high {
        font-size: ${z.PwC};
        line-height: ${z.b3W};
        font-weight: 500;
    }

    .weather-forecast-low {
        font-size: ${z.PwC};
        line-height: ${z.b3W};
    }

    /* footer template style */
    .weather-footer {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }

    .sd-action {
        border-radius: 20px;
        height: 24px;
        z-index: 2;
    }

    :host([wceV2]) .sd-action {
        height: 32px;
        font-size: ${z.cSu};
        font-weight: 600;
        background: var(--hintBackground);
    }
    :host([wceV2]) .sd-action:hover {
        background: var(--hoverBackground);
    }

    .sd-action::part(control) {
        padding: 0px 24px 0px 24px;
        color: var(--textStyle);
    }

    :host([wceV2]) .sd-action::part(content) {
        line-height: 32px;
    }

    .weather-fullcardcover {
        z-index: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
    }

    :host([background="dynamic"])
    .sd-action {
        background: rgba(255, 255, 255, 0.09);
    }

    :host([background="dynamic"])
    .sd-action:hover,
    .sd-action:active,
    .sd-action:${_.b} {
        background: rgba(255, 255, 255, 0.13);
    }

    :host([background="dynamic"])
    .sd-action::part(control) {
        color: rgba(255, 255, 255, 0.8);
    }

    .weather-footer-provider {
        font-size: ${z.G8g};
        line-height: ${z.MwG};
        color: ${z.Q5n};
        text-align: end;
        margin-inline-end: 5px;
    }

    .weather-edit-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        z-index: 2;
        background: transparent;
        margin: 2px 4px;
        min-width: 20px;
        width: 20px;
        height: 20px;
    }
    .weather-edit-btn svg {
        fill: currentcolor;
        width: 12px;
        height: 12px;
    }
    .weather-edit-btn:hover,
    .weather-edit-btn:active {
        background: ${z.XiB};
    }
    .weather-edit-btn:${_.b} {
        background: ${z.XiB};
        outline: 1px solid;
    }
    
    ::slotted(fluent-button[slot="weather-pen-btn"]) {
        min-width: 18px;
        width: 18px;
        height: 18px;
        background: none;
        color: var(--textStyle);
    }
    ::slotted(fluent-button[slot="weather-brand-icon"]) {
        min-width: 18px;
        width: 18px;
        height: 18px;
        background: none;
        color: var(--textStyle);
    }
    ::slotted(fluent-anchor[slot="weather-map-btn"]) {
        min-width: 18px;
        width: 18px;
        height: 18px;
        background: none;
        color: var(--textStyle);
    }

    ::slotted(fluent-button[slot="more-actions"]) {
        min-width: 24px;
        width: 24px;
        height: 24px;
        border-radius: 16px;
        background: ${z.wFS};
        color: var(--textStyle);
    }

    :host([wceV2])
    ::slotted(fluent-button[slot="more-actions"]){
        background: var(--hintBackground);
    }

    :host([background="dynamic"])
    ::slotted(fluent-button[slot="more-actions"]){
        background: rgba(255, 255, 255, 0.09);
    }

    ::slotted([slot="weather-pen-btn"]:hover),
    ::slotted([slot="weather-pen-btn"]:active),
    ::slotted([slot="weather-pen-btn"]:${_.b}) {
        background: ${z.XiB};
    }

    :host([wceV2])
    ::slotted([slot="weather-pen-btn"]:hover),
    ::slotted([slot="weather-pen-btn"]:active),
    ::slotted([slot="weather-pen-btn"]:${_.b}),
    ::slotted([slot="weather-map-btn"]:hover),
    ::slotted([slot="weather-map-btn"]:active),
    ::slotted([slot="weather-map-btn"]:${_.b}) {
        background: var(--hintBackground);
    }

    ::slotted([slot="more-actions"]:hover),
    ::slotted([slot="more-actions"]:active),
    ::slotted([slot="more-actions"]:${_.b}) {
        background: ${z.XiB};
    }

    :host([wceV2])
    ::slotted([slot="more-actions"]:hover),
    ::slotted([slot="more-actions"]:active),
    ::slotted([slot="more-actions"]:${_.b}) {
        background: var(--hoverBackground);
    }

    :host([background="dynamic"])
    ::slotted([slot="more-actions"]:hover),
    ::slotted([slot="more-actions"]:active),
    ::slotted([slot="more-actions"]:${_.b}) {
        background: rgba(255, 255, 255, 0.13);
    }
`.withBehaviors(new N.O(Z,G),new q.Y(Q,K),(0,E.vF)(B.i`
                :host {
                    forced-color-adjust: auto;
                }
                .weather-glyph,
                .weather-home-glyph,
                .weather-detect-glyph,
                .weather-current-airquality-glyph,
                .weather-feedback-icon svg,
                .weather-current-precipitation-glyph {
                    fill: ${V.H.ButtonText};
                }
                .sd-action::part(control),
                :host([background="dynamic"]) .sd-action::part(control):hover,
                .weather-current-temperature,
                .weather-current-skycode,
                .weather-current-container-item-text {
                    color: ${V.H.LinkText};
                }
                .weather-degree-alternate {
                    color: ${V.H.ButtonText};
                }
                .weather-degree-alternate:hover {
                    background: ${V.H.Highlight};
                    color: ${V.H.HighlightText};
                }
                :host([background="dynamic"]) ::slotted([slot="more-actions"]:hover),
                ::slotted([slot="more-actions"]:hover) {
                    background: ${V.H.Highlight};
                }
            `)),Y=B.i`
    .weather-nowcast {
        text-align: left;
    }
    .weather-manual-rotate-wrapper::part(previous-flipper) {
        left: 0px;
    }
    .weather-manual-rotate-wrapper::part(next-flipper) {
        right: 0px;
    }
`,J=B.i`
    .weather-nowcast {
        text-align: right;
    }
    .weather-manual-rotate-wrapper::part(previous-flipper) {
        left: 284px;
    }
    .weather-manual-rotate-wrapper::part(next-flipper) {
        right: 284px;
    }
`,tt=n.d`
    <div class="weather-severealert-info" part="weather-severealert-info">
        <div class="weather-severealert-icon" part="weather-severealert-icon">
            ${t=>t.weatherData.alertIcon}
        </div>
            <span class="weather-severealert-text">
                ${t=>t.weatherData.alertEvent} ${t=>t.weatherData.alertSig}
            </span>
        </div>
    </div>
`,et=n.d`
    <div class="weather-alertmap-container">
        ${tt}
        <div class="weather-alertmap">
            <msft-weather-minimap
                :minimapData="${t=>t.weatherData.minimap}"
                minimapTelemetryTag="${t=>t.minimapTelemetryTag}"
                defaultMapPageUrl="${t=>t.weatherData.defaultMapPageUrl}"
                target="${t=>t.target}"
            ></msft-weather-minimap>
        </div>
    </div>
`,it=n.d`
    <div class="weather-nowcast-container">
        ${k}
        <div class="weather-nowcast-chart">
            <msft-weather-nowcast
                :nowcastData="${t=>t.weatherData.nowcast}"
                telemetryTag="${t=>t.nowcastTelemetryTags}"
                href="${t=>t.weatherData.link}"
                target="${t=>t.target}"
                background="${t=>t.background}"
            ></msft-weather-nowcast>
        </div>
    </div>
`,nt=n.d`
    <div class="weather-trend-container">
        <msft-weather-trend
            :trendData="${t=>t.weatherData.trendData}"
            telemetryTag="${t=>t.trendTelemetryTag}"
            href="${t=>t.weatherData.link}"
            target="${t=>t.target}"
        ></msft-weather-trend>
    </div>
`,ot=n.d`
    <div class="weather-footer" part="weather-footer">
        <fluent-anchor
            class="sd-action"
            part="sd-action"
            href="${t=>t.weatherData.link}"
            target=${t=>t.target}
            data-t="${t=>t.seeForecastTelemetryTag}"
        >
            ${t=>t.weatherData.footerContent}
        </fluent-anchor>
    </div>
`,rt=n.d`
    ${(0,o.g)((t=>!(t.hasSevereWeather()&&t.weatherData.alertEvent)&&!(t.weatherData.nowcast&&t.hasNowcast())&&!!t.weatherData.forecastData&&t.weatherData.forecastData.length),H)}
    ${(0,o.g)((t=>t.hasSevereWeather()&&t.weatherData.alertEvent),et)}
    ${(0,o.g)((t=>!(t.hasSevereWeather()&&t.weatherData.alertEvent)&&t.weatherData.nowcast&&t.hasNowcast()),it)}
`,at={dailyforecast:H,hourlyforecast:nt,severeweather:et,nowcast:it},st=n.d`
    <div
        class="weather-auto-rotate ${t=>t.getHoverRotationStyle()}"
        style="
        --animate-interval: ${t=>{var e;return(null===(e=t.rotateConfig)||void 0===e?void 0:e.rotateInterval)||"5"}};
        --start-delay: ${t=>{var e;return(null===(e=t.rotateConfig)||void 0===e?void 0:e.startDelay)||"3"}};
        "
    >
        <div
            class="weather-auto-rotate-fstpage"
            @mouseover="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
            @mouseout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
            @focus="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
            @focusout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
        >
            ${t=>t.rotateConfig&&t.rotateConfig.rotateContent.length>1?at[t.rotateConfig.rotateContent[0]]:null}
        </div>
        <div
            class="weather-auto-rotate-sndpage"
            @mouseover="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
            @mouseout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
            @focus="${(t,e)=>t.focusOnHoverCardHandler(!0)}"
            @focusout="${(t,e)=>t.focusOnHoverCardHandler(!1)}"
        >
            ${t=>t.rotateConfig&&t.rotateConfig.rotateContent.length>1?at[t.rotateConfig.rotateContent[1]]:null}
        </div>
    </div>
`,lt=n.d`
    <div class="weather-manual-rotate">
        <msft-carousel-card-wrapper
            class="weather-manual-rotate-wrapper"
            part="weather-manual-rotate-wrapper"
            :nextFlipperTelemetryTag=${t=>t.nextFlipperTelemetryTag}
            :previousFlipperTelemetryTag=${t=>t.previousFlipperTelemetryTag}
        >
            <msft-carousel-card-panel
                class="carousel-card-panel"
                part="carousel-card-panel"
            >
                ${t=>t.rotateConfig?at[t.rotateConfig.rotateContent[0]]:null}
            </msft-carousel-card-panel>
            <msft-carousel-card-panel
                class="carousel-card-panel"
                part="carousel-card-panel"
            >
                ${t=>t.rotateConfig?at[t.rotateConfig.rotateContent[1]]:null}
            </msft-carousel-card-panel>
            <msft-carousel-card-sequence-indicator
                class="sequence-indicator"
                part="sequence-indicator"
                id="1"
            >
            </msft-carousel-card-sequence-indicator>
            <msft-carousel-card-sequence-indicator
                class="sequence-indicator"
                part="sequence-indicator"
                id="2"
            >
            </msft-carousel-card-sequence-indicator>
        </msft-carousel-card-wrapper>
    </div>
`,ct=B.i`
    msft-structured-data-card::part(sd-action) {
        color: #003e92;
    }
`,dt=B.i`
    msft-structured-data-card::part(sd-action) {
        color: #99ebff;
    }
`,ut=(t,e)=>n.d`
    <msft-weather-trend
        class="weather-trend-container"
        :trendData="${t=>t.weatherData.trendData}"
        telemetryTag="${t=>t.trendTelemetryTag}"
        href="${t=>t.weatherData.link}"
        target="${t=>t.target}"
    ></msft-weather-trend>
`,ht=(t,e)=>n.d`
    <msft-weather-minimap
        class="weather-minimap-container"
        :minimapData="${t=>t.weatherData.minimap}"
        minimapTelemetryTag="${t=>t.minimapTelemetryTag}"
        defaultMapPageUrl="${t=>t.weatherData.defaultMapPageUrl}"
        target="${t=>t.target}"
    ></msft-weather-minimap>
`,pt=(t,e)=>n.d`
    <msft-weather-nowcast
        class="weather-nowcast-container"
        :nowcastData="${t=>t.weatherData.nowcast}"
        telemetryTag="${t=>t.nowcastTelemetryTags}"
        href="${t=>t.weatherData.link}"
        target="${t=>t.target}"
        background="${t=>t.background}"
    ></msft-weather-nowcast>
`,gt=l.xI.compose({baseName:"weather-card",template:(t,e)=>n.d`
    ${(0,o.g)((t=>t.weatherData),n.d`
            <div
                class="weather-container"
                part="weather-container"
                style=${t=>t.backgroundStyle}
            >
                ${x}
                <a
                    class="weather-current"
                    part="weather-current"
                    href="${t=>t.weatherData.link}"
                    target=${t=>t.target}
                    data-t="${t=>t.weaConditionTelemetryTag}"
                >
                    <div
                        class="weather-current-image"
                        part="weather-current-image"
                        title="${t=>t.weatherData.skycode}"
                    >
                        ${t=>t.weatherData.skycodeIcon}
                    </div>
                    <div
                        class="weather-current-temperature"
                        part="weather-current-temperature"
                        aria-label="${t=>t.weatherData.temperature+t.weatherData.unitSetting}"
                    >
                        <span
                            class="weather-current-temperature-num"
                            part="weather-current-temperature-num"
                        >
                            ${t=>t.weatherData.temperature}
                        </span>
                        <div class="weather-degree-switch" part="weather-degree-switch">
                            <span
                                class="weather-degree-current ${t=>t.getDegreeStyle()}"
                                part="weather-degree-current"
                            >
                                ${t=>t.weatherData.unitSetting}
                            </span>
                            ${(0,o.g)((t=>t.weatherData.unitAlternate&&t.switchUnitLabel),n.d`
                                    <fluent-button
                                        class="weather-degree-alternate"
                                        part="weather-degree-alternate"
                                        tabindex="0"
                                        aria-label=${t=>t.switchUnitLabel}
                                        title=${t=>t.switchUnitLabel}
                                        @click="${(t,e)=>t.switchUnit()}"
                                        data-t="${t=>t.unitSwitchTelemetryTag}"
                                    >
                                        ${t=>t.weatherData.unitAlternate}
                                    </fluent-button>
                                `)}
                        </div>
                        ${(0,o.g)((t=>t.weatherData.feedbackLink&&t.weatherData.feedbackTooltip),g)}
                    </div>
                    ${(0,o.g)((t=>!t.primaryCarousel),n.d`
    ${(0,o.g)((t=>t.weatherData.alertEvent),L)}
    ${(0,o.g)((t=>t.hasNowcast()),k)}
    ${(0,o.g)((t=>!t.weatherData.alertEvent&&!t.hasNowcast()),$)}
`)}
                    ${(0,o.g)((t=>t.primaryCarousel&&(!t.wceV2||!t.weatherData.summaryData)),n.d`
    ${(0,o.g)((t=>"severeweather"===t.primaryCarousel||"nowcastalert"===t.primaryCarousel||"hurricane"===t.primaryCarousel),L)}
    ${(0,o.g)((t=>"nowcast"===t.primaryCarousel),k)}
    ${(0,o.g)((t=>"dailyforecast"===t.primaryCarousel||"normalmap"===t.primaryCarousel||"aqi"===t.primaryCarousel||"goodweatherweekend"===t.primaryCarousel),$)}
`)}
                    ${(0,o.g)((t=>t.primaryCarousel&&t.wceV2&&t.weatherData.summaryData),n.d`
    ${(0,o.g)((t=>"severeweather"===t.primaryCarousel||"nowcastalert"===t.primaryCarousel||"aqi"===t.primaryCarousel||"hurricane"===t.primaryCarousel||"nowcast"===t.primaryCarousel||"teaser"===t.primaryCarousel),F)}
    ${(0,o.g)((t=>"dailyforecast"===t.primaryCarousel||"normalmap"===t.primaryCarousel||"goodweatherweekend"===t.primaryCarousel),$)}
`)}
                </a>
                ${(0,o.g)((t=>(0,l.TW)(t.layout)),n.d` ${A()} `)}
                ${(0,o.g)((t=>(0,l.aL)(t.layout)),n.d` ${n.d`
    <div class="weather-large-more-container">
        ${P()}
    </div>
    <div
        class="weather-forecast-map-rotation-container weather-forecast-region-container"
    >
        ${M()}
    </div>
`} `)}
                ${I}
            </div>
        `)}
`,styles:X});l.xI.compose({baseName:"weather-widget",template:(t,e)=>n.d`
    ${(0,o.g)((t=>t.weatherData),n.d`
            <msft-structured-data-card
                target=${t=>t.target}
                style=${t=>t.backgroundStyle}
                :headerTelemetryTag=${t=>t.headerTelemetryTag}
                :seeMoreTelemetryTag=${t=>t.seeForecastTelemetryTag}
                :data=${t=>t.weatherData}
                tab-index="-1"
            >
                <slot name="title-icon" slot="title-icon"></slot>
                <slot name="more-actions" slot="more-actions"></slot>
                <slot name="pin" slot="pin"></slot>
                <div class="weather-info">
                    ${w}
                    <a
                        class="weather-current"
                        part="weather-current"
                        href="${t=>t.weatherData.link}"
                        target=${t=>t.target}
                        data-t="${t=>t.weaConditionTelemetryTag}"
                    >
                        <div
                            class="weather-current-image"
                            part="weather-current-image"
                            title="${t=>t.weatherData.skycode}"
                        >
                            ${t=>t.weatherData.skycodeIcon}
                        </div>
                        <div
                            class="weather-current-temperature"
                            part="weather-current-temperature"
                        >
                            ${t=>t.weatherData.temperature}
                            <div
                                class="weather-degree-switch"
                                part="weather-degree-switch"
                            >
                                <span
                                    class="weather-degree-current ${t=>t.getDegreeStyle()}"
                                    part="weather-degree-current"
                                >
                                    ${t=>t.weatherData.unitSetting}
                                </span>
                                ${(0,o.g)((t=>t.weatherData.unitAlternate&&t.switchUnitLabel),n.d`
                                        <fluent-button
                                            class="weather-degree-alternate"
                                            part="weather-degree-alternate"
                                            tabindex="0"
                                            aria-label=${t=>t.switchUnitLabel}
                                            title=${t=>t.switchUnitLabel}
                                            @click="${(t,e)=>t.switchUnit()}"
                                            data-t="${t=>t.unitSwitchTelemetryTag}"
                                        >
                                            ${t=>t.weatherData.unitAlternate}
                                        </fluent-button>
                                    `)}
                            </div>
                            ${(0,o.g)((t=>t.weatherData.feedbackLink&&t.weatherData.feedbackTooltip),g)}
                        </div>
                        ${(0,o.g)((t=>t.weatherData.alertEvent),L)}
                        ${(0,o.g)((t=>t.hasNowcast()),k)}
                        ${(0,o.g)((t=>!t.weatherData.alertEvent&&!t.hasNowcast()),$)}
                    </a>
                    ${(0,o.g)((t=>"medium"===t.layout),n.d`
                            <div
                                class="weather-forecast-map-rotation-container weather-forecast-region-container"
                            >
                                ${(0,o.g)((t=>t.weatherData.minimap),ht)}
                                ${(0,o.g)((t=>!t.weatherData.minimap&&t.weatherData.nowcast),pt)}
                                ${(0,o.g)((t=>!t.weatherData.minimap&&!t.weatherData.nowcast&&t.weatherData.forecastData),H)}
                            </div>
                        `)}
                    ${(0,o.g)((t=>"large"===t.layout),n.d`
                            ${(0,o.g)((t=>t.weatherData.minimap||t.weatherData.nowcast),n.d`
                                    <div class="weather-large-more-container">
                                        ${(0,o.g)((t=>t.weatherData.minimap),ht)}
                                        ${(0,o.g)((t=>!t.weatherData.minimap&&t.weatherData.nowcast),pt)}
                                    </div>
                                `)}
                            <div
                                class="weather-forecast-map-rotation-container weather-forecast-region-container"
                            >
                                ${H}
                            </div>
                            ${(0,o.g)((t=>!t.weatherData.minimap&&!t.weatherData.nowcast),n.d`
                                    <div class="weather-large-more-container">
                                        ${(0,o.g)((t=>t.weatherData.trendData),ut)}
                                    </div>
                                `)}
                        `)}
                </div>
                <slot name="footer-start" slot="footer-start"></slot>
                <slot name="footer-end" slot="footer-end"></slot>
            </msft-structured-data-card>
        `)}
`,styles:(t,e)=>B.i`
    ${X()}
    
    msft-structured-data-card {
        display: flex;
        flex-direction: column;
    }

    msft-structured-data-card::part(title-link) {
        color: ${z.CHi};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 240px;
    }

    msft-structured-data-card::part(title-link)::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    msft-structured-data-card::part(sd-action) {
        background: transparent;
        font-size: ${z.cSu};
        line-height: ${z.RUt};
    }

    msft-structured-data-card::part(sd-action):hover,
    msft-structured-data-card::part(sd-action):active,
    msft-structured-data-card::part(sd-action):${_.b} {
        text-decoration: underline;
    }

    .weather-glyph {
        margin-top: 6px;
    }

    :host([background="light"]) msft-structured-data-card {
        background: ${U.Sf};
    }

    .weather-info {
        padding: 32px 24px 6px 24px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 0;
    }

    .weather-forecast {
        width: 100%;
    }

    :host([layout="small"]) .weather-location {
        margin-top: 8px;
    }

    :host([layout="small"]) .weather-pen-btn {
        margin: 8px 4px 0px;
    }

    .weather-current {
        margin-bottom: 8px;
    }

    :host([layout="small"]) .weather-current {
        margin-bottom: 32px;
    }

    :host([layout="medium"]) .weather-forecast-region-container {
        height: 124px;
    }

    :host([layout="large"]) .weather-forecast-region-container {
        height: 120px;
    }

    .weather-forecast-item-4col {
        width: 60px;
        min-width: 60px;
    }

    .weather-forecast-item-5col {
        width: 47px;
        min-width: 47px;
    }
    
    .weather-forecast-temp {
        height: 46px;
    }

    .weather-forecast-high {
        font-size: ${z.sNp};
        line-height: ${z.vgC};
        padding-top: 3px;
    }

    .weather-forecast-low {
        font-size: ${z.sNp};
        line-height: ${z.vgC};
        margin-top: 5px;
    }

    :host([layout="medium"]) .weather-forecast-item-npro {
        height: 120px;
    }

    :host([layout="large"]) .weather-forecast-item-pro {
        height: 104px;
    }

    :host([layout="large"]) .weather-forecast-item-npro {
        height: 116px;
    }

    :host([layout="large"]) .weather-forecast-item svg,
    :host([layout="large"]) .weather-forecast-item img {
        width: 20px;
        height: 20px;
    }

    .weather-minimap-container {
        height: 100%;
        width: 100%;
    }

    .weather-large-more-container {
        height: 118px;
        position: relative;
        margin-bottom: 6px;
        z-index: 2;
        display: flex;
        justify-content: center;
    }

    ::slotted(fluent-button[slot="more-actions"]) {
        min-width: 28px;
        width: 28px;
        height: 28px;
    }
`.withBehaviors(new q.Y(ct,dt))}),l.xI.compose({baseName:"weather-card-greeting",template:(t,e)=>n.d`
    ${(0,o.g)((t=>t.weatherData),n.d`
            <div
                class="weather-container"
                part="weather-container"
                style="${t=>"dynamic"==t.background&&t.weatherData.skycodeBackground?`background: ${t.weatherData.skycodeBackground};`:void 0}"
            >
                <div class="weather-title" part="weather-title">
                    ${b}
                </div>
                <div
                    class="weather-forecast-map-rotation-container weather-forecast-region-container"
                >
                    ${(0,o.g)((t=>!t.rotateConfig||!!t.rotateConfig&&"static"==t.rotateConfig.rotateMode),rt)}
                    ${(0,o.g)((t=>!!t.rotateConfig&&"autoRotate"==t.rotateConfig.rotateMode),st)}
                    ${(0,o.g)((t=>!!t.rotateConfig&&"manualRotate"==t.rotateConfig.rotateMode),lt)}
                </div>
                ${ot}
            </div>
        `)}
`,styles:(t,e)=>B.i`
        ${X()}

        .weather-container {
            padding: 0px;
        }

        .weather-title {
            height: 40px;
            width: 100%;
            padding: 0px 16px;
            box-sizing: border-box;
        }

        .weather-header {
            padding: 16px 0px 8px 0px;
            margin-top: 0px;
        }

        :host([background="light"]) .weather-pen-btn {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            z-index: 2;
            margin-top: 12px;
            margin-inline: 4px 0px;
        }

        .weather-edit-btn {
            width: 24px;
            height: 24px;
            min-width: 24px;
            background-color: transparent;
            margin-inline: 4px 0px;
            margin-top: 12px;
            z-index: 2;
        }

        .weather-edit-btn svg {
            width: 14px;
            height: 14px;
        }

        .weather-forecast-region-container {
            height: 150px;
        }

        .weather-forecast {
            padding: 0 16px 0px;
        }

        .weather-forecast-update-time {
            display: block;
            height: 18px;
            line-height: 18px;
            font-size: 10px;
            padding: 0 16px;
            overflow: hidden;
            opacity: 0.6;
        }

        .weather-forecast-item-pro {
            height: 111px;
        }

        .weather-forecast-item-npro {
            height: 111px;
        }

        .weather-forecast-day {
            margin-top: 8px;
            height: 15px;
            font-family: ${z.SVJ};
            font-weight: 400;
        }

        .weather-forecast-item svg {
            margin: 12px 0px 8px 0px;
            width: 18px;
            height: 18px;
        }

        .weather-forecast-high {
            font-size: ${z.cSu};
            line-height: ${z.vgC};
            margin-bottom: 4px;
        }

        .weather-forecast-low {
            font-size: ${z.cSu};
            line-height: ${z.vgC};
            margin-bottom: 2px;
        }

        .weather-footer-provider {
            font-size: ${z.G8g};
            line-height: ${z.sNp};
            padding-top: 6px;
            margin-inline-end: 24px;
        }

        .weather-footer {
            padding: 5px 0px 12px 0px;
            height: 40px;
            overflow: hidden;
        }

        .weather-alertmap-container {
            margin: 0px 16px;
        }

        .weather-alertmap {
            height: 117px;
            margin: 4px 0px;
            position: relative;
        }

        .weather-severealert-info {
            display: flex;
        }

        .weather-severealert-icon {
            margin: 0px 4px;
        }

        .weather-severealert-text {
            font-size: ${z.cSu};
            text-transform: uppercase;
            font-weight: 500;
        }

        .weather-nowcast-container {
            margin: 0px 16px;
        }

        .weather-nowcast-chart {
            height: 118px;
            width: 268px;
            margin-top: 3px;
        }

        .weather-nowcast {
            max-width: none;
        }

        .weather-trend-container {
            margin: 14px 24px;
        }

        .weather-auto-rotate-fstpage {
            width: 100%;
        }

        .weather-auto-rotate-sndpage {
            width: 100%;
        }

        /* styles for init rotation */
        .weather-auto-rotate > * {
            position: absolute;
            top: 101%;
            left: 0;
            animation: calc(var(--animate-interval) * 2s) autoplay_init infinite
                ease-in-out;
        }

        .weather-auto-rotate > *:nth-child(1) {
            animation-delay: calc((var(--start-delay) - var(--animate-interval)) * 1s);
            animation-fill-mode: forwards;
        }

        .weather-auto-rotate > *:nth-child(2) {
            animation-delay: calc(var(--start-delay) * 1s);
        }

        .weather-auto-rotate-run > * {
            animation-play-state: running;
        }

        .weather-auto-rotate-pause > * {
            animation-play-state: paused;
        }

        .weather-manual-rotate-wrapper::part(tablist) {
            position: absolute;
            top: 145px;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 0px;
        }

        .weather-manual-rotate-wrapper::part(previous-flipper) {
            top: 60px;
            position: absolute;
        }

        .weather-manual-rotate-wrapper::part(next-flipper) {
            top: 60px;
            position: absolute;
        }

        ::slotted(fluent-button[slot="weather-pen-btn"]) {
            min-width: 24px;
            width: 24px;
            height: 24px;
        }
    `.withBehaviors(new N.O(Y,J),(0,E.vF)(B.i`
                .weather-edit svg {
                    fill: ${V.H.ButtonText};
                }
            `))})},77234:function(t,e,i){"use strict";i.d(e,{KW:function(){return d},TW:function(){return u},aL:function(){return h},xI:function(){return p}});var n,o=i(33940),r=i(65620),a=i(87697),s=i(48839),l=i(92303),c=i(88516);function d(t){return"small"===t||"half"===t}function u(t){return"full"===t||"medium"===t}function h(t){return"large"===t||"tall"===t}!function(t){t[t.Init=0]="Init",t[t.StopOnForecast=1]="StopOnForecast",t[t.StopOnMinimap=2]="StopOnMinimap"}(n||(n={}));class p extends s.I{weatherDataChanged(){this.getBackgroundStyle(),this.updateShowMiniMapByData()}switchUnit(){this.$emit("switch")}switchToSettings(){this.$emit("toSettings")}focusOnForecastHandler(){return this.rotationState=n.StopOnForecast,!0}focusOnMinimapHandler(){return this.rotationState=n.StopOnMinimap,!0}focusOnHoverCardHandler(t){return this.eventMode=t?"mouseenter":"none",!0}getDegreeStyle(){return this.weatherData.unitAlternate&&this.switchUnitLabel?"":"weather-degree-no-switch"}getRotationStyle(){var t;if(!this.weatherData.forecastData||!this.weatherData.forecastData.length||!this.weatherData.defaultMapPageUrl)return"";if(this.weatherData.nowcast&&this.weatherData.nowcast.summary&&!(null===(t=this.weatherData.minimap)||void 0===t?void 0:t.weatherLayerType))return"";let e="";switch(this.rotationState){case n.StopOnForecast:e="-on-forecast";break;case n.StopOnMinimap:e="-on-map"}return`weather-rotate-container${e} ${"mouseenter"==this.eventMode?"weather-rotate-container-paused":"weather-rotate-container-running"}`}getHoverRotationStyle(){return`weather-auto-rotate${"mouseenter"!=this.eventMode?"-run":"-pause"}`}getBackgroundStyle(){var t,e,i,n;let o="",r="var(--neutral-foreground-rest)",a="var(--weather-card-cta-background)",s="var(--weather-card-cta-hover-background)";const l=null===(t=this.weatherData)||void 0===t?void 0:t.backgroundData;"dynamic"==this.background&&(null===(e=this.weatherData)||void 0===e?void 0:e.skycodeBackground)?o=`background: ${this.weatherData.skycodeBackground};`:(null==l?void 0:l.background)&&(o=`background: ${l.background};\n                 background-size: ${l.backgroundsize||"cover"};\n                `),(null==l?void 0:l.isCustomized)&&(r=(null==l?void 0:l.textColor)||"#2B2B2B",a=l.btnHintBackground||a,s=l.btnHoverBackground||s);const c=(null===(n=null===(i=this.weatherData)||void 0===i?void 0:i.backgroundData)||void 0===n?void 0:n.isCustomized)?"#2B2B2B":r;this.backgroundStyle=`${o}\n                --textStyle: ${c};\n                --hintBackground: ${a};\n                --hoverBackground: ${s};`}updateShowMiniMapByData(){if(!this.weatherData.defaultMapPageUrl)return void(this.showMiniMapByData=!1);const t=!(!this.weatherData.minimapButtons||!this.weatherData.minimapButtons.length),e=this.weatherData.minimap||{},i=!(!e.minimapButtons||!e.minimapButtons.length),n=!(!e.weatherLayerType||e.weatherLayerType===l.p0.Temperature);this.showMiniMapByData=t||i||n||this.hasSevereWeather()}hasNowcast(){return!this.weatherData.alertEvent&&!(!this.weatherData.nowcast||this.weatherData.nowcast.precipitationType==c.H.NoRain)}hasSevereWeather(){var t,e,i;return!!(null===(t=this.weatherData.minimap)||void 0===t?void 0:t.severeAlertTooltip)&&!!this.weatherData.minimap.severeAlertColor&&!!this.weatherData.minimap.severeAlertTooltip||!!(null===(e=this.weatherData.minimap)||void 0===e?void 0:e.severeAlertData)&&(null===(i=this.weatherData.minimap)||void 0===i?void 0:i.severeAlertData.length)>0}editSetting(){this.$emit("edit")}connectedCallback(){super.connectedCallback(),this.layout||(this.layout="half"),this.background||(this.background="dynamic"),null==this.darkMode&&(this.darkMode=!1),this.target||(this.target="_blank"),this.getBackgroundStyle(),this.updateShowMiniMapByData()}}(0,o.gn)([r.Lj],p.prototype,"background",void 0),(0,o.gn)([(0,r.Lj)({mode:"boolean"})],p.prototype,"darkMode",void 0),(0,o.gn)([r.Lj],p.prototype,"layout",void 0),(0,o.gn)([r.Lj],p.prototype,"place",void 0),(0,o.gn)([r.Lj],p.prototype,"target",void 0),(0,o.gn)([r.Lj],p.prototype,"switchUnitLabel",void 0),(0,o.gn)([r.Lj],p.prototype,"editLocationTip",void 0),(0,o.gn)([(0,r.Lj)({mode:"boolean"})],p.prototype,"wceV2",void 0),(0,o.gn)([(0,r.Lj)({mode:"boolean"})],p.prototype,"showBrandIcon",void 0),(0,o.gn)([(0,r.Lj)({mode:"boolean"})],p.prototype,"showMiniMapByData",void 0),(0,o.gn)([a.LO],p.prototype,"weatherData",void 0),(0,o.gn)([a.LO],p.prototype,"headerTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"locationTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"weaConditionTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"weatherAqiTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"unitSwitchTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"weatherEditButtonTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"forecastDayTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"forecastDayTelemetryTags",void 0),(0,o.gn)([a.LO],p.prototype,"blankAreaTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"summaryTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"seeForecastTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"feedbackTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"minimapTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"minimapExtendButtonTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"nowcastTelemetryTags",void 0),(0,o.gn)([a.LO],p.prototype,"trendTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"editSettingTelemetryTags",void 0),(0,o.gn)([a.LO],p.prototype,"previousFlipperTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"nextFlipperTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"goodWeatherWeekendTelemetryTag",void 0),(0,o.gn)([a.LO],p.prototype,"rotationState",void 0),(0,o.gn)([a.LO],p.prototype,"rotateConfig",void 0),(0,o.gn)([a.LO],p.prototype,"primaryCarousel",void 0),(0,o.gn)([a.LO],p.prototype,"showMiniMap",void 0),(0,o.gn)([a.LO],p.prototype,"eventMode",void 0),(0,o.gn)([a.LO],p.prototype,"backgroundStyle",void 0)},63872:function(t,e,i){"use strict";i.d(e,{ry:function(){return A}});var n=i(92303),o=i(26755),r=i(62734),a=i(22674),s=i(53046),l=i(40082),c=i(15933);const d=s.i`
    .weather-minimap-expand {
        right: 6px;
    }

    .weather-minimap-buttons-container {
        left: 6px;
    }

    .minimap-tooltip-text {
        left: 120%;
    }

    .minimap-tooltip-text::before {
        right: 100%;
    }

    .weather-minimap-alert-tooltipstatic {
        left: 50%;
    }

    .weather-minimap-expand-button {
        border-right: 1px solid #ececec;
    }

    .weather-minimap-infopane-icon {
        margin-right: 6px;
    }

    .weather-minimap-tiles-time {
        right: 4px;
    }

    .weather-minimap-infopane-arrow {
        margin-left: 4px;
        top: 2px;
    }
`,u=s.i`
    .weather-minimap-expand {
        left: 6px;
    }
    .weather-minimap-buttons-container {
        right: 6px;
    }

    .minimap-tooltip-text {
        right: 120%;
    }

    .minimap-tooltip-text::before {
        left: 100%;
    }

    .weather-minimap-alert-tooltipstatic {
        right: 50%;
    }

    .weather-minimap-expand-button {
        border-left: 1px solid #ececec;
    }

    .weather-minimap-infopane-icon {
        margin-left: 6px;
    }

    .weather-minimap-tiles-time {
        left: 4px;
    }

    .weather-minimap-infopane-arrow {
        transform: rotate(180deg);
        margin-right: 4px;
        top: 0;
    }

    .weather-minimap-tiles-container {
        direction: ltr;
    }
`;var h=i(39181),p=i(13988),g=i(58952),f=i(18864);h.d`
    <svg width="20" height="20" viewBox="0 0 20 16" fill="#666666">
        <path
            d="M17.1973 8.11719C17.6139 8.23438 17.9915 8.41016 18.3301 8.64453C18.6751 8.8724 18.9714 9.14583 19.2188 9.46484C19.4661 9.77734 19.6582 10.1289 19.7949 10.5195C19.9316 10.9102 20 11.3203 20 11.75C20 12.2708 19.9023 12.7591 19.707 13.2148C19.5117 13.6641 19.2415 14.0612 18.8965 14.4062C18.5579 14.7448 18.1608 15.0117 17.7051 15.207C17.2493 15.4023 16.7643 15.5 16.25 15.5H5.625C5.01953 15.5 4.44987 15.3861 3.91602 15.1582C3.38867 14.9303 2.92643 14.6178 2.5293 14.2207C2.13216 13.8236 1.81966 13.3613 1.5918 12.834C1.36393 12.3001 1.25 11.7305 1.25 11.125C1.25 10.6367 1.32812 10.168 1.48438 9.71875C1.02214 9.36719 0.657552 8.93099 0.390625 8.41016C0.130208 7.88932 0 7.33594 0 6.75C0 6.23568 0.0976562 5.75065 0.292969 5.29492C0.488281 4.83919 0.755208 4.44206 1.09375 4.10352C1.4388 3.75846 1.83594 3.48828 2.28516 3.29297C2.74089 3.09766 3.22917 3 3.75 3C3.82161 3 3.88997 3.00326 3.95508 3.00977C4.02669 3.00977 4.09831 3.01302 4.16992 3.01953C4.3457 2.62891 4.57031 2.2806 4.84375 1.97461C5.1237 1.66211 5.43294 1.39844 5.77148 1.18359C6.11654 0.96224 6.48763 0.792969 6.88477 0.675781C7.28841 0.558594 7.70182 0.5 8.125 0.5C8.67188 0.5 9.18945 0.597656 9.67773 0.792969C10.1725 0.981771 10.612 1.24544 10.9961 1.58398C11.3867 1.91602 11.709 2.31315 11.9629 2.77539C12.2233 3.23763 12.3893 3.73893 12.4609 4.2793C13.0078 4.33138 13.5286 4.46484 14.0234 4.67969C14.5247 4.88802 14.9805 5.16146 15.3906 5.5C15.8073 5.83854 16.1686 6.22917 16.4746 6.67188C16.7871 7.11458 17.028 7.59635 17.1973 8.11719ZM3.75 4.25C3.40495 4.25 3.07943 4.3151 2.77344 4.44531C2.47396 4.57552 2.21029 4.75456 1.98242 4.98242C1.75456 5.21029 1.57552 5.47721 1.44531 5.7832C1.3151 6.08268 1.25 6.40495 1.25 6.75C1.25 7.10156 1.31836 7.43685 1.45508 7.75586C1.59831 8.06836 1.80013 8.34505 2.06055 8.58594C2.4707 8.00651 2.98828 7.55729 3.61328 7.23828C4.24479 6.91276 4.91536 6.75 5.625 6.75C5.8724 6.75 6.11654 6.76953 6.35742 6.80859C6.59831 6.84766 6.83268 6.90951 7.06055 6.99414C7.26888 6.62305 7.52279 6.28451 7.82227 5.97852C8.12174 5.67253 8.45052 5.40234 8.80859 5.16797C9.16667 4.93359 9.54753 4.74154 9.95117 4.5918C10.3548 4.44206 10.7682 4.34115 11.1914 4.28906C11.1198 3.92448 10.9896 3.58594 10.8008 3.27344C10.6185 2.96094 10.3906 2.69401 10.1172 2.47266C9.84375 2.24479 9.53451 2.06901 9.18945 1.94531C8.85091 1.8151 8.49609 1.75 8.125 1.75C7.72135 1.75 7.33724 1.82487 6.97266 1.97461C6.61458 2.11784 6.29557 2.31966 6.01562 2.58008C5.74219 2.83398 5.51758 3.13672 5.3418 3.48828C5.16602 3.83333 5.06185 4.20768 5.0293 4.61133C4.83398 4.50065 4.62891 4.41276 4.41406 4.34766C4.19922 4.28255 3.97786 4.25 3.75 4.25ZM16.25 14.25C16.5951 14.25 16.9173 14.1849 17.2168 14.0547C17.5228 13.9245 17.7897 13.7454 18.0176 13.5176C18.2454 13.2897 18.4245 13.026 18.5547 12.7266C18.6849 12.4206 18.75 12.0951 18.75 11.75C18.75 11.3919 18.6816 11.0599 18.5449 10.7539C18.4147 10.4479 18.2324 10.1842 17.998 9.96289C17.7637 9.73503 17.4902 9.55924 17.1777 9.43555C16.8652 9.31185 16.5332 9.25 16.1816 9.25C16.1035 8.71615 15.9375 8.22135 15.6836 7.76562C15.4297 7.30339 15.1107 6.90625 14.7266 6.57422C14.349 6.23568 13.916 5.97201 13.4277 5.7832C12.9395 5.5944 12.4219 5.5 11.875 5.5C11.3737 5.5 10.8952 5.58138 10.4395 5.74414C9.99023 5.9069 9.58008 6.13151 9.20898 6.41797C8.83789 6.70443 8.51562 7.04948 8.24219 7.45312C7.97526 7.85677 7.77995 8.29622 7.65625 8.77148C7.36979 8.52409 7.05404 8.33529 6.70898 8.20508C6.36393 8.06836 6.0026 8 5.625 8C5.19531 8 4.78841 8.08138 4.4043 8.24414C4.02669 8.4069 3.69466 8.63151 3.4082 8.91797C3.12826 9.19792 2.9069 9.52995 2.74414 9.91406C2.58138 10.2917 2.5 10.6953 2.5 11.125C2.5 11.5547 2.58138 11.9616 2.74414 12.3457C2.9069 12.7233 3.12826 13.0553 3.4082 13.3418C3.69466 13.6217 4.02669 13.8431 4.4043 14.0059C4.78841 14.1686 5.19531 14.25 5.625 14.25H16.25Z"
        ></path>
    </svg>
`,h.d`<svg
    width="16"
    height="16"
    viewBox="0 0 16 12"
    fill="#767676"
>
    <path
        d="M12 3C12 3.41667 11.9219 3.80729 11.7656 4.17188C11.6094 4.53125 11.3932 4.84896 11.1172 5.125C10.8464 5.39583 10.5286 5.60938 10.1641 5.76562C9.79948 5.92188 9.41146 6 9 6H0V5H9C9.27604 5 9.53385 4.94792 9.77344 4.84375C10.0182 4.73958 10.2318 4.59635 10.4141 4.41406C10.5964 4.23177 10.7396 4.02083 10.8438 3.78125C10.9479 3.53646 11 3.27604 11 3C11 2.72396 10.9479 2.46615 10.8438 2.22656C10.7396 1.98177 10.5964 1.76823 10.4141 1.58594C10.2318 1.40365 10.0182 1.26042 9.77344 1.15625C9.53385 1.05208 9.27604 1 9 1C8.72396 1 8.46354 1.05208 8.21875 1.15625C7.97917 1.26042 7.76823 1.40365 7.58594 1.58594C7.40365 1.76823 7.26042 1.98177 7.15625 2.22656C7.05208 2.46615 7 2.72396 7 3H6C6 2.58854 6.07812 2.20052 6.23438 1.83594C6.39062 1.47135 6.60417 1.15365 6.875 0.882812C7.15104 0.606771 7.46875 0.390625 7.82812 0.234375C8.19271 0.078125 8.58333 0 9 0C9.41146 0 9.79948 0.078125 10.1641 0.234375C10.5286 0.390625 10.8464 0.606771 11.1172 0.882812C11.3932 1.15365 11.6094 1.47135 11.7656 1.83594C11.9219 2.20052 12 2.58854 12 3ZM14 5C14.276 5 14.5339 5.05208 14.7734 5.15625C15.0182 5.26042 15.2318 5.40365 15.4141 5.58594C15.5964 5.76823 15.7396 5.98177 15.8438 6.22656C15.9479 6.46615 16 6.72396 16 7C16 7.27604 15.9479 7.53646 15.8438 7.78125C15.7396 8.02083 15.5964 8.23177 15.4141 8.41406C15.2318 8.59635 15.0182 8.73958 14.7734 8.84375C14.5339 8.94792 14.276 9 14 9H12.7344C12.9115 9.30208 13 9.63542 13 10C13 10.276 12.9479 10.5365 12.8438 10.7812C12.7396 11.0208 12.5964 11.2318 12.4141 11.4141C12.2318 11.5964 12.0182 11.7396 11.7734 11.8438C11.5339 11.9479 11.276 12 11 12C10.724 12 10.4635 11.9479 10.2188 11.8438C9.97917 11.7396 9.76823 11.5964 9.58594 11.4141C9.40365 11.2318 9.26042 11.0208 9.15625 10.7812C9.05208 10.5365 9 10.276 9 10H10C10 10.1406 10.026 10.2708 10.0781 10.3906C10.1302 10.5104 10.2005 10.6172 10.2891 10.7109C10.3828 10.7995 10.4896 10.8698 10.6094 10.9219C10.7292 10.974 10.8594 11 11 11C11.1406 11 11.2708 10.974 11.3906 10.9219C11.5104 10.8698 11.6146 10.7995 11.7031 10.7109C11.7969 10.6172 11.8698 10.5104 11.9219 10.3906C11.974 10.2708 12 10.1406 12 10C12 9.85938 11.974 9.72917 11.9219 9.60938C11.8698 9.48958 11.7969 9.38542 11.7031 9.29688C11.6146 9.20312 11.5104 9.13021 11.3906 9.07812C11.2708 9.02604 11.1406 9 11 9H0V8H11H14C14.1406 8 14.2708 7.97396 14.3906 7.92188C14.5104 7.86979 14.6146 7.79948 14.7031 7.71094C14.7969 7.61719 14.8698 7.51042 14.9219 7.39062C14.974 7.27083 15 7.14062 15 7C15 6.85938 14.974 6.72917 14.9219 6.60938C14.8698 6.48958 14.7969 6.38542 14.7031 6.29688C14.6146 6.20312 14.5104 6.13021 14.3906 6.07812C14.2708 6.02604 14.1406 6 14 6C13.8594 6 13.7292 6.02604 13.6094 6.07812C13.4896 6.13021 13.3828 6.20312 13.2891 6.29688C13.2005 6.38542 13.1302 6.48958 13.0781 6.60938C13.026 6.72917 13 6.85938 13 7H12C12 6.72396 12.0521 6.46615 12.1562 6.22656C12.2604 5.98177 12.4036 5.76823 12.5859 5.58594C12.7682 5.40365 12.9792 5.26042 13.2188 5.15625C13.4635 5.05208 13.724 5 14 5Z"
    ></path>
</svg>`,h.d`<svg
    width="16"
    height="16"
    viewBox="0 0 47 73"
    fill="#767676"
>
    <path
        d="M44.1904 41.5615C44.8649 42.916 45.3708 44.318 45.708 45.7676C46.0452 47.2171 46.2259 48.6904 46.25 50.1875C46.25 52.2786 45.973 54.2985 45.4189 56.2471C44.8649 58.1956 44.0941 60.0135 43.1064 61.7007C42.1188 63.3879 40.9144 64.9206 39.4932 66.2988C38.0719 67.6771 36.5062 68.8652 34.7959 69.8633C33.0856 70.8613 31.2428 71.6336 29.2676 72.1802C27.2923 72.7267 25.2448 73 23.125 73C21.0052 73 18.9577 72.7267 16.9824 72.1802C15.0072 71.6336 13.1644 70.8732 11.4541 69.8989C9.74382 68.9246 8.1901 67.7365 6.79297 66.3345C5.39583 64.9325 4.19141 63.3879 3.17969 61.7007C2.16797 60.0135 1.38509 58.1956 0.831055 56.2471C0.277018 54.2985 0 52.2786 0 50.1875C0 48.6904 0.16862 47.2171 0.505859 45.7676C0.843099 44.318 1.361 42.916 2.05957 41.5615L23.125 0L44.1904 41.5615ZM23.125 68.4375C25.6784 68.4375 28.0752 67.9622 30.3154 67.0117C32.5557 66.0612 34.5189 64.7661 36.2051 63.1265C37.8913 61.4868 39.2161 59.5501 40.1797 57.3164C41.1432 55.0827 41.625 52.7064 41.625 50.1875C41.625 49.0469 41.4925 47.9181 41.2275 46.8013C40.9626 45.6844 40.5651 44.6151 40.0352 43.5933L23.125 10.1943L6.21484 43.5933C5.6849 44.6151 5.28744 45.6844 5.02246 46.8013C4.75749 47.9181 4.625 49.0469 4.625 50.1875C4.625 52.7064 5.10677 55.0708 6.07031 57.2808C7.03385 59.4907 8.34668 61.4274 10.0088 63.0908C11.6709 64.7542 13.6341 66.0612 15.8984 67.0117C18.1628 67.9622 20.5716 68.4375 23.125 68.4375Z"
    ></path>
</svg>`,h.d`<svg
    width="20"
    height="20"
    viewBox="0 0 9 20"
    fill="#666666"
>
    <path
        d="M5 13.8672C5.18229 13.9323 5.35156 14.0234 5.50781 14.1406C5.66406 14.2578 5.79427 14.3945 5.89844 14.5508C6.00911 14.7005 6.09375 14.8698 6.15234 15.0586C6.21745 15.2409 6.25 15.4297 6.25 15.625C6.25 15.8854 6.20117 16.1296 6.10352 16.3574C6.00586 16.5853 5.8724 16.7839 5.70312 16.9531C5.53385 17.1224 5.33529 17.2559 5.10742 17.3535C4.87956 17.4512 4.63542 17.5 4.375 17.5C4.11458 17.5 3.87044 17.4512 3.64258 17.3535C3.41471 17.2559 3.21615 17.1224 3.04688 16.9531C2.8776 16.7839 2.74414 16.5853 2.64648 16.3574C2.54883 16.1296 2.5 15.8854 2.5 15.625C2.5 15.4297 2.5293 15.2409 2.58789 15.0586C2.65299 14.8698 2.73763 14.7005 2.8418 14.5508C2.95247 14.3945 3.08268 14.2578 3.23242 14.1406C3.38867 14.0234 3.5612 13.9323 3.75 13.8672V7.5H5V13.8672ZM7.5 12.8809C7.87109 13.291 8.16081 13.7467 8.36914 14.248C8.57747 14.7493 8.68164 15.2767 8.68164 15.8301C8.68164 16.416 8.56445 16.9629 8.33008 17.4707C8.10221 17.9785 7.78971 18.4212 7.39258 18.7988C6.99544 19.1699 6.53646 19.4629 6.01562 19.6777C5.49479 19.8926 4.94792 20 4.375 20C3.79557 20 3.24544 19.8926 2.72461 19.6777C2.21029 19.4629 1.75456 19.1699 1.35742 18.7988C0.960286 18.4212 0.644531 17.9785 0.410156 17.4707C0.182292 16.9629 0.0683594 16.416 0.0683594 15.8301C0.0683594 15.2767 0.172526 14.7493 0.380859 14.248C0.589193 13.7467 0.878906 13.291 1.25 12.8809V3.125C1.25 2.69531 1.33138 2.29167 1.49414 1.91406C1.6569 1.53646 1.87826 1.20768 2.1582 0.927734C2.44466 0.641276 2.77669 0.416667 3.1543 0.253906C3.53841 0.0846354 3.94531 0 4.375 0C4.80469 0 5.20833 0.0846354 5.58594 0.253906C5.96354 0.416667 6.29232 0.641276 6.57227 0.927734C6.85872 1.20768 7.08333 1.53646 7.24609 1.91406C7.41536 2.29167 7.5 2.69531 7.5 3.125V12.8809ZM4.375 18.75C4.77865 18.75 5.16276 18.6751 5.52734 18.5254C5.89844 18.3757 6.22396 18.1706 6.50391 17.9102C6.78385 17.6497 7.00521 17.3405 7.16797 16.9824C7.33724 16.6243 7.42188 16.2402 7.42188 15.8301C7.42188 15.3418 7.31445 14.8958 7.09961 14.4922C6.88477 14.082 6.60156 13.7142 6.25 13.3887V3.125C6.25 2.86458 6.20117 2.62044 6.10352 2.39258C6.00586 2.16471 5.8724 1.96615 5.70312 1.79688C5.53385 1.6276 5.33529 1.49414 5.10742 1.39648C4.87956 1.29883 4.63542 1.25 4.375 1.25C4.11458 1.25 3.87044 1.29883 3.64258 1.39648C3.41471 1.49414 3.21615 1.6276 3.04688 1.79688C2.8776 1.96615 2.74414 2.16471 2.64648 2.39258C2.54883 2.62044 2.5 2.86458 2.5 3.125V13.3887C2.14844 13.7142 1.86523 14.082 1.65039 14.4922C1.43555 14.8958 1.32812 15.3418 1.32812 15.8301C1.32812 16.2402 1.40951 16.6243 1.57227 16.9824C1.74154 17.3405 1.96615 17.6497 2.24609 17.9102C2.52604 18.1706 2.84831 18.3757 3.21289 18.5254C3.58398 18.6751 3.97135 18.75 4.375 18.75Z"
    ></path>
</svg>`,h.d`<svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#767676"
>
    <path
        d="M15.5 0C15.6354 0 15.7526 0.0494792 15.8516 0.148438C15.9505 0.247396 16 0.364583 16 0.5C16 0.635417 15.9505 0.752604 15.8516 0.851562L8.35156 8.35156C8.2526 8.45052 8.13542 8.5 8 8.5C7.86458 8.5 7.7474 8.45052 7.64844 8.35156C7.54948 8.2526 7.5 8.13542 7.5 8C7.5 7.86458 7.54948 7.7474 7.64844 7.64844L15.1484 0.148438C15.2474 0.0494792 15.3646 0 15.5 0ZM8 6C7.72396 6 7.46354 6.05208 7.21875 6.15625C6.97917 6.26042 6.76823 6.40365 6.58594 6.58594C6.40365 6.76823 6.26042 6.98177 6.15625 7.22656C6.05208 7.46615 6 7.72396 6 8C6 8.27604 6.05208 8.53646 6.15625 8.78125C6.26042 9.02083 6.40365 9.23177 6.58594 9.41406C6.76823 9.59635 6.97917 9.73958 7.21875 9.84375C7.46354 9.94792 7.72396 10 8 10C8.26562 10 8.52083 9.95052 8.76562 9.85156C9.01042 9.7474 9.22656 9.60156 9.41406 9.41406L10.125 10.125C9.83854 10.4062 9.51302 10.6224 9.14844 10.7734C8.78385 10.9245 8.40104 11 8 11C7.58333 11 7.19271 10.9219 6.82812 10.7656C6.46875 10.6094 6.15104 10.3958 5.875 10.125C5.60417 9.84896 5.39062 9.53125 5.23438 9.17188C5.07812 8.80729 5 8.41667 5 8C5 7.58854 5.07812 7.20052 5.23438 6.83594C5.39062 6.47135 5.60417 6.15365 5.875 5.88281C6.15104 5.60677 6.46875 5.39062 6.82812 5.23438C7.19271 5.07812 7.58333 5 8 5C8.28646 5 8.57552 5.04427 8.86719 5.13281L8 6ZM8 15C8.46875 15 8.92708 14.9557 9.375 14.8672C9.82812 14.7734 10.263 14.6406 10.6797 14.4688C11.1016 14.2969 11.5026 14.0833 11.8828 13.8281C12.2682 13.5729 12.625 13.2812 12.9531 12.9531L13.6562 13.6562C12.8958 14.4167 12.0312 14.9974 11.0625 15.3984C10.099 15.7995 9.07812 16 8 16C7.26562 16 6.55729 15.9062 5.875 15.7188C5.19271 15.526 4.55469 15.2578 3.96094 14.9141C3.36719 14.5651 2.82552 14.1484 2.33594 13.6641C1.85156 13.1745 1.4349 12.6328 1.08594 12.0391C0.742188 11.4453 0.473958 10.8099 0.28125 10.1328C0.09375 9.45052 0 8.73958 0 8C0 7.26562 0.09375 6.55729 0.28125 5.875C0.473958 5.19271 0.742188 4.55469 1.08594 3.96094C1.4349 3.36719 1.85156 2.82812 2.33594 2.34375C2.82552 1.85417 3.36719 1.4375 3.96094 1.09375C4.55469 0.744792 5.1901 0.476562 5.86719 0.289062C6.54948 0.0963542 7.26042 0 8 0C8.82292 0 9.61979 0.122396 10.3906 0.367188C11.1667 0.606771 11.8906 0.963542 12.5625 1.4375L11.8438 2.15625C11.276 1.77604 10.6641 1.48958 10.0078 1.29688C9.35677 1.09896 8.6875 1 8 1C7.35938 1 6.73958 1.08333 6.14062 1.25C5.54688 1.41667 4.98958 1.65365 4.46875 1.96094C3.95312 2.26302 3.48177 2.6276 3.05469 3.05469C2.6276 3.48177 2.26042 3.95573 1.95312 4.47656C1.65104 4.99219 1.41667 5.54948 1.25 6.14844C1.08333 6.74219 1 7.35938 1 8C1 8.64062 1.08333 9.26042 1.25 9.85938C1.41667 10.4531 1.65104 11.0104 1.95312 11.5312C2.26042 12.0469 2.6276 12.5182 3.05469 12.9453C3.48177 13.3724 3.95312 13.7396 4.46875 14.0469C4.98958 14.349 5.54688 14.5833 6.14062 14.75C6.73438 14.9167 7.35417 15 8 15ZM10.0234 3.97656C9.38802 3.65885 8.71354 3.5 8 3.5C7.38021 3.5 6.79688 3.61979 6.25 3.85938C5.70312 4.09375 5.22656 4.41406 4.82031 4.82031C4.41406 5.22656 4.09115 5.70312 3.85156 6.25C3.61719 6.79688 3.5 7.38021 3.5 8C3.5 8.61979 3.61719 9.20312 3.85156 9.75C4.09115 10.2969 4.41406 10.7734 4.82031 11.1797C5.22656 11.5859 5.70312 11.9089 6.25 12.1484C6.79688 12.3828 7.38021 12.5 8 12.5C8.59896 12.5 9.17188 12.388 9.71875 12.1641C10.2708 11.9349 10.7578 11.6068 11.1797 11.1797L11.8906 11.8906C11.3646 12.4115 10.7708 12.8099 10.1094 13.0859C9.44792 13.362 8.74479 13.5 8 13.5C7.49479 13.5 7.00781 13.4349 6.53906 13.3047C6.07031 13.1745 5.63021 12.9896 5.21875 12.75C4.8125 12.5104 4.44271 12.224 4.10938 11.8906C3.77604 11.5573 3.48958 11.1875 3.25 10.7812C3.01042 10.3698 2.82552 9.92969 2.69531 9.46094C2.5651 8.99219 2.5 8.50521 2.5 8C2.5 7.49479 2.5651 7.00781 2.69531 6.53906C2.82552 6.07031 3.01042 5.63281 3.25 5.22656C3.48958 4.8151 3.77604 4.44271 4.10938 4.10938C4.44271 3.77604 4.8125 3.48958 5.21875 3.25C5.63021 3.01042 6.07031 2.82552 6.53906 2.69531C7.00781 2.5651 7.49479 2.5 8 2.5C8.48958 2.5 8.96615 2.5625 9.42969 2.6875C9.89323 2.8125 10.3359 2.9974 10.7578 3.24219L10.0234 3.97656Z"
    ></path>
</svg>`,h.d`<svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#666666"
>
    <path
        d="M19.707 16.3379L18.3887 16.6895L18.7402 18.0078L17.5293 18.3301L17.0898 16.6602L15 15.459V17.8613L16.2207 19.0918L15.3418 19.9707L14.375 19.0039L13.4082 19.9707L12.5293 19.0918L13.75 17.8613V15.459L11.6602 16.6602L11.2207 18.3301L10.0098 18.0078L10.3613 16.6895L9.04297 16.3379L9.36523 15.1367L11.0352 15.5762L13.125 14.375L11.0352 13.1738L9.36523 13.6133L9.04297 12.4121L10.3613 12.0605L10.0098 10.7422L11.2207 10.4199L11.6602 12.0898L13.75 13.291V10.8887L12.5293 9.6582L13.4082 8.7793L14.375 9.74609L15.3418 8.7793L16.2207 9.6582L15 10.8887V13.291L17.0898 12.0898L17.5293 10.4199L18.7402 10.7422L18.3887 12.0605L19.707 12.4121L19.3848 13.6133L17.7148 13.1738L15.625 14.375L17.7148 15.5762L19.3848 15.1367L19.707 16.3379ZM12.6074 4.15039L14.375 3.125L12.6074 2.09961L13.2324 1.02539L15 2.04102V0H16.25V2.04102L18.0176 1.02539L18.6426 2.09961L16.875 3.125L18.6426 4.15039L18.0176 5.22461L16.25 4.20898V6.25H15V4.20898L13.2324 5.22461L12.6074 4.15039ZM7.91016 8.33984L8.94531 8.61328L8.61328 9.82422L7.93945 9.63867L7.76367 10.3125L6.55273 9.99023L6.82617 8.96484L5.625 6.875L4.42383 8.96484L4.69727 9.99023L3.48633 10.3125L3.31055 9.63867L2.63672 9.82422L2.30469 8.61328L3.33984 8.33984L4.54102 6.25H2.13867L1.37695 7.00195L0.498047 6.12305L0.996094 5.625L0.498047 5.12695L1.37695 4.24805L2.13867 5H4.54102L3.33984 2.91016L2.30469 2.63672L2.63672 1.42578L3.31055 1.61133L3.48633 0.9375L4.69727 1.25977L4.42383 2.28516L5.625 4.375L6.82617 2.28516L6.55273 1.25977L7.76367 0.9375L7.93945 1.61133L8.61328 1.42578L8.94531 2.63672L7.91016 2.91016L6.70898 5H9.11133L9.87305 4.24805L10.752 5.12695L10.2539 5.625L10.752 6.12305L9.87305 7.00195L9.11133 6.25H6.70898L7.91016 8.33984Z"
    ></path>
</svg>`,h.d`<svg
    width="16"
    height="22"
    viewBox="0 0 16 22"
    fill="#767676"
>
    <path
        d="M10.5 1.625C10.5 2.79036 10.7148 3.86458 11.1445 4.84766C11.5742 5.83073 12.1927 6.73568 13 7.5625C13.8073 8.38932 14.4258 9.29427 14.8555 10.2773C15.2852 11.2604 15.5 12.3346 15.5 13.5C15.5 14.1901 15.4089 14.8542 15.2266 15.4922C15.0508 16.1302 14.8001 16.7292 14.4746 17.2891C14.1491 17.8424 13.7585 18.347 13.3027 18.8027C12.847 19.2585 12.3392 19.6491 11.7793 19.9746C11.2259 20.3001 10.6302 20.554 9.99219 20.7363C9.35417 20.9121 8.6901 21 8 21C7.3099 21 6.64583 20.9121 6.00781 20.7363C5.36979 20.554 4.77083 20.3001 4.21094 19.9746C3.65755 19.6491 3.15299 19.2585 2.69727 18.8027C2.24154 18.347 1.85091 17.8424 1.52539 17.2891C1.19987 16.7292 0.945964 16.1302 0.763672 15.4922C0.587891 14.8542 0.5 14.1901 0.5 13.5C0.5 12.9531 0.558594 12.416 0.675781 11.8887C0.792969 11.3613 0.96224 10.8568 1.18359 10.375C1.40495 9.88672 1.67839 9.42773 2.00391 8.99805C2.32943 8.56836 2.69727 8.17448 3.10742 7.81641C3.15299 8.0638 3.21484 8.32096 3.29297 8.58789C3.37109 8.84831 3.46224 9.10872 3.56641 9.36914C3.67708 9.62305 3.80078 9.87044 3.9375 10.1113C4.07422 10.3457 4.22396 10.5605 4.38672 10.7559C4.51693 10.9186 4.6862 11 4.89453 11C5.07031 11 5.2168 10.9382 5.33398 10.8145C5.45768 10.6908 5.51953 10.541 5.51953 10.3652C5.51953 10.2936 5.50651 10.2285 5.48047 10.1699C5.46094 10.1113 5.43164 10.0527 5.39258 9.99414C5.21029 9.72721 5.04753 9.46354 4.9043 9.20312C4.76758 8.94271 4.65039 8.67578 4.55273 8.40234C4.45508 8.12891 4.38021 7.8457 4.32812 7.55273C4.27604 7.25977 4.25 6.95052 4.25 6.625C4.25 5.85026 4.39648 5.12109 4.68945 4.4375C4.98893 3.75391 5.39258 3.1582 5.90039 2.65039C6.4082 2.14258 7.00391 1.74219 7.6875 1.44922C8.37109 1.14974 9.10026 1 9.875 1H10.5V1.625ZM8 20.1699C8.46224 20.1699 8.89518 20.082 9.29883 19.9062C9.70247 19.7305 10.054 19.4928 10.3535 19.1934C10.6595 18.8874 10.8971 18.5326 11.0664 18.1289C11.2422 17.7253 11.3301 17.2923 11.3301 16.8301C11.3301 16.3613 11.252 15.9284 11.0957 15.5312C10.9395 15.1341 10.7083 14.7598 10.4023 14.4082C10.0703 14.0371 9.8099 13.6465 9.62109 13.2363C9.4388 12.8262 9.32161 12.3737 9.26953 11.8789C9.08073 11.9245 8.9082 11.9993 8.75195 12.1035C8.60221 12.2012 8.46875 12.3249 8.35156 12.4746C8.24089 12.6178 8.15299 12.7773 8.08789 12.9531C8.0293 13.1289 8 13.3112 8 13.5V15.1699C8 15.3392 7.96745 15.502 7.90234 15.6582C7.83724 15.8079 7.74609 15.9414 7.62891 16.0586C7.51823 16.1693 7.38477 16.2572 7.22852 16.3223C7.07878 16.3874 6.91927 16.4199 6.75 16.4199C6.58724 16.4199 6.43099 16.3906 6.28125 16.332C6.13802 16.2669 6.00781 16.1823 5.89062 16.0781C5.77995 15.9674 5.6888 15.8405 5.61719 15.6973C5.54557 15.554 5.50651 15.401 5.5 15.2383C5.2526 15.3294 5.05078 15.4824 4.89453 15.6973C4.74479 15.9121 4.66992 16.153 4.66992 16.4199V16.8301C4.66992 17.2923 4.75456 17.7253 4.92383 18.1289C5.09961 18.5326 5.33724 18.8874 5.63672 19.1934C5.94271 19.4928 6.29753 19.7305 6.70117 19.9062C7.10482 20.082 7.53776 20.1699 8 20.1699ZM11.4082 19.2324C11.916 18.9264 12.3685 18.5684 12.7656 18.1582C13.1693 17.7415 13.5111 17.2891 13.791 16.8008C14.0775 16.306 14.2956 15.7819 14.4453 15.2285C14.5951 14.6686 14.6699 14.0924 14.6699 13.5C14.6699 12.4648 14.4746 11.498 14.084 10.5996C13.6934 9.70117 13.1367 8.88737 12.4141 8.1582C11.5547 7.29232 10.8906 6.32878 10.4219 5.26758C9.95312 4.20638 9.70247 3.0638 9.66992 1.83984C9.0319 1.85938 8.43294 2.0026 7.87305 2.26953C7.31315 2.52995 6.82487 2.87826 6.4082 3.31445C5.99805 3.74414 5.67253 4.24544 5.43164 4.81836C5.19727 5.38477 5.08008 5.98698 5.08008 6.625C5.08008 7.17839 5.16471 7.68294 5.33398 8.13867C5.50326 8.5944 5.74414 9.04362 6.05664 9.48633C6.1543 9.62305 6.22917 9.76302 6.28125 9.90625C6.33333 10.043 6.35938 10.196 6.35938 10.3652C6.35938 10.5671 6.32031 10.7591 6.24219 10.9414C6.16406 11.1172 6.0599 11.2702 5.92969 11.4004C5.79948 11.5306 5.64323 11.6348 5.46094 11.7129C5.28516 11.791 5.09635 11.8301 4.89453 11.8301C4.66016 11.8301 4.44206 11.7812 4.24023 11.6836C4.04492 11.5794 3.8724 11.4362 3.72266 11.2539C3.51432 10.9805 3.32552 10.6908 3.15625 10.3848C2.98698 10.0788 2.83724 9.76628 2.70703 9.44727L2.6875 9.47656C2.40755 9.84766 2.16667 10.248 1.96484 10.6777C1.75651 11.127 1.59701 11.5859 1.48633 12.0547C1.38216 12.5169 1.33008 12.9987 1.33008 13.5C1.33008 14.0924 1.40495 14.6686 1.55469 15.2285C1.70443 15.7819 1.91927 16.306 2.19922 16.8008C2.48568 17.2891 2.82747 17.7415 3.22461 18.1582C3.62826 18.5684 4.08398 18.9264 4.5918 19.2324C4.3444 18.8809 4.1556 18.5 4.02539 18.0898C3.89518 17.6797 3.83008 17.2598 3.83008 16.8301V16.4199C3.83008 16.1335 3.88542 15.8633 3.99609 15.6094C4.10677 15.3555 4.25651 15.1341 4.44531 14.9453C4.63411 14.7565 4.85547 14.6068 5.10938 14.4961C5.36328 14.3854 5.63346 14.3301 5.91992 14.3301H6.33008V15.1699C6.33008 15.2871 6.3724 15.3848 6.45703 15.4629C6.54167 15.541 6.63932 15.5801 6.75 15.5801C6.86068 15.5801 6.95833 15.541 7.04297 15.4629C7.1276 15.3848 7.16992 15.2871 7.16992 15.1699V13.5C7.16992 13.1549 7.23503 12.8327 7.36523 12.5332C7.49544 12.2272 7.67448 11.9603 7.90234 11.7324C8.13021 11.5046 8.39388 11.3255 8.69336 11.1953C8.99935 11.0651 9.32487 11 9.66992 11H10.0801V11.4199C10.0801 12.3314 10.3926 13.1387 11.0176 13.8418C11.3952 14.265 11.6816 14.7272 11.877 15.2285C12.0723 15.7233 12.1699 16.2572 12.1699 16.8301C12.1699 17.2598 12.1048 17.6797 11.9746 18.0898C11.8444 18.5 11.6556 18.8809 11.4082 19.2324Z"
    ></path>
</svg>`,h.d`<svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="#795700"
>
    <path
        d="M18.75 18.75H0L9.375 0L18.75 18.75ZM2.02148 17.5H16.7285L9.375 2.79297L2.02148 17.5ZM10 7.5V13.75H8.75V7.5H10ZM8.75 15H10V16.25H8.75V15Z"
    ></path>
</svg>`;const v=h.d`<svg
    width="16"
    height="16"
    viewBox="0 -2 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M8.39062 0.718945V0.0283203H7.60938V0.718945C3.8 0.92207 0.773438 4.0752 0.773438 7.93457C0.773438 8.00801 0.775 8.08145 0.776563 8.15488H0.834375C1.13125 7.45645 1.825 6.96738 2.63125 6.96738C3.43125 6.96738 4.11875 7.44863 4.42031 8.13613C4.72187 7.44863 5.40937 6.96738 6.20937 6.96738C6.75781 6.96738 7.25312 7.19395 7.60781 7.55801V12.758C7.60781 12.9971 7.41406 13.1908 7.175 13.1908C6.93594 13.1908 6.74219 12.9971 6.74219 12.758V12.7533H5.96094V12.758C5.96094 13.4283 6.50469 13.9721 7.175 13.9721C7.84375 13.9721 8.38594 13.4314 8.38906 12.7643V7.55801C8.74375 7.19395 9.23906 6.96738 9.7875 6.96738C10.5875 6.96738 11.275 7.44863 11.5766 8.13613C11.8781 7.44863 12.5656 6.96738 13.3656 6.96738C14.1734 6.96738 14.8656 7.45645 15.1625 8.15488H15.2203C15.2219 8.08145 15.2234 8.00801 15.2234 7.93457C15.2266 4.0752 12.2 0.92207 8.39062 0.718945ZM13.3672 6.18613C12.6969 6.18613 12.0656 6.43145 11.5781 6.85332C11.0906 6.43145 10.4594 6.18613 9.78906 6.18613C9.11875 6.18613 8.4875 6.43145 8 6.85332C7.5125 6.43145 6.88125 6.18613 6.21094 6.18613C5.54063 6.18613 4.90938 6.43145 4.42188 6.85332C3.93438 6.43145 3.30312 6.18613 2.63281 6.18613C2.32812 6.18613 2.03281 6.23613 1.75625 6.32988C1.83438 6.02207 1.9375 5.72051 2.06094 5.4252C2.38594 4.65801 2.85 3.96895 3.44219 3.37676C4.03438 2.78457 4.72344 2.32051 5.49062 1.99551C6.28437 1.65957 7.12812 1.48926 7.99844 1.48926C8.86875 1.48926 9.7125 1.65957 10.5063 1.99551C11.2734 2.32051 11.9625 2.78457 12.5547 3.37676C13.1469 3.96895 13.6109 4.65801 13.9359 5.4252C14.0609 5.72051 14.1625 6.02207 14.2406 6.32988C13.9672 6.23613 13.6719 6.18613 13.3672 6.18613Z"
        fill="white"
    ></path>
</svg>`,m=h.d`<svg
    width="24"
    height="16px"
    viewBox="0 0 24 22"
    fill="#FFFFFF"
    class="inline-DS-card1-1"
>
    <path
        d="M17.625 10.9883C18.5938 10.9883 19.4961 10.8672 20.332 10.625C21.1758 10.375 22.0273 10.0312 22.8867 9.59375C23.0117 9.53125 23.1328 9.5 23.25 9.5C23.4531 9.5 23.6289 9.57422 23.7773 9.72266C23.9258 9.87109 24 10.0469 24 10.25C24 10.5312 23.8711 10.75 23.6133 10.9062C23.4727 10.9922 23.3203 11.0742 23.1562 11.1523C23 11.2305 22.8438 11.3047 22.6875 11.375C21.8828 11.7422 21.0547 12.0234 20.2031 12.2188C19.3594 12.4062 18.5 12.5 17.625 12.5C16.5469 12.5 15.5156 12.3633 14.5312 12.0898C13.5469 11.8164 12.582 11.4219 11.6367 10.9062C11.457 10.8047 11.2695 10.7109 11.0742 10.625C10.8867 10.5312 10.6953 10.4453 10.5 10.3672V8.76172C10.8281 8.87891 11.1445 9.00781 11.4492 9.14844C11.7617 9.28125 12.0664 9.42969 12.3633 9.59375C13.1914 10.0391 14.0391 10.3828 14.9062 10.625C15.7734 10.8672 16.6797 10.9883 17.625 10.9883ZM17.625 15.4883C18.5938 15.4883 19.4961 15.3672 20.332 15.125C21.1758 14.875 22.0273 14.5312 22.8867 14.0938C23.0117 14.0312 23.1328 14 23.25 14C23.4531 14 23.6289 14.0742 23.7773 14.2227C23.9258 14.3711 24 14.5469 24 14.75C24 15.0312 23.8711 15.25 23.6133 15.4062C23.2227 15.6562 22.8008 15.8711 22.3477 16.0508C21.8945 16.2227 21.4453 16.375 21 16.5078V20C21 20.2109 20.9609 20.4062 20.8828 20.5859C20.8047 20.7656 20.6953 20.9258 20.5547 21.0664C20.4219 21.1992 20.2656 21.3047 20.0859 21.3828C19.9062 21.4609 19.7109 21.5 19.5 21.5H9C8.78906 21.5 8.59375 21.4609 8.41406 21.3828C8.23438 21.3047 8.07422 21.1992 7.93359 21.0664C7.80078 20.9258 7.69531 20.7656 7.61719 20.5859C7.53906 20.4062 7.5 20.2109 7.5 20V14.0703C7.3125 14.0547 7.125 14.043 6.9375 14.0352C6.75 14.0195 6.56641 14.0117 6.38672 14.0117C5.90234 14.0117 5.43359 14.043 4.98047 14.1055C4.53516 14.168 4.09375 14.2617 3.65625 14.3867C3.22656 14.5039 2.80078 14.6484 2.37891 14.8203C1.96484 14.9922 1.54297 15.1875 1.11328 15.4062C0.988281 15.4688 0.867188 15.5 0.75 15.5C0.546875 15.5 0.371094 15.4258 0.222656 15.2773C0.0742188 15.1289 0 14.9531 0 14.75C0 14.4688 0.128906 14.25 0.386719 14.0938C0.808594 13.8359 1.26172 13.6094 1.74609 13.4141C2.23047 13.2188 2.73047 13.0547 3.24609 12.9219C3.76172 12.7891 4.27734 12.6914 4.79297 12.6289C5.31641 12.5586 5.82031 12.5234 6.30469 12.5234C6.50781 12.5234 6.70703 12.5312 6.90234 12.5469C7.09766 12.5547 7.29688 12.5664 7.5 12.582V9.57031C7.3125 9.55469 7.125 9.54297 6.9375 9.53516C6.75 9.51953 6.56641 9.51172 6.38672 9.51172C5.90234 9.51172 5.43359 9.54297 4.98047 9.60547C4.53516 9.66797 4.09375 9.76172 3.65625 9.88672C3.22656 10.0039 2.80078 10.1484 2.37891 10.3203C1.96484 10.4922 1.54297 10.6875 1.11328 10.9062C0.988281 10.9688 0.867188 11 0.75 11C0.546875 11 0.371094 10.9258 0.222656 10.7773C0.0742188 10.6289 0 10.4531 0 10.25C0 9.96875 0.128906 9.75 0.386719 9.59375C0.808594 9.33594 1.26172 9.10938 1.74609 8.91406C2.23047 8.71875 2.73047 8.55469 3.24609 8.42188C3.76172 8.28906 4.27734 8.19141 4.79297 8.12891C5.31641 8.05859 5.82031 8.02344 6.30469 8.02344C6.50781 8.02344 6.70703 8.03125 6.90234 8.04688C7.09766 8.05469 7.29688 8.06641 7.5 8.08203V5.07031C7.3125 5.05469 7.125 5.04297 6.9375 5.03516C6.75 5.01953 6.56641 5.01172 6.38672 5.01172C5.90234 5.01172 5.43359 5.04297 4.98047 5.10547C4.53516 5.16797 4.09375 5.26172 3.65625 5.38672C3.22656 5.50391 2.80078 5.64844 2.37891 5.82031C1.96484 5.99219 1.54297 6.1875 1.11328 6.40625C0.988281 6.46875 0.867188 6.5 0.75 6.5C0.546875 6.5 0.371094 6.42578 0.222656 6.27734C0.0742188 6.12891 0 5.95312 0 5.75C0 5.46875 0.128906 5.25 0.386719 5.09375C0.808594 4.83594 1.26172 4.60938 1.74609 4.41406C2.23047 4.21875 2.73047 4.05469 3.24609 3.92188C3.76172 3.78906 4.27734 3.69141 4.79297 3.62891C5.31641 3.55859 5.82031 3.52344 6.30469 3.52344C6.50781 3.52344 6.70703 3.53125 6.90234 3.54688C7.09766 3.55469 7.29688 3.56641 7.5 3.58203V2C7.5 1.78906 7.53906 1.59375 7.61719 1.41406C7.69531 1.23438 7.80078 1.07812 7.93359 0.945312C8.07422 0.804688 8.23438 0.695313 8.41406 0.617188C8.59375 0.539062 8.78906 0.5 9 0.5H19.5C19.7109 0.5 19.9062 0.539062 20.0859 0.617188C20.2656 0.695313 20.4219 0.804688 20.5547 0.945312C20.6953 1.07812 20.8047 1.23438 20.8828 1.41406C20.9609 1.59375 21 1.78906 21 2V5.92578C21.3359 5.81641 21.6562 5.69141 21.9609 5.55078C22.2656 5.40234 22.5742 5.25 22.8867 5.09375C22.9492 5.0625 23.0078 5.03906 23.0625 5.02344C23.1172 5.00781 23.1797 5 23.25 5C23.4531 5 23.6289 5.07422 23.7773 5.22266C23.9258 5.37109 24 5.54688 24 5.75C24 6.03125 23.8711 6.25 23.6133 6.40625C23.1914 6.66406 22.7344 6.89453 22.2422 7.09766C21.75 7.29297 21.2422 7.46094 20.7188 7.60156C20.2031 7.73438 19.6797 7.83594 19.1484 7.90625C18.625 7.96875 18.1172 8 17.625 8C16.5469 8 15.5156 7.86328 14.5312 7.58984C13.5469 7.31641 12.582 6.92188 11.6367 6.40625C11.457 6.30469 11.2695 6.21094 11.0742 6.125C10.8867 6.03125 10.6953 5.94531 10.5 5.86719V4.26172C10.8281 4.37891 11.1445 4.50781 11.4492 4.64844C11.7617 4.78125 12.0664 4.92969 12.3633 5.09375C13.1914 5.53906 14.0391 5.88281 14.9062 6.125C15.7812 6.36719 16.6914 6.48828 17.6367 6.48828C17.9492 6.48828 18.2617 6.47656 18.5742 6.45312C18.8867 6.42187 19.1953 6.37891 19.5 6.32422V2H9V20H19.5V16.8594C18.875 16.9531 18.25 17 17.625 17C16.5469 17 15.5156 16.8633 14.5312 16.5898C13.5469 16.3164 12.582 15.9219 11.6367 15.4062C11.457 15.3047 11.2695 15.2109 11.0742 15.125C10.8867 15.0312 10.6953 14.9453 10.5 14.8672V13.2617C10.8281 13.3789 11.1445 13.5078 11.4492 13.6484C11.7617 13.7812 12.0664 13.9297 12.3633 14.0938C13.1914 14.5391 14.0391 14.8828 14.9062 15.125C15.7734 15.3672 16.6797 15.4883 17.625 15.4883Z"
    ></path>
</svg>`,b=h.d`<svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    class="inline-DS-card1-1"
>
    <path
        d="M0.528512 0.861886C0.268165 1.12224 0.268165 1.54435 0.528512 1.8047L4.72379 5.99996L0.528512 10.1952C0.268165 10.4556 0.268165 10.8777 0.528512 11.138C0.788865 11.3984 1.21097 11.3984 1.47133 11.138L6.13799 6.47136C6.39832 6.21103 6.39832 5.78889 6.13799 5.52856L1.47133 0.861886C1.21097 0.601539 0.788865 0.601539 0.528512 0.861886Z"
        fill="white"
    ></path>
</svg>`,y=h.d`${(0,p.g)((t=>1===t.mapType),h.d`<img
        class="weather-minimap-base weather-minimap-map-img"
        alt="static map image"
        src=${t=>t.minimapData.staticGreyMapLink}
    />`)}`,w=h.d`${(0,p.g)((t=>2===t.mapType),h.d`<img
        class="weather-minimap-base weather-minimap-map-img"
        alt="static map image"
        src=${t=>t.minimapData.staticMapLink}
    />`)}`,x=h.d`${(0,p.g)((t=>3===t.mapType),h.d`<img
        class="weather-minimap-base weather-minimap-map-img"
        alt="static map image"
        src=${t=>t.minimapData.staticForegroundMapLink}
    />`)}`,C=h.d`
    <a
        href="${t=>t.mapLink}"
        target=${(t,e)=>e.parent.target}
        class="minimap-tooltipbutton"
        @focus="${(t,e)=>e.parent.focusOnMinimapHandler()}"
        data-t="${t=>t.telemetryTag}"
    >
        <div
            class="${t=>!0===t.selected?"tooltipbutton-selected":""} minimap-tooltipbutton-inner"
        >
            <span
                tabindex="-1"
                role="presentation"
                aria-hidden="true"
                style="height:26px;margin-top:4px;"
            >
                ${t=>t.buttonSvg}
            </span>
        </div>
        <span class="minimap-tooltip-text">${t=>t.tooltipText}</span>
    </a>
`,$=h.d`
    <svg
        class="weather-minimap-alert"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 ${t=>{var e,i;return(null===(i=null===(e=t.minimapData)||void 0===e?void 0:e.minimapSize)||void 0===i?void 0:i.width)||"1200"}} ${t=>{var e,i;return(null===(i=null===(e=t.minimapData)||void 0===e?void 0:e.minimapSize)||void 0===i?void 0:i.height)||"400"}}"
    >
        <polygon
            points="${t=>t.minimapData.severeAlertPixelCoordinatesArray}"
            fill="${t=>t.minimapData.severeAlertColor}"
            stroke="${t=>t.minimapData.severeAlertColor}"
            stroke-width="2"
            stroke-opacity="1"
            fill-opacity="0.6"
            @mouseover="${(t,e)=>t.showAlertToolTipHandler(e.event,document.dir,t.minimapData.severeAlertTooltip)}"
            @mouseout="${(t,e)=>t.hideAlertTooltipHandler()}"
            data-t="${t=>t.minimapData.severeAlertTelemetryTag}"
        ></polygon>
    </svg>
    <div
        ${(0,g.i)("minimapAlertTooltipHtml")}
        class="weather-minimap-alert-tooltip weather-minimap-alert-tooltipstatic"
    ></div>
`,k=h.d`
    <svg>
        <polygon
            points="${t=>t.severeAlertPixelCoordinatesArray}"
            fill="${t=>t.severeAlertColor}"
            stroke="${t=>t.severeAlertColor}"
            stroke-width="2"
            stroke-opacity="1"
            fill-opacity="0.6"
            @mousemove="${(t,e)=>e.parent.showAlertToolTipHandler(e.event,document.dir,t.severeAlertTooltip,!1)}"
            @mouseout="${(t,e)=>e.parent.hideAlertTooltipHandler()}"
        ></polygon>
    </svg>
`,L=h.d`
    <svg
        ${(0,g.i)("minimapAlertSvgHtml")}
        class="weather-minimap-alert"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 ${t=>{var e,i;return(null===(i=null===(e=t.minimapData)||void 0===e?void 0:e.minimapSize)||void 0===i?void 0:i.width)||"1200"}} ${t=>{var e,i;return(null===(i=null===(e=t.minimapData)||void 0===e?void 0:e.minimapSize)||void 0===i?void 0:i.height)||"400"}}"
    >
        <g>
            ${(0,f.rx)((t=>t.minimapData.severeAlertData),k)}
        </g>
    </svg>
    <div ${(0,g.i)("minimapAlertTooltipHtml")} class="weather-minimap-alert-tooltip"></div>
`,D=h.d`${(0,p.g)((t=>3===t.renderLayerType),h.d`<img
            class="weather-minimap-base"
            alt="hurricane map image"
            src=${t=>t.minimapData.hurricaneData.imgUrl}
        />
        <div class="weather-minimap-infopane">
            <div class="weather-minimap-infopane-icon">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.22292 4.30769C5.05818 1.84615 8.72871 0 14.2345 0C14.0408 0.0974195 13.8318 0.194839 13.6123 0.297141L13.6123 0.297152C12.6483 0.746446 11.4822 1.28992 10.5252 2.34121C12.7068 3.28167 14.2351 5.46137 14.2351 8.00013C14.2351 9.43699 13.7456 10.7588 12.9251 11.8061C11.0623 14.2105 7.42063 16 2 16C2.19369 15.9026 2.4027 15.8052 2.6222 15.7029L2.62223 15.7029C3.58623 15.2536 4.75231 14.7101 5.70929 13.6588C3.52802 12.7182 2.00002 10.5387 2.00002 8.00013C2.00002 6.61477 2.45509 5.33633 3.22308 4.30782L3.22322 4.30763L3.22292 4.30769ZM8.14474 10.5457C9.54226 10.5457 10.6752 9.40602 10.6752 8.00021C10.6752 6.59439 9.54226 5.45475 8.14474 5.45475C6.74722 5.45475 5.6143 6.59439 5.6143 8.00021C5.6143 9.40602 6.74722 10.5457 8.14474 10.5457Z"
                        fill="#E74C3C"
                    />
                </svg>
            </div>
            <div class="weather-minimap-infopane-text">
                ${t=>t.minimapData.hurricaneData.title}
            </div>
        </div>`)}`,S=h.d`${(0,p.g)((t=>4===t.renderLayerType),h.d` <div class="weather-minimap-tiles-layer">
        <div
            class="weather-minimap-tiles-group"
            style="left: ${t=>t.minimapData.tilesInfo.offset[0]}px; top: ${t=>t.minimapData.tilesInfo.offset[1]}px; opacity: ${t=>2===t.mapType?"0.7":"1"}"
        >
            ${(0,f.rx)((t=>t.minimapData.tilesInfo.tilesSequence||[]),h.d`
                    <div
                        tabindex="-1"
                        class="weather-minimap-tiles-container ${(t,e)=>e.index===(e.parent.activeTilesIndex||0)?"weather-minimap-tiles-container-visible":""}"
                        style="grid-template-columns: repeat(${(t,e)=>e.parent.minimapData.tilesInfo.col}, 1fr)"
                    >
                        ${(0,f.rx)((t=>t),h.d`
                                <img
                                    class="weather-minimap-tiles-image"
                                    width="${(t,e)=>e.parent.tileSize}"
                                    height="${(t,e)=>e.parent.tileSize}"
                                    src="${t=>t}"
                                />
                            `)}
                    </div>
                `,{positioning:!0})}
        </div>
    </div>`)}`,T=h.d`${(0,p.g)((t=>1===t.renderLayerType),h.d` <img
        class="weather-minimap-base weather-minimap weather-minimap-map-img"
        alt="temperature image"
        src=${t=>t.minimapData.weatherMinimapLink}
    />`)}`,F=h.d`${(0,p.g)((t=>2===t.renderLayerType),h.d`
        <div class="weather-minimap-base">
            ${(0,p.g)((t=>!t.minimapData.severeAlertData||!t.minimapData.severeAlertData.length),$)}
            ${(0,p.g)((t=>t.minimapData.severeAlertData&&t.minimapData.severeAlertData.length),L)}
        </div>
    `)}`,I=h.d`${(0,p.g)((t=>3!==t.renderLayerType),h.d`
        <div class="weather-minimap-pin">
            <div class="weather-minimap-pin-inner"></div>
        </div>
    `)}`,O=h.d`${(0,p.g)((t=>t.showGroupButtons()),h.d` <div class="weather-minimap-buttons-container">
        <div class="weather-minimap-buttons-group">
            ${(0,f.rx)((t=>t.minimapData.minimapButtons),C)}
        </div>
    </div>`)}`,H=h.d`${(0,p.g)((t=>t.showExpandButton()),h.d`
<a  href=${t=>t.defaultMapPageUrl}
    target=${t=>t.target}
    data-t="${t=>t.minimapTelemetryTag}"
    @focus="${(t,e)=>t.focusOnMinimapHandler()}"
    class="weather-minimap-expand">
    <span tabindex="-1">
        <span class="weather-minimap-expand-button">${t=>t.minimapData.minimapTooltip}</span><span role="presentation" aria-hidden="true" style="margin:1px">
        <svg
        width="16"
        height="16"
        viewBox="0 0 17 15">
            <path d="M15.0059 6C15.0059 6.55228 14.5581 7 14.0059 7C13.4536 7 13.0059 6.55228 13.0059 6V4.414L4.41986 13H6.00586C6.55814 13 7.00586 13.4477 7.00586 14C7.00586 14.5523 6.55814 15 6.00586 15H1.75586C1.34165 15 1.00586 14.6642 1.00586 14.25V10C1.00586 9.44771 1.45357 9 2.00586 9C2.55814 9 3.00586 9.44771 3.00586 10V11.586L11.5919 3H10.0059C9.45357 3 9.00586 2.55228 9.00586 2C9.00586 1.44772 9.45357 1 10.0059 1H14.2559C14.6701 1 15.0059 1.33579 15.0059 1.75V6Z"></path>
        </svg>
    </span>
</a>`)}`,R=h.d`${(0,p.g)((t=>t.minimapData.tilesInfo&&t.minimapData.tilesInfo.timestamps&&t.minimapData.tilesInfo.timestamps[t.activeTilesIndex]),h.d`
        ${(0,p.g)((t=>2===t.mapType),h.d`<div class="weather-minimap-tiles-time-mask"></div>`)}
        <div class="weather-minimap-tiles-time">
            ${t=>t.minimapData.tilesInfo.timestamps[t.activeTilesIndex]}
        </div>
    `)}`,M=h.d`${(0,p.g)((t=>t.showInfoPane()),h.d`
        <div class="weather-minimap-infopane">
            ${(0,p.g)((t=>t.minimapData.weatherLayerType===n.p0.Precipitation&&!t.minimapData.infoPane.icon),h.d`<div class="weather-minimap-infopane-icon">
                    ${v}
                </div>`)}
            ${(0,p.g)((t=>t.minimapData.weatherLayerType===n.p0.AQI&&!t.minimapData.infoPane.icon),h.d`<div class="weather-minimap-infopane-icon">
                    ${m}
                </div>`)}
            ${(0,p.g)((t=>t.minimapData.infoPane.icon),h.d`<div class="weather-minimap-infopane-icon">
                    ${t=>t.minimapData.infoPane.icon}
                </div>`)}
            <div class="weather-minimap-infopane-text">
                ${t=>t.minimapData.infoPane.text}
            </div>
            <div class="weather-minimap-infopane-arrow">${b}</div>
        </div>
    `)}`,P=h.d` ${(0,p.g)((t=>t.minimapData),h.d`
        <div class="weather-minimap-container">
            <a
                class="weather-minimap-link"
                href=${t=>t.getMapPageUrl()}
                target=${t=>t.target}
                data-t="${t=>t.minimapTelemetryTag}"
            >
                ${y} ${w}
                ${T} ${S}
                ${F} ${D}
                ${x} ${M}
            </a>
            ${O} ${H}
            ${R} ${I}
        </div>
    `)}`,A=n.Ib.compose({baseName:"weather-minimap",template:P,styles:(t,e)=>s.i`
        .weather-minimap-container {
            width: 100%;
            height: 100%;
            border: 0px;
            cursor: pointer;
        }

        .weather-minimap-link {
            display: block;
            height: 100%;
        }

        .weather-minimap-base {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 100% !important;
            width: 100%;
            object-fit: cover;
            transform: translate(-50%, -50%);
            border-radius: calc(${o.UWU} * 1px);
        }

        .weather-minimap-map-img {
            pointer-events: none;
        }

        .weather-minimap-alert {
            cursor: pointer;
            height: 100%;
            width: 100%;
        }

        .weather-minimap-alert-tooltip {
            display: none;
            position: absolute;
            cursor: pointer;
            overflow: hidden;
            border-radius: calc(${o.UWU} * 3px);
            font-size: 13px;
            pointer-events: none;
            white-space: nowrap;
            --elevation: 4;
            ${r.XC}
            padding: 6px;
            top: 50%;
            transform: translate(0%, -100%);
        }

        .weather-minimap-alert-tooltip {
            background-color: #ffffff;
            color: #444444;
        }

        .weather-minimap-pin {
            position: absolute;
            box-sizing: border-box;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            overflow: visible;
            background: #ffd02e;
            border: 3px solid #fff;
            box-shadow: 0px 0px 10px rgb(0 0 0 / 40%);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .weather-minimap-pin-inner {
            width: 12px;
            height: 12px;
            min-width: 12px;
            border-radius: 50%;
            box-shadow: 0px 0px 3px 3px #fffc;
            opacity: 0;
            animation-name: location-pin-border;
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }

        @keyframes location-pin-border {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 0.8;
            }
            100% {
                opacity: 0;
            }
        }

        .weather-minimap {
            opacity: 0.55;
        }

        .weather-minimap-buttons-container {
            position: absolute;
            border: 0px;
            top: 12px;
        }

        .weather-minimap-buttons-group {
            width: 24px;
            border-radius: 3px;
            padding: 1px;
            background-color: #ffffff;
            --elevation: 4;
            ${r.XC}
            animation: delayFadeIn ease 0.8s;
        }

        .minimap-tooltipbutton {
            position: relative;
            display: inline-block;
            border-radius: 1px;
            border: 0px;
        }

        .tooltipbutton-selected {
            background-color: #ffd02c;
        }

        .minimap-tooltipbutton-inner {
            width: 22px;
            height: 26px;
            padding: 0px;
            overflow: visible;
            margin: 1px;
            border: 0px;
            outline: none;
            border-radius: 3px;
            cursor: pointer;
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .minimap-tooltip-text::before {
            content: "";
            position: absolute;
            top: 0px;
            margin-top: 6px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent #ffd02c transparent transparent;
        }

        .minimap-tooltip-text {
            visibility: hidden;
            background-color: #ffd02c;
            color: #666666;
            font-size: ${o.sNp};
            line-height: ${o.vgC};
            text-align: center;
            border-radius: 1px;
            padding: 3px 4px;
            position: absolute;
            white-space: nowrap;
            z-index: 600;
            border-radius: 3px;
            top: 3px;
        }

        .minimap-tooltipbutton:hover .minimap-tooltipbutton-inner {
            background-color: #ffd02c;
        }

        .minimap-tooltipbutton:focus .minimap-tooltipbutton-inner {
            background-color: #ffd02c;
        }

        .minimap-tooltipbutton:hover .minimap-tooltip-text {
            visibility: visible;
        }

        .minimap-tooltipbutton:focus .minimap-tooltip-text {
            visibility: visible;
        }

        .weather-minimap-expand {
            position: absolute;
            display: inline-flex;
            width: -webkit-fit-content;
            bottom: 12px;
            border-radius: calc(${o.UWU} * 2px);
            background: #ffffff;
            cursor: pointer;
            animation: delayFadeIn ease 0.8s;
            text-decoration: none;
        }

        .weather-minimap-expand > span:first-child {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            outline: none;
        }

        .weather-minimap-expand-button {
            font-style: normal;
            font-weight: 500;
            font-size: ${o.sNp};
            line-height: ${o.b3W};
            text-align: center;
            width: -webkit-fit-content;
            color: #666666;
            z-index: 1;
            padding: 0 10px;
        }

        .weather-minimap-infopane {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 6px 12px;
            display: flex;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(3px);
            color: #ffffff;
            font-size: 12px;
            line-height: 20px;
            border-radius: 0 0 4px 4px;
        }
        .weather-minimap-infopane:hover .weather-minimap-infopane-text {
            text-decoration: underline;
        }
        .weather-minimap-infopane:hover .weather-minimap-infopane-arrow {
            stroke: white;
        }

        .weather-minimap-infopane-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 16px;
            height: 16px;
        }

        .weather-minimap-infopane-text {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: keep-all;
        }

        .weather-minimap-infopane-arrow {
            position: relative;
        }

        .weather-minimap-tiles-layer {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }

        .weather-minimap-tiles-group {
            position: absolute;
            pointer-events: none;
        }
        .weather-minimap-tiles-container {
            position: absolute;
            top: 0;
            left: 0;
            display: grid;
            visibility: hidden;
        }
        .weather-minimap-tiles-container-visible {
            visibility: visible;
        }
        .weather-minimap-tiles-image {
            display: block;
            margin-top: -1px;
            margin-left: -1px;
        }
        .weather-minimap-tiles-time {
            position: absolute;
            top: 4px;
            color: #ffffff;
            line-height: 14px;
            text-shadow: -1px -1px 0 rgb(0 0 0 / 45%), 1px -1px 0 rgb(0 0 0 / 45%),
                -1px 1px 0 rgb(0 0 0 / 45%), 1px 1px 0 rgb(0 0 0 / 45%);
        }
        .weather-minimap-tiles-time-mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.3) 21.57%,
                rgba(196, 196, 196, 0) 88.24%
            );
        }
    `.withBehaviors(new a.O(d,u),(0,l.vF)(s.i`
                :host {
                    forced-color-adjust: auto;
                }
                .minimap-tooltipbutton svg,
                .weather-minimap-expand svg {
                    opacity: 1;
                    fill: ${c.H.ButtonText};
                }
                .minimap-tooltipbutton-inner {
                    border-radius: calc(var(--control-corner-radius) * 1px);
                }
                .minimap-tooltipbutton:hover .minimap-tooltipbutton-inner,
                .tooltipbutton-selected {
                    background-color: ${c.H.Highlight};
                }
                .minimap-tooltipbutton:hover .minimap-tooltipbutton-inner svg,
                .tooltipbutton-selected svg {
                    fill: ${c.H.HighlightText};
                }
                .minimap-tooltip-text {
                    background-color: ${c.H.ButtonFace};
                    color: ${c.H.ButtonText};
                }
                .minimap-tooltip-text::before {
                    border-color: transparent ${c.H.ButtonFace} transparent
                        transparent;
                }
            `))})},92303:function(t,e,i){"use strict";i.d(e,{Ib:function(){return l},p0:function(){return u}});var n=i(33940),o=i(12968),r=i(65620),a=i(87697),s=i(48839);class l extends s.I{constructor(){super(...arguments),this.activeTilesIndex=0,this.pendingTooltipReposition=!1}focusOnMinimapHandler(){this.$emit("focusmap")}get renderLayerType(){return this._renderLayerType||(this._renderLayerType=this.updateRenderLayerType()),this._renderLayerType}get mapType(){return this.minimapData.weatherLayerType!==u.AQI&&1!==this.renderLayerType||!this.minimapData.staticForegroundMapLink?this.minimapData.staticMapLink?2:1:3}showInfoPane(){return!!(this.minimapData&&this.minimapData.infoPane&&this.minimapData.infoPane.text)}showGroupButtons(){return!(!this.minimapData.minimapButtons||!this.minimapData.minimapButtons.length||this.showInfoPane())&&(3===this.renderLayerType||2===this.renderLayerType?!!this.minimapData.enableButtonBar:!this.minimapData.enableButtonBar)}showExpandButton(){return!this.showInfoPane()&&(3===this.renderLayerType||2===this.renderLayerType?!!this.minimapData.enableExpandButton:!this.minimapData.enableExpandButton)}severeWeatherValidate(){return!!this.minimapData.severeAlertTooltip&&!!this.minimapData.severeAlertColor&&!!this.minimapData.severeAlertPixelCoordinatesArray||!!this.minimapData.severeAlertData&&this.minimapData.severeAlertData.length>0}hurricaneValidate(){return!!this.minimapData.hurricaneData}tilesValidate(){return!!this.minimapData.tilesInfo}getMapPageUrl(){var t;return(null===(t=this.minimapData.hurricaneData)||void 0===t?void 0:t.destUrl)||this.defaultMapPageUrl}showAlertToolTipHandler(t,e,i,n=!0){i&&this.minimapAlertTooltipHtml&&(this.minimapAlertTooltipHtml.innerHTML=i,this.minimapAlertTooltipHtml.style.display="block",n||this.pendingTooltipReposition||(this.pendingTooltipReposition=!0,o.SO.queueUpdate((()=>this.updateAlertTooltipPosition(t,e,i)))))}updateAlertTooltipPosition(t,e,i){if(this.minimapAlertSvgHtml&&this.minimapAlertTooltipHtml){const n=6*i.length+12,o=32,r=this.minimapAlertSvgHtml.getBoundingClientRect(),a=r.right-r.left,s=r.bottom-r.top,l=s/2*-1,c=t.clientY-r.top-s/2-o-5,d="rtl"!=e?a-n:0,u="rtl"!=e?0:-1*(a-n),h="rtl"!=e?t.clientX-r.left-n/2:t.clientX-r.left-a+n/2;this.minimapAlertTooltipHtml.style.transform=`translateX(${Math.min(Math.max(u,h),d)}px) translateY(${Math.max(l,c)}px)`,this.pendingTooltipReposition=!1}}hideAlertTooltipHandler(){this.minimapAlertTooltipHtml&&(this.minimapAlertTooltipHtml.style.display="none")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this.tilesTimer&&clearInterval(this.tilesTimer)}minimapDataChanged(){this._renderLayerType=this.updateRenderLayerType(),this.tilesTimer&&clearInterval(this.tilesTimer),this.minimapData&&this.minimapData.tilesInfo&&this.minimapData.tilesInfo.tilesSequence&&this.minimapData.tilesInfo.tilesSequence.length>1&&(this.tilesTimer=setInterval((()=>{let t=this.activeTilesIndex+1;t%=this.minimapData.tilesInfo.tilesSequence.length,this.activeTilesIndex=t}),this.minimapData.tilesInfo.animationInterval||1e3))}layerValidate(t){switch(t){case 2:return this.severeWeatherValidate();case 3:return this.hurricaneValidate();case 4:return this.tilesValidate();default:return!0}}updateRenderLayerType(){if(!this.minimapData.weatherLayerType)return this.hurricaneValidate()?3:this.severeWeatherValidate()?2:1;let t=1;switch(this.minimapData.weatherLayerType){case u.SevereWeather:t=2;break;case u.Hurricane:t=3;break;case u.AQI:case u.Precipitation:t=4;break;case u.Temperature:default:return 1}return this.layerValidate(t)?t:1}}var c,d,u;(0,n.gn)([r.Lj],l.prototype,"target",void 0),(0,n.gn)([r.Lj],l.prototype,"minimapTelemetryTag",void 0),(0,n.gn)([r.Lj],l.prototype,"defaultMapPageUrl",void 0),(0,n.gn)([r.Lj],l.prototype,"activeTilesIndex",void 0),(0,n.gn)([a.LO],l.prototype,"minimapData",void 0),function(t){t[t.Grey=1]="Grey",t[t.Background=2]="Background",t[t.Foreground=3]="Foreground"}(c||(c={})),function(t){t[t.Temperature=1]="Temperature",t[t.SevereWeather=2]="SevereWeather",t[t.Hurricane=3]="Hurricane",t[t.Tiles=4]="Tiles"}(d||(d={})),function(t){t[t.Temperature=1]="Temperature",t[t.SevereWeather=2]="SevereWeather",t[t.Hurricane=3]="Hurricane",t[t.AQI=4]="AQI",t[t.Precipitation=5]="Precipitation"}(u||(u={}))},91675:function(t,e,i){"use strict";i.d(e,{AS:function(){return f}});var n=i(88516),o=i(56201),r=i(40082),a=i(26755),s=i(53046),l=i(15933),c=i(13543);var d=i(39181),u=i(13988),h=i(18864);const p="https://assets.msn.com/weathermapdata/1/static/timeline/rainfall_blue.svg",g="https://assets.msn.com/weathermapdata/1/static/timeline/snowfall_blue.svg",f=n.e.compose({baseName:"weather-nowcast",template:(t,e)=>d.d`${(0,u.g)((t=>t.nowcastData),d.d` <fluent-anchor
            class="weatherNowcastContainer"
            href="${t=>t.href}"
            target="${t=>t.target}"
            tabindex="-1"
            style="width: ${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.width)||"268"}}px;"
            data-t="${t=>t.telemetryTag}"
        >
            <svg
                class="nowcastChart"
                role="img"
                viewBox="0 0 ${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.width)||"268"}} ${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.height)||"136"}}"
                width="${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.width)||"268"}}"
                height="${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.width)||"136"}}"
                style="width: ${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.width)||"268"}}px; height:${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.height)||"136"}}px;"
            >
                ${t=>t.constructClipRects()}
                <g class="startStopLines">
                    ${(0,h.rx)((t=>[...Array(t.nowcastData.dashlineXIndexes.length/2).keys()]),d.d` <svg>
                            <line
                                x1="${(t,e)=>e.parent.nowcastData.dashlineXIndexes[2*t]}"
                                x2="${(t,e)=>e.parent.nowcastData.dashlineXIndexes[2*t+1]}"
                                y1="${(t,e)=>{var i,n;return(null===(n=null===(i=e.parent.nowcastData)||void 0===i?void 0:i.cardSize)||void 0===n?void 0:n.offsetTopTimelineLabel)||25}}"
                                y2="${(t,e)=>{var i,n;return((null===(n=null===(i=e.parent.nowcastData)||void 0===i?void 0:i.cardSize)||void 0===n?void 0:n.offsetTopTimelineLabel)||25)+75}}"
                                class="stroke05"
                                stroke-dasharray="3 3"
                            />
                        </svg>`)}
                </g>
                <g class="timelineChannel">
                    <!-- 4 horizontal lines -->
                    <line
                        x1="${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||"49"}}"
                        y1="${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||"25"}}"
                        x2="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)||"241"}}"
                        y2="${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||"25"}}"
                        class="stroke03"
                    ></line>
                    <line
                        x1="${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||"49"}}"
                        y1="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+25}}"
                        x2="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)||"241"}}"
                        y2="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+25}}"
                        class="stroke03"
                    ></line>
                    <line
                        x1="${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||"49"}}"
                        y1="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+50}}"
                        x2="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)||"241"}}"
                        y2="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+50}}"
                        class="stroke03"
                    ></line>
                    <line
                        x1="${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||"49"}}"
                        y1="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+75}}"
                        x2="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)||"241"}}"
                        y2="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+75}}"
                        class="stroke1"
                    ></line>

                    <!-- timeline markers -->
                    <line
                        x1="${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||"49"}}"
                        y1="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+78}}"
                        x2="${t=>{var e,i;return(null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||"49"}}"
                        y2="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+84}}"
                        class="stroke03"
                    ></line>
                    <line
                        x1="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)/6}}"
                        y1="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+78}}"
                        x2="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)/6}}"
                        y2="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+82}}"
                        class="stroke03"
                    ></line>
                    <line
                        x1="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)/6*2}}"
                        y1="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+78}}"
                        x2="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)/6*2}}"
                        y2="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+82}}"
                        class="stroke03"
                    ></line>
                    <line
                        x1="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)/6*3}}"
                        y1="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+78}}"
                        x2="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)/6*3}}"
                        y2="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+84}}"
                        class="stroke03"
                    ></line>
                    <line
                        x1="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)/6*4}}"
                        y1="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+78}}"
                        x2="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)/6*4}}"
                        y2="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+82}}"
                        class="stroke03"
                    ></line>
                    <line
                        x1="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)/6*5}}"
                        y1="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+78}}"
                        x2="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)/6*5}}"
                        y2="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+82}}"
                        class="stroke03"
                    ></line>
                    <line
                        x1="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||193)}}"
                        y1="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+78}}"
                        x2="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||193)}}"
                        y2="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+84}}"
                        class="stroke03"
                    ></line>
                </g>
                <g class="timelineLabels">
                    <text
                        x="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)-1}}"
                        y="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+100}}"
                    >
                        ${t=>t.nowcastData.timestamps&&t.nowcastData.timestamps[0]}
                    </text>
                    <text
                        x="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)/2-1}}"
                        y="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+100}}"
                    >
                        ${t=>t.nowcastData.timestamps&&t.nowcastData.timestamps[1]}
                    </text>
                    <text
                        x="${t=>{var e,i,n,o;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)+((null===(o=null===(n=t.nowcastData)||void 0===n?void 0:n.cardSize)||void 0===o?void 0:o.curveWidth)||192)}}"
                        y="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+100}}"
                    >
                        ${t=>t.nowcastData.timestamps&&t.nowcastData.timestamps[2]}
                    </text>
                </g>
                <g class="labels">
                    <!-- light region -->
                    <image
                        x="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)-25.5}}"
                        y="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+59.5}}"
                        href="${t=>t.nowcastData.precipitationType!==n.H.Snow?p:g}"
                    ></image>
                    <!-- middle rain region -->
                    <image
                        x="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)-29.5}}"
                        y="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+34.5}}"
                        href="${t=>t.nowcastData.precipitationType!==n.H.Snow?p:g}"
                    ></image>
                    <image
                        x="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)-21.5}}"
                        y="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+34.5}}"
                        href="${t=>t.nowcastData.precipitationType===n.H.Rain?p:g}"
                    ></image>
                    <!-- heavy rain region -->
                    <image
                        x="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)-33.5}}"
                        y="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+9.5}}"
                        href="${t=>t.nowcastData.precipitationType!==n.H.Snow?p:g}"
                    ></image>
                    <image
                        x="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)-25.5}}"
                        y="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+9.5}}"
                        href="${t=>t.nowcastData.precipitationType===n.H.Rain?p:g}"
                    ></image>
                    <image
                        x="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.paddingLeft)||49)-17.5}}"
                        y="${t=>{var e,i;return((null===(i=null===(e=t.nowcastData)||void 0===e?void 0:e.cardSize)||void 0===i?void 0:i.offsetTopTimelineLabel)||25)+9.5}}"
                        href="${t=>t.nowcastData.precipitationType!==n.H.Snow?p:g}"
                    ></image>
                </g>
                <g class="rainCurve">
                    <path
                        d="${t=>t.nowcastData.curvePath}"
                        id="rain-curve"
                        clip-path="url(#${t=>t.nowcastData.clipId})"
                    />
                </g>
            </svg>
        </fluent-anchor>`)}`,styles:(t,e)=>s.i`
    ${c.U}
    .weatherNowcastContainer {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 6px;
        height: 100%;
        overflow: hidden;
    }

    .timelineLabels {
        font-size: 12px;
        line-height: 20px;
        text-shadow: 1px 1px 2px rgb(0 0 0 / 20%);
        fill: currentcolor;
        text-anchor: middle;
    }

    .stroke03 {
        stroke: rgba(255, 255, 255, 0.3);
        stroke-width: 1;
    }

    :host([background="light"]) .stroke03 {
        stroke: ${a.akT};
    }

    .stroke05 {
        stroke: rgba(255, 255, 255, 0.5);
    }

    :host([background="light"]) .stroke05 {
        stroke: ${a.akT};
    }

    .stroke1 {
        stroke: currentcolor;
    }

    .rainCurve {
        fill: rgba(255, 255, 255, 0.15);
        stroke: rgb(98, 178, 239);
        stroke-width: 1;
    }

    :host([background="light"]) .rainCurve {
        fill: rgba(170, 227, 255, 0.3);
    }

    ::slotted(fluent-anchor:hover),
    ::slotted(fluent-anchor:active),
    ::slotted(fluent-anchor:${o.b}) {
        background: ${a.QpD};
    }
`.withBehaviors((0,r.vF)(s.i`
            :host {
                forced-color-adjust: auto;
            }

            .timelineLabels {
                fill: ${l.H.ButtonText};
            }

            .stroke1,
            .stroke03,
            .stroke05 {
                stroke: ${l.H.GrayText};
            }

            .rainCurve {
                stroke: ${l.H.ButtonText};
            }
        `))})},88516:function(t,e,i){"use strict";i.d(e,{H:function(){return n},e:function(){return c}});var n,o=i(33940),r=i(39181),a=i(87697),s=i(65620),l=i(48839);!function(t){t[t.Rain=0]="Rain",t[t.Snow=1]="Snow",t[t.Sleet=2]="Sleet",t[t.NoRain=255]="NoRain"}(n||(n={}));class c extends l.I{connectedCallback(){super.connectedCallback()}constructClipRects(){let t=`<svg><defs><clipPath id="${this.nowcastData.clipId}">`;for(let e=0;e<this.nowcastData.clips.length;e+=4)t=`${t}<rect x="${this.nowcastData.clips[e]}" y="25"\n                           width="${this.nowcastData.clips[e+2]}" height="75"></rect>`;return r.d`${t}</clipPath></defs></svg>`}}(0,o.gn)([a.LO],c.prototype,"nowcastData",void 0),(0,o.gn)([s.Lj],c.prototype,"target",void 0),(0,o.gn)([s.Lj],c.prototype,"telemetryTag",void 0),(0,o.gn)([s.Lj],c.prototype,"href",void 0),(0,o.gn)([s.Lj],c.prototype,"background",void 0)},14676:function(t,e,i){"use strict";i.d(e,{O8:function(){return O}});var n=i(38637),o=i(26755),r=i(22674),a=i(67020),s=i(56201),l=i(40082),c=i(13543),d=i(15933),u=i(53046);const h=u.i`
    :host([layout="half"]) .setting-suggest-list {
        left: 12px;
    }
    :host([layout="small"]) .setting-suggest-list {
        left: 12px;
    }

    :host([layout="full"]) .setting-suggest-list {
        left: 16px;
    }

    :host([layout="medium"]) .setting-suggest-list {
        left: 16px;
    }

    :host([layout="large"]) .setting-suggest-list {
        left: 24px;
    }
`,p=u.i`
    :host([layout="half"]) .setting-suggest-list {
        right: 12px;
    }
    :host([layout="small"]) .setting-suggest-list {
        right: 12px;
    }

    :host([layout="full"]) .setting-suggest-list {
        right: 16px;
    }

    :host([layout="medium"]) .setting-suggest-list {
        right: 16px;
    }
    :host([layout="large"]) .setting-suggest-list {
        right: 24px;
    }
`,g=(t,e)=>u.i`
    ${c.U}
    ${(0,a.j)("flex")} :host {
        position: relative;
        width: auto;
        height: 100%;
        box-sizing: border-box;
        font-family: ${o.SVJ};
        flex-direction: column;
        outline: none;
    }

    .setting-container {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: calc(${o.UWU} * 2px);
        height: 100%;
    }

    :host([layout="half"]) .setting-container {
        padding: 6px 12px;
    }

    :host([layout="small"]) .setting-container {
        padding: 6px 12px;
    }

    :host([layout="half"]):host([locationModeV2="true"]) .setting-container {
        padding: 12px;
    }

    :host([layout="full"]) .setting-container {
        padding: 16px;
    }

    :host([layout="medium"]) .setting-container {
        padding: 16px;
    }

    :host([layout="large"]) .setting-container {
        padding: 55px 24px 24px;
    }

    .setting-area {
        height: 176px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .setting-edit {
        font-weight: 500;
        font-size: ${o.sNp};
        line-height: ${o.vgC};
        display: flex;
        align-items: center;
        letter-spacing: 0.7px;
        text-transform: uppercase;
        color: ${o.Q5n};
    }

    .setting-auto-suggest {
        position: relative;
    }

    .setting-location-v2 {
        display: flex;
        flex-direction: column;
    }

    .specify-location-label {
        width: 100%;
        height: 19px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: ${o.cSu};
        line-height: ${o.RUt};
        font-weight: 500;
    }

    :host([layout="half"]) .specify-location-label {
        margin-bottom: 4px;
    }
    :host([layout="small"]) .specify-location-label {
        margin-bottom: 4px;
    }

    .specify-location-label {
        margin-bottom: 12px;
    }
    .detect-location-icon {
        vertical-align: middle;
        border: none;
    }
    .detect-location-text {
        color: ${o.goi};
    }
    .detect-location-label {
        height: 16px;
        font-size: ${o.sNp};
        line-height: ${o.vgC};
        margin-top: 4px;
        text-decoration: none;
        background: transparent;
        padding: 0;
        max-width: fit-content;
    }
    .detect-location-label:hover,
    .detect-location-label:active,
    .detect-location-label:${s.b} {
        outline: 1px solid
    }

    .detect-location-label::part(control) {
        padding: 0;
        border: none;
    }

    .setting-location-textaction {
        margin: 0;
        height: 32px;
        width: 100%;
        border: 1px solid #949494;
        border-radius: 2px;
        display: flex;
        position: relative;
    }
    .setting-location-textaction.focused:after {
        content: " ";
        height: 2px;
        width: 100%;
        background: ${o.UEO};
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
    }

    .setting-location-icon {
        margin: 6px;
        fill: currentcolor;
    }

    .setting-location-input {
        height: calc(100% - 4px);
        margin: 2px 1px;
        flex: 1 0 0px;
        background: transparent;
        min-width: inherit;
        width: 100%;
        padding: 0 5px;
        border: none;
        outline: none;
        color: ${o.CHi};
    }
    .setting-location-input-alert {
        display: flex;
        align-items: center;
        height: 100%;
        margin: 0 5px;
        fill: #DC3435;
    }
    .setting-location-input-clear {
        background: none;
        border: none;
        display: flex;
        align-items: center;
        height: 100%;
        margin: 0 5px;
        fill: ${o.CHi};
        cursor: pointer;
    }

    .detect-location-icon path {
        fill: ${o.goi};
    }

    .setting-location-input:disabled {
        background: ${o.wFS};
        opacity: ${o.VFZ};
    }

    :host([layout="half"]) .setting-suggest-list {
        top: 100px;
        width: 276px;
    }

    :host([layout="full"]) .setting-suggest-list {
        top: 150px;
        width: 268px;
    }

    :host([layout="full"]):host([cardType="greeting"]) .setting-suggest-list {
        top: 128px;
    }

    :host([layout="half"]):host([locationModeV2="true"]) .setting-suggest-list {
        top: 70px;
        width: 276px;
    }

    :host([layout="full"]):host([locationModeV2="true"]) .setting-suggest-list {
        top: 122px;
        width: 268px;
    }
    :host([layout="medium"]):host([locationModeV2="true"]) .setting-suggest-list {
        top: 113px;
        width: 268px;
    }
    :host([layout="large"]):host([locationModeV2="true"]) .setting-suggest-list {
        top: 120px;
        width: 252px;
    }

    :host([layout="half"]):host([locationModeV2="v3"]) .setting-suggest-list {
        top: 60px;
        width: 276px;
    }

    :host([layout="small"]):host([locationModeV2="v3"]) .setting-suggest-list {
        top: 60px;
        width: 276px;
    }

    :host([layout="full"]):host([locationModeV2="v3"]) .setting-suggest-list {
        top: 129px;
        width: 268px;
    }

    :host([layout="full"]):host([cardType="greeting"]):host([locationModeV2="true"]) .setting-suggest-list {
        top: 100px;
    }
    :host([layout="full"]):host([cardType="greeting"]):host([locationModeV2="v3"]) .setting-suggest-list {
        top: 111px;
    }
    :host([layout="full"]):host([cardType="greeting"]) .setting-container {
        padding-bottom: 8px;
        height: 206px;
    }

    :host([layout="full"]):host([cardType="greeting"]) .setting-edit {
        padding-bottom: 8px;
        color: ${o.CHi};
    }

    :host([layout="full"]):host([cardType="greeting"]) .specify-location-label {
        margin-bottom: 8px;
        color: ${o.CHi};
    }

    :host([layout="full"]):host([cardType="greeting"]) .detect-location-label {
        margin-bottom: 12px;
    }

    .setting-suggest-list {
        display: block;
        position: absolute;
        list-style: none;
        background: ${o.wFS};
        border: 1px solid;
        border-radius: 2px;
        margin: 0;
        padding: 0;
        z-index: 99;
        outline: none;
        border-color: ${o.akT};
    }

    .setting-suggest-text {
        text-overflow: ellipsis;
        word-wrap: break-word;
        padding: 5px;
        cursor: pointer;
        font-size: ${o.sNp};
        line-height: ${o.vgC};
        overflow: hidden;
    }

    .setting-suggest-first-line {
        font-size: ${o.PwC};
        line-height: ${o.b3W};
        color: ${o.CHi}
    }

    .setting-suggest-second-line {
        font-size: ${o.sNp};
        line-height: ${o.vgC};
        color: ${o.Q5n}
    }

    .setting-suggest-text:hover {
        background: ${o.XiB};
    }

    .setting-suggest-text-h {
        background: ${o.XiB};
    }

    .setting-unit-title {
        font-weight: 500;
        font-size: ${o.sNp};
        line-height: ${o.vgC};
        align-items: center;
        letter-spacing: 0.7px;
        text-transform: uppercase;
        color: ${o.CHi};
    }

    .setting-save-button,
    .setting-cancel-button {
        min-width: 80px;
        align-self: center;
    }
`.withBehaviors(new r.O(h,p),(0,l.vF)(u.i`
                :host {
                    forced-color-adjust: auto;
                    color: ${d.H.ButtonText};
                }
                .detect-location-text {
                    color: ${d.H.ButtonText};
                }
                .detect-location-text-option {
                    color: ${d.H.Highlight};
                }
                .detect-location-icon path {
                    opacity: 1;
                    fill: ${d.H.Highlight};
                }
                .detect-location-label:hover span,
                .detect-location-label:${s.b} span,
                .setting-suggest-text:hover span {
                    color: ${d.H.HighlightText};
                }
                .detect-location-label:hover path,
                .detect-location-label:${s.b} path,
                .setting-suggest-text:hover path {
                    fill: ${d.H.HighlightText};
                }
                .detect-location-label {
                    outline: 1px solid;
                }
                .setting-suggest-list {
                    background: ${d.H.ButtonFace};
                    border-color: ${d.H.CanvasText};
                }
                .setting-suggest-item {
                    background: ${d.H.ButtonFace};
                }
                .setting-suggest-text:hover {
                    forced-color-adjust: none;
                    background: ${d.H.Highlight};
                    color: ${d.H.HighlightText};
                }
                .setting-suggest-text:hover .detect-location-icon path {
                    fill: ${d.H.HighlightText};
                }
                .setting-suggest-text:hover .detect-location-text-option {
                    color: ${d.H.HighlightText};
                }
                .setting-suggest-text-h {
                    forced-color-adjust: none;
                    background: ${d.H.Highlight};
                    color: ${d.H.HighlightText};
                }
                .setting-suggest-text-h .detect-location-icon path {
                    fill: ${d.H.HighlightText};
                }
                .setting-suggest-text-h .detect-location-text-option {
                    color: ${d.H.HighlightText};
                }
                .setting-location-input:disabled {
                    opacity: 1;
                }
                .setting-location-textaction.focused:after {
                    background: ${d.H.Highlight};
                }
            `));var f=i(39181),v=i(13988),m=i(58952),b=i(18864),y=i(77234);const w=f.d`
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        class="setting-location-icon"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 118.5 3zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
        />
    </svg>
`,x=f.d`<svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M6 0C6.3077 0 6.5613 0.231624 6.59596 0.530027L6.6 0.6L6.60021 1.38838C8.68853 1.6575 10.3428 3.31199 10.6117 5.4004L11.4 5.4C11.7314 5.4 12 5.66863 12 6C12 6.3077 11.7684 6.5613 11.47 6.59596L11.4 6.6L10.6116 6.60021C10.3425 8.68832 8.68832 10.3425 6.60021 10.6116L6.6 11.4C6.6 11.7314 6.33137 12 6 12C5.6923 12 5.4387 11.7684 5.40404 11.47L5.4 11.4L5.4004 10.6117C3.31199 10.3428 1.6575 8.68853 1.38838 6.60021L0.6 6.6C0.268629 6.6 0 6.33137 0 6C0 5.6923 0.231624 5.4387 0.530027 5.40404L0.6 5.4L1.3883 5.4004C1.65718 3.31179 3.31179 1.65718 5.4004 1.3883L5.4 0.6C5.4 0.268629 5.66863 0 6 0ZM6 2.55C4.09462 2.55 2.55 4.09462 2.55 6C2.55 7.90538 4.09462 9.45 6 9.45C7.90538 9.45 9.45 7.90538 9.45 6C9.45 4.09462 7.90538 2.55 6 2.55ZM6 3.6C7.32548 3.6 8.4 4.67452 8.4 6C8.4 7.32548 7.32548 8.4 6 8.4C4.67452 8.4 3.6 7.32548 3.6 6C3.6 4.67452 4.67452 3.6 6 3.6Z"
    />
</svg> `,C=(t,e)=>f.d`
    <div class="setting-auto-suggest">
        <div
            class="setting-location-textaction ${t=>t.inputFocused?"focused":""}"
        >
            ${w}

            <input
                class="setting-location-input"
                part="setting-location-input"
                id="weather_location_input"
                placeholder="${t=>t.searchPlaceHolder}"
                @input="${t=>t.handleInputForSuggest()}"
                @click="${(t,e)=>t.handleClickOnLocationInput(e.event)}"
                @focus="${(t,e)=>t.handleFocusOnLocationInput(e.event)}"
                @blur="${t=>t.handleInputBlur()}"
                type="text"
                title="${t=>t.searchPlaceHolder}"
                autocomplete="off"
                aria-autocomplete="both"
                aria-activedescendant=${t=>null!=t.activeSuggestIndex&&t.activeSuggestIndex>=0?"locationSug_"+t.activeSuggestIndex:null}
                value="${t=>t.getSelectedName()}"
                aria-owns="weather_location_search_list"
                aria-controls="weather_location_search_list"
                ${(0,m.i)("inputControl")}
                data-t="${t=>t.inputTelemetryTag}"
            />
            ${(0,v.g)((t=>t.shouldShowAlertIcon()),f.d`
                    <div
                        class="setting-location-input-alert"
                        title="${t=>t.searchPlaceHolder}"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14">
                            <path
                                d="M6.5625 0L13.125 13.125H0L6.5625 0ZM7 11.375V10.5H6.125V11.375H7ZM6.125 9.625H7V4.375H6.125V9.625Z"
                            ></path>
                        </svg>
                    </div>
                `)}
            ${(0,v.g)((t=>t.shouldShowClearButton()),f.d`
                    <button
                        title="${t=>t.searchClearButtonLabel}"
                        aria-label="${t=>t.searchClearButtonLabel}"
                        class="setting-location-input-clear"
                        data-t="${t=>t.searchClearTelemetryTag}"
                        @click=${t=>t.handleClearClick()}
                        @focus=${t=>t.handleClearFocusChange(!0)}
                        @blur=${t=>t.handleClearFocusChange(!1)}
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" >
                            <path
                                d="M6.84961 6L12 11.1504L11.1504 12L6 6.84961L0.849609 12L0 11.1504L5.15039 6L0 0.849609L0.849609 0L6 5.15039L11.1504 0L12 0.849609L6.84961 6Z"
                            ></path>
                        </svg>
                    </div>
                `)}
        </div>
    </div>
`,$=(t,e)=>f.d`
    <div class="setting-location">
        <div>
            <fluent-radio-group
                value="${t=>t.settingData.locationMode}"
                @change="${(t,e)=>t.chooseLocationMode(e.event)}"
                aria-labelledby="setlocationmode"
                name="set-location-mode"
                orientation="vertical"
            >
                <fluent-radio
                    value="${n.EM.AutoDetectLoc}"
                    tabindex="${t=>t.isAlwaysDetectLocation?0:null}"
                    data-t="${t=>t.detectTelemetryTag}"
                    >${t=>t.detectLocationLabel}</fluent-radio
                >
                <fluent-radio
                    value="${n.EM.SpecifyLoc}"
                    tabindex="${t=>t.settingData.locationMode==n.EM.SpecifyLoc?0:null}"
                    data-t="${t=>t.specifyTelemetryTag}"
                    >${t=>t.specifyLocationLabel}</fluent-radio
                >
            </fluent-radio-group>
        </div>
        ${C}
    </div>
`,k=(t,e)=>f.d`
    <div class="setting-location-v2">
        ${(0,v.g)((t=>(0,y.TW)(t.layout)||(0,y.aL)(t.layout)||"v3"===t.locationModeV2),f.d` <div class="specify-location-label">
                ${t=>t.detectLocationLabel}
                <fluent-switch
                    class="${t=>t.isAlwaysDetectLocation?"checked":""}"
                    ?checked="${t=>t.isAlwaysDetectLocation}"
                    current-checked="${t=>t.isAlwaysDetectLocation}"
                    aria-checked="${t=>t.isAlwaysDetectLocation}"
                    aria-label="${t=>t.detectLocationLabel}"
                    @click="${t=>t.clickOnSwitchLocationMode()}"
                    @keydown="${(t,e)=>t.keyDownOnSwitchLocationMode(e.event)}"
                    data-t="${t=>t.alwaysDetectSwitchTelemetryTag}"
                />
            </div>`)}
        ${C}
        ${(0,v.g)((t=>"v3"!==t.locationModeV2&&t.showDetectButton),f.d` <fluent-button
                class="detect-location-label"
                tabindex="0"
                aria-label=${t=>t.detectLocationActionLabel}
                title=${t=>t.detectLocationActionLabel}
                @click="${(t,e)=>t.detectCurrentLocation()}"
                data-t="${t=>t.detectLocationTelemetryTag}"
            >
                <i class="detect-location-icon">${x} </i>
                <span class="detect-location-text"
                    >${t=>t.detectLocationActionLabel}</span
                >
            </fluent-button>`)}
        ${(0,v.g)((t=>"v3"!==t.locationModeV2&&!t.showDetectButton),f.d` <div
                class="detect-location-label"
            >
            </div>`)}
    </div>
`,L=(t,e)=>f.d`
    <div class="setting-action-button">
        <fluent-button
            class="setting-save-button sd-action"
            appearance="accent"
            @click="${t=>t.saveSetting()}"
            :disabled=${t=>!t.settingData.changeSignal}
            data-t="${t=>t.saveTelemetryTag}"
        >
            ${t=>t.saveButtonCont}
        </fluent-button>
        <fluent-button
            class="setting-cancel-button sd-action"
            appearance="outline"
            @click="${t=>t.cancelSetting()}"
            data-t="${t=>t.cancelTelemetryTag}"
        >
            ${t=>t.cancelButtonCont}
        </fluent-button>
    </div>
`,D=f.d` ${(0,v.g)((t=>t.shouldShowSuggests()),f.d`
        <div
            id="weather_location_search_list"
            aria-expanded="${t=>!!t.showSuggests}"
            aria-label="${t=>t.searchPlaceHolder}"
            aria-live="polite"
        >
            <ul
                class="setting-suggest-list"
                tabindex="-1"
                aria-labelledby="weather_location_input"
                ${(0,m.i)("suggestList")}
            >
                ${(0,v.g)((t=>t.userQuery&&t.settingData.suggestedLocations&&t.settingData.suggestedLocations.length>0),f.d`${(0,b.rx)((t=>t.settingData.suggestedLocations),((t,e)=>f.d`
    <li
        class="${(t,e)=>e.index==e.parent.activeSuggestIndex?"setting-suggest-text setting-suggest-text-h":"setting-suggest-text"}"
        role="option"
        id=${(t,e)=>"locationSug_"+e.index}
        title="${t=>`${t.displayName}`}"
        aria-label="${t=>`${t.displayName}`}"
        aria-selected="${(t,e)=>e.index==e.parent.activeSuggestIndex}"
        @click="${(t,e)=>e.parent.selectSuggestLocation(t,e.event)}"
        data-t="${(t,e)=>e.parent.suggestTelemetryTag}"
    >
        ${(0,v.g)(((t,e)=>!!e.parent.settingData.showSuggestionInTwoLines),f.d`
                <div class="setting-suggest-first-line">
                    ${t=>t.firstLine||t.displayName}
                </div>
                <div class="setting-suggest-second-line">
                    ${t=>t.secondLine}
                </div>
            `)}
        ${(0,v.g)(((t,e)=>!e.parent.settingData.showSuggestionInTwoLines),f.d` ${t=>t.displayName} `)}
    </li>
`),{positioning:!0})}`)}
                ${(0,v.g)((t=>t.userQuery&&(!t.settingData.suggestedLocations||0==t.settingData.suggestedLocations.length)),f.d`<li
                        role="option"
                        aria-label="${t=>t.searchNoResult}"
                        title="${t=>t.searchNoResult}"
                        class="setting-suggest-text"
                    >
                        ${t=>t.searchNoResult}
                    </li>`)}
                ${(0,v.g)((t=>"v3"===t.locationModeV2&&!t.userQuery),f.d`<li
                        role="option"
                        id="locationSug_0"
                        aria-label="${t=>t.detectLocationActionLabel}"
                        title="${t=>t.detectLocationActionLabel}"
                        class="${t=>0===t.activeSuggestIndex?"setting-suggest-text setting-suggest-text-h":"setting-suggest-text"}"
                        aria-selected="${t=>0===t.activeSuggestIndex}"
                        @click="${t=>t.detectCurrentLocation()}"
                        data-t="${t=>t.detectLocationTelemetryTag}"
                    >
                        <i class="detect-location-icon detect-location-icon-option"
                            >${x}
                        </i>
                        <span class="detect-location-text detect-location-text-option"
                            >${t=>t.detectLocationActionLabel}</span
                        >
                    </li>`)}
            </ul>
        </div>
    `)}`,S=(t,e)=>f.d` <div
    class="setting-unit"
>
    ${(0,v.g)((t=>(0,y.TW)(t.layout)),f.d`<label id="unitsgroup" class="setting-unit-title"
            >${t=>t.unitsTitle}</label
        >`)}
    <fluent-radio-group
        value="${t=>t.settingData.unitSet}"
        @change="${(t,e)=>t.chooseWeatherUnit(e.event)}"
        aria-labelledby="unitsgroup"
        name="set-unit"
    >
        <fluent-radio
            value="${n.ao.Fahrenheit}"
            tabindex="${t=>t.settingData.unitSet==n.ao.Fahrenheit?0:null}"
            data-t="${t=>t.fahrenheitTelemetryTag}"
            ${(0,m.i)("fahrenheitRaido")}
            >${t=>t.fahrenheitLabel}</fluent-radio
        >
        <fluent-radio
            value="${n.ao.Celsius}"
            tabindex="${t=>t.settingData.unitSet==n.ao.Celsius?0:null}"
            data-t="${t=>t.celsiusTelemetryTag}"
            ${(0,m.i)("celsiusRaido")}
            >${t=>t.celsiusLabel}</fluent-radio
        >
    </fluent-radio-group>
</div>`,T=f.d`
    ${(0,v.g)((t=>(0,y.TW)(t.layout)||(0,y.aL)(t.layout)),f.d`
            <div class="setting-edit">
                ${t=>t.editHeader}
            </div>
        `)}
    ${k} ${S}
`,F=u.i`
    :host([layout="full"]) .setting-suggest-list {
        left: 24px;
    }
`,I=u.i`
    :host([layout="full"]) .setting-suggest-list {
        right: 24px;
    }
`,O=n.P3.compose({baseName:"weather-setting-card",template:(t,e)=>f.d`
    ${(0,v.g)((t=>t.settingData),f.d`
            <div class="setting-container">
                ${(0,v.g)((t=>"v3"===t.locationModeV2),T)}
                ${(0,v.g)((t=>"v3"!==t.locationModeV2&&(0,y.TW)(t.layout)),f.d`
                        <div class="setting-edit">
                            ${t=>t.editHeader}
                        </div>
                        ${(0,v.g)((t=>!t.locationModeV2),$)}
                        ${(0,v.g)((t=>t.locationModeV2),k)}
                        ${S}
                    `)}
                ${(0,v.g)((t=>"v3"!==t.locationModeV2&&(0,y.KW)(t.layout)),f.d`
                        ${(0,v.g)((t=>!t.locationModeV2),$)}
                        ${(0,v.g)((t=>t.locationModeV2),k)}
                    `)}
                ${(0,v.g)((t=>"v3"!==t.locationModeV2&&(0,y.aL)(t.layout)),f.d`
                        <div class="setting-area">
                            ${k}
                            ${S}
                        </div>
                    `)}
                ${L}
            </div>
            ${D}
        `)}
`,styles:g});n.P3.compose({baseName:"weather-setting-card-widget",template:(t,e)=>f.d` ${(0,v.g)((t=>t.settingData),f.d`
            <div class="setting-container">
                <div class="setting-area">
                    ${k} ${S}
                </div>
                ${L}
            </div>
            ${D}
        `)}`,styles:(t,e)=>u.i`
        ${g()}

        .sd-action {
            border-radius: 4px;
        }

        :host([layout="full"]) .setting-container {
            padding: 55px 24px 24px 24px;
        }
        :host([layout="full"]) .setting-suggest-list {
            top: 120px;
            width: 252px;
        }
        :host([layout="full"]):host([locationModeV2="v3"]) .setting-suggest-list {
            top: 120px;
            width: 252px;
        }
        .setting-area {
            height: 176px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .setting-unit-title {
            font-size: ${o.cSu};
            line-height: ${o.RUt};
        }
        .setting-save-button,
        .setting-cancel-button {
            width: 120px;
            font-size: ${o.cSu};
            line-height: ${o.RUt};
        }
    `.withBehaviors(new r.O(F,I))})},38637:function(t,e,i){"use strict";i.d(e,{EM:function(){return n},P3:function(){return u},ao:function(){return r}});var n,o,r,a=i(33940),s=i(65620),l=i(87697),c=i(33832),d=i(48839);!function(t){t[t.AutoDetectLoc=1]="AutoDetectLoc",t[t.SpecifyLoc=2]="SpecifyLoc"}(n||(n={})),function(t){t[t.Success=1]="Success",t[t.Failure=2]="Failure"}(o||(o={})),function(t){t[t.Fahrenheit=1]="Fahrenheit",t[t.Celsius=2]="Celsius"}(r||(r={}));class u extends d.I{constructor(){super(...arguments),this.showSuggests=!1,this.inputFocused=!1,this.inputClearFocused=!1,this.handleDocumentKeydown=t=>{if(t.defaultPrevented||!this.settingData)return;const e=this.userQuery&&this.settingData.suggestedLocations&&this.settingData.suggestedLocations.length>0;if(!e&&("v3"!==this.locationModeV2||this.userQuery))return;let i=this.settingData.suggestedLocations?this.settingData.suggestedLocations.length:0;this.userQuery||(i=1);const n=this.settingData.suggestedLocations||[];switch(t.keyCode){case c.Q6:t.preventDefault(),null==this.activeSuggestIndex||this.activeSuggestIndex<0||this.activeSuggestIndex>=i-1?this.activeSuggestIndex=0:this.activeSuggestIndex=this.activeSuggestIndex+1;break;case c.$Y:null==this.activeSuggestIndex||this.activeSuggestIndex<=0||this.activeSuggestIndex>i-1?this.activeSuggestIndex=i-1:this.activeSuggestIndex=this.activeSuggestIndex-1,t.preventDefault();break;case c.bq:case c.ei:null!=this.activeSuggestIndex&&this.activeSuggestIndex>=0&&this.activeSuggestIndex<i&&(e?this.selectSuggestLocation(n[this.activeSuggestIndex]):this.detectCurrentLocation(),this.activeSuggestIndex=-1,t.preventDefault());break;case c.RN:this.showSuggests=!1;break;default:return}},this.handleClickOutside=t=>{t.defaultPrevented||this.suggestList&&!this.suggestList.contains(t.target)&&(this.showSuggests=!1)}}get isAlwaysDetectLocation(){return this.settingData.locationMode==n.AutoDetectLoc}get showDetectButton(){return this.settingData.locationMode===n.SpecifyLoc&&0==(2&(this.settingData.changeSignal||0))&&!this.shouldShowAlertIcon()}handleInputForSuggest(t){0==this.showSuggests&&(this.showSuggests=!0),this.inputFocused=!0,t&&t.preventDefault(),this.inputControl&&(this.userQuery!==this.inputControl.value&&(this.userQuery=this.inputControl.value),this.inputControl.value&&(this.$emit("suggest",this.inputControl.value),this.settingData.selectedLocation&&this.settingData.selectedLocation.displayName!==this.inputControl.value&&this.$emit("select",null)))}handleClickOnLocationInput(t){this.handleInputForSuggest(t)}handleFocusOnLocationInput(t){this.handleInputForSuggest(t)}handleInputBlur(){this.inputFocused=!1}detectCurrentLocation(){this.$emit("setLocationMode",n.SpecifyLoc),this.$emit("detectLocation"),this.showSuggests=!1}getSelectedName(){var t;const e=(null===(t=this.settingData.selectedLocation)||void 0===t?void 0:t.displayName)||"";return this.inputControl&&e&&(this.inputControl.value=e),e}selectSuggestLocation(t,e){this.inputControl&&t&&(this.inputControl.value=`${t.displayName}`),e&&e.preventDefault(),this.$emit("setLocationMode",n.SpecifyLoc),this.$emit("select",t),this.showSuggests=!1;const i=this.settingData.unitSet==r.Fahrenheit?this.fahrenheitRaido:this.celsiusRaido;i&&i.focus()}chooseLocationMode(t){if(t.defaultPrevented||!t.target)return;t.preventDefault(),this.showSuggests=!1;const e=parseInt(t.target.value);this.$emit("setLocationMode",e),this.inputControl&&(this.inputControl.value="")}clickOnSwitchLocationMode(){this.switchLocationMode()}keyDownOnSwitchLocationMode(t){const e=t.code.toLocaleLowerCase();if("space"!==e&&"enter"!==e)return!0;this.switchLocationMode()}switchLocationMode(){this.showSuggests=!1;const t=this.settingData.locationMode===n.SpecifyLoc?n.AutoDetectLoc:n.SpecifyLoc;this.$emit("setLocationMode",t),this.inputControl&&(this.inputControl.value="")}chooseWeatherUnit(t){if(t.defaultPrevented||!t.target)return;t.preventDefault(),this.showSuggests=!1;const e=parseInt(t.target.value);this.$emit("setUnitMode",e)}cancelSetting(){this.$emit("cancel"),this.inputControl&&(this.inputControl.value="")}saveSetting(){this.$emit("save"),this.inputControl&&(this.inputControl.value="")}connectedCallback(){super.connectedCallback(),this.layout||(this.layout="half"),this.focus(),this.addEventListener("keydown",this.handleDocumentKeydown),document.addEventListener("click",this.handleClickOutside)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleDocumentKeydown),document.removeEventListener("click",this.handleClickOutside)}shouldShowSuggests(){if(!this.showSuggests)return!1;if(!this.userQuery)return"v3"===this.locationModeV2;return!!(this.userQuery&&this.settingData.suggestedLocations&&this.settingData.suggestedLocations.length>0)||!!this.searchNoResult}shouldShowAlertIcon(){return this.settingData.locationMode!==n.AutoDetectLoc&&(!(this.inputFocused||this.inputClearFocused||this.showSuggests)&&!this.settingData.selectedLocation)}shouldShowClearButton(){return this.settingData.locationMode!==n.AutoDetectLoc&&((this.inputFocused||this.inputClearFocused||this.showSuggests)&&!!this.userQuery||!!this.settingData.selectedLocation)}handleClearClick(){this.$emit("select",null),this.userQuery="",this.inputControl&&(this.inputControl.value="",this.inputControl.focus())}handleClearFocusChange(t){this.inputClearFocused=t}}(0,a.gn)([s.Lj],u.prototype,"layout",void 0),(0,a.gn)([s.Lj],u.prototype,"editHeader",void 0),(0,a.gn)([s.Lj],u.prototype,"detectLocationLabel",void 0),(0,a.gn)([s.Lj],u.prototype,"specifyLocationLabel",void 0),(0,a.gn)([s.Lj],u.prototype,"detectLocationActionLabel",void 0),(0,a.gn)([s.Lj],u.prototype,"specifyLocationActionButton",void 0),(0,a.gn)([s.Lj],u.prototype,"searchPlaceHolder",void 0),(0,a.gn)([s.Lj],u.prototype,"searchClearButtonLabel",void 0),(0,a.gn)([s.Lj],u.prototype,"searchNoResult",void 0),(0,a.gn)([s.Lj],u.prototype,"unitsTitle",void 0),(0,a.gn)([s.Lj],u.prototype,"fahrenheitLabel",void 0),(0,a.gn)([s.Lj],u.prototype,"celsiusLabel",void 0),(0,a.gn)([s.Lj],u.prototype,"saveButtonCont",void 0),(0,a.gn)([s.Lj],u.prototype,"cancelButtonCont",void 0),(0,a.gn)([s.Lj],u.prototype,"locationModeV2",void 0),(0,a.gn)([l.LO],u.prototype,"settingData",void 0),(0,a.gn)([l.LO],u.prototype,"activeSuggestIndex",void 0),(0,a.gn)([l.LO],u.prototype,"showSuggests",void 0),(0,a.gn)([l.LO],u.prototype,"inputFocused",void 0),(0,a.gn)([l.LO],u.prototype,"inputClearFocused",void 0),(0,a.gn)([l.LO],u.prototype,"userQuery",void 0),(0,a.gn)([l.LO],u.prototype,"saveTelemetryTag",void 0),(0,a.gn)([l.LO],u.prototype,"cancelTelemetryTag",void 0),(0,a.gn)([l.LO],u.prototype,"detectTelemetryTag",void 0),(0,a.gn)([l.LO],u.prototype,"specifyTelemetryTag",void 0),(0,a.gn)([l.LO],u.prototype,"fahrenheitTelemetryTag",void 0),(0,a.gn)([l.LO],u.prototype,"celsiusTelemetryTag",void 0),(0,a.gn)([l.LO],u.prototype,"inputTelemetryTag",void 0),(0,a.gn)([l.LO],u.prototype,"searchClearTelemetryTag",void 0),(0,a.gn)([l.LO],u.prototype,"suggestTelemetryTag",void 0),(0,a.gn)([l.LO],u.prototype,"detectLocationTelemetryTag",void 0)},33785:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"></path></svg>'},62923:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"></path></svg>'},90444:function(t){t.exports='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 8.47c.3-.3.77-.3 1.06 0L12 15.19l6.72-6.72a.75.75 0 111.06 1.06l-7.25 7.25c-.3.3-.77.3-1.06 0L4.22 9.53a.75.75 0 010-1.06z"></path></svg>'},55097:function(t){t.exports='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 15.53c.3.3.77.3 1.06 0L12 8.81l6.72 6.72a.75.75 0 101.06-1.06l-7.25-7.25a.75.75 0 00-1.06 0l-7.25 7.25c-.3.3-.3.77 0 1.06z"></path></svg>'},83572:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.14 2.53a1.5 1.5 0 00-2.28 0l-6.62 7.8A1 1 0 003 11.98h3V17a1 1 0 001 1h6a1 1 0 001-1v-5.02h3a1 1 0 00.76-1.65l-6.62-7.8z"></path></svg>'},78408:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.86 2.53c.6-.7 1.68-.7 2.28 0l6.62 7.8a1 1 0 01-.76 1.65h-3V17a1 1 0 01-1 1H7a1 1 0 01-1-1v-5.02H3a1 1 0 01-.76-1.65l6.62-7.8zm1.52.65a.5.5 0 00-.76 0L3 10.98h3.5c.28 0 .5.23.5.5V17h6v-5.52c0-.27.22-.5.5-.5H17l-6.62-7.8z"></path></svg>'},72371:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.95 13.96a7 7 0 10-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 002.64-.12l2.43-2.37 1.13-1.12zM10 12a3 3 0 110-6 3 3 0 010 6z"></path></svg>'},36764:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.2 2.1a.9.9 0 011.6 0l1.53 3.08 3.4.5a.9.9 0 01.5 1.53l-2.46 2.4.58 3.39a.9.9 0 01-1.3.95L8 12.35l-3.04 1.6a.9.9 0 01-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 01.5-1.53l3.4-.5L7.2 2.1z"></path></svg>'},62449:function(t,e,i){"use strict";i.d(e,{D:function(){return n}});const n={image:"image",video:"video"}},26922:function(t,e,i){"use strict";i.d(e,{QT:function(){return w}});var n=i(33940),o=i(20005),r=i(65620),a=i(87697),s=i(48839),l=i(7775),c=i(51208),d=i(86076);class u extends s.I{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}(0,o.gn)([r.Lj],u.prototype,"download",void 0),(0,o.gn)([r.Lj],u.prototype,"href",void 0),(0,o.gn)([r.Lj],u.prototype,"hreflang",void 0),(0,o.gn)([r.Lj],u.prototype,"ping",void 0),(0,o.gn)([r.Lj],u.prototype,"referrerpolicy",void 0),(0,o.gn)([r.Lj],u.prototype,"rel",void 0),(0,o.gn)([r.Lj],u.prototype,"target",void 0),(0,o.gn)([r.Lj],u.prototype,"type",void 0),(0,o.gn)([a.LO],u.prototype,"defaultSlottedContent",void 0);class h{}(0,o.gn)([(0,r.Lj)({attribute:"aria-expanded"})],h.prototype,"ariaExpanded",void 0),(0,d.e)(h,l.v),(0,d.e)(u,c.hW,h);var p=i(39181),g=i(58952),f=i(90960);var v=i(53046),m=i(45597),b=i(82636);class y extends u{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}(0,n.gn)([r.Lj,(0,n.w6)("design:type",String)],y.prototype,"appearance",void 0);const w=y.compose({baseName:"anchor",baseClass:u,template:(t,e)=>p.d`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${(0,g.i)("control")}
    >
        ${(0,c.m9)(t,e)}
        <span class="content" part="content">
            <slot ${(0,f.Q)("defaultSlottedContent")}></slot>
        </span>
        ${(0,c.LC)(t,e)}
    </a>
`,styles:(t,e)=>v.i`
        ${(0,m.vN)(t,e)}
    `.withBehaviors((0,b.H)("accent",m.jQ),(0,b.H)("hypertext",m.Xu),(0,b.H)("lightweight",m.vt),(0,b.H)("outline",m.O8),(0,b.H)("stealth",m.cg)),shadowOptions:{delegatesFocus:!0}})},83496:function(t,e,i){"use strict";i.d(e,{tT:function(){return s}});var n=i(39181),o=i(13988);var r=i(32590),a=i(53046);const s=r.$.compose({baseName:"anchored-region",template:(t,e)=>n.d`
    <template class="${t=>t.initialLayoutComplete?"loaded":""}">
        ${(0,o.g)((t=>t.initialLayoutComplete),n.d`
                <slot></slot>
            `)}
    </template>
`,styles:(t,e)=>a.i`
    :host {
        contain: layout;
        display: block;
    }
`})},61977:function(t,e,i){"use strict";i.d(e,{hb:function(){return S}});var n=i(33940),o=i(20005),r=i(65620),a=i(87697),s=i(7775),l=i(51208),c=i(86076),d=i(82500),u=i(48839);class h extends u.I{}class p extends((0,d.Um)(h)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class g extends p{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&(null===(e=this.defaultSlottedContent)||void 0===e?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;null===(t=this.form)||void 0===t||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===e&&this.addEventListener("click",this.handleSubmission),"submit"===t&&this.removeEventListener("click",this.handleSubmission),"reset"===e&&this.addEventListener("click",this.handleFormReset),"reset"===t&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.removeEventListener("click",this.handleClick)}))}}(0,o.gn)([(0,r.Lj)({mode:"boolean"})],g.prototype,"autofocus",void 0),(0,o.gn)([(0,r.Lj)({attribute:"form"})],g.prototype,"formId",void 0),(0,o.gn)([r.Lj],g.prototype,"formaction",void 0),(0,o.gn)([r.Lj],g.prototype,"formenctype",void 0),(0,o.gn)([r.Lj],g.prototype,"formmethod",void 0),(0,o.gn)([(0,r.Lj)({mode:"boolean"})],g.prototype,"formnovalidate",void 0),(0,o.gn)([r.Lj],g.prototype,"formtarget",void 0),(0,o.gn)([r.Lj],g.prototype,"type",void 0),(0,o.gn)([a.LO],g.prototype,"defaultSlottedContent",void 0);class f{}(0,o.gn)([(0,r.Lj)({attribute:"aria-expanded"})],f.prototype,"ariaExpanded",void 0),(0,o.gn)([(0,r.Lj)({attribute:"aria-pressed"})],f.prototype,"ariaPressed",void 0),(0,c.e)(f,s.v),(0,c.e)(g,l.hW,f);var v=i(39181),m=i(58952),b=i(90960);var y=i(53046),w=i(37139),x=i(40082),C=i(87839),$=i(45597),k=i(82636),L=i(26755);class D extends g{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}(0,n.gn)([r.Lj,(0,n.w6)("design:type",String)],D.prototype,"appearance",void 0);const S=D.compose({baseName:"button",baseClass:g,template:(t,e)=>v.d`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${(0,m.i)("control")}
    >
        ${(0,l.m9)(t,e)}
        <span class="content" part="content">
            <slot ${(0,b.Q)("defaultSlottedContent")}></slot>
        </span>
        ${(0,l.LC)(t,e)}
    </button>
`,styles:(t,e)=>y.i`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${L.VFZ};
            background-color: ${L.wFS};
            cursor: ${w.H};
        }

        ${(0,$.vN)(t,e)}
    `.withBehaviors((0,x.vF)(y.i`
                :host([disabled]),
                :host([disabled]:hover),
                :host([disabled]:active),
                :host([disabled]) .control,
                :host([disabled]) .control:hover,
                :host([appearance="neutral"][disabled]:hover) .control {
                    forced-color-adjust: none;
                    background-color: ${C.H.ButtonFace};
                    border-color: ${C.H.GrayText};
                    color: ${C.H.GrayText};
                    opacity: 1;
                }
            `),(0,k.H)("accent",y.i`
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${L.Avx};
                }

                ${$.jQ}
            `.withBehaviors((0,x.vF)(y.i`
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${C.H.ButtonFace};
                            border-color: ${C.H.GrayText};
                            color: ${C.H.GrayText};
                        }
                    `))),(0,k.H)("lightweight",y.i`
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${L.goi};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${$.vt}
            `.withBehaviors((0,x.vF)(y.i`
                        :host([appearance="lightweight"][disabled]) .control {
                            forced-color-adjust: none;
                            color: ${C.H.GrayText};
                        }

                        :host([appearance="lightweight"][disabled])
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))),(0,k.H)("outline",y.i`
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${L.akT};
                }

                ${$.O8}
            `.withBehaviors((0,x.vF)(y.i`
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${C.H.GrayText};
                        }
                    `))),(0,k.H)("stealth",y.i`
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${L.jql};
                }

                ${$.cg}
            `.withBehaviors((0,x.vF)(y.i`
                        :host([appearance="stealth"][disabled]),
                        :host([appearance="stealth"][disabled]:hover) {
                            background: ${C.H.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${C.H.ButtonFace};
                            border-color: transparent;
                            color: ${C.H.GrayText};
                        }
                    `)))),shadowOptions:{delegatesFocus:!0}})},42582:function(t,e,i){"use strict";i.d(e,{Zb:function(){return w},F:function(){return C},ay:function(){return x}});var n=i(33940),o=i(48839);class r extends o.I{}var a=i(11162),s=i(22680),l=i(87697),c=i(65620),d=i(48657),u=i(26755),h=i(42355),p=i(89949),g=i(53046),f=i(67020),v=i(40082),m=i(87839),b=i(62734);const y=(t,e)=>g.i`
        ${(0,f.j)("block")} :host {
            --elevation: 4;
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${u.IfY};
            color: ${u.CHi};
            border-radius: calc(${u.rSr} * 1px);
            ${b.XC}
        }

        :host(:hover) {
            --elevation: 8;
        }

        :host(:focus-within) {
            --elevation: 8;
        }

        :host {
            content-visibility: auto;
        }
    `.withBehaviors((0,v.vF)(g.i`
                :host {
                    forced-color-adjust: none;
                    background: ${m.H.Canvas};
                    box-shadow: 0 0 0 1px ${m.H.CanvasText};
                }
            `));class w extends r{cardFillColorChanged(t,e){if(e){const t=(0,a.in)(e);null!==t&&(this.neutralPaletteSource=e,u.IfY.setValueFor(this,h.w.create(t.r,t.g,t.b)))}}neutralPaletteSourceChanged(t,e){if(e){const t=(0,a.in)(e),i=h.w.create(t.r,t.g,t.b);u.yvm.setValueFor(this,p.v.create(i))}}handleChange(t,e){this.cardFillColor||u.IfY.setValueFor(this,(e=>u.abR.getValueFor(e).evaluate(e,u.IfY.getValueFor(t))))}connectedCallback(){super.connectedCallback();const t=(0,s.T)(this);if(t){const e=l.y$.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}(0,n.gn)([(0,c.Lj)({attribute:"card-fill-color",mode:"fromView"}),(0,n.w6)("design:type",String)],w.prototype,"cardFillColor",void 0),(0,n.gn)([(0,c.Lj)({attribute:"neutral-palette-source",mode:"fromView"}),(0,n.w6)("design:type",String)],w.prototype,"neutralPaletteSource",void 0);const x=w.compose({baseName:"card",baseClass:r,template:d.O,styles:y}),C=y},89949:function(t,e,i){"use strict";i.d(e,{v:function(){return S}});var n,o=i(2696),r=i(60279),a=i(83343),s=i(82917);function l(t,e,i=18){const n=(0,r.$2)(t);let o=n.c+e*i;return o<0&&(o=0),(0,r.KW)(new a.t(n.l,o,n.h))}function c(t,e){return t*e}function d(t,e){return new o.h(c(t.r,e.r),c(t.g,e.g),c(t.b,e.b),1)}function u(t,e){return t<.5?(0,s.uZ)(2*e*t,0,1):(0,s.uZ)(1-2*(1-e)*(1-t),0,1)}function h(t,e){return new o.h(u(t.r,e.r),u(t.g,e.g),u(t.b,e.b),1)}!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(n||(n={}));var p,g=i(9366),f=i(38316),v=i(447),m=i(40272);function b(t,e,i,n){if(isNaN(t)||t<=0)return i;if(t>=1)return n;switch(e){case p.HSL:return(0,r.hP)(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new g.H((0,s.AG)(t,e.h,i.h),(0,s.t7)(t,e.s,i.s),(0,s.t7)(t,e.l,i.l))}(t,(0,r.lw)(i),(0,r.lw)(n)));case p.HSV:return(0,r.iI)(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new f.T((0,s.AG)(t,e.h,i.h),(0,s.t7)(t,e.s,i.s),(0,s.t7)(t,e.v,i.v))}(t,(0,r.T8)(i),(0,r.T8)(n)));case p.XYZ:return(0,r.rD)(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new m.x((0,s.t7)(t,e.x,i.x),(0,s.t7)(t,e.y,i.y),(0,s.t7)(t,e.z,i.z))}(t,(0,r.zP)(i),(0,r.zP)(n)));case p.LAB:return(0,r.DR)(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new v.R((0,s.t7)(t,e.l,i.l),(0,s.t7)(t,e.a,i.a),(0,s.t7)(t,e.b,i.b))}(t,(0,r.v1)(i),(0,r.v1)(n)));case p.LCH:return(0,r.KW)(function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new a.t((0,s.t7)(t,e.l,i.l),(0,s.t7)(t,e.c,i.c),(0,s.AG)(t,e.h,i.h))}(t,(0,r.$2)(i),(0,r.$2)(n)));default:return function(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new o.h((0,s.t7)(t,e.r,i.r),(0,s.t7)(t,e.g,i.g),(0,s.t7)(t,e.b,i.b),(0,s.t7)(t,e.a,i.a))}(t,i,n)}}!function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(p||(p={}));class y{constructor(t){if(null==t||0===t.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(null==t||0===t.length)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let i=0;i<t.length;i++)0===i?e[i]={color:t[i],position:0}:i===t.length-1?e[i]={color:t[i],position:1}:e[i]={color:t[i],position:i*(1/(t.length-1))};return new y(e)}getColor(t,e=p.RGB){if(1===this.stops.length)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let i=0;for(let e=0;e<this.stops.length;e++)this.stops[e].position<=t&&(i=e);let n=i+1;n>=this.stops.length&&(n=this.stops.length-1);return b((t-this.stops[i].position)*(1/(this.stops[n].position-this.stops[i].position)),e,this.stops[i].color,this.stops[n].color)}trim(t,e,i=p.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new y([{color:this.getColor(t,i),position:0}]);const n=[];for(let i=0;i<this.stops.length;i++)this.stops[i].position>=t&&this.stops[i].position<=e&&n.push(this.stops[i]);if(0===n.length)return new y([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);n[0].position!==t&&n.unshift({color:this.getColor(t),position:t}),n[n.length-1].position!==e&&n.push({color:this.getColor(e),position:e});const o=e-t,r=new Array(n.length);for(let e=0;e<n.length;e++)r[e]={color:n[e].color,position:(n[e].position-t)/o};return new y(r)}findNextColor(t,e,i=!1,n=p.RGB,o=.005,a=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const s=this.getColor(t,n),l=i?0:1,c=this.getColor(l,n);if((0,r.wo)(s,c)<=e)return l;let d=i?0:t,u=i?t:0,h=l,g=0;for(;g<=a;){h=Math.abs(u-d)/2+d;const t=this.getColor(h,n),a=(0,r.wo)(s,t);if(Math.abs(a-e)<=o)return h;a>e?i?d=h:u=h:i?u=h:d=h,g++}return h}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new y(t)}sortColorScaleStops(t){return t.sort(((t,e)=>{const i=t.position,n=e.position;return i<n?-1:i>n?1:0}))}}var w=i(11162);class x{constructor(t){this.config=Object.assign({},x.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const i in t)this.config[i]&&(this.config[i].equalValue?this.config[i].equalValue(t[i])||(this.config[i]=t[i],e=!0):t[i]!==this.config[i]&&(this.config[i]=t[i],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=(0,r.lw)(this.config.baseColor),e=new y([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let i=e.getColor(0),n=e.getColor(1);if(t.s>=this.config.saturationAdjustmentCutoff&&(i=l(i,this.config.saturationLight),n=l(n,this.config.saturationDark)),0!==this.config.multiplyLight){const t=d(this.config.baseColor,i);i=b(this.config.multiplyLight,this.config.interpolationMode,i,t)}if(0!==this.config.multiplyDark){const t=d(this.config.baseColor,n);n=b(this.config.multiplyDark,this.config.interpolationMode,n,t)}if(0!==this.config.overlayLight){const t=h(this.config.baseColor,i);i=b(this.config.overlayLight,this.config.interpolationMode,i,t)}if(0!==this.config.overlayDark){const t=h(this.config.baseColor,n);n=b(this.config.overlayDark,this.config.interpolationMode,n,t)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new y([{position:0,color:this.config.baseColor},{position:1,color:n.clamp()}]):this.config.baseScalePosition>=1?new y([{position:0,color:i.clamp()},{position:1,color:this.config.baseColor}]):new y([{position:0,color:i.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:n.clamp()}]):new y([{position:0,color:i.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:n.clamp()}])}}x.defaultPaletteConfig={baseColor:(0,w.in)("#808080"),steps:11,interpolationMode:p.RGB,scaleColorLight:new o.h(1,1,1,1),scaleColorDark:new o.h(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},x.greyscalePaletteConfig={baseColor:(0,w.in)("#808080"),steps:11,interpolationMode:p.RGB,scaleColorLight:new o.h(1,1,1,1),scaleColorDark:new o.h(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};x.defaultPaletteConfig.scaleColorLight,x.defaultPaletteConfig.scaleColorDark;class C{constructor(t){this.palette=[],this.config=Object.assign({},C.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=.14,i=new o.h(e,e,e,1),n=new x(Object.assign(Object.assign({},x.greyscalePaletteConfig),{baseColor:i,baseScalePosition:86/94,steps:t})).palette,a=((0,r.rp)(this.config.baseColor)+(0,r.lw)(this.config.baseColor).l)/2,s=this.matchRelativeLuminanceIndex(a,n)/(t-1),l=this.matchRelativeLuminanceIndex(e,n)/(t-1),c=(0,r.lw)(this.config.baseColor),d=(0,r.hP)(g.H.fromObject({h:c.h,s:c.s,l:e})),u=(0,r.hP)(g.H.fromObject({h:c.h,s:c.s,l:.06})),h=new Array(5);h[0]={position:0,color:new o.h(1,1,1,1)},h[1]={position:s,color:this.config.baseColor},h[2]={position:l,color:d},h[3]={position:.99,color:u},h[4]={position:1,color:new o.h(0,0,0,1)};const f=new y(h);this.palette=new Array(t);for(let e=0;e<t;e++){const i=f.getColor(e/(t-1),p.RGB);this.palette[e]=i}}matchRelativeLuminanceIndex(t,e){let i=Number.MAX_VALUE,n=0,o=0;const a=e.length;for(;o<a;o++){const a=Math.abs((0,r.rp)(e[o])-t);a<i&&(i=a,n=o)}return n}}C.defaultPaletteConfig={baseColor:(0,w.in)("#808080"),steps:94};var $=i(42355);function k(t,e,i=0,n=t.length-1){if(n===i)return t[i];const o=Math.floor((n-i)/2)+i;return e(t[o])?k(t,e,i,o):k(t,e,o+1,n)}var L=i(64087),D=i(32470);const S=Object.freeze({create:t=>T.from(t)});class T{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,i,n){void 0===i&&(i=this.closestIndexOf(t));let o=this.swatches;const r=this.lastIndex;let a=i;void 0===n&&(n=(0,L.a)(t));return-1===n&&(o=this.reversedSwatches,a=r-a),k(o,(i=>(0,D.$)(t,i)>=e),a,r)}get(t){return this.swatches[t]||this.swatches[(0,s.uZ)(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(-1!==e)return this.closestIndexCache.set(t.relativeLuminance,e),e;const i=this.swatches.reduce(((e,i)=>Math.abs(i.relativeLuminance-t.relativeLuminance)<Math.abs(e.relativeLuminance-t.relativeLuminance)?i:e));return e=this.swatches.indexOf(i),this.closestIndexCache.set(t.relativeLuminance,e),e}static from(t){return new T(t,Object.freeze(new C({baseColor:o.h.fromObject(t)}).palette.map((t=>{const e=(0,w.in)(t.toStringHexRGB());return $.w.create(e.r,e.g,e.b)}))))}}},42355:function(t,e,i){"use strict";i.d(e,{w:function(){return a}});var n=i(2696),o=i(60279),r=i(32470);const a=Object.freeze({create:(t,e,i)=>new s(t,e,i),from:t=>new s(t.r,t.g,t.b)});class s extends n.h{constructor(t,e,i){super(t,e,i,1),this.toColorString=this.toStringHexRGB,this.contrast=r.$.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=(0,o.hM)(this)}static fromObject(t){return new s(t.r,t.g,t.b)}}},78125:function(t,e,i){"use strict";i.d(e,{C:function(){return r},h:function(){return n}});var n,o=i(42355);function r(t){return o.w.create(t,t,t)}!function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(n||(n={}))},64087:function(t,e,i){"use strict";i.d(e,{a:function(){return o}});var n=i(3794);function o(t){return(0,n._)(t)?-1:1}},3794:function(t,e,i){"use strict";i.d(e,{_:function(){return o}});const n=(-.1+Math.sqrt(.21))/2;function o(t){return t.relativeLuminance<=n}},32470:function(t,e,i){"use strict";function n(t,e){const i=t.relativeLuminance>e.relativeLuminance?t:e,n=t.relativeLuminance>e.relativeLuminance?e:t;return(i.relativeLuminance+.05)/(n.relativeLuminance+.05)}i.d(e,{$:function(){return n}})},12306:function(t,e,i){"use strict";i.d(e,{k:function(){return w}});var n=i(33940),o=i(11162),r=i(53046),a=i(40082),s=i(87839),l=i(48839),c=i(87697),d=i(65620),u=i(39181),h=i(67020),p=i(89949),g=i(42355),f=i(26755);const v={toView:t=>null==t?null:t?.toColorString(),fromView(t){if(null==t)return null;const e=(0,o.in)(t);return e?g.w.create(e.r,e.g,e.b):null}},m=r.i`
    :host {
        background-color: ${f.IfY};
        color: ${f.CHi};
    }
`.withBehaviors((0,a.vF)(r.i`
            :host {
                background-color: ${s.H.Canvas};
                box-shadow: 0 0 0 1px ${s.H.CanvasText};
                color: ${s.H.CanvasText};
            }
        `));function b(t){return(e,i)=>{e[i+"Changed"]=function(e,i){null!=i?t.setValueFor(this,i):t.deleteValueFor(this)}}}class y extends l.I{constructor(){super(),this.noPaint=!1,c.y$.getNotifier(this).subscribe({handleChange:this.noPaintChanged.bind(this)},"fillColor")}noPaintChanged(){this.noPaint||void 0===this.fillColor?this.$fastController.removeStyles(m):this.$fastController.addStyles(m)}accentBaseColorChanged(t,e){null!=e?f.au1.setValueFor(this,p.v.create(e)):f.au1.deleteValueFor(this)}neutralBaseColorChanged(t,e){null!=e?f.yvm.setValueFor(this,p.v.create(e)):f.yvm.deleteValueFor(this)}}(0,n.gn)([(0,d.Lj)({attribute:"no-paint",mode:"boolean"}),(0,n.w6)("design:type",Object)],y.prototype,"noPaint",void 0),(0,n.gn)([(0,d.Lj)({attribute:"fill-color",converter:v}),b(f.IfY),(0,n.w6)("design:type",Object)],y.prototype,"fillColor",void 0),(0,n.gn)([(0,d.Lj)({attribute:"accent-base-color",converter:v,mode:"fromView"}),(0,n.w6)("design:type",Object)],y.prototype,"accentBaseColor",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-base-color",converter:v,mode:"fromView"}),(0,n.w6)("design:type",Object)],y.prototype,"neutralBaseColor",void 0),(0,n.gn)([c.LO,b(f.yvm),(0,n.w6)("design:type",Object)],y.prototype,"neutralPalette",void 0),(0,n.gn)([c.LO,b(f.au1),(0,n.w6)("design:type",Object)],y.prototype,"accentPalette",void 0),(0,n.gn)([(0,d.Lj)({converter:d.Id}),b(f.hVk),(0,n.w6)("design:type",Number)],y.prototype,"density",void 0),(0,n.gn)([(0,d.Lj)({attribute:"design-unit",converter:d.Id}),b(f._5n),(0,n.w6)("design:type",Number)],y.prototype,"designUnit",void 0),(0,n.gn)([(0,d.Lj)({attribute:"direction"}),b(f.o7V),(0,n.w6)("design:type",String)],y.prototype,"direction",void 0),(0,n.gn)([(0,d.Lj)({attribute:"base-height-multiplier",converter:d.Id}),b(f.nfe),(0,n.w6)("design:type",Number)],y.prototype,"baseHeightMultiplier",void 0),(0,n.gn)([(0,d.Lj)({attribute:"base-horizontal-spacing-multiplier",converter:d.Id}),b(f.LQ3),(0,n.w6)("design:type",Number)],y.prototype,"baseHorizontalSpacingMultiplier",void 0),(0,n.gn)([(0,d.Lj)({attribute:"control-corner-radius",converter:d.Id}),b(f.UWU),(0,n.w6)("design:type",Number)],y.prototype,"controlCornerRadius",void 0),(0,n.gn)([(0,d.Lj)({attribute:"stroke-width",converter:d.Id}),b(f.Han),(0,n.w6)("design:type",Number)],y.prototype,"strokeWidth",void 0),(0,n.gn)([(0,d.Lj)({attribute:"focus-stroke-width",converter:d.Id}),b(f.vxp),(0,n.w6)("design:type",Number)],y.prototype,"focusStrokeWidth",void 0),(0,n.gn)([(0,d.Lj)({attribute:"disabled-opacity",converter:d.Id}),b(f.VFZ),(0,n.w6)("design:type",Number)],y.prototype,"disabledOpacity",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-minus-2-font-size"}),b(f.G8g),(0,n.w6)("design:type",String)],y.prototype,"typeRampMinus2FontSize",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-minus-2-line-height"}),b(f.MwG),(0,n.w6)("design:type",String)],y.prototype,"typeRampMinus2LineHeight",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-minus-1-font-size"}),b(f.sNp),(0,n.w6)("design:type",String)],y.prototype,"typeRampMinus1FontSize",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-minus-1-line-height"}),b(f.vgC),(0,n.w6)("design:type",String)],y.prototype,"typeRampMinus1LineHeight",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-base-font-size"}),b(f.cSu),(0,n.w6)("design:type",String)],y.prototype,"typeRampBaseFontSize",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-base-line-height"}),b(f.RUt),(0,n.w6)("design:type",String)],y.prototype,"typeRampBaseLineHeight",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-1-font-size"}),b(f.PwC),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus1FontSize",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-1-line-height"}),b(f.b3W),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus1LineHeight",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-2-font-size"}),b(f.mWK),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus2FontSize",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-2-line-height"}),b(f.I7_),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus2LineHeight",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-3-font-size"}),b(f.ipv),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus3FontSize",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-3-line-height"}),b(f.yGZ),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus3LineHeight",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-4-font-size"}),b(f.IWd),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus4FontSize",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-4-line-height"}),b(f.iL4),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus4LineHeight",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-5-font-size"}),b(f.CXZ),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus5FontSize",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-5-line-height"}),b(f.n5T),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus5LineHeight",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-6-font-size"}),b(f.Zaf),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus6FontSize",void 0),(0,n.gn)([(0,d.Lj)({attribute:"type-ramp-plus-6-line-height"}),b(f.yDy),(0,n.w6)("design:type",String)],y.prototype,"typeRampPlus6LineHeight",void 0),(0,n.gn)([(0,d.Lj)({attribute:"accent-fill-rest-delta",converter:d.Id}),b(f.N7s),(0,n.w6)("design:type",Number)],y.prototype,"accentFillRestDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"accent-fill-hover-delta",converter:d.Id}),b(f.B23),(0,n.w6)("design:type",Number)],y.prototype,"accentFillHoverDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"accent-fill-active-delta",converter:d.Id}),b(f.Woc),(0,n.w6)("design:type",Number)],y.prototype,"accentFillActiveDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"accent-fill-focus-delta",converter:d.Id}),b(f.v$0),(0,n.w6)("design:type",Number)],y.prototype,"accentFillFocusDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"accent-foreground-rest-delta",converter:d.Id}),b(f.kpA),(0,n.w6)("design:type",Number)],y.prototype,"accentForegroundRestDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"accent-foreground-hover-delta",converter:d.Id}),b(f.L8d),(0,n.w6)("design:type",Number)],y.prototype,"accentForegroundHoverDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"accent-foreground-active-delta",converter:d.Id}),b(f.kb6),(0,n.w6)("design:type",Number)],y.prototype,"accentForegroundActiveDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"accent-foreground-focus-delta",converter:d.Id}),b(f.ndN),(0,n.w6)("design:type",Number)],y.prototype,"accentForegroundFocusDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-rest-delta",converter:d.Id}),b(f.MYN),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillRestDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-hover-delta",converter:d.Id}),b(f.jWw),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillHoverDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-active-delta",converter:d.Id}),b(f.hDF),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillActiveDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-focus-delta",converter:d.Id}),b(f.VQw),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillFocusDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-input-rest-delta",converter:d.Id}),b(f.efx),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillInputRestDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-input-hover-delta",converter:d.Id}),b(f.EL3),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillInputHoverDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-input-active-delta",converter:d.Id}),b(f.q_p),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillInputActiveDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-input-focus-delta",converter:d.Id}),b(f.Zbo),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillInputFocusDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-layer-rest-delta",converter:d.Id}),b(f.YL4),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillLayerRestDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-stealth-rest-delta",converter:d.Id}),b(f.qDs),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillStealthRestDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-stealth-hover-delta",converter:d.Id}),b(f.fqe),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillStealthHoverDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-stealth-active-delta",converter:d.Id}),b(f.gs2),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillStealthActiveDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-stealth-focus-delta",converter:d.Id}),b(f.IU$),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillStealthFocusDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-strong-hover-delta",converter:d.Id}),b(f.sc1),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillStrongHoverDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-strong-active-delta",converter:d.Id}),b(f.Vt5),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillStrongActiveDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-fill-strong-focus-delta",converter:d.Id}),b(f.UCF),(0,n.w6)("design:type",Number)],y.prototype,"neutralFillStrongFocusDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"base-layer-luminance",converter:d.Id}),b(f.q2d),(0,n.w6)("design:type",Number)],y.prototype,"baseLayerLuminance",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-stroke-divider-rest-delta",converter:d.Id}),b(f.hD7),(0,n.w6)("design:type",Number)],y.prototype,"neutralStrokeDividerRestDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-stroke-rest-delta",converter:d.Id}),b(f.fd1),(0,n.w6)("design:type",Number)],y.prototype,"neutralStrokeRestDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-stroke-hover-delta",converter:d.Id}),b(f.rnN),(0,n.w6)("design:type",Number)],y.prototype,"neutralStrokeHoverDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-stroke-active-delta",converter:d.Id}),b(f.IMz),(0,n.w6)("design:type",Number)],y.prototype,"neutralStrokeActiveDelta",void 0),(0,n.gn)([(0,d.Lj)({attribute:"neutral-stroke-focus-delta",converter:d.Id}),b(f.Bxy),(0,n.w6)("design:type",Number)],y.prototype,"neutralStrokeFocusDelta",void 0);const w=y.compose({baseName:"design-system-provider",template:u.d`
        <slot></slot>
    `,styles:r.i`
        ${(0,h.j)("block")}
    `})},96824:function(t,e,i){"use strict";i.d(e,{ue:function(){return p}});var n=i(20005),o=i(65620),r=i(15983),a=i(48839);const s="separator";class l extends a.I{constructor(){super(...arguments),this.role=s,this.orientation=r.i.horizontal}}(0,n.gn)([o.Lj],l.prototype,"role",void 0),(0,n.gn)([o.Lj],l.prototype,"orientation",void 0);var c=i(39181);var d=i(53046),u=i(67020),h=i(26755);const p=l.compose({baseName:"divider",template:(t,e)=>c.d`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`,styles:(t,e)=>d.i`
        ${(0,u.j)("block")} :host {
            box-sizing: content-box;
            height: 0;
            margin: calc(${h._5n} * 1px) 0;
            border: none;
            border-top: calc(${h.Han} * 1px) solid ${h.dtw};
        }
    `})},59403:function(t,e,i){"use strict";i.d(e,{EK:function(){return y}});var n=i(20005),o=i(65620),r=i(48839);const a="next",s="previous";class l extends r.I{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=a}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;"Enter"!==e&&"Space"!==e||this.$emit("click",t),"Escape"===e&&this.blur()}}}(0,n.gn)([(0,o.Lj)({mode:"boolean"})],l.prototype,"disabled",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-hidden",converter:o.bw})],l.prototype,"hiddenFromAT",void 0),(0,n.gn)([o.Lj],l.prototype,"direction",void 0);var c=i(39181),d=i(13988);var u=i(53046),h=i(67020),p=i(37139),g=i(56201),f=i(40082),v=i(87839),m=i(2658),b=i(26755);const y=l.compose({baseName:"flipper",template:(t,e)=>c.d`
    <template
        role="button"
        aria-disabled="${t=>!!t.disabled||void 0}"
        tabindex="${t=>t.hiddenFromAT?-1:0}"
        class="${t=>t.direction} ${t=>t.disabled?"disabled":""}"
        @keyup="${(t,e)=>t.keyupHandler(e.event)}"
    >
        ${(0,d.g)((t=>t.direction===a),c.d`
                <span part="next" class="next">
                    <slot name="next">
                        ${e.next||""}
                    </slot>
                </span>
            `)}
        ${(0,d.g)((t=>t.direction===s),c.d`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${e.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`,styles:(t,e)=>u.i`
        ${(0,h.j)("inline-flex")} :host {
            width: calc(${m.i} * 1px);
            height: calc(${m.i} * 1px);
            justify-content: center;
            align-items: center;
            margin: 0;
            position: relative;
            fill: currentcolor;
            color: ${b.CHi};
            background: transparent;
            border: none;
            outline: none;
            padding: 0;
        }

        :host::before {
            content: "";
            opacity: 0.8;
            background: ${b.jql};
            border: calc(${b.Han} * 1px) solid ${b.akT};
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            transition: all 0.1s ease-in-out;
        }

        .next,
        .previous {
            position: relative;
            ${""} width: 16px;
            height: 16px;
        }

        :host(.disabled) {
            opacity: ${b.VFZ};
            cursor: ${p.H};
        }

        :host(:hover) {
            cursor: pointer;
        }

        :host(:hover)::before {
            background: ${b.QpD};
            border-color: ${b.QPc};
        }

        :host(:${g.b}) {
            outline: none;
        }

        :host(:${g.b})::before {
            box-shadow: 0 0 0 1px ${b.yGg} inset;
            border-color: ${b.yGg};
        }

        :host(:active)::before {
            background: ${b.sG3};
            border-color: ${b.c1L};
        }

        :host::-moz-focus-inner {
            border: 0;
        }
    `.withBehaviors((0,f.vF)(u.i`
                :host {
                    background: ${v.H.Canvas};
                }
                :host .next,
                :host .previous {
                    color: ${v.H.ButtonText};
                    fill: currentcolor;
                }
                :host::before {
                    background: ${v.H.Canvas};
                    border-color: ${v.H.ButtonText};
                }
                :host(:hover)::before {
                    forced-color-adjust: none;
                    background: ${v.H.Highlight};
                    border-color: ${v.H.ButtonText};
                    opacity: 1;
                }
                :host(:hover) .next,
                :host(:hover) .previous {
                    forced-color-adjust: none;
                    color: ${v.H.HighlightText};
                    fill: currentcolor;
                }
                :host(.disabled) {
                    opacity: 1;
                }
                :host(.disabled)::before,
                :host(.disabled:hover)::before,
                :host(.disabled) .next,
                :host(.disabled) .previous,
                :host(.disabled:hover) .next,
                :host(.disabled:hover) .previous {
                    forced-color-adjust: none;
                    background: ${v.H.Canvas};
                    border-color: ${v.H.GrayText};
                    color: ${v.H.GrayText};
                    fill: ${v.H.GrayText};
                }
                :host(:${g.b})::before {
                    forced-color-adjust: none;
                    border-color: ${v.H.Highlight};
                    box-shadow: 0 0 0 2px ${v.H.Field},
                        0 0 0 4px ${v.H.FieldText};
                }
            `)),next:'\n    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n        <path\n            d="M4.023 15.273L11.29 8 4.023.727l.704-.704L12.71 8l-7.984 7.977-.704-.704z"\n        />\n    </svg>\n  ',previous:'\n    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n        <path\n            d="M11.273 15.977L3.29 8 11.273.023l.704.704L4.71 8l7.266 7.273-.704.704z"\n        />\n    </svg>\n  '})},63070:function(t,e,i){"use strict";i.d(e,{z:function(){return o}});var n=i(57905);function o(t){return n.K.getOrCreate(t).withPrefix("fluent")}},12249:function(t,e,i){"use strict";i.d(e,{H5:function(){return b}});var n=i(39181),o=i(13988),r=i(58952),a=i(32590),s=i(51208),l=i(72120);var c=i(30562),d=i(53046),u=i(67020),h=i(56201),p=i(37139),g=i(40082),f=i(87839),v=i(2658),m=i(26755);const b=c.sN.compose({baseName:"menu-item",template:(t,e)=>n.d`
    <template
        role="${t=>t.role}"
        aria-haspopup="${t=>t.hasSubmenu?"menu":void 0}"
        aria-checked="${t=>t.role!==l.O.menuitem?t.checked:void 0}"
        aria-disabled="${t=>t.disabled}"
        aria-expanded="${t=>t.expanded}"
        @keydown="${(t,e)=>t.handleMenuItemKeyDown(e.event)}"
        @click="${(t,e)=>t.handleMenuItemClick(e.event)}"
        @mouseover="${(t,e)=>t.handleMouseOver(e.event)}"
        @mouseout="${(t,e)=>t.handleMouseOut(e.event)}"
        class="${t=>t.disabled?"disabled":""} ${t=>t.expanded?"expanded":""} ${t=>`indent-${t.startColumnCount}`}"
    >
            ${(0,o.g)((t=>t.role===l.O.menuitemcheckbox),n.d`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${e.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${(0,o.g)((t=>t.role===l.O.menuitemradio),n.d`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${e.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${(0,s.m9)(t,e)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${(0,s.LC)(t,e)}
        ${(0,o.g)((t=>t.hasSubmenu),n.d`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${e.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${(0,o.g)((t=>t.expanded),n.d`
                <${t.tagFor(a.$)}
                    :anchorElement="${t=>t}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${t=>t.currentDirection}"
                    @loaded="${t=>t.submenuLoaded()}"
                    ${(0,r.i)("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${t.tagFor(a.$)}>
            `)}
    </template>
`,styles:(t,e)=>d.i`
        ${(0,u.j)("grid")} :host {
            contain: layout;
            overflow: visible;
            font-family: ${m.SVJ};
            outline: none;
            box-sizing: border-box;
            height: calc(${v.i} * 1px);
            grid-template-columns: minmax(42px, auto) 1fr minmax(42px, auto);
            grid-template-rows: auto;
            justify-items: center;
            align-items: center;
            padding: 0;
            margin: 0 calc(${m._5n} * 1px);
            white-space: nowrap;
            color: ${m.CHi};
            fill: currentcolor;
            cursor: pointer;
            font-size: ${m.cSu};
            line-height: ${m.RUt};
            border-radius: calc(${m.UWU} * 1px);
            border: calc(${m.Han} * 1px) solid transparent;
        }

        :host(.indent-0) {
            grid-template-columns: auto 1fr minmax(42px, auto);
        }

        :host(.indent-0) .content {
            grid-column: 1;
            grid-row: 1;
            margin-inline-start: 10px;
        }

        :host(.indent-2) {
            grid-template-columns:
                minmax(42px, auto) minmax(42px, auto) 1fr minmax(42px, auto)
                minmax(42px, auto);
        }

        :host(.indent-2) .content {
            grid-column: 3;
            grid-row: 1;
            margin-inline-start: 10px;
        }

        :host(.indent-2) .expand-collapse-glyph-container {
            grid-column: 5;
            grid-row: 1;
        }

        :host(.indent-2) .start {
            grid-column: 2;
        }

        :host(.indent-2) .end {
            grid-column: 4;
        }

        :host(:${h.b}) {
            border: calc(${m.Han} * 1px) solid ${m.yGg};
            box-shadow: 0 0 0 calc((${m.vxp} - ${m.Han}) * 1px)
                ${m.yGg};
        }

        :host(:hover) {
            background: ${m.QpD};
        }

        :host([aria-checked="true"]),
        :host(:active),
        :host(.expanded) {
            background: ${m.sG3};
            color: ${m.CHi};
        }

        :host([disabled]) {
            cursor: ${p.H};
            opacity: ${m.VFZ};
        }

        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg) {
            fill: currentcolor;
        }

        .content {
            grid-column-start: 2;
            justify-self: start;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .start,
        .end {
            display: flex;
            justify-content: center;
        }

        ::slotted(svg) {
            ${""} width: 16px;
            height: 16px;
            display: flex;
        }

        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg) {
            fill: ${m.CHi};
        }

        :host(.indent-1[aria-haspopup="menu"]),
        :host(.indent-1[role="menuitemcheckbox"]),
        :host(.indent-1[role="menuitemradio"]) {
            display: grid;
            grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(
                    42px,
                    auto
                );
            align-items: center;
            min-height: 32px;
        }

        :host(.indent-2:not([aria-haspopup="menu"])) .end {
            grid-column: 5;
        }

        :host .input-container,
        :host .expand-collapse-glyph-container {
            display: none;
        }

        :host([aria-haspopup="menu"]) .expand-collapse-glyph-container,
        :host([role="menuitemcheckbox"]) .input-container,
        :host([role="menuitemradio"]) .input-container {
            display: grid;
            margin-inline-end: 10px;
        }

        :host([aria-haspopup="menu"]) .content,
        :host([role="menuitemcheckbox"]) .content,
        :host([role="menuitemradio"]) .content {
            grid-column-start: 3;
        }

        :host([aria-haspopup="menu"]) .end,
        :host([role="menuitemcheckbox"]) .end,
        :host([role="menuitemradio"]) .end {
            grid-column-start: 4;
        }

        :host .expand-collapse,
        :host .checkbox,
        :host .radio {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 20px;
            height: 20px;
            box-sizing: border-box;
            outline: none;
            margin-inline-start: 10px;
        }

        :host .checkbox {
            border-radius: calc(${m.UWU} * 1px);
        }

        :host .radio {
            border-radius: 999px;
        }

        :host .checkbox-indicator,
        :host .radio-indicator,
        ::slotted([slot="checkbox-indicator"]),
        ::slotted([slot="radio-indicator"]) {
            display: none;
        }

        ::slotted([slot="end"]:not(svg)) {
            margin-inline-end: 10px;
            color: ${m.Q5n};
        }

        :host([aria-checked="true"]) .checkbox-indicator,
        :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]) {
            width: 100%;
            height: 100%;
            display: block;
            fill: ${m.CHi};
            pointer-events: none;
        }

        :host([aria-checked="true"]) .radio-indicator {
            display: block;
            pointer-events: none;
        }

        :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
            display: block;
            pointer-events: none;
        }
    `.withBehaviors((0,g.vF)(d.i`
                :host {
                    forced-color-adjust: none;
                    border-color: transparent;
                    color: ${f.H.ButtonText};
                    fill: ${f.H.ButtonText};
                }
                :host(:hover) {
                    background: ${f.H.Highlight};
                    color: ${f.H.HighlightText};
                }
                :host(:hover) .start,
                :host(:hover) .end,
                :host(:hover)::slotted(svg),
                :host(:active) .start,
                :host(:active) .end,
                :host(:active)::slotted(svg) {
                    fill: ${f.H.HighlightText};
                }

                :host(.expanded) {
                    background: ${f.H.Highlight};
                    border-color: ${f.H.Highlight};
                    color: ${f.H.HighlightText};
                }

                :host(:${h.b}) {
                    background: ${f.H.Highlight};
                    border-color: ${f.H.ButtonText};
                    box-shadow: 0 0 0 calc(${m.Han} * 1px) inset
                        ${f.H.HighlightText};
                    color: ${f.H.HighlightText};
                    fill: currentcolor;
                }

                :host([disabled]),
                :host([disabled]:hover),
                :host([disabled]:hover) .start,
                :host([disabled]:hover) .end,
                :host([disabled]:hover)::slotted(svg) {
                    background: ${f.H.Canvas};
                    color: ${f.H.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }

                :host .expanded-toggle,
                :host .checkbox,
                :host .radio {
                    border-color: ${f.H.ButtonText};
                    background: ${f.H.HighlightText};
                }

                :host([checked="true"]) .checkbox,
                :host([checked="true"]) .radio {
                    background: ${f.H.HighlightText};
                    border-color: ${f.H.HighlightText};
                }

                :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${h.b}) .expanded-toggle,
            :host(:${h.b}) .checkbox,
            :host(:${h.b}) .radio,
            :host([checked="true"]:hover) .checkbox,
            :host([checked="true"]:hover) .radio,
            :host([checked="true"]:${h.b}) .checkbox,
            :host([checked="true"]:${h.b}) .radio {
                    border-color: ${f.H.HighlightText};
                }

                :host([aria-checked="true"]) {
                    background: ${f.H.Highlight};
                    color: ${f.H.HighlightText};
                }

                :host([aria-checked="true"]) .checkbox-indicator,
                :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]),
                :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
                    fill: ${f.H.Highlight};
                }

                :host([aria-checked="true"]) .radio-indicator {
                    background: ${f.H.Highlight};
                }
            `)),checkboxIndicator:'\n    <svg\n        aria-hidden="true"\n        part="checkbox-indicator"\n        class="checkbox-indicator"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n        />\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg\n        viewBox="0 0 16 16"\n        xmlns="http://www.w3.org/2000/svg"\n        class="expand-collapse-glyph"\n        part="expand-collapse-glyph"\n    >\n        <path\n            d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"\n        />\n    </svg>\n  ',radioIndicator:'\n    <svg\n      aria-hidden="true"\n      part="radio-indicator"\n      class="radio-indicator"\n      viewBox="0 0 20 20"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n          fill-rule="evenodd"\n          clip-rule="evenodd"\n          d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n      />\n    </svg>\n  '})},64137:function(t,e,i){"use strict";i.d(e,{q$:function(){return b}});var n=i(20005),o=i(12968),r=i(87697),a=i(67846),s=i(36153),l=i(72120),c=i(30562),d=i(48839);class u extends d.I{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&(0,a.Re)(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const t=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[t].setAttribute("tabindex","0"),this.focusIndex=t}},this.handleItemFocus=t=>{const e=t.target;void 0!==this.menuItems&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||null===t.target||void 0===this.menuItems||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;null===this.expandedItem||e!==this.expandedItem||!1!==e.expanded?e.expanded&&(null!==this.expandedItem&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach((t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)}))},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0);const i=e.reduce(((t,e)=>{const i=function(t){const e=t.getAttribute("role"),i=t.querySelector("[slot=start]");return e!==l.O.menuitem&&null===i||e===l.O.menuitem&&null!==i?1:e!==l.O.menuitem&&null!==i?2:0}(e);return t>i?t:i}),0);e.forEach(((t,e)=>{t.setAttribute("tabindex",0===e?"0":"-1"),t.addEventListener("expanded-change",this.handleExpandedChanged),t.addEventListener("focus",this.handleItemFocus),t instanceof c.sN&&(t.startColumnCount=i)}))},this.changeHandler=t=>{if(void 0===this.menuItems)return;const e=t.target,i=this.menuItems.indexOf(e);if(-1!==i&&"menuitemradio"===e.role&&!0===e.checked){for(let t=i-1;t>=0;--t){const e=this.menuItems[t],i=e.getAttribute("role");if(i===l.O.menuitemradio&&(e.checked=!1),"separator"===i)break}const t=this.menuItems.length-1;for(let e=i+1;e<=t;++e){const t=this.menuItems[e],i=t.getAttribute("role");if(i===l.O.menuitemradio&&(t.checked=!1),"separator"===i)break}}},this.isMenuItemElement=t=>(0,a.Re)(t)&&u.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),o.SO.queueUpdate((()=>{this.setItems()})),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!t.defaultPrevented&&void 0!==this.menuItems)switch(t.key){case s.iF:return void this.setFocus(this.focusIndex+1,1);case s.SB:return void this.setFocus(this.focusIndex-1,-1);case s.Kh:return void this.setFocus(this.menuItems.length-1,-1);case s.tU:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children).filter((t=>!t.hasAttribute("hidden")))}setFocus(t,e){if(void 0!==this.menuItems)for(;t>=0&&t<this.menuItems.length;){const i=this.menuItems[t];if(this.isFocusableElement(i)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,i.setAttribute("tabindex","0"),i.focus();break}t+=e}}}u.focusableElementRoles=l.J,(0,n.gn)([r.LO],u.prototype,"items",void 0);var h=i(39181),p=i(90960);var g=i(53046),f=i(67020),v=i(62734),m=i(26755);const b=u.compose({baseName:"menu",template:(t,e)=>h.d`
    <template
        slot="${t=>t.slot?t.slot:t.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(t,e)=>t.handleMenuKeyDown(e.event)}"
        @focusout="${(t,e)=>t.handleFocusOut(e.event)}"
    >
        <slot ${(0,p.Q)("items")}></slot>
    </template>
`,styles:(t,e)=>g.i`
        ${(0,f.j)("block")} :host {
            --elevation: 11;
            background: ${m.s55};
            border: calc(${m.Han} * 1px) solid transparent;
            border-radius: ${m.rSr};
            ${v.XC}
            margin: 0;
            border-radius: calc(${m.UWU} * 1px);
            padding: calc(${m._5n} * 1px) 0;
            max-width: 368px;
            min-width: 64px;
        }

        :host([slot="submenu"]) {
            width: max-content;
            margin: 0 calc(${m._5n} * 1px);
        }

        ::slotted(hr) {
            box-sizing: content-box;
            height: 0;
            margin: 0;
            border: none;
            border-top: calc(${m.Han} * 1px) solid ${m.dtw};
        }
    `})},60712:function(t,e,i){"use strict";i.d(e,{oM:function(){return b}});var n=i(20005),o=i(65620),r=i(87697),a=i(15983),s=i(36153),l=i(65825),c=i(11433),d=i(48839);class u extends d.I{constructor(){super(...arguments),this.orientation=a.i.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach((t=>{t!==e&&(t.checked=!1,this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"))})),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const i=t[e];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((t=>{t!==i&&t.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var t;null===(t=this.nextElementSibling)||void 0===t||t.focus()},this.moveLeftOffGroup=()=>{var t;null===(t=this.previousElementSibling)||void 0===t||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,i=t.target,n=null!==i?e.indexOf(i):0,o=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(0===o&&n===o||o===e.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach((t=>{t!==this.selectedRadio&&t.setAttribute("tabindex","-1")})))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach((t=>{t!==this.focusedRadio&&t.setAttribute("tabindex","-1")})))),!0},this.clickHandler=t=>{const e=t.target;if(e){const t=this.slottedRadioButtons;e.checked||0===t.indexOf(e)?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,i)=>t===e.length&&this.isInsideToolbar&&i===s.mr,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===s.BE,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,e,t.key))this.moveRightOffGroup();else for(i===e.length&&(i=0);i<e.length&&e.length>1;){if(!e[i].disabled){this.moveToRadioByIndex(e,i);break}if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;if(i+1>=e.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,i=i<0?e.length-1:i,this.shouldMoveOffGroupToTheLeft(e,t.key))this.moveLeftOffGroup();else for(;i>=0&&e.length>1;){if(!e[i].disabled){this.moveToRadioByIndex(e,i);break}if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;i-1<0?i=e.length-1:i-=1}},this.keydownHandler=t=>{const e=t.key;if(e in s.uf&&this.isInsideFoundationToolbar)return!0;switch(e){case s.kL:this.checkFocusedRadio();break;case s.mr:case s.iF:this.direction===l.N.ltr?this.moveRight(t):this.moveLeft(t);break;case s.BE:case s.SB:this.direction===l.N.ltr?this.moveLeft(t):this.moveRight(t);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{this.disabled?t.disabled=!0:t.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{t.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)})),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return null!==(t=this.parentToolbar)&&void 0!==t&&t}get isInsideFoundationToolbar(){var t;return!!(null===(t=this.parentToolbar)||void 0===t?void 0:t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(0,c.M)(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((t=>{t.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const t=this.slottedRadioButtons.filter((t=>t.hasAttribute("checked"))),e=t?t.length:0;if(e>1){t[e-1].checked=!0}let i=!1;if(this.slottedRadioButtons.forEach((t=>{void 0!==this.name&&t.setAttribute("name",this.name),this.disabled&&(t.disabled=!0),this.readOnly&&(t.readOnly=!0),this.value&&this.value===t.value?(this.selectedRadio=t,this.focusedRadio=t,t.checked=!0,t.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"),t.checked=!1),t.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const t=this.slottedRadioButtons.filter((t=>t.hasAttribute("checked"))),e=null!==t?t.length:0;if(e>0&&!i){const i=t[e-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}(0,n.gn)([(0,o.Lj)({attribute:"readonly",mode:"boolean"})],u.prototype,"readOnly",void 0),(0,n.gn)([(0,o.Lj)({attribute:"disabled",mode:"boolean"})],u.prototype,"disabled",void 0),(0,n.gn)([o.Lj],u.prototype,"name",void 0),(0,n.gn)([o.Lj],u.prototype,"value",void 0),(0,n.gn)([o.Lj],u.prototype,"orientation",void 0),(0,n.gn)([r.LO],u.prototype,"childItems",void 0),(0,n.gn)([r.LO],u.prototype,"slottedRadioButtons",void 0);var h=i(39181),p=i(90960),g=i(58689);var f=i(53046),v=i(67020),m=i(26755);const b=u.compose({baseName:"radio-group",template:(t,e)=>h.d`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        @focusout="${(t,e)=>t.focusOutHandler(e.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===a.i.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${(0,p.Q)({property:"slottedRadioButtons",filter:(0,g.R)("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(t,e)=>f.i`
    ${(0,v.j)("flex")} :host {
        align-items: flex-start;
        margin: calc(${m._5n} * 1px) 0;
        flex-direction: column;
    }

    .positioning-region {
        display: flex;
        flex-wrap: wrap;
    }

    :host([orientation="vertical"]) .positioning-region {
        flex-direction: column;
    }

    :host([orientation="horizontal"]) .positioning-region {
        flex-direction: row;
    }
`})},65033:function(t,e,i){"use strict";i.d(e,{d$:function(){return C}});var n=i(20005),o=i(65620),r=i(87697),a=i(36153),s=i(82500),l=i(48839);class c extends l.I{}class d extends((0,s.V2)(c)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class u extends d{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(t.key!==a.BI)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(t=this.parentElement)||void 0===t?void 0:t.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(t){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}(0,n.gn)([(0,o.Lj)({attribute:"readonly",mode:"boolean"})],u.prototype,"readOnly",void 0),(0,n.gn)([r.LO],u.prototype,"name",void 0),(0,n.gn)([r.LO],u.prototype,"defaultSlottedNodes",void 0);var h=i(39181),p=i(90960);var g=i(53046),f=i(67020),v=i(56201),m=i(37139),b=i(40082),y=i(87839),w=i(2658),x=i(26755);const C=u.compose({baseName:"radio",template:(t,e)=>h.d`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,p.Q)("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(t,e)=>g.i`
        ${(0,f.j)("inline-flex")} :host {
            --input-size: calc((${w.i} / 2) + ${x._5n});
            align-items: center;
            outline: none;
            margin: calc(${x._5n} * 1px) 0;
            ${""} user-select: none;
            position: relative;
            flex-direction: row;
            transition: all 0.2s ease-in-out;
        }

        .control {
            position: relative;
            width: calc(var(--input-size) * 1px);
            height: calc(var(--input-size) * 1px);
            box-sizing: border-box;
            border-radius: 50%;
            border: calc(${x.Han} * 1px) solid ${x.rU8};
            background: ${x._Bj};
            outline: none;
            cursor: pointer;
        }

        .label__hidden {
            display: none;
            visibility: hidden;
        }

        .label {
            font-family: ${x.SVJ};
            color: ${x.CHi};
            ${""} padding-inline-start: calc(${x._5n} * 2px + 2px);
            margin-inline-end: calc(${x._5n} * 2px + 2px);
            cursor: pointer;
            font-size: ${x.cSu};
            line-height: ${x.RUt};
        }

        .control,
        .checked-indicator {
            flex-shrink: 0;
        }

        .checked-indicator {
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border-radius: 50%;
            display: inline-block;
            background: ${x.CHi};
            fill: ${x.CHi};
            opacity: 0;
            pointer-events: none;
        }

        :host(:enabled) .control:hover {
            background: ${x.Tm7};
            border-color: ${x.gKw};
        }

        :host(:enabled) .control:active {
            background: ${x.Ium};
            border-color: ${x.ekh};
        }

        :host(:${v.b}) .control {
            box-shadow: 0 0 0 2px ${x.IfY}, 0 0 0 4px ${x.yGg};
            border-color: ${x.yGg};
        }

        :host(.disabled) .label,
        :host(.readonly) .label,
        :host(.readonly) .control,
        :host(.disabled) .control {
            cursor: ${m.H};
        }

        :host(.checked) .checked-indicator {
            opacity: 1;
        }

        :host(.disabled) {
            opacity: ${x.VFZ};
        }
    `.withBehaviors((0,b.vF)(g.i`
                .control {
                    forced-color-adjust: none;
                    border-color: ${y.H.FieldText};
                    background: ${y.H.Field};
                }
                :host(:enabled) .control:hover,
                .control:active {
                    border-color: ${y.H.Highlight};
                    background: ${y.H.Field};
                }
                :host(:${v.b}) .control {
                    border-color: ${y.H.Highlight};
                    box-shadow: 0 0 0 2px ${y.H.Field},
                        0 0 0 4px ${y.H.FieldText};
                }
                :host(.checked:${v.b}:enabled) .control {
                    border-color: ${y.H.Highlight};
                    box-shadow: 0 0 0 2px ${y.H.Field},
                        0 0 0 4px ${y.H.FieldText};
                }
                :host(.checked:enabled) .control:hover,
                .control:active {
                    border-color: ${y.H.Highlight};
                    background: ${y.H.Highlight};
                }
                :host(.checked) .checked-indicator {
                    background: ${y.H.Highlight};
                    fill: ${y.H.Highlight};
                }
                :host(.checked) .control:hover .checked-indicator {
                    background: ${y.H.HighlightText};
                    fill: ${y.H.HighlightText};
                }
                :host(.disabled) {
                    forced-color-adjust: none;
                    opacity: 1;
                }
                :host(.disabled) .label {
                    color: ${y.H.GrayText};
                }
                :host(.disabled) .control,
                :host(.checked.disabled) .control:hover,
                .control:active {
                    background: ${y.H.Field};
                    border-color: ${y.H.GrayText};
                }
                :host(.disabled) .checked-indicator,
                :host(.checked.disabled) .control:hover .checked-indicator {
                    fill: ${y.H.GrayText};
                    background: ${y.H.GrayText};
                }
            `)),checkedIndicator:'\n    <div part="checked-indicator" class="checked-indicator"></div>\n  '})},45597:function(t,e,i){"use strict";i.d(e,{O8:function(){return g},Xu:function(){return h},cg:function(){return f},jQ:function(){return u},vN:function(){return d},vt:function(){return p}});var n=i(53046),o=i(67020),r=i(56201),a=i(40082),s=i(87839),l=i(2658),c=i(26755);const d=(t,e)=>n.i`
        ${(0,o.j)("inline-flex")} :host {
            font-family: ${c.SVJ};
            outline: none;
            font-size: ${c.cSu};
            line-height: ${c.RUt};
            height: calc(${l.i} * 1px);
            min-width: calc(${l.i} * 1px);
            background-color: ${c.wFS};
            color: ${c.CHi};
            border-radius: calc(${c.UWU} * 1px);
            fill: currentcolor;
            cursor: pointer;
        }

        .control {
            background: transparent;
            height: inherit;
            flex-grow: 1;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 0 calc((10 + (${c._5n} * 2 * ${c.hVk})) * 1px);
            white-space: nowrap;
            outline: none;
            text-decoration: none;
            border: calc(${c.Han} * 1px) solid transparent;
            color: inherit;
            border-radius: inherit;
            fill: inherit;
            cursor: inherit;
            font-family: inherit;
        }

        .control,
        .end,
        .start {
            font: inherit;
        }

        .control.icon-only {
            padding: 0;
            line-height: 0;
        }

        :host(:hover) {
            background-color: ${c.XiB};
        }

        :host(:active) {
            background-color: ${c.Gy2};
        }

        ${""}
        .control:${r.b} {
            border: calc(${c.Han} * 1px) solid ${c.yGg};
            box-shadow: 0 0 0 calc((${c.vxp} - ${c.Han}) * 1px)
                ${c.yGg};
        }

        .control::-moz-focus-inner {
            border: 0;
        }

        .content {
            pointer-events: none;
        }

        .start,
        .end {
            display: flex;
            pointer-events: none;
        }

        ::slotted(svg) {
            ${""} width: 16px;
            height: 16px;
            pointer-events: none;
        }

        .start {
            margin-inline-end: 11px;
        }

        .end {
            margin-inline-start: 11px;
        }
    `.withBehaviors((0,a.vF)(n.i`
        :host,
        :host([appearance="neutral"]) .control {
          background-color: ${s.H.ButtonFace};
          border-color: ${s.H.ButtonText};
          color: ${s.H.ButtonText};
          fill: currentcolor;
        }

        :host(:not([disabled][href]):hover),
        :host([appearance="neutral"]:not([disabled]):hover) .control {
          forced-color-adjust: none;
          background-color: ${s.H.Highlight};
          color: ${s.H.HighlightText};
        }

        .control:${r.b},
        :host([appearance="outline"]) .control:${r.b},
        :host([appearance="neutral"]:${r.b}) .control {
          forced-color-adjust: none;
          background-color: ${s.H.Highlight};
          border-color: ${s.H.ButtonText};
          box-shadow: 0 0 0 calc((${c.vxp} - ${c.Han}) * 1px) ${s.H.ButtonText};
          color: ${s.H.HighlightText};
        }

        .control:not([disabled]):hover,
        :host([appearance="outline"]) .control:hover {
          border-color: ${s.H.ButtonText};
        }

        :host([href]) .control {
          border-color: ${s.H.LinkText};
          color: ${s.H.LinkText};
        }

        :host([href]) .control:hover,
        :host(.neutral[href]) .control:hover,
        :host(.outline[href]) .control:hover,
        :host([href]) .control:${r.b}{
          forced-color-adjust: none;
          background: ${s.H.ButtonFace};
          border-color: ${s.H.LinkText};
          box-shadow: 0 0 0 1px ${s.H.LinkText} inset;
          color: ${s.H.LinkText};
          fill: currentcolor;
        }
    `)),u=n.i`
    :host([appearance="accent"]) {
        background: ${c.Avx};
        color: ${c.w41};
    }

    :host([appearance="accent"]:hover) {
        background: ${c.OCG};
        color: ${c.lJV};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${c.UEO};
        color: ${c.PpH};
    }

    :host([appearance="accent"]) .control:${r.b} {
        box-shadow: 0 0 0 calc(${c.vxp} * 1px) inset ${c.a2F},
            0 0 0 calc((${c.vxp} - ${c.Han}) * 1px) ${c.yGg};
    }
`.withBehaviors((0,a.vF)(n.i`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${s.H.Highlight};
                color: ${s.H.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${s.H.HighlightText};
                border-color: ${s.H.Highlight};
                color: ${s.H.Highlight};
            }

            :host([appearance="accent"]) .control:${r.b} {
                border-color: ${s.H.ButtonText};
                box-shadow: 0 0 0 2px ${s.H.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control {
                background: ${s.H.LinkText};
                color: ${s.H.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${s.H.ButtonFace};
                border-color: ${s.H.LinkText};
                box-shadow: none;
                color: ${s.H.LinkText};
                fill: currentcolor;
            }

            :host([appearance="accent"][href]) .control:${r.b} {
                border-color: ${s.H.LinkText};
                box-shadow: 0 0 0 2px ${s.H.HighlightText} inset;
            }
        `)),h=n.i`
    :host([appearance="hypertext"]) {
        height: auto;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
        min-width: 0;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }
    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${c.goi};
        border-bottom: calc(${c.Han} * 1px) solid ${c.goi};
    }
    :host([appearance="hypertext"]) .control:hover {
        border-bottom-color: ${c.D9J};
    }
    :host([appearance="hypertext"]) .control:active {
        border-bottom-color: ${c.VNr};
    }
    :host([appearance="hypertext"]) .control:${r.b} {
        border-bottom: calc(${c.vxp} * 1px) solid ${c.yGg};
        margin-bottom: calc(calc(${c.Han} - ${c.vxp}) * 1px);
    }
`.withBehaviors((0,a.vF)(n.i`
            :host([appearance="hypertext"]) .control:${r.b} {
                color: ${s.H.LinkText};
                border-bottom-color: ${s.H.LinkText};
            }
        `)),p=n.i`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${c.goi};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        color: ${c.D9J};
    }

    :host([appearance="lightweight"]:active) {
        color: ${c.VNr};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${c.Han} * 1px);
        position: absolute;
        top: calc(1em + 3px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${c.D9J};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${c.VNr};
    }

    :host([appearance="lightweight"]) .control:${r.b} .content::before {
        background: ${c.CHi};
        height: calc(${c.vxp} * 1px);
    }
`.withBehaviors((0,a.vF)(n.i`
            :host([appearance="lightweight"]) {
                color: ${s.H.ButtonText};
            }
            :host([appearance="lightweight"]) .control:hover,
        :host([appearance="lightweight"]) .control:${r.b} {
                forced-color-adjust: none;
                background: ${s.H.ButtonFace};
                color: ${s.H.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
        :host([appearance="lightweight"]) .control:${r.b} .content::before {
                background: ${s.H.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
        :host([appearance="lightweight"][href]) .control:${r.b} {
                background: ${s.H.ButtonFace};
                box-shadow: none;
                color: ${s.H.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
        :host([appearance="lightweight"][href]) .control:${r.b} .content::before {
                background: ${s.H.LinkText};
            }
        `)),g=n.i`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${c.akT};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${c.QPc};
    }

    :host([appearance="outline"]:active) {
        border-color: ${c.c1L};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${r.b} {
        box-shadow: 0 0 0 calc((${c.vxp} - ${c.Han}) * 1px)
            ${c.yGg};
        border-color: ${c.yGg};
    }
`.withBehaviors((0,a.vF)(n.i`
            :host([appearance="outline"]) {
                border-color: ${s.H.ButtonText};
            }
            :host([appearance="outline"][href]) {
                border-color: ${s.H.LinkText};
            }
        `)),f=n.i`
    :host([appearance="stealth"]) {
        background: ${c.jql};
    }

    :host([appearance="stealth"]:hover) {
        background: ${c.QpD};
    }

    :host([appearance="stealth"]:active) {
        background: ${c.sG3};
    }
`.withBehaviors((0,a.vF)(n.i`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${s.H.ButtonFace};
                border-color: transparent;
                color: ${s.H.ButtonText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${s.H.Highlight};
                border-color: ${s.H.Highlight};
                color: ${s.H.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:${r.b}) .control {
                background: ${s.H.Highlight};
                box-shadow: 0 0 0 1px ${s.H.Highlight};
                color: ${s.H.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${s.H.LinkText};
            }

            :host([appearance="stealth"]:hover[href]) .control,
        :host([appearance="stealth"]:${r.b}[href]) .control {
                background: ${s.H.LinkText};
                border-color: ${s.H.LinkText};
                color: ${s.H.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:${r.b}[href]) .control {
                box-shadow: 0 0 0 1px ${s.H.LinkText};
            }
        `))},74358:function(t,e,i){"use strict";i.d(e,{n:function(){return r}});var n=i(53046),o=i(26755);const r=(t,e)=>n.i`
    :host([appearance="filled"]:not(.disabled):active)::after,
    :host([appearance="filled"]:not(.disabled):focus-within:not(:active))::after {
        content: "";
        position: absolute;
        bottom: 0;
        border-bottom: calc(${o.vxp} * 1px) solid ${o.Avx};
        border-bottom-left-radius: calc(${o.UWU} * 1px);
        border-bottom-right-radius: calc(${o.UWU} * 1px);
        z-index: 2;
        transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }

    :host([appearance="filled"]:not(.disabled):active)::after {
        left: 50%;
        width: 40%;
        transform: translateX(-50%);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    :host([appearance="filled"]:not(.disabled):focus-within:not(:active))::after {
        left: 0;
        width: 100%;
    }
`},39391:function(t,e,i){"use strict";i.d(e,{xg:function(){return $}});var n=i(20005),o=i(65620),r=i(87697),a=i(36153),s=i(82500),l=i(48839);class c extends l.I{}class d extends((0,s.V2)(c)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class u extends d{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case a.kL:case a.BI:this.checked=!this.checked}},this.clickHandler=t=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}(0,n.gn)([(0,o.Lj)({attribute:"readonly",mode:"boolean"})],u.prototype,"readOnly",void 0),(0,n.gn)([r.LO],u.prototype,"defaultSlottedNodes",void 0);var h=i(39181),p=i(90960);var g=i(53046),f=i(67020),v=i(37139),m=i(56201),b=i(40082),y=i(87839),w=i(2658),x=i(22674),C=i(26755);const $=u.compose({baseName:"switch",template:(t,e)=>h.d`
    <template
        role="switch"
        aria-checked="${t=>t.checked}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        class="${t=>t.checked?"checked":""}"
    >
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,p.Q)("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${e.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`,styles:(t,e)=>g.i`
        :host([hidden]) {
            display: none;
        }

        ${(0,f.j)("inline-flex")} :host {
            align-items: center;
            outline: none;
            font-family: ${C.SVJ};
            margin: calc(${C._5n} * 1px) 0;
            ${""} user-select: none;
        }

        :host(.disabled) {
            opacity: ${C.VFZ};
        }

        :host(.disabled) .label,
        :host(.readonly) .label,
        :host(.readonly) .switch,
        :host(.disabled) .switch {
            cursor: ${v.H};
        }

        .switch {
            position: relative;
            outline: none;
            box-sizing: border-box;
            width: calc(((${w.i} / 2) + ${C._5n}) * 2px);
            height: calc(((${w.i} / 2) + ${C._5n}) * 1px);
            background: ${C._Bj};
            border-radius: calc(${w.i} * 1px);
            border: calc(${C.Han} * 1px) solid ${C.rU8};
        }

        :host(:enabled) .switch:hover {
            background: ${C.Tm7};
            border-color: ${C.gKw};
            cursor: pointer;
        }

        :host(:enabled) .switch:active {
            background: ${C.Ium};
            border-color: ${C.ekh};
        }

        :host(:${m.b}) .switch {
            box-shadow: 0 0 0 2px ${C.IfY}, 0 0 0 4px ${C.yGg};
            border-color: ${C.yGg};
        }

        .checked-indicator {
            position: absolute;
            height: calc((${w.i} - (${C._5n} * 5.5)) * 1px);
            width: calc((${w.i} - (${C._5n} * 5.5)) * 1px);
            top: calc(${C._5n} * 1px);
            background: ${C.CHi};
            border-radius: 50%;
            transition: all 0.2s ease-in-out;
        }

        .status-message {
            color: ${C.CHi};
            cursor: pointer;
            font-size: ${C.cSu};
            line-height: ${C.RUt};
        }

        .label__hidden {
            display: none;
            visibility: hidden;
        }

        .label {
            color: ${C.CHi};
            font-size: ${C.cSu};
            line-height: ${C.RUt};
            margin-inline-end: calc(${C._5n} * 2px + 2px);
            cursor: pointer;
        }

        ::slotted(*) {
            ${""} margin-inline-start: calc(${C._5n} * 2px + 2px);
        }

        :host([aria-checked="true"]) .checked-indicator {
            background: ${C.w41};
        }

        :host([aria-checked="true"]) .switch {
            background: ${C.Avx};
        }

        :host([aria-checked="true"]:enabled) .switch:hover {
            background: ${C.OCG};
        }

        :host([aria-checked="true"]:enabled) .switch:hover .checked-indicator {
            background: ${C.lJV};
        }

        :host([aria-checked="true"]:enabled) .switch:active {
            background: ${C.UEO};
        }

        :host([aria-checked="true"]:enabled) .switch:active .checked-indicator {
            background: ${C.PpH};
        }

        :host([aria-checked="true"]:${m.b}:enabled) .switch {
            box-shadow: 0 0 0 2px ${C.IfY}, 0 0 0 4px ${C.yGg};
            border-color: transparent;
        }

        .unchecked-message {
            display: block;
        }

        .checked-message {
            display: none;
        }

        :host([aria-checked="true"]) .unchecked-message {
            display: none;
        }

        :host([aria-checked="true"]) .checked-message {
            display: block;
        }
    `.withBehaviors(new x.O(g.i`
                .checked-indicator {
                    left: calc(${C._5n} * 1px);
                }

                :host([aria-checked="true"]) .checked-indicator {
                    left: calc(
                        (((${w.i} / 2) + ${C._5n}) + ${C._5n}) * 1px
                    );
                }
            `,g.i`
                .checked-indicator {
                    right: calc(${C._5n} * 1px);
                }

                :host([aria-checked="true"]) .checked-indicator {
                    right: calc(
                        (((${w.i} / 2) + ${C._5n}) + ${C._5n}) * 1px
                    );
                }
            `),(0,b.vF)(g.i`
                .checked-indicator,
                :host(:enabled) .switch:active .checked-indicator {
                    forced-color-adjust: none;
                    background: ${y.H.FieldText};
                }
                .switch {
                    forced-color-adjust: none;
                    background: ${y.H.Field};
                    border-color: ${y.H.FieldText};
                }
                :host(:enabled) .switch:hover {
                    background: ${y.H.HighlightText};
                    border-color: ${y.H.Highlight};
                }
                :host(.checked) .switch {
                    background: ${y.H.Highlight};
                    border-color: ${y.H.Highlight};
                }
                :host(.checked:enabled) .switch:hover,
                :host(:enabled) .switch:active {
                    background: ${y.H.HighlightText};
                    border-color: ${y.H.Highlight};
                }
                :host(.checked) .checked-indicator {
                    background: ${y.H.HighlightText};
                }
                :host(.checked:enabled) .switch:hover .checked-indicator {
                    background: ${y.H.Highlight};
                }
                :host(:${m.b}) .switch {
                    border-color: ${y.H.Highlight};
                    box-shadow: 0 0 0 2px ${y.H.Field},
                        0 0 0 4px ${y.H.FieldText};
                }
                :host(.checked:${m.b}:enabled) .switch {
                    box-shadow: 0 0 0 2px ${y.H.Field},
                        0 0 0 4px ${y.H.FieldText};
                }
                :host(.disabled) {
                    opacity: 1;
                }
                :host(.disabled) .checked-indicator {
                    background: ${y.H.GrayText};
                }
                :host(.disabled) .switch {
                    background: ${y.H.Field};
                    border-color: ${y.H.GrayText};
                }
                .status-message,
                .label {
                    color: ${y.H.FieldText};
                }
            `)),switch:'\n    <span class="checked-indicator" part="checked-indicator"></span>\n  '})},31258:function(t,e,i){"use strict";i.d(e,{i0:function(){return C}});var n=i(33940),o=i(39181),r=i(90960),a=i(58952),s=i(51208);function l(t,e,i){return t.nodeType!==Node.TEXT_NODE||"string"==typeof t.nodeValue&&!!t.nodeValue.trim().length}var c=i(99096),d=i(65620),u=i(53046),h=i(40082),p=i(87839),g=i(67020),f=i(56201),v=i(37139),m=i(74358),b=i(2658),y=i(82636),w=i(26755);class x extends c.nv{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}(0,n.gn)([d.Lj,(0,n.w6)("design:type",String)],x.prototype,"appearance",void 0);const C=x.compose({baseName:"text-field",baseClass:c.nv,template:(t,e)=>o.d`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${(0,r.Q)({property:"defaultSlottedNodes",filter:l})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${(0,s.m9)(t,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${(0,a.i)("control")}
            />
            ${(0,s.LC)(t,e)}
        </div>
    </template>
`,styles:(t,e)=>u.i`
        ${(0,g.j)("inline-block")} :host {
            font-family: ${w.SVJ};
            outline: none;
            user-select: none;
            position: relative;
        }

        .root {
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-direction: row;
            color: ${w.CHi};
            background: ${w._Bj};
            border-radius: calc(${w.UWU} * 1px);
            border: calc(${w.Han} * 1px) solid ${w.akT};
            height: calc(${b.i} * 1px);
        }

        .control {
            -webkit-appearance: none;
            background: transparent;
            border: 0;
            height: calc(100% - 4px);
            width: 100%;
            margin-top: auto;
            margin-bottom: auto;
            border: none;
            padding: 0 calc(${w._5n} * 2px + 1px);
            color: ${w.CHi};
            font-family: inherit;
            font-size: ${w.cSu};
            line-height: ${w.RUt};
        }

        .control:hover,
    .control:${f.b},
    .control:disabled,
    .control:active {
            outline: none;
        }

        .label {
            display: block;
            color: ${w.CHi};
            cursor: pointer;
            font-size: ${w.cSu};
            line-height: ${w.RUt};
            margin-bottom: 4px;
        }

        .label__hidden {
            display: none;
            visibility: hidden;
        }

        .start,
        .end {
            display: flex;
            margin: auto;
            fill: currentcolor;
        }

        ::slotted(svg) {
            ${""} width: 16px;
            height: 16px;
        }

        .start {
            margin-inline-start: 11px;
        }

        .end {
            margin-inline-end: 11px;
        }

        :host(:hover:not(.disabled)) .root {
            background: ${w.Tm7};
            border-color: ${w.QPc};
        }

        :host(:focus-within:not(.disabled)) .root {
            border-color: ${w.yGg};
            box-shadow: 0 0 0 1px ${w.yGg} inset;
        }

        :host(.disabled) .label,
        :host(.readonly) .label,
        :host(.readonly) .control,
        :host(.disabled) .control {
            cursor: ${v.H};
        }

        :host(.disabled) {
            opacity: ${w.VFZ};
        }
    `.withBehaviors((0,y.H)("filled",((t,e)=>u.i`
        :host([appearance="filled"]) .root {
            background: ${w.wFS};
            border-color: transparent;
        }

        :host([appearance="filled"]:hover:not(.disabled)) .root {
            background: ${w.XiB};
            border-color: transparent;
        }

        :host([appearance="filled"]:focus-within:not(.disabled)) .root {
            border-color: transparent;
            box-shadow: none;
        }
        ${(0,m.n)(t,e)}
    `.withBehaviors((0,h.vF)(u.i`
                :host([appearance="filled"]) .root {
                    background: ${p.H.Field};
                    border-color: ${p.H.FieldText};
                }
                :host([appearance="filled"]:hover:not([disabled])) .root,
                :host([appearance="filled"]:focus-within:not([disabled])) .root {
                    background: ${p.H.Field};
                    border-color: ${p.H.FieldText};
                }
                :host([appearance="filled"]:active:not([disabled])) .root {
                    background: ${p.H.Field};
                    border-color: ${p.H.FieldText};
                }
                :host([appearance="filled"]:not([disabled]):active)::after,
                :host([appearance="filled"]:not([disabled]):focus-within:not(:active))::after {
                    border-bottom-color: ${p.H.Highlight};
                }
                :host([appearance="filled"][disabled]) .root {
                    border-color: ${p.H.GrayText};
                    background: ${p.H.Field};
                }
            `)))(t,e)),(0,h.vF)(u.i`
                .root {
                    forced-color-adjust: none;
                    background: ${p.H.Field};
                    border-color: ${p.H.FieldText};
                }
                :host(:hover:not(.disabled)) .root {
                    background: ${p.H.Field};
                    border-color: ${p.H.Highlight};
                }
                .start,
                .end {
                    fill: ${p.H.ButtonText};
                }
                :host(.disabled) {
                    opacity: 1;
                }
                :host(.disabled) .root {
                    border-color: ${p.H.GrayText};
                    background: ${p.H.Field};
                }
                :host(:focus-within:enabled) .root {
                    border-color: ${p.H.Highlight};
                    box-shadow: 0 0 0 1px ${p.H.Highlight} inset;
                }
                .control {
                    color: ${p.H.ButtonText};
                }
                ::placeholder,
                ::-webkit-input-placeholder {
                    color: ${p.H.FieldText};
                }
                :host(.disabled) ::placeholder,
                :host(.disabled) ::-webkit-input-placeholder,
                :host([disabled]) .label {
                    color: ${p.H.GrayText};
                }
            `)),shadowOptions:{delegatesFocus:!0}})},82636:function(t,e,i){"use strict";i.d(e,{H:function(){return o}});var n=i(81493);function o(t,e){return new n.w("appearance",t,e)}},26755:function(t,e,i){"use strict";i.d(e,{UEO:function(){return Kt},Woc:function(){return Y},D8M:function(){return Xt},v$0:function(){return J},OCG:function(){return Qt},B23:function(){return X},Avx:function(){return Gt},N7s:function(){return K},VNr:function(){return ce},kb6:function(){return it},QOc:function(){return ri},ndN:function(){return nt},D9J:function(){return le},L8d:function(){return et},goi:function(){return se},kpA:function(){return tt},au1:function(){return Mt},nfe:function(){return C},LQ3:function(){return $},q2d:function(){return Q},SVJ:function(){return I},UWU:function(){return D},hVk:function(){return k},_5n:function(){return L},o7V:function(){return w},VFZ:function(){return x},IfY:function(){return qt},a2F:function(){return _e},yGg:function(){return Ne},vxp:function(){return F},PpH:function(){return ie},$uW:function(){return ne},lJV:function(){return ee},w41:function(){return te},rSr:function(){return S},eNK:function(){return ai},Gy2:function(){return pe},hDF:function(){return at},VQw:function(){return st},XiB:function(){return he},jWw:function(){return rt},Ium:function(){return me},q_p:function(){return dt},Zbo:function(){return ut},Tm7:function(){return ve},EL3:function(){return ct},_Bj:function(){return fe},efx:function(){return lt},abR:function(){return ye},RJY:function(){return we},YL4:function(){return vt},wFS:function(){return ue},MYN:function(){return ot},sG3:function(){return ke},gs2:function(){return yt},IU$:function(){return wt},QpD:function(){return $e},fqe:function(){return bt},jql:function(){return Ce},qDs:function(){return mt},Vt5:function(){return $t},UCF:function(){return kt},Dgm:function(){return Se},sc1:function(){return Ct},P0N:function(){return De},Q5n:function(){return Ze},axZ:function(){return We},CHi:function(){return qe},y9A:function(){return zt},spb:function(){return Ut},$Bw:function(){return At},s55:function(){return Bt},yvm:function(){return Rt},c1L:function(){return Oe},IMz:function(){return St},dtw:function(){return Me},hD7:function(){return Ft},V0Z:function(){return He},Bxy:function(){return Tt},QPc:function(){return Ie},rnN:function(){return Dt},akT:function(){return Fe},fd1:function(){return Lt},ekh:function(){return Be},nDv:function(){return Ve},gKw:function(){return Ee},rU8:function(){return Ae},Han:function(){return T},cSu:function(){return O},RUt:function(){return H},sNp:function(){return R},vgC:function(){return M},G8g:function(){return P},MwG:function(){return A},PwC:function(){return E},b3W:function(){return B},mWK:function(){return V},I7_:function(){return z},ipv:function(){return N},yGZ:function(){return j},IWd:function(){return _},iL4:function(){return U},CXZ:function(){return q},n5T:function(){return W},Zaf:function(){return Z},yDy:function(){return G}});var n=i(98648),o=i(26007),r=i(89949);var a=i(64087);var s=i(11162),l=i(42355);const c=l.w.create(1,1,1),d=l.w.create(0,0,0),u=l.w.create(.5,.5,.5),h=(0,s.in)("#0078D4"),p=l.w.create(h.r,h.g,h.b);var g=i(82917),f=i(78125);function v(t,e,i,n,o,r){return Math.max(t.closestIndexOf((0,f.C)(e))+i,n,o,r)}var m=i(3794);function b(t,e,i,n,o,r,s){const l=t.closestIndexOf(e);return null==s&&(s=(0,a.a)(e)),{rest:t.get(l+s*i),hover:t.get(l+s*n),active:t.get(l+s*o),focus:t.get(l+s*r)}}const{create:y}=n.L,w=y("direction").withDefault(o.N.ltr),x=y("disabled-opacity").withDefault(.3),C=y("base-height-multiplier").withDefault(8),$=y("base-horizontal-spacing-multiplier").withDefault(3),k=y("density").withDefault(0),L=y("design-unit").withDefault(4),D=y("control-corner-radius").withDefault(4),S=y("layer-corner-radius").withDefault(4),T=y("stroke-width").withDefault(1),F=y("focus-stroke-width").withDefault(2),I=y("body-font").withDefault("Segoe UI, sans-serif"),O=y("type-ramp-base-font-size").withDefault("14px"),H=y("type-ramp-base-line-height").withDefault("20px"),R=y("type-ramp-minus-1-font-size").withDefault("12px"),M=y("type-ramp-minus-1-line-height").withDefault("16px"),P=y("type-ramp-minus-2-font-size").withDefault("10px"),A=y("type-ramp-minus-2-line-height").withDefault("14px"),E=y("type-ramp-plus-1-font-size").withDefault("16px"),B=y("type-ramp-plus-1-line-height").withDefault("22px"),V=y("type-ramp-plus-2-font-size").withDefault("20px"),z=y("type-ramp-plus-2-line-height").withDefault("28px"),N=y("type-ramp-plus-3-font-size").withDefault("24px"),j=y("type-ramp-plus-3-line-height").withDefault("32px"),_=y("type-ramp-plus-4-font-size").withDefault("28px"),U=y("type-ramp-plus-4-line-height").withDefault("36px"),q=y("type-ramp-plus-5-font-size").withDefault("32px"),W=y("type-ramp-plus-5-line-height").withDefault("40px"),Z=y("type-ramp-plus-6-font-size").withDefault("40px"),G=y("type-ramp-plus-6-line-height").withDefault("52px"),Q=y("base-layer-luminance").withDefault(f.h.LightMode),K=y("accent-fill-rest-delta").withDefault(0),X=y("accent-fill-hover-delta").withDefault(4),Y=y("accent-fill-active-delta").withDefault(-5),J=y("accent-fill-focus-delta").withDefault(0),tt=y("accent-foreground-rest-delta").withDefault(0),et=y("accent-foreground-hover-delta").withDefault(6),it=y("accent-foreground-active-delta").withDefault(-4),nt=y("accent-foreground-focus-delta").withDefault(0),ot=y("neutral-fill-rest-delta").withDefault(7),rt=y("neutral-fill-hover-delta").withDefault(10),at=y("neutral-fill-active-delta").withDefault(5),st=y("neutral-fill-focus-delta").withDefault(0),lt=y("neutral-fill-input-rest-delta").withDefault(0),ct=y("neutral-fill-input-hover-delta").withDefault(0),dt=y("neutral-fill-input-active-delta").withDefault(0),ut=y("neutral-fill-input-focus-delta").withDefault(0),ht=y("neutral-fill-inverse-rest-delta").withDefault(0),pt=y("neutral-fill-inverse-hover-delta").withDefault(-3),gt=y("neutral-fill-inverse-active-delta").withDefault(7),ft=y("neutral-fill-inverse-focus-delta").withDefault(0),vt=y("neutral-fill-layer-rest-delta").withDefault(3),mt=y("neutral-fill-stealth-rest-delta").withDefault(0),bt=y("neutral-fill-stealth-hover-delta").withDefault(5),yt=y("neutral-fill-stealth-active-delta").withDefault(3),wt=y("neutral-fill-stealth-focus-delta").withDefault(0),xt=y("neutral-fill-strong-rest-delta").withDefault(0),Ct=y("neutral-fill-strong-hover-delta").withDefault(8),$t=y("neutral-fill-strong-active-delta").withDefault(-5),kt=y("neutral-fill-strong-focus-delta").withDefault(0),Lt=y("neutral-stroke-rest-delta").withDefault(25),Dt=y("neutral-stroke-hover-delta").withDefault(40),St=y("neutral-stroke-active-delta").withDefault(16),Tt=y("neutral-stroke-focus-delta").withDefault(25),Ft=y("neutral-stroke-divider-rest-delta").withDefault(8),It=y("neutral-stroke-strong-hover-delta").withDefault(40),Ot=y("neutral-stroke-strong-active-delta").withDefault(16),Ht=y("neutral-stroke-strong-focus-delta").withDefault(25),Rt=y({name:"neutral-palette",cssCustomPropertyName:null}).withDefault(r.v.create(u)),Mt=y({name:"accent-palette",cssCustomPropertyName:null}).withDefault(r.v.create(p)),Pt=y({name:"neutral-layer-card-container-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i){const n=(0,g.uZ)(t.closestIndexOf((0,f.C)(e))-i,0,t.swatches.length-1);return t.get(n+i)}(Rt.getValueFor(t),Q.getValueFor(t),vt.getValueFor(t))}),At=y("neutral-layer-card-container").withDefault((t=>Pt.getValueFor(t).evaluate(t))),Et=y({name:"neutral-layer-floating-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i){const n=t.closestIndexOf((0,f.C)(e))-i;return t.get(n-i)}(Rt.getValueFor(t),Q.getValueFor(t),vt.getValueFor(t))}),Bt=y("neutral-layer-floating").withDefault((t=>Et.getValueFor(t).evaluate(t))),Vt=y({name:"neutral-layer-1-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e){return t.get(t.closestIndexOf((0,f.C)(e)))}(Rt.getValueFor(t),Q.getValueFor(t))}),zt=y("neutral-layer-1").withDefault((t=>Vt.getValueFor(t).evaluate(t))),Nt=y({name:"neutral-layer-2-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i,n,o,r){return t.get(v(t,e,i,n,o,r))}(Rt.getValueFor(t),Q.getValueFor(t),vt.getValueFor(t),ot.getValueFor(t),rt.getValueFor(t),at.getValueFor(t))}),jt=(y("neutral-layer-2").withDefault((t=>Nt.getValueFor(t).evaluate(t))),y({name:"neutral-layer-3-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i,n,o,r){return t.get(v(t,e,i,n,o,r)+i)}(Rt.getValueFor(t),Q.getValueFor(t),vt.getValueFor(t),ot.getValueFor(t),rt.getValueFor(t),at.getValueFor(t))})),_t=(y("neutral-layer-3").withDefault((t=>jt.getValueFor(t).evaluate(t))),y({name:"neutral-layer-4-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i,n,o,r){return t.get(v(t,e,i,n,o,r)+2*i)}(Rt.getValueFor(t),Q.getValueFor(t),vt.getValueFor(t),ot.getValueFor(t),rt.getValueFor(t),at.getValueFor(t))})),Ut=y("neutral-layer-4").withDefault((t=>_t.getValueFor(t).evaluate(t))),qt=y("fill-color").withDefault((t=>zt.getValueFor(t)));var Wt;!function(t){t[t.normal=4.5]="normal",t[t.large=7]="large"}(Wt||(Wt={}));const Zt=y({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>(Wt.normal,(t,e)=>function(t,e,i,n,o,r,a,s,l){const c=t.source,d=t.closestIndexOf(c),u=d+1*n,h=d+1*o,p=d+1*r;return{rest:t.get(d),hover:t.get(u),active:t.get(h),focus:t.get(p)}}(Mt.getValueFor(t),Rt.getValueFor(t),e||qt.getValueFor(t),X.getValueFor(t),Y.getValueFor(t),J.getValueFor(t),ot.getValueFor(t),rt.getValueFor(t),at.getValueFor(t)))(t,e)}),Gt=y("accent-fill-rest").withDefault((t=>Zt.getValueFor(t).evaluate(t).rest)),Qt=y("accent-fill-hover").withDefault((t=>Zt.getValueFor(t).evaluate(t).hover)),Kt=y("accent-fill-active").withDefault((t=>Zt.getValueFor(t).evaluate(t).active)),Xt=y("accent-fill-focus").withDefault((t=>Zt.getValueFor(t).evaluate(t).focus)),Yt=t=>(e,i)=>function(t,e){return t.contrast(c)>=e?c:d}(i||Gt.getValueFor(e),t),Jt=y({name:"foreground-on-accent-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>Yt(Wt.normal)(t,e)}),te=y("foreground-on-accent-rest").withDefault((t=>Jt.getValueFor(t).evaluate(t,Gt.getValueFor(t)))),ee=y("foreground-on-accent-hover").withDefault((t=>Jt.getValueFor(t).evaluate(t,Qt.getValueFor(t)))),ie=y("foreground-on-accent-active").withDefault((t=>Jt.getValueFor(t).evaluate(t,Kt.getValueFor(t)))),ne=y("foreground-on-accent-focus").withDefault((t=>Jt.getValueFor(t).evaluate(t,Xt.getValueFor(t)))),oe=y({name:"foreground-on-accent-large-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>Yt(Wt.large)(t,e)}),re=(y("foreground-on-accent-rest-large").withDefault((t=>oe.getValueFor(t).evaluate(t))),y("foreground-on-accent-hover-large").withDefault((t=>oe.getValueFor(t).evaluate(t,Qt.getValueFor(t)))),y("foreground-on-accent-active-large").withDefault((t=>oe.getValueFor(t).evaluate(t,Kt.getValueFor(t)))),y("foreground-on-accent-focus-large").withDefault((t=>oe.getValueFor(t).evaluate(t,Xt.getValueFor(t)))),t=>(e,i)=>function(t,e,i,n,o,r,s){const l=t.source,c=t.closestIndexOf(l),d=(0,a.a)(e),u=c+(1===d?Math.min(n,o):Math.max(d*n,d*o)),h=t.colorContrast(e,i,u,d),p=t.closestIndexOf(h),g=p+d*Math.abs(n-o);let f,v;return(1===d?n<o:d*n>d*o)?(f=p,v=g):(f=g,v=p),{rest:t.get(f),hover:t.get(v),active:t.get(f+d*r),focus:t.get(f+d*s)}}(Mt.getValueFor(e),i||qt.getValueFor(e),t,tt.getValueFor(e),et.getValueFor(e),it.getValueFor(e),nt.getValueFor(e))),ae=y({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>re(Wt.normal)(t,e)}),se=y("accent-foreground-rest").withDefault((t=>ae.getValueFor(t).evaluate(t).rest)),le=y("accent-foreground-hover").withDefault((t=>ae.getValueFor(t).evaluate(t).hover)),ce=y("accent-foreground-active").withDefault((t=>ae.getValueFor(t).evaluate(t).active)),de=(y("accent-foreground-focus").withDefault((t=>ae.getValueFor(t).evaluate(t).focus)),y({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i,n,o,r){const a=t.closestIndexOf(e),s=a>=Math.max(i,n,o,r)?-1:1;return{rest:t.get(a+s*i),hover:t.get(a+s*n),active:t.get(a+s*o),focus:t.get(a+s*r)}}(Rt.getValueFor(t),e||qt.getValueFor(t),ot.getValueFor(t),rt.getValueFor(t),at.getValueFor(t),st.getValueFor(t))})),ue=y("neutral-fill-rest").withDefault((t=>de.getValueFor(t).evaluate(t).rest)),he=y("neutral-fill-hover").withDefault((t=>de.getValueFor(t).evaluate(t).hover)),pe=y("neutral-fill-active").withDefault((t=>de.getValueFor(t).evaluate(t).active)),ge=(y("neutral-fill-focus").withDefault((t=>de.getValueFor(t).evaluate(t).focus)),y({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i,n,o,r){const s=(0,a.a)(e),l=t.closestIndexOf(e);return{rest:t.get(l-s*i),hover:t.get(l-s*n),active:t.get(l-s*o),focus:t.get(l-s*r)}}(Rt.getValueFor(t),e||qt.getValueFor(t),lt.getValueFor(t),ct.getValueFor(t),dt.getValueFor(t),ut.getValueFor(t))})),fe=y("neutral-fill-input-rest").withDefault((t=>ge.getValueFor(t).evaluate(t).rest)),ve=y("neutral-fill-input-hover").withDefault((t=>ge.getValueFor(t).evaluate(t).hover)),me=(y("neutral-fill-input-focus").withDefault((t=>ge.getValueFor(t).evaluate(t).focus)),y("neutral-fill-input-active").withDefault((t=>ge.getValueFor(t).evaluate(t).active))),be=y({name:"neutral-fill-inverse-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i,n,o,r){const s=(0,a.a)(e),l=t.closestIndexOf(t.colorContrast(e,14)),c=l+s*Math.abs(i-n);let d,u;return(1===s?i<n:s*i>s*n)?(d=l,u=c):(d=c,u=l),{rest:t.get(d),hover:t.get(u),active:t.get(d+s*o),focus:t.get(d+s*r)}}(Rt.getValueFor(t),e||qt.getValueFor(t),ht.getValueFor(t),pt.getValueFor(t),gt.getValueFor(t),ft.getValueFor(t))}),ye=(y("neutral-fill-inverse-rest").withDefault((t=>be.getValueFor(t).evaluate(t).rest)),y("neutral-fill-inverse-hover").withDefault((t=>be.getValueFor(t).evaluate(t).hover)),y("neutral-fill-inverse-active").withDefault((t=>be.getValueFor(t).evaluate(t).active)),y("neutral-fill-inverse-focus").withDefault((t=>be.getValueFor(t).evaluate(t).focus)),y({name:"neutral-fill-layer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i){const n=t.closestIndexOf(e);return t.get(n-i)}(Rt.getValueFor(t),e||qt.getValueFor(t),vt.getValueFor(t))})),we=y("neutral-fill-layer-rest").withDefault((t=>ye.getValueFor(t).evaluate(t))),xe=y({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i,n,o,r,a,s,l,c){const d=Math.max(i,n,o,r,a,s,l,c),u=t.closestIndexOf(e),h=u>=d?-1:1;return{rest:t.get(u+h*i),hover:t.get(u+h*n),active:t.get(u+h*o),focus:t.get(u+h*r)}}(Rt.getValueFor(t),e||qt.getValueFor(t),mt.getValueFor(t),bt.getValueFor(t),yt.getValueFor(t),wt.getValueFor(t),ot.getValueFor(t),rt.getValueFor(t),at.getValueFor(t),st.getValueFor(t))}),Ce=y("neutral-fill-stealth-rest").withDefault((t=>xe.getValueFor(t).evaluate(t).rest)),$e=y("neutral-fill-stealth-hover").withDefault((t=>xe.getValueFor(t).evaluate(t).hover)),ke=y("neutral-fill-stealth-active").withDefault((t=>xe.getValueFor(t).evaluate(t).active)),Le=(y("neutral-fill-stealth-focus").withDefault((t=>xe.getValueFor(t).evaluate(t).focus)),y({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i,n,o,r){const s=(0,a.a)(e),l=t.closestIndexOf(t.colorContrast(e,4.5)),c=l+s*Math.abs(i-n);let d,u;return(1===s?i<n:s*i>s*n)?(d=l,u=c):(d=c,u=l),{rest:t.get(d),hover:t.get(u),active:t.get(d+s*o),focus:t.get(d+s*r)}}(Rt.getValueFor(t),e||qt.getValueFor(t),xt.getValueFor(t),Ct.getValueFor(t),$t.getValueFor(t),kt.getValueFor(t))})),De=y("neutral-fill-strong-rest").withDefault((t=>Le.getValueFor(t).evaluate(t).rest)),Se=y("neutral-fill-strong-hover").withDefault((t=>Le.getValueFor(t).evaluate(t).hover)),Te=(y("neutral-fill-strong-active").withDefault((t=>Le.getValueFor(t).evaluate(t).active)),y("neutral-fill-strong-focus").withDefault((t=>Le.getValueFor(t).evaluate(t).focus)),y({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i,n,o,r){const s=t.closestIndexOf(e),l=(0,a.a)(e),c=s+l*i,d=c+l*(n-i),u=c+l*(o-i),h=c+l*(r-i);return{rest:t.get(c),hover:t.get(d),active:t.get(u),focus:t.get(h)}}(Rt.getValueFor(t),qt.getValueFor(t),Lt.getValueFor(t),Dt.getValueFor(t),St.getValueFor(t),Tt.getValueFor(t))})),Fe=y("neutral-stroke-rest").withDefault((t=>Te.getValueFor(t).evaluate(t).rest)),Ie=y("neutral-stroke-hover").withDefault((t=>Te.getValueFor(t).evaluate(t).hover)),Oe=y("neutral-stroke-active").withDefault((t=>Te.getValueFor(t).evaluate(t).active)),He=y("neutral-stroke-focus").withDefault((t=>Te.getValueFor(t).evaluate(t).focus)),Re=y({name:"neutral-stroke-divider-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,i){return t.get(t.closestIndexOf(e)+(0,a.a)(e)*i)}(Rt.getValueFor(t),e||qt.getValueFor(t),Ft.getValueFor(t))}),Me=y("neutral-stroke-divider-rest").withDefault((t=>Re.getValueFor(t).evaluate(t))),Pe=y({name:"neutral-stroke-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i,n,o,r){const s=(0,a.a)(e),l=t.colorContrast(e,i),c=t.closestIndexOf(l);return{rest:l,hover:t.get(c+s*n),active:t.get(c+s*o),focus:t.get(c+s*r)}}(Rt.getValueFor(t),qt.getValueFor(t),3,It.getValueFor(t),Ot.getValueFor(t),Ht.getValueFor(t))}),Ae=y("neutral-stroke-strong-rest").withDefault((t=>Pe.getValueFor(t).evaluate(t).rest)),Ee=y("neutral-stroke-strong-hover").withDefault((t=>Pe.getValueFor(t).evaluate(t).hover)),Be=y("neutral-stroke-strong-active").withDefault((t=>Pe.getValueFor(t).evaluate(t).active)),Ve=y("neutral-stroke-strong-focus").withDefault((t=>Pe.getValueFor(t).evaluate(t).focus)),ze=y({name:"focus-stroke-outer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e){return t.colorContrast(e,3.5)}(Rt.getValueFor(t),qt.getValueFor(t))}),Ne=y("focus-stroke-outer").withDefault((t=>ze.getValueFor(t).evaluate(t))),je=y({name:"focus-stroke-inner-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,i){return t.colorContrast(i,3.5,t.closestIndexOf(t.source),-1*(0,a.a)(e))}(Mt.getValueFor(t),qt.getValueFor(t),Ne.getValueFor(t))}),_e=y("focus-stroke-inner").withDefault((t=>je.getValueFor(t).evaluate(t))),Ue=y({name:"neutral-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e){return t.colorContrast(e,14)}(Rt.getValueFor(t),qt.getValueFor(t))}),qe=y("neutral-foreground-rest").withDefault((t=>Ue.getValueFor(t).evaluate(t))),We=y({name:"neutral-foreground-hint-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e){return t.colorContrast(e,4.5)}(Rt.getValueFor(t),qt.getValueFor(t))}),Ze=y("neutral-foreground-hint").withDefault((t=>We.getValueFor(t).evaluate(t)));function Ge(t){return n.L.create({name:t,cssCustomPropertyName:null})}const Qe=Ge("neutral-fill-input-alt-rest-delta").withDefault(2),Ke=Ge("neutral-fill-input-alt-hover-delta").withDefault(4),Xe=Ge("neutral-fill-input-alt-active-delta").withDefault(6),Ye=Ge("neutral-fill-input-alt-focus-delta").withDefault(2),Je=Ge("neutral-fill-input-alt-recipe").withDefault({evaluate:(t,e)=>{const i=e||qt.getValueFor(t),n=Qe.getValueFor(t),o=Ke.getValueFor(t),r=Xe.getValueFor(t),a=Ye.getValueFor(t);return function(t,e,i,n,o,r,a,s,l,c,d,u){return(0,m._)(e)?b(t,e,s,l,c,d,u):b(t,e,i,n,o,r,a)}(Rt.getValueFor(t),i,n,o,r,a,1,n,n-o,n-r,a,1)}}),ti=(y("neutral-fill-input-alt-rest").withDefault((t=>Je.getValueFor(t).evaluate(t).rest)),y("neutral-fill-input-alt-hover").withDefault((t=>Je.getValueFor(t).evaluate(t).hover)),y("neutral-fill-input-alt-active").withDefault((t=>Je.getValueFor(t).evaluate(t).active)),y("neutral-fill-input-alt-focus").withDefault((t=>Je.getValueFor(t).evaluate(t).focus)),Ge("neutral-fill-secondary-rest-delta").withDefault(3)),ei=Ge("neutral-fill-secondary-hover-delta").withDefault(2),ii=Ge("neutral-fill-secondary-active-delta").withDefault(1),ni=Ge("neutral-fill-secondary-focus-delta").withDefault(3),oi=Ge("neutral-fill-secondary-recipe").withDefault({evaluate:(t,e)=>b(Rt.getValueFor(t),e||qt.getValueFor(t),ti.getValueFor(t),ei.getValueFor(t),ii.getValueFor(t),ni.getValueFor(t))}),ri=(y("neutral-fill-secondary-rest").withDefault((t=>oi.getValueFor(t).evaluate(t).rest)),y("neutral-fill-secondary-hover").withDefault((t=>oi.getValueFor(t).evaluate(t).hover)),y("neutral-fill-secondary-active").withDefault((t=>oi.getValueFor(t).evaluate(t).active)),y("neutral-fill-secondary-focus").withDefault((t=>oi.getValueFor(t).evaluate(t).focus)),n.L.create("sloppy-click-z-index").withDefault(1),n.L.create("click-z-index").withDefault(1),te),ai=Me},22674:function(t,e,i){"use strict";i.d(e,{O:function(){return o}});var n=i(26755);class o{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&n.o7V.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new r(this.ltr,this.rtl,t),i=n.o7V.getValueFor(t);n.o7V.subscribe(e),e.attach(i),this.cache.set(t,e)}}class r{constructor(t,e,i){this.ltr=t,this.rtl=e,this.source=i,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(t))}attach(t){this.attached!==this[t]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}},62734:function(t,e,i){"use strict";i.d(e,{XC:function(){return n}});const n="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));"},2658:function(t,e,i){"use strict";i.d(e,{i:function(){return r}});var n=i(53046),o=i(26755);const r=n.j`(${o.nfe} + ${o.hVk}) * ${o._5n}`},87839:function(t,e,i){"use strict";var n;i.d(e,{H:function(){return n}}),function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(n||(n={}))},60279:function(t,e,i){"use strict";i.d(e,{$2:function(){return C},DR:function(){return x},KW:function(){return $},T8:function(){return v},hM:function(){return u},hP:function(){return f},iI:function(){return m},lw:function(){return g},rD:function(){return y},rp:function(){return d},v1:function(){return w},wo:function(){return p},zP:function(){return b}});var n=i(9366),o=i(38316),r=i(447),a=i(83343),s=i(2696),l=i(40272),c=i(82917);function d(t){return.2126*t.r+.7152*t.g+.0722*t.b}function u(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return d(new s.h(e(t.r),e(t.g),e(t.b),1))}const h=(t,e)=>(t+.05)/(e+.05);function p(t,e){const i=u(t),n=u(e);return i>n?h(i,n):h(n,i)}function g(t){const e=Math.max(t.r,t.g,t.b),i=Math.min(t.r,t.g,t.b),o=e-i;let r=0;0!==o&&(r=e===t.r?(t.g-t.b)/o%6*60:e===t.g?60*((t.b-t.r)/o+2):60*((t.r-t.g)/o+4)),r<0&&(r+=360);const a=(e+i)/2;let s=0;return 0!==o&&(s=o/(1-Math.abs(2*a-1))),new n.H(r,s,a)}function f(t,e=1){const i=(1-Math.abs(2*t.l-1))*t.s,n=i*(1-Math.abs(t.h/60%2-1)),o=t.l-i/2;let r=0,a=0,l=0;return t.h<60?(r=i,a=n,l=0):t.h<120?(r=n,a=i,l=0):t.h<180?(r=0,a=i,l=n):t.h<240?(r=0,a=n,l=i):t.h<300?(r=n,a=0,l=i):t.h<360&&(r=i,a=0,l=n),new s.h(r+o,a+o,l+o,e)}function v(t){const e=Math.max(t.r,t.g,t.b),i=e-Math.min(t.r,t.g,t.b);let n=0;0!==i&&(n=e===t.r?(t.g-t.b)/i%6*60:e===t.g?60*((t.b-t.r)/i+2):60*((t.r-t.g)/i+4)),n<0&&(n+=360);let r=0;return 0!==e&&(r=i/e),new o.T(n,r,e)}function m(t,e=1){const i=t.s*t.v,n=i*(1-Math.abs(t.h/60%2-1)),o=t.v-i;let r=0,a=0,l=0;return t.h<60?(r=i,a=n,l=0):t.h<120?(r=n,a=i,l=0):t.h<180?(r=0,a=i,l=n):t.h<240?(r=0,a=n,l=i):t.h<300?(r=n,a=0,l=i):t.h<360&&(r=i,a=0,l=n),new s.h(r+o,a+o,l+o,e)}function b(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const i=e(t.r),n=e(t.g),o=e(t.b),r=.4124564*i+.3575761*n+.1804375*o,a=.2126729*i+.7151522*n+.072175*o,s=.0193339*i+.119192*n+.9503041*o;return new l.x(r,a,s)}function y(t,e=1){function i(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const n=i(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),o=i(-.969266*t.x+1.8760108*t.y+.041556*t.z),r=i(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new s.h(n,o,r,e)}function w(t){return function(t){function e(t){return t>r.R.epsilon?Math.pow(t,1/3):(r.R.kappa*t+16)/116}const i=e(t.x/l.x.whitePoint.x),n=e(t.y/l.x.whitePoint.y),o=116*n-16,a=500*(i-n),s=200*(n-e(t.z/l.x.whitePoint.z));return new r.R(o,a,s)}(b(t))}function x(t,e=1){return y(function(t){const e=(t.l+16)/116,i=e+t.a/500,n=e-t.b/200,o=Math.pow(i,3),a=Math.pow(e,3),s=Math.pow(n,3);let c=0;c=o>r.R.epsilon?o:(116*i-16)/r.R.kappa;let d=0;d=t.l>r.R.epsilon*r.R.kappa?a:t.l/r.R.kappa;let u=0;return u=s>r.R.epsilon?s:(116*n-16)/r.R.kappa,c=l.x.whitePoint.x*c,d=l.x.whitePoint.y*d,u=l.x.whitePoint.z*u,new l.x(c,d,u)}(t),e)}function C(t){return function(t){let e=0;(Math.abs(t.b)>.001||Math.abs(t.a)>.001)&&(e=(0,c.vi)(Math.atan2(t.b,t.a))),e<0&&(e+=360);const i=Math.sqrt(t.a*t.a+t.b*t.b);return new a.t(t.l,i,e)}(w(t))}function $(t,e=1){return x(function(t){let e=0,i=0;return 0!==t.h&&(e=Math.cos((0,c.Ht)(t.h))*t.c,i=Math.sin((0,c.Ht)(t.h))*t.c),new r.R(t.l,e,i)}(t),e)}},9366:function(t,e,i){"use strict";i.d(e,{H:function(){return o}});var n=i(82917);class o{constructor(t,e,i){this.h=t,this.s=e,this.l=i}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new o(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new o((0,n.fZ)(this.h,t),(0,n.fZ)(this.s,t),(0,n.fZ)(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}},38316:function(t,e,i){"use strict";i.d(e,{T:function(){return o}});var n=i(82917);class o{constructor(t,e,i){this.h=t,this.s=e,this.v=i}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.v)?null:new o(t.h,t.s,t.v)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new o((0,n.fZ)(this.h,t),(0,n.fZ)(this.s,t),(0,n.fZ)(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}},447:function(t,e,i){"use strict";i.d(e,{R:function(){return o}});var n=i(82917);class o{constructor(t,e,i){this.l=t,this.a=e,this.b=i}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new o(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new o((0,n.fZ)(this.l,t),(0,n.fZ)(this.a,t),(0,n.fZ)(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}o.epsilon=216/24389,o.kappa=24389/27},83343:function(t,e,i){"use strict";i.d(e,{t:function(){return o}});var n=i(82917);class o{constructor(t,e,i){this.l=t,this.c=e,this.h=i}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.c)||isNaN(t.h)?null:new o(t.l,t.c,t.h)}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new o((0,n.fZ)(this.l,t),(0,n.fZ)(this.c,t),(0,n.fZ)(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}},2696:function(t,e,i){"use strict";i.d(e,{h:function(){return o}});var n=i(82917);class o{constructor(t,e,i,n){this.r=t,this.g=e,this.b=i,this.a="number"!=typeof n||isNaN(n)?1:n}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new o(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round((0,n.cY)(this.r,0,255))},${Math.round((0,n.cY)(this.g,0,255))},${Math.round((0,n.cY)(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round((0,n.cY)(this.r,0,255))},${Math.round((0,n.cY)(this.g,0,255))},${Math.round((0,n.cY)(this.b,0,255))},${(0,n.uZ)(this.a,0,1)})`}roundToPrecision(t){return new o((0,n.fZ)(this.r,t),(0,n.fZ)(this.g,t),(0,n.fZ)(this.b,t),(0,n.fZ)(this.a,t))}clamp(){return new o((0,n.uZ)(this.r,0,1),(0,n.uZ)(this.g,0,1),(0,n.uZ)(this.b,0,1),(0,n.uZ)(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return(0,n.yi)((0,n.cY)(t,0,255))}}},40272:function(t,e,i){"use strict";i.d(e,{x:function(){return o}});var n=i(82917);class o{constructor(t,e,i){this.x=t,this.y=e,this.z=i}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new o(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new o((0,n.fZ)(this.x,t),(0,n.fZ)(this.y,t),(0,n.fZ)(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}o.whitePoint=new o(.95047,1,1.08883)},82917:function(t,e,i){"use strict";function n(t,e,i){return isNaN(t)||t<=e?e:t>=i?i:t}function o(t,e,i){return isNaN(t)||t<=e?0:t>=i?1:t/(i-e)}function r(t,e,i){return isNaN(t)?e:e+t*(i-e)}function a(t){return t*(Math.PI/180)}function s(t){return t*(180/Math.PI)}function l(t){const e=Math.round(n(t,0,255)).toString(16);return 1===e.length?"0"+e:e}function c(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:e+t*(i-e)}function d(t,e,i){if(t<=0)return e%360;if(t>=1)return i%360;const n=(e-i+360)%360;return n<=(i-e+360)%360?(e-n*t+360)%360:(e+n*t+360)%360}i.d(e,{AG:function(){return d},Fv:function(){return o},Ht:function(){return a},cY:function(){return r},fZ:function(){return u},t7:function(){return c},uZ:function(){return n},vi:function(){return s},yi:function(){return l}});Math.PI;function u(t,e){const i=Math.pow(10,e);return Math.round(t*i)/i}},11162:function(t,e,i){"use strict";i.d(e,{b4:function(){return l},hg:function(){return d},in:function(){return c},pJ:function(){return s}});var n=i(2696),o=i(82917);const r=/^rgb\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*)\)$/i,a=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function s(t){return a.test(t)}function l(t){return r.test(t)}function c(t){const e=a.exec(t);if(null===e)return null;let i=e[1];if(3===i.length){const t=i.charAt(0),e=i.charAt(1),n=i.charAt(2);i=t.concat(t,e,e,n,n)}const r=parseInt(i,16);return isNaN(r)?null:new n.h((0,o.Fv)((16711680&r)>>>16,0,255),(0,o.Fv)((65280&r)>>>8,0,255),(0,o.Fv)(255&r,0,255),1)}function d(t){const e=r.exec(t);if(null===e)return null;const i=e[1].split(",");return new n.h((0,o.Fv)(Number(i[0]),0,255),(0,o.Fv)(Number(i[1]),0,255),(0,o.Fv)(Number(i[2]),0,255),1)}},65620:function(t,e,i){"use strict";i.d(e,{Id:function(){return a},Lj:function(){return l},bw:function(){return r},so:function(){return s}});var n=i(87697),o=i(12968);const r={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t},a={toView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e.toString()},fromView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}};class s{constructor(t,e,i=e.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=i,this.mode=n,this.converter=o,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,"boolean"===n&&void 0===o&&(this.converter=r)}setValue(t,e){const i=t[this.fieldName],n=this.converter;void 0!==n&&(e=n.fromView(e)),i!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](i,e),t.$fastController.notify(this.name))}getValue(t){return n.y$.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,i=this.guards;i.has(t)||"fromView"===e||o.SO.queueUpdate((()=>{i.add(t);const n=t[this.fieldName];switch(e){case"reflect":const e=this.converter;o.SO.setAttribute(t,this.attribute,void 0!==e?e.toView(n):n);break;case"boolean":o.SO.setBooleanAttribute(t,this.attribute,n)}i.delete(t)}))}static collect(t,...e){const i=[];e.push(t.attributes);for(let n=0,o=e.length;n<o;++n){const o=e[n];if(void 0!==o)for(let e=0,n=o.length;e<n;++e){const n=o[e];"string"==typeof n?i.push(new s(t,n)):i.push(new s(t,n.property,n.attribute,n.mode,n.converter))}}return i}}function l(t,e){let i;function n(t,e){arguments.length>1&&(i.property=e);const n=t.constructor.attributes||(t.constructor.attributes=[]);n.push(i)}return arguments.length>1?(i={},void n(t,e)):(i=void 0===t?{}:t,n)}},51352:function(t,e,i){"use strict";i.d(e,{Q:function(){return d}});var n=i(12968),o=i(52981),r=i(87697),a=i(57426);const s=new WeakMap,l={bubbles:!0,composed:!0,cancelable:!0};function c(t){return t.shadowRoot||s.get(t)||null}class d extends o.A{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const i=e.shadowOptions;if(void 0!==i){const e=t.attachShadow(i);"closed"===i.mode&&s.set(t,e)}const n=r.y$.getAccessors(t);if(n.length>0){const e=this.boundObservables=Object.create(null);for(let i=0,o=n.length;i<o;++i){const o=n[i].name,r=t[o];void 0!==r&&(delete t[o],e[o]=r)}}}get isConnected(){return r.y$.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,r.y$.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=t,this.needsInitialization||null===t||this.addStyles(t))}addStyles(t){const e=c(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const i=t.behaviors;t.addStylesTo(e),null!==i&&this.addBehaviors(i)}}removeStyles(t){const e=c(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const i=t.behaviors;t.removeStylesFrom(e),null!==i&&this.removeBehaviors(i)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),i=t.length,n=[];for(let o=0;o<i;++o){const i=t[o];e.has(i)?e.set(i,e.get(i)+1):(e.set(i,1),n.push(i))}if(this._isConnected){const t=this.element;for(let e=0;e<n.length;++e)n[e].bind(t,r.Wp)}}removeBehaviors(t,e=!1){const i=this.behaviors;if(null===i)return;const n=t.length,o=[];for(let r=0;r<n;++r){const n=t[r];if(i.has(n)){const t=i.get(n)-1;0===t||e?i.delete(n)&&o.push(n):i.set(n,t)}}if(this._isConnected){const t=this.element;for(let e=0;e<o.length;++e)o[e].unbind(t)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(t,r.Wp);const e=this.behaviors;if(null!==e)for(const[i]of e)i.bind(t,r.Wp);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;null!==t&&t.unbind();const e=this.behaviors;if(null!==e){const t=this.element;for(const[i]of e)i.unbind(t)}}onAttributeChangedCallback(t,e,i){const n=this.definition.attributeLookup[t];void 0!==n&&n.onAttributeChangedCallback(this.element,i)}emit(t,e,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},l),i)))}finishInitialization(){const t=this.element,e=this.boundObservables;if(null!==e){const i=Object.keys(e);for(let n=0,o=i.length;n<o;++n){const o=i[n];t[o]=e[o]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,i=c(e)||e;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||n.SO.removeChildNodes(i),t&&(this.view=t.render(e,i,e))}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const i=a.W.forType(t.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return t.$fastController=new d(t,i)}}},57426:function(t,e,i){"use strict";i.d(e,{W:function(){return d}});var n=i(89694),o=i(87697),r=i(52959),a=i(65620);const s={mode:"open"},l={},c=n.Bo.getById(4,(()=>{const t=new Map;return Object.freeze({register:e=>!t.has(e.type)&&(t.set(e.type,e),!0),getByType:e=>t.get(e)})}));class d{constructor(t,e=t.definition){"string"==typeof e&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const i=a.so.collect(t,e.attributes),n=new Array(i.length),o={},c={};for(let t=0,e=i.length;t<e;++t){const e=i[t];n[t]=e.attribute,o[e.name]=e,c[e.attribute]=e}this.attributes=i,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=c,this.shadowOptions=void 0===e.shadowOptions?s:null===e.shadowOptions?void 0:Object.assign(Object.assign({},s),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?l:Object.assign(Object.assign({},l),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?r.XL.create(e.styles):e.styles instanceof r.XL?e.styles:r.XL.create([e.styles])}get isDefined(){return!!c.getByType(this.type)}define(t=customElements){const e=this.type;if(c.register(this)){const t=this.attributes,i=e.prototype;for(let e=0,n=t.length;e<n;++e)o.y$.defineProperty(i,t[e]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}d.forType=c.getByType},89346:function(t,e,i){"use strict";i.d(e,{H:function(){return a},M:function(){return s}});var n=i(51352),o=i(57426);function r(t){return class extends t{constructor(){super(),n.Q.forCustomElement(this)}$emit(t,e,i){return this.$fastController.emit(t,e,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,i){this.$fastController.onAttributeChangedCallback(t,e,i)}}}const a=Object.assign(r(HTMLElement),{from:t=>r(t),define:(t,e)=>new o.W(t,e).define().type});function s(t){return function(e){new o.W(e,t).define()}}},12968:function(t,e,i){"use strict";i.d(e,{SO:function(){return d},Yl:function(){return c},pc:function(){return l}});var n=i(89694);const o=n.P3.FAST.getById(1,(()=>{const t=[],e=[];function i(){if(e.length)throw e.shift()}function o(t){try{t.call()}catch(t){e.push(t),setTimeout(i,0)}}function r(){let e=0;for(;e<t.length;)if(o(t[e]),e++,e>1024){for(let i=0,n=t.length-e;i<n;i++)t[i]=t[i+e];t.length-=e,e=0}t.length=0}return Object.freeze({enqueue:function(e){t.length<1&&n.P3.requestAnimationFrame(r),t.push(e)},process:r})})),r=n.P3.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let a=r;const s=`fast-${Math.random().toString(36).substring(2,8)}`,l=`${s}{`,c=`}${s}`,d=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(a!==r)throw new Error("The HTML policy can only be set once.");a=t},createHTML:t=>a.createHTML(t),isMarker:t=>t&&8===t.nodeType&&t.data.startsWith(s),extractDirectiveIndexFromMarker:t=>parseInt(t.data.replace(`${s}:`,"")),createInterpolationPlaceholder:t=>`${l}${t}${c}`,createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder:t=>`\x3c!--${s}:${t}--\x3e`,queueUpdate:o.enqueue,processUpdates:o.process,nextUpdate:()=>new Promise(o.enqueue),setAttribute(t,e,i){null==i?t.removeAttribute(e):t.setAttribute(e,i)},setBooleanAttribute(t,e,i){i?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;null!==e;e=t.firstChild)t.removeChild(e)},createTemplateWalker:t=>document.createTreeWalker(t,133,null,!1)})},7163:function(t,e,i){"use strict";i.r(e),i.d(e,{$global:function(){return n.P3},AttachedBehaviorHTMLDirective:function(){return y.ON},AttributeDefinition:function(){return s.so},BindingBehavior:function(){return b.S},CSSDirective:function(){return h.v},ChildrenBehavior:function(){return k.o},Controller:function(){return l.Q},DOM:function(){return m.SO},ElementStyles:function(){return d.XL},ExecutionContext:function(){return g.rd},FAST:function(){return n.Bo},FASTElement:function(){return r.H},FASTElementDefinition:function(){return a.W},HTMLBindingDirective:function(){return b.R},HTMLDirective:function(){return y.m0},HTMLView:function(){return p.b},Observable:function(){return g.y$},PropertyChangeNotifier:function(){return f.A},RefBehavior:function(){return w.L},RepeatBehavior:function(){return C.eN},RepeatDirective:function(){return C.Gx},SlottedBehavior:function(){return $.y},SubscriberSet:function(){return f.q},TargetedHTMLDirective:function(){return y.d$},ViewTemplate:function(){return o._},attr:function(){return s.Lj},booleanConverter:function(){return s.bw},children:function(){return k.p},compileTemplate:function(){return c._},css:function(){return u.i},cssPartial:function(){return u.j},customElement:function(){return r.M},defaultExecutionContext:function(){return g.Wp},elements:function(){return L.R},emptyArray:function(){return n.ow},enableArrayObservation:function(){return v.F},html:function(){return o.d},nullableNumberConverter:function(){return s.Id},observable:function(){return g.LO},ref:function(){return w.i},repeat:function(){return C.rx},slotted:function(){return $.Q},volatile:function(){return g.lk},when:function(){return x.g}});var n=i(89694),o=i(39181),r=i(89346),a=i(57426),s=i(65620),l=i(51352),c=i(74648),d=i(52959),u=i(53046),h=i(99539),p=i(15267),g=i(87697),f=i(52981),v=i(37392),m=i(12968),b=i(20277),y=i(67479),w=i(58952),x=i(13988),C=i(18864),$=i(90960),k=i(81422),L=i(58689)},37392:function(t,e,i){"use strict";i.d(e,{F:function(){return f}});var n=i(12968),o=i(89694);function r(t,e,i){return{index:t,removed:e,addedCount:i}}function a(t,e,i,n,a,s){let l=0,c=0;const d=Math.min(i-e,s-a);if(0===e&&0===a&&(l=function(t,e,i){for(let n=0;n<i;++n)if(t[n]!==e[n])return n;return i}(t,n,d)),i===t.length&&s===n.length&&(c=function(t,e,i){let n=t.length,o=e.length,r=0;for(;r<i&&t[--n]===e[--o];)r++;return r}(t,n,d-l)),a+=l,s-=c,(i-=c)-(e+=l)==0&&s-a==0)return o.ow;if(e===i){const t=r(e,[],0);for(;a<s;)t.removed.push(n[a++]);return[t]}if(a===s)return[r(e,[],i-e)];const u=function(t){let e=t.length-1,i=t[0].length-1,n=t[e][i];const o=[];for(;e>0||i>0;){if(0===e){o.push(2),i--;continue}if(0===i){o.push(3),e--;continue}const r=t[e-1][i-1],a=t[e-1][i],s=t[e][i-1];let l;l=a<s?a<r?a:r:s<r?s:r,l===r?(r===n?o.push(0):(o.push(1),n=r),e--,i--):l===a?(o.push(3),e--,n=a):(o.push(2),i--,n=s)}return o.reverse(),o}(function(t,e,i,n,o,r){const a=r-o+1,s=i-e+1,l=new Array(a);let c,d;for(let t=0;t<a;++t)l[t]=new Array(s),l[t][0]=t;for(let t=0;t<s;++t)l[0][t]=t;for(let i=1;i<a;++i)for(let r=1;r<s;++r)t[e+r-1]===n[o+i-1]?l[i][r]=l[i-1][r-1]:(c=l[i-1][r]+1,d=l[i][r-1]+1,l[i][r]=c<d?c:d);return l}(t,e,i,n,a,s)),h=[];let p,g=e,f=a;for(let t=0;t<u.length;++t)switch(u[t]){case 0:void 0!==p&&(h.push(p),p=void 0),g++,f++;break;case 1:void 0===p&&(p=r(g,[],0)),p.addedCount++,g++,p.removed.push(n[f]),f++;break;case 2:void 0===p&&(p=r(g,[],0)),p.addedCount++,g++;break;case 3:void 0===p&&(p=r(g,[],0)),p.removed.push(n[f]),f++}return void 0!==p&&h.push(p),h}const s=Array.prototype.push;function l(t,e,i,n){const o=r(e,i,n);let a=!1,l=0;for(let e=0;e<t.length;e++){const i=t[e];if(i.index+=l,a)continue;const n=(c=o.index,d=o.index+o.removed.length,u=i.index,h=i.index+i.addedCount,d<u||h<c?-1:d===u||h===c?0:c<u?d<h?d-u:h-u:h<d?h-c:d-c);if(n>=0){t.splice(e,1),e--,l-=i.addedCount-i.removed.length,o.addedCount+=i.addedCount-n;const r=o.removed.length+i.removed.length-n;if(o.addedCount||r){let t=i.removed;if(o.index<i.index){const e=o.removed.slice(0,i.index-o.index);s.apply(e,t),t=e}if(o.index+o.removed.length>i.index+i.addedCount){const e=o.removed.slice(i.index+i.addedCount-o.index);s.apply(t,e)}o.removed=t,i.index<o.index&&(o.index=i.index)}else a=!0}else if(o.index<i.index){a=!0,t.splice(e,0,o),e++;const n=o.addedCount-o.removed.length;i.index+=n,l+=n}}var c,d,u,h;a||t.push(o)}function c(t,e){let i=[];const n=function(t){const e=[];for(let i=0,n=t.length;i<n;i++){const n=t[i];l(e,n.index,n.removed,n.addedCount)}return e}(e);for(let e=0,o=n.length;e<o;++e){const o=n[e];1!==o.addedCount||1!==o.removed.length?i=i.concat(a(t,o.index,o.index+o.addedCount,o.removed,0,o.removed.length)):o.removed[0]!==t[o.index]&&i.push(o)}return i}var d=i(52981),u=i(87697);let h=!1;function p(t,e){let i=t.index;const n=e.length;return i>n?i=n-t.addedCount:i<0&&(i=n+t.removed.length+i-t.addedCount),i<0&&(i=0),t.index=i,t}class g extends d.q{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){void 0===this.splices?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,n.SO.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,n.SO.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(void 0===t&&void 0===e)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=void 0===e?c(this.source,t):a(this.source,0,this.source.length,e,0,e.length);this.notify(i)}}function f(){if(h)return;h=!0,u.y$.setArrayObserverFactory((t=>new g(t)));const t=Array.prototype;if(t.$fastPatch)return;Reflect.defineProperty(t,"$fastPatch",{value:1,enumerable:!1});const e=t.pop,i=t.push,n=t.reverse,o=t.shift,a=t.sort,s=t.splice,l=t.unshift;t.pop=function(){const t=this.length>0,i=e.apply(this,arguments),n=this.$fastController;return void 0!==n&&t&&n.addSplice(r(this.length,[i],0)),i},t.push=function(){const t=i.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(p(r(this.length-arguments.length,[],arguments.length),this)),t},t.reverse=function(){let t;const e=this.$fastController;void 0!==e&&(e.flush(),t=this.slice());const i=n.apply(this,arguments);return void 0!==e&&e.reset(t),i},t.shift=function(){const t=this.length>0,e=o.apply(this,arguments),i=this.$fastController;return void 0!==i&&t&&i.addSplice(r(0,[e],0)),e},t.sort=function(){let t;const e=this.$fastController;void 0!==e&&(e.flush(),t=this.slice());const i=a.apply(this,arguments);return void 0!==e&&e.reset(t),i},t.splice=function(){const t=s.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(p(r(+arguments[0],t,arguments.length>2?arguments.length-2:0),this)),t},t.unshift=function(){const t=l.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(p(r(0,[],arguments.length),this)),t}}},52981:function(t,e,i){"use strict";i.d(e,{A:function(){return o},q:function(){return n}});class n{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return void 0===this.spillover?this.sub1===t||this.sub2===t:-1!==this.spillover.indexOf(t)}subscribe(t){const e=this.spillover;if(void 0===e){if(this.has(t))return;if(void 0===this.sub1)return void(this.sub1=t);if(void 0===this.sub2)return void(this.sub2=t);this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else{-1===e.indexOf(t)&&e.push(t)}}unsubscribe(t){const e=this.spillover;if(void 0===e)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const i=e.indexOf(t);-1!==i&&e.splice(i,1)}}notify(t){const e=this.spillover,i=this.source;if(void 0===e){const e=this.sub1,n=this.sub2;void 0!==e&&e.handleChange(i,t),void 0!==n&&n.handleChange(i,t)}else for(let n=0,o=e.length;n<o;++n)e[n].handleChange(i,t)}}class o{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const i=this.subscribers[t];void 0!==i&&i.notify(t),null===(e=this.sourceSubscribers)||void 0===e||e.notify(t)}subscribe(t,e){var i;if(e){let i=this.subscribers[e];void 0===i&&(this.subscribers[e]=i=new n(this.source)),i.subscribe(t)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new n(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var i;if(e){const i=this.subscribers[e];void 0!==i&&i.unsubscribe(t)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(t)}}},87697:function(t,e,i){"use strict";i.d(e,{LO:function(){return s},Wp:function(){return u},lk:function(){return l},rd:function(){return d},y$:function(){return a}});var n=i(12968),o=i(89694),r=i(52981);const a=o.Bo.getById(2,(()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,i=new WeakMap,o=n.SO.queueUpdate;let a,s=t=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function l(t){let i=t.$fastController||e.get(t);return void 0===i&&(Array.isArray(t)?i=s(t):e.set(t,i=new r.A(t))),i}function c(t){let e=i.get(t);if(void 0===e){let n=Reflect.getPrototypeOf(t);for(;void 0===e&&null!==n;)e=i.get(n),n=Reflect.getPrototypeOf(n);e=void 0===e?[]:e.slice(0),i.set(t,e)}return e}class d{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==a&&a.watch(t,this.name),t[this.field]}setValue(t,e){const i=this.field,n=t[i];if(n!==e){t[i]=e;const o=t[this.callback];"function"==typeof o&&o.call(t,n,e),l(t).notify(this.name)}}}class u extends r.q{constructor(t,e,i=!1){super(t,e),this.binding=t,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&null!==this.last&&this.disconnect();const i=a;a=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const n=this.binding(t,e);return a=i,n}disconnect(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const i=this.last,n=l(t),o=null===i?this.first:{};if(o.propertySource=t,o.propertyName=e,o.notifier=n,n.subscribe(this,e),null!==i){if(!this.needsRefresh){let e;a=void 0,e=i.propertySource[i.propertyName],a=this,t===e&&(this.needsRefresh=!0)}i.next=o}this.last=o}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return void 0===e?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(t){s=t},getNotifier:l,track(t,e){void 0!==a&&a.watch(t,e)},trackVolatile(){void 0!==a&&(a.needsRefresh=!0)},notify(t,e){l(t).notify(e)},defineProperty(t,e){"string"==typeof e&&(e=new d(e)),c(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get:function(){return e.getValue(this)},set:function(t){e.setValue(this,t)}})},getAccessors:c,binding(t,e,i=this.isVolatileBinding(t)){return new u(t,e,i)},isVolatileBinding:e=>t.test(e.toString())})}));function s(t,e){a.defineProperty(t,e)}function l(t,e,i){return Object.assign({},i,{get:function(){return a.trackVolatile(),i.get.apply(this)}})}const c=o.Bo.getById(3,(()=>{let t=null;return{get:()=>t,set(e){t=e}}}));class d{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return c.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){c.set(t)}}a.defineProperty(d.prototype,"index"),a.defineProperty(d.prototype,"length");const u=Object.seal(new d)},89694:function(t,e,i){"use strict";i.d(e,{Bo:function(){return r},P3:function(){return n},ow:function(){return a}});const n=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===n.trustedTypes&&(n.trustedTypes={createPolicy:(t,e)=>e});const o={configurable:!1,enumerable:!1,writable:!1};void 0===n.FAST&&Reflect.defineProperty(n,"FAST",Object.assign({value:Object.create(null)},o));const r=n.FAST;if(void 0===r.getById){const t=Object.create(null);Reflect.defineProperty(r,"getById",Object.assign({value(e,i){let n=t[e];return void 0===n&&(n=i?t[e]=i():null),n}},o))}const a=Object.freeze([])},99539:function(t,e,i){"use strict";i.d(e,{v:function(){return n}});class n{createCSS(){return""}createBehavior(){}}},53046:function(t,e,i){"use strict";i.d(e,{i:function(){return a},j:function(){return l}});var n=i(99539),o=i(52959);function r(t,e){const i=[];let r="";const a=[];for(let s=0,l=t.length-1;s<l;++s){r+=t[s];let l=e[s];if(l instanceof n.v){const t=l.createBehavior();l=l.createCSS(),t&&a.push(t)}l instanceof o.XL||l instanceof CSSStyleSheet?(""!==r.trim()&&(i.push(r),r=""),i.push(l)):r+=l}return r+=t[t.length-1],""!==r.trim()&&i.push(r),{styles:i,behaviors:a}}function a(t,...e){const{styles:i,behaviors:n}=r(t,e),a=o.XL.create(i);return n.length&&a.withBehaviors(...n),a}class s extends n.v{constructor(t,e){super(),this.behaviors=e,this.css="";const i=t.reduce(((t,e)=>("string"==typeof e?this.css+=e:t.push(e),t)),[]);i.length&&(this.styles=o.XL.create(i))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function l(t,...e){const{styles:i,behaviors:n}=r(t,e);return new s(i,n)}},52959:function(t,e,i){"use strict";i.d(e,{XL:function(){return o}});var n=i(12968);class o{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}}function r(t){return t.map((t=>t instanceof o?r(t.styles):[t])).reduce(((t,e)=>t.concat(e)),[])}function a(t){return t.map((t=>t instanceof o?t.behaviors:null)).reduce(((t,e)=>null===e?t:(null===t&&(t=[]),t.concat(e))),null)}o.create=(()=>{if(n.SO.supportsAdoptedStyleSheets){const t=new Map;return e=>new s(e,t)}return t=>new c(t)})();class s extends o{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=a(t)}get styleSheets(){if(void 0===this._styleSheets){const t=this.styles,e=this.styleSheetCache;this._styleSheets=r(t).map((t=>{if(t instanceof CSSStyleSheet)return t;let i=e.get(t);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(t),e.set(t,i)),i}))}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter((t=>-1===e.indexOf(t))),super.removeStylesFrom(t)}}let l=0;class c extends o{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=a(t),this.styleSheets=r(t),this.styleClass="fast-style-class-"+ ++l}addStylesTo(t){const e=this.styleSheets,i=this.styleClass;t=this.normalizeTarget(t);for(let n=0;n<e.length;n++){const o=document.createElement("style");o.innerHTML=e[n],o.className=i,t.append(o)}super.addStylesTo(t)}removeStylesFrom(t){const e=(t=this.normalizeTarget(t)).querySelectorAll(`.${this.styleClass}`);for(let i=0,n=e.length;i<n;++i)t.removeChild(e[i]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}},20277:function(t,e,i){"use strict";i.d(e,{R:function(){return v},S:function(){return m}});var n=i(12968),o=i(87697),r=i(67479);function a(t,e){this.source=t,this.context=e,null===this.bindingObserver&&(this.bindingObserver=o.y$.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function s(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function l(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function c(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function d(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function u(t){n.SO.setAttribute(this.target,this.targetName,t)}function h(t){n.SO.setBooleanAttribute(this.target,this.targetName,t)}function p(t){if(null==t&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;void 0===e?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function g(t){this.target[this.targetName]=t}function f(t){const e=this.classVersions||Object.create(null),i=this.target;let n=this.version||0;if(null!=t&&t.length){const o=t.split(/\s+/);for(let t=0,r=o.length;t<r;++t){const r=o[t];""!==r&&(e[r]=n,i.classList.add(r))}}if(this.classVersions=e,this.version=n+1,0!==n){n-=1;for(const t in e)e[t]===n&&i.classList.remove(t)}}class v extends r.d${constructor(t){super(),this.binding=t,this.bind=a,this.unbind=l,this.updateTarget=u,this.isBindingVolatile=o.y$.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,void 0!==t)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=g,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(e,i)=>n.SO.createHTML(t(e,i))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=h;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=s,this.unbind=d;break;default:this.cleanedTargetName=t,"class"===t&&(this.updateTarget=f)}}targetAtContent(){this.updateTarget=p,this.unbind=c}createBehavior(t){return new m(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class m{constructor(t,e,i,n,o,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=i,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){o.rd.setEvent(t);const e=this.binding(this.source,this.context);o.rd.setEvent(null),!0!==e&&t.preventDefault()}}},81422:function(t,e,i){"use strict";i.d(e,{o:function(){return r},p:function(){return a}});var n=i(67479),o=i(58689);class r extends o.x{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function a(t){return"string"==typeof t&&(t={property:t}),new n.ON("fast-children",r,t)}},74648:function(t,e,i){"use strict";i.d(e,{_:function(){return h}});var n=i(12968),o=i(20277);let r=null;class a{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){r=this}static borrow(t){const e=r||new a;return e.directives=t,e.reset(),r=null,e}}function s(t){if(1===t.length)return t[0];let e;const i=t.length,n=t.map((t=>"string"==typeof t?()=>t:(e=t.targetName||e,t.binding))),r=new o.R(((t,e)=>{let o="";for(let r=0;r<i;++r)o+=n[r](t,e);return o}));return r.targetName=e,r}const l=n.Yl.length;function c(t,e){const i=e.split(n.pc);if(1===i.length)return null;const o=[];for(let e=0,r=i.length;e<r;++e){const r=i[e],a=r.indexOf(n.Yl);let s;if(-1===a)s=r;else{const e=parseInt(r.substring(0,a));o.push(t.directives[e]),s=r.substring(a+l)}""!==s&&o.push(s)}return o}function d(t,e,i=!1){const n=e.attributes;for(let r=0,a=n.length;r<a;++r){const l=n[r],d=l.value,u=c(t,d);let h=null;null===u?i&&(h=new o.R((()=>d)),h.targetName=l.name):h=s(u),null!==h&&(e.removeAttributeNode(l),r--,a--,t.addFactory(h))}}function u(t,e,i){const n=c(t,e.textContent);if(null!==n){let o=e;for(let r=0,a=n.length;r<a;++r){const a=n[r],s=0===r?e:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof a?s.textContent=a:(s.textContent=" ",t.captureContentBinding(a)),o=s,t.targetIndex++,s!==e&&i.nextNode()}t.targetIndex--}}function h(t,e){const i=t.content;document.adoptNode(i);const o=a.borrow(e);d(o,t,!0);const r=o.behaviorFactories;o.reset();const s=n.SO.createTemplateWalker(i);let l;for(;l=s.nextNode();)switch(o.targetIndex++,l.nodeType){case 1:d(o,l);break;case 3:u(o,l,s);break;case 8:n.SO.isMarker(l)&&o.addFactory(e[n.SO.extractDirectiveIndexFromMarker(l)])}let c=0;(n.SO.isMarker(i.firstChild)||1===i.childNodes.length&&e.length)&&(i.insertBefore(document.createComment(""),i.firstChild),c=-1);const h=o.behaviorFactories;return o.release(),{fragment:i,viewBehaviorFactories:h,hostBehaviorFactories:r,targetOffset:c}}},67479:function(t,e,i){"use strict";i.d(e,{ON:function(){return a},d$:function(){return r},m0:function(){return o}});var n=i(12968);class o{constructor(){this.targetIndex=0}}class r extends o{constructor(){super(...arguments),this.createPlaceholder=n.SO.createInterpolationPlaceholder}}class a extends o{constructor(t,e,i){super(),this.name=t,this.behavior=e,this.options=i}createPlaceholder(t){return n.SO.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}},58689:function(t,e,i){"use strict";i.d(e,{R:function(){return r},x:function(){return a}});var n=i(87697),o=i(89694);function r(t){return t?function(e,i,n){return 1===e.nodeType&&e.matches(t)}:function(t,e,i){return 1===t.nodeType}}class a{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=n.y$.getAccessors(t).some((t=>t.name===e)),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(o.ow),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return void 0!==this.options.filter&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}},58952:function(t,e,i){"use strict";i.d(e,{L:function(){return o},i:function(){return r}});var n=i(67479);class o{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function r(t){return new n.ON("fast-ref",o,t)}},18864:function(t,e,i){"use strict";i.d(e,{Gx:function(){return p},eN:function(){return h},rx:function(){return g}});var n=i(12968),o=i(87697),r=i(37392),a=i(89694),s=i(67479),l=i(15267);const c=Object.freeze({positioning:!1,recycle:!0});function d(t,e,i,n){t.bind(e[i],n)}function u(t,e,i,n){const o=Object.create(n);o.index=i,o.length=e.length,t.bind(e[i],o)}class h{constructor(t,e,i,n,r,a){this.location=t,this.itemsBinding=e,this.templateBinding=n,this.options=a,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=d,this.itemsBindingObserver=o.y$.binding(e,this,i),this.templateBindingObserver=o.y$.binding(n,this,r),a.positioning&&(this.bindView=u)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items)return void(this.items=a.ow);const e=this.itemsObserver,i=this.itemsObserver=o.y$.getNotifier(this.items),n=e!==i;n&&null!==e&&e.unsubscribe(this),(n||t)&&i.subscribe(this)}updateViews(t){const e=this.childContext,i=this.views,n=this.bindView,o=this.items,r=this.template,a=this.options.recycle,s=[];let l=0,c=0;for(let d=0,u=t.length;d<u;++d){const u=t[d],h=u.removed;let p=0,g=u.index;const f=g+u.addedCount,v=i.splice(u.index,h.length);for(c=s.length+v.length;g<f;++g){const t=i[g],d=t?t.firstChild:this.location;let u;a&&c>0?(p<=c&&v.length>0?(u=v[p],p++):(u=s[l],l++),c--):u=r.create(),i.splice(g,0,u),n(u,o,g,e),u.insertBefore(d)}v[p]&&s.push(...v.slice(p))}for(let t=l,e=s.length;t<e;++t)s[t].dispose();if(this.options.positioning)for(let t=0,e=i.length;t<e;++t){const n=i[t].context;n.length=e,n.index=t}}refreshAllViews(t=!1){const e=this.items,i=this.childContext,n=this.template,o=this.location,r=this.bindView;let a=e.length,s=this.views,c=s.length;if(0!==a&&!t&&this.options.recycle||(l.b.disposeContiguousBatch(s),c=0),0===c){this.views=s=new Array(a);for(let t=0;t<a;++t){const a=n.create();r(a,e,t,i),s[t]=a,a.insertBefore(o)}}else{let t=0;for(;t<a;++t)if(t<c){r(s[t],e,t,i)}else{const a=n.create();r(a,e,t,i),s.push(a),a.insertBefore(o)}const l=s.splice(t,c-t);for(t=0,a=l.length;t<a;++t)l[t].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,i=t.length;e<i;++e)t[e].unbind()}}class p extends s.m0{constructor(t,e,i){super(),this.itemsBinding=t,this.templateBinding=e,this.options=i,this.createPlaceholder=n.SO.createBlockPlaceholder,(0,r.F)(),this.isItemsBindingVolatile=o.y$.isVolatileBinding(t),this.isTemplateBindingVolatile=o.y$.isVolatileBinding(e)}createBehavior(t){return new h(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function g(t,e,i=c){return new p(t,"function"==typeof e?e:()=>e,Object.assign(Object.assign({},c),i))}},90960:function(t,e,i){"use strict";i.d(e,{Q:function(){return a},y:function(){return r}});var n=i(67479),o=i(58689);class r extends o.x{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function a(t){return"string"==typeof t&&(t={property:t}),new n.ON("fast-slotted",r,t)}},39181:function(t,e,i){"use strict";i.d(e,{_:function(){return c},d:function(){return u}});var n=i(12968),o=i(87697),r=i(74648),a=i(15267),s=i(67479),l=i(20277);class c{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(null===this.fragment){let t;const e=this.html;if("string"==typeof e){t=document.createElement("template"),t.innerHTML=n.SO.createHTML(e);const i=t.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(t=i)}else t=e;const i=(0,r._)(t,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,o=new Array(this.behaviorCount),s=n.SO.createTemplateWalker(e);let l=0,c=this.targetOffset,d=s.nextNode();for(let t=i.length;l<t;++l){const t=i[l],e=t.targetIndex;for(;null!==d;){if(c===e){o[l]=t.createBehavior(d);break}d=s.nextNode(),c++}}if(this.hasHostBehaviors){const e=this.hostBehaviorFactories;for(let i=0,n=e.length;i<n;++i,++l)o[l]=e[i].createBehavior(t)}return new a.b(e,o)}render(t,e,i){"string"==typeof e&&(e=document.getElementById(e)),void 0===i&&(i=e);const n=this.create(i);return n.bind(t,o.Wp),n.appendTo(e),n}}const d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,...e){const i=[];let n="";for(let o=0,r=t.length-1;o<r;++o){const r=t[o];let a=e[o];if(n+=r,a instanceof c){const t=a;a=()=>t}if("function"==typeof a&&(a=new l.R(a)),a instanceof s.d$){const t=d.exec(r);null!==t&&(a.targetName=t[2])}a instanceof s.m0?(n+=a.createPlaceholder(i.length),i.push(a)):n+=a}return n+=t[t.length-1],new c(n,i)}},15267:function(t,e,i){"use strict";i.d(e,{b:function(){return o}});const n=document.createRange();class o{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=t.parentNode,i=this.lastChild;let n,o=this.firstChild;for(;o!==i;)n=o.nextSibling,e.insertBefore(o,t),o=n;e.insertBefore(i,t)}}remove(){const t=this.fragment,e=this.lastChild;let i,n=this.firstChild;for(;n!==e;)i=n.nextSibling,t.appendChild(n),n=i;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let i,n=this.firstChild;for(;n!==e;)i=n.nextSibling,t.removeChild(n),n=i;t.removeChild(e);const o=this.behaviors,r=this.source;for(let t=0,e=o.length;t<e;++t)o[t].unbind(r)}bind(t,e){const i=this.behaviors;if(this.source!==t)if(null!==this.source){const n=this.source;this.source=t,this.context=e;for(let o=0,r=i.length;o<r;++o){const r=i[o];r.unbind(n),r.bind(t,e)}}else{this.source=t,this.context=e;for(let n=0,o=i.length;n<o;++n)i[n].bind(t,e)}}unbind(){if(null===this.source)return;const t=this.behaviors,e=this.source;for(let i=0,n=t.length;i<n;++i)t[i].unbind(e);this.source=null}static disposeContiguousBatch(t){if(0!==t.length){n.setStartBefore(t[0].firstChild),n.setEndAfter(t[t.length-1].lastChild),n.deleteContents();for(let e=0,i=t.length;e<i;++e){const i=t[e],n=i.behaviors,o=i.source;for(let t=0,e=n.length;t<e;++t)n[t].unbind(o)}}}}},13988:function(t,e,i){"use strict";function n(t,e){const i="function"==typeof e?e:()=>e;return(e,n)=>t(e,n)?i(e,n):null}i.d(e,{g:function(){return n}})},32590:function(t,e,i){"use strict";i.d(e,{$:function(){return p}});var n=i(20005),o=i(12968),r=i(65620),a=i(87697);const s="resize",l="scroll";var c=i(65825),d=i(48839),u=i(11433),h=i(89694);class p extends d.I{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=c.N.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(p.intersectionService.requestPosition(this,this.handleIntersection),p.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&p.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,p.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&p.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&p.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find((t=>t.target===this)),i=t.find((t=>t.target===this.anchorElement)),n=t.find((t=>t.target===this.viewportElement));return void 0!==e&&void 0!==n&&void 0!==i&&(!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,i.boundingClientRect)||this.isRectDifferent(this.viewportRect,n.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect))&&(this.regionRect=e.boundingClientRect,this.anchorRect=i.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(n.boundingClientRect.x+document.documentElement.scrollLeft,n.boundingClientRect.y+document.documentElement.scrollTop,n.boundingClientRect.width,n.boundingClientRect.height):this.viewportRect=n.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0))},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=(0,u.M)(this),this.startObservers())},this.updateLayout=()=>{let t,e;if("uncontrolled"!==this.horizontalPositioningMode){const t=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)e="center";else if("unset"!==this.horizontalDefaultPosition){let t=this.horizontalDefaultPosition;if("start"===t||"end"===t){const e=(0,u.M)(this);if(e!==this.currentDirection)return this.currentDirection=e,void this.initialize();t=this.currentDirection===c.N.ltr?"start"===t?"left":"right":"start"===t?"right":"left"}switch(t){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end"}}const i=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,n=void 0!==this.anchorRect?this.anchorRect.left:0,o=void 0!==this.anchorRect?this.anchorRect.right:0,r=void 0!==this.anchorRect?this.anchorRect.width:0,a=void 0!==this.viewportRect?this.viewportRect.left:0,s=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===e||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(e,n,o,r,a,s)<i)&&(e=this.getAvailableSpace(t[0],n,o,r,a,s)>this.getAvailableSpace(t[1],n,o,r,a,s)?t[0]:t[1])}if("uncontrolled"!==this.verticalPositioningMode){const e=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)t="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end"}const i=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,n=void 0!==this.anchorRect?this.anchorRect.top:0,o=void 0!==this.anchorRect?this.anchorRect.bottom:0,r=void 0!==this.anchorRect?this.anchorRect.height:0,a=void 0!==this.viewportRect?this.viewportRect.top:0,s=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===t||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(t,n,o,r,a,s)<i)&&(t=this.getAvailableSpace(e[0],n,o,r,a,s)>this.getAvailableSpace(e[1],n,o,r,a,s)?e[0]:e[1])}const i=this.getNextRegionDimension(e,t),n=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,i),this.setVerticalPosition(t,i),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),n&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(t,e)=>{if(void 0===t||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let i=0;switch(this.horizontalScaling){case"anchor":case"fill":i=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${i}px`;break;case"content":i=this.regionRect.width,this.regionWidth="unset"}let n=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-i,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-i+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(n=(this.anchorRect.width-i)/2,this.translateX=this.baseHorizontalOffset+n,this.horizontalViewportLock){const t=this.anchorRect.left+n,e=this.anchorRect.right-n;t<this.viewportRect.left&&!(e>this.viewportRect.right)?this.translateX=this.translateX-(t-this.viewportRect.left):e>this.viewportRect.right&&!(t<this.viewportRect.left)&&(this.translateX=this.translateX-(e-this.viewportRect.right))}}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(void 0===t||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let i=0;switch(this.verticalScaling){case"anchor":case"fill":i=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${i}px`;break;case"content":i=this.regionRect.height,this.regionHeight="unset"}let n=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-i,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-i+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(n=(this.anchorRect.height-i)/2,this.translateY=this.baseVerticalOffset+n,this.verticalViewportLock){const t=this.anchorRect.top+n,e=this.anchorRect.bottom-n;t<this.viewportRect.top&&!(e>this.viewportRect.bottom)?this.translateY=this.translateY-(t-this.viewportRect.top):e>this.viewportRect.bottom&&!(t<this.viewportRect.top)&&(this.translateY=this.translateY-(e-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,i,n,o,r)=>{const a=e-o,s=r-(e+n);switch(t){case"start":return a;case"insetStart":return a+n;case"insetEnd":return s+n;case"end":return s;case"center":return 2*Math.min(a,s)+n}},this.getNextRegionDimension=(t,e)=>{const i={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==t&&"fill"===this.horizontalScaling?i.width=this.getAvailableSpace(t,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(i.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==e&&"fill"===this.verticalScaling?i.height=this.getAvailableSpace(e,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(i.height=void 0!==this.anchorRect?this.anchorRect.height:0),i},this.startAutoUpdateEventListeners=()=>{window.addEventListener(s,this.update,{passive:!0}),window.addEventListener(l,this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(s,this.update),window.removeEventListener(l,this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===t&&this.stopAutoUpdateEventListeners(),"auto"===e&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),o.SO.queueUpdate((()=>this.reset())),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}p.intersectionService=new class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var i;null!==this.intersectionDetector&&(this.observedElements.has(t)?null===(i=this.observedElements.get(t))||void 0===i||i.push(e):(this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)))},this.cancelRequestPosition=(t,e)=>{const i=this.observedElements.get(t);if(void 0!==i){const t=i.indexOf(e);-1!==t&&i.splice(t,1)}},this.initializeIntersectionDetector=()=>{h.P3.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(null===this.intersectionDetector)return;const e=[],i=[];t.forEach((t=>{var n;null===(n=this.intersectionDetector)||void 0===n||n.unobserve(t.target);const o=this.observedElements.get(t.target);void 0!==o&&(o.forEach((n=>{let o=e.indexOf(n);-1===o&&(o=e.length,e.push(n),i.push([])),i[o].push(t)})),this.observedElements.delete(t.target))})),e.forEach(((t,e)=>{t(i[e])}))},this.initializeIntersectionDetector()}},(0,n.gn)([r.Lj],p.prototype,"anchor",void 0),(0,n.gn)([r.Lj],p.prototype,"viewport",void 0),(0,n.gn)([(0,r.Lj)({attribute:"horizontal-positioning-mode"})],p.prototype,"horizontalPositioningMode",void 0),(0,n.gn)([(0,r.Lj)({attribute:"horizontal-default-position"})],p.prototype,"horizontalDefaultPosition",void 0),(0,n.gn)([(0,r.Lj)({attribute:"horizontal-viewport-lock",mode:"boolean"})],p.prototype,"horizontalViewportLock",void 0),(0,n.gn)([(0,r.Lj)({attribute:"horizontal-inset",mode:"boolean"})],p.prototype,"horizontalInset",void 0),(0,n.gn)([(0,r.Lj)({attribute:"horizontal-threshold"})],p.prototype,"horizontalThreshold",void 0),(0,n.gn)([(0,r.Lj)({attribute:"horizontal-scaling"})],p.prototype,"horizontalScaling",void 0),(0,n.gn)([(0,r.Lj)({attribute:"vertical-positioning-mode"})],p.prototype,"verticalPositioningMode",void 0),(0,n.gn)([(0,r.Lj)({attribute:"vertical-default-position"})],p.prototype,"verticalDefaultPosition",void 0),(0,n.gn)([(0,r.Lj)({attribute:"vertical-viewport-lock",mode:"boolean"})],p.prototype,"verticalViewportLock",void 0),(0,n.gn)([(0,r.Lj)({attribute:"vertical-inset",mode:"boolean"})],p.prototype,"verticalInset",void 0),(0,n.gn)([(0,r.Lj)({attribute:"vertical-threshold"})],p.prototype,"verticalThreshold",void 0),(0,n.gn)([(0,r.Lj)({attribute:"vertical-scaling"})],p.prototype,"verticalScaling",void 0),(0,n.gn)([(0,r.Lj)({attribute:"fixed-placement",mode:"boolean"})],p.prototype,"fixedPlacement",void 0),(0,n.gn)([(0,r.Lj)({attribute:"auto-update-mode"})],p.prototype,"autoUpdateMode",void 0),(0,n.gn)([a.LO],p.prototype,"anchorElement",void 0),(0,n.gn)([a.LO],p.prototype,"viewportElement",void 0),(0,n.gn)([a.LO],p.prototype,"initialLayoutComplete",void 0)},48657:function(t,e,i){"use strict";i.d(e,{O:function(){return o}});var n=i(39181);const o=(t,e)=>n.d`
    <slot></slot>
`},41521:function(t,e,i){"use strict";i.d(e,{B:function(){return l},v:function(){return s}});var n=i(52959),o=i(72815);function r(t){return`${t.toLowerCase()}:presentation`}const a=new Map,s=Object.freeze({define(t,e,i){const n=r(t);void 0===a.get(n)?a.set(n,e):a.set(n,!1),i.register(o.YM.instance(n,e))},forTag(t,e){const i=r(t),n=a.get(i);if(!1===n){return o.DI.findResponsibleContainer(e).get(i)}return n||null}});class l{constructor(t,e){this.template=t||null,this.styles=void 0===e?null:Array.isArray(e)?n.XL.create(e):e instanceof n.XL?e:n.XL.create([e])}applyTo(t){const e=t.$fastController;null===e.template&&(e.template=this.template),null===e.styles&&(e.styles=this.styles)}}},57905:function(t,e,i){"use strict";i.d(e,{K:function(){return p},h:function(){return l}});var n=i(57426),o=i(48839),r=i(72815),a=i(98648),s=i(41521);const l=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),c=new Map,d=new Map;let u=null;const h=r.DI.createInterface((t=>t.cachedCallback((t=>(null===u&&(u=new g(null,t)),u))))),p=Object.freeze({tagFor:t=>d.get(t),responsibleFor(t){const e=t.$$designSystem$$;if(e)return e;return r.DI.findResponsibleContainer(t).get(h)},getOrCreate(t){if(!t)return null===u&&(u=r.DI.getOrCreateDOMContainer().get(h)),u;const e=t.$$designSystem$$;if(e)return e;const i=r.DI.getOrCreateDOMContainer(t);if(i.has(h,!1))return i.get(h);{const e=new g(t,i);return i.register(r.YM.instance(h,e)),e}}});class g{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>l.definitionCallbackOnly,null!==t&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,i=[],n=this.disambiguate,r=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(t,a,s){const u=function(t,e,i){return"string"==typeof t?{name:t,type:e,callback:i}:t}(t,a,s),{name:h,callback:p,baseClass:g}=u;let{type:v}=u,m=h,b=c.get(m),y=!0;for(;b;){const t=n(m,v,b);switch(t){case l.ignoreDuplicate:return;case l.definitionCallbackOnly:y=!1,b=void 0;break;default:m=t,b=c.get(m)}}y&&((d.has(v)||v===o.I)&&(v=class extends v{}),c.set(m,v),d.set(v,m),g&&d.set(g,m)),i.push(new f(e,m,v,r,p,y))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&a.L.registerRoot(this.designTokenRoot)),e.registerWithContext(s,...t);for(const t of i)t.callback(t),t.willDefine&&null!==t.definition&&t.definition.define();return this}}class f{constructor(t,e,i,n,o,r){this.container=t,this.name=e,this.type=i,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(t){s.v.define(this.name,t,this.container)}defineElement(t){this.definition=new n.W(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return p.tagFor(t)}}},98648:function(t,e,i){"use strict";i.d(e,{L:function(){return D}});var n=i(20005),o=i(99539),r=i(87697),a=i(89346),s=i(22680);var l=i(12968),c=i(52959);const d=document.createElement("div");class u{setProperty(t,e){l.SO.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){l.SO.queueUpdate((()=>this.target.removeProperty(t)))}}class h extends u{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class p extends u{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class g{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),r.y$.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),l.SO.queueUpdate((()=>{null!==this.target&&this.target.setProperty(t,e)}))}removeProperty(t){this.store.delete(t),l.SO.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(t)}))}handleChange(t,e){const{sheet:i}=this.style;if(i){const t=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[t].style}else this.target=null}}(0,n.gn)([r.LO],g.prototype,"target",void 0);class f{constructor(t){this.target=t.style}setProperty(t,e){l.SO.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){l.SO.queueUpdate((()=>this.target.removeProperty(t)))}}class v{setProperty(t,e){v.properties[t]=e;for(const i of v.roots.values())y.getOrCreate(v.normalizeRoot(i)).setProperty(t,e)}removeProperty(t){delete v.properties[t];for(const e of v.roots.values())y.getOrCreate(v.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=v;if(!e.has(t)){e.add(t);const i=y.getOrCreate(this.normalizeRoot(t));for(const t in v.properties)i.setProperty(t,v.properties[t])}}static unregisterRoot(t){const{roots:e}=v;if(e.has(t)){e.delete(t);const i=y.getOrCreate(v.normalizeRoot(t));for(const t in v.properties)i.removeProperty(t)}}static normalizeRoot(t){return t===d?document:t}}v.roots=new Set,v.properties={};const m=new WeakMap,b=l.SO.supportsAdoptedStyleSheets?class extends u{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(c.XL.create([e]))}}:g,y=Object.freeze({getOrCreate(t){if(m.has(t))return m.get(t);let e;return t===d?e=new v:t instanceof Document?e=l.SO.supportsAdoptedStyleSheets?new h:new p:e=t instanceof a.H?new b(t):new f(t),m.set(t,e),e}});class w extends o.v{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,null!==t.cssCustomPropertyName&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=w.uniqueId(),w.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new w({name:"string"==typeof t?t:t.name,cssCustomPropertyName:"string"==typeof t?t:void 0===t.cssCustomPropertyName?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return"string"==typeof t.cssCustomProperty}static isDerivedDesignTokenValue(t){return"function"==typeof t}static getTokenById(t){return w.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=L.getOrCreate(t).get(this);if(void 0!==e)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof w&&(e=this.alias(e)),L.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),L.existsFor(t)&&L.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(d,t),this}subscribe(t,e){const i=this.getOrCreateSubscriberSet(e);e&&!L.existsFor(e)&&L.getOrCreate(e),i.has(t)||i.add(t)}unsubscribe(t,e){const i=this.subscribers.get(e||this);i&&i.has(t)&&i.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach((t=>t.handleChange(e))),this.subscribers.has(t)&&this.subscribers.get(t).forEach((t=>t.handleChange(e)))}alias(t){return e=>t.getValueFor(e)}}w.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})(),w.tokensById=new Map;class x{constructor(t,e,i){this.source=t,this.token=e,this.node=i,this.dependencies=new Set,this.observer=r.y$.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,r.Wp))}}class C{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),r.y$.getNotifier(this).notify(t.id))}get(t){return r.y$.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const $=new WeakMap,k=new WeakMap;class L{constructor(t){this.target=t,this.store=new C,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,e)=>{const i=w.getTokenById(e);if(i&&(i.notify(this.target),w.isCSSDesignToken(i))){const e=this.parent,n=this.isReflecting(i);if(e){const o=e.get(i),r=t.get(i);o===r||n?o===r&&n&&this.stopReflectToCSS(i):this.reflectToCSS(i)}else n||this.reflectToCSS(i)}}},$.set(t,this),r.y$.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof a.H?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return $.get(t)||new L(t)}static existsFor(t){return $.has(t)}static findParent(t){if(d!==t.target){let e=(0,s.T)(t.target);for(;null!==e;){if($.has(e))return $.get(e);e=(0,s.T)(e)}return L.getOrCreate(d)}return null}static findClosestAssignedNode(t,e){let i=e;do{if(i.has(t))return i;i=i.parent?i.parent:i.target!==d?L.getOrCreate(d):null}while(null!==i);return null}get parent(){return k.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(void 0!==e)return e;const i=this.getRaw(t);return void 0!==i?(this.hydrate(t,i),this.get(t)):void 0}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):null===(e=L.findClosestAssignedNode(t,this))||void 0===e?void 0:e.getRaw(t)}set(t,e){w.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),w.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=L.findParent(this);t&&t.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){if(this.parent){k.get(this).removeChild(this)}}appendChild(t){t.parent&&k.get(t).removeChild(t);const e=this.children.filter((e=>t.contains(e)));k.set(t,this),this.children.push(t),e.forEach((e=>t.appendChild(e))),r.y$.getNotifier(this.store).subscribe(t);for(const[e,i]of this.store.all())t.hydrate(e,this.bindingObservers.has(e)?this.getRaw(e):i)}removeChild(t){const e=this.children.indexOf(t);return-1!==e&&this.children.splice(e,1),r.y$.getNotifier(this.store).unsubscribe(t),t.parent===this&&k.delete(t)}contains(t){return function(t,e){let i=e;for(;null!==i;){if(i===t)return!0;i=(0,s.T)(i)}return!1}(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),L.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),L.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const i=w.getTokenById(e);i&&this.hydrate(i,this.getRaw(i))}hydrate(t,e){if(!this.has(t)){const i=this.bindingObservers.get(t);w.isDerivedDesignTokenValue(e)?i?i.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(i&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const i=new x(e,t,this);return this.bindingObservers.set(t,i),i}tearDownBindingObserver(t){return!!this.bindingObservers.has(t)&&(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0)}}L.cssCustomPropertyReflector=new class{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:i}=t;this.add(e,i)}add(t,e){y.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(L.getOrCreate(e).get(t)))}remove(t,e){y.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&"function"==typeof t.createCSS?t.createCSS():t}},(0,n.gn)([r.LO],L.prototype,"children",void 0);const D=Object.freeze({create:function(t){return w.from(t)},notifyConnection:t=>!(!t.isConnected||!L.existsFor(t))&&(L.getOrCreate(t).bind(),!0),notifyDisconnection:t=>!(t.isConnected||!L.existsFor(t))&&(L.getOrCreate(t).unbind(),!0),registerRoot(t=d){v.registerRoot(t)},unregisterRoot(t=d){v.unregisterRoot(t)}})},72815:function(t,e,i){"use strict";i.d(e,{DI:function(){return p},YM:function(){return M},f3:function(){return v}});var n=i(89346),o=i(89694);const r=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(i){Reflect.defineMetadata(t,e,i)}},Reflect.defineMetadata=function(t,e,i){let n=r.get(i);void 0===n&&r.set(i,n=new Map),n.set(t,e)},Reflect.getOwnMetadata=function(t,e){const i=r.get(e);if(void 0!==i)return i.get(t)});class a{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,R(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:i,key:n}=this;return this.container=this.key=void 0,i.registerResolver(n,new x(n,t,e))}}function s(t){const e=t.slice(),i=Object.keys(t),n=i.length;let o;for(let r=0;r<n;++r)o=i[r],N(o)||(e[o]=t[o]);return e}const l=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton:t=>new x(t,1,t),transient:t=>new x(t,2,t)}),c=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:l.singleton})}),d=new Map;function u(t){return e=>Reflect.getOwnMetadata(t,e)}let h=null;const p=Object.freeze({createContainer:t=>new O(null,Object.assign({},c.default,t)),findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:p.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(F,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||p.getOrCreateDOMContainer()},getOrCreateDOMContainer:(t,e)=>t?t.$$container$$||new O(t,Object.assign({},c.default,e,{parentLocator:p.findParentContainer})):h||(h=new O(null,Object.assign({},c.default,e,{parentLocator:()=>null}))),getDesignParamtypes:u("design:paramtypes"),getAnnotationParamtypes:u("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return void 0===e&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=d.get(t);if(void 0===e){const i=t.inject;if(void 0===i){const i=p.getDesignParamtypes(t),n=p.getAnnotationParamtypes(t);if(void 0===i)if(void 0===n){const i=Object.getPrototypeOf(t);e="function"==typeof i&&i!==Function.prototype?s(p.getDependencies(i)):[]}else e=s(n);else if(void 0===n)e=s(i);else{e=s(i);let t,o=n.length;for(let i=0;i<o;++i)t=n[i],void 0!==t&&(e[i]=t);const r=Object.keys(n);let a;o=r.length;for(let t=0;t<o;++t)a=r[t],N(a)||(e[a]=n[a])}}else e=s(i);d.set(t,e)}return e},defineProperty(t,e,i,o=!1){const r=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let t=this[r];if(void 0===t){const a=this instanceof HTMLElement?p.findResponsibleContainer(this):p.getOrCreateDOMContainer();if(t=a.get(i),this[r]=t,o&&this instanceof n.H){const n=this.$fastController,o=()=>{p.findResponsibleContainer(this).get(i)!==this[r]&&(this[r]=t,n.notify(e))};n.subscribe({handleChange:o},"isConnected")}}return t}})},createInterface(t,e){const i="function"==typeof t?t:e,n="string"==typeof t?t:t&&"friendlyName"in t&&t.friendlyName||E,o="string"!=typeof t&&(t&&"respectConnection"in t&&t.respectConnection||!1),r=function(t,e,i){if(null==t||void 0!==new.target)throw new Error(`No registration for interface: '${r.friendlyName}'`);if(e)p.defineProperty(t,e,r,o);else{p.getOrCreateAnnotationParamTypes(t)[i]=r}};return r.$isInterface=!0,r.friendlyName=null==n?"(anonymous)":n,null!=i&&(r.register=function(t,e){return i(new a(t,null!=e?e:r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject:(...t)=>function(e,i,n){if("number"==typeof n){const i=p.getOrCreateAnnotationParamTypes(e),o=t[0];void 0!==o&&(i[n]=o)}else if(i)p.defineProperty(e,i,t[0]);else{const i=n?p.getOrCreateAnnotationParamTypes(n.value):p.getOrCreateAnnotationParamTypes(e);let o;for(let e=0;e<t.length;++e)o=t[e],void 0!==o&&(i[e]=o)}},transient:t=>(t.register=function(e){return M.transient(t,t).register(e)},t.registerInRequestor=!1,t),singleton:(t,e=m)=>(t.register=function(e){return M.singleton(t,t).register(e)},t.registerInRequestor=e.scoped,t)}),g=p.createInterface("Container");function f(t){return function(e){const i=function(t,e,n){p.inject(i)(t,e,n)};return i.$isResolver=!0,i.resolve=function(i,n){return t(e,i,n)},i}}const v=p.inject;const m={scoped:!1};b=(t,e,i,n)=>i.getAll(t,n);var b;f(((t,e,i)=>()=>i.get(t))),f(((t,e,i)=>i.has(t,!0)?i.get(t):void 0));function y(t,e,i){p.inject(y)(t,e,i)}y.$isResolver=!0,y.resolve=()=>{};f(((t,e,i)=>{const n=w(t,e),o=new x(t,0,n);return i.registerResolver(t,o),n})),f(((t,e,i)=>w(t,e)));function w(t,e){return e.getFactory(t).construct(e)}class x{constructor(t,e,i){this.key=t,this.strategy=e,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=t.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,i,n;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return null!==(n=null===(i=null===(e=t.getResolver(this.state))||void 0===e?void 0:e.getFactory)||void 0===i?void 0:i.call(e,t))&&void 0!==n?n:null;default:return null}}}function C(t){return this.get(t)}function $(t,e){return e(t)}class k{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let i;return i=void 0===e?new this.Type(...this.dependencies.map(C,t)):new this.Type(...this.dependencies.map(C,t),...e),null==this.transformers?i:this.transformers.reduce($,i)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const L={$isResolver:!0,resolve:(t,e)=>e};function D(t){return"function"==typeof t.register}function S(t){return function(t){return D(t)&&"boolean"==typeof t.registerInRequestor}(t)&&t.registerInRequestor}const T=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),F="__DI_LOCATE_PARENT__",I=new Map;class O{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,null!==t&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(g,L),t instanceof Node&&t.addEventListener(F,(t=>{t.composedPath()[0]!==this.owner&&(t.detail.container=this,t.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let e,i,n,o,r;const a=this.context;for(let s=0,l=t.length;s<l;++s)if(e=t[s],B(e))if(D(e))e.register(this,a);else if(void 0!==e.prototype)M.singleton(e,e).register(this);else for(i=Object.keys(e),o=0,r=i.length;o<r;++o)n=e[i[o]],B(n)&&(D(n)?n.register(this,a):this.register(n));return--this.registerDepth,this}registerResolver(t,e){P(t);const i=this.resolvers,n=i.get(t);return null==n?i.set(t,e):n instanceof x&&4===n.strategy?n.state.push(e):i.set(t,new x(t,4,[n,e])),e}registerTransformer(t,e){const i=this.getResolver(t);if(null==i)return!1;if(i.getFactory){const t=i.getFactory(this);return null!=t&&(t.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(P(t),void 0!==t.resolve)return t;let i,n=this;for(;null!=n;){if(i=n.resolvers.get(t),null!=i)return i;if(null==n.parent){const i=S(t)?this:n;return e?this.jitRegister(t,i):null}n=n.parent}return null}has(t,e=!1){return!!this.resolvers.has(t)||!(!e||null==this.parent)&&this.parent.has(t,!0)}get(t){if(P(t),t.$isResolver)return t.resolve(this,this);let e,i=this;for(;null!=i;){if(e=i.resolvers.get(t),null!=e)return e.resolve(i,this);if(null==i.parent){const n=S(t)?this:i;return e=this.jitRegister(t,n),e.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${t}`)}getAll(t,e=!1){P(t);const i=this;let n,r=i;if(e){let e=o.ow;for(;null!=r;)n=r.resolvers.get(t),null!=n&&(e=e.concat(A(n,r,i))),r=r.parent;return e}for(;null!=r;){if(n=r.resolvers.get(t),null!=n)return A(n,r,i);if(r=r.parent,null==r)return o.ow}return o.ow}getFactory(t){let e=I.get(t);if(void 0===e){if(V(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);I.set(t,e=new k(t,p.getDependencies(t)))}return e}registerFactory(t,e){I.set(t,e)}createChild(t){return new O(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if("function"!=typeof t)throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(T.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(D(t)){const i=t.register(e);if(!(i instanceof Object)||null==i.resolve){const i=e.resolvers.get(t);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const i=this.config.defaultResolver(t,e);return e.resolvers.set(t,i),i}}}const H=new WeakMap;function R(t){return function(e,i,n){if(H.has(n))return H.get(n);const o=t(e,i,n);return H.set(n,o),o}}const M=Object.freeze({instance:(t,e)=>new x(t,0,e),singleton:(t,e)=>new x(t,1,e),transient:(t,e)=>new x(t,2,e),callback:(t,e)=>new x(t,3,e),cachedCallback:(t,e)=>new x(t,3,R(e)),aliasTo:(t,e)=>new x(e,5,t)});function P(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function A(t,e,i){if(t instanceof x&&4===t.strategy){const n=t.state;let o=n.length;const r=new Array(o);for(;o--;)r[o]=n[o].resolve(e,i);return r}return[t.resolve(e,i)]}const E="(anonymous)";function B(t){return"object"==typeof t&&null!==t||"function"==typeof t}const V=function(){const t=new WeakMap;let e=!1,i="",n=0;return function(o){return e=t.get(o),void 0===e&&(i=o.toString(),n=i.length,e=n>=29&&n<=100&&125===i.charCodeAt(n-1)&&i.charCodeAt(n-2)<=32&&93===i.charCodeAt(n-3)&&101===i.charCodeAt(n-4)&&100===i.charCodeAt(n-5)&&111===i.charCodeAt(n-6)&&99===i.charCodeAt(n-7)&&32===i.charCodeAt(n-8)&&101===i.charCodeAt(n-9)&&118===i.charCodeAt(n-10)&&105===i.charCodeAt(n-11)&&116===i.charCodeAt(n-12)&&97===i.charCodeAt(n-13)&&110===i.charCodeAt(n-14)&&88===i.charCodeAt(n-15),t.set(o,e)),e}}(),z={};function N(t){switch(typeof t){case"number":return t>=0&&(0|t)===t;case"string":{const e=z[t];if(void 0!==e)return e;const i=t.length;if(0===i)return z[t]=!1;let n=0;for(let e=0;e<i;++e)if(n=t.charCodeAt(e),0===e&&48===n&&i>1||n<48||n>57)return z[t]=!1;return z[t]=!0}default:return!1}}},82500:function(t,e,i){"use strict";i.d(e,{Um:function(){return h},V2:function(){return p}});var n=i(89694),o=i(12968),r=i(65620),a=i(87697),s=i(36153);const l="form-associated-proxy",c="ElementInternals",d=c in window&&"setFormValue"in window.ElementInternals.prototype,u=new WeakMap;function h(t){const e=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return d}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?e.concat(Array.from(t)):e;return Object.freeze(i)}return n.ow}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),o.SO.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),o.SO.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!d)return null;let t=u.get(this);return t||(t=this.attachInternals(),u.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((t=>this.proxy.removeEventListener(t,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,i){this.elementInternals?this.elementInternals.setValidity(t,e,i):"string"==typeof e&&this.proxy.setCustomValidity(e)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((t=>this.proxy.addEventListener(t,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",l),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",l)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){if(t.key===s.kL)if(this.form instanceof HTMLFormElement){const t=this.form.querySelector("[type=submit]");null==t||t.click()}}stopPropagation(t){t.stopPropagation()}};return(0,r.Lj)({mode:"boolean"})(e.prototype,"disabled"),(0,r.Lj)({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),(0,r.Lj)({attribute:"current-value"})(e.prototype,"currentValue"),(0,r.Lj)(e.prototype,"name"),(0,r.Lj)({mode:"boolean"})(e.prototype,"required"),(0,a.LO)(e.prototype,"value"),e}function p(t){class e extends(h(t)){}class i extends e{constructor(...t){super(t),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(t,e){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==t&&this.$emit("change"),this.validate()}currentCheckedChanged(t,e){this.checked=this.currentChecked}updateForm(){const t=this.checked?this.value:null;this.setFormValue(t,t)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return(0,r.Lj)({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),(0,r.Lj)({attribute:"current-checked",converter:r.bw})(i.prototype,"currentChecked"),(0,a.LO)(i.prototype,"defaultChecked"),(0,a.LO)(i.prototype,"checked"),i}},48839:function(t,e,i){"use strict";i.d(e,{I:function(){return s}});var n=i(20005),o=i(89346),r=i(87697),a=i(41521);class s extends o.H{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=a.v.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new c(this===s?class extends s{}:this,t,e)}}function l(t,e,i){return"function"==typeof t?t(e,i):t}(0,n.gn)([r.LO],s.prototype,"template",void 0),(0,n.gn)([r.LO],s.prototype,"styles",void 0);class c{constructor(t,e,i){this.type=t,this.elementDefinition=e,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const i=this.definition,n=this.overrideDefinition,o=`${i.prefix||e.elementPrefix}-${i.baseName}`;e.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:t=>{const e=new a.B(l(i.template,t,i),l(i.styles,t,i));t.definePresentation(e);let o=l(i.shadowOptions,t,i);t.shadowRootMode&&(o?n.shadowOptions||(o.mode=t.shadowRootMode):null!==o&&(o={mode:t.shadowRootMode})),t.defineElement({elementOptions:l(i.elementOptions,t,i),shadowOptions:o,attributes:l(i.attributes,t,i)})}})}}},30562:function(t,e,i){"use strict";i.d(e,{sN:function(){return g}});var n=i(20005),o=i(12968),r=i(65620),a=i(87697),s=i(65825),l=i(36153),c=i(48839),d=i(51208),u=i(11433),h=i(86076),p=i(72120);class g extends c.I{constructor(){super(...arguments),this.role=p.O.menuitem,this.hasSubmenu=!1,this.currentDirection=s.N.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case l.kL:case l.BI:return this.invoke(),!1;case l.mr:return this.expandAndFocus(),!1;case l.BE:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case p.O.menuitemcheckbox:this.checked=!this.checked;break;case p.O.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case p.O.menuitemradio:this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find((t=>"menu"===t.getAttribute("role"))),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(t){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=(0,u.M)(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),o.SO.queueUpdate((()=>{this.updateSubmenu()})),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter((t=>!t.hasAttribute("hidden")))}}(0,n.gn)([(0,r.Lj)({mode:"boolean"})],g.prototype,"disabled",void 0),(0,n.gn)([(0,r.Lj)({mode:"boolean"})],g.prototype,"expanded",void 0),(0,n.gn)([a.LO],g.prototype,"startColumnCount",void 0),(0,n.gn)([r.Lj],g.prototype,"role",void 0),(0,n.gn)([(0,r.Lj)({mode:"boolean"})],g.prototype,"checked",void 0),(0,n.gn)([a.LO],g.prototype,"submenuRegion",void 0),(0,n.gn)([a.LO],g.prototype,"hasSubmenu",void 0),(0,n.gn)([a.LO],g.prototype,"currentDirection",void 0),(0,n.gn)([a.LO],g.prototype,"submenu",void 0),(0,h.e)(g,d.hW)},72120:function(t,e,i){"use strict";i.d(e,{J:function(){return o},O:function(){return n}});const n={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},o={[n.menuitem]:"menuitem",[n.menuitemcheckbox]:"menuitemcheckbox",[n.menuitemradio]:"menuitemradio"}},7775:function(t,e,i){"use strict";i.d(e,{v:function(){return r}});var n=i(20005),o=i(65620);class r{}(0,n.gn)([(0,o.Lj)({attribute:"aria-atomic"})],r.prototype,"ariaAtomic",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-busy"})],r.prototype,"ariaBusy",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-controls"})],r.prototype,"ariaControls",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-current"})],r.prototype,"ariaCurrent",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-describedby"})],r.prototype,"ariaDescribedby",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-details"})],r.prototype,"ariaDetails",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-disabled"})],r.prototype,"ariaDisabled",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-errormessage"})],r.prototype,"ariaErrormessage",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-flowto"})],r.prototype,"ariaFlowto",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-haspopup"})],r.prototype,"ariaHaspopup",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-hidden"})],r.prototype,"ariaHidden",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-invalid"})],r.prototype,"ariaInvalid",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-keyshortcuts"})],r.prototype,"ariaKeyshortcuts",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-label"})],r.prototype,"ariaLabel",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-labelledby"})],r.prototype,"ariaLabelledby",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-live"})],r.prototype,"ariaLive",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-owns"})],r.prototype,"ariaOwns",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-relevant"})],r.prototype,"ariaRelevant",void 0),(0,n.gn)([(0,o.Lj)({attribute:"aria-roledescription"})],r.prototype,"ariaRoledescription",void 0)},51208:function(t,e,i){"use strict";i.d(e,{LC:function(){return a},hW:function(){return r},hX:function(){return c},m9:function(){return s},zq:function(){return l}});var n=i(39181),o=i(58952);class r{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const a=(t,e)=>n.d`
    <span
        part="end"
        ${(0,o.i)("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${(0,o.i)("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,s=(t,e)=>n.d`
    <span
        part="start"
        ${(0,o.i)("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${(0,o.i)("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,l=n.d`
    <span part="end" ${(0,o.i)("endContainer")}>
        <slot
            name="end"
            ${(0,o.i)("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,c=n.d`
    <span part="start" ${(0,o.i)("startContainer")}>
        <slot
            name="start"
            ${(0,o.i)("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`},43504:function(t,e,i){"use strict";i.d(e,{x:function(){return o}});var n=i(48839);class o extends n.I{}},49944:function(t,e,i){"use strict";i.d(e,{o:function(){return o}});var n=i(39181);const o=(t,e)=>n.d`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`},26899:function(t,e,i){"use strict";i.d(e,{O:function(){return a}});var n=i(20005),o=i(65620),r=i(48839);class a extends r.I{}(0,n.gn)([(0,o.Lj)({mode:"boolean"})],a.prototype,"disabled",void 0)},13626:function(t,e,i){"use strict";i.d(e,{O:function(){return o}});var n=i(39181);const o=(t,e)=>n.d`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`},99096:function(t,e,i){"use strict";i.d(e,{yd:function(){return v},nv:function(){return f}});var n=i(20005),o=i(12968),r=i(65620),a=i(87697),s=i(7775),l=i(51208),c=i(86076),d=i(82500),u=i(48839);class h extends u.I{}class p extends((0,d.Um)(h)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const g="text";class f extends p{constructor(){super(...arguments),this.type=g}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&o.SO.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}(0,n.gn)([(0,r.Lj)({attribute:"readonly",mode:"boolean"})],f.prototype,"readOnly",void 0),(0,n.gn)([(0,r.Lj)({mode:"boolean"})],f.prototype,"autofocus",void 0),(0,n.gn)([r.Lj],f.prototype,"placeholder",void 0),(0,n.gn)([r.Lj],f.prototype,"type",void 0),(0,n.gn)([r.Lj],f.prototype,"list",void 0),(0,n.gn)([(0,r.Lj)({converter:r.Id})],f.prototype,"maxlength",void 0),(0,n.gn)([(0,r.Lj)({converter:r.Id})],f.prototype,"minlength",void 0),(0,n.gn)([r.Lj],f.prototype,"pattern",void 0),(0,n.gn)([(0,r.Lj)({converter:r.Id})],f.prototype,"size",void 0),(0,n.gn)([(0,r.Lj)({mode:"boolean"})],f.prototype,"spellcheck",void 0),(0,n.gn)([a.LO],f.prototype,"defaultSlottedNodes",void 0);class v{}(0,c.e)(v,s.v),(0,c.e)(f,l.hW,v)},86076:function(t,e,i){"use strict";function n(t,...e){e.forEach((e=>{if(Object.getOwnPropertyNames(e.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(t.prototype,i,Object.getOwnPropertyDescriptor(e.prototype,i))})),e.attributes){const i=t.attributes||[];t.attributes=i.concat(e.attributes)}}))}i.d(e,{e:function(){return n}})},22680:function(t,e,i){"use strict";function n(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}i.d(e,{T:function(){return n}})},11433:function(t,e,i){"use strict";i.d(e,{M:function(){return o}});var n=i(65825);const o=t=>{const e=t.closest("[dir]");return null!==e&&"rtl"===e.dir?n.N.rtl:n.N.ltr}},40082:function(t,e,i){"use strict";i.d(e,{KJ:function(){return n},Uu:function(){return r},vF:function(){return o},zw:function(){return a}});class n extends class{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,i=this.constructListener(t);i.bind(e)(),e.addListener(i),this.listenerCache.set(t,i)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new n(t,e)}constructListener(t){let e=!1;const i=this.styles;return function(){const{matches:n}=this;n&&!e?(t.$fastController.addStyles(i),e=n):!n&&e&&(t.$fastController.removeStyles(i),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const o=n.with(window.matchMedia("(forced-colors)")),r=n.with(window.matchMedia("(prefers-color-scheme: dark)")),a=n.with(window.matchMedia("(prefers-color-scheme: light)"))},81493:function(t,e,i){"use strict";i.d(e,{w:function(){return o}});var n=i(87697);class o{constructor(t,e,i){this.propertyName=t,this.value=e,this.styles=i}bind(t){n.y$.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){n.y$.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}},37139:function(t,e,i){"use strict";i.d(e,{H:function(){return n}});const n="not-allowed"},67020:function(t,e,i){"use strict";i.d(e,{j:function(){return n}});function n(t){return`:host([hidden]){display:none}:host{display:${t}}`}},56201:function(t,e,i){"use strict";i.d(e,{b:function(){return n}});const n=(0,i(67846).Zm)()?"focus-visible":"focus"},15983:function(t,e,i){"use strict";i.d(e,{i:function(){return n}});const n={horizontal:"horizontal",vertical:"vertical"}},67846:function(t,e,i){"use strict";i.d(e,{Re:function(){return o},Zm:function(){return a}});var n=i(39619);function o(...t){return t.every((t=>t instanceof HTMLElement))}let r;function a(){if("boolean"==typeof r)return r;if(!(0,n.N)())return r=!1,r;const t=document.createElement("style"),e=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==e&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),r=!0}catch(t){r=!1}finally{document.head.removeChild(t)}return r}},36153:function(t,e,i){"use strict";var n;i.d(e,{BE:function(){return r},BI:function(){return h},CX:function(){return c},Kh:function(){return u},SB:function(){return s},iF:function(){return o},kL:function(){return l},mr:function(){return a},oM:function(){return p},tU:function(){return d},uf:function(){return g}}),function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(n||(n={}));const o="ArrowDown",r="ArrowLeft",a="ArrowRight",s="ArrowUp",l="Enter",c="Escape",d="Home",u="End",h=" ",p="Tab",g={ArrowDown:o,ArrowLeft:r,ArrowRight:a,ArrowUp:s}},65825:function(t,e,i){"use strict";var n;i.d(e,{N:function(){return n}}),function(t){t.ltr="ltr",t.rtl="rtl"}(n||(n={}))}}]);