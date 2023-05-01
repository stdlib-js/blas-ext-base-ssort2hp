// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var u,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(l.call(r,t)||f.call(r,t)?(u=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=u):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var u=t;var c="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var y=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var v,b="function"==typeof Symbol?Symbol.toStringTag:"";v=c&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,a;if(null==r)return y.call(r);e=r[b],a=b,t=null!=(o=r)&&p.call(o,a);try{r[b]=void 0}catch(t){return y.call(r)}return n=y.call(r),t?r[b]=e:delete r[b],n}:function(r){return y.call(r)};var _=v,d="function"==typeof Float32Array;var m=Number.POSITIVE_INFINITY,s="function"==typeof Float32Array?Float32Array:null;var w,A="function"==typeof Float32Array?Float32Array:void 0;w=function(){var r,t,e;if("function"!=typeof s)return!1;try{t=new s([1,3.14,-3.14,5e40]),e=t,r=(d&&e instanceof Float32Array||"[object Float32Array]"===_(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===m}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var j=w,g="function"==typeof Uint32Array;var h="function"==typeof Uint32Array?Uint32Array:null;var S,F="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var r,t,e;if("function"!=typeof h)return!1;try{t=new h(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(g&&e instanceof Uint32Array||"[object Uint32Array]"===_(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var O=S,U=new j(1);new O(U.buffer)[0]=2139095040;var E=U[0];function P(r){return 0===r&&1/r===E}function T(r){return r!=r}var I=Math.floor;function N(r,t,e,n,o,a){var i,l,f,u,c,y,p,v,b,_,d,m,s;if(r<=0||0===t)return e;for(t<0&&(n*=-1,a*=-1),i=n<0?(1-r)*n:0,l=a<0?(1-r)*a:0,d=r,f=I(r/2);;){if(f>0)p=e[i+(f-=1)*n],v=o[l+f*a];else{if(0===(d-=1))return e;p=e[b=i+d*n],v=o[_=l+d*a],e[b]=e[i],o[_]=o[l]}for(u=2*(m=f)+1;u<d&&((s=u+1)<d&&((c=e[i+s*n])>(y=e[i+u*n])||T(c)||c===y&&P(c))&&(u+=1),(c=e[i+u*n])>p||T(c)||c===p&&P(c));)e[i+m*n]=c,o[l+m*a]=o[l+u*a],u=2*(m=u)+1;e[i+m*n]=p,o[l+m*a]=v}}function V(r,t,e,n,o,a,i,l){var f,u,c,y,p,v,b,_,d,m,s;if(r<=0||0===t)return e;for(t<0&&(o-=(r-1)*(n*=-1),l-=(r-1)*(i*=-1)),d=r,f=I(r/2);;){if(f>0)p=e[o+(f-=1)*n],v=a[l+f*i];else{if(0===(d-=1))return e;p=e[b=o+d*n],v=a[_=l+d*i],e[b]=e[o],a[_]=a[l]}for(u=2*(m=f)+1;u<d&&((s=u+1)<d&&((c=e[o+s*n])>(y=e[o+u*n])||T(c)||c===y&&P(c))&&(u+=1),(c=e[o+u*n])>p||T(c)||c===p&&P(c));)e[o+m*n]=c,a[l+m*i]=a[l+u*i],u=2*(m=u)+1;e[o+m*n]=p,a[l+m*i]=v}}u(N,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:V});export{N as default,V as ndarray};
//# sourceMappingURL=mod.js.map
