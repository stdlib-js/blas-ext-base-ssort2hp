"use strict";var R=function(h,j){return function(){return j||h((j={exports:{}}).exports,j),j.exports}};var O=R(function(W,E){
var _=require('@stdlib/math-base-assert-is-positive-zerof/dist'),f=require('@stdlib/math-base-assert-is-nanf/dist'),H=require('@stdlib/math-base-special-floor/dist');function I(h,j,r,v,u,l){var e,q,c,i,a,k,o,w,m,b,p,n,P;if(h<=0||j===0)return r;for(j<0&&(v*=-1,l*=-1),v<0?e=(1-h)*v:e=0,l<0?q=(1-h)*l:q=0,p=h,c=H(h/2);;){if(c>0)c-=1,o=r[e+c*v],w=u[q+c*l];else{if(p-=1,p===0)return r;m=e+p*v,o=r[m],b=q+p*l,w=u[b],r[m]=r[e],u[b]=u[q]}for(n=c,i=n*2+1;i<p&&(P=i+1,P<p&&(a=r[e+P*v],k=r[e+i*v],(a>k||f(a)||a===k&&_(a))&&(i+=1)),a=r[e+i*v],a>o||f(a)||a===o&&_(a));)r[e+n*v]=a,u[q+n*l]=u[q+i*l],n=i,i=n*2+1;r[e+n*v]=o,u[q+n*l]=w}}E.exports=I
});var B=R(function($,A){
var g=require('@stdlib/math-base-assert-is-positive-zerof/dist'),z=require('@stdlib/math-base-assert-is-nanf/dist'),J=require('@stdlib/math-base-special-floor/dist');function K(h,j,r,v,u,l,e,q){var c,i,a,k,o,w,m,b,p,n,P;if(h<=0||j===0)return r;for(j<0&&(v*=-1,e*=-1,u-=(h-1)*v,q-=(h-1)*e),p=h,c=J(h/2);;){if(c>0)c-=1,o=r[u+c*v],w=l[q+c*e];else{if(p-=1,p===0)return r;m=u+p*v,o=r[m],b=q+p*e,w=l[b],r[m]=r[u],l[b]=l[q]}for(n=c,i=n*2+1;i<p&&(P=i+1,P<p&&(a=r[u+P*v],k=r[u+i*v],(a>k||z(a)||a===k&&g(a))&&(i+=1)),a=r[u+i*v],a>o||z(a)||a===o&&g(a));)r[u+n*v]=a,l[q+n*e]=l[q+i*e],n=i,i=n*2+1;r[u+n*v]=o,l[q+n*e]=w}}A.exports=K
});var F=R(function(y,D){
var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=O(),M=B();L(C,"ndarray",M);D.exports=C
});var Q=require("path").join,S=require('@stdlib/utils-try-require/dist'),T=require('@stdlib/assert-is-error/dist'),U=F(),Z,G=S(Q(__dirname,"./native.js"));T(G)?Z=U:Z=G;module.exports=Z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
