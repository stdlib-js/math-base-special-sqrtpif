// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,f="function"==typeof r?r.toStringTag:"",l=o&&"symbol"==typeof Symbol.toStringTag?function(t){var o,r,l,u,i;if(null==t)return n.call(t);r=t[f],i=f,o=null!=(u=t)&&e.call(u,i);try{t[f]=void 0}catch(o){return n.call(t)}return l=n.call(t),o?t[f]=r:delete t[f],l}:function(t){return n.call(t)},u="function"==typeof Float32Array,i=Number.POSITIVE_INFINITY,a="function"==typeof Float32Array?Float32Array:null,y="function"==typeof Float32Array?Float32Array:void 0,c=new(function(){var t,o,n;if("function"!=typeof a)return!1;try{o=new a([1,3.14,-3.14,5e40]),n=o,t=(u&&n instanceof Float32Array||"[object Float32Array]"===l(n))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===i}catch(o){t=!1}return t}()?y:function(){throw new Error("not implemented")})(1),p="function"==typeof t?t:function(t){return c[0]=t,c[0]},d=Math.sqrt,b=p(3.141592653589793);return function(t){return function(t){return p(d(p(t)))}(p(p(t)*b))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).sqrtpif=o();
//# sourceMappingURL=browser.js.map
