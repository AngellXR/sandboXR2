(this.webpackJsonpsandboxr=this.webpackJsonpsandboxr||[]).push([[0],{27:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t(1),o=t.n(r),c=t(10),l=t.n(c),s=(t(7),t(2)),a=t(3);function d(){var n=Object(s.a)(['\n    position: relative;\n    left: 0%;\n    right: 0%;\n    top: 0%;\n    bottom: 0%;\n\n    font-family: "Lora", serif;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 36px;\n    line-height: 46px;\n\n    color: #FCFCFC;\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n    margin: 0px 13px;\n']);return d=function(){return n},n}var p=a.a.div(d());function u(n){var e=n.title;return Object(i.jsx)(p,{children:e})}function h(){var n=Object(s.a)(['\n    /* body */\n\n\n    position: relative;\n    left: 0%;\n    right: 0%;\n    top: 0%;\n    bottom: 0%;\n\n    font-family: "Lato", sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 11px;\n    line-height: 13px;\n\n    color: #FCFCFC;\n\n\n    /* Inside Auto Layout */\n\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n    margin: 0px 13px;\n']);return h=function(){return n},n}var x=a.a.div(h());function f(n){var e=n.description;return Object(i.jsx)(x,{children:e})}function m(){var n=Object(s.a)(["\n    /* CardBody */\n\n\n    /* Auto Layout */\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 12px;\n\n    position: static;\n    width: 299px;\n    height: 125px;\n    left: -2px;\n    top: 287px;\n\n\n    /* Inside Auto Layout */\n\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n    margin: 0px 0px;\n"]);return m=function(){return n},n}var b=a.a.div(m());function j(n){var e=n.title,t=n.description;return Object(i.jsxs)(b,{children:[Object(i.jsx)(f,{description:t}),Object(i.jsx)(u,{title:e})]})}function y(){var n=Object(s.a)(["\n    position: relative;\n    width: 300px;\n    height: 287px;\n    left: 0px;\n    top: 0px;\n\n    background: url(.jpg);\n    border-radius: 10px;\n\n    /* Inside Auto Layout */\n\n    flex: none;\n    order: 0;\n    flex-grow: 0;\n    margin: 0px 0px;\n"]);return y=function(){return n},n}var g=a.a.div(y());function v(n){var e=n.imgURL;return Object(i.jsx)(g,{children:Object(i.jsx)("img",{src:e})})}function O(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0px;\n\n    position: relative;\n    width: 18.75em;\n    height: 25.8125em;\n    left: calc(50% - 300px/2);\n    top: calc(50% - 413px/2 - 0.5px);\n\n    background: #333333;\n    border: 10px solid #000000;\n    box-shadow: 1.25em 1.25em .25em #623CEA;\n    border-radius: 1.25em;\n    \n"]);return O=function(){return n},n}var w=a.a.div(O());function k(n){var e=n.cardInfo;return console.log(e),Object(i.jsxs)(w,{children:[Object(i.jsx)(v,{imgURL:e.imgURL}),Object(i.jsx)(j,{title:e.title,description:e.description})]})}var R=Object.freeze([{title:"Bill's Booty",imgURL:"http://www.fillmurray.com/305/295",description:"This is my body description of the experience. You should totally click this to experience WebXR for yourself.",link:"https://lothian-memory.glitch.me"},{title:"Elon's Ears",imgURL:"http://www.fillmurray.com/310/287",description:"This is my body description of the experience. You should totally click this to experience WebXR for yourself.",link:"https://lothian-memory.glitch.me"},{title:"Carol's Card",imgURL:"http://www.fillmurray.com/300/280",description:"This is my body description of the experience. You should totally click this to experience WebXR for yourself.",link:"https://lothian-memory.glitch.me"},{title:"Wayne's Wand",imgURL:"http://www.fillmurray.com/300/298",description:"This is my body description of the experience. You should totally click this to experience WebXR for yourself.",link:"https://lothian-memory.glitch.me"},{title:"Becky's Brick",imgURL:"http://www.fillmurray.com/300/292",description:"This is my body description of the experience. You should totally click this to experience WebXR for yourself.",link:"https://lothian-memory.glitch.me"},{title:"Sixth Sense",imgURL:"http://www.fillmurray.com/300/290",description:"This is my body description of the experience. You should totally click this to experience WebXR for yourself.",link:"https://lothian-memory.glitch.me"}]);function L(){var n=Object(s.a)(["\n    // position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    width: 1052px;\n"]);return L=function(){return n},n}var C=a.a.div(L());function U(n){return Object(i.jsx)(C,{children:Object(i.jsx)("div",{class:"cardgrid",children:R.map((function(n){return Object(i.jsx)("a",{href:n.link,children:Object(i.jsxs)("div",{class:"item",children:[" ",Object(i.jsx)(k,{cardInfo:n})," "]})})}))})})}var W=t(14),E=t(15),A=t(17),B=t(16),F=(t(25),t(4)),I=function(n){Object(A.a)(t,n);var e=Object(B.a)(t);function t(){return Object(W.a)(this,t),e.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return Object(i.jsxs)(F.Scene,{embedded:!0,children:[Object(i.jsx)(F.Entity,{geometry:{primitive:"box"},material:{color:"red"},position:{x:0,y:0,z:-5}}),Object(i.jsx)(F.Entity,{light:{type:"point"}}),Object(i.jsx)(F.Entity,{primative:"a-sky",src:"https://d3i9te5634opuo.cloudfront.net/riva-sky.JPG"}),Object(i.jsx)(F.Entity,{text:{value:"Hello, WebVR!"}})]})}}]),t}(o.a.Component);var T=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)(I,{})}),Object(i.jsx)("body",{children:Object(i.jsx)("div",{children:Object(i.jsx)(U,{})})})]})};l.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root"))},7:function(n,e,t){}},[[27,1,2]]]);
//# sourceMappingURL=main.5c89b0eb.chunk.js.map