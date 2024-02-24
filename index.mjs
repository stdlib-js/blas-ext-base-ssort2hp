// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zerof@v0.1.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";function i(e,i,n,o,a,d){var f,m,l,p,j,h,v,u,b,c,x,g,y;if(e<=0||0===i)return n;for(i<0&&(o*=-1,d*=-1),f=o<0?(1-e)*o:0,m=d<0?(1-e)*d:0,x=e,l=t(e/2);;){if(l>0)v=n[f+(l-=1)*o],u=a[m+l*d];else{if(0===(x-=1))return n;v=n[b=f+x*o],u=a[c=m+x*d],n[b]=n[f],a[c]=a[m]}for(p=2*(g=l)+1;p<x&&((y=p+1)<x&&((j=n[f+y*o])>(h=n[f+p*o])||r(j)||j===h&&s(j))&&(p+=1),(j=n[f+p*o])>v||r(j)||j===v&&s(j));)n[f+g*o]=j,a[m+g*d]=a[m+p*d],p=2*(g=p)+1;n[f+g*o]=v,a[m+g*d]=u}}function n(e,i,n,o,a,d,f,m){var l,p,j,h,v,u,b,c,x,g,y;if(e<=0||0===i)return n;for(i<0&&(a-=(e-1)*(o*=-1),m-=(e-1)*(f*=-1)),x=e,l=t(e/2);;){if(l>0)v=n[a+(l-=1)*o],u=d[m+l*f];else{if(0===(x-=1))return n;v=n[b=a+x*o],u=d[c=m+x*f],n[b]=n[a],d[c]=d[m]}for(p=2*(g=l)+1;p<x&&((y=p+1)<x&&((j=n[a+y*o])>(h=n[a+p*o])||r(j)||j===h&&s(j))&&(p+=1),(j=n[a+p*o])>v||r(j)||j===v&&s(j));)n[a+g*o]=j,d[m+g*f]=d[m+p*f],p=2*(g=p)+1;n[a+g*o]=v,d[m+g*f]=u}}e(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
