(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Nu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wT={exports:{}},yh={},ET={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=Symbol.for("react.element"),y1=Symbol.for("react.portal"),v1=Symbol.for("react.fragment"),w1=Symbol.for("react.strict_mode"),E1=Symbol.for("react.profiler"),I1=Symbol.for("react.provider"),T1=Symbol.for("react.context"),S1=Symbol.for("react.forward_ref"),R1=Symbol.for("react.suspense"),A1=Symbol.for("react.memo"),P1=Symbol.for("react.lazy"),nw=Symbol.iterator;function k1(t){return t===null||typeof t!="object"?null:(t=nw&&t[nw]||t["@@iterator"],typeof t=="function"?t:null)}var IT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},TT=Object.assign,ST={};function ya(t,e,n){this.props=t,this.context=e,this.refs=ST,this.updater=n||IT}ya.prototype.isReactComponent={};ya.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ya.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function RT(){}RT.prototype=ya.prototype;function Sg(t,e,n){this.props=t,this.context=e,this.refs=ST,this.updater=n||IT}var Rg=Sg.prototype=new RT;Rg.constructor=Sg;TT(Rg,ya.prototype);Rg.isPureReactComponent=!0;var rw=Array.isArray,AT=Object.prototype.hasOwnProperty,Ag={current:null},PT={key:!0,ref:!0,__self:!0,__source:!0};function kT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)AT.call(e,r)&&!PT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Du,type:t,key:s,ref:o,props:i,_owner:Ag.current}}function C1(t,e){return{$$typeof:Du,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Du}function b1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var iw=/\/+/g;function $f(t,e){return typeof t=="object"&&t!==null&&t.key!=null?b1(""+t.key):e.toString(36)}function Jc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Du:case y1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$f(o,0):r,rw(i)?(n="",t!=null&&(n=t.replace(iw,"$&/")+"/"),Jc(i,e,n,"",function(c){return c})):i!=null&&(Pg(i)&&(i=C1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(iw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$f(s,a);o+=Jc(s,e,n,l,i)}else if(l=k1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$f(s,a++),o+=Jc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Tc(t,e,n){if(t==null)return t;var r=[],i=0;return Jc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function x1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Zc={transition:null},N1={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Zc,ReactCurrentOwner:Ag};function CT(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Tc,forEach:function(t,e,n){Tc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tc(t,function(){e++}),e},toArray:function(t){return Tc(t,function(e){return e})||[]},only:function(t){if(!Pg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=ya;oe.Fragment=v1;oe.Profiler=E1;oe.PureComponent=Sg;oe.StrictMode=w1;oe.Suspense=R1;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N1;oe.act=CT;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=TT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ag.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)AT.call(e,l)&&!PT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Du,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:T1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:I1,_context:t},t.Consumer=t};oe.createElement=kT;oe.createFactory=function(t){var e=kT.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:S1,render:t}};oe.isValidElement=Pg;oe.lazy=function(t){return{$$typeof:P1,_payload:{_status:-1,_result:t},_init:x1}};oe.memo=function(t,e){return{$$typeof:A1,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Zc.transition;Zc.transition={};try{t()}finally{Zc.transition=e}};oe.unstable_act=CT;oe.useCallback=function(t,e){return $t.current.useCallback(t,e)};oe.useContext=function(t){return $t.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};oe.useEffect=function(t,e){return $t.current.useEffect(t,e)};oe.useId=function(){return $t.current.useId()};oe.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return $t.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};oe.useRef=function(t){return $t.current.useRef(t)};oe.useState=function(t){return $t.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return $t.current.useTransition()};oe.version="18.3.1";ET.exports=oe;var O=ET.exports;const oi=Nu(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1=O,O1=Symbol.for("react.element"),V1=Symbol.for("react.fragment"),L1=Object.prototype.hasOwnProperty,M1=D1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F1={key:!0,ref:!0,__self:!0,__source:!0};function bT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)L1.call(e,r)&&!F1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:O1,type:t,key:s,ref:o,props:i,_owner:M1.current}}yh.Fragment=V1;yh.jsx=bT;yh.jsxs=bT;wT.exports=yh;var k=wT.exports,Fp={},xT={exports:{}},gn={},NT={exports:{}},DT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,Z){var te=q.length;q.push(Z);e:for(;0<te;){var me=te-1>>>1,ue=q[me];if(0<i(ue,Z))q[me]=Z,q[te]=ue,te=me;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Z=q[0],te=q.pop();if(te!==Z){q[0]=te;e:for(var me=0,ue=q.length,fe=ue>>>1;me<fe;){var ot=2*(me+1)-1,Nt=q[ot],rn=ot+1,Gt=q[rn];if(0>i(Nt,te))rn<ue&&0>i(Gt,Nt)?(q[me]=Gt,q[rn]=te,me=rn):(q[me]=Nt,q[ot]=te,me=ot);else if(rn<ue&&0>i(Gt,te))q[me]=Gt,q[rn]=te,me=rn;else break e}}return Z}function i(q,Z){var te=q.sortIndex-Z.sortIndex;return te!==0?te:q.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,m=3,y=!1,R=!1,A=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(q){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=q)r(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function N(q){if(A=!1,I(q),!R)if(n(l)!==null)R=!0,Wt(F);else{var Z=n(c);Z!==null&&It(N,Z.startTime-q)}}function F(q,Z){R=!1,A&&(A=!1,w(_),_=-1),y=!0;var te=m;try{for(I(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||q&&!C());){var me=f.callback;if(typeof me=="function"){f.callback=null,m=f.priorityLevel;var ue=me(f.expirationTime<=Z);Z=t.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(l)&&r(l),I(Z)}else r(l);f=n(l)}if(f!==null)var fe=!0;else{var ot=n(c);ot!==null&&It(N,ot.startTime-Z),fe=!1}return fe}finally{f=null,m=te,y=!1}}var U=!1,E=null,_=-1,T=5,S=-1;function C(){return!(t.unstable_now()-S<T)}function x(){if(E!==null){var q=t.unstable_now();S=q;var Z=!0;try{Z=E(!0,q)}finally{Z?P():(U=!1,E=null)}}else U=!1}var P;if(typeof v=="function")P=function(){v(x)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,xn=je.port2;je.port1.onmessage=x,P=function(){xn.postMessage(null)}}else P=function(){b(x,0)};function Wt(q){E=q,U||(U=!0,P())}function It(q,Z){_=b(function(){q(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){R||y||(R=!0,Wt(F))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var te=m;m=Z;try{return q()}finally{m=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,Z){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var te=m;m=q;try{return Z()}finally{m=te}},t.unstable_scheduleCallback=function(q,Z,te){var me=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?me+te:me):te=me,q){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=te+ue,q={id:d++,callback:Z,priorityLevel:q,startTime:te,expirationTime:ue,sortIndex:-1},te>me?(q.sortIndex=te,e(c,q),n(l)===null&&q===n(c)&&(A?(w(_),_=-1):A=!0,It(N,te-me))):(q.sortIndex=ue,e(l,q),R||y||(R=!0,Wt(F))),q},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(q){var Z=m;return function(){var te=m;m=Z;try{return q.apply(this,arguments)}finally{m=te}}}})(DT);NT.exports=DT;var U1=NT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1=O,pn=U1;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var OT=new Set,Ql={};function Bs(t,e){Wo(t,e),Wo(t+"Capture",e)}function Wo(t,e){for(Ql[t]=e,t=0;t<e.length;t++)OT.add(e[t])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Up=Object.prototype.hasOwnProperty,B1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sw={},ow={};function z1(t){return Up.call(ow,t)?!0:Up.call(sw,t)?!1:B1.test(t)?ow[t]=!0:(sw[t]=!0,!1)}function $1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q1(t,e,n,r){if(e===null||typeof e>"u"||$1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var kg=/[\-:]([a-z])/g;function Cg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kg,Cg);Et[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kg,Cg);Et[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kg,Cg);Et[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function bg(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q1(e,n,i,r)&&(n=null),r||i===null?z1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mr=j1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sc=Symbol.for("react.element"),yo=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),xg=Symbol.for("react.strict_mode"),jp=Symbol.for("react.profiler"),VT=Symbol.for("react.provider"),LT=Symbol.for("react.context"),Ng=Symbol.for("react.forward_ref"),Bp=Symbol.for("react.suspense"),zp=Symbol.for("react.suspense_list"),Dg=Symbol.for("react.memo"),Zr=Symbol.for("react.lazy"),MT=Symbol.for("react.offscreen"),aw=Symbol.iterator;function el(t){return t===null||typeof t!="object"?null:(t=aw&&t[aw]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,qf;function yl(t){if(qf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qf=e&&e[1]||""}return`
`+qf+t}var Wf=!1;function Gf(t,e){if(!t||Wf)return"";Wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yl(t):""}function W1(t){switch(t.tag){case 5:return yl(t.type);case 16:return yl("Lazy");case 13:return yl("Suspense");case 19:return yl("SuspenseList");case 0:case 2:case 15:return t=Gf(t.type,!1),t;case 11:return t=Gf(t.type.render,!1),t;case 1:return t=Gf(t.type,!0),t;default:return""}}function $p(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vo:return"Fragment";case yo:return"Portal";case jp:return"Profiler";case xg:return"StrictMode";case Bp:return"Suspense";case zp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case LT:return(t.displayName||"Context")+".Consumer";case VT:return(t._context.displayName||"Context")+".Provider";case Ng:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dg:return e=t.displayName||null,e!==null?e:$p(t.type)||"Memo";case Zr:e=t._payload,t=t._init;try{return $p(t(e))}catch{}}return null}function G1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $p(e);case 8:return e===xg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function FT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H1(t){var e=FT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Rc(t){t._valueTracker||(t._valueTracker=H1(t))}function UT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=FT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Td(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qp(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jT(t,e){e=e.checked,e!=null&&bg(t,"checked",e,!1)}function Wp(t,e){jT(t,e);var n=Ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gp(t,e.type,Ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gp(t,e,n){(e!=="number"||Td(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vl=Array.isArray;function No(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ei(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(vl(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ei(n)}}function BT(t,e){var n=Ei(e.value),r=Ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ac,$T=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ac=Ac||document.createElement("div"),Ac.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ac.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K1=["Webkit","ms","Moz","O"];Object.keys(Cl).forEach(function(t){K1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cl[e]=Cl[t]})});function qT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cl.hasOwnProperty(t)&&Cl[t]?(""+e).trim():e+"px"}function WT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Q1=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qp(t,e){if(e){if(Q1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Yp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xp=null;function Og(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jp=null,Do=null,Oo=null;function hw(t){if(t=Lu(t)){if(typeof Jp!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Th(e),Jp(t.stateNode,t.type,e))}}function GT(t){Do?Oo?Oo.push(t):Oo=[t]:Do=t}function HT(){if(Do){var t=Do,e=Oo;if(Oo=Do=null,hw(t),e)for(t=0;t<e.length;t++)hw(e[t])}}function KT(t,e){return t(e)}function QT(){}var Hf=!1;function YT(t,e,n){if(Hf)return t(e,n);Hf=!0;try{return KT(t,e,n)}finally{Hf=!1,(Do!==null||Oo!==null)&&(QT(),HT())}}function Xl(t,e){var n=t.stateNode;if(n===null)return null;var r=Th(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Zp=!1;if(kr)try{var tl={};Object.defineProperty(tl,"passive",{get:function(){Zp=!0}}),window.addEventListener("test",tl,tl),window.removeEventListener("test",tl,tl)}catch{Zp=!1}function Y1(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var bl=!1,Sd=null,Rd=!1,em=null,X1={onError:function(t){bl=!0,Sd=t}};function J1(t,e,n,r,i,s,o,a,l){bl=!1,Sd=null,Y1.apply(X1,arguments)}function Z1(t,e,n,r,i,s,o,a,l){if(J1.apply(this,arguments),bl){if(bl){var c=Sd;bl=!1,Sd=null}else throw Error(z(198));Rd||(Rd=!0,em=c)}}function zs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function XT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fw(t){if(zs(t)!==t)throw Error(z(188))}function eb(t){var e=t.alternate;if(!e){if(e=zs(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fw(i),t;if(s===r)return fw(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function JT(t){return t=eb(t),t!==null?ZT(t):null}function ZT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ZT(t);if(e!==null)return e;t=t.sibling}return null}var e0=pn.unstable_scheduleCallback,pw=pn.unstable_cancelCallback,tb=pn.unstable_shouldYield,nb=pn.unstable_requestPaint,Ye=pn.unstable_now,rb=pn.unstable_getCurrentPriorityLevel,Vg=pn.unstable_ImmediatePriority,t0=pn.unstable_UserBlockingPriority,Ad=pn.unstable_NormalPriority,ib=pn.unstable_LowPriority,n0=pn.unstable_IdlePriority,vh=null,rr=null;function sb(t){if(rr&&typeof rr.onCommitFiberRoot=="function")try{rr.onCommitFiberRoot(vh,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:lb,ob=Math.log,ab=Math.LN2;function lb(t){return t>>>=0,t===0?32:31-(ob(t)/ab|0)|0}var Pc=64,kc=4194304;function wl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=wl(a):(s&=o,s!==0&&(r=wl(s)))}else o=n&~i,o!==0?r=wl(o):s!==0&&(r=wl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Un(e),i=1<<n,r|=t[n],e&=~i;return r}function ub(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=ub(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function r0(){var t=Pc;return Pc<<=1,!(Pc&4194240)&&(Pc=64),t}function Kf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ou(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function db(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function i0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var s0,Mg,o0,a0,l0,nm=!1,Cc=[],di=null,hi=null,fi=null,Jl=new Map,Zl=new Map,ni=[],hb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mw(t,e){switch(t){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":fi=null;break;case"pointerover":case"pointerout":Jl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(e.pointerId)}}function nl(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Lu(e),e!==null&&Mg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function fb(t,e,n,r,i){switch(e){case"focusin":return di=nl(di,t,e,n,r,i),!0;case"dragenter":return hi=nl(hi,t,e,n,r,i),!0;case"mouseover":return fi=nl(fi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Jl.set(s,nl(Jl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zl.set(s,nl(Zl.get(s)||null,t,e,n,r,i)),!0}return!1}function u0(t){var e=us(t.target);if(e!==null){var n=zs(e);if(n!==null){if(e=n.tag,e===13){if(e=XT(n),e!==null){t.blockedOn=e,l0(t.priority,function(){o0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ed(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xp=r,n.target.dispatchEvent(r),Xp=null}else return e=Lu(n),e!==null&&Mg(e),t.blockedOn=n,!1;e.shift()}return!0}function gw(t,e,n){ed(t)&&n.delete(e)}function pb(){nm=!1,di!==null&&ed(di)&&(di=null),hi!==null&&ed(hi)&&(hi=null),fi!==null&&ed(fi)&&(fi=null),Jl.forEach(gw),Zl.forEach(gw)}function rl(t,e){t.blockedOn===e&&(t.blockedOn=null,nm||(nm=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,pb)))}function eu(t){function e(i){return rl(i,t)}if(0<Cc.length){rl(Cc[0],t);for(var n=1;n<Cc.length;n++){var r=Cc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(di!==null&&rl(di,t),hi!==null&&rl(hi,t),fi!==null&&rl(fi,t),Jl.forEach(e),Zl.forEach(e),n=0;n<ni.length;n++)r=ni[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ni.length&&(n=ni[0],n.blockedOn===null);)u0(n),n.blockedOn===null&&ni.shift()}var Vo=Mr.ReactCurrentBatchConfig,kd=!0;function mb(t,e,n,r){var i=ye,s=Vo.transition;Vo.transition=null;try{ye=1,Fg(t,e,n,r)}finally{ye=i,Vo.transition=s}}function gb(t,e,n,r){var i=ye,s=Vo.transition;Vo.transition=null;try{ye=4,Fg(t,e,n,r)}finally{ye=i,Vo.transition=s}}function Fg(t,e,n,r){if(kd){var i=rm(t,e,n,r);if(i===null)ip(t,e,r,Cd,n),mw(t,r);else if(fb(i,t,e,n,r))r.stopPropagation();else if(mw(t,r),e&4&&-1<hb.indexOf(t)){for(;i!==null;){var s=Lu(i);if(s!==null&&s0(s),s=rm(t,e,n,r),s===null&&ip(t,e,r,Cd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ip(t,e,r,null,n)}}var Cd=null;function rm(t,e,n,r){if(Cd=null,t=Og(r),t=us(t),t!==null)if(e=zs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=XT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cd=t,null}function c0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rb()){case Vg:return 1;case t0:return 4;case Ad:case ib:return 16;case n0:return 536870912;default:return 16}default:return 16}}var ai=null,Ug=null,td=null;function d0(){if(td)return td;var t,e=Ug,n=e.length,r,i="value"in ai?ai.value:ai.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return td=i.slice(t,1<r?1-r:void 0)}function nd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bc(){return!0}function _w(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bc:_w,this.isPropagationStopped=_w,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bc)},persist:function(){},isPersistent:bc}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jg=_n(va),Vu=Me({},va,{view:0,detail:0}),_b=_n(Vu),Qf,Yf,il,wh=Me({},Vu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==il&&(il&&t.type==="mousemove"?(Qf=t.screenX-il.screenX,Yf=t.screenY-il.screenY):Yf=Qf=0,il=t),Qf)},movementY:function(t){return"movementY"in t?t.movementY:Yf}}),yw=_n(wh),yb=Me({},wh,{dataTransfer:0}),vb=_n(yb),wb=Me({},Vu,{relatedTarget:0}),Xf=_n(wb),Eb=Me({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),Ib=_n(Eb),Tb=Me({},va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sb=_n(Tb),Rb=Me({},va,{data:0}),vw=_n(Rb),Ab={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kb[t])?!!e[t]:!1}function Bg(){return Cb}var bb=Me({},Vu,{key:function(t){if(t.key){var e=Ab[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bg,charCode:function(t){return t.type==="keypress"?nd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xb=_n(bb),Nb=Me({},wh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ww=_n(Nb),Db=Me({},Vu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bg}),Ob=_n(Db),Vb=Me({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lb=_n(Vb),Mb=Me({},wh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fb=_n(Mb),Ub=[9,13,27,32],zg=kr&&"CompositionEvent"in window,xl=null;kr&&"documentMode"in document&&(xl=document.documentMode);var jb=kr&&"TextEvent"in window&&!xl,h0=kr&&(!zg||xl&&8<xl&&11>=xl),Ew=" ",Iw=!1;function f0(t,e){switch(t){case"keyup":return Ub.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wo=!1;function Bb(t,e){switch(t){case"compositionend":return p0(e);case"keypress":return e.which!==32?null:(Iw=!0,Ew);case"textInput":return t=e.data,t===Ew&&Iw?null:t;default:return null}}function zb(t,e){if(wo)return t==="compositionend"||!zg&&f0(t,e)?(t=d0(),td=Ug=ai=null,wo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return h0&&e.locale!=="ko"?null:e.data;default:return null}}var $b={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$b[t.type]:e==="textarea"}function m0(t,e,n,r){GT(r),e=bd(e,"onChange"),0<e.length&&(n=new jg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Nl=null,tu=null;function qb(t){A0(t,0)}function Eh(t){var e=To(t);if(UT(e))return t}function Wb(t,e){if(t==="change")return e}var g0=!1;if(kr){var Jf;if(kr){var Zf="oninput"in document;if(!Zf){var Sw=document.createElement("div");Sw.setAttribute("oninput","return;"),Zf=typeof Sw.oninput=="function"}Jf=Zf}else Jf=!1;g0=Jf&&(!document.documentMode||9<document.documentMode)}function Rw(){Nl&&(Nl.detachEvent("onpropertychange",_0),tu=Nl=null)}function _0(t){if(t.propertyName==="value"&&Eh(tu)){var e=[];m0(e,tu,t,Og(t)),YT(qb,e)}}function Gb(t,e,n){t==="focusin"?(Rw(),Nl=e,tu=n,Nl.attachEvent("onpropertychange",_0)):t==="focusout"&&Rw()}function Hb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eh(tu)}function Kb(t,e){if(t==="click")return Eh(e)}function Qb(t,e){if(t==="input"||t==="change")return Eh(e)}function Yb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:Yb;function nu(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Up.call(e,i)||!Bn(t[i],e[i]))return!1}return!0}function Aw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pw(t,e){var n=Aw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Aw(n)}}function y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v0(){for(var t=window,e=Td();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Td(t.document)}return e}function $g(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xb(t){var e=v0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&y0(n.ownerDocument.documentElement,n)){if(r!==null&&$g(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pw(n,s);var o=Pw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jb=kr&&"documentMode"in document&&11>=document.documentMode,Eo=null,im=null,Dl=null,sm=!1;function kw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sm||Eo==null||Eo!==Td(r)||(r=Eo,"selectionStart"in r&&$g(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dl&&nu(Dl,r)||(Dl=r,r=bd(im,"onSelect"),0<r.length&&(e=new jg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Eo)))}function xc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Io={animationend:xc("Animation","AnimationEnd"),animationiteration:xc("Animation","AnimationIteration"),animationstart:xc("Animation","AnimationStart"),transitionend:xc("Transition","TransitionEnd")},ep={},w0={};kr&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete Io.animationend.animation,delete Io.animationiteration.animation,delete Io.animationstart.animation),"TransitionEvent"in window||delete Io.transitionend.transition);function Ih(t){if(ep[t])return ep[t];if(!Io[t])return t;var e=Io[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w0)return ep[t]=e[n];return t}var E0=Ih("animationend"),I0=Ih("animationiteration"),T0=Ih("animationstart"),S0=Ih("transitionend"),R0=new Map,Cw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Oi(t,e){R0.set(t,e),Bs(e,[t])}for(var tp=0;tp<Cw.length;tp++){var np=Cw[tp],Zb=np.toLowerCase(),ex=np[0].toUpperCase()+np.slice(1);Oi(Zb,"on"+ex)}Oi(E0,"onAnimationEnd");Oi(I0,"onAnimationIteration");Oi(T0,"onAnimationStart");Oi("dblclick","onDoubleClick");Oi("focusin","onFocus");Oi("focusout","onBlur");Oi(S0,"onTransitionEnd");Wo("onMouseEnter",["mouseout","mouseover"]);Wo("onMouseLeave",["mouseout","mouseover"]);Wo("onPointerEnter",["pointerout","pointerover"]);Wo("onPointerLeave",["pointerout","pointerover"]);Bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(El));function bw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Z1(r,e,void 0,t),t.currentTarget=null}function A0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;bw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;bw(i,a,c),s=l}}}if(Rd)throw t=em,Rd=!1,em=null,t}function Re(t,e){var n=e[cm];n===void 0&&(n=e[cm]=new Set);var r=t+"__bubble";n.has(r)||(P0(e,t,2,!1),n.add(r))}function rp(t,e,n){var r=0;e&&(r|=4),P0(n,t,r,e)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function ru(t){if(!t[Nc]){t[Nc]=!0,OT.forEach(function(n){n!=="selectionchange"&&(tx.has(n)||rp(n,!1,t),rp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nc]||(e[Nc]=!0,rp("selectionchange",!1,e))}}function P0(t,e,n,r){switch(c0(e)){case 1:var i=mb;break;case 4:i=gb;break;default:i=Fg}n=i.bind(null,e,n,t),i=void 0,!Zp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ip(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=us(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}YT(function(){var c=s,d=Og(n),f=[];e:{var m=R0.get(t);if(m!==void 0){var y=jg,R=t;switch(t){case"keypress":if(nd(n)===0)break e;case"keydown":case"keyup":y=xb;break;case"focusin":R="focus",y=Xf;break;case"focusout":R="blur",y=Xf;break;case"beforeblur":case"afterblur":y=Xf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=yw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=vb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ob;break;case E0:case I0:case T0:y=Ib;break;case S0:y=Lb;break;case"scroll":y=_b;break;case"wheel":y=Fb;break;case"copy":case"cut":case"paste":y=Sb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ww}var A=(e&4)!==0,b=!A&&t==="scroll",w=A?m!==null?m+"Capture":null:m;A=[];for(var v=c,I;v!==null;){I=v;var N=I.stateNode;if(I.tag===5&&N!==null&&(I=N,w!==null&&(N=Xl(v,w),N!=null&&A.push(iu(v,N,I)))),b)break;v=v.return}0<A.length&&(m=new y(m,R,null,n,d),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Xp&&(R=n.relatedTarget||n.fromElement)&&(us(R)||R[Cr]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(R=n.relatedTarget||n.toElement,y=c,R=R?us(R):null,R!==null&&(b=zs(R),R!==b||R.tag!==5&&R.tag!==6)&&(R=null)):(y=null,R=c),y!==R)){if(A=yw,N="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=ww,N="onPointerLeave",w="onPointerEnter",v="pointer"),b=y==null?m:To(y),I=R==null?m:To(R),m=new A(N,v+"leave",y,n,d),m.target=b,m.relatedTarget=I,N=null,us(d)===c&&(A=new A(w,v+"enter",R,n,d),A.target=I,A.relatedTarget=b,N=A),b=N,y&&R)t:{for(A=y,w=R,v=0,I=A;I;I=no(I))v++;for(I=0,N=w;N;N=no(N))I++;for(;0<v-I;)A=no(A),v--;for(;0<I-v;)w=no(w),I--;for(;v--;){if(A===w||w!==null&&A===w.alternate)break t;A=no(A),w=no(w)}A=null}else A=null;y!==null&&xw(f,m,y,A,!1),R!==null&&b!==null&&xw(f,b,R,A,!0)}}e:{if(m=c?To(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var F=Wb;else if(Tw(m))if(g0)F=Qb;else{F=Hb;var U=Gb}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=Kb);if(F&&(F=F(t,c))){m0(f,F,n,d);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Gp(m,"number",m.value)}switch(U=c?To(c):window,t){case"focusin":(Tw(U)||U.contentEditable==="true")&&(Eo=U,im=c,Dl=null);break;case"focusout":Dl=im=Eo=null;break;case"mousedown":sm=!0;break;case"contextmenu":case"mouseup":case"dragend":sm=!1,kw(f,n,d);break;case"selectionchange":if(Jb)break;case"keydown":case"keyup":kw(f,n,d)}var E;if(zg)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else wo?f0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(h0&&n.locale!=="ko"&&(wo||_!=="onCompositionStart"?_==="onCompositionEnd"&&wo&&(E=d0()):(ai=d,Ug="value"in ai?ai.value:ai.textContent,wo=!0)),U=bd(c,_),0<U.length&&(_=new vw(_,t,null,n,d),f.push({event:_,listeners:U}),E?_.data=E:(E=p0(n),E!==null&&(_.data=E)))),(E=jb?Bb(t,n):zb(t,n))&&(c=bd(c,"onBeforeInput"),0<c.length&&(d=new vw("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}A0(f,e)})}function iu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xl(t,n),s!=null&&r.unshift(iu(t,s,i)),s=Xl(t,e),s!=null&&r.push(iu(t,s,i))),t=t.return}return r}function no(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Xl(n,s),l!=null&&o.unshift(iu(n,l,a))):i||(l=Xl(n,s),l!=null&&o.push(iu(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nx=/\r\n?/g,rx=/\u0000|\uFFFD/g;function Nw(t){return(typeof t=="string"?t:""+t).replace(nx,`
`).replace(rx,"")}function Dc(t,e,n){if(e=Nw(e),Nw(t)!==e&&n)throw Error(z(425))}function xd(){}var om=null,am=null;function lm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var um=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,Dw=typeof Promise=="function"?Promise:void 0,sx=typeof queueMicrotask=="function"?queueMicrotask:typeof Dw<"u"?function(t){return Dw.resolve(null).then(t).catch(ox)}:um;function ox(t){setTimeout(function(){throw t})}function sp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),eu(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);eu(e)}function pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ow(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wa=Math.random().toString(36).slice(2),Kn="__reactFiber$"+wa,su="__reactProps$"+wa,Cr="__reactContainer$"+wa,cm="__reactEvents$"+wa,ax="__reactListeners$"+wa,lx="__reactHandles$"+wa;function us(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cr]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ow(t);t!==null;){if(n=t[Kn])return n;t=Ow(t)}return e}t=n,n=t.parentNode}return null}function Lu(t){return t=t[Kn]||t[Cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function To(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Th(t){return t[su]||null}var dm=[],So=-1;function Vi(t){return{current:t}}function Pe(t){0>So||(t.current=dm[So],dm[So]=null,So--)}function Ie(t,e){So++,dm[So]=t.current,t.current=e}var Ii={},xt=Vi(Ii),en=Vi(!1),Is=Ii;function Go(t,e){var n=t.type.contextTypes;if(!n)return Ii;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tn(t){return t=t.childContextTypes,t!=null}function Nd(){Pe(en),Pe(xt)}function Vw(t,e,n){if(xt.current!==Ii)throw Error(z(168));Ie(xt,e),Ie(en,n)}function k0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,G1(t)||"Unknown",i));return Me({},n,r)}function Dd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ii,Is=xt.current,Ie(xt,t),Ie(en,en.current),!0}function Lw(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=k0(t,e,Is),r.__reactInternalMemoizedMergedChildContext=t,Pe(en),Pe(xt),Ie(xt,t)):Pe(en),Ie(en,n)}var _r=null,Sh=!1,op=!1;function C0(t){_r===null?_r=[t]:_r.push(t)}function ux(t){Sh=!0,C0(t)}function Li(){if(!op&&_r!==null){op=!0;var t=0,e=ye;try{var n=_r;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_r=null,Sh=!1}catch(i){throw _r!==null&&(_r=_r.slice(t+1)),e0(Vg,Li),i}finally{ye=e,op=!1}}return null}var Ro=[],Ao=0,Od=null,Vd=0,vn=[],wn=0,Ts=null,yr=1,vr="";function Ji(t,e){Ro[Ao++]=Vd,Ro[Ao++]=Od,Od=t,Vd=e}function b0(t,e,n){vn[wn++]=yr,vn[wn++]=vr,vn[wn++]=Ts,Ts=t;var r=yr;t=vr;var i=32-Un(r)-1;r&=~(1<<i),n+=1;var s=32-Un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yr=1<<32-Un(e)+i|n<<i|r,vr=s+t}else yr=1<<s|n<<i|r,vr=t}function qg(t){t.return!==null&&(Ji(t,1),b0(t,1,0))}function Wg(t){for(;t===Od;)Od=Ro[--Ao],Ro[Ao]=null,Vd=Ro[--Ao],Ro[Ao]=null;for(;t===Ts;)Ts=vn[--wn],vn[wn]=null,vr=vn[--wn],vn[wn]=null,yr=vn[--wn],vn[wn]=null}var hn=null,cn=null,Ce=!1,Mn=null;function x0(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,cn=pi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ts!==null?{id:yr,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,cn=null,!0):!1;default:return!1}}function hm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fm(t){if(Ce){var e=cn;if(e){var n=e;if(!Mw(t,e)){if(hm(t))throw Error(z(418));e=pi(n.nextSibling);var r=hn;e&&Mw(t,e)?x0(r,n):(t.flags=t.flags&-4097|2,Ce=!1,hn=t)}}else{if(hm(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ce=!1,hn=t}}}function Fw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Oc(t){if(t!==hn)return!1;if(!Ce)return Fw(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lm(t.type,t.memoizedProps)),e&&(e=cn)){if(hm(t))throw N0(),Error(z(418));for(;e;)x0(t,e),e=pi(e.nextSibling)}if(Fw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=pi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=hn?pi(t.stateNode.nextSibling):null;return!0}function N0(){for(var t=cn;t;)t=pi(t.nextSibling)}function Ho(){cn=hn=null,Ce=!1}function Gg(t){Mn===null?Mn=[t]:Mn.push(t)}var cx=Mr.ReactCurrentBatchConfig;function sl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Vc(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Uw(t){var e=t._init;return e(t._payload)}function D0(t){function e(w,v){if(t){var I=w.deletions;I===null?(w.deletions=[v],w.flags|=16):I.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=yi(w,v),w.index=0,w.sibling=null,w}function s(w,v,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<v?(w.flags|=2,v):I):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,v,I,N){return v===null||v.tag!==6?(v=fp(I,w.mode,N),v.return=w,v):(v=i(v,I),v.return=w,v)}function l(w,v,I,N){var F=I.type;return F===vo?d(w,v,I.props.children,N,I.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Zr&&Uw(F)===v.type)?(N=i(v,I.props),N.ref=sl(w,v,I),N.return=w,N):(N=ud(I.type,I.key,I.props,null,w.mode,N),N.ref=sl(w,v,I),N.return=w,N)}function c(w,v,I,N){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=pp(I,w.mode,N),v.return=w,v):(v=i(v,I.children||[]),v.return=w,v)}function d(w,v,I,N,F){return v===null||v.tag!==7?(v=gs(I,w.mode,N,F),v.return=w,v):(v=i(v,I),v.return=w,v)}function f(w,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fp(""+v,w.mode,I),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sc:return I=ud(v.type,v.key,v.props,null,w.mode,I),I.ref=sl(w,null,v),I.return=w,I;case yo:return v=pp(v,w.mode,I),v.return=w,v;case Zr:var N=v._init;return f(w,N(v._payload),I)}if(vl(v)||el(v))return v=gs(v,w.mode,I,null),v.return=w,v;Vc(w,v)}return null}function m(w,v,I,N){var F=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:a(w,v,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Sc:return I.key===F?l(w,v,I,N):null;case yo:return I.key===F?c(w,v,I,N):null;case Zr:return F=I._init,m(w,v,F(I._payload),N)}if(vl(I)||el(I))return F!==null?null:d(w,v,I,N,null);Vc(w,I)}return null}function y(w,v,I,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return w=w.get(I)||null,a(v,w,""+N,F);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Sc:return w=w.get(N.key===null?I:N.key)||null,l(v,w,N,F);case yo:return w=w.get(N.key===null?I:N.key)||null,c(v,w,N,F);case Zr:var U=N._init;return y(w,v,I,U(N._payload),F)}if(vl(N)||el(N))return w=w.get(I)||null,d(v,w,N,F,null);Vc(v,N)}return null}function R(w,v,I,N){for(var F=null,U=null,E=v,_=v=0,T=null;E!==null&&_<I.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var S=m(w,E,I[_],N);if(S===null){E===null&&(E=T);break}t&&E&&S.alternate===null&&e(w,E),v=s(S,v,_),U===null?F=S:U.sibling=S,U=S,E=T}if(_===I.length)return n(w,E),Ce&&Ji(w,_),F;if(E===null){for(;_<I.length;_++)E=f(w,I[_],N),E!==null&&(v=s(E,v,_),U===null?F=E:U.sibling=E,U=E);return Ce&&Ji(w,_),F}for(E=r(w,E);_<I.length;_++)T=y(E,w,_,I[_],N),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),v=s(T,v,_),U===null?F=T:U.sibling=T,U=T);return t&&E.forEach(function(C){return e(w,C)}),Ce&&Ji(w,_),F}function A(w,v,I,N){var F=el(I);if(typeof F!="function")throw Error(z(150));if(I=F.call(I),I==null)throw Error(z(151));for(var U=F=null,E=v,_=v=0,T=null,S=I.next();E!==null&&!S.done;_++,S=I.next()){E.index>_?(T=E,E=null):T=E.sibling;var C=m(w,E,S.value,N);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(w,E),v=s(C,v,_),U===null?F=C:U.sibling=C,U=C,E=T}if(S.done)return n(w,E),Ce&&Ji(w,_),F;if(E===null){for(;!S.done;_++,S=I.next())S=f(w,S.value,N),S!==null&&(v=s(S,v,_),U===null?F=S:U.sibling=S,U=S);return Ce&&Ji(w,_),F}for(E=r(w,E);!S.done;_++,S=I.next())S=y(E,w,_,S.value,N),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?_:S.key),v=s(S,v,_),U===null?F=S:U.sibling=S,U=S);return t&&E.forEach(function(x){return e(w,x)}),Ce&&Ji(w,_),F}function b(w,v,I,N){if(typeof I=="object"&&I!==null&&I.type===vo&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Sc:e:{for(var F=I.key,U=v;U!==null;){if(U.key===F){if(F=I.type,F===vo){if(U.tag===7){n(w,U.sibling),v=i(U,I.props.children),v.return=w,w=v;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Zr&&Uw(F)===U.type){n(w,U.sibling),v=i(U,I.props),v.ref=sl(w,U,I),v.return=w,w=v;break e}n(w,U);break}else e(w,U);U=U.sibling}I.type===vo?(v=gs(I.props.children,w.mode,N,I.key),v.return=w,w=v):(N=ud(I.type,I.key,I.props,null,w.mode,N),N.ref=sl(w,v,I),N.return=w,w=N)}return o(w);case yo:e:{for(U=I.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(w,v.sibling),v=i(v,I.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=pp(I,w.mode,N),v.return=w,w=v}return o(w);case Zr:return U=I._init,b(w,v,U(I._payload),N)}if(vl(I))return R(w,v,I,N);if(el(I))return A(w,v,I,N);Vc(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,I),v.return=w,w=v):(n(w,v),v=fp(I,w.mode,N),v.return=w,w=v),o(w)):n(w,v)}return b}var Ko=D0(!0),O0=D0(!1),Ld=Vi(null),Md=null,Po=null,Hg=null;function Kg(){Hg=Po=Md=null}function Qg(t){var e=Ld.current;Pe(Ld),t._currentValue=e}function pm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Lo(t,e){Md=t,Hg=Po=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Hg!==t)if(t={context:t,memoizedValue:e,next:null},Po===null){if(Md===null)throw Error(z(308));Po=t,Md.dependencies={lanes:0,firstContext:t}}else Po=Po.next=t;return e}var cs=null;function Yg(t){cs===null?cs=[t]:cs.push(t)}function V0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Yg(e)):(n.next=i.next,i.next=n),e.interleaved=n,br(t,r)}function br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ei=!1;function Xg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,br(t,n)}return i=r.interleaved,i===null?(e.next=e,Yg(r)):(e.next=i.next,i.next=e),r.interleaved=e,br(t,n)}function rd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lg(t,n)}}function jw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fd(t,e,n,r){var i=t.updateQueue;ei=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=t,A=a;switch(m=e,y=n,A.tag){case 1:if(R=A.payload,typeof R=="function"){f=R.call(y,f,m);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=A.payload,m=typeof R=="function"?R.call(y,f,m):R,m==null)break e;f=Me({},f,m);break e;case 2:ei=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,l=f):d=d.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Rs|=o,t.lanes=o,t.memoizedState=f}}function Bw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Mu={},ir=Vi(Mu),ou=Vi(Mu),au=Vi(Mu);function ds(t){if(t===Mu)throw Error(z(174));return t}function Jg(t,e){switch(Ie(au,e),Ie(ou,t),Ie(ir,Mu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kp(e,t)}Pe(ir),Ie(ir,e)}function Qo(){Pe(ir),Pe(ou),Pe(au)}function M0(t){ds(au.current);var e=ds(ir.current),n=Kp(e,t.type);e!==n&&(Ie(ou,t),Ie(ir,n))}function Zg(t){ou.current===t&&(Pe(ir),Pe(ou))}var Oe=Vi(0);function Ud(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ap=[];function e_(){for(var t=0;t<ap.length;t++)ap[t]._workInProgressVersionPrimary=null;ap.length=0}var id=Mr.ReactCurrentDispatcher,lp=Mr.ReactCurrentBatchConfig,Ss=0,Ve=null,nt=null,lt=null,jd=!1,Ol=!1,lu=0,dx=0;function Rt(){throw Error(z(321))}function t_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function n_(t,e,n,r,i,s){if(Ss=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,id.current=t===null||t.memoizedState===null?mx:gx,t=n(r,i),Ol){s=0;do{if(Ol=!1,lu=0,25<=s)throw Error(z(301));s+=1,lt=nt=null,e.updateQueue=null,id.current=_x,t=n(r,i)}while(Ol)}if(id.current=Bd,e=nt!==null&&nt.next!==null,Ss=0,lt=nt=Ve=null,jd=!1,e)throw Error(z(300));return t}function r_(){var t=lu!==0;return lu=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Ve.memoizedState=lt=t:lt=lt.next=t,lt}function kn(){if(nt===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=lt===null?Ve.memoizedState:lt.next;if(e!==null)lt=e,nt=t;else{if(t===null)throw Error(z(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},lt===null?Ve.memoizedState=lt=t:lt=lt.next=t}return lt}function uu(t,e){return typeof e=="function"?e(t):e}function up(t){var e=kn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=nt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ss&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ve.lanes|=d,Rs|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Bn(r,e.memoizedState)||(Yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,Rs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cp(t){var e=kn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bn(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function F0(){}function U0(t,e){var n=Ve,r=kn(),i=e(),s=!Bn(r.memoizedState,i);if(s&&(r.memoizedState=i,Yt=!0),r=r.queue,i_(z0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,cu(9,B0.bind(null,n,r,i,e),void 0,null),ct===null)throw Error(z(349));Ss&30||j0(n,e,i)}return i}function j0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B0(t,e,n,r){e.value=n,e.getSnapshot=r,$0(e)&&q0(t)}function z0(t,e,n){return n(function(){$0(e)&&q0(t)})}function $0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function q0(t){var e=br(t,1);e!==null&&jn(e,t,1,-1)}function zw(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uu,lastRenderedState:t},e.queue=t,t=t.dispatch=px.bind(null,Ve,t),[e.memoizedState,t]}function cu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function W0(){return kn().memoizedState}function sd(t,e,n,r){var i=Hn();Ve.flags|=t,i.memoizedState=cu(1|e,n,void 0,r===void 0?null:r)}function Rh(t,e,n,r){var i=kn();r=r===void 0?null:r;var s=void 0;if(nt!==null){var o=nt.memoizedState;if(s=o.destroy,r!==null&&t_(r,o.deps)){i.memoizedState=cu(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=cu(1|e,n,s,r)}function $w(t,e){return sd(8390656,8,t,e)}function i_(t,e){return Rh(2048,8,t,e)}function G0(t,e){return Rh(4,2,t,e)}function H0(t,e){return Rh(4,4,t,e)}function K0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Q0(t,e,n){return n=n!=null?n.concat([t]):null,Rh(4,4,K0.bind(null,e,t),n)}function s_(){}function Y0(t,e){var n=kn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&t_(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function X0(t,e){var n=kn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&t_(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function J0(t,e,n){return Ss&21?(Bn(n,e)||(n=r0(),Ve.lanes|=n,Rs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function hx(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=lp.transition;lp.transition={};try{t(!1),e()}finally{ye=n,lp.transition=r}}function Z0(){return kn().memoizedState}function fx(t,e,n){var r=_i(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eS(t))tS(e,n);else if(n=V0(t,e,n,r),n!==null){var i=Ut();jn(n,t,r,i),nS(n,e,r)}}function px(t,e,n){var r=_i(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eS(t))tS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Bn(a,o)){var l=e.interleaved;l===null?(i.next=i,Yg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=V0(t,e,i,r),n!==null&&(i=Ut(),jn(n,t,r,i),nS(n,e,r))}}function eS(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function tS(t,e){Ol=jd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lg(t,n)}}var Bd={readContext:Pn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},mx={readContext:Pn,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:$w,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sd(4194308,4,K0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sd(4194308,4,t,e)},useInsertionEffect:function(t,e){return sd(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fx.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:zw,useDebugValue:s_,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=zw(!1),e=t[0];return t=hx.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=Hn();if(Ce){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),ct===null)throw Error(z(349));Ss&30||j0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$w(z0.bind(null,r,s,t),[t]),r.flags|=2048,cu(9,B0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=ct.identifierPrefix;if(Ce){var n=vr,r=yr;n=(r&~(1<<32-Un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=lu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gx={readContext:Pn,useCallback:Y0,useContext:Pn,useEffect:i_,useImperativeHandle:Q0,useInsertionEffect:G0,useLayoutEffect:H0,useMemo:X0,useReducer:up,useRef:W0,useState:function(){return up(uu)},useDebugValue:s_,useDeferredValue:function(t){var e=kn();return J0(e,nt.memoizedState,t)},useTransition:function(){var t=up(uu)[0],e=kn().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:U0,useId:Z0,unstable_isNewReconciler:!1},_x={readContext:Pn,useCallback:Y0,useContext:Pn,useEffect:i_,useImperativeHandle:Q0,useInsertionEffect:G0,useLayoutEffect:H0,useMemo:X0,useReducer:cp,useRef:W0,useState:function(){return cp(uu)},useDebugValue:s_,useDeferredValue:function(t){var e=kn();return nt===null?e.memoizedState=t:J0(e,nt.memoizedState,t)},useTransition:function(){var t=cp(uu)[0],e=kn().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:U0,useId:Z0,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ah={isMounted:function(t){return(t=t._reactInternals)?zs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=_i(t),s=Sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=mi(t,s,i),e!==null&&(jn(e,t,i,r),rd(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=_i(t),s=Sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mi(t,s,i),e!==null&&(jn(e,t,i,r),rd(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ut(),r=_i(t),i=Sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=mi(t,i,r),e!==null&&(jn(e,t,r,n),rd(e,t,r))}};function qw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!nu(n,r)||!nu(i,s):!0}function rS(t,e,n){var r=!1,i=Ii,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(i=tn(e)?Is:xt.current,r=e.contextTypes,s=(r=r!=null)?Go(t,i):Ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ah,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ww(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ah.enqueueReplaceState(e,e.state,null)}function gm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Xg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pn(s):(s=tn(e)?Is:xt.current,i.context=Go(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ah.enqueueReplaceState(i,i.state,null),Fd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Yo(t,e){try{var n="",r=e;do n+=W1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _m(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function iS(t,e,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$d||($d=!0,Pm=r),_m(t,e)},n}function sS(t,e,n){n=Sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_m(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_m(t,e),typeof r!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Nx.bind(null,t,e,n),e.then(t,t))}function Hw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sr(-1,1),e.tag=2,mi(n,e,1))),n.lanes|=1),t)}var vx=Mr.ReactCurrentOwner,Yt=!1;function Vt(t,e,n,r){e.child=t===null?O0(e,null,n,r):Ko(e,t.child,n,r)}function Qw(t,e,n,r,i){n=n.render;var s=e.ref;return Lo(e,i),r=n_(t,e,n,r,s,i),n=r_(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(Ce&&n&&qg(e),e.flags|=1,Vt(t,e,r,i),e.child)}function Yw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!f_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,oS(t,e,s,r,i)):(t=ud(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:nu,n(o,r)&&t.ref===e.ref)return xr(t,e,i)}return e.flags|=1,t=yi(s,r),t.ref=e.ref,t.return=e,e.child=t}function oS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(nu(s,r)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,xr(t,e,i)}return ym(t,e,n,r,i)}function aS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Co,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(Co,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(Co,an),an|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(Co,an),an|=r;return Vt(t,e,i,n),e.child}function lS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ym(t,e,n,r,i){var s=tn(n)?Is:xt.current;return s=Go(e,s),Lo(e,i),n=n_(t,e,n,r,s,i),r=r_(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(Ce&&r&&qg(e),e.flags|=1,Vt(t,e,n,i),e.child)}function Xw(t,e,n,r,i){if(tn(n)){var s=!0;Dd(e)}else s=!1;if(Lo(e,i),e.stateNode===null)od(t,e),rS(e,n,r),gm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=tn(n)?Is:xt.current,c=Go(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Ww(e,o,r,c),ei=!1;var m=e.memoizedState;o.state=m,Fd(e,r,o,i),l=e.memoizedState,a!==r||m!==l||en.current||ei?(typeof d=="function"&&(mm(e,n,d,r),l=e.memoizedState),(a=ei||qw(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,L0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=tn(n)?Is:xt.current,l=Go(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Ww(e,o,r,l),ei=!1,m=e.memoizedState,o.state=m,Fd(e,r,o,i);var R=e.memoizedState;a!==f||m!==R||en.current||ei?(typeof y=="function"&&(mm(e,n,y,r),R=e.memoizedState),(c=ei||qw(e,n,c,r,m,R,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return vm(t,e,n,r,s,i)}function vm(t,e,n,r,i,s){lS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lw(e,n,!1),xr(t,e,s);r=e.stateNode,vx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ko(e,t.child,null,s),e.child=Ko(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=r.state,i&&Lw(e,n,!0),e.child}function uS(t){var e=t.stateNode;e.pendingContext?Vw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vw(t,e.context,!1),Jg(t,e.containerInfo)}function Jw(t,e,n,r,i){return Ho(),Gg(i),e.flags|=256,Vt(t,e,n,r),e.child}var wm={dehydrated:null,treeContext:null,retryLane:0};function Em(t){return{baseLanes:t,cachePool:null,transitions:null}}function cS(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Oe,i&1),t===null)return fm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ch(o,r,0,null),t=gs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Em(n),e.memoizedState=wm,t):o_(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yi(a,s):(s=gs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Em(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wm,r}return s=t.child,t=s.sibling,r=yi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function o_(t,e){return e=Ch({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Lc(t,e,n,r){return r!==null&&Gg(r),Ko(e,t.child,null,n),t=o_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dp(Error(z(422))),Lc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ch({mode:"visible",children:r.children},i,0,null),s=gs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ko(e,t.child,null,o),e.child.memoizedState=Em(o),e.memoizedState=wm,s);if(!(e.mode&1))return Lc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=dp(s,r,void 0),Lc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Yt||a){if(r=ct,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,br(t,i),jn(r,t,i,-1))}return h_(),r=dp(Error(z(421))),Lc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Dx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,cn=pi(i.nextSibling),hn=e,Ce=!0,Mn=null,t!==null&&(vn[wn++]=yr,vn[wn++]=vr,vn[wn++]=Ts,yr=t.id,vr=t.overflow,Ts=e),e=o_(e,r.children),e.flags|=4096,e)}function Zw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pm(t.return,e,n)}function hp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Vt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zw(t,n,e);else if(t.tag===19)Zw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ud(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ud(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hp(e,!0,n,null,s);break;case"together":hp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function od(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ex(t,e,n){switch(e.tag){case 3:uS(e),Ho();break;case 5:M0(e);break;case 1:tn(e.type)&&Dd(e);break;case 4:Jg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(Ld,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?cS(t,e,n):(Ie(Oe,Oe.current&1),t=xr(t,e,n),t!==null?t.sibling:null);Ie(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,aS(t,e,n)}return xr(t,e,n)}var hS,Im,fS,pS;hS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Im=function(){};fS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ds(ir.current);var s=null;switch(n){case"input":i=qp(t,i),r=qp(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Hp(t,i),r=Hp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xd)}Qp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ql.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ql.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};pS=function(t,e,n,r){n!==r&&(e.flags|=4)};function ol(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ix(t,e,n){var r=e.pendingProps;switch(Wg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return tn(e.type)&&Nd(),At(e),null;case 3:return r=e.stateNode,Qo(),Pe(en),Pe(xt),e_(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Oc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(bm(Mn),Mn=null))),Im(t,e),At(e),null;case 5:Zg(e);var i=ds(au.current);if(n=e.type,t!==null&&e.stateNode!=null)fS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return At(e),null}if(t=ds(ir.current),Oc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kn]=e,r[su]=s,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<El.length;i++)Re(El[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":lw(r,s),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Re("invalid",r);break;case"textarea":cw(r,s),Re("invalid",r)}Qp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Dc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Dc(r.textContent,a,t),i=["children",""+a]):Ql.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":Rc(r),uw(r,s,!0);break;case"textarea":Rc(r),dw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kn]=e,t[su]=r,hS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yp(n,r),n){case"dialog":Re("cancel",t),Re("close",t),i=r;break;case"iframe":case"object":case"embed":Re("load",t),i=r;break;case"video":case"audio":for(i=0;i<El.length;i++)Re(El[i],t);i=r;break;case"source":Re("error",t),i=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),i=r;break;case"details":Re("toggle",t),i=r;break;case"input":lw(t,r),i=qp(t,r),Re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Re("invalid",t);break;case"textarea":cw(t,r),i=Hp(t,r),Re("invalid",t);break;default:i=r}Qp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?WT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$T(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yl(t,l):typeof l=="number"&&Yl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ql.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Re("scroll",t):l!=null&&bg(t,s,l,o))}switch(n){case"input":Rc(t),uw(t,r,!1);break;case"textarea":Rc(t),dw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ei(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?No(t,!!r.multiple,s,!1):r.defaultValue!=null&&No(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return At(e),null;case 6:if(t&&e.stateNode!=null)pS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=ds(au.current),ds(ir.current),Oc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kn]=e,(s=r.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Dc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kn]=e,e.stateNode=r}return At(e),null;case 13:if(Pe(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&cn!==null&&e.mode&1&&!(e.flags&128))N0(),Ho(),e.flags|=98560,s=!1;else if(s=Oc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Kn]=e}else Ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),s=!1}else Mn!==null&&(bm(Mn),Mn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?rt===0&&(rt=3):h_())),e.updateQueue!==null&&(e.flags|=4),At(e),null);case 4:return Qo(),Im(t,e),t===null&&ru(e.stateNode.containerInfo),At(e),null;case 10:return Qg(e.type._context),At(e),null;case 17:return tn(e.type)&&Nd(),At(e),null;case 19:if(Pe(Oe),s=e.memoizedState,s===null)return At(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ol(s,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ud(t),o!==null){for(e.flags|=128,ol(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ye()>Xo&&(e.flags|=128,r=!0,ol(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ud(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ol(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return At(e),null}else 2*Ye()-s.renderingStartTime>Xo&&n!==1073741824&&(e.flags|=128,r=!0,ol(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ye(),e.sibling=null,n=Oe.current,Ie(Oe,r?n&1|2:n&1),e):(At(e),null);case 22:case 23:return d_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?an&1073741824&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function Tx(t,e){switch(Wg(e),e.tag){case 1:return tn(e.type)&&Nd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qo(),Pe(en),Pe(xt),e_(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zg(e),null;case 13:if(Pe(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Oe),null;case 4:return Qo(),null;case 10:return Qg(e.type._context),null;case 22:case 23:return d_(),null;case 24:return null;default:return null}}var Mc=!1,kt=!1,Sx=typeof WeakSet=="function"?WeakSet:Set,Q=null;function ko(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(t,e,r)}else n.current=null}function Tm(t,e,n){try{n()}catch(r){$e(t,e,r)}}var eE=!1;function Rx(t,e){if(om=kd,t=v0(),$g(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(l=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(am={focusedElem:t,selectionRange:n},kd=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var A=R.memoizedProps,b=R.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?A:Vn(e.type,A),b);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(N){$e(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return R=eE,eE=!1,R}function Vl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tm(e,n,s)}i=i.next}while(i!==r)}}function Ph(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mS(t){var e=t.alternate;e!==null&&(t.alternate=null,mS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[su],delete e[cm],delete e[ax],delete e[lx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gS(t){return t.tag===5||t.tag===3||t.tag===4}function tE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xd));else if(r!==4&&(t=t.child,t!==null))for(Rm(t,e,n),t=t.sibling;t!==null;)Rm(t,e,n),t=t.sibling}function Am(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Am(t,e,n),t=t.sibling;t!==null;)Am(t,e,n),t=t.sibling}var _t=null,Ln=!1;function Qr(t,e,n){for(n=n.child;n!==null;)_S(t,e,n),n=n.sibling}function _S(t,e,n){if(rr&&typeof rr.onCommitFiberUnmount=="function")try{rr.onCommitFiberUnmount(vh,n)}catch{}switch(n.tag){case 5:kt||ko(n,e);case 6:var r=_t,i=Ln;_t=null,Qr(t,e,n),_t=r,Ln=i,_t!==null&&(Ln?(t=_t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_t.removeChild(n.stateNode));break;case 18:_t!==null&&(Ln?(t=_t,n=n.stateNode,t.nodeType===8?sp(t.parentNode,n):t.nodeType===1&&sp(t,n),eu(t)):sp(_t,n.stateNode));break;case 4:r=_t,i=Ln,_t=n.stateNode.containerInfo,Ln=!0,Qr(t,e,n),_t=r,Ln=i;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tm(n,e,o),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!kt&&(ko(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$e(n,e,a)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,Qr(t,e,n),kt=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function nE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sx),e.forEach(function(r){var i=Ox.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_t=a.stateNode,Ln=!1;break e;case 3:_t=a.stateNode.containerInfo,Ln=!0;break e;case 4:_t=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(_t===null)throw Error(z(160));_S(s,o,i),_t=null,Ln=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){$e(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yS(e,t),e=e.sibling}function yS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Gn(t),r&4){try{Vl(3,t,t.return),Ph(3,t)}catch(A){$e(t,t.return,A)}try{Vl(5,t,t.return)}catch(A){$e(t,t.return,A)}}break;case 1:On(e,t),Gn(t),r&512&&n!==null&&ko(n,n.return);break;case 5:if(On(e,t),Gn(t),r&512&&n!==null&&ko(n,n.return),t.flags&32){var i=t.stateNode;try{Yl(i,"")}catch(A){$e(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&jT(i,s),Yp(a,o);var c=Yp(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?WT(i,f):d==="dangerouslySetInnerHTML"?$T(i,f):d==="children"?Yl(i,f):bg(i,d,f,c)}switch(a){case"input":Wp(i,s);break;case"textarea":BT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?No(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?No(i,!!s.multiple,s.defaultValue,!0):No(i,!!s.multiple,s.multiple?[]:"",!1))}i[su]=s}catch(A){$e(t,t.return,A)}}break;case 6:if(On(e,t),Gn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){$e(t,t.return,A)}}break;case 3:if(On(e,t),Gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eu(e.containerInfo)}catch(A){$e(t,t.return,A)}break;case 4:On(e,t),Gn(t);break;case 13:On(e,t),Gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(u_=Ye())),r&4&&nE(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||d,On(e,t),kt=c):On(e,t),Gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Q=t,d=t.child;d!==null;){for(f=Q=d;Q!==null;){switch(m=Q,y=m.child,m.tag){case 0:case 11:case 14:case 15:Vl(4,m,m.return);break;case 1:ko(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(A){$e(r,n,A)}}break;case 5:ko(m,m.return);break;case 22:if(m.memoizedState!==null){iE(f);continue}}y!==null?(y.return=m,Q=y):iE(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qT("display",o))}catch(A){$e(t,t.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){$e(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:On(e,t),Gn(t),r&4&&nE(t);break;case 21:break;default:On(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gS(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yl(i,""),r.flags&=-33);var s=tE(t);Am(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=tE(t);Rm(t,a,o);break;default:throw Error(z(161))}}catch(l){$e(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ax(t,e,n){Q=t,vS(t)}function vS(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Mc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||kt;a=Mc;var c=kt;if(Mc=o,(kt=l)&&!c)for(Q=i;Q!==null;)o=Q,l=o.child,o.tag===22&&o.memoizedState!==null?sE(i):l!==null?(l.return=o,Q=l):sE(i);for(;s!==null;)Q=s,vS(s),s=s.sibling;Q=i,Mc=a,kt=c}rE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):rE(t)}}function rE(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||Ph(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!kt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&eu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}kt||e.flags&512&&Sm(e)}catch(m){$e(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function iE(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function sE(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ph(4,e)}catch(l){$e(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){$e(e,i,l)}}var s=e.return;try{Sm(e)}catch(l){$e(e,s,l)}break;case 5:var o=e.return;try{Sm(e)}catch(l){$e(e,o,l)}}}catch(l){$e(e,e.return,l)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var Px=Math.ceil,zd=Mr.ReactCurrentDispatcher,a_=Mr.ReactCurrentOwner,Rn=Mr.ReactCurrentBatchConfig,de=0,ct=null,tt=null,wt=0,an=0,Co=Vi(0),rt=0,du=null,Rs=0,kh=0,l_=0,Ll=null,Qt=null,u_=0,Xo=1/0,gr=null,$d=!1,Pm=null,gi=null,Fc=!1,li=null,qd=0,Ml=0,km=null,ad=-1,ld=0;function Ut(){return de&6?Ye():ad!==-1?ad:ad=Ye()}function _i(t){return t.mode&1?de&2&&wt!==0?wt&-wt:cx.transition!==null?(ld===0&&(ld=r0()),ld):(t=ye,t!==0||(t=window.event,t=t===void 0?16:c0(t.type)),t):1}function jn(t,e,n,r){if(50<Ml)throw Ml=0,km=null,Error(z(185));Ou(t,n,r),(!(de&2)||t!==ct)&&(t===ct&&(!(de&2)&&(kh|=n),rt===4&&ri(t,wt)),nn(t,r),n===1&&de===0&&!(e.mode&1)&&(Xo=Ye()+500,Sh&&Li()))}function nn(t,e){var n=t.callbackNode;cb(t,e);var r=Pd(t,t===ct?wt:0);if(r===0)n!==null&&pw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pw(n),e===1)t.tag===0?ux(oE.bind(null,t)):C0(oE.bind(null,t)),sx(function(){!(de&6)&&Li()}),n=null;else{switch(i0(r)){case 1:n=Vg;break;case 4:n=t0;break;case 16:n=Ad;break;case 536870912:n=n0;break;default:n=Ad}n=PS(n,wS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wS(t,e){if(ad=-1,ld=0,de&6)throw Error(z(327));var n=t.callbackNode;if(Mo()&&t.callbackNode!==n)return null;var r=Pd(t,t===ct?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wd(t,r);else{e=r;var i=de;de|=2;var s=IS();(ct!==t||wt!==e)&&(gr=null,Xo=Ye()+500,ms(t,e));do try{bx();break}catch(a){ES(t,a)}while(!0);Kg(),zd.current=s,de=i,tt!==null?e=0:(ct=null,wt=0,e=rt)}if(e!==0){if(e===2&&(i=tm(t),i!==0&&(r=i,e=Cm(t,i))),e===1)throw n=du,ms(t,0),ri(t,r),nn(t,Ye()),n;if(e===6)ri(t,r);else{if(i=t.current.alternate,!(r&30)&&!kx(i)&&(e=Wd(t,r),e===2&&(s=tm(t),s!==0&&(r=s,e=Cm(t,s))),e===1))throw n=du,ms(t,0),ri(t,r),nn(t,Ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Zi(t,Qt,gr);break;case 3:if(ri(t,r),(r&130023424)===r&&(e=u_+500-Ye(),10<e)){if(Pd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=um(Zi.bind(null,t,Qt,gr),e);break}Zi(t,Qt,gr);break;case 4:if(ri(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Px(r/1960))-r,10<r){t.timeoutHandle=um(Zi.bind(null,t,Qt,gr),r);break}Zi(t,Qt,gr);break;case 5:Zi(t,Qt,gr);break;default:throw Error(z(329))}}}return nn(t,Ye()),t.callbackNode===n?wS.bind(null,t):null}function Cm(t,e){var n=Ll;return t.current.memoizedState.isDehydrated&&(ms(t,e).flags|=256),t=Wd(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&bm(e)),t}function bm(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function kx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ri(t,e){for(e&=~l_,e&=~kh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),r=1<<n;t[n]=-1,e&=~r}}function oE(t){if(de&6)throw Error(z(327));Mo();var e=Pd(t,0);if(!(e&1))return nn(t,Ye()),null;var n=Wd(t,e);if(t.tag!==0&&n===2){var r=tm(t);r!==0&&(e=r,n=Cm(t,r))}if(n===1)throw n=du,ms(t,0),ri(t,e),nn(t,Ye()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zi(t,Qt,gr),nn(t,Ye()),null}function c_(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Xo=Ye()+500,Sh&&Li())}}function As(t){li!==null&&li.tag===0&&!(de&6)&&Mo();var e=de;de|=1;var n=Rn.transition,r=ye;try{if(Rn.transition=null,ye=1,t)return t()}finally{ye=r,Rn.transition=n,de=e,!(de&6)&&Li()}}function d_(){an=Co.current,Pe(Co)}function ms(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ix(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(Wg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nd();break;case 3:Qo(),Pe(en),Pe(xt),e_();break;case 5:Zg(r);break;case 4:Qo();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:Qg(r.type._context);break;case 22:case 23:d_()}n=n.return}if(ct=t,tt=t=yi(t.current,null),wt=an=e,rt=0,du=null,l_=kh=Rs=0,Qt=Ll=null,cs!==null){for(e=0;e<cs.length;e++)if(n=cs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}cs=null}return t}function ES(t,e){do{var n=tt;try{if(Kg(),id.current=Bd,jd){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jd=!1}if(Ss=0,lt=nt=Ve=null,Ol=!1,lu=0,a_.current=null,n===null||n.return===null){rt=1,du=e,tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Hw(o);if(y!==null){y.flags&=-257,Kw(y,o,a,s,e),y.mode&1&&Gw(s,c,e),e=y,l=c;var R=e.updateQueue;if(R===null){var A=new Set;A.add(l),e.updateQueue=A}else R.add(l);break e}else{if(!(e&1)){Gw(s,c,e),h_();break e}l=Error(z(426))}}else if(Ce&&a.mode&1){var b=Hw(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Kw(b,o,a,s,e),Gg(Yo(l,a));break e}}s=l=Yo(l,a),rt!==4&&(rt=2),Ll===null?Ll=[s]:Ll.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=iS(s,l,e);jw(s,w);break e;case 1:a=l;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(gi===null||!gi.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=sS(s,a,e);jw(s,N);break e}}s=s.return}while(s!==null)}SS(n)}catch(F){e=F,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function IS(){var t=zd.current;return zd.current=Bd,t===null?Bd:t}function h_(){(rt===0||rt===3||rt===2)&&(rt=4),ct===null||!(Rs&268435455)&&!(kh&268435455)||ri(ct,wt)}function Wd(t,e){var n=de;de|=2;var r=IS();(ct!==t||wt!==e)&&(gr=null,ms(t,e));do try{Cx();break}catch(i){ES(t,i)}while(!0);if(Kg(),de=n,zd.current=r,tt!==null)throw Error(z(261));return ct=null,wt=0,rt}function Cx(){for(;tt!==null;)TS(tt)}function bx(){for(;tt!==null&&!tb();)TS(tt)}function TS(t){var e=AS(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?SS(t):tt=e,a_.current=null}function SS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Tx(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,tt=null;return}}else if(n=Ix(n,e,an),n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);rt===0&&(rt=5)}function Zi(t,e,n){var r=ye,i=Rn.transition;try{Rn.transition=null,ye=1,xx(t,e,n,r)}finally{Rn.transition=i,ye=r}return null}function xx(t,e,n,r){do Mo();while(li!==null);if(de&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(db(t,s),t===ct&&(tt=ct=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fc||(Fc=!0,PS(Ad,function(){return Mo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=ye;ye=1;var a=de;de|=4,a_.current=null,Rx(t,n),yS(n,t),Xb(am),kd=!!om,am=om=null,t.current=n,Ax(n),nb(),de=a,ye=o,Rn.transition=s}else t.current=n;if(Fc&&(Fc=!1,li=t,qd=i),s=t.pendingLanes,s===0&&(gi=null),sb(n.stateNode),nn(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($d)throw $d=!1,t=Pm,Pm=null,t;return qd&1&&t.tag!==0&&Mo(),s=t.pendingLanes,s&1?t===km?Ml++:(Ml=0,km=t):Ml=0,Li(),null}function Mo(){if(li!==null){var t=i0(qd),e=Rn.transition,n=ye;try{if(Rn.transition=null,ye=16>t?16:t,li===null)var r=!1;else{if(t=li,li=null,qd=0,de&6)throw Error(z(331));var i=de;for(de|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Q=c;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:Vl(8,d,s)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var m=d.sibling,y=d.return;if(mS(d),d===c){Q=null;break}if(m!==null){m.return=y,Q=m;break}Q=y}}}var R=s.alternate;if(R!==null){var A=R.child;if(A!==null){R.child=null;do{var b=A.sibling;A.sibling=null,A=b}while(A!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vl(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,Q=w;break e}Q=s.return}}var v=t.current;for(Q=v;Q!==null;){o=Q;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,Q=I;else e:for(o=v;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ph(9,a)}}catch(F){$e(a,a.return,F)}if(a===o){Q=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,Q=N;break e}Q=a.return}}if(de=i,Li(),rr&&typeof rr.onPostCommitFiberRoot=="function")try{rr.onPostCommitFiberRoot(vh,t)}catch{}r=!0}return r}finally{ye=n,Rn.transition=e}}return!1}function aE(t,e,n){e=Yo(n,e),e=iS(t,e,1),t=mi(t,e,1),e=Ut(),t!==null&&(Ou(t,1,e),nn(t,e))}function $e(t,e,n){if(t.tag===3)aE(t,t,n);else for(;e!==null;){if(e.tag===3){aE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gi===null||!gi.has(r))){t=Yo(n,t),t=sS(e,t,1),e=mi(e,t,1),t=Ut(),e!==null&&(Ou(e,1,t),nn(e,t));break}}e=e.return}}function Nx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ut(),t.pingedLanes|=t.suspendedLanes&n,ct===t&&(wt&n)===n&&(rt===4||rt===3&&(wt&130023424)===wt&&500>Ye()-u_?ms(t,0):l_|=n),nn(t,e)}function RS(t,e){e===0&&(t.mode&1?(e=kc,kc<<=1,!(kc&130023424)&&(kc=4194304)):e=1);var n=Ut();t=br(t,e),t!==null&&(Ou(t,e,n),nn(t,n))}function Dx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),RS(t,n)}function Ox(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),RS(t,n)}var AS;AS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,Ex(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,Ce&&e.flags&1048576&&b0(e,Vd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;od(t,e),t=e.pendingProps;var i=Go(e,xt.current);Lo(e,n),i=n_(null,e,r,t,i,n);var s=r_();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(r)?(s=!0,Dd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xg(e),i.updater=Ah,e.stateNode=i,i._reactInternals=e,gm(e,r,t,n),e=vm(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&qg(e),Vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(od(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Lx(r),t=Vn(r,t),i){case 0:e=ym(null,e,r,t,n);break e;case 1:e=Xw(null,e,r,t,n);break e;case 11:e=Qw(null,e,r,t,n);break e;case 14:e=Yw(null,e,r,Vn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),ym(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Xw(t,e,r,i,n);case 3:e:{if(uS(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,L0(t,e),Fd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yo(Error(z(423)),e),e=Jw(t,e,r,n,i);break e}else if(r!==i){i=Yo(Error(z(424)),e),e=Jw(t,e,r,n,i);break e}else for(cn=pi(e.stateNode.containerInfo.firstChild),hn=e,Ce=!0,Mn=null,n=O0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ho(),r===i){e=xr(t,e,n);break e}Vt(t,e,r,n)}e=e.child}return e;case 5:return M0(e),t===null&&fm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lm(r,i)?o=null:s!==null&&lm(r,s)&&(e.flags|=32),lS(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&fm(e),null;case 13:return cS(t,e,n);case 4:return Jg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ko(e,null,r,n):Vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Qw(t,e,r,i,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(Ld,r._currentValue),r._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===i.children&&!en.current){e=xr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Sr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Lo(e,n),i=Pn(i),r=r(i),e.flags|=1,Vt(t,e,r,n),e.child;case 14:return r=e.type,i=Vn(r,e.pendingProps),i=Vn(r.type,i),Yw(t,e,r,i,n);case 15:return oS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),od(t,e),e.tag=1,tn(r)?(t=!0,Dd(e)):t=!1,Lo(e,n),rS(e,r,i),gm(e,r,i,n),vm(null,e,r,!0,t,n);case 19:return dS(t,e,n);case 22:return aS(t,e,n)}throw Error(z(156,e.tag))};function PS(t,e){return e0(t,e)}function Vx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new Vx(t,e,n,r)}function f_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lx(t){if(typeof t=="function")return f_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ng)return 11;if(t===Dg)return 14}return 2}function yi(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ud(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")f_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vo:return gs(n.children,i,s,e);case xg:o=8,i|=8;break;case jp:return t=In(12,n,e,i|2),t.elementType=jp,t.lanes=s,t;case Bp:return t=In(13,n,e,i),t.elementType=Bp,t.lanes=s,t;case zp:return t=In(19,n,e,i),t.elementType=zp,t.lanes=s,t;case MT:return Ch(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case VT:o=10;break e;case LT:o=9;break e;case Ng:o=11;break e;case Dg:o=14;break e;case Zr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=In(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function gs(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function Ch(t,e,n,r){return t=In(22,t,r,e),t.elementType=MT,t.lanes=n,t.stateNode={isHidden:!1},t}function fp(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function pp(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Mx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kf(0),this.expirationTimes=Kf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function p_(t,e,n,r,i,s,o,a,l){return t=new Mx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xg(s),t}function Fx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function kS(t){if(!t)return Ii;t=t._reactInternals;e:{if(zs(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(tn(n))return k0(t,n,e)}return e}function CS(t,e,n,r,i,s,o,a,l){return t=p_(n,r,!0,t,i,s,o,a,l),t.context=kS(null),n=t.current,r=Ut(),i=_i(n),s=Sr(r,i),s.callback=e??null,mi(n,s,i),t.current.lanes=i,Ou(t,i,r),nn(t,r),t}function bh(t,e,n,r){var i=e.current,s=Ut(),o=_i(i);return n=kS(n),e.context===null?e.context=n:e.pendingContext=n,e=Sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mi(i,e,o),t!==null&&(jn(t,i,o,s),rd(t,i,o)),o}function Gd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function m_(t,e){lE(t,e),(t=t.alternate)&&lE(t,e)}function Ux(){return null}var bS=typeof reportError=="function"?reportError:function(t){console.error(t)};function g_(t){this._internalRoot=t}xh.prototype.render=g_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));bh(t,e,null,null)};xh.prototype.unmount=g_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;As(function(){bh(null,t,null,null)}),e[Cr]=null}};function xh(t){this._internalRoot=t}xh.prototype.unstable_scheduleHydration=function(t){if(t){var e=a0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ni.length&&e!==0&&e<ni[n].priority;n++);ni.splice(n,0,t),n===0&&u0(t)}};function __(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uE(){}function jx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Gd(o);s.call(c)}}var o=CS(e,r,t,0,null,!1,!1,"",uE);return t._reactRootContainer=o,t[Cr]=o.current,ru(t.nodeType===8?t.parentNode:t),As(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Gd(l);a.call(c)}}var l=p_(t,0,!1,null,null,!1,!1,"",uE);return t._reactRootContainer=l,t[Cr]=l.current,ru(t.nodeType===8?t.parentNode:t),As(function(){bh(e,l,n,r)}),l}function Dh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Gd(o);a.call(l)}}bh(e,o,t,i)}else o=jx(n,e,t,i,r);return Gd(o)}s0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wl(e.pendingLanes);n!==0&&(Lg(e,n|1),nn(e,Ye()),!(de&6)&&(Xo=Ye()+500,Li()))}break;case 13:As(function(){var r=br(t,1);if(r!==null){var i=Ut();jn(r,t,1,i)}}),m_(t,1)}};Mg=function(t){if(t.tag===13){var e=br(t,134217728);if(e!==null){var n=Ut();jn(e,t,134217728,n)}m_(t,134217728)}};o0=function(t){if(t.tag===13){var e=_i(t),n=br(t,e);if(n!==null){var r=Ut();jn(n,t,e,r)}m_(t,e)}};a0=function(){return ye};l0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Jp=function(t,e,n){switch(e){case"input":if(Wp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Th(r);if(!i)throw Error(z(90));UT(r),Wp(r,i)}}}break;case"textarea":BT(t,n);break;case"select":e=n.value,e!=null&&No(t,!!n.multiple,e,!1)}};KT=c_;QT=As;var Bx={usingClientEntryPoint:!1,Events:[Lu,To,Th,GT,HT,c_]},al={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zx={bundleType:al.bundleType,version:al.version,rendererPackageName:al.rendererPackageName,rendererConfig:al.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=JT(t),t===null?null:t.stateNode},findFiberByHostInstance:al.findFiberByHostInstance||Ux,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{vh=Uc.inject(zx),rr=Uc}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!__(e))throw Error(z(200));return Fx(t,e,null,n)};gn.createRoot=function(t,e){if(!__(t))throw Error(z(299));var n=!1,r="",i=bS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=p_(t,1,!1,null,null,n,!1,r,i),t[Cr]=e.current,ru(t.nodeType===8?t.parentNode:t),new g_(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=JT(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return As(t)};gn.hydrate=function(t,e,n){if(!Nh(e))throw Error(z(200));return Dh(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!__(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=CS(e,null,t,1,n??null,i,!1,s,o),t[Cr]=e.current,ru(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xh(e)};gn.render=function(t,e,n){if(!Nh(e))throw Error(z(200));return Dh(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Nh(t))throw Error(z(40));return t._reactRootContainer?(As(function(){Dh(null,null,t,!1,function(){t._reactRootContainer=null,t[Cr]=null})}),!0):!1};gn.unstable_batchedUpdates=c_;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nh(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Dh(t,e,n,!1,r)};gn.version="18.3.1-next-f1338f8080-20240426";function xS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xS)}catch(t){console.error(t)}}xS(),xT.exports=gn;var NS=xT.exports;const bo=Nu(NS);var cE=NS;Fp.createRoot=cE.createRoot,Fp.hydrateRoot=cE.hydrateRoot;var DS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(DS);var $x=DS.exports;const ge=Nu($x);function xm(){return xm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xm.apply(null,arguments)}function OS(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function dE(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function qx(t){var e=Wx(t,"string");return typeof e=="symbol"?e:String(e)}function Wx(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function Gx(t,e,n){var r=O.useRef(t!==void 0),i=O.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,O.useCallback(function(c){for(var d=arguments.length,f=new Array(d>1?d-1:0),m=1;m<d;m++)f[m-1]=arguments[m];n&&n.apply(void 0,[c].concat(f)),o(c)},[n])]}function Hx(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[dE(r)],a=s[r],l=OS(s,[dE(r),r].map(qx)),c=e[r],d=Gx(a,o,t[c]),f=d[0],m=d[1];return xm({},l,(i={},i[r]=f,i[c]=m,i))},t)}function Nm(t,e){return Nm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Nm(t,e)}function Kx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Nm(t,e)}const Qx=["xxl","xl","lg","md","sm","xs"],Yx="xs",Oh=O.createContext({prefixes:{},breakpoints:Qx,minBreakpoint:Yx});function Fe(t,e){const{prefixes:n}=O.useContext(Oh);return t||n[e]||e}function VS(){const{breakpoints:t}=O.useContext(Oh);return t}function LS(){const{minBreakpoint:t}=O.useContext(Oh);return t}function Xx(){const{dir:t}=O.useContext(Oh);return t==="rtl"}function Vh(t){return t&&t.ownerDocument||document}function Jx(t){var e=Vh(t);return e&&e.defaultView||window}function Zx(t,e){return Jx(t).getComputedStyle(t,e)}var eN=/([A-Z])/g;function tN(t){return t.replace(eN,"-$1").toLowerCase()}var nN=/^ms-/;function jc(t){return tN(t).replace(nN,"-ms-")}var rN=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function iN(t){return!!(t&&rN.test(t))}function _s(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(jc(e))||Zx(t).getPropertyValue(jc(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(jc(i)):iN(i)?r+=i+"("+s+") ":n+=jc(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var MS={exports:{}},sN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",oN=sN,aN=oN;function FS(){}function US(){}US.resetWarningCache=FS;var lN=function(){function t(r,i,s,o,a,l){if(l!==aN){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:US,resetWarningCache:FS};return n.PropTypes=n,n};MS.exports=lN();var uN=MS.exports;const Rr=Nu(uN),hE={disabled:!1},jS=oi.createContext(null);var cN=function(e){return e.scrollTop},Il="unmounted",es="exited",ti="entering",rs="entered",Dm="exiting",Fr=function(t){Kx(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=es,s.appearStatus=ti):l=rs:r.unmountOnExit||r.mountOnEnter?l=Il:l=es,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Il?{status:es}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==ti&&o!==rs&&(s=ti):(o===ti||o===rs)&&(s=Dm)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===ti){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:bo.findDOMNode(this);o&&cN(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===es&&this.setState({status:Il})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[bo.findDOMNode(this),a],c=l[0],d=l[1],f=this.getTimeouts(),m=a?f.appear:f.enter;if(!i&&!o||hE.disabled){this.safeSetState({status:rs},function(){s.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:ti},function(){s.props.onEntering(c,d),s.onTransitionEnd(m,function(){s.safeSetState({status:rs},function(){s.props.onEntered(c,d)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:bo.findDOMNode(this);if(!s||hE.disabled){this.safeSetState({status:es},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Dm},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:es},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:bo.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=l[0],d=l[1];this.props.addEndListener(c,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Il)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=OS(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return oi.createElement(jS.Provider,{value:null},typeof o=="function"?o(i,a):oi.cloneElement(oi.Children.only(o),a))},e}(oi.Component);Fr.contextType=jS;Fr.propTypes={};function ro(){}Fr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ro,onEntering:ro,onEntered:ro,onExit:ro,onExiting:ro,onExited:ro};Fr.UNMOUNTED=Il;Fr.EXITED=es;Fr.ENTERING=ti;Fr.ENTERED=rs;Fr.EXITING=Dm;const Ea=!!(typeof window<"u"&&window.document&&window.document.createElement);var Om=!1,Vm=!1;try{var mp={get passive(){return Om=!0},get once(){return Vm=Om=!0}};Ea&&(window.addEventListener("test",mp,mp),window.removeEventListener("test",mp,!0))}catch{}function BS(t,e,n,r){if(r&&typeof r!="boolean"&&!Vm){var i=r.once,s=r.capture,o=n;!Vm&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,Om?r:s)}t.addEventListener(e,n,r)}function Lm(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Hd(t,e,n,r){return BS(t,e,n,r),function(){Lm(t,e,n,r)}}function dN(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function hN(t){var e=_s(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function fN(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||dN(t,"transitionend",!0)},e+n),s=Hd(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function zS(t,e,n,r){n==null&&(n=hN(t)||0);var i=fN(t,n,r),s=Hd(t,"transitionend",e);return function(){i(),s()}}function fE(t,e){const n=_s(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function pN(t,e){const n=fE(t,"transitionDuration"),r=fE(t,"transitionDelay"),i=zS(t,s=>{s.target===t&&(i(),e(s))},n+r)}function mN(t){t.offsetHeight}const pE=t=>!t||typeof t=="function"?t:e=>{t.current=e};function gN(t,e){const n=pE(t),r=pE(e);return i=>{n&&n(i),r&&r(i)}}function Fu(t,e){return O.useMemo(()=>gN(t,e),[t,e])}function _N(t){return t&&"setState"in t?bo.findDOMNode(t):t??null}const yN=oi.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...c},d)=>{const f=O.useRef(null),m=Fu(f,l),y=U=>{m(_N(U))},R=U=>E=>{U&&f.current&&U(f.current,E)},A=O.useCallback(R(t),[t]),b=O.useCallback(R(e),[e]),w=O.useCallback(R(n),[n]),v=O.useCallback(R(r),[r]),I=O.useCallback(R(i),[i]),N=O.useCallback(R(s),[s]),F=O.useCallback(R(o),[o]);return k.jsx(Fr,{ref:d,...c,onEnter:A,onEntered:w,onEntering:b,onExit:v,onExited:N,onExiting:I,addEndListener:F,nodeRef:f,children:typeof a=="function"?(U,E)=>a(U,{...E,ref:y}):oi.cloneElement(a,{ref:y})})});function vN(t){const e=O.useRef(t);return O.useEffect(()=>{e.current=t},[t]),e}function En(t){const e=vN(t);return O.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const $S=t=>O.forwardRef((e,n)=>k.jsx("div",{...e,ref:n,className:ge(e.className,t)})),qS=$S("h4");qS.displayName="DivStyledAsH4";const WS=O.forwardRef(({className:t,bsPrefix:e,as:n=qS,...r},i)=>(e=Fe(e,"alert-heading"),k.jsx(n,{ref:i,className:ge(t,e),...r})));WS.displayName="AlertHeading";function wN(){return O.useState(null)}function EN(){const t=O.useRef(!0),e=O.useRef(()=>t.current);return O.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function IN(t){const e=O.useRef(null);return O.useEffect(()=>{e.current=t}),e.current}const TN=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",SN=typeof document<"u",mE=SN||TN?O.useLayoutEffect:O.useEffect,RN=["as","disabled"];function AN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function PN(t){return!t||t.trim()==="#"}function y_({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},c];const d=m=>{if((e||t==="a"&&PN(n))&&m.preventDefault(),e){m.stopPropagation();return}o==null||o(m)},f=m=>{m.key===" "&&(m.preventDefault(),d(m))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:d,onKeyDown:f},c]}const kN=O.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=AN(t,RN);const[s,{tagName:o}]=y_(Object.assign({tagName:n,disabled:r},i));return k.jsx(o,Object.assign({},i,s,{ref:e}))});kN.displayName="Button";const CN=["onKeyDown"];function bN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xN(t){return!t||t.trim()==="#"}const GS=O.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=bN(t,CN);const[i]=y_(Object.assign({tagName:"a"},r)),s=En(o=>{i.onKeyDown(o),n==null||n(o)});return xN(r.href)||r.role==="button"?k.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):k.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});GS.displayName="Anchor";const HS=O.forwardRef(({className:t,bsPrefix:e,as:n=GS,...r},i)=>(e=Fe(e,"alert-link"),k.jsx(n,{ref:i,className:ge(t,e),...r})));HS.displayName="AlertLink";const NN={[ti]:"show",[rs]:"show"},hu=O.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=O.useCallback((l,c)=>{mN(l),r==null||r(l,c)},[r]);return k.jsx(yN,{ref:s,addEndListener:pN,...o,onEnter:a,childRef:e.ref,children:(l,c)=>O.cloneElement(e,{...c,className:ge("fade",t,e.props.className,NN[l],n[l])})})});hu.displayName="Fade";const DN={"aria-label":Rr.string,onClick:Rr.func,variant:Rr.oneOf(["white"])},Lh=O.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>k.jsx("button",{ref:i,type:"button",className:ge("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));Lh.displayName="CloseButton";Lh.propTypes=DN;const KS=O.forwardRef((t,e)=>{const{bsPrefix:n,show:r=!0,closeLabel:i="Close alert",closeVariant:s,className:o,children:a,variant:l="primary",onClose:c,dismissible:d,transition:f=hu,...m}=Hx(t,{show:"onClose"}),y=Fe(n,"alert"),R=En(w=>{c&&c(!1,w)}),A=f===!0?hu:f,b=k.jsxs("div",{role:"alert",...A?void 0:m,ref:e,className:ge(o,y,l&&`${y}-${l}`,d&&`${y}-dismissible`),children:[d&&k.jsx(Lh,{onClick:R,"aria-label":i,variant:s}),a]});return A?k.jsx(A,{unmountOnExit:!0,...m,ref:void 0,in:r,children:b}):r?b:null});KS.displayName="Alert";const QS=Object.assign(KS,{Link:HS,Heading:WS}),Ps=O.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...a},l)=>{const c=Fe(e,"btn"),[d,{tagName:f}]=y_({tagName:t,disabled:s,...a}),m=f;return k.jsx(m,{...d,...a,ref:l,disabled:s,className:ge(o,c,i&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,a.href&&s&&"disabled")})});Ps.displayName="Button";function ON(t){const e=O.useRef(t);return e.current=t,e}function YS(t){const e=ON(t);O.useEffect(()=>()=>e.current(),[])}function VN(t,e){return O.Children.toArray(t).some(n=>O.isValidElement(n)&&n.type===e)}function LN({as:t,bsPrefix:e,className:n,...r}){e=Fe(e,"col");const i=VS(),s=LS(),o=[],a=[];return i.forEach(l=>{const c=r[l];delete r[l];let d,f,m;typeof c=="object"&&c!=null?{span:d,offset:f,order:m}=c:d=c;const y=l!==s?`-${l}`:"";d&&o.push(d===!0?`${e}${y}`:`${e}${y}-${d}`),m!=null&&a.push(`order${y}-${m}`),f!=null&&a.push(`offset${y}-${f}`)}),[{...r,className:ge(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const on=O.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=LN(t);return k.jsx(i,{...r,ref:e,className:ge(n,!o.length&&s)})});on.displayName="Col";var MN=Function.prototype.bind.call(Function.prototype.call,[].slice);function io(t,e){return MN(t.querySelectorAll(e))}function gE(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const FN="data-rr-ui-";function UN(t){return`${FN}${t}`}const XS=O.createContext(Ea?window:void 0);XS.Provider;function v_(){return O.useContext(XS)}const jN={type:Rr.string,tooltip:Rr.bool,as:Rr.elementType},Mh=O.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>k.jsx(t,{...i,ref:s,className:ge(e,`${n}-${r?"tooltip":"feedback"}`)}));Mh.displayName="Feedback";Mh.propTypes=jN;const Nr=O.createContext({}),w_=O.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:c}=O.useContext(Nr);return e=Fe(e,"form-check-input"),k.jsx(o,{...a,ref:l,type:r,id:t||c,className:ge(n,e,i&&"is-valid",s&&"is-invalid")})});w_.displayName="FormCheckInput";const Kd=O.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=O.useContext(Nr);return t=Fe(t,"form-check-label"),k.jsx("label",{...r,ref:i,htmlFor:n||s,className:ge(e,t)})});Kd.displayName="FormCheckLabel";const JS=O.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:c,feedbackType:d,className:f,style:m,title:y="",type:R="checkbox",label:A,children:b,as:w="input",...v},I)=>{e=Fe(e,"form-check"),n=Fe(n,"form-switch");const{controlId:N}=O.useContext(Nr),F=O.useMemo(()=>({controlId:t||N}),[N,t]),U=!b&&A!=null&&A!==!1||VN(b,Kd),E=k.jsx(w_,{...v,type:R==="switch"?"checkbox":R,ref:I,isValid:o,isInvalid:a,disabled:s,as:w});return k.jsx(Nr.Provider,{value:F,children:k.jsx("div",{style:m,className:ge(f,U&&e,r&&`${e}-inline`,i&&`${e}-reverse`,R==="switch"&&n),children:b||k.jsxs(k.Fragment,{children:[E,U&&k.jsx(Kd,{title:y,children:A}),c&&k.jsx(Mh,{type:d,tooltip:l,children:c})]})})})});JS.displayName="FormCheck";const Qd=Object.assign(JS,{Input:w_,Label:Kd}),ZS=O.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:c,as:d="input",...f},m)=>{const{controlId:y}=O.useContext(Nr);return t=Fe(t,"form-control"),k.jsx(d,{...f,type:e,size:r,ref:m,readOnly:c,id:i||y,className:ge(s,l?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",a&&"is-invalid")})});ZS.displayName="FormControl";const BN=Object.assign(ZS,{Feedback:Mh}),eR=O.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Fe(e,"form-floating"),k.jsx(n,{ref:i,className:ge(t,e),...r})));eR.displayName="FormFloating";const E_=O.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=O.useMemo(()=>({controlId:t}),[t]);return k.jsx(Nr.Provider,{value:i,children:k.jsx(e,{...n,ref:r})})});E_.displayName="FormGroup";const tR=O.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=O.useContext(Nr);e=Fe(e,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const d=ge(i,e,r&&"visually-hidden",n&&c);return s=s||l,n?k.jsx(on,{ref:a,as:"label",className:d,htmlFor:s,...o}):k.jsx(t,{ref:a,className:d,htmlFor:s,...o})});tR.displayName="FormLabel";const nR=O.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=O.useContext(Nr);return t=Fe(t,"form-range"),k.jsx("input",{...r,type:"range",ref:i,className:ge(e,t),id:n||s})});nR.displayName="FormRange";const rR=O.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:c}=O.useContext(Nr);return t=Fe(t,"form-select"),k.jsx("select",{...a,size:n,ref:l,className:ge(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||c})});rR.displayName="FormSelect";const iR=O.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=Fe(t,"form-text"),k.jsx(n,{...i,ref:s,className:ge(e,t,r&&"text-muted")})));iR.displayName="FormText";const sR=O.forwardRef((t,e)=>k.jsx(Qd,{...t,ref:e,type:"switch"}));sR.displayName="Switch";const zN=Object.assign(sR,{Input:Qd.Input,Label:Qd.Label}),oR=O.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=Fe(t,"form-floating"),k.jsxs(E_,{ref:o,className:ge(e,t),controlId:r,...s,children:[n,k.jsx("label",{htmlFor:r,children:i})]})));oR.displayName="FloatingLabel";const $N={_ref:Rr.any,validated:Rr.bool,as:Rr.elementType},I_=O.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>k.jsx(n,{...r,ref:i,className:ge(t,e&&"was-validated")}));I_.displayName="Form";I_.propTypes=$N;const ie=Object.assign(I_,{Group:E_,Control:BN,Floating:eR,Check:Qd,Switch:zN,Label:tR,Text:iR,Range:nR,Select:rR,FloatingLabel:oR});var Bc;function _E(t){if((!Bc&&Bc!==0||t)&&Ea){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),Bc=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return Bc}function gp(t){t===void 0&&(t=Vh());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function qN(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const yE=UN("modal-open");class T_{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return qN(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(_s(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(yE,""),_s(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(yE),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const _p=(t,e)=>Ea?t==null?(e||Vh()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function WN(t,e){const n=v_(),[r,i]=O.useState(()=>_p(t,n==null?void 0:n.document));if(!r){const s=_p(t);s&&i(s)}return O.useEffect(()=>{},[e,r]),O.useEffect(()=>{const s=_p(t);s!==r&&i(s)},[t,r]),r}function GN({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=O.useRef(null),o=O.useRef(e),a=En(n);O.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=Fu(s,t.ref),c=O.cloneElement(t,{ref:l});return e?c:i||!o.current&&r?null:c}function HN(t){return t.code==="Escape"||t.keyCode===27}function KN(){const t=O.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const QN=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function YN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function XN(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:a,children:l}=t,c=YN(t,QN);const{major:d}=KN(),f=d>=19?l.props.ref:l.ref,m=O.useRef(null),y=Fu(m,typeof l=="function"?null:f),R=U=>E=>{U&&m.current&&U(m.current,E)},A=O.useCallback(R(e),[e]),b=O.useCallback(R(n),[n]),w=O.useCallback(R(r),[r]),v=O.useCallback(R(i),[i]),I=O.useCallback(R(s),[s]),N=O.useCallback(R(o),[o]),F=O.useCallback(R(a),[a]);return Object.assign({},c,{nodeRef:m},e&&{onEnter:A},n&&{onEntering:b},r&&{onEntered:w},i&&{onExit:v},s&&{onExiting:I},o&&{onExited:N},a&&{addEndListener:F},{children:typeof l=="function"?(U,E)=>l(U,Object.assign({},E,{ref:y})):O.cloneElement(l,{ref:y})})}const JN=["component"];function ZN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const eD=O.forwardRef((t,e)=>{let{component:n}=t,r=ZN(t,JN);const i=XN(r);return k.jsx(n,Object.assign({ref:e},i))});function tD({in:t,onTransition:e}){const n=O.useRef(null),r=O.useRef(!0),i=En(e);return mE(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),mE(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function nD({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=O.useState(!e);e&&s&&o(!1);const a=tD({in:!!e,onTransition:c=>{const d=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(i(c)).then(d,f=>{throw c.in||o(!0),f})}}),l=Fu(a,t.ref);return s&&!e?null:O.cloneElement(t,{ref:l})}function vE(t,e,n){return t?k.jsx(eD,Object.assign({},n,{component:t})):e?k.jsx(nD,Object.assign({},n,{transition:e})):k.jsx(GN,Object.assign({},n))}const rD=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function iD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let yp;function sD(t){return yp||(yp=new T_({ownerDocument:t==null?void 0:t.document})),yp}function oD(t){const e=v_(),n=t||sD(e),r=O.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:O.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:O.useCallback(i=>{r.current.backdrop=i},[])})}const aR=O.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:d,transition:f,runTransition:m,backdropTransition:y,runBackdropTransition:R,autoFocus:A=!0,enforceFocus:b=!0,restoreFocus:w=!0,restoreFocusOptions:v,renderDialog:I,renderBackdrop:N=ve=>k.jsx("div",Object.assign({},ve)),manager:F,container:U,onShow:E,onHide:_=()=>{},onExit:T,onExited:S,onExiting:C,onEnter:x,onEntering:P,onEntered:je}=t,xn=iD(t,rD);const Wt=v_(),It=WN(U),q=oD(F),Z=EN(),te=IN(n),[me,ue]=O.useState(!n),fe=O.useRef(null);O.useImperativeHandle(e,()=>q,[q]),Ea&&!te&&n&&(fe.current=gp(Wt==null?void 0:Wt.document)),n&&me&&ue(!1);const ot=En(()=>{if(q.add(),Nn.current=Hd(document,"keydown",Ma),$i.current=Hd(document,"focus",()=>setTimeout(rn),!0),E&&E(),A){var ve,qi;const Wi=gp((ve=(qi=q.dialog)==null?void 0:qi.ownerDocument)!=null?ve:Wt==null?void 0:Wt.document);q.dialog&&Wi&&!gE(q.dialog,Wi)&&(fe.current=Wi,q.dialog.focus())}}),Nt=En(()=>{if(q.remove(),Nn.current==null||Nn.current(),$i.current==null||$i.current(),w){var ve;(ve=fe.current)==null||ve.focus==null||ve.focus(v),fe.current=null}});O.useEffect(()=>{!n||!It||ot()},[n,It,ot]),O.useEffect(()=>{me&&Nt()},[me,Nt]),YS(()=>{Nt()});const rn=En(()=>{if(!b||!Z()||!q.isTopModal())return;const ve=gp(Wt==null?void 0:Wt.document);q.dialog&&ve&&!gE(q.dialog,ve)&&q.dialog.focus()}),Gt=En(ve=>{ve.target===ve.currentTarget&&(c==null||c(ve),a===!0&&_())}),Ma=En(ve=>{l&&HN(ve)&&q.isTopModal()&&(d==null||d(ve),ve.defaultPrevented||_())}),$i=O.useRef(),Nn=O.useRef(),dr=(...ve)=>{ue(!0),S==null||S(...ve)};if(!It)return null;const qn=Object.assign({role:r,ref:q.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},xn,{style:s,className:i,tabIndex:-1});let hr=I?I(qn):k.jsx("div",Object.assign({},qn,{children:O.cloneElement(o,{role:"document"})}));hr=vE(f,m,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:T,onExiting:C,onExited:dr,onEnter:x,onEntering:P,onEntered:je,children:hr});let Wn=null;return a&&(Wn=N({ref:q.setBackdropRef,onClick:Gt}),Wn=vE(y,R,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Wn})),k.jsx(k.Fragment,{children:bo.createPortal(k.jsxs(k.Fragment,{children:[Wn,hr]}),It)})});aR.displayName="Modal";const aD=Object.assign(aR,{Manager:T_});function lD(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function uD(t,e){t.classList?t.classList.add(e):lD(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function wE(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function cD(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=wE(t.className,e):t.setAttribute("class",wE(t.className&&t.className.baseVal||"",e))}const so={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class dD extends T_{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,_s(n,{[e]:`${parseFloat(_s(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],_s(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(uD(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";io(n,so.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),io(n,so.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),io(n,so.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();cD(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";io(n,so.FIXED_CONTENT).forEach(s=>this.restore(r,s)),io(n,so.STICKY_CONTENT).forEach(s=>this.restore(i,s)),io(n,so.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let vp;function hD(t){return vp||(vp=new dD(t)),vp}const lR=O.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Fe(e,"modal-body"),k.jsx(n,{ref:i,className:ge(t,e),...r})));lR.displayName="ModalBody";const uR=O.createContext({onHide(){}}),S_=O.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...l},c)=>{t=Fe(t,"modal");const d=`${t}-dialog`,f=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return k.jsx("div",{...l,ref:c,className:ge(d,e,i&&`${t}-${i}`,r&&`${d}-centered`,a&&`${d}-scrollable`,s&&f),children:k.jsx("div",{className:ge(`${t}-content`,n),children:o})})});S_.displayName="ModalDialog";const cR=O.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Fe(e,"modal-footer"),k.jsx(n,{ref:i,className:ge(t,e),...r})));cR.displayName="ModalFooter";const fD=O.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=O.useContext(uR),l=En(()=>{a==null||a.onHide(),r==null||r()});return k.jsxs("div",{ref:o,...s,children:[i,n&&k.jsx(Lh,{"aria-label":t,variant:e,onClick:l})]})}),dR=O.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=Fe(t,"modal-header"),k.jsx(fD,{ref:s,...i,className:ge(e,t),closeLabel:n,closeButton:r})));dR.displayName="ModalHeader";const pD=$S("h4"),hR=O.forwardRef(({className:t,bsPrefix:e,as:n=pD,...r},i)=>(e=Fe(e,"modal-title"),k.jsx(n,{ref:i,className:ge(t,e),...r})));hR.displayName="ModalTitle";function mD(t){return k.jsx(hu,{...t,timeout:null})}function gD(t){return k.jsx(hu,{...t,timeout:null})}const fR=O.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o=S_,"data-bs-theme":a,"aria-labelledby":l,"aria-describedby":c,"aria-label":d,show:f=!1,animation:m=!0,backdrop:y=!0,keyboard:R=!0,onEscapeKeyDown:A,onShow:b,onHide:w,container:v,autoFocus:I=!0,enforceFocus:N=!0,restoreFocus:F=!0,restoreFocusOptions:U,onEntered:E,onExit:_,onExiting:T,onEnter:S,onEntering:C,onExited:x,backdropClassName:P,manager:je,...xn},Wt)=>{const[It,q]=O.useState({}),[Z,te]=O.useState(!1),me=O.useRef(!1),ue=O.useRef(!1),fe=O.useRef(null),[ot,Nt]=wN(),rn=Fu(Wt,Nt),Gt=En(w),Ma=Xx();t=Fe(t,"modal");const $i=O.useMemo(()=>({onHide:Gt}),[Gt]);function Nn(){return je||hD({isRTL:Ma})}function dr(ee){if(!Ea)return;const Be=Nn().getScrollbarWidth()>0,Gi=ee.scrollHeight>Vh(ee).documentElement.clientHeight;q({paddingRight:Be&&!Gi?_E():void 0,paddingLeft:!Be&&Gi?_E():void 0})}const qn=En(()=>{ot&&dr(ot.dialog)});YS(()=>{Lm(window,"resize",qn),fe.current==null||fe.current()});const hr=()=>{me.current=!0},Wn=ee=>{me.current&&ot&&ee.target===ot.dialog&&(ue.current=!0),me.current=!1},ve=()=>{te(!0),fe.current=zS(ot.dialog,()=>{te(!1)})},qi=ee=>{ee.target===ee.currentTarget&&ve()},Wi=ee=>{if(y==="static"){qi(ee);return}if(ue.current||ee.target!==ee.currentTarget){ue.current=!1;return}w==null||w()},Rf=ee=>{R?A==null||A(ee):(ee.preventDefault(),y==="static"&&ve())},oc=(ee,Be)=>{ee&&dr(ee),S==null||S(ee,Be)},Fa=ee=>{fe.current==null||fe.current(),_==null||_(ee)},ac=(ee,Be)=>{C==null||C(ee,Be),BS(window,"resize",qn)},Af=ee=>{ee&&(ee.style.display=""),x==null||x(ee),Lm(window,"resize",qn)},Ua=O.useCallback(ee=>k.jsx("div",{...ee,className:ge(`${t}-backdrop`,P,!m&&"show")}),[m,P,t]),Xs={...n,...It};Xs.display="block";const lc=ee=>k.jsx("div",{role:"dialog",...ee,style:Xs,className:ge(e,t,Z&&`${t}-static`,!m&&"show"),onClick:y?Wi:void 0,onMouseUp:Wn,"data-bs-theme":a,"aria-label":d,"aria-labelledby":l,"aria-describedby":c,children:k.jsx(o,{...xn,onMouseDown:hr,className:r,contentClassName:i,children:s})});return k.jsx(uR.Provider,{value:$i,children:k.jsx(aD,{show:f,ref:rn,backdrop:y,container:v,keyboard:!0,autoFocus:I,enforceFocus:N,restoreFocus:F,restoreFocusOptions:U,onEscapeKeyDown:Rf,onShow:b,onHide:w,onEnter:oc,onEntering:ac,onEntered:E,onExit:Fa,onExiting:T,onExited:Af,manager:Nn(),transition:m?mD:void 0,backdropTransition:m?gD:void 0,renderBackdrop:Ua,renderDialog:lc})})});fR.displayName="Modal";const un=Object.assign(fR,{Body:lR,Header:dR,Title:hR,Footer:cR,Dialog:S_,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),yn=O.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=Fe(t,"row"),o=VS(),a=LS(),l=`${s}-cols`,c=[];return o.forEach(d=>{const f=r[d];delete r[d];let m;f!=null&&typeof f=="object"?{cols:m}=f:m=f;const y=d!==a?`-${d}`:"";m!=null&&c.push(`${l}${y}-${m}`)}),k.jsx(n,{ref:i,...r,className:ge(e,s,...c)})});yn.displayName="Row";var pR={exports:{}};(()=>{var t={d:(s,o)=>{for(var a in o)t.o(o,a)&&!t.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:o[a]})},o:(s,o)=>Object.prototype.hasOwnProperty.call(s,o),r:s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},e={};function n(s,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,l.key,l)}}t.r(e),t.d(e,{default:()=>i});var r=function(){function s(){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s)}var o,a;return o=s,a=[{key:"changeHeightWidth",value:function(l,c,d,f,m,y){return d>f&&(l=Math.round(l*f/d),d=f),l>c&&(d=Math.round(d*c/l),l=c),m&&d<m&&(l=Math.round(l*m/d),d=m),y&&l<y&&(d=Math.round(d*y/l),l=y),{height:l,width:d}}},{key:"resizeAndRotateImage",value:function(l,c,d,f,m){var y=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",R=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,A=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,b=R/100,w=document.createElement("canvas"),v=l.width,I=l.height,N=this.changeHeightWidth(I,d,v,c,f,m);!A||A!==90&&A!==270?(w.width=N.width,w.height=N.height):(w.width=N.height,w.height=N.width),v=N.width,I=N.height;var F=w.getContext("2d");return F.fillStyle="rgba(0, 0, 0, 0)",F.fillRect(0,0,v,I),F.imageSmoothingEnabled&&F.imageSmoothingQuality&&(F.imageSmoothingQuality="high"),A&&(F.rotate(A*Math.PI/180),A===90?F.translate(0,-w.width):A===180?F.translate(-w.width,-w.height):A===270?F.translate(-w.height,0):A!==0&&A!==360||F.translate(0,0)),F.drawImage(l,0,0,v,I),w.toDataURL("image/".concat(y),b)}},{key:"b64toByteArrays",value:function(l,c){for(var d=atob(l.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),f=[],m=0;m<d.length;m+=512){for(var y=d.slice(m,m+512),R=new Array(y.length),A=0;A<y.length;A++)R[A]=y.charCodeAt(A);var b=new Uint8Array(R);f.push(b)}return f}},{key:"b64toBlob",value:function(l,c){var d=this.b64toByteArrays(l,c);return new Blob(d,{type:c,lastModified:new Date})}},{key:"b64toFile",value:function(l,c,d){var f=this.b64toByteArrays(l,d);return new File(f,c,{type:d,lastModified:new Date})}},{key:"createResizedImage",value:function(l,c,d,f,m,y,R){var A=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",b=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,w=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,v=new FileReader;if(!l)throw Error("File Not Found!");if(l.type&&!l.type.includes("image"))throw Error("File Is NOT Image!");v.readAsDataURL(l),v.onload=function(){var I=new Image;I.src=v.result,I.onload=function(){var N=s.resizeAndRotateImage(I,c,d,b,w,f,m,y),F="image/".concat(f);switch(A){case"blob":var U=s.b64toBlob(N,F);R(U);break;case"base64":R(N);break;case"file":var E=l.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(f.toString()),_=s.b64toFile(N,E,F);R(_);break;default:R(N)}}},v.onerror=function(I){throw Error(I)}}}],a&&n(o,a),s}();const i={imageFileResizer:function(s,o,a,l,c,d,f,m,y,R){return r.createResizedImage(s,o,a,l,c,d,f,m,y,R)}};pR.exports=e})();var _D=pR.exports;const yD=Nu(_D);var EE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(m=64)),r.push(n[d],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mR(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new wD;const m=s<<2|a>>4;if(r.push(m),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ED=function(t){const e=mR(t);return gR.encodeByteArray(e,!0)},Yd=function(t){return ED(t).replace(/\./g,"")},_R=function(t){try{return gR.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Xd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ID(n)||(t[n]=Xd(t[n],e[n]));return t}function ID(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=()=>TD().__FIREBASE_DEFAULTS__,RD=()=>{if(typeof process>"u"||typeof EE>"u")return;const t=EE.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_R(t[1]);return e&&JSON.parse(e)},Fh=()=>{try{return SD()||RD()||AD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yR=t=>{var e,n;return(n=(e=Fh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vR=t=>{const e=yR(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wR=()=>{var t;return(t=Fh())===null||t===void 0?void 0:t.config},ER=t=>{var e;return(e=Fh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yd(JSON.stringify(n)),Yd(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function R_(){var t;const e=(t=Fh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TR(){return typeof window<"u"||SR()}function SR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function RR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function A_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AR(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PR(){return!R_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fu(){try{return typeof indexedDB=="object"}catch{return!1}}function CD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD="FirebaseError";class bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bD,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$s.prototype.create)}}class $s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bt(i,a,r)}}function xD(t,e){return t.replace(ND,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ND=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function DD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(TE(s)&&TE(o)){if(!Jo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function TE(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Tl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kR(t,e){const n=new OD(t,e);return n.subscribe.bind(n)}class OD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wp),i.error===void 0&&(i.error=wp),i.complete===void 0&&(i.complete=wp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return t&&t._delegate?t._delegate:t}class Cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FD(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MD(t){return t===ts?void 0:t}function FD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=[];var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const bR={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},UD=se.INFO,jD={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},BD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uh{constructor(e){this.name=e,this._logLevel=UD,this._logHandler=BD,this._userLogHandler=null,P_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}function zD(t){P_.forEach(e=>{e.setLogLevel(t)})}function $D(t,e){for(const n of P_){let r=null;e&&e.level&&(r=bR[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:se[s].toLowerCase(),message:a,args:o,type:i.name})}}}const qD=(t,e)=>e.some(n=>t instanceof n);let SE,RE;function WD(){return SE||(SE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GD(){return RE||(RE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xR=new WeakMap,Mm=new WeakMap,NR=new WeakMap,Ep=new WeakMap,k_=new WeakMap;function HD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xR.set(n,t)}).catch(()=>{}),k_.set(e,t),e}function KD(t){if(Mm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mm.set(t,e)}let Fm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||NR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QD(t){Fm=t(Fm)}function YD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ip(this),e,...n);return NR.set(r,e.sort?e.sort():[e]),vi(r)}:GD().includes(t)?function(...e){return t.apply(Ip(this),e),vi(xR.get(this))}:function(...e){return vi(t.apply(Ip(this),e))}}function XD(t){return typeof t=="function"?YD(t):(t instanceof IDBTransaction&&KD(t),qD(t,WD())?new Proxy(t,Fm):t)}function vi(t){if(t instanceof IDBRequest)return HD(t);if(Ep.has(t))return Ep.get(t);const e=XD(t);return e!==t&&(Ep.set(t,e),k_.set(e,t)),e}const Ip=t=>k_.get(t);function JD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=vi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vi(o.result),l.oldVersion,l.newVersion,vi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ZD=["get","getKey","getAll","getAllKeys","count"],eO=["put","add","delete","clear"],Tp=new Map;function AE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tp.get(e))return Tp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Tp.set(e,s),s}QD(t=>({...t,get:(e,n,r)=>AE(e,n)||t.get(e,n,r),has:(e,n)=>!!AE(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jd="@firebase/app",Um="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Uh("@firebase/app"),rO="@firebase/app-compat",iO="@firebase/analytics-compat",sO="@firebase/analytics",oO="@firebase/app-check-compat",aO="@firebase/app-check",lO="@firebase/auth",uO="@firebase/auth-compat",cO="@firebase/database",dO="@firebase/database-compat",hO="@firebase/functions",fO="@firebase/functions-compat",pO="@firebase/installations",mO="@firebase/installations-compat",gO="@firebase/messaging",_O="@firebase/messaging-compat",yO="@firebase/performance",vO="@firebase/performance-compat",wO="@firebase/remote-config",EO="@firebase/remote-config-compat",IO="@firebase/storage",TO="@firebase/storage-compat",SO="@firebase/firestore",RO="@firebase/vertexai-preview",AO="@firebase/firestore-compat",PO="firebase",kO="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="[DEFAULT]",CO={[Jd]:"fire-core",[rO]:"fire-core-compat",[sO]:"fire-analytics",[iO]:"fire-analytics-compat",[aO]:"fire-app-check",[oO]:"fire-app-check-compat",[lO]:"fire-auth",[uO]:"fire-auth-compat",[cO]:"fire-rtdb",[dO]:"fire-rtdb-compat",[hO]:"fire-fn",[fO]:"fire-fn-compat",[pO]:"fire-iid",[mO]:"fire-iid-compat",[gO]:"fire-fcm",[_O]:"fire-fcm-compat",[yO]:"fire-perf",[vO]:"fire-perf-compat",[wO]:"fire-rc",[EO]:"fire-rc-compat",[IO]:"fire-gcs",[TO]:"fire-gcs-compat",[SO]:"fire-fst",[AO]:"fire-fst-compat",[RO]:"fire-vertex","fire-js":"fire-js",[PO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Map,Zo=new Map,ea=new Map;function pu(t,e){try{t.container.addComponent(e)}catch(n){ks.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function DR(t,e){t.container.addOrOverwriteComponent(e)}function Dr(t){const e=t.name;if(ea.has(e))return ks.debug(`There were multiple attempts to register component ${e}.`),!1;ea.set(e,t);for(const n of Si.values())pu(n,t);for(const n of Zo.values())pu(n,t);return!0}function Ta(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bO(t,e,n=Ti){Ta(t,e).clearInstance(n)}function OR(t){return t.options!==void 0}function We(t){return t.settings!==void 0}function xO(){ea.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new $s("app","Firebase",NO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO extends VR{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,fn(Jd,Um,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){b_(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw An.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=kO;function C_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ti,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=wR()),!n)throw An.create("no-options");const s=Si.get(i);if(s){if(Jo(n,s.options)&&Jo(r,s.config))return s;throw An.create("duplicate-app",{appName:i})}const o=new CR(i);for(const l of ea.values())o.addComponent(l);const a=new VR(n,r,o);return Si.set(i,a),a}function OO(t,e){if(TR()&&!SR())throw An.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;OR(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw An.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Zo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new CR(s);for(const c of ea.values())a.addComponent(c);const l=new DO(n,e,s,a);return Zo.set(s,l),l}function jh(t=Ti){const e=Si.get(t);if(!e&&t===Ti&&wR())return C_();if(!e)throw An.create("no-app",{appName:t});return e}function VO(){return Array.from(Si.values())}async function b_(t){let e=!1;const n=t.name;Si.has(n)?(e=!0,Si.delete(n)):Zo.has(n)&&t.decRefCount()<=0&&(Zo.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function fn(t,e,n){var r;let i=(r=CO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ks.warn(a.join(" "));return}Dr(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function LR(t,e){if(t!==null&&typeof t!="function")throw An.create("invalid-log-argument");$D(t,e)}function MR(t){zD(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO="firebase-heartbeat-database",MO=1,mu="firebase-heartbeat-store";let Sp=null;function FR(){return Sp||(Sp=JD(LO,MO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mu)}catch(n){console.warn(n)}}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),Sp}async function FO(t){try{const n=(await FR()).transaction(mu),r=await n.objectStore(mu).get(UR(t));return await n.done,r}catch(e){if(e instanceof bt)ks.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ks.warn(n.message)}}}async function PE(t,e){try{const r=(await FR()).transaction(mu,"readwrite");await r.objectStore(mu).put(e,UR(t)),await r.done}catch(n){if(n instanceof bt)ks.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ks.warn(r.message)}}}function UR(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=1024,jO=30*24*60*60*1e3;class BO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $O(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kE();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kE(),{heartbeatsToSend:r,unsentEntries:i}=zO(this._heartbeatsCache.heartbeats),s=Yd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function kE(){return new Date().toISOString().substring(0,10)}function zO(t,e=UO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),CE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),CE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $O{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fu()?CD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return PE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return PE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function CE(t){return Yd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(t){Dr(new Cn("platform-logger",e=>new tO(e),"PRIVATE")),Dr(new Cn("heartbeat",e=>new BO(e),"PRIVATE")),fn(Jd,Um,t),fn(Jd,Um,"esm2017"),fn("fire-js","")}qO("");const WO=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:bt,SDK_VERSION:Ur,_DEFAULT_ENTRY_NAME:Ti,_addComponent:pu,_addOrOverwriteComponent:DR,_apps:Si,_clearComponents:xO,_components:ea,_getProvider:Ta,_isFirebaseApp:OR,_isFirebaseServerApp:We,_registerComponent:Dr,_removeServiceInstance:bO,_serverApps:Zo,deleteApp:b_,getApp:jh,getApps:VO,initializeApp:C_,initializeServerApp:OO,onLog:LR,registerVersion:fn,setLogLevel:MR},Symbol.toStringTag,{value:"Module"}));var bE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ys,jR;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.D=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(S,C,x){for(var P=Array(arguments.length-2),je=2;je<arguments.length;je++)P[je-2]=arguments[je];return _.prototype[C].apply(S,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,T){T||(T=0);var S=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)S[C]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(C=0;16>C;++C)S[C]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],C=E.g[2];var x=E.g[3],P=_+(x^T&(C^x))+S[0]+3614090360&4294967295;_=T+(P<<7&4294967295|P>>>25),P=x+(C^_&(T^C))+S[1]+3905402710&4294967295,x=_+(P<<12&4294967295|P>>>20),P=C+(T^x&(_^T))+S[2]+606105819&4294967295,C=x+(P<<17&4294967295|P>>>15),P=T+(_^C&(x^_))+S[3]+3250441966&4294967295,T=C+(P<<22&4294967295|P>>>10),P=_+(x^T&(C^x))+S[4]+4118548399&4294967295,_=T+(P<<7&4294967295|P>>>25),P=x+(C^_&(T^C))+S[5]+1200080426&4294967295,x=_+(P<<12&4294967295|P>>>20),P=C+(T^x&(_^T))+S[6]+2821735955&4294967295,C=x+(P<<17&4294967295|P>>>15),P=T+(_^C&(x^_))+S[7]+4249261313&4294967295,T=C+(P<<22&4294967295|P>>>10),P=_+(x^T&(C^x))+S[8]+1770035416&4294967295,_=T+(P<<7&4294967295|P>>>25),P=x+(C^_&(T^C))+S[9]+2336552879&4294967295,x=_+(P<<12&4294967295|P>>>20),P=C+(T^x&(_^T))+S[10]+4294925233&4294967295,C=x+(P<<17&4294967295|P>>>15),P=T+(_^C&(x^_))+S[11]+2304563134&4294967295,T=C+(P<<22&4294967295|P>>>10),P=_+(x^T&(C^x))+S[12]+1804603682&4294967295,_=T+(P<<7&4294967295|P>>>25),P=x+(C^_&(T^C))+S[13]+4254626195&4294967295,x=_+(P<<12&4294967295|P>>>20),P=C+(T^x&(_^T))+S[14]+2792965006&4294967295,C=x+(P<<17&4294967295|P>>>15),P=T+(_^C&(x^_))+S[15]+1236535329&4294967295,T=C+(P<<22&4294967295|P>>>10),P=_+(C^x&(T^C))+S[1]+4129170786&4294967295,_=T+(P<<5&4294967295|P>>>27),P=x+(T^C&(_^T))+S[6]+3225465664&4294967295,x=_+(P<<9&4294967295|P>>>23),P=C+(_^T&(x^_))+S[11]+643717713&4294967295,C=x+(P<<14&4294967295|P>>>18),P=T+(x^_&(C^x))+S[0]+3921069994&4294967295,T=C+(P<<20&4294967295|P>>>12),P=_+(C^x&(T^C))+S[5]+3593408605&4294967295,_=T+(P<<5&4294967295|P>>>27),P=x+(T^C&(_^T))+S[10]+38016083&4294967295,x=_+(P<<9&4294967295|P>>>23),P=C+(_^T&(x^_))+S[15]+3634488961&4294967295,C=x+(P<<14&4294967295|P>>>18),P=T+(x^_&(C^x))+S[4]+3889429448&4294967295,T=C+(P<<20&4294967295|P>>>12),P=_+(C^x&(T^C))+S[9]+568446438&4294967295,_=T+(P<<5&4294967295|P>>>27),P=x+(T^C&(_^T))+S[14]+3275163606&4294967295,x=_+(P<<9&4294967295|P>>>23),P=C+(_^T&(x^_))+S[3]+4107603335&4294967295,C=x+(P<<14&4294967295|P>>>18),P=T+(x^_&(C^x))+S[8]+1163531501&4294967295,T=C+(P<<20&4294967295|P>>>12),P=_+(C^x&(T^C))+S[13]+2850285829&4294967295,_=T+(P<<5&4294967295|P>>>27),P=x+(T^C&(_^T))+S[2]+4243563512&4294967295,x=_+(P<<9&4294967295|P>>>23),P=C+(_^T&(x^_))+S[7]+1735328473&4294967295,C=x+(P<<14&4294967295|P>>>18),P=T+(x^_&(C^x))+S[12]+2368359562&4294967295,T=C+(P<<20&4294967295|P>>>12),P=_+(T^C^x)+S[5]+4294588738&4294967295,_=T+(P<<4&4294967295|P>>>28),P=x+(_^T^C)+S[8]+2272392833&4294967295,x=_+(P<<11&4294967295|P>>>21),P=C+(x^_^T)+S[11]+1839030562&4294967295,C=x+(P<<16&4294967295|P>>>16),P=T+(C^x^_)+S[14]+4259657740&4294967295,T=C+(P<<23&4294967295|P>>>9),P=_+(T^C^x)+S[1]+2763975236&4294967295,_=T+(P<<4&4294967295|P>>>28),P=x+(_^T^C)+S[4]+1272893353&4294967295,x=_+(P<<11&4294967295|P>>>21),P=C+(x^_^T)+S[7]+4139469664&4294967295,C=x+(P<<16&4294967295|P>>>16),P=T+(C^x^_)+S[10]+3200236656&4294967295,T=C+(P<<23&4294967295|P>>>9),P=_+(T^C^x)+S[13]+681279174&4294967295,_=T+(P<<4&4294967295|P>>>28),P=x+(_^T^C)+S[0]+3936430074&4294967295,x=_+(P<<11&4294967295|P>>>21),P=C+(x^_^T)+S[3]+3572445317&4294967295,C=x+(P<<16&4294967295|P>>>16),P=T+(C^x^_)+S[6]+76029189&4294967295,T=C+(P<<23&4294967295|P>>>9),P=_+(T^C^x)+S[9]+3654602809&4294967295,_=T+(P<<4&4294967295|P>>>28),P=x+(_^T^C)+S[12]+3873151461&4294967295,x=_+(P<<11&4294967295|P>>>21),P=C+(x^_^T)+S[15]+530742520&4294967295,C=x+(P<<16&4294967295|P>>>16),P=T+(C^x^_)+S[2]+3299628645&4294967295,T=C+(P<<23&4294967295|P>>>9),P=_+(C^(T|~x))+S[0]+4096336452&4294967295,_=T+(P<<6&4294967295|P>>>26),P=x+(T^(_|~C))+S[7]+1126891415&4294967295,x=_+(P<<10&4294967295|P>>>22),P=C+(_^(x|~T))+S[14]+2878612391&4294967295,C=x+(P<<15&4294967295|P>>>17),P=T+(x^(C|~_))+S[5]+4237533241&4294967295,T=C+(P<<21&4294967295|P>>>11),P=_+(C^(T|~x))+S[12]+1700485571&4294967295,_=T+(P<<6&4294967295|P>>>26),P=x+(T^(_|~C))+S[3]+2399980690&4294967295,x=_+(P<<10&4294967295|P>>>22),P=C+(_^(x|~T))+S[10]+4293915773&4294967295,C=x+(P<<15&4294967295|P>>>17),P=T+(x^(C|~_))+S[1]+2240044497&4294967295,T=C+(P<<21&4294967295|P>>>11),P=_+(C^(T|~x))+S[8]+1873313359&4294967295,_=T+(P<<6&4294967295|P>>>26),P=x+(T^(_|~C))+S[15]+4264355552&4294967295,x=_+(P<<10&4294967295|P>>>22),P=C+(_^(x|~T))+S[6]+2734768916&4294967295,C=x+(P<<15&4294967295|P>>>17),P=T+(x^(C|~_))+S[13]+1309151649&4294967295,T=C+(P<<21&4294967295|P>>>11),P=_+(C^(T|~x))+S[4]+4149444226&4294967295,_=T+(P<<6&4294967295|P>>>26),P=x+(T^(_|~C))+S[11]+3174756917&4294967295,x=_+(P<<10&4294967295|P>>>22),P=C+(_^(x|~T))+S[2]+718787259&4294967295,C=x+(P<<15&4294967295|P>>>17),P=T+(x^(C|~_))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(C+(P<<21&4294967295|P>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var T=_-this.blockSize,S=this.B,C=this.h,x=0;x<_;){if(C==0)for(;x<=T;)i(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<_;)if(S[C++]=E.charCodeAt(x++),C==this.blockSize){i(this,S),C=0;break}}else for(;x<_;)if(S[C++]=E[x++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var T=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=T&255,T/=256;for(this.u(E),E=Array(16),_=T=0;4>_;++_)for(var S=0;32>S;S+=8)E[T++]=this.g[_]>>>S&255;return E};function s(E,_){var T=a;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;for(var T=[],S=!0,C=E.length-1;0<=C;C--){var x=E[C]|0;S&&x==_||(T[C]=x,S=!1)}this.g=T}var a={};function l(E){return-128<=E&&128>E?s(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return b(c(-E));for(var _=[],T=1,S=0;E>=T;S++)_[S]=E/T|0,T*=4294967296;return new o(_,0)}function d(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return b(d(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(_,8)),S=f,C=0;C<E.length;C+=8){var x=Math.min(8,E.length-C),P=parseInt(E.substring(C,C+x),_);8>x?(x=c(Math.pow(_,x)),S=S.j(x).add(c(P))):(S=S.j(T),S=S.add(c(P)))}return S}var f=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-b(this).m();for(var E=0,_=1,T=0;T<this.g.length;T++){var S=this.i(T);E+=(0<=S?S:4294967296+S)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(A(this))return"-"+b(this).toString(E);for(var _=c(Math.pow(E,6)),T=this,S="";;){var C=N(T,_).g;T=w(T,C.j(_));var x=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=C,R(T))return x+S;for(;6>x.length;)x="0"+x;S=x+S}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function A(E){return E.h==-1}t.l=function(E){return E=w(this,E),A(E)?-1:R(E)?0:1};function b(E){for(var _=E.g.length,T=[],S=0;S<_;S++)T[S]=~E.g[S];return new o(T,~E.h).add(m)}t.abs=function(){return A(this)?b(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0,C=0;C<=_;C++){var x=S+(this.i(C)&65535)+(E.i(C)&65535),P=(x>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);S=P>>>16,x&=65535,P&=65535,T[C]=P<<16|x}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(E,_){return E.add(b(_))}t.j=function(E){if(R(this)||R(E))return f;if(A(this))return A(E)?b(this).j(b(E)):b(b(this).j(E));if(A(E))return b(this.j(b(E)));if(0>this.l(y)&&0>E.l(y))return c(this.m()*E.m());for(var _=this.g.length+E.g.length,T=[],S=0;S<2*_;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<E.g.length;C++){var x=this.i(S)>>>16,P=this.i(S)&65535,je=E.i(C)>>>16,xn=E.i(C)&65535;T[2*S+2*C]+=P*xn,v(T,2*S+2*C),T[2*S+2*C+1]+=x*xn,v(T,2*S+2*C+1),T[2*S+2*C+1]+=P*je,v(T,2*S+2*C+1),T[2*S+2*C+2]+=x*je,v(T,2*S+2*C+2)}for(S=0;S<_;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=_;S<2*_;S++)T[S]=0;return new o(T,0)};function v(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function I(E,_){this.g=E,this.h=_}function N(E,_){if(R(_))throw Error("division by zero");if(R(E))return new I(f,f);if(A(E))return _=N(b(E),_),new I(b(_.g),b(_.h));if(A(_))return _=N(E,b(_)),new I(b(_.g),_.h);if(30<E.g.length){if(A(E)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,S=_;0>=S.l(E);)T=F(T),S=F(S);var C=U(T,1),x=U(S,1);for(S=U(S,2),T=U(T,2);!R(S);){var P=x.add(S);0>=P.l(E)&&(C=C.add(T),x=P),S=U(S,1),T=U(T,1)}return _=w(E,C.j(_)),new I(C,_)}for(C=f;0<=E.l(_);){for(T=Math.max(1,Math.floor(E.m()/_.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),x=c(T),P=x.j(_);A(P)||0<P.l(E);)T-=S,x=c(T),P=x.j(_);R(x)&&(x=m),C=C.add(x),E=w(E,P)}return new I(C,E)}t.A=function(E){return N(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)&E.i(S);return new o(T,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)|E.i(S);return new o(T,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],S=0;S<_;S++)T[S]=this.i(S)^E.i(S);return new o(T,this.h^E.h)};function F(E){for(var _=E.g.length+1,T=[],S=0;S<_;S++)T[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(T,E.h)}function U(E,_){var T=_>>5;_%=32;for(var S=E.g.length-T,C=[],x=0;x<S;x++)C[x]=0<_?E.i(x+T)>>>_|E.i(x+T+1)<<32-_:E.i(x+T);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jR=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ys=o}).apply(typeof bE<"u"?bE:typeof self<"u"?self:typeof window<"u"?window:{});var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var BR,zR,Sl,$R,cd,jm,qR,WR,GR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,h,p){return u==Array.prototype||u==Object.prototype||(u[h]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof zc=="object"&&zc];for(var h=0;h<u.length;++h){var p=u[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,h){if(h)e:{var p=r;u=u.split(".");for(var g=0;g<u.length-1;g++){var D=u[g];if(!(D in p))break e;p=p[D]}u=u[u.length-1],g=p[u],h=h(g),h!=g&&h!=null&&e(p,u,{configurable:!0,writable:!0,value:h})}}function s(u,h){u instanceof String&&(u+="");var p=0,g=!1,D={next:function(){if(!g&&p<u.length){var M=p++;return{value:h(M,u[M]),done:!1}}return g=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var h=typeof u;return h=h!="object"?h:u?Array.isArray(u)?"array":h:"null",h=="array"||h=="object"&&typeof u.length=="number"}function c(u){var h=typeof u;return h=="object"&&u!=null||h=="function"}function d(u,h,p){return u.call.apply(u.bind,arguments)}function f(u,h,p){if(!u)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,g),u.apply(h,D)}}return function(){return u.apply(h,arguments)}}function m(u,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function y(u,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),u.apply(this,g)}}function R(u,h){function p(){}p.prototype=h.prototype,u.aa=h.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(g,D,M){for(var W=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)W[Ee-2]=arguments[Ee];return h.prototype[D].apply(g,W)}}function A(u){const h=u.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=u[g];return p}return[]}function b(u,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const D=u.length||0,M=g.length||0;u.length=D+M;for(let W=0;W<M;W++)u[D+W]=g[W]}else u.push(g)}}class w{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(u){return/^[\s\xa0]*$/.test(u)}function I(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function N(u){return N[" "](u),u}N[" "]=function(){};var F=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function U(u,h,p){for(const g in u)h.call(p,u[g],g,u)}function E(u,h){for(const p in u)h.call(void 0,u[p],p,u)}function _(u){const h={};for(const p in u)h[p]=u[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(u,h){let p,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(p in g)u[p]=g[p];for(let M=0;M<T.length;M++)p=T[M],Object.prototype.hasOwnProperty.call(g,p)&&(u[p]=g[p])}}function C(u){var h=1;u=u.split(":");const p=[];for(;0<h&&u.length;)p.push(u.shift()),h--;return u.length&&p.push(u.join(":")),p}function x(u){a.setTimeout(()=>{throw u},0)}function P(){var u=Z;let h=null;return u.g&&(h=u.g,u.g=u.g.next,u.g||(u.h=null),h.next=null),h}class je{constructor(){this.h=this.g=null}add(h,p){const g=xn.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var xn=new w(()=>new Wt,u=>u.reset());class Wt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let It,q=!1,Z=new je,te=()=>{const u=a.Promise.resolve(void 0);It=()=>{u.then(me)}};var me=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(p){x(p)}var h=xn;h.j(u),100>h.h&&(h.h++,u.next=h.g,h.g=u)}q=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,h){this.type=u,this.g=this.target=h,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var ot=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,h=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return u}();function Nt(u,h){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,g=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=h,h=u.relatedTarget){if(F){e:{try{N(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=u.fromElement:p=="mouseout"&&(h=u.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:rn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Nt.aa.h.call(this)}}R(Nt,fe);var rn={2:"touch",3:"pen",4:"mouse"};Nt.prototype.h=function(){Nt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Gt="closure_listenable_"+(1e6*Math.random()|0),Ma=0;function $i(u,h,p,g,D){this.listener=u,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=D,this.key=++Ma,this.da=this.fa=!1}function Nn(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function dr(u){this.src=u,this.g={},this.h=0}dr.prototype.add=function(u,h,p,g,D){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var W=hr(u,h,g,D);return-1<W?(h=u[W],p||(h.fa=!1)):(h=new $i(h,this.src,M,!!g,D),h.fa=p,u.push(h)),h};function qn(u,h){var p=h.type;if(p in u.g){var g=u.g[p],D=Array.prototype.indexOf.call(g,h,void 0),M;(M=0<=D)&&Array.prototype.splice.call(g,D,1),M&&(Nn(h),u.g[p].length==0&&(delete u.g[p],u.h--))}}function hr(u,h,p,g){for(var D=0;D<u.length;++D){var M=u[D];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==g)return D}return-1}var Wn="closure_lm_"+(1e6*Math.random()|0),ve={};function qi(u,h,p,g,D){if(Array.isArray(h)){for(var M=0;M<h.length;M++)qi(u,h[M],p,g,D);return null}return p=lc(p),u&&u[Gt]?u.K(h,p,c(g)?!!g.capture:!!g,D):Wi(u,h,p,!1,g,D)}function Wi(u,h,p,g,D,M){if(!h)throw Error("Invalid event type");var W=c(D)?!!D.capture:!!D,Ee=Ua(u);if(Ee||(u[Wn]=Ee=new dr(u)),p=Ee.add(h,p,g,W,M),p.proxy)return p;if(g=Rf(),p.proxy=g,g.src=u,g.listener=p,u.addEventListener)ot||(D=W),D===void 0&&(D=!1),u.addEventListener(h.toString(),g,D);else if(u.attachEvent)u.attachEvent(ac(h.toString()),g);else if(u.addListener&&u.removeListener)u.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Rf(){function u(p){return h.call(u.src,u.listener,p)}const h=Af;return u}function oc(u,h,p,g,D){if(Array.isArray(h))for(var M=0;M<h.length;M++)oc(u,h[M],p,g,D);else g=c(g)?!!g.capture:!!g,p=lc(p),u&&u[Gt]?(u=u.i,h=String(h).toString(),h in u.g&&(M=u.g[h],p=hr(M,p,g,D),-1<p&&(Nn(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete u.g[h],u.h--)))):u&&(u=Ua(u))&&(h=u.g[h.toString()],u=-1,h&&(u=hr(h,p,g,D)),(p=-1<u?h[u]:null)&&Fa(p))}function Fa(u){if(typeof u!="number"&&u&&!u.da){var h=u.src;if(h&&h[Gt])qn(h.i,u);else{var p=u.type,g=u.proxy;h.removeEventListener?h.removeEventListener(p,g,u.capture):h.detachEvent?h.detachEvent(ac(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=Ua(h))?(qn(p,u),p.h==0&&(p.src=null,h[Wn]=null)):Nn(u)}}}function ac(u){return u in ve?ve[u]:ve[u]="on"+u}function Af(u,h){if(u.da)u=!0;else{h=new Nt(h,this);var p=u.listener,g=u.ha||u.src;u.fa&&Fa(u),u=p.call(g,h)}return u}function Ua(u){return u=u[Wn],u instanceof dr?u:null}var Xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function lc(u){return typeof u=="function"?u:(u[Xs]||(u[Xs]=function(h){return u.handleEvent(h)}),u[Xs])}function ee(){ue.call(this),this.i=new dr(this),this.M=this,this.F=null}R(ee,ue),ee.prototype[Gt]=!0,ee.prototype.removeEventListener=function(u,h,p,g){oc(this,u,h,p,g)};function Be(u,h){var p,g=u.F;if(g)for(p=[];g;g=g.F)p.push(g);if(u=u.M,g=h.type||h,typeof h=="string")h=new fe(h,u);else if(h instanceof fe)h.target=h.target||u;else{var D=h;h=new fe(g,u),S(h,D)}if(D=!0,p)for(var M=p.length-1;0<=M;M--){var W=h.g=p[M];D=Gi(W,g,!0,h)&&D}if(W=h.g=u,D=Gi(W,g,!0,h)&&D,D=Gi(W,g,!1,h)&&D,p)for(M=0;M<p.length;M++)W=h.g=p[M],D=Gi(W,g,!1,h)&&D}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var u=this.i,h;for(h in u.g){for(var p=u.g[h],g=0;g<p.length;g++)Nn(p[g]);delete u.g[h],u.h--}}this.F=null},ee.prototype.K=function(u,h,p,g){return this.i.add(String(u),h,!1,p,g)},ee.prototype.L=function(u,h,p,g){return this.i.add(String(u),h,!0,p,g)};function Gi(u,h,p,g){if(h=u.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,M=0;M<h.length;++M){var W=h[M];if(W&&!W.da&&W.capture==p){var Ee=W.listener,gt=W.ha||W.src;W.fa&&qn(u.i,W),D=Ee.call(gt,g)!==!1&&D}}return D&&!g.defaultPrevented}function av(u,h,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(u,h||0)}function lv(u){u.g=av(()=>{u.g=null,u.i&&(u.i=!1,lv(u))},u.l);const h=u.h;u.h=null,u.m.apply(null,h)}class GC extends ue{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:lv(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ja(u){ue.call(this),this.h=u,this.g={}}R(ja,ue);var uv=[];function cv(u){U(u.g,function(h,p){this.g.hasOwnProperty(p)&&Fa(h)},u),u.g={}}ja.prototype.N=function(){ja.aa.N.call(this),cv(this)},ja.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pf=a.JSON.stringify,HC=a.JSON.parse,KC=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function kf(){}kf.prototype.h=null;function dv(u){return u.h||(u.h=u.i())}function hv(){}var Ba={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cf(){fe.call(this,"d")}R(Cf,fe);function bf(){fe.call(this,"c")}R(bf,fe);var Hi={},fv=null;function uc(){return fv=fv||new ee}Hi.La="serverreachability";function pv(u){fe.call(this,Hi.La,u)}R(pv,fe);function za(u){const h=uc();Be(h,new pv(h))}Hi.STAT_EVENT="statevent";function mv(u,h){fe.call(this,Hi.STAT_EVENT,u),this.stat=h}R(mv,fe);function Dt(u){const h=uc();Be(h,new mv(h,u))}Hi.Ma="timingevent";function gv(u,h){fe.call(this,Hi.Ma,u),this.size=h}R(gv,fe);function $a(u,h){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},h)}function qa(){this.g=!0}qa.prototype.xa=function(){this.g=!1};function QC(u,h,p,g,D,M){u.info(function(){if(u.g)if(M)for(var W="",Ee=M.split("&"),gt=0;gt<Ee.length;gt++){var pe=Ee[gt].split("=");if(1<pe.length){var Tt=pe[0];pe=pe[1];var St=Tt.split("_");W=2<=St.length&&St[1]=="type"?W+(Tt+"="+pe+"&"):W+(Tt+"=redacted&")}}else W=null;else W=M;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+p+`
`+W})}function YC(u,h,p,g,D,M,W){u.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+p+`
`+M+" "+W})}function Js(u,h,p,g){u.info(function(){return"XMLHTTP TEXT ("+h+"): "+JC(u,p)+(g?" "+g:"")})}function XC(u,h){u.info(function(){return"TIMEOUT: "+h})}qa.prototype.info=function(){};function JC(u,h){if(!u.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var g=p[u];if(!(2>g.length)){var D=g[1];if(Array.isArray(D)&&!(1>D.length)){var M=D[0];if(M!="noop"&&M!="stop"&&M!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return Pf(p)}catch{return h}}var cc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_v={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xf;function dc(){}R(dc,kf),dc.prototype.g=function(){return new XMLHttpRequest},dc.prototype.i=function(){return{}},xf=new dc;function Gr(u,h,p,g){this.j=u,this.i=h,this.l=p,this.R=g||1,this.U=new ja(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yv}function yv(){this.i=null,this.g="",this.h=!1}var vv={},Nf={};function Df(u,h,p){u.L=1,u.v=mc(fr(h)),u.m=p,u.P=!0,wv(u,null)}function wv(u,h){u.F=Date.now(),hc(u),u.A=fr(u.v);var p=u.A,g=u.R;Array.isArray(g)||(g=[String(g)]),Ov(p.i,"t",g),u.C=0,p=u.j.J,u.h=new yv,u.g=Jv(u.j,p?h:null,!u.m),0<u.O&&(u.M=new GC(m(u.Y,u,u.g),u.O)),h=u.U,p=u.g,g=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(uv[0]=D.toString()),D=uv);for(var M=0;M<D.length;M++){var W=qi(p,D[M],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=u.H?_(u.H):{},u.m?(u.u||(u.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,h)):(u.u="GET",u.g.ea(u.A,u.u,null,h)),za(),QC(u.i,u.u,u.A,u.l,u.R,u.m)}Gr.prototype.ca=function(u){u=u.target;const h=this.M;h&&pr(u)==3?h.j():this.Y(u)},Gr.prototype.Y=function(u){try{if(u==this.g)e:{const St=pr(this.g);var h=this.g.Ba();const to=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||Bv(this.g)))){this.J||St!=4||h==7||(h==8||0>=to?za(3):za(2)),Of(this);var p=this.g.Z();this.X=p;t:if(Ev(this)){var g=Bv(this.g);u="";var D=g.length,M=pr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ki(this),Wa(this);var W="";break t}this.h.i=new a.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,u+=this.h.i.decode(g[h],{stream:!(M&&h==D-1)});g.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,YC(this.i,this.u,this.A,this.l,this.R,St,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,gt=this.g;if((Ee=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Ee)){var pe=Ee;break t}}pe=null}if(p=pe)Js(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vf(this,p);else{this.o=!1,this.s=3,Dt(12),Ki(this),Wa(this);break e}}if(this.P){p=!0;let Dn;for(;!this.J&&this.C<W.length;)if(Dn=ZC(this,W),Dn==Nf){St==4&&(this.s=4,Dt(14),p=!1),Js(this.i,this.l,null,"[Incomplete Response]");break}else if(Dn==vv){this.s=4,Dt(15),Js(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else Js(this.i,this.l,Dn,null),Vf(this,Dn);if(Ev(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||W.length!=0||this.h.h||(this.s=1,Dt(16),p=!1),this.o=this.o&&p,!p)Js(this.i,this.l,W,"[Invalid Chunked Response]"),Ki(this),Wa(this);else if(0<W.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Bf(Tt),Tt.M=!0,Dt(11))}}else Js(this.i,this.l,W,null),Vf(this,W);St==4&&Ki(this),this.o&&!this.J&&(St==4?Kv(this.j,this):(this.o=!1,hc(this)))}else g1(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),Ki(this),Wa(this)}}}catch{}finally{}};function Ev(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ZC(u,h){var p=u.C,g=h.indexOf(`
`,p);return g==-1?Nf:(p=Number(h.substring(p,g)),isNaN(p)?vv:(g+=1,g+p>h.length?Nf:(h=h.slice(g,g+p),u.C=g+p,h)))}Gr.prototype.cancel=function(){this.J=!0,Ki(this)};function hc(u){u.S=Date.now()+u.I,Iv(u,u.I)}function Iv(u,h){if(u.B!=null)throw Error("WatchDog timer not null");u.B=$a(m(u.ba,u),h)}function Of(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Gr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(XC(this.i,this.A),this.L!=2&&(za(),Dt(17)),Ki(this),this.s=2,Wa(this)):Iv(this,this.S-u)};function Wa(u){u.j.G==0||u.J||Kv(u.j,u)}function Ki(u){Of(u);var h=u.M;h&&typeof h.ma=="function"&&h.ma(),u.M=null,cv(u.U),u.g&&(h=u.g,u.g=null,h.abort(),h.ma())}function Vf(u,h){try{var p=u.j;if(p.G!=0&&(p.g==u||Lf(p.h,u))){if(!u.K&&Lf(p.h,u)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)wc(p),yc(p);else break e;jf(p),Dt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=$a(m(p.Za,p),6e3));if(1>=Rv(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Yi(p,11)}else if((u.K||p.g==u)&&wc(p),!v(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let pe=D[h];if(p.T=pe[0],pe=pe[1],p.G==2)if(pe[0]=="c"){p.K=pe[1],p.ia=pe[2];const Tt=pe[3];Tt!=null&&(p.la=Tt,p.j.info("VER="+p.la));const St=pe[4];St!=null&&(p.Aa=St,p.j.info("SVER="+p.Aa));const to=pe[5];to!=null&&typeof to=="number"&&0<to&&(g=1.5*to,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Dn=u.g;if(Dn){const Ic=Dn.g?Dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ic){var M=g.h;M.g||Ic.indexOf("spdy")==-1&&Ic.indexOf("quic")==-1&&Ic.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Mf(M,M.h),M.h=null))}if(g.D){const zf=Dn.g?Dn.g.getResponseHeader("X-HTTP-Session-Id"):null;zf&&(g.ya=zf,Se(g.I,g.D,zf))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var W=u;if(g.qa=Xv(g,g.J?g.ia:null,g.W),W.K){Av(g.h,W);var Ee=W,gt=g.L;gt&&(Ee.I=gt),Ee.B&&(Of(Ee),hc(Ee)),g.g=W}else Gv(g);0<p.i.length&&vc(p)}else pe[0]!="stop"&&pe[0]!="close"||Yi(p,7);else p.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Yi(p,7):Uf(p):pe[0]!="noop"&&p.l&&p.l.ta(pe),p.v=0)}}za(4)}catch{}}var e1=class{constructor(u,h){this.g=u,this.map=h}};function Tv(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sv(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Rv(u){return u.h?1:u.g?u.g.size:0}function Lf(u,h){return u.h?u.h==h:u.g?u.g.has(h):!1}function Mf(u,h){u.g?u.g.add(h):u.h=h}function Av(u,h){u.h&&u.h==h?u.h=null:u.g&&u.g.has(h)&&u.g.delete(h)}Tv.prototype.cancel=function(){if(this.i=Pv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Pv(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let h=u.i;for(const p of u.g.values())h=h.concat(p.D);return h}return A(u.i)}function t1(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var h=[],p=u.length,g=0;g<p;g++)h.push(u[g]);return h}h=[],p=0;for(g in u)h[p++]=u[g];return h}function n1(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var h=[];u=u.length;for(var p=0;p<u;p++)h.push(p);return h}h=[],p=0;for(const g in u)h[p++]=g;return h}}}function kv(u,h){if(u.forEach&&typeof u.forEach=="function")u.forEach(h,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,h,void 0);else for(var p=n1(u),g=t1(u),D=g.length,M=0;M<D;M++)h.call(void 0,g[M],p&&p[M],u)}var Cv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r1(u,h){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var g=u[p].indexOf("="),D=null;if(0<=g){var M=u[p].substring(0,g);D=u[p].substring(g+1)}else M=u[p];h(M,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Qi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Qi){this.h=u.h,fc(this,u.j),this.o=u.o,this.g=u.g,pc(this,u.s),this.l=u.l;var h=u.i,p=new Ka;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),bv(this,p),this.m=u.m}else u&&(h=String(u).match(Cv))?(this.h=!1,fc(this,h[1]||"",!0),this.o=Ga(h[2]||""),this.g=Ga(h[3]||"",!0),pc(this,h[4]),this.l=Ga(h[5]||"",!0),bv(this,h[6]||"",!0),this.m=Ga(h[7]||"")):(this.h=!1,this.i=new Ka(null,this.h))}Qi.prototype.toString=function(){var u=[],h=this.j;h&&u.push(Ha(h,xv,!0),":");var p=this.g;return(p||h=="file")&&(u.push("//"),(h=this.o)&&u.push(Ha(h,xv,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(Ha(p,p.charAt(0)=="/"?o1:s1,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",Ha(p,l1)),u.join("")};function fr(u){return new Qi(u)}function fc(u,h,p){u.j=p?Ga(h,!0):h,u.j&&(u.j=u.j.replace(/:$/,""))}function pc(u,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);u.s=h}else u.s=null}function bv(u,h,p){h instanceof Ka?(u.i=h,u1(u.i,u.h)):(p||(h=Ha(h,a1)),u.i=new Ka(h,u.h))}function Se(u,h,p){u.i.set(h,p)}function mc(u){return Se(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ga(u,h){return u?h?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ha(u,h,p){return typeof u=="string"?(u=encodeURI(u).replace(h,i1),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function i1(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var xv=/[#\/\?@]/g,s1=/[#\?:]/g,o1=/[#\?]/g,a1=/[#\?@]/g,l1=/#/g;function Ka(u,h){this.h=this.g=null,this.i=u||null,this.j=!!h}function Hr(u){u.g||(u.g=new Map,u.h=0,u.i&&r1(u.i,function(h,p){u.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ka.prototype,t.add=function(u,h){Hr(this),this.i=null,u=Zs(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(h),this.h+=1,this};function Nv(u,h){Hr(u),h=Zs(u,h),u.g.has(h)&&(u.i=null,u.h-=u.g.get(h).length,u.g.delete(h))}function Dv(u,h){return Hr(u),h=Zs(u,h),u.g.has(h)}t.forEach=function(u,h){Hr(this),this.g.forEach(function(p,g){p.forEach(function(D){u.call(h,D,g,this)},this)},this)},t.na=function(){Hr(this);const u=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const D=u[g];for(let M=0;M<D.length;M++)p.push(h[g])}return p},t.V=function(u){Hr(this);let h=[];if(typeof u=="string")Dv(this,u)&&(h=h.concat(this.g.get(Zs(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)h=h.concat(u[p])}return h},t.set=function(u,h){return Hr(this),this.i=null,u=Zs(this,u),Dv(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[h]),this.h+=1,this},t.get=function(u,h){return u?(u=this.V(u),0<u.length?String(u[0]):h):h};function Ov(u,h,p){Nv(u,h),0<p.length&&(u.i=null,u.g.set(Zs(u,h),A(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const M=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var D=M;W[g]!==""&&(D+="="+encodeURIComponent(String(W[g]))),u.push(D)}}return this.i=u.join("&")};function Zs(u,h){return h=String(h),u.j&&(h=h.toLowerCase()),h}function u1(u,h){h&&!u.j&&(Hr(u),u.i=null,u.g.forEach(function(p,g){var D=g.toLowerCase();g!=D&&(Nv(this,g),Ov(this,D,p))},u)),u.j=h}function c1(u,h){const p=new qa;if(a.Image){const g=new Image;g.onload=y(Kr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=y(Kr,p,"TestLoadImage: error",!1,h,g),g.onabort=y(Kr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(Kr,p,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=u}else h(!1)}function d1(u,h){const p=new qa,g=new AbortController,D=setTimeout(()=>{g.abort(),Kr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(u,{signal:g.signal}).then(M=>{clearTimeout(D),M.ok?Kr(p,"TestPingServer: ok",!0,h):Kr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Kr(p,"TestPingServer: error",!1,h)})}function Kr(u,h,p,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(p)}catch{}}function h1(){this.g=new KC}function f1(u,h,p){const g=p||"";try{kv(u,function(D,M){let W=D;c(D)&&(W=Pf(D)),h.push(g+M+"="+encodeURIComponent(W))})}catch(D){throw h.push(g+"type="+encodeURIComponent("_badmap")),D}}function Qa(u){this.l=u.Ub||null,this.j=u.eb||!1}R(Qa,kf),Qa.prototype.g=function(){return new gc(this.l,this.j)},Qa.prototype.i=function(u){return function(){return u}}({});function gc(u,h){ee.call(this),this.D=u,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(gc,ee),t=gc.prototype,t.open=function(u,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=h,this.readyState=1,Xa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(h.body=u),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ya(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Xa(this)),this.g&&(this.readyState=3,Xa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var h=u.value?u.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!u.done}))&&(this.response=this.responseText+=h)}u.done?Ya(this):Xa(this),this.readyState==3&&Vv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Ya(this))},t.Qa=function(u){this.g&&(this.response=u,Ya(this))},t.ga=function(){this.g&&Ya(this)};function Ya(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Xa(u)}t.setRequestHeader=function(u,h){this.u.append(u,h)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=h.next();return u.join(`\r
`)};function Xa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(gc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Lv(u){let h="";return U(u,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Ff(u,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Lv(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):Se(u,h,p))}function ze(u){ee.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ze,ee);var p1=/^https?$/i,m1=["POST","PUT"];t=ze.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);h=h?h.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xf.g(),this.v=this.o?dv(this.o):dv(xf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(u),!0),this.B=!1}catch(M){Mv(this,M);return}if(u=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)p.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const M of g.keys())p.set(M,g.get(M));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(m1,h,void 0))||g||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,W]of p)this.g.setRequestHeader(M,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jv(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){Mv(this,M)}};function Mv(u,h){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=h,u.m=5,Fv(u),_c(u)}function Fv(u){u.A||(u.A=!0,Be(u,"complete"),Be(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Be(this,"complete"),Be(this,"abort"),_c(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_c(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Uv(this):this.bb())},t.bb=function(){Uv(this)};function Uv(u){if(u.h&&typeof o<"u"&&(!u.v[1]||pr(u)!=4||u.Z()!=2)){if(u.u&&pr(u)==4)av(u.Ea,0,u);else if(Be(u,"readystatechange"),pr(u)==4){u.h=!1;try{const W=u.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=W===0){var D=String(u.D).match(Cv)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),g=!p1.test(D?D.toLowerCase():"")}p=g}if(p)Be(u,"complete"),Be(u,"success");else{u.m=6;try{var M=2<pr(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",Fv(u)}}finally{_c(u)}}}}function _c(u,h){if(u.g){jv(u);const p=u.g,g=u.v[0]?()=>{}:null;u.g=null,u.v=null,h||Be(u,"ready");try{p.onreadystatechange=g}catch{}}}function jv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function pr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<pr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var h=this.g.responseText;return u&&h.indexOf(u)==0&&(h=h.substring(u.length)),HC(h)}};function Bv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function g1(u){const h={};u=(u.g&&2<=pr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<u.length;g++){if(v(u[g]))continue;var p=C(u[g]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[D]||[];h[D]=M,M.push(p)}E(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ja(u,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||h}function zv(u){this.Aa=0,this.i=[],this.j=new qa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ja("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ja("baseRetryDelayMs",5e3,u),this.cb=Ja("retryDelaySeedMs",1e4,u),this.Wa=Ja("forwardChannelMaxRetries",2,u),this.wa=Ja("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Tv(u&&u.concurrentRequestLimit),this.Da=new h1,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zv.prototype,t.la=8,t.G=1,t.connect=function(u,h,p,g){Dt(0),this.W=u,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Xv(this,null,this.W),vc(this)};function Uf(u){if($v(u),u.G==3){var h=u.U++,p=fr(u.I);if(Se(p,"SID",u.K),Se(p,"RID",h),Se(p,"TYPE","terminate"),Za(u,p),h=new Gr(u,u.j,h),h.L=2,h.v=mc(fr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Jv(h.j,null),h.g.ea(h.v)),h.F=Date.now(),hc(h)}Yv(u)}function yc(u){u.g&&(Bf(u),u.g.cancel(),u.g=null)}function $v(u){yc(u),u.u&&(a.clearTimeout(u.u),u.u=null),wc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function vc(u){if(!Sv(u.h)&&!u.s){u.s=!0;var h=u.Ga;It||te(),q||(It(),q=!0),Z.add(h,u),u.B=0}}function _1(u,h){return Rv(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=h.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=$a(m(u.Ga,u,h),Qv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new Gr(this,this.j,u);let M=this.o;if(this.S&&(M?(M=_(M),S(M,this.S)):M=this.S),this.m!==null||this.O||(D.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Wv(this,D,h),p=fr(this.I),Se(p,"RID",u),Se(p,"CVER",22),this.D&&Se(p,"X-HTTP-Session-Id",this.D),Za(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(Lv(M)))+"&"+h:this.m&&Ff(p,this.m,M)),Mf(this.h,D),this.Ua&&Se(p,"TYPE","init"),this.P?(Se(p,"$req",h),Se(p,"SID","null"),D.T=!0,Df(D,p,null)):Df(D,p,h),this.G=2}}else this.G==3&&(u?qv(this,u):this.i.length==0||Sv(this.h)||qv(this))};function qv(u,h){var p;h?p=h.l:p=u.U++;const g=fr(u.I);Se(g,"SID",u.K),Se(g,"RID",p),Se(g,"AID",u.T),Za(u,g),u.m&&u.o&&Ff(g,u.m,u.o),p=new Gr(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),h&&(u.i=h.D.concat(u.i)),h=Wv(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Mf(u.h,p),Df(p,g,h)}function Za(u,h){u.H&&U(u.H,function(p,g){Se(h,g,p)}),u.l&&kv({},function(p,g){Se(h,g,p)})}function Wv(u,h,p){p=Math.min(u.i.length,p);var g=u.l?m(u.l.Na,u.l,u):null;e:{var D=u.i;let M=-1;for(;;){const W=["count="+p];M==-1?0<p?(M=D[0].g,W.push("ofs="+M)):M=0:W.push("ofs="+M);let Ee=!0;for(let gt=0;gt<p;gt++){let pe=D[gt].g;const Tt=D[gt].map;if(pe-=M,0>pe)M=Math.max(0,D[gt].g-100),Ee=!1;else try{f1(Tt,W,"req"+pe+"_")}catch{g&&g(Tt)}}if(Ee){g=W.join("&");break e}}}return u=u.i.splice(0,p),h.D=u,g}function Gv(u){if(!u.g&&!u.u){u.Y=1;var h=u.Fa;It||te(),q||(It(),q=!0),Z.add(h,u),u.v=0}}function jf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=$a(m(u.Fa,u),Qv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Hv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=$a(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),yc(this),Hv(this))};function Bf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Hv(u){u.g=new Gr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var h=fr(u.qa);Se(h,"RID","rpc"),Se(h,"SID",u.K),Se(h,"AID",u.T),Se(h,"CI",u.F?"0":"1"),!u.F&&u.ja&&Se(h,"TO",u.ja),Se(h,"TYPE","xmlhttp"),Za(u,h),u.m&&u.o&&Ff(h,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=mc(fr(h)),p.m=null,p.P=!0,wv(p,u)}t.Za=function(){this.C!=null&&(this.C=null,yc(this),jf(this),Dt(19))};function wc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Kv(u,h){var p=null;if(u.g==h){wc(u),Bf(u),u.g=null;var g=2}else if(Lf(u.h,h))p=h.D,Av(u.h,h),g=1;else return;if(u.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=u.B;g=uc(),Be(g,new gv(g,p)),vc(u)}else Gv(u);else if(D=h.s,D==3||D==0&&0<h.X||!(g==1&&_1(u,h)||g==2&&jf(u)))switch(p&&0<p.length&&(h=u.h,h.i=h.i.concat(p)),D){case 1:Yi(u,5);break;case 4:Yi(u,10);break;case 3:Yi(u,6);break;default:Yi(u,2)}}}function Qv(u,h){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*h}function Yi(u,h){if(u.j.info("Error code "+h),h==2){var p=m(u.fb,u),g=u.Xa;const D=!g;g=new Qi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fc(g,"https"),mc(g),D?c1(g.toString(),p):d1(g.toString(),p)}else Dt(2);u.G=0,u.l&&u.l.sa(h),Yv(u),$v(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Yv(u){if(u.G=0,u.ka=[],u.l){const h=Pv(u.h);(h.length!=0||u.i.length!=0)&&(b(u.ka,h),b(u.ka,u.i),u.h.i.length=0,A(u.i),u.i.length=0),u.l.ra()}}function Xv(u,h,p){var g=p instanceof Qi?fr(p):new Qi(p);if(g.g!="")h&&(g.g=h+"."+g.g),pc(g,g.s);else{var D=a.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var M=new Qi(null);g&&fc(M,g),h&&(M.g=h),D&&pc(M,D),p&&(M.l=p),g=M}return p=u.D,h=u.ya,p&&h&&Se(g,p,h),Se(g,"VER",u.la),Za(u,g),g}function Jv(u,h,p){if(h&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=u.Ca&&!u.pa?new ze(new Qa({eb:p})):new ze(u.pa),h.Ha(u.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zv(){}t=Zv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ec(){}Ec.prototype.g=function(u,h){return new sn(u,h)};function sn(u,h){ee.call(this),this.g=new zv(h),this.l=u,this.h=h&&h.messageUrlParams||null,u=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(u?u["X-WebChannel-Content-Type"]=h.messageContentType:u={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(u?u["X-WebChannel-Client-Profile"]=h.va:u={"X-WebChannel-Client-Profile":h.va}),this.g.S=u,(u=h&&h.Sb)&&!v(u)&&(this.g.m=u),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,u=this.h,u!==null&&h in u&&(u=this.h,h in u&&delete u[h])),this.j=new eo(this)}R(sn,ee),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){Uf(this.g)},sn.prototype.o=function(u){var h=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=Pf(u),u=p);h.i.push(new e1(h.Ya++,u)),h.G==3&&vc(h)},sn.prototype.N=function(){this.g.l=null,delete this.j,Uf(this.g),delete this.g,sn.aa.N.call(this)};function ew(u){Cf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var h=u.__sm__;if(h){e:{for(const p in h){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,h=h!==null&&u in h?h[u]:void 0),this.data=h}else this.data=u}R(ew,Cf);function tw(){bf.call(this),this.status=1}R(tw,bf);function eo(u){this.g=u}R(eo,Zv),eo.prototype.ua=function(){Be(this.g,"a")},eo.prototype.ta=function(u){Be(this.g,new ew(u))},eo.prototype.sa=function(u){Be(this.g,new tw)},eo.prototype.ra=function(){Be(this.g,"b")},Ec.prototype.createWebChannel=Ec.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,GR=function(){return new Ec},WR=function(){return uc()},qR=Hi,jm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},cc.NO_ERROR=0,cc.TIMEOUT=8,cc.HTTP_ERROR=6,cd=cc,_v.COMPLETE="complete",$R=_v,hv.EventType=Ba,Ba.OPEN="a",Ba.CLOSE="b",Ba.ERROR="c",Ba.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Sl=hv,zR=Qa,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,BR=ze}).apply(typeof zc<"u"?zc:typeof self<"u"?self:typeof window<"u"?window:{});const xE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new Uh("@firebase/firestore");function fo(){return Ri.logLevel}function GO(t){Ri.setLogLevel(t)}function B(t,...e){if(Ri.logLevel<=se.DEBUG){const n=e.map(x_);Ri.debug(`Firestore (${Sa}): ${t}`,...n)}}function Xe(t,...e){if(Ri.logLevel<=se.ERROR){const n=e.map(x_);Ri.error(`Firestore (${Sa}): ${t}`,...n)}}function zn(t,...e){if(Ri.logLevel<=se.WARN){const n=e.map(x_);Ri.warn(`Firestore (${Sa}): ${t}`,...n)}}function x_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Sa}) INTERNAL ASSERTION FAILED: `+t;throw Xe(e),new Error(e)}function X(t,e){t||K()}function HO(t,e){t||K()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class QO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YO{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new dt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new HR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new ut(e)}}class XO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class JO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new XO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(X(typeof n.token=="string"),this.R=n.token,new ZO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function ta(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function QR(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ne(0,0))}static max(){return new J(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends gu{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const nV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends gu{construct(e,n,r){return new be(e,n,r)}static isValidIdentifier(e){return nV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(n)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ae.fromString(e))}static fromName(e){return new G(ae.fromString(e).popFirst(5))}static empty(){return new G(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ae(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Bm(t){return t.fields.find(e=>e.kind===2)}function ns(t){return t.fields.filter(e=>e.kind!==2)}Zd.UNKNOWN_ID=-1;class dd{constructor(e,n){this.fieldPath=e,this.kind=n}}class _u{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new _u(0,mn.min())}}function YR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new mn(i,G.empty(),e)}function XR(t){return new mn(t.readTime,t.key,-1)}class mn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mn(J.min(),G.empty(),-1)}static max(){return new mn(J.max(),G.empty(),-1)}}function N_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==JR)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new dt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Fl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=D_(r.target.error);this.V.reject(new Fl(e,i))}}static open(e,n,r,i){try{return new Bh(n,e.transaction(i,r))}catch(s){throw new Fl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(B("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new iV(n)}}class sr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,sr.S(De())===12.2&&Xe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return B("SimpleDb","Removing database:",e),is(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!fu())return!1;if(sr.C())return!0;const e=De(),n=sr.S(e),r=0<n&&n<10,i=eA(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(B("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Fl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new j(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Fl(e,o))},i.onupgradeneeded=s=>{B("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{B("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Bh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),V.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(B("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function eA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class rV{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return is(this.B.delete())}}class Fl extends j{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Fi(t){return t.name==="IndexedDbTransactionError"}class iV{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(B("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(B("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),is(r)}add(e){return B("SimpleDb","ADD",this.store.name,e,e),is(this.store.add(e))}get(e){return is(this.store.get(e)).next(n=>(n===void 0&&(n=null),B("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return B("SimpleDb","DELETE",this.store.name,e),is(this.store.delete(e))}count(){return B("SimpleDb","COUNT",this.store.name),is(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new V((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new V((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){B("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new V((r,i)=>{n.onerror=s=>{const o=D_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new V((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new rV(a),c=n(a.primaryKey,a.value,l);if(c instanceof V){const d=c.catch(f=>(l.done(),V.reject(f)));r.push(d)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>V.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function is(t){return new V((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=D_(r.target.error);n(i)}})}let NE=!1;function D_(t){const e=sr.S(De());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return NE||(NE=!0,setTimeout(()=>{throw r},0)),r}}return t}class sV{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){B("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{B("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Fi(n)?B("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Mi(n)}await this.X(6e4)})}}class oV{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return V.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return B("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(B("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=XR(s);N_(o,r)>0&&(r=o)}),new mn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xt.oe=-1;function Uu(t){return t==null}function yu(t){return t===0&&1/t==-1/0}function tA(t){return typeof t=="number"&&Number.isInteger(t)&&!yu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=DE(e)),e=aV(t.get(n),e);return DE(e)}function aV(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function DE(t){return t+""}function er(t){const e=t.length;if(X(e>=2),e===2)return X(t.charAt(0)===""&&t.charAt(1)===""),ae.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&K(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:K()}s=o+2}return new ae(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e){return[t,jt(e)]}function nA(t,e,n){return[t,jt(e),n]}const lV={},uV=["prefixPath","collectionGroup","readTime","documentId"],cV=["prefixPath","collectionGroup","documentId"],dV=["collectionGroup","readTime","prefixPath","documentId"],hV=["canonicalId","targetId"],fV=["targetId","path"],pV=["path","targetId"],mV=["collectionId","parent"],gV=["indexId","uid"],_V=["uid","sequenceNumber"],yV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vV=["indexId","uid","orderedDocumentKey"],wV=["userId","collectionPath","documentId"],EV=["userId","collectionPath","largestBatchId"],IV=["userId","collectionGroup","largestBatchId"],rA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],TV=[...rA,"documentOverlays"],iA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],sA=iA,oA=[...sA,"indexConfiguration","indexState","indexEntries"],SV=oA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm extends ZR{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function pt(t,e){const n=H(t);return sr.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $c(this.root,e,this.comparator,!1)}getReverseIterator(){return new $c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $c(this.root,e,this.comparator,!0)}}class $c{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??yt.RED,this.left=i??yt.EMPTY,this.right=s??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new yt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new LE(this.data.getIterator())}getIteratorFrom(e){return new LE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class LE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function oo(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new we(be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ta(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lA("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const AV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(X(!!t),typeof t=="string"){let e=0;const n=AV.exec(t);if(X(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ai(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function O_(t){const e=t.mapValue.fields.__previous_value__;return zh(e)?O_(e):e}function vu(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},fd={nullValue:"NULL_VALUE"};function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zh(t)?4:uA(t)?9007199254740991:10:K()}function lr(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vu(t).isEqual(vu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Or(i.timestampValue),a=Or(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ai(i.bytesValue).isEqual(Ai(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),a=qe(s.doubleValue);return o===a?yu(o)===yu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ta(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(VE(o)!==VE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!lr(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function wu(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=Cs(t),r=Cs(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=qe(s.integerValue||s.doubleValue),l=qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return ME(t.timestampValue,e.timestampValue);case 4:return ME(vu(t),vu(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ai(s),l=Ai(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=ne(a[c],l[c]);if(d!==0)return d}return ne(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(qe(s.latitude),qe(o.latitude));return a!==0?a:ne(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const d=ki(a[c],l[c]);if(d)return d}return ne(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ui.mapValue&&o===ui.mapValue)return 0;if(s===ui.mapValue)return 1;if(o===ui.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=ne(l[f],d[f]);if(m!==0)return m;const y=ki(a[l[f]],c[d[f]]);if(y!==0)return y}return ne(l.length,d.length)}(t.mapValue,e.mapValue);default:throw K()}}function ME(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Or(t),r=Or(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function na(t){return $m(t)}function $m(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ai(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$m(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$m(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function bs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qm(t){return!!t&&"integerValue"in t}function Eu(t){return!!t&&"arrayValue"in t}function FE(t){return!!t&&"nullValue"in t}function UE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pd(t){return!!t&&"mapValue"in t}function Ul(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ul(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ul(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function kV(t){return"nullValue"in t?fd:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?bs(Pi.empty(),G.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:K()}function CV(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?bs(Pi.empty(),G.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?ui:K()}function jE(t,e){const n=ki(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function BE(t,e){const n=ki(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ul(n)}setAll(e){let n=be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ul(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(Ul(this.value))}}function cA(t){const e=[];return qs(t.fields,(n,r)=>{const i=new be([n]);if(pd(r)){const s=cA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ae(e,0,J.min(),J.min(),J.min(),vt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ae(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Ae(e,2,n,J.min(),J.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new Ae(e,3,n,J.min(),J.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.position=e,this.inclusive=n}}function zE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ki(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $E(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n="asc"){this.field=e,this.dir=n}}function bV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{}class le extends dA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xV(e,n,r):n==="array-contains"?new OV(e,r):n==="in"?new _A(e,r):n==="not-in"?new VV(e,r):n==="array-contains-any"?new LV(e,r):new le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NV(e,r):new DV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ki(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _e extends dA{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new _e(e,n)}matches(e){return ra(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ra(t){return t.op==="and"}function Wm(t){return t.op==="or"}function V_(t){return hA(t)&&ra(t)}function hA(t){for(const e of t.filters)if(e instanceof _e)return!1;return!0}function Gm(t){if(t instanceof le)return t.field.canonicalString()+t.op.toString()+na(t.value);if(V_(t))return t.filters.map(e=>Gm(e)).join(",");{const e=t.filters.map(n=>Gm(n)).join(",");return`${t.op}(${e})`}}function fA(t,e){return t instanceof le?function(r,i){return i instanceof le&&r.op===i.op&&r.field.isEqual(i.field)&&lr(r.value,i.value)}(t,e):t instanceof _e?function(r,i){return i instanceof _e&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&fA(o,i.filters[a]),!0):!1}(t,e):void K()}function pA(t,e){const n=t.filters.concat(e);return _e.create(n,t.op)}function mA(t){return t instanceof le?function(n){return`${n.field.canonicalString()} ${n.op} ${na(n.value)}`}(t):t instanceof _e?function(n){return n.op.toString()+" {"+n.getFilters().map(mA).join(" ,")+"}"}(t):"Filter"}class xV extends le{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class NV extends le{constructor(e,n){super(e,"in",n),this.keys=gA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DV extends le{constructor(e,n){super(e,"not-in",n),this.keys=gA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class OV extends le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eu(n)&&wu(n.arrayValue,this.value)}}class _A extends le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wu(this.value.arrayValue,n)}}class VV extends le{constructor(e,n){super(e,"not-in",n)}matches(e){if(wu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wu(this.value.arrayValue,n)}}class LV extends le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Hm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new MV(t,e,n,r,i,s,o)}function xs(t){const e=H(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>na(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>na(r)).join(",")),e.ue=n}return e.ue}function ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$E(t.startAt,e.startAt)&&$E(t.endAt,e.endAt)}function eh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function th(t,e){return t.filters.filter(n=>n instanceof le&&n.field.isEqual(e))}function qE(t,e,n){let r=fd,i=!0;for(const s of th(t,e)){let o=fd,a=!0;switch(s.op){case"<":case"<=":o=kV(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=fd}jE({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];jE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function WE(t,e,n){let r=ui,i=!0;for(const s of th(t,e)){let o=ui,a=!0;switch(s.op){case">=":case">":o=CV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ui}BE({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];BE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function yA(t,e,n,r,i,s,o,a){return new jr(t,e,n,r,i,s,o,a)}function Ra(t){return new jr(t)}function GE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function L_(t){return t.collectionGroup!==null}function Fo(t){const e=H(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new we(be.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Iu(s,r))}),n.has(be.keyField().canonicalString())||e.ce.push(new Iu(be.keyField(),r))}return e.ce}function Bt(t){const e=H(t);return e.le||(e.le=FV(e,Fo(t))),e.le}function FV(t,e){if(t.limitType==="F")return Hm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Iu(i.field,s)});const n=t.endAt?new Ci(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ci(t.startAt.position,t.startAt.inclusive):null;return Hm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Km(t,e){const n=t.filters.concat([e]);return new jr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nh(t,e,n){return new jr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bu(t,e){return ju(Bt(t),Bt(e))&&t.limitType===e.limitType}function vA(t){return`${xs(Bt(t))}|lt:${t.limitType}`}function po(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>mA(i)).join(", ")}]`),Uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>na(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>na(i)).join(",")),`Target(${r})`}(Bt(t))}; limitType=${t.limitType})`}function zu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Fo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=zE(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Fo(r),i)||r.endAt&&!function(o,a,l){const c=zE(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Fo(r),i))}(t,e)}function wA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function EA(t){return(e,n)=>{let r=!1;for(const i of Fo(t)){const s=UV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function UV(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?ki(l,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV=new Te(G.comparator);function Zt(){return jV}const IA=new Te(G.comparator);function Rl(...t){let e=IA;for(const n of t)e=e.insert(n.key,n);return e}function TA(t){let e=IA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function tr(){return jl()}function SA(){return jl()}function jl(){return new Ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const BV=new Te(G.comparator),zV=new we(G.comparator);function re(...t){let e=zV;for(const n of t)e=e.add(n);return e}const $V=new we(ne);function M_(){return $V}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yu(e)?"-0":e}}function AA(t){return{integerValue:""+t}}function PA(t,e){return tA(e)?AA(e):RA(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this._=void 0}}function qV(t,e,n){return t instanceof ia?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zh(s)&&(s=O_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ns?CA(t,e):t instanceof Ds?bA(t,e):function(i,s){const o=kA(i,s),a=HE(o)+HE(i.Pe);return qm(o)&&qm(i.Pe)?AA(a):RA(i.serializer,a)}(t,e)}function WV(t,e,n){return t instanceof Ns?CA(t,e):t instanceof Ds?bA(t,e):n}function kA(t,e){return t instanceof sa?function(r){return qm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ia extends $h{}class Ns extends $h{constructor(e){super(),this.elements=e}}function CA(t,e){const n=xA(e);for(const r of t.elements)n.some(i=>lr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ds extends $h{constructor(e){super(),this.elements=e}}function bA(t,e){let n=xA(e);for(const r of t.elements)n=n.filter(i=>!lr(i,r));return{arrayValue:{values:n}}}class sa extends $h{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function HE(t){return qe(t.integerValue||t.doubleValue)}function xA(t){return Eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.field=e,this.transform=n}}function GV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ns&&i instanceof Ns||r instanceof Ds&&i instanceof Ds?ta(r.elements,i.elements,lr):r instanceof sa&&i instanceof sa?lr(r.Pe,i.Pe):r instanceof ia&&i instanceof ia}(t.transform,e.transform)}class HV{constructor(e,n){this.version=e,this.transformResults=n}}class xe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function md(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qh{}function NA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Pa(t.key,xe.none()):new Aa(t.key,t.data,xe.none());{const n=t.data,r=vt.empty();let i=new we(be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Br(t.key,r,new Jt(i.toArray()),xe.none())}}function KV(t,e,n){t instanceof Aa?function(i,s,o){const a=i.value.clone(),l=QE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(i,s,o){if(!md(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=QE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(DA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bl(t,e,n,r){return t instanceof Aa?function(s,o,a,l){if(!md(s.precondition,o))return a;const c=s.value.clone(),d=YE(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(s,o,a,l){if(!md(s.precondition,o))return a;const c=YE(s.fieldTransforms,l,o),d=o.data;return d.setAll(DA(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return md(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function QV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=kA(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function KE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ta(r,i,(s,o)=>GV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends qh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Br extends qh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function DA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function QE(t,e,n){const r=new Map;X(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,WV(o,a,n[i]))}return r}function YE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qV(s,o,e))}return r}class Pa extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class F_ extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&KV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=SA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=NA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ta(this.mutations,e.mutations,(n,r)=>KE(n,r))&&ta(this.baseMutations,e.baseMutations,(n,r)=>KE(n,r))}}class j_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){X(e.mutations.length===r.length);let i=function(){return BV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new j_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,ce;function OA(t){switch(t){default:return K();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function VA(t){if(t===void 0)return Xe("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ze.OK:return L.OK;case Ze.CANCELLED:return L.CANCELLED;case Ze.UNKNOWN:return L.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return L.INTERNAL;case Ze.UNAVAILABLE:return L.UNAVAILABLE;case Ze.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ze.NOT_FOUND:return L.NOT_FOUND;case Ze.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ze.ABORTED:return L.ABORTED;case Ze.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ze.DATA_LOSS:return L.DATA_LOSS;default:return K()}}(ce=Ze||(Ze={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XV=new ys([4294967295,4294967295],0);function XE(t){const e=LA().encode(t),n=new jR;return n.update(e),new Uint8Array(n.digest())}function JE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ys([n,r],0),new ys([i,s],0)]}class z_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Al(`Invalid padding: ${n}`);if(r<0)throw new Al(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Al(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Al(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ys.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ys.fromNumber(r)));return i.compare(XV)===1&&(i=new ys([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=XE(e),[r,i]=JE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new z_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=XE(e),[r,i]=JE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Al extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Wu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qu(J.min(),i,new Te(ne),Zt(),re())}}class Wu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wu(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class MA{constructor(e,n){this.targetId=e,this.me=n}}class FA{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ZE{constructor(){this.fe=0,this.ge=tI(),this.pe=st.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Wu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=tI()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class JV{constructor(e){this.Le=e,this.Be=new Map,this.ke=Zt(),this.qe=eI(),this.Qe=new Te(ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(eh(s))if(r===0){const o=new G(s.path);this.Ue(n,o,Ae.newNoDocument(o,J.min()))}else X(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ai(r).toUint8Array()}catch(l){if(l instanceof lA)return zn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new z_(o,i,s)}catch(l){return zn(l instanceof Al?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&eh(a.target)){const l=new G(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ae.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=re();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new qu(e,n,this.Qe,this.ke,r);return this.ke=Zt(),this.qe=eI(),this.Qe=new Te(ne),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ZE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new we(ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ZE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function eI(){return new Te(G.comparator)}function tI(){return new Te(G.comparator)}const ZV={asc:"ASCENDING",desc:"DESCENDING"},eL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tL={and:"AND",or:"OR"};class nL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qm(t,e){return t.useProto3Json||Uu(e)?e:{value:e}}function oa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rL(t,e){return oa(t,e.toTimestamp())}function Je(t){return X(!!t),J.fromTimestamp(function(n){const r=Or(n);return new Ne(r.seconds,r.nanos)}(t))}function $_(t,e){return Ym(t,e).canonicalString()}function Ym(t,e){const n=function(i){return new ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function jA(t){const e=ae.fromString(t);return X(YA(e)),e}function Tu(t,e){return $_(t.databaseId,e.path)}function or(t,e){const n=jA(e);if(n.get(1)!==t.databaseId.projectId)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G($A(n))}function BA(t,e){return $_(t.databaseId,e)}function zA(t){const e=jA(t);return e.length===4?ae.emptyPath():$A(e)}function Xm(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $A(t){return X(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function nI(t,e,n){return{name:Tu(t,e),fields:n.value.mapValue.fields}}function qA(t,e,n){const r=or(t,e.name),i=Je(e.updateTime),s=e.createTime?Je(e.createTime):J.min(),o=new vt({mapValue:{fields:e.fields}}),a=Ae.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function iL(t,e){return"found"in e?function(r,i){X(!!i.found),i.found.name,i.found.updateTime;const s=or(r,i.found.name),o=Je(i.found.updateTime),a=i.found.createTime?Je(i.found.createTime):J.min(),l=new vt({mapValue:{fields:i.found.fields}});return Ae.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){X(!!i.missing),X(!!i.readTime);const s=or(r,i.missing),o=Je(i.readTime);return Ae.newNoDocument(s,o)}(t,e):K()}function sL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(X(d===void 0||typeof d=="string"),st.fromBase64String(d||"")):(X(d===void 0||d instanceof Buffer||d instanceof Uint8Array),st.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?L.UNKNOWN:VA(c.code);return new j(d,c.message||"")}(o);n=new FA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=or(t,r.document.name),s=Je(r.document.updateTime),o=r.document.createTime?Je(r.document.createTime):J.min(),a=new vt({mapValue:{fields:r.document.fields}}),l=Ae.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new gd(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=or(t,r.document),s=r.readTime?Je(r.readTime):J.min(),o=Ae.newNoDocument(i,s),a=r.removedTargetIds||[];n=new gd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=or(t,r.document),s=r.removedTargetIds||[];n=new gd([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new YV(i,s),a=r.targetId;n=new MA(a,o)}}return n}function Su(t,e){let n;if(e instanceof Aa)n={update:nI(t,e.key,e.value)};else if(e instanceof Pa)n={delete:Tu(t,e.key)};else if(e instanceof Br)n={update:nI(t,e.key,e.data),updateMask:dL(e.fieldMask)};else{if(!(e instanceof F_))return K();n={verify:Tu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ds)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:rL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function Jm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?xe.updateTime(Je(s.updateTime)):s.exists!==void 0?xe.exists(s.exists):xe.none()}(e.currentDocument):xe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)X(a.setToServerValue==="REQUEST_TIME"),l=new ia;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new Ns(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new Ds(d)}else"increment"in a?l=new sa(o,a.increment):K();const c=be.fromServerFormat(a.fieldPath);return new $u(c,l)}(t,i)):[];if(e.update){e.update.name;const i=or(t,e.update.name),s=new vt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Jt(c.map(d=>be.fromServerFormat(d)))}(e.updateMask);return new Br(i,s,o,n,r)}return new Aa(i,s,n,r)}if(e.delete){const i=or(t,e.delete);return new Pa(i,n)}if(e.verify){const i=or(t,e.verify);return new F_(i,n)}return K()}function oL(t,e){return t&&t.length>0?(X(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Je(i.updateTime):Je(s);return o.isEqual(J.min())&&(o=Je(s)),new HV(o,i.transformResults||[])}(n,e))):[]}function WA(t,e){return{documents:[BA(t,e.path)]}}function GA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=BA(t,i);const s=function(c){if(c.length!==0)return QA(_e.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:mo(m.field),direction:lL(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Qm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function HA(t){let e=zA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){X(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=KA(f);return m instanceof _e&&V_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(R){return new Iu(go(R.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Uu(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,y=f.values||[];return new Ci(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,y=f.values||[];return new Ci(y,m)}(n.endAt)),yA(e,i,o,s,a,"F",l,c)}function aL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function KA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=go(n.unaryFilter.field);return le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=go(n.unaryFilter.field);return le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=go(n.unaryFilter.field);return le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=go(n.unaryFilter.field);return le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return le.create(go(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _e.create(n.compositeFilter.filters.map(r=>KA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function lL(t){return ZV[t]}function uL(t){return eL[t]}function cL(t){return tL[t]}function mo(t){return{fieldPath:t.canonicalString()}}function go(t){return be.fromServerFormat(t.fieldPath)}function QA(t){return t instanceof le?function(n){if(n.op==="=="){if(UE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NAN"}};if(FE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(UE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NAN"}};if(FE(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(n.field),op:uL(n.op),value:n.value}}}(t):t instanceof _e?function(n){const r=n.getFilters().map(i=>QA(i));return r.length===1?r[0]:{compositeFilter:{op:cL(n.op),filters:r}}}(t):K()}function dL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,r,i,s=J.min(),o=J.min(),a=st.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.ct=e}}function hL(t,e){let n;if(e.document)n=qA(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),i=Vs(e.noDocument.readTime);n=Ae.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const r=G.fromSegments(e.unknownDocument.path),i=Vs(e.unknownDocument.version);n=Ae.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ne(i[0],i[1]);return J.fromTimestamp(s)}(e.readTime)),n}function rI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Tu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:oa(s,o.version.toTimestamp()),createTime:oa(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Os(e.version)};else{if(!e.isUnknownDocument())return K();r.unknownDocument={path:n.path.toArray(),version:Os(e.version)}}return r}function rh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Os(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Vs(t){const e=new Ne(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function ss(t,e){const n=(e.baseMutations||[]).map(s=>Jm(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Jm(t.ct,s)),i=Ne.fromMillis(e.localWriteTimeMs);return new U_(e.batchId,i,n,r)}function Pl(t){const e=Vs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Vs(t.lastLimboFreeSnapshotVersion):J.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return X(s.documents.length===1),Bt(Ra(zA(s.documents[0])))}(t.query):function(s){return Bt(HA(s))}(t.query),new wr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,st.fromBase64String(t.resumeToken))}function JA(t,e){const n=Os(e.snapshotVersion),r=Os(e.lastLimboFreeSnapshotVersion);let i;i=eh(e.target)?WA(t.ct,e.target):GA(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:xs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function q_(t){const e=HA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nh(e,e.limit,"L"):e}function Rp(t,e){return new B_(e.largestBatchId,Jm(t.ct,e.overlayMutation))}function iI(t,e){const n=e.path.lastSegment();return[t,jt(e.path.popLast()),n]}function sI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Os(r.readTime),documentKey:jt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{getBundleMetadata(e,n){return oI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Vs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return oI(e).put(function(i){return{bundleId:i.id,createTime:Os(Je(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return aI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:q_(s.bundledQuery),readTime:Vs(s.readTime)}}(r)})}saveNamedQuery(e,n){return aI(e).put(function(i){return{name:i.name,readTime:Os(Je(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function oI(t){return pt(t,"bundles")}function aI(t){return pt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Wh(e,r)}getOverlay(e,n){return ll(e).get(iI(this.userId,n)).next(r=>r?Rp(this.serializer,r):null)}getOverlays(e,n){const r=tr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new B_(n,o);i.push(this.ht(e,a))}),V.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(jt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ll(e).j("collectionPathOverlayIndex",a))}),V.waitFor(s)}getOverlaysForCollection(e,n,r){const i=tr(),s=jt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ll(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=Rp(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=tr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ll(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,d)=>{const f=Rp(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return ll(e).put(function(i,s,o){const[a,l,c]=iI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Su(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function ll(t){return pt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(qe(e.integerValue));else if("doubleValue"in e){const r=qe(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),yu(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=Or(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Ai(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?uA(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):K()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),G.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}os.bt=new os;function pL(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function lI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=pL(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class mL{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=lI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=lI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class gL{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class _L{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class ul{constructor(){this.Gt=new mL,this.zt=new gL(this.Gt),this.jt=new _L(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new as(this.indexId,this.documentKey,this.arrayValue,r)}}function Yr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=uI(t.arrayValue,e.arrayValue),n!==0?n:(n=uI(t.directionalValue,e.directionalValue),n!==0?n:G.comparator(t.documentKey,e.documentKey)))}function uI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.Yt=new we((n,r)=>be.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(X(e.collectionGroup===this.collectionId),this.en)return!1;const n=Bm(e);if(n!==void 0&&!this.nn(n))return!1;const r=ns(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new we(be.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new dd(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new dd(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new dd(r.field,r.dir==="asc"?0:1)));return new Zd(Zd.UNKNOWN_ID,this.collectionId,n,_u.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t){var e,n;if(X(t instanceof le||t instanceof _e),t instanceof le){if(t instanceof _A){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>le.create(t.field,"==",s)))||[];return _e.create(i,"or")}return t}const r=t.filters.map(i=>ZA(i));return _e.create(r,t.op)}function yL(t){if(t.getFilters().length===0)return[];const e=tg(ZA(t));return X(eP(e)),Zm(e)||eg(e)?[e]:e.getFilters()}function Zm(t){return t instanceof le}function eg(t){return t instanceof _e&&V_(t)}function eP(t){return Zm(t)||eg(t)||function(n){if(n instanceof _e&&Wm(n)){for(const r of n.getFilters())if(!Zm(r)&&!eg(r))return!1;return!0}return!1}(t)}function tg(t){if(X(t instanceof le||t instanceof _e),t instanceof le)return t;if(t.filters.length===1)return tg(t.filters[0]);const e=t.filters.map(r=>tg(r));let n=_e.create(e,t.op);return n=ih(n),eP(n)?n:(X(n instanceof _e),X(ra(n)),X(n.filters.length>1),n.filters.reduce((r,i)=>W_(r,i)))}function W_(t,e){let n;return X(t instanceof le||t instanceof _e),X(e instanceof le||e instanceof _e),n=t instanceof le?e instanceof le?function(i,s){return _e.create([i,s],"and")}(t,e):dI(t,e):e instanceof le?dI(e,t):function(i,s){if(X(i.filters.length>0&&s.filters.length>0),ra(i)&&ra(s))return pA(i,s.getFilters());const o=Wm(i)?i:s,a=Wm(i)?s:i,l=o.filters.map(c=>W_(c,a));return _e.create(l,"or")}(t,e),ih(n)}function dI(t,e){if(ra(e))return pA(e,t.getFilters());{const n=e.filters.map(r=>W_(t,r));return _e.create(n,"or")}}function ih(t){if(X(t instanceof le||t instanceof _e),t instanceof le)return t;const e=t.getFilters();if(e.length===1)return ih(e[0]);if(hA(t))return t;const n=e.map(i=>ih(i)),r=[];return n.forEach(i=>{i instanceof le?r.push(i):i instanceof _e&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:_e.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(){this._n=new G_}addToCollectionParentIndex(e,n){return this._n.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(mn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class G_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new we(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Uint8Array(0);class wL{constructor(e,n){this.databaseId=n,this.an=new G_,this.un=new Ui(r=>xs(r),(r,i)=>ju(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:jt(i)};return hI(e).put(s)}return V.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[QR(n),""],!1,!0);return hI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(er(o.parent))}return r})}addFieldIndex(e,n){const r=cl(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=lo(e);return s.next(a=>{o.put(sI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=cl(e),i=lo(e),s=ao(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=cl(e),r=ao(e),i=lo(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return V.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new cI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=ao(e);let i=!0;const s=new Map;return V.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=re();const a=[];return V.forEach(s,(l,c)=>{B("IndexedDbIndexManager",`Using index ${function(I){return`id=${I.indexId}|cg=${I.collectionGroup}|f=${I.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`}(l)} to execute ${xs(n)}`);const d=function(I,N){const F=Bm(N);if(F===void 0)return null;for(const U of th(I,F.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(c,l),f=function(I,N){const F=new Map;for(const U of ns(N))for(const E of th(I,U.fieldPath))switch(E.op){case"==":case"in":F.set(U.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return F.set(U.fieldPath.canonicalString(),E.value),Array.from(F.values())}return null}(c,l),m=function(I,N){const F=[];let U=!0;for(const E of ns(N)){const _=E.kind===0?qE(I,E.fieldPath,I.startAt):WE(I,E.fieldPath,I.startAt);F.push(_.value),U&&(U=_.inclusive)}return new Ci(F,U)}(c,l),y=function(I,N){const F=[];let U=!0;for(const E of ns(N)){const _=E.kind===0?WE(I,E.fieldPath,I.endAt):qE(I,E.fieldPath,I.endAt);F.push(_.value),U&&(U=_.inclusive)}return new Ci(F,U)}(c,l),R=this.hn(l,c,m),A=this.hn(l,c,y),b=this.Pn(l,c,f),w=this.In(l.indexId,d,R,m.inclusive,A,y.inclusive,b);return V.forEach(w,v=>r.G(v,n.limit).next(I=>{I.forEach(N=>{const F=G.fromSegments(N.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return V.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=yL(_e.create(e.filters,"and")).map(r=>Hm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),d=[];for(let f=0;f<l;++f){const m=n?this.Tn(n[f/c]):qc,y=this.En(e,m,r[f%c],i),R=this.dn(e,m,s[f%c],o),A=a.map(b=>this.En(e,m,b,!0));d.push(...this.createRange(y,R,A))}return d}En(e,n,r,i){const s=new as(e,G.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new as(e,G.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new cI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return V.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new we(be.comparator),d=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new ul;for(const i of ns(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);os.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new ul;return os.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new ul;return os.bt.Pt(bs(this.databaseId,n),r.Ht(function(s){const o=ns(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new ul);let s=0;for(const o of ns(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&Eu(a))i=this.mn(i,o,a);else{const c=l.Ht(o.kind);os.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new ul;l.seed(a.Wt()),os.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof le&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=cl(e),i=lo(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return V.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,f){const m=f?new _u(f.sequenceNumber,new mn(Vs(f.readTime),new G(er(f.documentKey)),f.largestBatchId)):_u.empty(),y=d.fields.map(([R,A])=>new dd(be.fromServerFormat(R),A));return new Zd(d.indexId,d.collectionGroup,y,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ne(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=cl(e),s=lo(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>V.forEach(a,l=>s.put(sI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return V.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?V.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),V.forEach(a,l=>this.pn(e,i,l).next(c=>{const d=this.yn(s,l);return c.isEqual(d)?V.resolve():this.wn(e,s,l,c,d)}))))})}Sn(e,n,r,i){return ao(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return ao(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=ao(e);let s=new we(Yr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new as(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new we(Yr);const i=this.An(n,e);if(i==null)return r;const s=Bm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Eu(o))for(const a of o.arrayValue.values||[])r=r.add(new as(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new as(n.indexId,e.key,qc,i));return r}wn(e,n,r,i,s){B("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,d,f,m){const y=l.getIterator(),R=c.getIterator();let A=oo(y),b=oo(R);for(;A||b;){let w=!1,v=!1;if(A&&b){const I=d(A,b);I<0?v=!0:I>0&&(w=!0)}else A!=null?v=!0:w=!0;w?(f(b),b=oo(R)):v?(m(A),A=oo(y)):(A=oo(y),b=oo(R))}}(i,s,Yr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),V.waitFor(o)}gn(e){let n=1;return lo(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Yr(o,a)).filter((o,a,l)=>!a||Yr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Yr(o,e),l=Yr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,qc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,qc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Yr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(fI)}getMinOffset(e,n){return V.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||K())).next(fI)}}function hI(t){return pt(t,"collectionParents")}function ao(t){return pt(t,"indexEntries")}function cl(t){return pt(t,"indexConfiguration")}function lo(t){return pt(t,"indexState")}function fI(t){X(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;N_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new mn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ht{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ht(e,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(l.next(()=>{X(a===1)}));const c=[];for(const d of n.mutations){const f=nA(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return V.waitFor(s).next(()=>c)}function sh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw K();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht.DEFAULT_COLLECTION_PERCENTILE=10,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ht.DEFAULT=new Ht(41943040,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ht.DISABLED=new Ht(-1,0,0);class Gh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){X(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Gh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Xr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=_o(e),o=Xr(e);return o.add({}).next(a=>{X(typeof a=="number");const l=new U_(a,n,r,i),c=function(y,R,A){const b=A.baseMutations.map(v=>Su(y.ct,v)),w=A.mutations.map(v=>Su(y.ct,v));return{userId:R,batchId:A.batchId,localWriteTimeMs:A.localWriteTime.toMillis(),baseMutations:b,mutations:w}}(this.serializer,this.userId,l),d=[];let f=new we((m,y)=>ne(m.canonicalString(),y.canonicalString()));for(const m of i){const y=nA(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(y,lV))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),V.waitFor(d).next(()=>l)})}lookupMutationBatch(e,n){return Xr(e).get(n).next(r=>r?(X(r.userId===this.userId),ss(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?V.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Xr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(X(a.batchId>=r),s=ss(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Xr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Xr(e).U("userMutationsIndex",n).next(r=>r.map(i=>ss(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=hd(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return _o(e).J({range:i},(o,a,l)=>{const[c,d,f]=o,m=er(d);if(c===this.userId&&n.path.isEqual(m))return Xr(e).get(f).next(y=>{if(!y)throw K();X(y.userId===this.userId),s.push(ss(this.serializer,y))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(ne);const i=[];return n.forEach(s=>{const o=hd(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=_o(e).J({range:a},(c,d,f)=>{const[m,y,R]=c,A=er(y);m===this.userId&&s.path.isEqual(A)?r=r.add(R):f.done()});i.push(l)}),V.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=hd(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new we(ne);return _o(e).J({range:o},(l,c,d)=>{const[f,m,y]=l,R=er(m);f===this.userId&&r.isPrefixOf(R)?R.length===i&&(a=a.add(y)):d.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Xr(e).get(s).next(o=>{if(o===null)throw K();X(o.userId===this.userId),r.push(ss(this.serializer,o))}))}),V.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return tP(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),V.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return V.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return _o(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=er(s[1]);i.push(l)}else a.done()}).next(()=>{X(i.length===0)})})}containsKey(e,n){return nP(e,this.userId,n)}xn(e){return rP(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function nP(t,e,n){const r=hd(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return _o(t).J({range:s,H:!0},(a,l,c)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Xr(t){return pt(t,"mutations")}function _o(t){return pt(t,"documentMutations")}function rP(t){return pt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ls(0)}static Ln(){return new Ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new Ls(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>J.fromTimestamp(new Ne(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>uo(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(X(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return uo(e).J((o,a)=>{const l=Pl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>V.waitFor(s)).next(()=>i)}forEachTarget(e,n){return uo(e).J((r,i)=>{const s=Pl(i);n(s)})}Bn(e){return mI(e).get("targetGlobalKey").next(n=>(X(n!==null),n))}kn(e,n){return mI(e).put("targetGlobalKey",n)}qn(e,n){return uo(e).put(JA(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=xs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return uo(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Pl(a);ju(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ii(e);return n.forEach(o=>{const a=jt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),V.waitFor(i)}removeMatchingKeys(e,n,r){const i=ii(e);return V.forEach(n,s=>{const o=jt(s.path);return V.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ii(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ii(e);let s=re();return i.J({range:r,H:!0},(o,a,l)=>{const c=er(o[1]),d=new G(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=jt(n.path),i=IDBKeyRange.bound([r],[QR(r)],!1,!0);let s=0;return ii(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return uo(e).get(n).next(r=>r?Pl(r):null)}}function uo(t){return pt(t,"targets")}function mI(t){return pt(t,"targetGlobal")}function ii(t){return pt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class IL{constructor(e){this.Kn=e,this.buffer=new we(gI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();gI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class TL{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){B("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fi(n)?B("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Mi(n)}await this.zn(3e5)})}}class SL{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Xt.oe);const r=new IL(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(pI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),fo()<=se.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function RL(t,e){return new SL(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,n){this.db=e,this.garbageCollector=RL(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return Wc(e,r)}removeReference(e,n,r){return Wc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Wc(e,n)}er(e,n){return function(i,s){let o=!1;return rP(i).Y(a=>nP(i,a,s).next(l=>(l&&(o=!0),V.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,J.min()),ii(e).delete(function(f){return[0,jt(f.path)]}(o))))});i.push(l)}}).next(()=>V.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Wc(e,n)}Xn(e,n){const r=ii(e);let i,s=Xt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Xt.oe&&n(new G(er(i)),s),s=c,i=l):s=Xt.oe}).next(()=>{s!==Xt.oe&&n(new G(er(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Wc(t,e){return ii(t).put(function(r,i){return{targetId:0,path:jt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.changes=new Ui(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Xi(e).put(r)}removeEntry(e,n,r){return Xi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],rh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Ae.newInvalidDocument(n);return Xi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(dl(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Ae.newInvalidDocument(n)};return Xi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(dl(n))},(i,s)=>{r={document:this.nr(n,s),size:sh(s)}}).next(()=>r)}getEntries(e,n){let r=Zt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Zt(),i=new Te(G.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,sh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return V.resolve();let i=new we(vI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(dl(i.first()),dl(i.last())),o=i.getIterator();let a=o.getNext();return Xi(e).J({index:"documentKeyIndex",range:s},(l,c,d)=>{const f=G.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&vI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(dl(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),rh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Xi(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Zt();for(const f of c){const m=this.nr(G.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(zu(n,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=Zt();const o=yI(n,r),a=yI(n,mn.max());return Xi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,d)=>{const f=this.nr(G.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new kL(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return _I(e).get("remoteDocumentGlobalKey").next(n=>(X(!!n),n))}tr(e,n){return _I(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=hL(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(J.min())))return r}return Ae.newInvalidDocument(e)}}function sP(t){return new PL(t)}class kL extends iP{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ui(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new we((s,o)=>ne(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=rI(this.ar.serializer,o);i=i.add(s.path.popLast());const c=sh(l);r+=c-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=rI(this.ar.serializer,o.convertToNoDocument(J.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),V.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function _I(t){return pt(t,"remoteDocumentGlobal")}function Xi(t){return pt(t,"remoteDocumentsV14")}function dl(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function yI(t,e){const n=e.documentKey.path.toArray();return[t,rh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function vI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ne(n[s],r[s]),i)return i;return i=ne(n.length,r.length),i||(i=ne(n[n.length-2],r[r.length-2]),i||ne(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bl(r.mutation,i,Jt.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=tr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Rl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Zt();const o=jl(),a=function(){return jl()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Br)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Bl(d.mutation,c,d.mutation.getFieldMask(),Ne.now())):o.set(c.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new CL(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=jl();let i=new Te((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||Jt.empty();d=a.applyToLocalView(c,d),r.set(l,d);const f=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=SA();d.forEach(m=>{if(!s.has(m)){const y=NA(n.get(m),r.get(m));y!==null&&f.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):L_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(tr());let a=-1,l=s;return o.next(c=>V.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,re())).next(d=>({batchId:a,changes:TA(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Rl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Rl();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,l=>{const c=function(f,m){return new jr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ae.newInvalidDocument(d)))});let a=Rl();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&Bl(d.mutation,c,Jt.empty(),Ne.now()),zu(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return V.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Je(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:q_(i.bundledQuery),readTime:Je(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(){this.overlays=new Te(G.comparator),this.hr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=tr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=tr(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=tr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=tr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return V.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new B_(n,r));let s=this.hr.get(n);s===void 0&&(s=re(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.Pr=new we(at.Ir),this.Tr=new we(at.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new at(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new at(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new ae([])),r=new at(n,e),i=new at(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new ae([])),r=new at(n,e),i=new at(n,e+1);let s=re();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new at(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||ne(e.pr,n.pr)}static Er(e,n){return ne(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new we(at.Ir)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new U_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new at(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),i=new at(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(ne);return n.forEach(i=>{const s=new at(i,0),o=new at(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),V.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new at(new G(s),0);let a=new we(ne);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),V.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){X(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return V.forEach(n.mutations,i=>{const s=new at(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new at(n,0),i=this.wr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e){this.vr=e,this.docs=function(){return new Te(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(n))}getEntries(e,n){let r=Zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ae.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Zt();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||N_(XR(d),r)<=0||(i.has(d.key)||zu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Fr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new OL(this)}getSize(e){return V.resolve(this.size)}}class OL extends iP{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e){this.persistence=e,this.Mr=new Ui(n=>xs(n),ju),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Or=0,this.Nr=new H_,this.targetCount=0,this.Lr=Ls.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),V.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.qn(n),V.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n){this.Br={},this.overlays={},this.kr=new Xt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new VL(this),this.indexManager=new vL,this.remoteDocumentCache=function(i){return new DL(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new XA(n),this.$r=new bL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new NL(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new LL(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return V.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class LL extends ZR{constructor(e){super(),this.currentSequenceNumber=e}}class Hh{constructor(e){this.persistence=e,this.zr=new H_,this.jr=null}static Hr(e){return new Hh(e)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),V.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,r=>{const i=G.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return V.or([()=>V.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Bh("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",OE,{unique:!0}),l.createObjectStore("documentMutations")}(e),wI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=V.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),wI(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",OE,{unique:!0});const f=c.store("mutations"),m=d.map(y=>f.put(y));return V.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:wV});c.createIndex("collectionPathOverlayIndex",EV,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",IV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:uV});c.createIndex("documentKeyIndex",cV),c.createIndex("collectionGroupIndex",dV)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:gV}).createIndex("sequenceNumberIndex",_V,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:yV}).createIndex("documentKeyIndex",vV,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=sh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>V.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>V.forEach(a,l=>{X(l.userId===s.userId);const c=ss(this.serializer,l);return tP(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new ae(o),c=function(f){return[0,jt(f)]}(l);s.push(n.get(c).next(d=>d?V.resolve():(f=>n.put({targetId:0,path:jt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>V.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:mV});const r=n.store("collectionParents"),i=new G_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:jt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new ae(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const d=er(a);return s(d.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=Pl(i),o=JA(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new G(ae.fromString(f.document.name).popFirst(5)):f.noDocument?G.fromSegments(f.noDocument.path):f.unknownDocument?G.fromSegments(f.unknownDocument.path):K()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>V.waitFor(i))}si(e,n){const r=n.store("mutations"),i=sP(this.serializer),s=new aP(Hh.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let d=(c=a.get(l.userId))!==null&&c!==void 0?c:re();ss(this.serializer,l).keys().forEach(f=>d=d.add(f)),a.set(l.userId,d)}),V.forEach(a,(l,c)=>{const d=new ut(c),f=Wh.lt(this.serializer,d),m=s.getIndexManager(d),y=Gh.lt(d,this.serializer,m,s.referenceDelegate);return new oP(i,y,f,m).recalculateAndSaveOverlaysForDocumentKeys(new zm(n,Xt.oe),l).next()})})}}function wI(t){t.createObjectStore("targetDocuments",{keyPath:fV}).createIndex("documentTargetsIndex",pV,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",hV,{unique:!0}),t.createObjectStore("targetGlobal")}const Ap="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class K_{constructor(e,n,r,i,s,o,a,l,c,d,f=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=d,this.ui=f,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=m=>Promise.resolve(),!K_.D())throw new j(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new AL(this,i),this.Ti=n+"main",this.serializer=new XA(l),this.Ei=new sr(this.Ti,this.ui,new ML(this.serializer)),this.Qr=new EL(this.referenceDelegate,this.serializer),this.remoteDocumentCache=sP(this.serializer),this.$r=new fL,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,d===!1&&Xe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(L.FAILED_PRECONDITION,Ap);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Xt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Gc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Fi(e))return B("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return B("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return hl(e).get("owner").next(n=>V.resolve(this.Si(n)))}bi(e){return Gc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=pt(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return V.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?V.resolve(!0):hl(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new j(L.FAILED_PRECONDITION,Ap);return!1}}return!(!this.networkEnabled||!this.inForeground)||Gc(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&B("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new zm(e,Xt.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Gc(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return Gh.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new wL(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Wh.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){B("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===16?SV:l===15?oA:l===14?sA:l===13?iA:l===12?TV:l===11?rA:void K()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new zm(a,this.kr?this.kr.next():Xt.oe),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw Xe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new j(L.FAILED_PRECONDITION,JR);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return hl(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new j(L.FAILED_PRECONDITION,Ap)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return hl(e).put("owner",n)}static D(){return sr.D()}yi(e){const n=hl(e);return n.get("owner").next(r=>this.Si(r)?(B("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):V.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Xe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;PR()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return B("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Xe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){Xe("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function hl(t){return pt(t,"owner")}function Gc(t){return pt(t,"clientMetadata")}function Q_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Y_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return PR()?8:eA(De())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new FL;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(fo()<=se.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",po(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(fo()<=se.DEBUG&&B("QueryEngine","Query:",po(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(fo()<=se.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",po(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bt(n))):V.resolve())}ji(e,n){if(GE(n))return V.resolve(null);let r=Bt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nh(n,null,"F"),r=Bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,nh(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return GE(n)||i.isEqual(J.min())?V.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?V.resolve(null):(fo()<=se.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),po(n)),this.es(e,o,n,YR(i,-1)).next(a=>a))})}Zi(e,n){let r=new we(EA(e));return n.forEach((i,s)=>{zu(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return fo()<=se.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",po(n)),this.zi.getDocumentsMatchingQuery(e,n,mn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Te(ne),this.rs=new Ui(s=>xs(s),ju),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oP(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function uP(t,e,n,r){return new UL(t,e,n,r)}async function cP(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function jL(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const f=c.batch,m=f.keys();let y=V.resolve();return m.forEach(R=>{y=y.next(()=>d.getEntry(l,R)).next(A=>{const b=c.docVersions.get(R);X(b!==null),A.version.compareTo(b)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dP(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function BL(t,e){const n=H(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(st.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(f,y),function(A,b,w){return A.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,y,d)&&a.push(n.Qr.updateTargetData(s,y))});let l=Zt(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(hP(s,o,e.documentUpdates).next(d=>{l=d.cs,c=d.ls})),!r.isEqual(J.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return V.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function hP(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Zt();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function zL(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aa(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function la(t,e,n){const r=H(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fi(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function oh(t,e,n){const r=H(t);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const f=H(l),m=f.rs.get(d);return m!==void 0?V.resolve(f.ns.get(m)):f.Qr.getTargetData(c,d)}(r,o,Bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:re())).next(a=>(mP(r,wA(e),a),{documents:a,hs:s})))}function fP(t,e){const n=H(t),r=H(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function pP(t,e){const n=H(t),r=n.ss.get(e)||J.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,YR(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(mP(n,e,i),i))}function mP(t,e,n){let r=t.ss.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function $L(t,e,n,r){const i=H(t);let s=re(),o=Zt();for(const c of n){const d=e.Ps(c.metadata.name);c.document&&(s=s.add(d));const f=e.Is(c);f.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(d,f)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await aa(i,function(d){return Bt(Ra(ae.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>hP(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Qr.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Qr.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.cs,d.ls)).next(()=>d.cs)))}async function qL(t,e,n=re()){const r=await aa(t,Bt(q_(e.bundledQuery))),i=H(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Je(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(st.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function EI(t,e){return`firestore_clients_${t}_${e}`}function II(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Pp(t,e){return`firestore_targets_${t}_${e}`}class ah{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new j(i.error.code,i.error.message))),o?new ah(e,n,i.state,s):(Xe("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new j(r.error.code,r.error.message))),s?new zl(e,r.state,i):(Xe("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class lh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=M_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=tA(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new lh(e,s):(Xe("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class X_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new X_(n.clientId,n.onlineState):(Xe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ng{constructor(){this.activeTargetIds=M_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kp{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new Te(ne),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=EI(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new ng),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(EI(this.persistenceKey,r));if(i){const s=lh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Pp(this.persistenceKey,e));if(r){const i=zl.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Pp(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return B("SharedClientState","READ",e,n),n}setItem(e,n){B("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){B("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(B("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void Xe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Xt.oe;if(s!=null)try{const a=JSON.parse(s);X(typeof a=="number"),o=a}catch(a){Xe("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Xt.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new ah(this.currentUser,e,n,r),s=II(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=II(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Pp(this.persistenceKey,e),s=new zl(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return lh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return ah.Es(new ut(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return zl.Es(i,n)}xs(e){return X_.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);B("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=M_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class gP{constructor(){this.no=new ng,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ng,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hc=null;function Cp(){return Hc===null?Hc=function(){return 268435456+Math.round(2147483648*Math.random())}():Hc++,"0x"+Hc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class KL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Cp(),l=this.vo(n,r.toUriEncodedString());B("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(d=>(B("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw zn("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=GL[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Cp();return new Promise((o,a)=>{const l=new BR;l.setWithCredentials(!0),l.listenOnce($R.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case cd.NO_ERROR:const d=l.getResponseJson();B(Pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case cd.TIMEOUT:B(Pt,`RPC '${e}' ${s} timed out`),a(new j(L.DEADLINE_EXCEEDED,"Request time out"));break;case cd.HTTP_ERROR:const f=l.getStatus();if(B(Pt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const R=function(b){const w=b.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(y.status);a(new j(R,y.message))}else a(new j(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new j(L.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{B(Pt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);B(Pt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Cp(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=GR(),a=WR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new zR({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");B(Pt,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);let m=!1,y=!1;const R=new HL({lo:b=>{y?B(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(B(Pt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),B(Pt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},ho:()=>f.close()}),A=(b,w,v)=>{b.listen(w,I=>{try{v(I)}catch(N){setTimeout(()=>{throw N},0)}})};return A(f,Sl.EventType.OPEN,()=>{y||(B(Pt,`RPC '${e}' stream ${i} transport opened.`),R.mo())}),A(f,Sl.EventType.CLOSE,()=>{y||(y=!0,B(Pt,`RPC '${e}' stream ${i} transport closed`),R.po())}),A(f,Sl.EventType.ERROR,b=>{y||(y=!0,zn(Pt,`RPC '${e}' stream ${i} transport errored:`,b),R.po(new j(L.UNAVAILABLE,"The operation could not be completed")))}),A(f,Sl.EventType.MESSAGE,b=>{var w;if(!y){const v=b.data[0];X(!!v);const I=v,N=I.error||((w=I[0])===null||w===void 0?void 0:w.error);if(N){B(Pt,`RPC '${e}' stream ${i} received error:`,N);const F=N.status;let U=function(T){const S=Ze[T];if(S!==void 0)return VA(S)}(F),E=N.message;U===void 0&&(U=L.INTERNAL,E="Unknown error status: "+F+" with message "+N.message),y=!0,R.po(new j(U,E)),f.close()}else B(Pt,`RPC '${e}' stream ${i} received:`,v),R.yo(v)}}),A(a,qR.STAT_EVENT,b=>{b.stat===jm.PROXY?B(Pt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===jm.NOPROXY&&B(Pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(){return typeof window<"u"?window:null}function _d(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){return new nL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new J_(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Xe(n.toString()),Xe("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new j(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QL extends yP{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=sL(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Je(o.readTime):J.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Xm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=eh(l)?{documents:WA(s,l)}:{query:GA(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=UA(s,o.resumeToken);const c=Qm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=oa(s,o.snapshotVersion.toTimestamp());const c=Qm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=aL(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Xm(this.serializer),n.removeTarget=e,this.i_(n)}}class YL extends yP{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=oL(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.A_(r,n)}return X(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Xm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Su(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Ym(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(L.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Ym(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(L.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class JL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Xe(n),this.y_=!1):B("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{ji(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=H(l);c.M_.add(4),await ka(c),c.N_.set("Unknown"),c.M_.delete(4),await Hu(c)}(this))})}),this.N_=new JL(r,i)}}async function Hu(t){if(ji(t))for(const e of t.x_)await e(!0)}async function ka(t){for(const e of t.x_)await e(!1)}function Kh(t,e){const n=H(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),ty(n)?ey(n):ba(n).Xo()&&Z_(n,e))}function ua(t,e){const n=H(t),r=ba(n);n.F_.delete(e),r.Xo()&&vP(n,e),n.F_.size===0&&(r.Xo()?r.n_():ji(n)&&n.N_.set("Unknown"))}function Z_(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ba(t).P_(e)}function vP(t,e){t.L_.xe(e),ba(t).I_(e)}function ey(t){t.L_=new JV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ba(t).start(),t.N_.w_()}function ty(t){return ji(t)&&!ba(t).Zo()&&t.F_.size>0}function ji(t){return H(t).M_.size===0}function wP(t){t.L_=void 0}async function eM(t){t.N_.set("Online")}async function tM(t){t.F_.forEach((e,n)=>{Z_(t,e)})}async function nM(t,e){wP(t),ty(t)?(t.N_.D_(e),ey(t)):t.N_.set("Unknown")}async function rM(t,e,n){if(t.N_.set("Online"),e instanceof FA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uh(t,r)}else if(e instanceof gd?t.L_.Ke(e):e instanceof MA?t.L_.He(e):t.L_.We(e),!n.isEqual(J.min()))try{const r=await dP(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=s.F_.get(l);if(!d)return;s.F_.set(l,d.withResumeToken(st.EMPTY_BYTE_STRING,d.snapshotVersion)),vP(s,l);const f=new wr(d.target,l,c,d.sequenceNumber);Z_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await uh(t,r)}}async function uh(t,e,n){if(!Fi(e))throw e;t.M_.add(1),await ka(t),t.N_.set("Offline"),n||(n=()=>dP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Hu(t)})}function EP(t,e){return e().catch(n=>uh(t,n,e))}async function Ca(t){const e=H(t),n=bi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;iM(e);)try{const i=await zL(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,sM(e,i)}catch(i){await uh(e,i)}IP(e)&&TP(e)}function iM(t){return ji(t)&&t.v_.length<10}function sM(t,e){t.v_.push(e);const n=bi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function IP(t){return ji(t)&&!bi(t).Zo()&&t.v_.length>0}function TP(t){bi(t).start()}async function oM(t){bi(t).V_()}async function aM(t){const e=bi(t);for(const n of t.v_)e.d_(n.mutations)}async function lM(t,e,n){const r=t.v_.shift(),i=j_.from(r,e,n);await EP(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ca(t)}async function uM(t,e){e&&bi(t).E_&&await async function(r,i){if(function(o){return OA(o)&&o!==L.ABORTED}(i.code)){const s=r.v_.shift();bi(r).t_(),await EP(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ca(r)}}(t,e),IP(t)&&TP(t)}async function SI(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=ji(n);n.M_.add(3),await ka(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Hu(n)}async function rg(t,e){const n=H(t);e?(n.M_.delete(2),await Hu(n)):e||(n.M_.add(2),await ka(n),n.N_.set("Unknown"))}function ba(t){return t.B_||(t.B_=function(n,r,i){const s=H(n);return s.f_(),new QL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:eM.bind(null,t),To:tM.bind(null,t),Ao:nM.bind(null,t),h_:rM.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),ty(t)?ey(t):t.N_.set("Unknown")):(await t.B_.stop(),wP(t))})),t.B_}function bi(t){return t.k_||(t.k_=function(n,r,i){const s=H(n);return s.f_(),new YL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:oM.bind(null,t),Ao:uM.bind(null,t),R_:aM.bind(null,t),A_:lM.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Ca(t)):(await t.k_.stop(),t.v_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ny(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xa(t,e){if(Xe("AsyncQueue",`${e}: ${t}`),Fi(t))return new j(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Rl(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Uo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Uo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Uo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.q_=new Te(G.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):K():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ca{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ca(e,n,Uo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class dM{constructor(){this.queries=new Ui(e=>vA(e),Bu),this.onlineState="Unknown",this.z_=new Set}}async function ry(t,e){const n=H(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new cM,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=xa(o,`Initialization of query '${po(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&sy(n)}async function iy(t,e){const n=H(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function hM(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&sy(n)}function fM(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function sy(t){t.z_.forEach(e=>{e.next()})}var ig,AI;(AI=ig||(ig={})).J_="default",AI.Cache="cache";class oy{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ca(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ca.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==ig.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.serializer=e}Ps(e){return or(this.serializer,e)}Is(e){return e.metadata.exists?qA(this.serializer,e.document,!1):Ae.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Je(e)}}class mM{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=SP(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=ae.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new PI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||re()).add(s);n.set(o,a)}}return n}async complete(){const e=await $L(this.localStore,new PI(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await qL(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function SP(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.key=e}}class AP{constructor(e){this.key=e}}class PP{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=re(),this.mutatedKeys=re(),this.Ia=EA(e),this.Ta=new Uo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new RI,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),y=zu(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),A=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let b=!1;m&&y?m.data.isEqual(y.data)?R!==A&&(r.track({type:3,doc:y}),b=!0):this.Ra(m,y)||(r.track({type:2,doc:y}),b=!0,(l&&this.Ia(y,l)>0||c&&this.Ia(y,c)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),b=!0):m&&!y&&(r.track({type:1,doc:m}),b=!0,(l||c)&&(a=!0)),b&&(y?(o=o.add(y),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(y,R){const A=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return A(y)-A(R)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new ca(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new RI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=re(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new AP(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new RP(r))}),n}pa(e){this.la=e.hs,this.Pa=re();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ca.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class gM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _M{constructor(e){this.key=e,this.wa=!1}}class yM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ui(a=>vA(a),Bu),this.Da=new Map,this.Ca=new Set,this.va=new Te(G.comparator),this.Fa=new Map,this.Ma=new H_,this.xa={},this.Oa=new Map,this.Na=Ls.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function vM(t,e,n=!0){const r=Qh(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await kP(r,e,n,!0),i}async function wM(t,e){const n=Qh(t);await kP(n,e,!0,!1)}async function kP(t,e,n,r){const i=await aa(t.localStore,Bt(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await ay(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Kh(t.remoteStore,i),a}async function ay(t,e,n,r,i){t.Ba=(f,m,y)=>async function(A,b,w,v){let I=b.view.da(w);I.Xi&&(I=await oh(A.localStore,b.query,!1).then(({documents:E})=>b.view.da(E,I)));const N=v&&v.targetChanges.get(b.targetId),F=v&&v.targetMismatches.get(b.targetId)!=null,U=b.view.applyChanges(I,A.isPrimaryClient,N,F);return sg(A,b.targetId,U.fa),U.snapshot}(t,f,m,y);const s=await oh(t.localStore,e,!0),o=new PP(e,s.hs),a=o.da(s.documents),l=Wu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);sg(t,n,c.fa);const d=new gM(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function EM(t,e,n){const r=H(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Bu(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await la(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ua(r.remoteStore,i.targetId),da(r,i.targetId)}).catch(Mi)):(da(r,i.targetId),await la(r.localStore,i.targetId,!0))}async function IM(t,e){const n=H(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ua(n.remoteStore,r.targetId))}async function TM(t,e,n){const r=dy(t);try{const i=await function(o,a){const l=H(o),c=Ne.now(),d=a.reduce((y,R)=>y.add(R.key),re());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let R=Zt(),A=re();return l.os.getEntries(y,d).next(b=>{R=b,R.forEach((w,v)=>{v.isValidDocument()||(A=A.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,R)).next(b=>{f=b;const w=[];for(const v of a){const I=QV(v,f.get(v.key).overlayedDocument);I!=null&&w.push(new Br(v.key,I,cA(I.value.mapValue),xe.exists(!0)))}return l.mutationQueue.addMutationBatch(y,c,w,a)}).next(b=>{m=b;const w=b.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(y,b.batchId,w)})}).then(()=>({batchId:m.batchId,changes:TA(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new Te(ne)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await zr(r,i.changes),await Ca(r.remoteStore)}catch(i){const s=xa(i,"Failed to persist write");n.reject(s)}}async function CP(t,e){const n=H(t);try{const r=await BL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?X(o.wa):i.removedDocuments.size>0&&(X(o.wa),o.wa=!1))}),await zr(n,r,e)}catch(r){await Mi(r)}}function kI(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=H(o);l.onlineState=a;let c=!1;l.queries.forEach((d,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&sy(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SM(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Te(G.comparator);o=o.insert(s,Ae.newNoDocument(s,J.min()));const a=re().add(s),l=new qu(J.min(),new Map,new Te(ne),o,a);await CP(r,l),r.va=r.va.remove(s),r.Fa.delete(e),cy(r)}else await la(r.localStore,e,!1).then(()=>da(r,e,n)).catch(Mi)}async function RM(t,e){const n=H(t),r=e.batch.batchId;try{const i=await jL(n.localStore,e);uy(n,r,null),ly(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zr(n,i)}catch(i){await Mi(i)}}async function AM(t,e,n){const r=H(t);try{const i=await function(o,a){const l=H(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(X(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);uy(r,e,n),ly(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zr(r,i)}catch(i){await Mi(i)}}async function PM(t,e){const n=H(t);ji(n.remoteStore)||B("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=H(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=xa(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ly(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function uy(t,e,n){const r=H(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function da(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||bP(t,r)})}function bP(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(ua(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),cy(t))}function sg(t,e,n){for(const r of n)r instanceof RP?(t.Ma.addReference(r.key,e),kM(t,r)):r instanceof AP?(B("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||bP(t,r.key)):K()}function kM(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(B("SyncEngine","New document in limbo: "+n),t.Ca.add(r),cy(t))}function cy(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new G(ae.fromString(e)),r=t.Na.next();t.Fa.set(r,new _M(n)),t.va=t.va.insert(n,r),Kh(t.remoteStore,new wr(Bt(Ra(n.path)),r,"TargetPurposeLimboResolution",Xt.oe))}}async function zr(t,e,n){const r=H(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Y_.Ki(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const d=H(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(c,m=>V.forEach(m.qi,y=>d.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>V.forEach(m.Qi,y=>d.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!Fi(f))throw f;B("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const y=d.ns.get(m),R=y.snapshotVersion,A=y.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(m,A)}}}(r.localStore,s))}async function CM(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await cP(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new j(L.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zr(n,r.us)}}function bM(t,e){const n=H(t),r=n.Fa.get(e);if(r&&r.wa)return re().add(r.key);{let i=re();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function xM(t,e){const n=H(t),r=await oh(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&sg(n,e.targetId,i.fa),i}async function NM(t,e){const n=H(t);return pP(n.localStore,e).then(r=>zr(n,r))}async function DM(t,e,n,r){const i=H(t),s=await function(a,l){const c=H(a),d=H(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.vn(f,l).next(m=>m?c.localDocuments.getDocuments(f,m):V.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ca(i.remoteStore):n==="acknowledged"||n==="rejected"?(uy(i,e,r||null),ly(i,e),function(a,l){H(H(a).mutationQueue).Mn(l)}(i.localStore,e)):K(),await zr(i,s)):B("SyncEngine","Cannot apply mutation batch with id: "+e)}async function OM(t,e){const n=H(t);if(Qh(n),dy(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await CI(n,r.toArray());n.La=!0,await rg(n.remoteStore,!0);for(const s of i)Kh(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(da(n,o),la(n.localStore,o,!0))),ua(n.remoteStore,o)}),await i,await CI(n,r),function(o){const a=H(o);a.Fa.forEach((l,c)=>{ua(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new Te(G.comparator)}(n),n.La=!1,await rg(n.remoteStore,!1)}}async function CI(t,e,n){const r=H(t),i=[],s=[];for(const o of e){let a;const l=r.Da.get(o);if(l&&l.length!==0){a=await aa(r.localStore,Bt(l[0]));for(const c of l){const d=r.ba.get(c),f=await xM(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await fP(r.localStore,o);a=await aa(r.localStore,c),await ay(r,xP(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function xP(t){return yA(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function VM(t){return function(n){return H(H(n).persistence).Bi()}(H(t).localStore)}async function LM(t,e,n,r){const i=H(t);if(i.La)return void B("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await pP(i.localStore,wA(s[0])),a=qu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",st.EMPTY_BYTE_STRING);await zr(i,o,a);break}case"rejected":await la(i.localStore,e,!0),da(i,e,r);break;default:K()}}async function MM(t,e,n){const r=Qh(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){B("SyncEngine","Adding an already active target "+i);continue}const s=await fP(r.localStore,i),o=await aa(r.localStore,s);await ay(r,xP(s),o.targetId,!1,o.resumeToken),Kh(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await la(r.localStore,i,!1).then(()=>{ua(r.remoteStore,i),da(r,i)}).catch(Mi)}}function Qh(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=CP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SM.bind(null,e),e.Sa.h_=hM.bind(null,e.eventManager),e.Sa.ka=fM.bind(null,e.eventManager),e}function dy(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AM.bind(null,e),e}function FM(t,e,n){const r=H(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(y,R){const A=H(y),b=Je(R.createTime);return A.persistence.runTransaction("hasNewerBundle","readonly",w=>A.$r.getBundleMetadata(w,R.id)).then(w=>!!w&&w.createTime.compareTo(b)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(SP(l));const c=new mM(l,s.localStore,o.serializer);let d=await o.qa();for(;d;){const m=await c._a(d);m&&a._updateProgress(m),d=await o.qa()}const f=await c.complete();return await zr(s,f.ca,void 0),await function(y,R){const A=H(y);return A.persistence.runTransaction("Save bundle","readwrite",b=>A.$r.saveBundleMetadata(b,R))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.ua)}catch(l){return zn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class og{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Gu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return uP(this.persistence,new lP,e.initialUser,this.serializer)}createPersistence(e){return new aP(Hh.Hr,this.serializer)}createSharedClientState(e){return new gP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NP extends og{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await dy(this.Qa.syncEngine),await Ca(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return uP(this.persistence,new lP,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new TL(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new oV(n,this.persistence);return new sV(e.asyncQueue,r)}createPersistence(e){const n=Q_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ht.withCacheSize(this.cacheSizeBytes):Ht.DEFAULT;return new K_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,_P(),_d(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new gP}}class UM extends NP{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof kp&&(this.sharedClientState.syncEngine={Zs:DM.bind(null,n),Xs:LM.bind(null,n),eo:MM.bind(null,n),Bi:VM.bind(null,n),Ys:NM.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await OM(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=_P();if(!kp.D(n))throw new j(L.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Q_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new kp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class hy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CM.bind(null,this.syncEngine),await rg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dM}()}createDatastore(e){const n=Gu(e.databaseInfo.databaseId),r=function(s){return new KL(s)}(e.databaseInfo);return function(s,o,a,l){return new XL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new ZL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>kI(this.syncEngine,n,0),function(){return TI.D()?new TI:new WL}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,d){const f=new yM(i,s,o,a,l,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=H(r);B("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await ka(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Xe("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new dt,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new pM(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new j(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=H(i),a={documents:s.map(f=>Tu(o.serializer,f))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,ae.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const m=iL(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());X(!!m),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Pa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=G.fromPath(r);this.mutations.push(new F_(i,this.precondition(i)))}),await async function(r,i){const s=H(r),o={writes:i.map(a=>Su(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,ae.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=J.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new j(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?xe.exists(!1):xe.updateTime(n):xe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new j(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xe.updateTime(n)}return xe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new J_(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new BM(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!Uu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!OA(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=KR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yd(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cP(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ag(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fy(t);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>SI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>SI(e.remoteStore,i)),t._onlineComponents=e}function DP(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function fy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await yd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!DP(n))throw n;zn("Error using user provided cache. Falling back to memory cache: "+n),await yd(t,new og)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await yd(t,new og);return t._offlineComponents}async function Xh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await ag(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await ag(t,new hy))),t._onlineComponents}function OP(t){return fy(t).then(e=>e.persistence)}function py(t){return fy(t).then(e=>e.localStore)}function VP(t){return Xh(t).then(e=>e.remoteStore)}function my(t){return Xh(t).then(e=>e.syncEngine)}function qM(t){return Xh(t).then(e=>e.datastore)}async function ha(t){const e=await Xh(t),n=e.eventManager;return n.onListen=vM.bind(null,e.syncEngine),n.onUnlisten=EM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=IM.bind(null,e.syncEngine),n}function WM(t){return t.asyncQueue.enqueue(async()=>{const e=await OP(t),n=await VP(t);return e.setNetworkEnabled(!0),function(i){const s=H(i);return s.M_.delete(0),Hu(s)}(n)})}function GM(t){return t.asyncQueue.enqueue(async()=>{const e=await OP(t),n=await VP(t);return e.setNetworkEnabled(!1),async function(i){const s=H(i);s.M_.add(0),await ka(s),s.N_.set("Offline")}(n)})}function HM(t,e){const n=new dt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=H(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new j(L.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=xa(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await py(t),e,n)),n.promise}function LP(t,e,n={}){const r=new dt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Yh({next:m=>{o.enqueueAndForget(()=>iy(s,f));const y=m.docs.has(a);!y&&m.fromCache?c.reject(new j(L.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?c.reject(new j(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new oy(Ra(a.path),d,{includeMetadataChanges:!0,ra:!0});return ry(s,f)}(await ha(t),t.asyncQueue,e,n,r)),r.promise}function KM(t,e){const n=new dt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await oh(i,s,!0),l=new PP(s,a.hs),c=l.da(a.documents),d=l.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const l=xa(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await py(t),e,n)),n.promise}function MP(t,e,n={}){const r=new dt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Yh({next:m=>{o.enqueueAndForget(()=>iy(s,f)),m.fromCache&&l.source==="server"?c.reject(new j(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new oy(a,d,{includeMetadataChanges:!0,ra:!0});return ry(s,f)}(await ha(t),t.asyncQueue,e,n,r)),r.promise}function QM(t,e){const n=new Yh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).z_.add(s),s.next()}(await ha(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).z_.delete(s)}(await ha(t),n))}}function YM(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?LA().encode(o):o,function(d,f){return new jM(d,f)}(function(d,f){if(d instanceof Uint8Array)return bI(d,f);if(d instanceof ArrayBuffer)return bI(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Gu(e));t.asyncQueue.enqueueAndForget(async()=>{FM(await my(t),i,r)})}function XM(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=H(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await py(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t,e,n){if(!n)throw new j(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UP(t,e,n,r){if(e===!0&&r===!0)throw new j(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function NI(t){if(!G.isDocumentKey(t))throw new j(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function DI(t){if(G.isDocumentKey(t))throw new j(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function he(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jh(t);throw new j(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function jP(t,e){if(e<=0)throw new j(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ku{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new OI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new OI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KO;switch(r.type){case"firstParty":return new JO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xI.get(n);r&&(B("ComponentProvider","Removing Datastore"),xI.delete(n),r.terminate())}(this),Promise.resolve()}}function BP(t,e,n,r={}){var i;const s=(t=he(t,Ku))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ut.MOCK_USER;else{a=IR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ut(c)}t._authCredentials=new QO(new HR(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt=class zP{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zP(this.firestore,e,this._query)}},Le=class $P{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $P(this.firestore,e,this._key)}},wi=class qP extends zt{constructor(e,n,r){super(e,n,Ra(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new G(e))}withConverter(e){return new qP(this.firestore,e,this._path)}};function $l(t,e,...n){if(t=Y(t),gy("collection","path",e),t instanceof Ku){const r=ae.fromString(e,...n);return DI(r),new wi(t,null,r)}{if(!(t instanceof Le||t instanceof wi))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return DI(r),new wi(t.firestore,null,r)}}function JM(t,e){if(t=he(t,Ku),gy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new j(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new zt(t,null,function(r){return new jr(ae.emptyPath(),r)}(e))}function fa(t,e,...n){if(t=Y(t),arguments.length===1&&(e=KR.newId()),gy("doc","path",e),t instanceof Ku){const r=ae.fromString(e,...n);return NI(r),new Le(t,null,new G(r))}{if(!(t instanceof Le||t instanceof wi))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return NI(r),new Le(t.firestore,t instanceof wi?t.converter:null,new G(r))}}function WP(t,e){return t=Y(t),e=Y(e),(t instanceof Le||t instanceof wi)&&(e instanceof Le||e instanceof wi)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function GP(t,e){return t=Y(t),e=Y(e),t instanceof zt&&e instanceof zt&&t.firestore===e.firestore&&Bu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new J_(this,"async_queue_retry"),this.hu=()=>{const n=_d();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=_d();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=_d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new dt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Fi(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Xe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=ny.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&K()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function lg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class eF{constructor(){this._progressObserver={},this._taskCompletionResolver=new dt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tF=-1;let Ge=class extends Ku{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new ZM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||HP(this),this._firestoreClient.terminate()}};function nF(t,e){const n=typeof t=="object"?t:jh(),r=typeof t=="string"?t:"(default)",i=Ta(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vR("firestore");s&&BP(i,...s)}return i}function mt(t){return t._firestoreClient||HP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function HP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,d){return new PV(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,FP(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new $M(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function rF(t,e){QP(t=he(t,Ge));const n=mt(t);if(n._uninitializedComponentsProvider)throw new j(L.FAILED_PRECONDITION,"SDK cache is already specified.");zn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new hy;return KP(n,i,new NP(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function iF(t){QP(t=he(t,Ge));const e=mt(t);if(e._uninitializedComponentsProvider)throw new j(L.FAILED_PRECONDITION,"SDK cache is already specified.");zn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new hy;return KP(e,r,new UM(r,n.cacheSizeBytes))}function KP(t,e,n){const r=new dt;return t.asyncQueue.enqueue(async()=>{try{await yd(t,n),await ag(t,e),r.resolve()}catch(i){const s=i;if(!DP(s))throw s;zn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function sF(t){if(t._initialized&&!t._terminated)throw new j(L.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new dt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!sr.D())return Promise.resolve();const i=r+"main";await sr.delete(i)}(Q_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function oF(t){return function(n){const r=new dt;return n.asyncQueue.enqueueAndForget(async()=>PM(await my(n),r)),r.promise}(mt(t=he(t,Ge)))}function aF(t){return WM(mt(t=he(t,Ge)))}function lF(t){return GM(mt(t=he(t,Ge)))}function uF(t,e){const n=mt(t=he(t,Ge)),r=new eF;return YM(n,t._databaseId,e,r),r}function cF(t,e){return XM(mt(t=he(t,Ge)),e).then(n=>n?new zt(t,null,n.query):null)}function QP(t){if(t._initialized||t._terminated)throw new j(L.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ur(st.fromBase64String(e))}catch(n){throw new j(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ur(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dF=/^__.*__$/;class hF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class YP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function XP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class ef{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ch(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(XP(this.fu)&&dF.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class fF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gu(e)}Fu(e,n,r,i=!1){return new ef({fu:e,methodName:n,vu:r,path:be.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gs(t){const e=t._freezeSettings(),n=Gu(t._databaseId);return new fF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tf(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Ty("Data must be an object, but it was:",o,r);const a=ek(r,o);let l,c;if(s.merge)l=new Jt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=ug(e,f,n);if(!o.contains(m))throw new j(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);nk(d,m)||d.push(m)}l=new Jt(d),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new hF(new vt(a),l,c)}class Qu extends Ws{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qu}}function JP(t,e,n){return new ef({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class _y extends Ws{_toFieldTransform(e){return new $u(e.path,new ia)}isEqual(e){return e instanceof _y}}class yy extends Ws{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=JP(this,e,!0),r=this.Mu.map(s=>Hs(s,n)),i=new Ns(r);return new $u(e.path,i)}isEqual(e){return e instanceof yy&&Jo(this.Mu,e.Mu)}}class vy extends Ws{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=JP(this,e,!0),r=this.Mu.map(s=>Hs(s,n)),i=new Ds(r);return new $u(e.path,i)}isEqual(e){return e instanceof vy&&Jo(this.Mu,e.Mu)}}class wy extends Ws{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new sa(e.serializer,PA(e.serializer,this.xu));return new $u(e.path,n)}isEqual(e){return e instanceof wy&&this.xu===e.xu}}function Ey(t,e,n,r){const i=t.Fu(1,e,n);Ty("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();qs(r,(l,c)=>{const d=Sy(e,l,n);c=Y(c);const f=i.Su(d);if(c instanceof Qu)s.push(d);else{const m=Hs(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new Jt(s);return new YP(o,a,i.fieldTransforms)}function Iy(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[ug(e,r,n)],l=[i];if(s.length%2!=0)throw new j(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(ug(e,s[m])),l.push(s[m+1]);const c=[],d=vt.empty();for(let m=a.length-1;m>=0;--m)if(!nk(c,a[m])){const y=a[m];let R=l[m];R=Y(R);const A=o.Su(y);if(R instanceof Qu)c.push(y);else{const b=Hs(R,A);b!=null&&(c.push(y),d.set(y,b))}}const f=new Jt(c);return new YP(d,f,o.fieldTransforms)}function ZP(t,e,n,r=!1){return Hs(n,t.Fu(r?4:3,e))}function Hs(t,e){if(tk(t=Y(t)))return Ty("Unsupported field value:",e,t),ek(t,e);if(t instanceof Ws)return function(r,i){if(!XP(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Hs(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Y(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:oa(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oa(i.serializer,s)}}if(r instanceof Zh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ur)return{bytesValue:UA(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Jh(r)}`)}(t,e)}function ek(t,e){const n={};return aA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(t,(r,i)=>{const s=Hs(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function tk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof Zh||t instanceof ur||t instanceof Le||t instanceof Ws)}function Ty(t,e,n){if(!tk(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Jh(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function ug(t,e,n){if((e=Y(e))instanceof xi)return e._internalPath;if(typeof e=="string")return Sy(t,e);throw ch("Field path arguments must be of type string or ",t,!1,void 0,n)}const pF=new RegExp("[~\\*/\\[\\]]");function Sy(t,e,n){if(e.search(pF)>=0)throw ch(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xi(...e.split("."))._internalPath}catch{throw ch(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ch(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(L.INVALID_ARGUMENT,a+t+l)}function nk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mF extends Ru{data(){return super.data()}}function nf(t,e){return typeof e=="string"?Sy(t,e):e instanceof xi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ry{}class Yu extends Ry{}function mr(t,e,...n){let r=[];e instanceof Ry&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Ay).length,a=s.filter(l=>l instanceof rf).length;if(o>1||o>0&&a>0)throw new j(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class rf extends Yu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rf(e,n,r)}_apply(e){const n=this._parse(e);return ok(e._query,n),new zt(e.firestore,e.converter,Km(e._query,n))}_parse(e){const n=Gs(e.firestore);return function(s,o,a,l,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){LI(f,d);const y=[];for(const R of f)y.push(VI(l,s,R));m={arrayValue:{values:y}}}else m=VI(l,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||LI(f,d),m=ZP(a,o,f,d==="in"||d==="not-in");return le.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ik(t,e,n){const r=e,i=nf("where",t);return rf._create(i,r,n)}class Ay extends Ry{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ay(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_e.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)ok(o,l),o=Km(o,l)}(e._query,n),new zt(e.firestore,e.converter,Km(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Py extends Yu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Py(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new j(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Iu(s,o)}(e._query,this._field,this._direction);return new zt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new jr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function gF(t,e="asc"){const n=e,r=nf("orderBy",t);return Py._create(r,n)}class sf extends Yu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new sf(e,n,r)}_apply(e){return new zt(e.firestore,e.converter,nh(e._query,this._limit,this._limitType))}}function _F(t){return jP("limit",t),sf._create("limit",t,"F")}function yF(t){return jP("limitToLast",t),sf._create("limitToLast",t,"L")}class of extends Yu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new of(e,n,r)}_apply(e){const n=sk(e,this.type,this._docOrFields,this._inclusive);return new zt(e.firestore,e.converter,function(i,s){return new jr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function vF(...t){return of._create("startAt",t,!0)}function wF(...t){return of._create("startAfter",t,!1)}class af extends Yu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new af(e,n,r)}_apply(e){const n=sk(e,this.type,this._docOrFields,this._inclusive);return new zt(e.firestore,e.converter,function(i,s){return new jr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function EF(...t){return af._create("endBefore",t,!1)}function IF(...t){return af._create("endAt",t,!0)}function sk(t,e,n,r){if(n[0]=Y(n[0]),n[0]instanceof Ru)return function(s,o,a,l,c){if(!l)throw new j(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of Fo(s))if(f.field.isKeyField())d.push(bs(o,l.key));else{const m=l.data.field(f.field);if(zh(m))throw new j(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const y=f.field.canonicalString();throw new j(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(m)}return new Ci(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Gs(t.firestore);return function(o,a,l,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new j(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let R=0;R<d.length;R++){const A=d[R];if(m[R].field.isKeyField()){if(typeof A!="string")throw new j(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof A}`);if(!L_(o)&&A.indexOf("/")!==-1)throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${A}' contains a slash.`);const b=o.path.child(ae.fromString(A));if(!G.isDocumentKey(b))throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const w=new G(b);y.push(bs(a,w))}else{const b=ZP(l,c,A);y.push(b)}}return new Ci(y,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function VI(t,e,n){if(typeof(n=Y(n))=="string"){if(n==="")throw new j(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!L_(e)&&n.indexOf("/")!==-1)throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ae.fromString(n));if(!G.isDocumentKey(r))throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bs(t,new G(r))}if(n instanceof Le)return bs(t,n._key);throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jh(n)}.`)}function LI(t,e){if(!Array.isArray(t)||t.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ok(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ky{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Zh(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=O_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vu(e));default:return null}}convertTimestamp(e){const n=Or(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);X(YA(r));const i=new Pi(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Xe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class TF extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Vr=class extends Ru{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(nf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},ql=class extends Vr{data(e={}){return super.data(e)}},Ni=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new hs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ql(this._firestore,this._userDataWriter,r.key,r,new hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ql(i._firestore,i._userDataWriter,a.doc.key,a.doc,new hs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ql(i._firestore,i._userDataWriter,a.doc.key,a.doc,new hs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:SF(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function SF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}function ak(t,e){return t instanceof Vr&&e instanceof Vr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Ni&&e instanceof Ni&&t._firestore===e._firestore&&GP(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RF(t){t=he(t,Le);const e=he(t.firestore,Ge);return LP(mt(e),t._key).then(n=>Cy(e,t,n))}class Ks extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function AF(t){t=he(t,Le);const e=he(t.firestore,Ge),n=mt(e),r=new Ks(e);return HM(n,t._key).then(i=>new Vr(e,r,t._key,i,new hs(i!==null&&i.hasLocalMutations,!0),t.converter))}function PF(t){t=he(t,Le);const e=he(t.firestore,Ge);return LP(mt(e),t._key,{source:"server"}).then(n=>Cy(e,t,n))}function cg(t){t=he(t,zt);const e=he(t.firestore,Ge),n=mt(e),r=new Ks(e);return rk(t._query),MP(n,t._query).then(i=>new Ni(e,r,t,i))}function kF(t){t=he(t,zt);const e=he(t.firestore,Ge),n=mt(e),r=new Ks(e);return KM(n,t._query).then(i=>new Ni(e,r,t,i))}function CF(t){t=he(t,zt);const e=he(t.firestore,Ge),n=mt(e),r=new Ks(e);return MP(n,t._query,{source:"server"}).then(i=>new Ni(e,r,t,i))}function MI(t,e,n){t=he(t,Le);const r=he(t.firestore,Ge),i=lf(t.converter,e,n);return Xu(r,[tf(Gs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xe.none())])}function dg(t,e,n,...r){t=he(t,Le);const i=he(t.firestore,Ge),s=Gs(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof xi?Iy(s,"updateDoc",t._key,e,n,r):Ey(s,"updateDoc",t._key,e),Xu(i,[o.toMutation(t._key,xe.exists(!0))])}function lk(t){return Xu(he(t.firestore,Ge),[new Pa(t._key,xe.none())])}function uk(t,e){const n=he(t.firestore,Ge),r=fa(t),i=lf(t.converter,e);return Xu(n,[tf(Gs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xe.exists(!1))]).then(()=>r)}function ck(t,...e){var n,r,i;t=Y(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||lg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(lg(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,d;if(t instanceof Le)c=he(t.firestore,Ge),d=Ra(t._key.path),l={next:f=>{e[o]&&e[o](Cy(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=he(t,zt);c=he(f.firestore,Ge),d=f._query;const m=new Ks(c);l={next:y=>{e[o]&&e[o](new Ni(c,m,f,y))},error:e[o+1],complete:e[o+2]},rk(t._query)}return function(m,y,R,A){const b=new Yh(A),w=new oy(y,b,R);return m.asyncQueue.enqueueAndForget(async()=>ry(await ha(m),w)),()=>{b.$a(),m.asyncQueue.enqueueAndForget(async()=>iy(await ha(m),w))}}(mt(c),d,a,l)}function bF(t,e){return QM(mt(t=he(t,Ge)),lg(e)?e:{next:e})}function Xu(t,e){return function(r,i){const s=new dt;return r.asyncQueue.enqueueAndForget(async()=>TM(await my(r),i,s)),s.promise}(mt(t),e)}function Cy(t,e,n){const r=n.docs.get(e._key),i=new Ks(t);return new Vr(t,i,e._key,r,new hs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xF={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NF=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Gs(e)}set(e,n,r){this._verifyNotCommitted();const i=si(e,this._firestore),s=lf(i.converter,n,r),o=tf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,xe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=si(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof xi?Iy(this._dataReader,"WriteBatch.update",s._key,n,r,i):Ey(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,xe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=si(e,this._firestore);return this._mutations=this._mutations.concat(new Pa(n._key,xe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function si(t,e){if((t=Y(t)).firestore!==e)throw new j(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DF=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Gs(n)}get(n){const r=si(n,this._firestore),i=new TF(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return K();const o=s[0];if(o.isFoundDocument())return new Ru(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Ru(this._firestore,i,r._key,null,r.converter);throw K()})}set(n,r,i){const s=si(n,this._firestore),o=lf(s.converter,r,i),a=tf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=si(n,this._firestore);let a;return a=typeof(r=Y(r))=="string"||r instanceof xi?Iy(this._dataReader,"Transaction.update",o._key,r,i,s):Ey(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=si(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=si(e,this._firestore),r=new Ks(this._firestore);return super.get(e).then(i=>new Vr(this._firestore,r,n._key,i._document,new hs(!1,!1),n.converter))}};function OF(t,e,n){t=he(t,Ge);const r=Object.assign(Object.assign({},xF),n);return function(s){if(s.maxAttempts<1)throw new j(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new dt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await qM(s);new zM(s.asyncQueue,c,a,o,l).Xa()}),l.promise}(mt(t),i=>e(new DF(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VF(){return new Qu("deleteField")}function LF(){return new _y("serverTimestamp")}function MF(...t){return new yy("arrayUnion",t)}function FF(...t){return new vy("arrayRemove",t)}function UF(t){return new wy("increment",t)}(function(e,n=!0){(function(i){Sa=i})(Ur),Dr(new Cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ge(new YO(r.getProvider("auth-internal")),new eV(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),fn(xE,"4.6.4",e),fn(xE,"4.6.4","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF{constructor(e,n){this._delegate=e,this.firebase=n,pu(e,new Cn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),b_(this._delegate)))}_getService(e,n=Ti){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ti){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){pu(this._delegate,e)}_addOrOverwriteComponent(e){DR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},FI=new $s("app-compat","Firebase",BF);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zF(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:fn,setLogLevel:MR,onLog:LR,apps:null,SDK_VERSION:Ur,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:WO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Ti,!IE(e,c))throw FI.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const f=C_(c,d);if(IE(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,f=d.replace("-compat","");if(Dr(c)&&c.type==="PUBLIC"){const m=(y=i())=>{if(typeof y[f]!="function")throw FI.create("invalid-app-argument",{appName:d});return y[f]()};c.serviceProps!==void 0&&Xd(m,c.serviceProps),n[f]=m,t.prototype[f]=function(...y){return this._getService.bind(this,d).apply(this,c.multipleInstances?y:[])}}return c.type==="PUBLIC"?n[f]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(){const t=zF(jF);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:dk,extendNamespace:e,createSubscribe:kR,ErrorFactory:$s,deepExtend:Xd});function e(n){Xd(t,n)}return t}const $F=dk();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=new Uh("@firebase/app-compat"),qF="@firebase/app-compat",WF="0.2.36";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GF(t){fn(qF,WF,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(TR()&&self.firebase!==void 0){UI.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&UI.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Qs=$F;GF();var HF="firebase",KF="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qs.registerVersion(HF,KF,"app-compat");function by(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const fl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},co={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QF(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function hk(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YF=QF,XF=hk,fk=new $s("auth","Firebase",hk());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new Uh("@firebase/auth");function JF(t,...e){dh.logLevel<=se.WARN&&dh.warn(`Auth (${Ur}): ${t}`,...e)}function vd(t,...e){dh.logLevel<=se.ERROR&&dh.error(`Auth (${Ur}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,...e){throw Ny(t,...e)}function it(t,...e){return Ny(t,...e)}function xy(t,e,n){const r=Object.assign(Object.assign({},XF()),{[e]:n});return new $s("auth","Firebase",r).create(e,{appName:t.name})}function ht(t){return xy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Na(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ft(t,"argument-error"),xy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ny(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fk.create(t,...e)}function $(t,e,...n){if(!t)throw Ny(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vd(e),new Error(e)}function $n(t,e){t||nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dy(){return jI()==="http:"||jI()==="https:"}function jI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dy()||RR()||"connection"in navigator)?navigator.onLine:!0}function e2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=kD()||A_()}get(){return ZF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=new Ju(3e4,6e4);function Ke(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qe(t,e,n,r,i={}){return mk(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ia(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),pk.fetch()(gk(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function mk(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},t2),e);try{const i=new i2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw kl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw kl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw kl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw kl(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xy(t,d,c);ft(t,d)}}catch(i){if(i instanceof bt)throw i;ft(t,"network-request-failed",{message:String(i)})}}async function $r(t,e,n,r,i={}){const s=await Qe(t,e,n,r,i);return"mfaPendingCredential"in s&&ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gk(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Oy(t.config,i):`${t.config.apiScheme}://${i}`}function r2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class i2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),n2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=it(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){return t!==void 0&&t.getResponse!==void 0}function zI(t){return t!==void 0&&t.enterprise!==void 0}class s2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return r2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2(t){return(await Qe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function a2(t,e){return Qe(t,"GET","/v2/recaptchaConfig",Ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l2(t,e){return Qe(t,"POST","/v1/accounts:delete",e)}async function u2(t,e){return Qe(t,"POST","/v1/accounts:update",e)}async function _k(t,e){return Qe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c2(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=uf(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wl(bp(i.auth_time)),issuedAtTime:Wl(bp(i.iat)),expirationTime:Wl(bp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bp(t){return Number(t)*1e3}function uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vd("JWT malformed, contained fewer than 3 sections"),null;try{const i=_R(n);return i?JSON.parse(i):(vd("Failed to decode base64 JWT payload"),null)}catch(i){return vd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $I(t){const e=uf(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bt&&d2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function d2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wl(this.lastLoginAt),this.creationTime=Wl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Lr(t,_k(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?yk(s.providerUserInfo):[],a=p2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hg(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function f2(t){const e=Y(t);await Pu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function p2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yk(t){return t.map(e=>{var{providerId:n}=e,r=by(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m2(t,e){const n=await mk(t,{},async()=>{const r=Ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gk(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pk.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function g2(t,e){return Qe(t,"POST","/v2/accounts:revokeToken",Ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$I(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=$I(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await m2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new jo;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jo,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=by(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new h2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return c2(this,e)}reload(){return f2(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await Lr(this,l2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:N,isAnonymous:F,providerData:U,stsTokenManager:E}=n;$(I&&E,e,"internal-error");const _=jo.fromJSON(this.name,E);$(typeof I=="string",e,"internal-error"),Jr(f,e.name),Jr(m,e.name),$(typeof N=="boolean",e,"internal-error"),$(typeof F=="boolean",e,"internal-error"),Jr(y,e.name),Jr(R,e.name),Jr(A,e.name),Jr(b,e.name),Jr(w,e.name),Jr(v,e.name);const T=new Er({uid:I,auth:e,email:m,emailVerified:N,displayName:f,isAnonymous:F,photoURL:R,phoneNumber:y,tenantId:A,stsTokenManager:_,createdAt:w,lastLoginAt:v});return U&&Array.isArray(U)&&(T.providerData=U.map(S=>Object.assign({},S))),b&&(T._redirectEventId=b),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new jo;i.updateFromServerResponse(n);const s=new Er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yk(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new jo;a.updateFromIdToken(r);const l=new Er({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new hg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=new Map;function dn(t){$n(t instanceof Function,"Expected a class definition");let e=qI.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qI.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vk.type="NONE";const pa=vk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t,e,n){return`firebase:${t}:${e}:${n}`}class Bo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vs(this.userKey,i.apiKey,s),this.fullPersistenceKey=vs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bo(dn(pa),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||dn(pa);const o=vs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Er._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ik(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tk(e))return"Blackberry";if(Sk(e))return"Webos";if(Vy(e))return"Safari";if((e.includes("chrome/")||Ek(e))&&!e.includes("edge/"))return"Chrome";if(Zu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wk(t=De()){return/firefox\//i.test(t)}function Vy(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ek(t=De()){return/crios\//i.test(t)}function Ik(t=De()){return/iemobile/i.test(t)}function Zu(t=De()){return/android/i.test(t)}function Tk(t=De()){return/blackberry/i.test(t)}function Sk(t=De()){return/webos/i.test(t)}function Da(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _2(t=De()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function y2(t=De()){var e;return Da(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function v2(){return AR()&&document.documentMode===10}function Rk(t=De()){return Da(t)||Zu(t)||Sk(t)||Tk(t)||/windows phone/i.test(t)||Ik(t)}function w2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t,e=[]){let n;switch(t){case"Browser":n=WI(De());break;case"Worker":n=`${WI(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ur}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(t,e={}){return Qe(t,"GET","/v2/passwordPolicy",Ke(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=6;class S2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:T2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new GI(this),this.idTokenSubscription=new GI(this),this.beforeStateQueue=new E2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fk,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _k(this,{idToken:e}),r=await Er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(We(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=e2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(ht(this));const n=e?Y(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await I2(this),n=new S2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await g2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ak(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&JF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function He(t){return Y(t)}class GI{constructor(e){this.auth=e,this.observer=null,this.addObserver=kR(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function A2(t){ec=t}function Ly(t){return ec.loadJS(t)}function P2(){return ec.recaptchaV2Script}function k2(){return ec.recaptchaEnterpriseScript}function C2(){return ec.gapiScript}function Pk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const b2="recaptcha-enterprise",x2="NO_RECAPTCHA";class N2{constructor(e){this.type=b2,this.auth=He(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{a2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new s2(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;zI(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(x2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&zI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=k2();l.length!==0&&(l+=a),Ly(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function HI(t,e,n,r=!1){const i=new N2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ku(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await HI(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await HI(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(t,e){const n=Ta(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jo(s,e??{}))return i;ft(i,"already-initialized")}return n.initialize({options:e})}function O2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kk(t,e,n){const r=He(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ck(e),{host:o,port:a}=V2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||L2()}function Ck(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function V2(t){const e=Ck(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:KI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:KI(o)}}}function KI(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function L2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t,e){return Qe(t,"POST","/v1/accounts:resetPassword",Ke(t,e))}async function M2(t,e){return Qe(t,"POST","/v1/accounts:update",e)}async function F2(t,e){return Qe(t,"POST","/v1/accounts:signUp",e)}async function U2(t,e){return Qe(t,"POST","/v1/accounts:update",Ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e){return $r(t,"POST","/v1/accounts:signInWithPassword",Ke(t,e))}async function cf(t,e){return Qe(t,"POST","/v1/accounts:sendOobCode",Ke(t,e))}async function B2(t,e){return cf(t,e)}async function z2(t,e){return cf(t,e)}async function $2(t,e){return cf(t,e)}async function q2(t,e){return cf(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W2(t,e){return $r(t,"POST","/v1/accounts:signInWithEmailLink",Ke(t,e))}async function G2(t,e){return $r(t,"POST","/v1/accounts:signInWithEmailLink",Ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends Oa{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Cu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Cu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ku(e,n,"signInWithPassword",j2);case"emailLink":return W2(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ku(e,r,"signUpPassword",F2);case"emailLink":return G2(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t,e){return $r(t,"POST","/v1/accounts:signInWithIdp",Ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2="http://localhost";class cr extends Oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=by(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ar(e,n)}buildRequest(){const e={requestUri:H2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ia(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K2(t,e){return Qe(t,"POST","/v1/accounts:sendVerificationCode",Ke(t,e))}async function Q2(t,e){return $r(t,"POST","/v1/accounts:signInWithPhoneNumber",Ke(t,e))}async function Y2(t,e){const n=await $r(t,"POST","/v1/accounts:signInWithPhoneNumber",Ke(t,e));if(n.temporaryProof)throw kl(t,"account-exists-with-different-credential",n);return n}const X2={USER_NOT_FOUND:"user-not-found"};async function J2(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return $r(t,"POST","/v1/accounts:signInWithPhoneNumber",Ke(t,n),X2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Oa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ws({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ws({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Q2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Y2(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return J2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ws({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eU(t){const e=xo(Tl(t)).link,n=e?xo(Tl(e)).deep_link_id:null,r=xo(Tl(t)).deep_link_id;return(r?xo(Tl(r)).link:null)||r||n||e||t}class df{constructor(e){var n,r,i,s,o,a;const l=xo(Tl(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Z2((i=l.mode)!==null&&i!==void 0?i:null);$(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eU(e);try{return new df(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.providerId=Bi.PROVIDER_ID}static credential(e,n){return Cu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=df.parseLink(n);return $(r,"argument-error"),Cu._fromEmailAndCode(e,r.code,r.tenantId)}}Bi.PROVIDER_ID="password";Bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends qr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class zo extends Va{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return $("providerId"in n&&"signInMethod"in n,"argument-error"),cr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return $(e.idToken||e.accessToken,"argument-error"),cr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return zo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return zo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new zo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Va{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Va{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tU="http://localhost";class ma extends Oa{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ar(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ma(r,s)}static _create(e,n){return new ma(e,n)}buildRequest(){return{requestUri:tU,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nU="saml.";class hh extends qr{constructor(e){$(e.startsWith(nU),"argument-error"),super(e)}static credentialFromResult(e){return hh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return hh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ma.fromJSON(e);return $(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ma._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Va{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(t,e){return $r(t,"POST","/v1/accounts:signUp",Ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Er._fromIdTokenResponse(e,r,i),o=QI(r);return new bn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=QI(r);return new bn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function QI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rU(t){var e;if(We(t.app))return Promise.reject(ht(t));const n=He(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new bn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await xk(n,{returnSecureToken:!0}),i=await bn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends bt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fh(e,n,r,i)}}function Nk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iU(t,e){const n=Y(t);await hf(!0,n,e);const{providerUserInfo:r}=await u2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Dk(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function My(t,e,n=!1){const r=await Lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",r)}async function hf(t,e,n){await Pu(e);const r=Dk(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";$(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(t,e,n=!1){const{auth:r}=t;if(We(r.app))return Promise.reject(ht(r));const i="reauthenticate";try{const s=await Lr(t,Nk(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=uf(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),bn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e,n=!1){if(We(t.app))return Promise.reject(ht(t));const r="signIn",i=await Nk(t,r,e),s=await bn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ff(t,e){return Vk(He(t),e)}async function Lk(t,e){const n=Y(t);return await hf(!1,n,e.providerId),My(n,e)}async function Mk(t,e){return Ok(Y(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sU(t,e){return $r(t,"POST","/v1/accounts:signInWithCustomToken",Ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oU(t,e){if(We(t.app))return Promise.reject(ht(t));const n=He(t),r=await sU(n,{token:e,returnSecureToken:!0}),i=await bn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Fy._fromServerResponse(e,n):"totpInfo"in n?Uy._fromServerResponse(e,n):ft(e,"internal-error")}}class Fy extends tc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Fy(n)}}class Uy extends tc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Uy(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t,e,n){var r;$(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jy(t){const e=He(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aU(t,e,n){const r=He(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&pf(r,i,n),await ku(r,i,"getOobCode",z2)}async function lU(t,e,n){await bk(Y(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jy(t),r})}async function uU(t,e){await U2(Y(t),{oobCode:e})}async function Fk(t,e){const n=Y(t),r=await bk(n,{oobCode:e}),i=r.requestType;switch($(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":$(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":$(r.mfaInfo,n,"internal-error");default:$(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=tc._fromServerResponse(He(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function cU(t,e){const{data:n}=await Fk(Y(t),e);return n.email}async function Uk(t,e,n){if(We(t.app))return Promise.reject(ht(t));const r=He(t),o=await ku(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xk).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&jy(t),l}),a=await bn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function jk(t,e,n){return We(t.app)?Promise.reject(ht(t)):ff(Y(t),Bi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jy(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dU(t,e,n){const r=He(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){$(a.handleCodeInApp,r,"argument-error"),a&&pf(r,o,a)}s(i,n),await ku(r,i,"getOobCode",$2)}function hU(t,e){const n=df.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function fU(t,e,n){if(We(t.app))return Promise.reject(ht(t));const r=Y(t),i=Bi.credentialWithLink(e,n||Au());return $(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),ff(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pU(t,e){return Qe(t,"POST","/v1/accounts:createAuthUri",Ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mU(t,e){const n=Dy()?Au():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await pU(Y(t),r);return i||[]}async function gU(t,e){const n=Y(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&pf(n.auth,i,e);const{email:s}=await B2(n.auth,i);s!==t.email&&await t.reload()}async function _U(t,e,n){const r=Y(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&pf(r.auth,s,n);const{email:o}=await q2(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yU(t,e){return Qe(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vU(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Y(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Lr(r,yU(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function wU(t,e){const n=Y(t);return We(n.auth.app)?Promise.reject(ht(n.auth)):Bk(n,e,null)}function EU(t,e){return Bk(Y(t),null,e)}async function Bk(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Lr(t,M2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IU(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=uf(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new $o(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new TU(s,i);case"github.com":return new SU(s,i);case"google.com":return new RU(s,i);case"twitter.com":return new AU(s,i,t.screenName||null);case"custom":case"anonymous":return new $o(s,null);default:return new $o(s,r,i)}}class $o{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class zk extends $o{constructor(e,n,r,i){super(e,n,r),this.username=i}}class TU extends $o{constructor(e,n){super(e,"facebook.com",n)}}class SU extends zk{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class RU extends $o{constructor(e,n){super(e,"google.com",n)}}class AU extends zk{constructor(e,n,r){super(e,"twitter.com",n,r)}}function PU(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:IU(n)}function kU(t,e,n,r){return Y(t).onIdTokenChanged(e,n,r)}function CU(t,e,n){return Y(t).beforeAuthStateChanged(e,n)}function bU(t){return Y(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new fs("enroll",e,n)}static _fromMfaPendingCredential(e){return new fs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return fs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return fs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=He(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>tc._fromServerResponse(r,a));$(i.mfaPendingCredential,r,"internal-error");const o=fs._fromMfaPendingCredential(i.mfaPendingCredential);return new By(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await bn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return $(n.user,r,"internal-error"),bn._forOperation(n.user,n.operationType,c);default:ft(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function xU(t,e){var n;const r=Y(t),i=e;return $(e.customData.operationType,r,"argument-error"),$((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),By._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NU(t,e){return Qe(t,"POST","/v2/accounts/mfaEnrollment:start",Ke(t,e))}function DU(t,e){return Qe(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ke(t,e))}function OU(t,e){return Qe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ke(t,e))}class zy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>tc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new zy(e)}async getSession(){return fs._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Lr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Lr(this.user,OU(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const xp=new WeakMap;function VU(t){const e=Y(t);return xp.has(e)||xp.set(e,zy._fromUser(e)),xp.get(e)}const ph="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ph,"1"),this.storage.removeItem(ph),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LU(){const t=De();return Vy(t)||Da(t)}const MU=1e3,FU=10;class qk extends $k{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LU()&&w2(),this.fallbackToPolling=Rk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);v2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qk.type="LOCAL";const mf=qk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk extends $k{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wk.type="SESSION";const Di=Wk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UU(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await UU(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=nc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function BU(t){et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function zU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $U(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qU(){return $y()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk="firebaseLocalStorageDb",WU=1,mh="firebaseLocalStorage",Hk="fbase_key";class rc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _f(t,e){return t.transaction([mh],e?"readwrite":"readonly").objectStore(mh)}function GU(){const t=indexedDB.deleteDatabase(Gk);return new rc(t).toPromise()}function fg(){const t=indexedDB.open(Gk,WU);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mh,{keyPath:Hk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mh)?e(r):(r.close(),await GU(),e(await fg()))})})}async function YI(t,e,n){const r=_f(t,!0).put({[Hk]:e,value:n});return new rc(r).toPromise()}async function HU(t,e){const n=_f(t,!1).get(e),r=await new rc(n).toPromise();return r===void 0?null:r.value}function XI(t,e){const n=_f(t,!0).delete(e);return new rc(n).toPromise()}const KU=800,QU=3;class Kk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QU)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gf._getInstance(qU()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zU(),!this.activeServiceWorker)return;this.sender=new jU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$U()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fg();return await YI(e,ph,"1"),await XI(e,ph),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>YI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HU(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>XI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_f(i,!1).getAll();return new rc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kk.type="LOCAL";const ga=Kk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YU(t,e){return Qe(t,"POST","/v2/accounts/mfaSignIn:start",Ke(t,e))}function XU(t,e){return Qe(t,"POST","/v2/accounts/mfaSignIn:finalize",Ke(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JU=500,ZU=6e4,Kc=1e12;class ej{constructor(e){this.auth=e,this.counter=Kc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new tj(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Kc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Kc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Kc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class tj{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;$(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=nj(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},ZU)},JU))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function nj(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=Pk("rcb"),rj=new Ju(3e4,6e4);class ij{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=et().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return $(sj(n),e,"argument-error"),this.shouldResolveImmediately(n)&&BI(et().grecaptcha)?Promise.resolve(et().grecaptcha):new Promise((r,i)=>{const s=et().setTimeout(()=>{i(it(e,"network-request-failed"))},rj.get());et()[Np]=()=>{et().clearTimeout(s),delete et()[Np];const a=et().grecaptcha;if(!a||!BI(a)){i(it(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const f=l(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${P2()}?${Ia({onload:Np,render:"explicit",hl:n})}`;Ly(o).catch(()=>{clearTimeout(s),i(it(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=et().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function sj(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class oj{async load(e){return new ej(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk="recaptcha",aj={theme:"light",type:"image"};let lj=class{constructor(e,n,r=Object.assign({},aj)){this.parameters=r,this.type=Qk,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=He(e),this.isInvisible=this.parameters.size==="invisible",$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;$(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new oj:new ij,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){$(!this.parameters.sitekey,this.auth,"argument-error"),$(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=et()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){$(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){$(Dy()&&!$y(),this.auth,"internal-error"),await uj(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await o2(this.auth);$(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return $(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function uj(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ws._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function cj(t,e,n){if(We(t.app))return Promise.reject(ht(t));const r=He(t),i=await yf(r,e,Y(n));return new qy(i,s=>ff(r,s))}async function dj(t,e,n){const r=Y(t);await hf(!1,r,"phone");const i=await yf(r.auth,e,Y(n));return new qy(i,s=>Lk(r,s))}async function hj(t,e,n){const r=Y(t);if(We(r.auth.app))return Promise.reject(ht(r.auth));const i=await yf(r.auth,e,Y(n));return new qy(i,s=>Mk(r,s))}async function yf(t,e,n){var r;const i=await n.verify();try{$(typeof i=="string",t,"argument-error"),$(n.type===Qk,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return $(o.type==="enroll",t,"internal-error"),(await NU(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{$(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return $(a,t,"missing-multi-factor-info"),(await YU(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await K2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function fj(t,e){const n=Y(t);if(We(n.auth.app))return Promise.reject(ht(n.auth));await My(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms=class wd{constructor(e){this.providerId=wd.PROVIDER_ID,this.auth=He(e)}verifyPhoneNumber(e,n){return yf(this.auth,e,Y(n))}static credential(e,n){return ws._fromVerification(e,n)}static credentialFromResult(e){const n=e;return wd.credentialFromTaggedObject(n)}static credentialFromError(e){return wd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ws._fromTokenResponse(n,r):null}};Ms.PROVIDER_ID="phone";Ms.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e){return e?dn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy extends Oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pj(t){return Vk(t.auth,new Wy(t),t.bypassAuthState)}function mj(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Ok(n,new Wy(t),t.bypassAuthState)}async function gj(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),My(n,new Wy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pj;case"linkViaPopup":case"linkViaRedirect":return gj;case"reauthViaPopup":case"reauthViaRedirect":return mj;default:ft(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _j=new Ju(2e3,1e4);async function yj(t,e,n){if(We(t.app))return Promise.reject(it(t,"operation-not-supported-in-this-environment"));const r=He(t);Na(t,e,qr);const i=Ys(r,n);return new Ir(r,"signInViaPopup",e,i).executeNotNull()}async function vj(t,e,n){const r=Y(t);if(We(r.auth.app))return Promise.reject(it(r.auth,"operation-not-supported-in-this-environment"));Na(r.auth,e,qr);const i=Ys(r.auth,n);return new Ir(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function wj(t,e,n){const r=Y(t);Na(r.auth,e,qr);const i=Ys(r.auth,n);return new Ir(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ir extends Yk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_j.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ej="pendingRedirect",Gl=new Map;class Ij extends Yk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gl.get(this.auth._key());if(!e){try{const r=await Tj(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gl.set(this.auth._key(),e)}return this.bypassAuthState||Gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tj(t,e){const n=Jk(e),r=Xk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Gy(t,e){return Xk(t)._set(Jk(e),"true")}function Sj(){Gl.clear()}function Hy(t,e){Gl.set(t._key(),e)}function Xk(t){return dn(t._redirectPersistence)}function Jk(t){return vs(Ej,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rj(t,e,n){return Aj(t,e,n)}async function Aj(t,e,n){if(We(t.app))return Promise.reject(ht(t));const r=He(t);Na(t,e,qr),await r._initializationPromise;const i=Ys(r,n);return await Gy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Pj(t,e,n){return kj(t,e,n)}async function kj(t,e,n){const r=Y(t);if(Na(r.auth,e,qr),We(r.auth.app))return Promise.reject(ht(r.auth));await r.auth._initializationPromise;const i=Ys(r.auth,n);await Gy(i,r.auth);const s=await Zk(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Cj(t,e,n){return bj(t,e,n)}async function bj(t,e,n){const r=Y(t);Na(r.auth,e,qr),await r.auth._initializationPromise;const i=Ys(r.auth,n);await hf(!1,r,e.providerId),await Gy(i,r.auth);const s=await Zk(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function xj(t,e){return await He(t)._initializationPromise,vf(t,e,!1)}async function vf(t,e,n=!1){if(We(t.app))return Promise.reject(ht(t));const r=He(t),i=Ys(r,e),o=await new Ij(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Zk(t){const e=nc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nj=10*60*1e3;class eC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dj(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nj&&this.cachedEventUids.clear(),this.cachedEventUids.has(JI(e))}saveEventToCache(e){this.cachedEventUids.add(JI(e)),this.lastProcessedEventTime=Date.now()}}function JI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dj(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(t,e={}){return Qe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oj=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vj=/^https?/;async function Lj(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nC(t);for(const n of e)try{if(Mj(n))return}catch{}ft(t,"unauthorized-domain")}function Mj(t){const e=Au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Vj.test(n))return!1;if(Oj.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fj=new Ju(3e4,6e4);function ZI(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Uj(t){return new Promise((e,n)=>{var r,i,s;function o(){ZI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ZI(),n(it(t,"network-request-failed"))},timeout:Fj.get()})}if(!((i=(r=et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=et().gapi)===null||s===void 0)&&s.load)o();else{const a=Pk("iframefcb");return et()[a]=()=>{gapi.load?o():n(it(t,"network-request-failed"))},Ly(`${C2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ed=null,e})}let Ed=null;function jj(t){return Ed=Ed||Uj(t),Ed}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bj=new Ju(5e3,15e3),zj="__/auth/iframe",$j="emulator/auth/iframe",qj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gj(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oy(e,$j):`https://${t.config.authDomain}/${zj}`,r={apiKey:e.apiKey,appName:t.name,v:Ur},i=Wj.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ia(r).slice(1)}`}async function Hj(t){const e=await jj(t),n=et().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:Gj(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qj,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=it(t,"network-request-failed"),a=et().setTimeout(()=>{s(o)},Bj.get());function l(){et().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qj=500,Yj=600,Xj="_blank",Jj="http://localhost";class eT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zj(t,e,n,r=Qj,i=Yj){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Kj),{width:r.toString(),height:i.toString(),top:s,left:o}),c=De().toLowerCase();n&&(a=Ek(c)?Xj:n),wk(c)&&(e=e||Jj,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,R])=>`${m}${y}=${R},`,"");if(y2(c)&&a!=="_self")return eB(e||"",a),new eT(null);const f=window.open(e||"",a,d);$(f,t,"popup-blocked");try{f.focus()}catch{}return new eT(f)}function eB(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tB="__/auth/handler",nB="emulator/auth/handler",rB=encodeURIComponent("fac");async function pg(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ur,eventId:i};if(e instanceof qr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",DD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof Va){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${rB}=${encodeURIComponent(l)}`:"";return`${iB(t)}?${Ia(a).slice(1)}${c}`}function iB({config:t}){return t.emulator?Oy(t,nB):`https://${t.authDomain}/${tB}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="webStorageSupport";class sB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Di,this._completeRedirectFn=vf,this._overrideRedirectResult=Hy}async _openPopup(e,n,r,i){var s;$n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await pg(e,n,r,Au(),i);return Zj(e,o,nc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await pg(e,n,r,Au(),i);return BU(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Hj(e),r=new eC(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dp,{type:Dp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dp];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lj(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rk()||Vy()||Da()}}const rC=sB;class oB{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return nr("unexpected MultiFactorSessionType")}}}class Ky extends oB{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ky(e)}_finalizeEnroll(e,n,r){return DU(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return XU(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class iC{constructor(){}static assertion(e){return Ky._fromCredential(e)}}iC.FACTOR_ID="phone";var tT="@firebase/auth",nT="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lB(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uB(t){Dr(new Cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ak(t)},c=new R2(r,i,s,l);return O2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dr(new Cn("auth-internal",e=>{const n=He(e.getProvider("auth").getImmediate());return(r=>new aB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(tT,nT,lB(t)),fn(tT,nT,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cB=5*60,dB=ER("authIdTokenMaxAge")||cB;let rT=null;const hB=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dB)return;const i=n==null?void 0:n.token;rT!==i&&(rT=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fB(t=jh()){const e=Ta(t,"auth");if(e.isInitialized())return e.getImmediate();const n=D2(t,{popupRedirectResolver:rC,persistence:[ga,mf,Di]}),r=ER("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=hB(s.toString());CU(n,o,()=>o(n.currentUser)),kU(n,a=>o(a))}}const i=yR("auth");return i&&kk(n,`http://${i}`),n}function pB(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}A2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=it("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pB().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uB("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mB=2e3;async function gB(t,e,n){var r;const{BuildInfo:i}=Fs();$n(e.sessionId,"AuthEvent did not contain a session ID");const s=await EB(e.sessionId),o={};return Da()?o.ibi=i.packageName:Zu()?o.apn=i.packageName:ft(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,pg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function _B(t){const{BuildInfo:e}=Fs(),n={};Da()?n.iosBundleId=e.packageName:Zu()?n.androidPackageName=e.packageName:ft(t,"operation-not-supported-in-this-environment"),await nC(t,n)}function yB(t){const{cordova:e}=Fs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,_2()?"_blank":"_system","location=yes"),n(i)})})}async function vB(t,e,n){const{cordova:r}=Fs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(it(t,"redirect-cancelled-by-user"))},mB))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Zu()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function wB(t){var e,n,r,i,s,o,a,l,c,d;const f=Fs();$(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),$(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),$(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),$(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),$(typeof((d=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function EB(t){const e=IB(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function IB(t){if($n(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TB=20;class SB extends eC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function RB(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:kB(),postBody:null,tenantId:t.tenantId,error:it(t,"no-auth-event")}}function AB(t,e){return mg()._set(gg(t),e)}async function iT(t){const e=await mg()._get(gg(t));return e&&await mg()._remove(gg(t)),e}function PB(t,e){var n,r;const i=bB(e);if(i.includes("/__/auth/callback")){const s=Id(i),o=s.firebaseError?CB(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?it(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function kB(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<TB;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function mg(){return dn(mf)}function gg(t){return vs("authEvent",t.config.apiKey,t.name)}function CB(t){try{return JSON.parse(t)}catch{return null}}function bB(t){const e=Id(t),n=e.link?decodeURIComponent(e.link):void 0,r=Id(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Id(i).link||i||r||n||t}function Id(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return xo(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xB=500;class NB{constructor(){this._redirectPersistence=Di,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=vf,this._overrideRedirectResult=Hy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new SB(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ft(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){wB(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Sj(),await this._originValidation(e);const o=RB(e,r,i);await AB(e,o);const a=await gB(e,o,n),l=await yB(a);return vB(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_B(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Fs(),o=setTimeout(async()=>{await iT(e),n.onEvent(sT())},xB),a=async d=>{clearTimeout(o);const f=await iT(e);let m=null;f&&(d!=null&&d.url)&&(m=PB(f,d.url)),n.onEvent(m||sT())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;Fs().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const DB=NB;function sT(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:it("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OB(t,e){He(t)._logFramework(e)}var VB="@firebase/auth-compat",LB="0.5.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MB=1e3;function Hl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function FB(){return Hl()==="http:"||Hl()==="https:"}function sC(t=De()){return!!((Hl()==="file:"||Hl()==="ionic:"||Hl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function UB(){return A_()||R_()}function jB(){return AR()&&(document==null?void 0:document.documentMode)===11}function BB(t=De()){return/Edge\/\d+/.test(t)}function zB(t=De()){return jB()||BB(t)}function oC(){try{const t=self.localStorage,e=nc();if(t)return t.setItem(e,"1"),t.removeItem(e),zB()?fu():!0}catch{return Qy()&&fu()}return!1}function Qy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Op(){return(FB()||RR()||sC())&&!UB()&&oC()&&!Qy()}function aC(){return sC()&&typeof document<"u"}async function $B(){return aC()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},MB);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function qB(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={LOCAL:"local",NONE:"none",SESSION:"session"},pl=$,lC="persistence";function WB(t,e){if(pl(Object.values(ln).includes(e),t,"invalid-persistence-type"),A_()){pl(e!==ln.SESSION,t,"unsupported-persistence-type");return}if(R_()){pl(e===ln.NONE,t,"unsupported-persistence-type");return}if(Qy()){pl(e===ln.NONE||e===ln.LOCAL&&fu(),t,"unsupported-persistence-type");return}pl(e===ln.NONE||oC(),t,"unsupported-persistence-type")}async function _g(t){await t._initializationPromise;const e=uC(),n=vs(lC,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function GB(t,e){const n=uC();if(!n)return[];const r=vs(lC,t,e);switch(n.getItem(r)){case ln.NONE:return[pa];case ln.LOCAL:return[ga,Di];case ln.SESSION:return[Di];default:return[]}}function uC(){var t;try{return((t=qB())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HB=$;class ci{constructor(){this.browserResolver=dn(rC),this.cordovaResolver=dn(DB),this.underlyingResolver=null,this._redirectPersistence=Di,this._completeRedirectFn=vf,this._overrideRedirectResult=Hy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return aC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return HB(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await $B();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){return t.unwrap()}function KB(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QB(t){return dC(t)}function YB(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new XB(t,xU(t,e))}else if(r){const i=dC(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function dC(t){const{_tokenResponse:e}=t instanceof bt?t.customData:t;if(!e)return null;if(!(t instanceof bt)&&"temporaryProof"in e&&"phoneNumber"in e)return Ms.credentialFromResult(t);const n=e.providerId;if(!n||n===fl.PASSWORD)return null;let r;switch(n){case fl.GOOGLE:r=Yn;break;case fl.FACEBOOK:r=Qn;break;case fl.GITHUB:r=Xn;break;case fl.TWITTER:r=Jn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ma._create(n,a):cr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new zo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof bt?r.credentialFromError(t):r.credentialFromResult(t)}function Kt(t,e){return e.catch(n=>{throw n instanceof bt&&YB(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:QB(n),additionalUserInfo:PU(n),user:Tr.getOrCreate(i)}})}async function yg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Kt(t,n.confirm(r))}}class XB{constructor(e,n){this.resolver=n,this.auth=KB(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Kt(cC(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this._delegate=e,this.multiFactor=VU(e)}static getOrCreate(e){return Tr.USER_MAP.has(e)||Tr.USER_MAP.set(e,new Tr(e)),Tr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Kt(this.auth,Lk(this._delegate,e))}async linkWithPhoneNumber(e,n){return yg(this.auth,dj(this._delegate,e,n))}async linkWithPopup(e){return Kt(this.auth,wj(this._delegate,e,ci))}async linkWithRedirect(e){return await _g(He(this.auth)),Cj(this._delegate,e,ci)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Kt(this.auth,Mk(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return yg(this.auth,hj(this._delegate,e,n))}reauthenticateWithPopup(e){return Kt(this.auth,vj(this._delegate,e,ci))}async reauthenticateWithRedirect(e){return await _g(He(this.auth)),Pj(this._delegate,e,ci)}sendEmailVerification(e){return gU(this._delegate,e)}async unlink(e){return await iU(this._delegate,e),this}updateEmail(e){return wU(this._delegate,e)}updatePassword(e){return EU(this._delegate,e)}updatePhoneNumber(e){return fj(this._delegate,e)}updateProfile(e){return vU(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return _U(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Tr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=$;class vg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ml(r,"invalid-api-key",{appName:e.name}),ml(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ci:void 0;this._delegate=n.initialize({options:{persistence:JB(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(YF),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Tr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){kk(this._delegate,e,n)}applyActionCode(e){return uU(this._delegate,e)}checkActionCode(e){return Fk(this._delegate,e)}confirmPasswordReset(e,n){return lU(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Kt(this._delegate,Uk(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return mU(this._delegate,e)}isSignInWithEmailLink(e){return hU(this._delegate,e)}async getRedirectResult(){ml(Op(),this._delegate,"operation-not-supported-in-this-environment");const e=await xj(this._delegate,ci);return e?Kt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){OB(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=oT(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=oT(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return dU(this._delegate,e,n)}sendPasswordResetEmail(e,n){return aU(this._delegate,e,n||void 0)}async setPersistence(e){WB(this._delegate,e);let n;switch(e){case ln.SESSION:n=Di;break;case ln.LOCAL:n=await dn(ga)._isAvailable()?ga:mf;break;case ln.NONE:n=pa;break;default:return ft("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Kt(this._delegate,rU(this._delegate))}signInWithCredential(e){return Kt(this._delegate,ff(this._delegate,e))}signInWithCustomToken(e){return Kt(this._delegate,oU(this._delegate,e))}signInWithEmailAndPassword(e,n){return Kt(this._delegate,jk(this._delegate,e,n))}signInWithEmailLink(e,n){return Kt(this._delegate,fU(this._delegate,e,n))}signInWithPhoneNumber(e,n){return yg(this._delegate,cj(this._delegate,e,n))}async signInWithPopup(e){return ml(Op(),this._delegate,"operation-not-supported-in-this-environment"),Kt(this._delegate,yj(this._delegate,e,ci))}async signInWithRedirect(e){return ml(Op(),this._delegate,"operation-not-supported-in-this-environment"),await _g(this._delegate),Rj(this._delegate,e,ci)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return cU(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}vg.Persistence=ln;function oT(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Tr.getOrCreate(o)),error:e,complete:n}}function JB(t,e){const n=GB(t,e);if(typeof self<"u"&&!n.includes(ga)&&n.push(ga),typeof window<"u")for(const r of[mf,Di])n.includes(r)||n.push(r);return n.includes(pa)||n.push(pa),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.providerId="phone",this._delegate=new Ms(cC(Qs.auth()))}static credential(e,n){return Ms.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Yy.PHONE_SIGN_IN_METHOD=Ms.PHONE_SIGN_IN_METHOD;Yy.PROVIDER_ID=Ms.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZB=$;class e4{constructor(e,n,r=Qs.app()){var i;ZB((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new lj(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4="auth-compat";function n4(t){t.INTERNAL.registerComponent(new Cn(t4,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new vg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:co.EMAIL_SIGNIN,PASSWORD_RESET:co.PASSWORD_RESET,RECOVER_EMAIL:co.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:co.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:co.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:co.VERIFY_EMAIL}},EmailAuthProvider:Bi,FacebookAuthProvider:Qn,GithubAuthProvider:Xn,GoogleAuthProvider:Yn,OAuthProvider:zo,SAMLAuthProvider:hh,PhoneAuthProvider:Yy,PhoneMultiFactorGenerator:iC,RecaptchaVerifier:e4,TwitterAuthProvider:Jn,Auth:vg,AuthCredential:Oa,Error:bt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(VB,LB)}n4(Qs);const r4="@firebase/firestore-compat",i4="0.3.33";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new j("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){if(typeof Uint8Array>"u")throw new j("unimplemented","Uint8Arrays are not available in this environment.")}function lT(){if(!RV())throw new j("unimplemented","Blobs are unavailable in Firestore in this environment.")}let hC=class wg{constructor(e){this._delegate=e}static fromBase64String(e){return lT(),new wg(ur.fromBase64String(e))}static fromUint8Array(e){return aT(),new wg(ur.fromUint8Array(e))}toBase64(){return lT(),this._delegate.toBase64()}toUint8Array(){return aT(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){return s4(t,["next","error","complete"])}function s4(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{enableIndexedDbPersistence(e,n){return rF(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return iF(e._delegate)}clearIndexedDbPersistence(e){return sF(e._delegate)}}class fC{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Pi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&zn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){BP(this._delegate,e,n,r)}enableNetwork(){return aF(this._delegate)}disableNetwork(){return lF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,UP("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return oF(this._delegate)}onSnapshotsInSync(e){return bF(this._delegate,e)}get app(){if(!this._appCompat)throw new j("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new _a(this,$l(this._delegate,e))}catch(n){throw Mt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Tn(this,fa(this._delegate,e))}catch(n){throw Mt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Lt(this,JM(this._delegate,e))}catch(n){throw Mt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return OF(this._delegate,n=>e(new pC(this,n)))}batch(){return mt(this._delegate),new mC(new NF(this._delegate,e=>Xu(this._delegate,e)))}loadBundle(e){return uF(this._delegate,e)}namedQuery(e){return cF(this._delegate,e).then(n=>n?new Lt(this,n):null)}}class wf extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new hC(new ur(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Tn.forKey(n,this.firestore,null)}}function a4(t){GO(t)}class pC{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new wf(e)}get(e){const n=ps(e);return this._delegate.get(n).then(r=>new bu(this._firestore,new Vr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=ps(e);return r?(Xy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ps(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ps(e);return this._delegate.delete(n),this}}class mC{constructor(e){this._delegate=e}set(e,n,r){const i=ps(e);return r?(Xy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ps(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ps(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Us{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new ql(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new xu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Us.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Us(e,new wf(e),n),i.set(n,s)),s}}Us.INSTANCES=new WeakMap;class Tn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new wf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new j("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Tn(n,new Le(n._delegate,r,new G(e)))}static forKey(e,n,r){return new Tn(n,new Le(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new _a(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new _a(this.firestore,$l(this._delegate,e))}catch(n){throw Mt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Y(e),e instanceof Le?WP(this._delegate,e):!1}set(e,n){n=Xy("DocumentReference.set",n);try{return n?MI(this._delegate,e,n):MI(this._delegate,e)}catch(r){throw Mt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?dg(this._delegate,e):dg(this._delegate,e,n,...r)}catch(i){throw Mt(i,"updateDoc()","DocumentReference.update()")}}delete(){return lk(this._delegate)}onSnapshot(...e){const n=gC(e),r=_C(e,i=>new bu(this.firestore,new Vr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ck(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=AF(this._delegate):(e==null?void 0:e.source)==="server"?n=PF(this._delegate):n=RF(this._delegate),n.then(r=>new bu(this.firestore,new Vr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Tn(this.firestore,e?this._delegate.withConverter(Us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Mt(t,e,n){return t.message=t.message.replace(e,n),t}function gC(t){for(const e of t)if(typeof e=="object"&&!Eg(e))return e;return{}}function _C(t,e){var n,r;let i;return Eg(t[0])?i=t[0]:Eg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class bu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Tn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return ak(this._delegate,e._delegate)}}class xu extends bu{data(e){const n=this._delegate.data(e);return this._delegate._converter||HO(n!==void 0),n}}class Lt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new wf(e)}where(e,n,r){try{return new Lt(this.firestore,mr(this._delegate,ik(e,n,r)))}catch(i){throw Mt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Lt(this.firestore,mr(this._delegate,gF(e,n)))}catch(r){throw Mt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Lt(this.firestore,mr(this._delegate,_F(e)))}catch(n){throw Mt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Lt(this.firestore,mr(this._delegate,yF(e)))}catch(n){throw Mt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Lt(this.firestore,mr(this._delegate,vF(...e)))}catch(n){throw Mt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Lt(this.firestore,mr(this._delegate,wF(...e)))}catch(n){throw Mt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Lt(this.firestore,mr(this._delegate,EF(...e)))}catch(n){throw Mt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Lt(this.firestore,mr(this._delegate,IF(...e)))}catch(n){throw Mt(n,"endAt()","Query.endAt()")}}isEqual(e){return GP(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=kF(this._delegate):(e==null?void 0:e.source)==="server"?n=CF(this._delegate):n=cg(this._delegate),n.then(r=>new Ig(this.firestore,new Ni(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=gC(e),r=_C(e,i=>new Ig(this.firestore,new Ni(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ck(this._delegate,n,r)}withConverter(e){return new Lt(this.firestore,e?this._delegate.withConverter(Us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class l4{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new xu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ig{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Lt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new xu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new l4(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new xu(this._firestore,r))})}isEqual(e){return ak(this._delegate,e._delegate)}}class _a extends Lt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Tn(this.firestore,e):null}doc(e){try{return e===void 0?new Tn(this.firestore,fa(this._delegate)):new Tn(this.firestore,fa(this._delegate,e))}catch(n){throw Mt(n,"doc()","CollectionReference.doc()")}}add(e){return uk(this._delegate,e).then(n=>new Tn(this.firestore,n))}isEqual(e){return WP(this._delegate,e._delegate)}withConverter(e){return new _a(this.firestore,e?this._delegate.withConverter(Us.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ps(t){return he(t,Le)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(...e){this._delegate=new xi(...e)}static documentId(){return new Jy(be.keyField().canonicalString())}isEqual(e){return e=Y(e),e instanceof xi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this._delegate=e}static serverTimestamp(){const e=LF();return e._methodName="FieldValue.serverTimestamp",new ls(e)}static delete(){const e=VF();return e._methodName="FieldValue.delete",new ls(e)}static arrayUnion(...e){const n=MF(...e);return n._methodName="FieldValue.arrayUnion",new ls(n)}static arrayRemove(...e){const n=FF(...e);return n._methodName="FieldValue.arrayRemove",new ls(n)}static increment(e){const n=UF(e);return n._methodName="FieldValue.increment",new ls(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u4={Firestore:fC,GeoPoint:Zh,Timestamp:Ne,Blob:hC,Transaction:pC,WriteBatch:mC,DocumentReference:Tn,DocumentSnapshot:bu,Query:Lt,QueryDocumentSnapshot:xu,QuerySnapshot:Ig,CollectionReference:_a,FieldPath:Jy,FieldValue:ls,setLogLevel:a4,CACHE_SIZE_UNLIMITED:tF};function c4(t,e){t.INTERNAL.registerComponent(new Cn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},u4)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d4(t){c4(t,(e,n)=>new fC(e,n,new o4)),t.registerVersion(r4,i4)}d4(Qs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="firebasestorage.googleapis.com",vC="storageBucket",h4=2*60*1e3,f4=10*60*1e3,p4=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends bt{constructor(e,n,r=0){super(Vp(e),`Firebase Storage: ${n} (${Vp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function Vp(t){return"storage/"+t}function Zy(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(ke.UNKNOWN,t)}function m4(t){return new Ue(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function g4(t){return new Ue(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(ke.UNAUTHENTICATED,t)}function y4(){return new Ue(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function v4(t){return new Ue(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function wC(){return new Ue(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function EC(){return new Ue(ke.CANCELED,"User canceled the upload/download.")}function w4(t){return new Ue(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function E4(t){return new Ue(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function I4(){return new Ue(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vC+"' property when initializing the app?")}function IC(){return new Ue(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function T4(){return new Ue(ke.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function S4(){return new Ue(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function R4(t){return new Ue(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qo(t){return new Ue(ke.INVALID_ARGUMENT,t)}function TC(){return new Ue(ke.APP_DELETED,"The Firebase app was deleted.")}function SC(t){return new Ue(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Kl(t,e){return new Ue(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function gl(t){throw new Ue(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ct.makeFromUrl(e,n)}catch{return new Ct(e,"")}if(r.path==="")return r;throw E4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},A=n===yC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",w=new RegExp(`^https?://${A}/${i}/${b}`,"i"),I=[{regex:a,indices:l,postModify:s},{regex:y,indices:R,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<I.length;N++){const F=I[N],U=F.regex.exec(e);if(U){const E=U[F.indices.bucket];let _=U[F.indices.path];_||(_=""),r=new Ct(E,_),F.postModify(r);break}}if(r==null)throw w4(e);return r}}class A4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P4(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(y,l())},b)}function m(){s&&clearTimeout(s)}function y(b,...w){if(c){m();return}if(b){m(),d.call(null,b,...w);return}if(l()||o){m(),d.call(null,b,...w);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let R=!1;function A(b){R||(R=!0,m(),!c&&(i!==null?(b||(a=2),clearTimeout(i),f(0)):b||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,A(!0)},n),A}function k4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C4(t){return t!==void 0}function b4(t){return typeof t=="function"}function x4(t){return typeof t=="object"&&!Array.isArray(t)}function Ef(t){return typeof t=="string"||t instanceof String}function uT(t){return ev()&&t instanceof Blob}function ev(){return typeof Blob<"u"}function Tg(t,e,n,r){if(r<e)throw qo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function RC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Es;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Es||(Es={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e,n,r,i,s,o,a,l,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,R)=>{this.resolve_=y,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Qc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Es.NO_ERROR,l=s.getStatus();if(!a||AC(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Es.ABORT;r(!1,new Qc(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Qc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());C4(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Zy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?TC():EC();o(l)}else{const l=wC();o(l)}};this.canceled_?n(!1,new Qc(!1,null,!0)):this.backoffId_=P4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&k4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function D4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function O4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function V4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function L4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function M4(t,e,n,r,i,s,o=!0){const a=RC(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return V4(c,e),D4(c,n),O4(c,s),L4(c,r),new N4(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function U4(...t){const e=F4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ev())return new Blob(t);throw new Ue(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function j4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B4(t){if(typeof atob>"u")throw R4("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Lp{constructor(e,n){this.data=e,this.contentType=n||null}}function PC(t,e){switch(t){case Sn.RAW:return new Lp(kC(e));case Sn.BASE64:case Sn.BASE64URL:return new Lp(CC(t,e));case Sn.DATA_URL:return new Lp($4(e),q4(e))}throw Zy()}function kC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function z4(t){let e;try{e=decodeURIComponent(t)}catch{throw Kl(Sn.DATA_URL,"Malformed data URL.")}return kC(e)}function CC(t,e){switch(t){case Sn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Kl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Sn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Kl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=B4(e)}catch(i){throw i.message.includes("polyfill")?i:Kl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class bC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Kl(Sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=W4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function $4(t){const e=new bC(t);return e.base64?CC(Sn.BASE64,e.rest):z4(e.rest)}function q4(t){return new bC(t).contentType}function W4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){let r=0,i="";uT(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(uT(this.data_)){const r=this.data_,i=j4(r,e,n);return i===null?null:new Zn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Zn(r,!0)}}static getBlob(...e){if(ev()){const n=e.map(r=>r instanceof Zn?r.data_:r);return new Zn(U4.apply(null,n))}else{const n=e.map(o=>Ef(o)?PC(Sn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Zn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){let e;try{e=JSON.parse(t)}catch{return null}return x4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function H4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function xC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(t,e){return e}class Ot{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||K4}}let Yc=null;function Q4(t){return!Ef(t)||t.length<2?t:xC(t)}function ic(){if(Yc)return Yc;const t=[];t.push(new Ot("bucket")),t.push(new Ot("generation")),t.push(new Ot("metageneration")),t.push(new Ot("name","fullPath",!0));function e(s,o){return Q4(o)}const n=new Ot("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ot("size");return i.xform=r,t.push(i),t.push(new Ot("timeCreated")),t.push(new Ot("updated")),t.push(new Ot("md5Hash",null,!0)),t.push(new Ot("cacheControl",null,!0)),t.push(new Ot("contentDisposition",null,!0)),t.push(new Ot("contentEncoding",null,!0)),t.push(new Ot("contentLanguage",null,!0)),t.push(new Ot("contentType",null,!0)),t.push(new Ot("metadata","customMetadata",!0)),Yc=t,Yc}function Y4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ct(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function X4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Y4(r,t),r}function NC(t,e,n){const r=tv(e);return r===null?null:X4(t,r,n)}function J4(t,e,n,r){const i=tv(e);if(i===null||!Ef(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),y=zi(m,n,r),R=RC({alt:"media",token:c});return y+R})[0]}function nv(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="prefixes",dT="items";function Z4(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[cT])for(const i of n[cT]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Ct(e,s));r.prefixes.push(o)}if(n[dT])for(const i of n[dT]){const s=t._makeStorageReference(new Ct(e,i.name));r.items.push(s)}return r}function ez(t,e,n){const r=tv(n);return r===null?null:Z4(t,e,r)}class Wr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){if(!t)throw Zy()}function If(t,e){function n(r,i){const s=NC(t,i,e);return ar(s!==null),s}return n}function tz(t,e){function n(r,i){const s=ez(t,e,i);return ar(s!==null),s}return n}function nz(t,e){function n(r,i){const s=NC(t,i,e);return ar(s!==null),J4(s,i,t.host,t._protocol)}return n}function La(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=y4():i=_4():n.getStatus()===402?i=g4(t.bucket):n.getStatus()===403?i=v4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Tf(t){const e=La(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=m4(t.path)),s.serverResponse=i.serverResponse,s}return n}function DC(t,e,n){const r=e.fullServerUrl(),i=zi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Wr(i,s,If(t,n),o);return a.errorHandler=Tf(e),a}function rz(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=zi(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,d=new Wr(a,l,tz(t,e.bucket),c);return d.urlParams=s,d.errorHandler=La(e),d}function iz(t,e,n){const r=e.fullServerUrl(),i=zi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Wr(i,s,nz(t,n),o);return a.errorHandler=Tf(e),a}function sz(t,e,n,r){const i=e.fullServerUrl(),s=zi(i,t.host,t._protocol),o="PATCH",a=nv(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,d=new Wr(s,o,If(t,r),c);return d.headers=l,d.body=a,d.errorHandler=Tf(e),d}function oz(t,e){const n=e.fullServerUrl(),r=zi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new Wr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Tf(e),a}function az(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function OC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=az(null,e)),r}function VC(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let N=0;N<2;N++)I=I+Math.random().toString().slice(2);return I}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=OC(e,r,i),d=nv(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+l+"--",y=Zn.getBlob(f,r,m);if(y===null)throw IC();const R={name:c.fullPath},A=zi(s,t.host,t._protocol),b="POST",w=t.maxUploadRetryTime,v=new Wr(A,b,If(t,n),w);return v.urlParams=R,v.headers=o,v.body=y.uploadData(),v.errorHandler=La(e),v}class gh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function rv(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{ar(!1)}return ar(!!n&&(e||["active"]).indexOf(n)!==-1),n}function lz(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=OC(e,r,i),a={name:o.fullPath},l=zi(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=nv(o,n),m=t.maxUploadRetryTime;function y(A){rv(A);let b;try{b=A.getResponseHeader("X-Goog-Upload-URL")}catch{ar(!1)}return ar(Ef(b)),b}const R=new Wr(l,c,y,m);return R.urlParams=a,R.headers=d,R.body=f,R.errorHandler=La(e),R}function uz(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=rv(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ar(!1)}f||ar(!1);const m=Number(f);return ar(!isNaN(m)),new gh(m,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Wr(n,o,s,a);return l.headers=i,l.errorHandler=La(e),l}const hT=256*1024;function cz(t,e,n,r,i,s,o,a){const l=new gh(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw T4();const c=l.total-l.current;let d=c;i>0&&(d=Math.min(d,i));const f=l.current,m=f+d;let y="";d===0?y="finalize":c===d?y="upload, finalize":y="upload";const R={"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":`${l.current}`},A=r.slice(f,m);if(A===null)throw IC();function b(N,F){const U=rv(N,["active","final"]),E=l.current+d,_=r.size();let T;return U==="final"?T=If(e,s)(N,F):T=null,new gh(E,_,U==="final",T)}const w="POST",v=e.maxUploadRetryTime,I=new Wr(n,w,b,v);return I.headers=R,I.body=A.uploadData(),I.progressCallback=a||null,I.errorHandler=La(t),I}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dz={STATE_CHANGED:"state_changed"},Ft={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Mp(t){switch(t){case"running":case"pausing":case"canceling":return Ft.RUNNING;case"paused":return Ft.PAUSED;case"success":return Ft.SUCCESS;case"canceled":return Ft.CANCELED;case"error":return Ft.ERROR;default:return Ft.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hz{constructor(e,n,r){if(b4(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class fz{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Es.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Es.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Es.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw gl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class pz extends fz{initXhr(){this.xhr_.responseType="text"}}function Fn(){return new pz}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=ic(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ke.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(AC(i.status,[]))if(s)i=wC();else{this.sleepTime=Math.max(this.sleepTime*2,p4),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ke.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=lz(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Fn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=uz(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Fn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=hT*this._chunkMultiplier,n=new gh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=cz(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Fn,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){hT*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=DC(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Fn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=VC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Fn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=EC(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Mp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new hz(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Mp(this._state)){case Ft.SUCCESS:ho(this._resolve.bind(null,this.snapshot))();break;case Ft.CANCELED:case Ft.ERROR:const n=this._reject;ho(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Mp(this._state)){case Ft.RUNNING:case Ft.PAUSED:e.next&&ho(e.next.bind(e,this.snapshot))();break;case Ft.SUCCESS:e.complete&&ho(e.complete.bind(e))();break;case Ft.CANCELED:case Ft.ERROR:e.error&&ho(e.error.bind(e,this._error))();break;default:e.error&&ho(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this._service=e,n instanceof Ct?this._location=n:this._location=Ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new js(e,n)}get root(){const e=new Ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xC(this._location.path)}get storage(){return this._service}get parent(){const e=G4(this._location.path);if(e===null)return null;const n=new Ct(this._location.bucket,e);return new js(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw SC(e)}}function mz(t,e,n){t._throwIfRoot("uploadBytes");const r=VC(t.storage,t._location,ic(),new Zn(e,!0),n);return t.storage.makeRequestWithTokens(r,Fn).then(i=>({metadata:i,ref:t}))}function gz(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new LC(t,new Zn(e),n)}function _z(t){const e={prefixes:[],items:[]};return MC(t,e).then(()=>e)}async function MC(t,e,n){const i=await FC(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await MC(t,e,i.nextPageToken)}function FC(t,e){e!=null&&typeof e.maxResults=="number"&&Tg("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=rz(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Fn)}function yz(t){t._throwIfRoot("getMetadata");const e=DC(t.storage,t._location,ic());return t.storage.makeRequestWithTokens(e,Fn)}function vz(t,e){t._throwIfRoot("updateMetadata");const n=sz(t.storage,t._location,e,ic());return t.storage.makeRequestWithTokens(n,Fn)}function wz(t){t._throwIfRoot("getDownloadURL");const e=iz(t.storage,t._location,ic());return t.storage.makeRequestWithTokens(e,Fn).then(n=>{if(n===null)throw S4();return n})}function Ez(t){t._throwIfRoot("deleteObject");const e=oz(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Fn)}function UC(t,e){const n=H4(t._location.path,e),r=new Ct(t._location.bucket,n);return new js(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iz(t){return/^[A-Za-z]+:\/\//.test(t)}function Tz(t,e){return new js(t,e)}function jC(t,e){if(t instanceof iv){const n=t;if(n._bucket==null)throw I4();const r=new js(n,n._bucket);return e!=null?jC(r,e):r}else return e!==void 0?UC(t,e):t}function Sz(t,e){if(e&&Iz(e)){if(t instanceof iv)return Tz(t,e);throw qo("To use ref(service, url), the first argument must be a Storage instance.")}else return jC(t,e)}function fT(t,e){const n=e==null?void 0:e[vC];return n==null?null:Ct.makeFromBucketSpec(n,t)}function Rz(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:IR(i,t.app.options.projectId))}class iv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=yC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=h4,this._maxUploadRetryTime=f4,this._requests=new Set,i!=null?this._bucket=Ct.makeFromBucketSpec(i,this._host):this._bucket=fT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,e):this._bucket=fT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new js(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new A4(TC());{const o=M4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const pT="@firebase/storage",mT="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC="storage";function Az(t,e,n){return t=Y(t),mz(t,e,n)}function Pz(t,e,n){return t=Y(t),gz(t,e,n)}function kz(t){return t=Y(t),yz(t)}function Cz(t,e){return t=Y(t),vz(t,e)}function bz(t,e){return t=Y(t),FC(t,e)}function xz(t){return t=Y(t),_z(t)}function zC(t){return t=Y(t),wz(t)}function $C(t){return t=Y(t),Ez(t)}function _h(t,e){return t=Y(t),Sz(t,e)}function Nz(t,e){return UC(t,e)}function Dz(t=jh(),e){t=Y(t);const r=Ta(t,BC).getImmediate({identifier:e}),i=vR("storage");return i&&qC(r,...i),r}function qC(t,e,n,r={}){Rz(t,e,n,r)}function Oz(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new iv(n,r,i,e,Ur)}function Vz(){Dr(new Cn(BC,Oz,"PUBLIC").setMultipleInstances(!0)),fn(pT,mT,""),fn(pT,mT,"esm2017")}Vz();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Xc(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Xc(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Xc(o,this,this._ref)):s={next:n.next?o=>n.next(new Xc(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class _T{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Pr(e,this._service))}get items(){return this._delegate.items.map(e=>new Pr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=Nz(this._delegate,e);return new Pr(n,this.storage)}get root(){return new Pr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Pr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new gT(Pz(this._delegate,e,n),this)}putString(e,n=Sn.RAW,r){this._throwIfRoot("putString");const i=PC(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new gT(new LC(this._delegate,new Zn(i.data,!0),s),this)}listAll(){return xz(this._delegate).then(e=>new _T(e,this.storage))}list(e){return bz(this._delegate,e||void 0).then(n=>new _T(n,this.storage))}getMetadata(){return kz(this._delegate)}updateMetadata(e){return Cz(this._delegate,e)}getDownloadURL(){return zC(this._delegate)}delete(){return this._throwIfRoot("delete"),$C(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw SC(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(yT(e))throw qo("ref() expected a child path but got a URL, use refFromURL instead.");return new Pr(_h(this._delegate,e),this)}refFromURL(e){if(!yT(e))throw qo("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Ct.makeFromUrl(e,this._delegate.host)}catch{throw qo("refFromUrl() expected a valid full URL but got an invalid one.")}return new Pr(_h(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){qC(this._delegate,e,n,r)}}function yT(t){return/^[A-Za-z]+:\/\//.test(t)}const Lz="@firebase/storage-compat",Mz="0.3.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fz="storage-compat";function Uz(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new WC(n,r)}function jz(t){const e={TaskState:Ft,TaskEvent:dz,StringFormat:Sn,Storage:WC,Reference:Pr};t.INTERNAL.registerComponent(new Cn(Fz,Uz,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Lz,Mz)}jz(Qs);const sv=Qs.initializeApp({apiKey:"AIzaSyAp9XrnMQ2kd-L8I2kVOZJctYBAT-h66tM",authDomain:"polanco-25ef9.firebaseapp.com",projectId:"polanco-25ef9",storageBucket:"polanco-25ef9.appspot.com",messagingSenderId:"804200542961",appId:"1:804200542961:web:010ee2a2d4e45ec098af50"}),ov=fB(sv),_l=nF(sv),vT=Dz(sv),Sf=O.createContext(),Bz=t=>{const[e,n]=O.useState([]),r=mr($l(_l,"inventario"),ik("email","==",localStorage.getItem("userEmailLS"))),i=$l(_l,"reloj"),[s,o]=O.useState(),[a,l]=O.useState(!0);O.useEffect(()=>{cg(r).then(A=>{A.size===0&&console.log("No results!");const b=A.docs.map(w=>({id:w.id,...w.data()}));n(b)}).catch(A=>{console.log("Error searching items",A)}),cg(i).then(A=>{A.size===0&&console.log("No results Reloj!");const b=A.docs.map(w=>({...w.data()}));o(b[0].reloj)}).catch(A=>{console.log("Error searching items",A)})},[a]),console.log("relojFirebase",s);const c=$l(_l,"inventario");let d=Date.now(),f=JSON.parse(localStorage.reloj);if(console.log(f),d>=f&&d<=f+864e5){let A=f+864e5;console.log("hoy:",d,"manana:",A)}else{let A=f+864e5;localStorage.setItem("reloj",A),console.log("new update")}const m=(A,b)=>{const w=_h(vT,`projectFiles/${A==null?void 0:A.name}`);Az(w,A).then(()=>{zC(w).then(v=>{b.imgName=A.name,b.imgUrl=v,uk(c,b),l(!a)})}).catch(v=>console.log(v))},y=async(A,b)=>{const w=fa(_l,"inventario",A);try{await lk(w);const v=_h(vT,`projectFiles/${b}`);$C(v).then(()=>{console.log(b,"se elimino de Storage")}).catch(I=>{console.log("ocurrio un error: ",I)})}catch(v){console.error(v)}},R=async(A,b)=>{const w=fa(_l,"inventario",A);try{await dg(w,b)}catch(v){console.error(v)}};return k.jsx(Sf.Provider,{value:{items:e,deleteById:y,UpdateById:R,handleFileAdd:m,postCollection:c,setToggle:l,toggle:a},children:t.children})},zz=({setAuction:t})=>{const{handleFileAdd:e}=O.useContext(Sf),[n,r]=O.useState(),i=S=>new Promise(C=>{yD.imageFileResizer(S,600,600,"JPEG",120,0,x=>{C(x)},"base64")}),s=async S=>{const C=S.target.files[0],x=await i(C);fetch(x).then(P=>P.blob()).then(P=>{const je=new File([P],Date.now()+".jpeg",{type:"image/jpeg"});r(je)})},[o,a]=O.useState(!1),[l,c]=O.useState(""),[d,f]=O.useState(""),m=S=>{let x=S.target.value.toLowerCase().split(",");f(x)},y=O.useRef(),R=O.useRef(),A=O.useRef(),b=O.useRef(),w=O.useRef(),v=O.useRef(),I=O.useRef(),N=O.useRef(),F=O.useRef(),U=()=>a(!0),E=()=>a(!1),_=["image/png","image/jpeg","image/jpg"],T=async S=>{var je;if(S.preventDefault(),c(""),!_.includes((je=v.current)==null?void 0:je.files[0].type))return c("por favor use una imagen valida (png, jpeg, jpg)");let C=new Date,x=C.setHours(C.getHours()),P={email:localStorage.getItem("userEmailLS"),name:y.current.value,para:R.current.value,category:A.current.value,price:Number(b.current.value),marca:w.current.value,duration:x,tela:I.current.value,stockSanCarlos:Number(N.current.value),talla:d,sucursal:"San Carlos",description:F.current.value};e(n,P),E()};return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"col d-flex justify-content-center my-3 ",children:k.jsx("div",{onClick:U,className:"btn btn-primary mx-5",children:"CREAR INFORME"})}),k.jsx(un,{centered:!0,show:o,onHide:E,style:{width:"96%",marginLeft:"1%"},children:k.jsxs("form",{onSubmit:T,style:{backgroundColor:"rgb(222,222,222)"},children:[k.jsxs(un.Body,{children:[l&&k.jsx(QS,{variant:"danger",children:l}),k.jsx(yn,{children:k.jsx(on,{className:"border mb-5 btn bg-primary mx-2 p-2 text-center text-white",children:localStorage.getItem("userEmailLS")})}),k.jsx(yn,{children:k.jsxs(on,{children:[k.jsx(ie.Label,{children:"Imagen"}),k.jsx(ie.Group,{children:k.jsx(ie.Control,{type:"file",label:"Cargar Foto",required:!0,ref:v,onChange:s})})]})}),k.jsx("hr",{}),k.jsx(yn,{children:k.jsx(on,{children:k.jsxs(ie.Group,{children:[k.jsx(ie.Label,{children:"Nombre"}),k.jsx(ie.Control,{type:"text",required:!0,ref:y})]})})}),k.jsx(yn,{children:k.jsxs(on,{className:"mb-2",children:[k.jsx(ie.Label,{children:"Para"}),k.jsxs(ie.Control,{as:"select",multiple:!1,ref:R,children:[k.jsx("option",{value:"hombre",children:"Hombre"}),k.jsx("option",{value:"mujer",children:"Mujer"})]})]})}),k.jsx(yn,{children:k.jsxs(on,{className:"mb-2",children:[k.jsx(ie.Label,{children:"Categoria"}),k.jsxs(ie.Control,{as:"select",multiple:!1,ref:A,children:[k.jsx("option",{value:"color",children:"color"}),k.jsx("option",{value:"blanco",children:"blanco"})]})]})}),k.jsx(yn,{children:k.jsxs(on,{children:[k.jsx(ie.Label,{children:"Talla"}),k.jsx(ie.Control,{type:"text",required:!0,onChange:S=>m(S),value:d,placeholder:"separar cada talla con una coma ,"})]})}),k.jsx("hr",{}),k.jsx(yn,{children:k.jsx(on,{children:k.jsxs(ie.Group,{children:[k.jsx(ie.Label,{children:"Marca"}),k.jsx(ie.Control,{type:"text",required:!0,ref:w})]})})}),k.jsx(yn,{children:k.jsx(on,{children:k.jsxs(ie.Group,{children:[k.jsx(ie.Label,{children:"Precio"}),k.jsx(ie.Control,{type:"number",required:!0,ref:b})]})})}),k.jsx(yn,{children:k.jsxs(on,{className:"mb-2",children:[k.jsx(ie.Label,{children:"Tela"}),k.jsxs(ie.Control,{as:"select",multiple:!1,ref:I,children:[k.jsx("option",{value:"algodon",children:"algodon"}),k.jsx("option",{value:"lino",children:"lino"})]})]})}),k.jsx("hr",{}),k.jsx(yn,{children:k.jsx(on,{children:k.jsxs(ie.Group,{children:[k.jsx(ie.Label,{children:"Stock San Carlos"}),k.jsx(ie.Control,{type:"number",required:!0,ref:N})]})})}),k.jsx(yn,{children:k.jsx(on,{children:k.jsxs(ie.Group,{children:[k.jsx(ie.Label,{children:"Descripción"}),k.jsx(ie.Control,{type:"text",required:!0,ref:F})]})})})]}),k.jsxs(un.Footer,{children:[k.jsx(Ps,{variant:"secondary",onClick:E,children:"Cancelar"}),k.jsx(Ps,{variant:"primary",disabled:!1,type:"submit",children:"Guardar"})]})]})})]})},$z=({item:t})=>{var a;const e=new Intl.DateTimeFormat("es-MX",{dateStyle:"long",timeStyle:"short"}),n=l=>e.format(new Date(l)),{deleteById:r,setToggle:i,toggle:s}=O.useContext(Sf);function o(){let d=qrcode(4,"L");return d.addData(`https://xiperafa.github.io/adminPolanco/${t.id}`),d.make(),k.jsx("div",{dangerouslySetInnerHTML:{__html:d.createImgTag()}})}return k.jsxs("div",{className:"card shadow-sm ",children:[k.jsx("div",{style:{height:"180px",backgroundImage:`url(${t.imgUrl})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100 mt-4"}),k.jsxs("div",{className:"card-body p-4 ",children:[k.jsxs("p",{children:[" ",n(t.duration),"  "]}),k.jsx("hr",{}),t.id,k.jsxs("p",{children:["Nombre: ",k.jsx("span",{children:t.name})]}),k.jsxs("p",{children:["para: ",k.jsx("span",{children:t.para})]}),k.jsxs("p",{children:[" categoria: ",k.jsx("span",{children:t.category})]}),k.jsx("hr",{}),k.jsxs("p",{children:[" marca: ",k.jsx("span",{children:t.marca})]}),k.jsxs("p",{children:[" tela: ",k.jsx("span",{children:t.tela})]}),k.jsxs("p",{children:[" Descripción ",k.jsx("span",{children:t.description})]}),k.jsx("hr",{}),k.jsxs("p",{children:[" Stock San Carlos: ",k.jsx("span",{children:t.stockSanCarlos})]}),k.jsxs("p",{children:[" Precio: ",k.jsxs("span",{children:[t.price," $ "]})]}),k.jsx("p",{children:" Tallas: "}),(a=t==null?void 0:t.talla)==null?void 0:a.map((l,c)=>k.jsx("b",{children:k.jsxs("span",{children:[l,", "]})},c)),k.jsx("hr",{}),k.jsxs("div",{className:"btnBorrarInforme",children:[k.jsx("button",{className:"btn btn-danger mb-2 mt-2",onClick:()=>{window.confirm(`Quiere Borrar este Documento? ${t.name}`)&&(r(t.id,t.imgName),i(!s))},children:"Borrar"}),k.jsx(o,{}),k.jsx("button",{className:"btn btn-dark btn-sm mt-1",children:"IMPRIMIR QR"})]})]})]})},sc=O.createContext(),qz=t=>{const e=async(o,a,l)=>{try{await Uk(o,a,l),i(o,a,l)}catch(c){console.error("code.error",c.code);const d={"auth/email-already-in-use":()=>alert("El Correo ya esta en Uso"),"auth/operation-not-allowed":()=>alert("Operacion No Permitida."),"auth/weak-password":()=>alert("La contraseña es muy débil."),"auth/invalid-email":()=>alert("El Correo No es Valido")};(m=>{d[m]()})(c.code)}},[n,r]=O.useState(!0),i=(o,a,l)=>{jk(o,a,l).then(c=>{const d=c.user;localStorage.setItem("userEmailLS",d.email),r(!n),location.reload()}).catch(c=>{console.log(c.code),console.log(c.message),c.code=="auth/invalid-credential"&&alert("Contraseña o Correo son Incorrrectos")})},s=()=>{bU(ov),localStorage.removeItem("userEmailLS"),r(!n)};return k.jsx(sc.Provider,{value:{register:e,login:i,logout:s,stateLogout:n},children:t.children})},Wz=()=>{const{items:t}=O.useContext(Sf),{stateLogout:e}=O.useContext(sc);return console.log(t.filter(n=>n.sucursal==="San Carlos")),k.jsxs("div",{className:"",children:[localStorage.getItem("userEmailLS")!==null&&k.jsx(zz,{}),e?k.jsx("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1 ",children:t.filter(n=>n.sucursal==="San Carlos").sort((n,r)=>r.duration-n.duration).slice(0,12).map((n,r)=>k.jsx($z,{item:n},r))}):""]})},Gz=()=>{const{login:t}=O.useContext(sc),[e,n]=O.useState(!1),r=O.useRef(),i=O.useRef(),s=()=>n(!0),o=()=>n(!1),a=l=>{l.preventDefault(),localStorage.removeItem("Done"),t(ov,r.current.value,i.current.value),o()};return k.jsxs(k.Fragment,{children:[k.jsx("div",{onClick:s,className:"btn btn-outline-secondary mx-2",children:"Entrar"}),k.jsx(un,{centered:!0,show:e,onHide:o,children:k.jsxs("form",{onSubmit:a,children:[k.jsx(un.Header,{children:k.jsx(un.Title,{children:"Entrar"})}),k.jsxs(un.Body,{children:[k.jsxs(ie.Group,{children:[k.jsx(ie.Label,{children:"Email "}),k.jsx(ie.Control,{type:"email",required:!0,ref:r})]}),k.jsxs(ie.Group,{children:[k.jsx(ie.Label,{children:"Password"}),k.jsx(ie.Control,{type:"password",required:!0,ref:i})]})]}),k.jsxs(un.Footer,{children:[k.jsx(Ps,{variant:"secondary",onClick:o,children:" Cancelar "}),k.jsx(Ps,{variant:"primary",type:"submit",children:"         Entrar "})]})]})})]})},Hz=()=>{const{register:t}=O.useContext(sc),[e,n]=O.useState(!1),[r,i]=O.useState(""),s=O.useRef(),o=O.useRef(),a=O.useRef(),l=()=>n(!0),c=()=>{i(""),n(!1)},d=async f=>{if(f.preventDefault(),i(""),o.current.value!==a.current.value)return i("Claves No son iguales.");if(o.current.value.length<6)return i("Claves es muy corta Use 6 caracteres Minimo");t(ov,s.current.value,o.current.value),c()};return k.jsxs(k.Fragment,{children:[k.jsx("div",{onClick:l,className:"btn btn-outline-secondary mx-2",children:"Registro"}),k.jsx(un,{centered:!0,show:e,onHide:c,children:k.jsxs("form",{onSubmit:d,children:[k.jsx(un.Header,{children:k.jsx(un.Title,{children:"Registro"})}),k.jsxs(un.Body,{children:[r&&k.jsx(QS,{variant:"danger",children:r}),k.jsxs(ie.Group,{children:[k.jsx(ie.Label,{children:"Email"}),k.jsx(ie.Control,{type:"email",required:!0,ref:s})]}),k.jsxs(ie.Group,{children:[k.jsx(ie.Label,{children:"Password"}),k.jsx(ie.Control,{type:"password",required:!0,ref:o})]}),k.jsxs(ie.Group,{children:[k.jsx(ie.Label,{children:"Confirmar Password"}),k.jsx(ie.Control,{type:"password",required:!0,ref:a})]})]}),k.jsxs(un.Footer,{children:[k.jsx(Ps,{variant:"secondary",onClick:c,children:" Cancelar "}),k.jsx(Ps,{variant:"primary",type:"submit",children:" Registro "})]})]})})]})},Kz=()=>{const{logout:t,stateLogout:e}=O.useContext(sc);return k.jsxs("nav",{className:"container navbar navbar-light",children:[k.jsx("div",{className:"w-100 d-flex justify-content-center",children:k.jsx("div",{className:"navbar-brand mb-4",children:k.jsx("h3",{style:{fontStyle:"oblique",fontFamily:"serif"},children:"Polanco Guayaberas"})})}),k.jsx("div",{className:"w-100 d-flex justify-content-center",children:k.jsx("div",{className:"mb-4",children:localStorage.getItem("userEmailLS")!==null?k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"btn btn-secondary mx-2 disabled",children:k.jsx("b",{children:"INVENTARIO SAN CARLOS"})}),k.jsx("div",{onClick:()=>{window.confirm("Quieres Salir?")&&t()},className:"btn btn-outline-secondary mx-2",children:"SALIR"})]}):k.jsxs(k.Fragment,{children:[k.jsx(Gz,{}),k.jsx(Hz,{})]})})})]})},Qz=()=>k.jsx(k.Fragment,{children:k.jsx(qz,{children:k.jsxs(Bz,{children:[k.jsx(Kz,{}),k.jsx(Wz,{})]})})});Fp.createRoot(document.getElementById("root")).render(k.jsx(oi.StrictMode,{children:k.jsx(Qz,{})}));
