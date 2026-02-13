(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5766,e=>{"use strict";let t,i;var r,n=e.i(71645);let o={data:""},a=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,u=(e,t)=>{let i="",r="",n="";for(let o in e){let a=e[o];"@"==o[0]?"i"==o[1]?i=o+" "+a+";":r+="f"==o[1]?u(a,o):o+"{"+u(a,"k"==o[1]?"":t)+"}":"object"==typeof a?r+=u(a,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=a&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=u.p?u.p(o,a):o+":"+a+";")}return i+(t&&n?t+"{"+n+"}":n)+r},d={},c=e=>{if("object"==typeof e){let t="";for(let i in e)t+=i+c(e[i]);return t}return e};function p(e){let t,i,r,n=this||{},p=e.call?e(n.p):e;return((e,t,i,r,n)=>{var o;let p=c(e),m=d[p]||(d[p]=(e=>{let t=0,i=11;for(;t<e.length;)i=101*i+e.charCodeAt(t++)>>>0;return"go"+i})(p));if(!d[m]){let t=p!==e?e:(e=>{let t,i,r=[{}];for(;t=a.exec(e.replace(s,""));)t[4]?r.shift():t[3]?(i=t[3].replace(l," ").trim(),r.unshift(r[0][i]=r[0][i]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);d[m]=u(n?{["@keyframes "+m]:t}:t,i?"":"."+m)}let f=i&&d.g?d.g:null;return i&&(d.g=d[m]),o=d[m],f?t.data=t.data.replace(f,o):-1===t.data.indexOf(o)&&(t.data=r?o+t.data:t.data+o),m})(p.unshift?p.raw?(t=[].slice.call(arguments,1),i=n.p,p.reduce((e,r,n)=>{let o=t[n];if(o&&o.call){let e=o(i),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"")):p.reduce((e,t)=>Object.assign(e,t&&t.call?t(n.p):t),{}):p,(r=n.target,"object"==typeof window?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||o),n.g,n.o,n.k)}p.bind({g:1});let m,f,h,v=p.bind({k:1});function y(e,t){let i=this||{};return function(){let r=arguments;function n(o,a){let s=Object.assign({},o),l=s.className||n.className;i.p=Object.assign({theme:f&&f()},s),i.o=/ *go\d+/.test(l),s.className=p.apply(i,r)+(l?" "+l:""),t&&(s.ref=a);let u=e;return e[0]&&(u=s.as||e,delete s.as),h&&u[0]&&h(s),m(u,s)}return t?t(n):n}}var g=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),w=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},x=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:i}=t;return x(e,{type:+!!e.toasts.find(e=>e.id===i.id),toast:i});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},E=[],A={toasts:[],pausedAt:void 0},P=e=>{A=x(A,e),E.forEach(e=>{e(A)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},T=(e={})=>{let[t,i]=(0,n.useState)(A),r=(0,n.useRef)(A);(0,n.useEffect)(()=>(r.current!==A&&i(A),E.push(i),()=>{let e=E.indexOf(i);e>-1&&E.splice(e,1)}),[]);let o=t.toasts.map(t=>{var i,r,n;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(i=e[t.type])?void 0:i.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}});return{...t,toasts:o}},C=e=>(t,i)=>{let r=((e,t="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...i,id:(null==i?void 0:i.id)||b()}))(t,e,i);return P({type:2,toast:r}),r.id},O=(e,t)=>C("blank")(e,t);O.error=C("error"),O.success=C("success"),O.loading=C("loading"),O.custom=C("custom"),O.dismiss=e=>{P({type:3,toastId:e})},O.remove=e=>P({type:4,toastId:e}),O.promise=(e,t,i)=>{let r=O.loading(t.loading,{...i,...null==i?void 0:i.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let n=t.success?g(t.success,e):void 0;return n?O.success(n,{id:r,...i,...null==i?void 0:i.success}):O.dismiss(r),e}).catch(e=>{let n=t.error?g(t.error,e):void 0;n?O.error(n,{id:r,...i,...null==i?void 0:i.error}):O.dismiss(r)}),e};var L=(e,t)=>{P({type:1,toast:{id:e,height:t}})},k=()=>{P({type:5,time:Date.now()})},V=new Map,I=1e3,F=e=>{let{toasts:t,pausedAt:i}=T(e);(0,n.useEffect)(()=>{if(i)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let i=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(i<0){t.visible&&O.dismiss(t.id);return}return setTimeout(()=>O.dismiss(t.id),i)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,i]);let r=(0,n.useCallback)(()=>{i&&P({type:6,time:Date.now()})},[i]),o=(0,n.useCallback)((e,i)=>{let{reverseOrder:r=!1,gutter:n=8,defaultPosition:o}=i||{},a=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=a.findIndex(t=>t.id===e.id),l=a.filter((e,t)=>t<s&&e.visible).length;return a.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+n,0)},[t]);return(0,n.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)((e,t=I)=>{if(V.has(e))return;let i=setTimeout(()=>{V.delete(e),P({type:4,toastId:e})},t);V.set(e,i)})(e.id,e.removeDelay);else{let t=V.get(e.id);t&&(clearTimeout(t),V.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:L,startPause:k,endPause:r,calculateOffset:o}}},$=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,j=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,D=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,N=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${j} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,z=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,H=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,R=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${R} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,K=y("div")`
  position: absolute;
`,U=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${G} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:e})=>{let{icon:t,type:i,iconTheme:r}=e;return void 0!==t?"string"==typeof t?n.createElement(_,null,t):t:"blank"===i?null:n.createElement(U,null,n.createElement(z,{...r}),"loading"!==i&&n.createElement(K,null,"error"===i?n.createElement(N,{...r}):n.createElement(B,{...r})))},X=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Y=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,q=n.memo(({toast:e,position:t,style:i,children:r})=>{let o=e.height?((e,t)=>{let i=e.includes("top")?1:-1,[r,n]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*i}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*i}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${v(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},a=n.createElement(W,{toast:e}),s=n.createElement(Y,{...e.ariaProps},g(e.message,e));return n.createElement(X,{className:e.className,style:{...o,...i,...e.style}},"function"==typeof r?r({icon:a,message:s}):n.createElement(n.Fragment,null,a,s))});r=n.createElement,u.p=void 0,m=r,f=void 0,h=void 0;var J=({id:e,className:t,style:i,onHeightUpdate:r,children:o})=>{let a=n.useCallback(t=>{if(t){let i=()=>{r(e,t.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return n.createElement("div",{ref:a,className:t,style:i},o)},Z=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Q=({reverseOrder:e,position:t="top-center",toastOptions:i,gutter:r,children:o,containerStyle:a,containerClassName:s})=>{let{toasts:l,handlers:u}=F(i);return n.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:s,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(i=>{let a,s,l=i.position||t,d=u.calculateOffset(i,{reverseOrder:e,gutter:r,defaultPosition:t}),c=(a=l.includes("top"),s=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...s});return n.createElement(J,{id:i.id,key:i.id,onHeightUpdate:u.updateHeight,className:i.visible?Z:"",style:c},"custom"===i.type?g(i.message,i):o?o(i):n.createElement(q,{toast:i,position:l}))}))};e.s(["CheckmarkIcon",()=>B,"ErrorIcon",()=>N,"LoaderIcon",()=>z,"ToastBar",()=>q,"ToastIcon",()=>W,"Toaster",()=>Q,"default",()=>O,"resolveValue",()=>g,"toast",()=>O,"useToaster",()=>F,"useToasterStore",()=>T],5766)},22269,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(96650),n=e.i(44258);function o({children:e,features:o,strict:s=!1}){let[,l]=(0,i.useState)(!a(o)),u=(0,i.useRef)(void 0);if(!a(o)){let{renderer:e,...t}=o;u.current=e,(0,n.loadFeatures)(t)}return(0,i.useEffect)(()=>{a(o)&&o().then(({renderer:e,...t})=>{(0,n.loadFeatures)(t),u.current=e,l(!0)})},[]),(0,t.jsx)(r.LazyContext.Provider,{value:{renderer:u.current,strict:s},children:e})}function a(e){return"function"==typeof e}var s=e.i(29596),l=e.i(3594),u=e.i(99306);function d(e,t,i={}){let r=(0,l.resolveVariant)(e,t,"exit"===i.type?e.presenceContext?.custom:void 0),{transition:n=e.getDefaultTransition()||{}}=r||{};i.transitionOverride&&(n=i.transitionOverride);let o=r?()=>Promise.all((0,u.animateTarget)(e,r,i)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=n;return function(e,t,i=0,r=0,n=1,o){let a=[],s=(e.variantChildren.size-1)*r,l=1===n?(e=0)=>e*r:(e=0)=>s-e*r;return Array.from(e.variantChildren).sort(c).forEach((e,r)=>{e.notify("AnimationStart",t),a.push(d(e,t,{...o,delay:i+l(r)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(a)}(e,t,o+r,a,s,i)}:()=>Promise.resolve(),{when:s}=n;if(!s)return Promise.all([o(),a(i.delay)]);{let[e,t]="beforeChildren"===s?[o,a]:[a,o];return e().then(()=>t())}}function c(e,t){return e.sortNodePosition(t)}var p=e.i(73206);function m(e,t){if(!Array.isArray(t))return!1;let i=t.length;if(i!==e.length)return!1;for(let r=0;r<i;r++)if(t[r]!==e[r])return!1;return!0}var f=e.i(57161),h=e.i(93505);let v=h.variantProps.length,y=[...h.variantPriorityOrder].reverse(),g=h.variantPriorityOrder.length;function b(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function w(){return{animate:b(!0),whileInView:b(),whileHover:b(),whileTap:b(),whileDrag:b(),whileFocus:b(),exit:b()}}class x{constructor(e){this.isMounted=!1,this.node=e}update(){}}let E=0;function A(e){return{point:{x:e.pageX,y:e.pageY}}}var P=e.i(35927);function S(e,t){let i=(0,P.resolveElements)(e),r=new AbortController;return[i,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function T(e){return"touch"!==e.pointerType}var C=e.i(34105);function O(e,t,i){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===i);let n=r["onHover"+i];n&&C.frame.postRender(()=>n(t,A(t)))}function L(e,t,i,r={passive:!0}){return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i)}var k=e.i(114);let V=(e,t)=>!!t&&(e===t||V(e,t.parentElement)),I=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),F=new WeakSet;function $(e){return t=>{"Enter"===t.key&&e(t)}}function j(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function D(e){return"mouse"===e.pointerType?"number"!=typeof e.button||!!(e.button<=0):!1!==e.isPrimary}function N(e,t,i){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===i);let n=r["onTap"+("End"===i?"":i)];n&&C.frame.postRender(()=>n(t,A(t)))}let M=new WeakMap,z=new WeakMap,H=e=>{let t=M.get(e.target);t&&t(e)},R=e=>{e.forEach(H)},B={some:0,all:1};var K=e.i(96971),U=e.i(465),G=e.i(43930);let _={renderer:(e,t)=>(0,G.isSVGComponent)(e)?new U.SVGVisualElement(t):new K.HTMLVisualElement(t,{allowProjection:e!==i.Fragment}),animation:{Feature:class extends x{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:i})=>(function(e,t,i={}){let r;if(e.notify("AnimationStart",t),Array.isArray(t))r=Promise.all(t.map(t=>d(e,t,i)));else if("string"==typeof t)r=d(e,t,i);else{let n="function"==typeof t?(0,l.resolveVariant)(e,t,i.custom):t;r=Promise.all((0,u.animateTarget)(e,n,i))}return r.then(()=>{e.notify("AnimationComplete",t)})})(e,t,i))),i=w(),r=!0,n=t=>(i,r)=>{let n=(0,l.resolveVariant)(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(n){let{transition:e,transitionEnd:t,...r}=n;i={...i,...r,...t}}return i};function o(o){let{props:a}=e,u=function e(t){if(!t)return;if(!t.isControllingVariants){let i=t.parent&&e(t.parent)||{};return void 0!==t.props.initial&&(i.initial=t.props.initial),i}let i={};for(let e=0;e<v;e++){let r=h.variantProps[e],n=t.props[r];((0,f.isVariantLabel)(n)||!1===n)&&(i[r]=n)}return i}(e.parent)||{},d=[],c=new Set,b={},w=1/0;for(let t=0;t<g;t++){var x,E;let l=y[t],h=i[l],v=void 0!==a[l]?a[l]:u[l],g=(0,f.isVariantLabel)(v),A=l===o?h.isActive:null;!1===A&&(w=t);let P=v===u[l]&&v!==a[l]&&g;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),h.protectedKeys={...b},!h.isActive&&null===A||!v&&!h.prevProp||(0,s.isAnimationControls)(v)||"boolean"==typeof v)continue;let S=(x=h.prevProp,"string"==typeof(E=v)?E!==x:!!Array.isArray(E)&&!m(E,x)),T=S||l===o&&h.isActive&&!P&&g||t>w&&g,C=!1,O=Array.isArray(v)?v:[v],L=O.reduce(n(l),{});!1===A&&(L={});let{prevResolvedValues:k={}}=h,V={...k,...L},I=t=>{T=!0,c.has(t)&&(C=!0,c.delete(t)),h.needsAnimating[t]=!0;let i=e.getValue(t);i&&(i.liveStyle=!1)};for(let e in V){let t=L[e],i=k[e];if(!b.hasOwnProperty(e))((0,p.isKeyframesTarget)(t)&&(0,p.isKeyframesTarget)(i)?m(t,i):t===i)?void 0!==t&&c.has(e)?I(e):h.protectedKeys[e]=!0:null!=t?I(e):c.add(e)}h.prevProp=v,h.prevResolvedValues=L,h.isActive&&(b={...b,...L}),r&&e.blockInitialAnimation&&(T=!1);let F=!(P&&S)||C;T&&F&&d.push(...O.map(e=>({animation:e,options:{type:l}})))}if(c.size){let t={};if("boolean"!=typeof a.initial){let i=(0,l.resolveVariant)(e,Array.isArray(a.initial)?a.initial[0]:a.initial);i&&i.transition&&(t.transition=i.transition)}c.forEach(i=>{let r=e.getBaseTarget(i),n=e.getValue(i);n&&(n.liveStyle=!0),t[i]=r??null}),d.push({animation:t})}let A=!!d.length;return r&&(!1===a.initial||a.initial===a.animate)&&!e.manuallyAnimateOnMount&&(A=!1),r=!1,A?t(d):Promise.resolve()}return{animateChanges:o,setActive:function(t,r){if(i[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),i[t].isActive=r;let n=o(t);for(let e in i)i[e].protectedKeys={};return n},setAnimateFunction:function(i){t=i(e)},getState:()=>i,reset:()=>{i=w(),r=!0}}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();(0,s.isAnimationControls)(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends x{constructor(){super(...arguments),this.id=E++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;let r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}},inView:{Feature:class extends x{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var e;let t;this.unmount();let{viewport:i={}}=this.node.getProps(),{root:r,margin:n,amount:o="some",once:a}=i,s={root:r?r.current:void 0,rootMargin:n,threshold:"number"==typeof o?o:B[o]},l=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,a&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);let{onViewportEnter:i,onViewportLeave:r}=this.node.getProps(),n=t?i:r;n&&n(e)};return e=this.node.current,t=function({root:e,...t}){let i=e||document;z.has(i)||z.set(i,{});let r=z.get(i),n=JSON.stringify(t);return r[n]||(r[n]=new IntersectionObserver(R,{root:e,...t})),r[n]}(s),M.set(e,l),t.observe(e),()=>{M.delete(e),t.unobserve(e)}}mount(){this.startObserver()}update(){if("u"<typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}(e,t))&&this.startObserver()}unmount(){}}},tap:{Feature:class extends x{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,i={}){let[r,n,o]=S(e,i),a=e=>{let r=e.currentTarget;if(!D(e)||F.has(r))return;F.add(r);let o=t(r,e),a=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),D(e)&&F.has(r)&&(F.delete(r),"function"==typeof o&&o(e,{success:t}))},s=e=>{a(e,r===window||r===document||i.useGlobalTarget||V(r,e.target))},l=e=>{a(e,!1)};window.addEventListener("pointerup",s,n),window.addEventListener("pointercancel",l,n)};return r.forEach(e=>{((i.useGlobalTarget?window:e).addEventListener("pointerdown",a,n),e instanceof HTMLElement)&&(e.addEventListener("focus",e=>((e,t)=>{let i=e.currentTarget;if(!i)return;let r=$(()=>{if(F.has(i))return;j(i,"down");let e=$(()=>{j(i,"up")});i.addEventListener("keyup",e,t),i.addEventListener("blur",()=>j(i,"cancel"),t)});i.addEventListener("keydown",r,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",r),t)})(e,n)),I.has(e.tagName)||-1!==e.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))}),o}(e,(e,t)=>(N(this.node,t,"Start"),(e,{success:t})=>N(this.node,e,t?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends x{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=(0,k.pipe)(L(this.node.current,"focus",()=>this.onFocus()),L(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends x{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,i={}){let[r,n,o]=S(e,i),a=e=>{if(!T(e))return;let{target:i}=e,r=t(i,e);if("function"!=typeof r||!i)return;let o=e=>{T(e)&&(r(e),i.removeEventListener("pointerleave",o))};i.addEventListener("pointerleave",o,n)};return r.forEach(e=>{e.addEventListener("pointerenter",a,n)}),o}(e,(e,t)=>(O(this.node,t,"Start"),e=>O(this.node,e,"End"))))}unmount(){}}}};e.s(["MotionProvider",0,({children:e})=>(0,t.jsx)(o,{features:_,strict:!0,children:e})],22269)}]);