// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.fround?Math.fround:null;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,e="function"==typeof a?a.toStringTag:"";var l=r&&"symbol"==typeof Symbol.toStringTag?function(t){var r,a,l,f,u;if(null==t)return o.call(t);a=t[e],u=e,r=null!=(f=t)&&n.call(f,u);try{t[e]=void 0}catch(r){return o.call(t)}return l=o.call(t),r?t[e]=a:delete t[e],l}:function(t){return o.call(t)},f="function"==typeof Float32Array;var u=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null;var c="function"==typeof Float32Array?Float32Array:void 0;var i=new(function(){var t,r,o;if("function"!=typeof y)return!1;try{r=new y([1,3.14,-3.14,5e40]),o=r,t=(f&&o instanceof Float32Array||"[object Float32Array]"===l(o))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===u}catch(r){t=!1}return t}()?c:function(){throw new Error("not implemented")})(1);var p="function"==typeof t?t:function(t){return i[0]=t,i[0]},v=Math.sqrt;var b=p(3.141592653589793);function m(t){return function(t){return p(v(p(t)))}(p(p(t)*b))}export{m as default};
//# sourceMappingURL=mod.js.map
