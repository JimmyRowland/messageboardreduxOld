(this.webpackJsonpmessageboardredux2=this.webpackJsonpmessageboardredux2||[]).push([[0],[,function(e,a,n){e.exports={navbar:"MessageBoard_navbar__3JGlZ",placeholder:"MessageBoard_placeholder__2iJ22",navbarRight:"MessageBoard_navbarRight__1W1sf",navLeft:"MessageBoard_navLeft__sHmsz",navButton:"MessageBoard_navButton__1JNon",container:"MessageBoard_container__1ASce",mbHeader:"MessageBoard_mbHeader__2lSvs",messageBoard:"MessageBoard_messageBoard__3yLaG",mbMsgContainer:"MessageBoard_mbMsgContainer__1CDoW",mbMsg:"MessageBoard_mbMsg__73YEr",opacity:"MessageBoard_opacity__26jw3",mbForm:"MessageBoard_mbForm__HHr7M",msgInputTextarea:"MessageBoard_msgInputTextarea__2u_z_",mbH1:"MessageBoard_mbH1__d-FSz",msgSubmitBtn:"MessageBoard_msgSubmitBtn__1n3NS",background:"MessageBoard_background__2mx0z",black:"MessageBoard_black__2k6Hq",white:"MessageBoard_white__zC3rV",grey:"MessageBoard_grey__29wfs",description:"MessageBoard_description__MHCY5"}},function(e,a,n){e.exports={navbar:"TopMenu_navbar__wu_QJ",placeholder:"TopMenu_placeholder__1y-cQ",navbarRight:"TopMenu_navbarRight__3q4mW",navLeft:"TopMenu_navLeft__7f3r4",navButton:"TopMenu_navButton__h1req",container:"TopMenu_container__3xjt8",mbHeader:"TopMenu_mbHeader__2rYw0",messageBoard:"TopMenu_messageBoard__1fZjt",mbMsgContainer:"TopMenu_mbMsgContainer__1pyw7",mbMsg:"TopMenu_mbMsg__3aq3E",opacity:"TopMenu_opacity__p1qz8",mbForm:"TopMenu_mbForm__32wa2",msgInputTextarea:"TopMenu_msgInputTextarea__2gNTV",mbH1:"TopMenu_mbH1__3q71o",msgSubmitBtn:"TopMenu_msgSubmitBtn__vgKvx",background:"TopMenu_background__3f6Me",black:"TopMenu_black__3OSQY",white:"TopMenu_white__2q8Gq",grey:"TopMenu_grey__2H1gn",description:"TopMenu_description__-ChcJ"}},,,,function(e,a,n){e.exports={navbar:"FlaggyFlag_navbar__3OHj-",placeholder:"FlaggyFlag_placeholder__BegcP",navbarRight:"FlaggyFlag_navbarRight__3c8AM",navLeft:"FlaggyFlag_navLeft__3_O6_",navButton:"FlaggyFlag_navButton__3XKAr",container:"FlaggyFlag_container__3w1H4",mbHeader:"FlaggyFlag_mbHeader__2HL4M",messageBoard:"FlaggyFlag_messageBoard__3jgGT",mbMsgContainer:"FlaggyFlag_mbMsgContainer__1KppC",mbMsg:"FlaggyFlag_mbMsg__36tig",opacity:"FlaggyFlag_opacity__2jAnZ",mbForm:"FlaggyFlag_mbForm__2Ak7j",msgInputTextarea:"FlaggyFlag_msgInputTextarea__1gNvj",mbH1:"FlaggyFlag_mbH1__1bPbn",msgSubmitBtn:"FlaggyFlag_msgSubmitBtn__3UOqe",background:"FlaggyFlag_background__1tg5V",black:"FlaggyFlag_black__1oPUg",white:"FlaggyFlag_white__3JNdU",grey:"FlaggyFlag_grey__2CXh1",description:"FlaggyFlag_description__-OAKH"}},,,,,,,function(e,a,n){e.exports={navbar:"PopUp_navbar__2Usdj",placeholder:"PopUp_placeholder__eeMuv",navbarRight:"PopUp_navbarRight__2gF0i",navLeft:"PopUp_navLeft__2PrxR",navButton:"PopUp_navButton__1k0kS",container:"PopUp_container__1frNV",mbHeader:"PopUp_mbHeader__9ZkVS",messageBoard:"PopUp_messageBoard__1jnHq",mbMsgContainer:"PopUp_mbMsgContainer__2kLzx",mbMsg:"PopUp_mbMsg__3MlhK",opacity:"PopUp_opacity__1CND1",mbForm:"PopUp_mbForm__rN_-r",msgInputTextarea:"PopUp_msgInputTextarea__1nBjQ",mbH1:"PopUp_mbH1__336_O",msgSubmitBtn:"PopUp_msgSubmitBtn__Qa6mZ",background:"PopUp_background___HNEq",black:"PopUp_black__1fpZq",white:"PopUp_white__21wo1",grey:"PopUp_grey__1eJBf",description:"PopUp_description__1rAP9",popup:"PopUp_popup__2uONi",modelContainer:"PopUp_modelContainer__1gEtX"}},,,,function(e,a,n){e.exports=n(31)},,,,,function(e,a,n){},function(e,a,n){e.exports=n.p+"static/media/logo.8dad8028.svg"},function(e,a,n){},,,,,,,function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(7),_=n.n(r),s=(n(22),n(23),n(24),n(5)),l=n(9),g=n(1),c=n.n(g),m=n(13),i=n.n(m);function u(e){var a=e.messages,n=e.index,t=e.handleClose;return o.a.createElement("div",{className:i.a.modelContainer},o.a.createElement("div",{className:i.a.popup,onClick:function(){t()}},o.a.createElement("h1",null,"index: ",n),o.a.createElement("h4",null,a)))}var p=Object(l.b)((function(e){return e}))((function(e){var a=e.dispatch,n=e.messages,r=Object(t.useState)(""),_=Object(s.a)(r,2),l=_[0],g=_[1],m=Object(t.useState)({index:-1,message:""}),i=Object(s.a)(m,2),p=i[0],d=i[1],b=function(){a((console.log("clear"),{type:"CLEAR_MESSAGES"}))};return o.a.createElement("div",{className:c.a.container},o.a.createElement("div",{className:c.a.messageBoard},o.a.createElement("div",{className:c.a.mbHeader},o.a.createElement("h1",{className:c.a.mbH1},"@ VerY FunCt1on@l m3ss@ge b0ard tHat d0e$ not sto3 y03 me$$Age")),o.a.createElement("div",{className:c.a.mbMsgContainer,id:"mb-msg-container"},n.map((function(e,n){return o.a.createElement("div",{key:n,className:c.a.mbMsg},o.a.createElement("span",{onClick:function(){d({index:n,message:e})}},e),o.a.createElement("button",{onClick:function(){!function(e){a(function(e){return{type:"DELETE_MESSAGES",index:e}}(e))}(n)}},"delete"))}))),o.a.createElement("div",{className:c.a.mbForm},o.a.createElement("textarea",{className:c.a.msgInputTextarea,cols:50,rows:6,id:"textInput",value:l,onChange:function(e){g(e.target.value)}}),o.a.createElement("button",{className:c.a.msgSubmitBtn,onClick:function(){""!==l&&(a({type:"ADD_MESSAGES",text:l}),g(""))}},"Post"),o.a.createElement("button",{className:c.a.msgSubmitBtn,onClick:function(){b()}},"Clear"),o.a.createElement("button",{className:c.a.msgSubmitBtn,onClick:function(){g("")}},"Clear From"))),-1!==p.index?o.a.createElement(u,{messages:p.message,handleClose:void d({index:-1,message:""}),index:p.index}):null)})),d=n(6),b=n.n(d);function v(){var e=Object(t.useState)(""),a=Object(s.a)(e,2);a[0],a[1];return o.a.createElement("div",{className:b.a.background},o.a.createElement("div",{className:b.a.black}),o.a.createElement("div",{className:b.a.white}),o.a.createElement("div",{className:b.a.grey}))}var M=n(2),E=n.n(M);function f(){return o.a.createElement("nav",null,o.a.createElement("div",{className:E.a.navbar},o.a.createElement("div",{className:E.a.navLeft},o.a.createElement("div",null,"Home")),o.a.createElement("div",{className:E.a.navbarRight},o.a.createElement("div",{className:E.a.navButton},"About"),o.a.createElement("div",{className:E.a.navButton},"Project"),o.a.createElement("div",{className:E.a.navButton,onClick:function(){window.location.href="https://jimmyrowland.github.io/Portfolio/build/"}},"Portfolio"))))}var B=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement(v,null),o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(3),h=n(16),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["The most beautiful msg board I have ever seen","Flaggy flag forever","One true flag","Flaggy flag"],a=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer"),a.type){case"ADD_MESSAGES":return console.log("add"),console.log(a),[].concat(Object(h.a)(e),[a.text]);case"DELETE_MESSAGES":return e.filter((function(e,n){return n!==a.index}));case"CLEAR_MESSAGES":return console.log("clear"),[];default:return e}},S=Object(F.b)({messages:y}),k=Object(F.c)(S);_.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:k},o.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.a1429eb8.chunk.js.map