(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_reactProject_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_odd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_light_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),_light_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_light_css__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),Light=function Light(_ref){var a1=_ref.a1,b1=_ref.b1,c1=_ref.c1,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(D_reactProject_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),tex=_useState2[0],setTex=_useState2[1],handleClick=function(_){setTex(tex.concat(_))},backspace=function(){setTex(tex.slice(0,tex.length-1))},cleared=function(){setTex("")},calculate=function calculate(){try{setTex(eval(tex).toString())}catch(error){setTex("Error")}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"app",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:"Calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:a1?"container":b1?" containerD":"containerG",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{cols:"22",type:"text",readOnly:!0,dir:"ltr",rows:"1",value:tex,className:a1?"tArea":b1?"tAreaD":"tAreaG"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"otherBtn",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"ta",onClick:backspace,children:"Del"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"ta",onClick:cleared,children:"AC"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:a1||b1?"inner":"innerG",children:_odd__WEBPACK_IMPORTED_MODULE_1__.a.map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:_.extra?"pbtn":_.its?"blc":a1?"btn":b1?"dbtn":"gbtn",onClick:_.its?function(){return calculate()}:function(){return handleClick(_.val)},children:_.val})}))})]})]})})};__webpack_exports__.a=Light},function(_,e,t){"use strict";t.d(e,"a",(function(){return a}));var a=[{id:7,val:"7"},{id:8,val:"8"},{id:9,val:"9"},{id:10,val:"+",extra:!0},{id:4,val:"4"},{id:5,val:"5"},{id:6,val:"6"},{id:11,val:"-",extra:!0},{id:1,val:"1"},{id:2,val:"2"},{id:3,val:"3"},{id:12,val:"*",extra:!0},{id:13,val:"."},{id:14,val:"0"},{id:15,val:"=",its:!0},{id:16,val:"/",extra:!0}]},,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var a=t(1),c=t(4),r=t.n(c),n=(t(11),t(2)),s=t(5),i=t(0),l=function(){var _=Object(a.useState)(1),e=Object(n.a)(_,2),t=e[0],c=e[1],r=Object(a.useState)(0),l=Object(n.a)(r,2),u=l[0],O=l[1],E=Object(a.useState)(0),b=Object(n.a)(E,2),d=b[0],o=b[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"modes",children:[Object(i.jsx)("button",{className:"mbtn1",name:"light",onClick:function(){c(1),O(0),o(0)},children:"Light "}),Object(i.jsx)("button",{className:"mbtn2",name:"dark",onClick:function(){c(0),O(1),o(0)},children:"Dark "}),Object(i.jsx)("button",{className:"mbtn3",name:"glass",onClick:function(){c(0),O(0),o(1)},children:"Glass "})]})}),Object(i.jsx)(s.a,{a1:t,b1:u,c1:d})]})},u=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(l,{})})};r.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.81073948.chunk.js.map