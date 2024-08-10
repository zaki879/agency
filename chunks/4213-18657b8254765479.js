"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4213],{24213:function(e,t,n){n.d(t,{j:function(){return animate}});var a,l=n(37301),r=n(56955),i=n(45487),s=n(2074),u=n(4522);let o=(0,u.X)(()=>void 0!==window.ScrollTimeline);let GroupPlaybackControls=class GroupPlaybackControls{constructor(e){this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){let t=this.animations.map(t=>{if(!o()||!t.attachTimeline)return t.pause(),function(e,t){let n;let onFrame=()=>{let{currentTime:a}=t,l=null===a?0:a.value,r=l/100;n!==r&&e(r),n=r};return s.Wi.update(onFrame,!0),()=>(0,s.Pn)(onFrame)}(e=>{t.time=t.duration*e},e);t.attachTimeline(e)});return()=>{t.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}};var c=n(62711),m=n(75194),h=n(25794),f=n(34547),p=n(61059),y=n(85086),d=n(42284),g=n(86917),v=n(60599),A=n(26615),S=n(23967),b=n(40406);function calcNextTime(e,t,n,a){var l;return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?n:null!==(l=a.get(t))&&void 0!==l?l:e}let wrap=(e,t,n)=>{let a=t-e;return((n-e)%a+a)%a+e};var w=n(43338),k=n(10010),q=n(80022);function compareByTime(e,t){return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0}function getSubjectSequence(e,t){return t.has(e)||t.set(e,{}),t.get(e)}function getValueSequence(e,t){return t[e]||(t[e]=[]),t[e]}let isNumber=e=>"number"==typeof e,isNumberKeyframesArray=e=>e.every(isNumber);function animateElements(e,t,n,a){let s=(0,l.I)(e,a),u=s.length;(0,i.k)(!!u,"No valid element provided.");let o=[];for(let e=0;e<u;e++){let a=s[e];r.R.has(a)||function(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=(0,m.v)(e)?new h.e(t,{enableHardwareAcceleration:!1}):new f.W(t,{enableHardwareAcceleration:!0});n.mount(e),r.R.set(e,n)}(a);let l=r.R.get(a),i={...n};"function"==typeof i.delay&&(i.delay=i.delay(e,u)),o.push(...(0,c.w)(l,{...t,transition:i},{}))}return new GroupPlaybackControls(o)}let isSequence=e=>Array.isArray(e)&&Array.isArray(e[0]),animate=function(e,t,n){let r;return r=isSequence(e)?function(e,t,n){let a=[],r=function(e,{defaultTransition:t={},...n}={},a){let r=t.duration||.3,i=new Map,s=new Map,u={},o=new Map,c=0,m=0,h=0;for(let n=0;n<e.length;n++){let i=e[n];if("string"==typeof i){o.set(i,m);continue}if(!Array.isArray(i)){o.set(i.name,calcNextTime(m,i.at,c,o));continue}let[f,p,S={}]=i;void 0!==S.at&&(m=calcNextTime(m,S.at,c,o));let E=0,resolveValueSequence=(e,n,a,l=0,i=0)=>{let s=Array.isArray(e)?e:[e],{delay:u=0,times:o=(0,v.Y)(s),type:c="keyframes",...f}=n,{ease:p=t.ease||"easeOut",duration:S}=n,b="function"==typeof u?u(l,i):u,N=s.length;if(N<=2&&"spring"===c){let e=100;if(2===N&&isNumberKeyframesArray(s)){let t=s[1]-s[0];e=Math.abs(t)}let t={...f};void 0!==S&&(t.duration=(0,g.w)(S));let n=function(e,t=100){let n=(0,y.S)({keyframes:[0,t],...e}),a=Math.min((0,d.i)(n),d.E);return{type:"keyframes",ease:e=>n.next(a*e).value/t,duration:(0,g.X)(a)}}(t,e);p=n.ease,S=n.duration}null!=S||(S=r);let x=m+b,M=x+S;1===o.length&&0===o[0]&&(o[1]=1);let T=o.length-s.length;T>0&&(0,A.c)(o,T),1===s.length&&s.unshift(null),function(e,t,n,a,l,r){!function(e,t,n){for(let a=0;a<e.length;a++){let l=e[a];l.at>t&&l.at<n&&((0,k.cl)(e,l),a--)}}(e,l,r);for(let s=0;s<t.length;s++){var i;e.push({value:t[s],at:(0,q.C)(l,r,a[s]),easing:(i=s,(0,w.N)(n)?n[wrap(0,n.length,i)]:n)})}}(a,s,p,o,x,M),E=Math.max(b+S,E),h=Math.max(M,h)};if((0,b.i)(f)){let e=getSubjectSequence(f,s);resolveValueSequence(p,S,getValueSequence("default",e))}else{let e=(0,l.I)(f,a,u),t=e.length;for(let n=0;n<t;n++){let a=e[n],l=getSubjectSequence(a,s);for(let e in p)resolveValueSequence(p[e],S[e]?{...S,...S[e]}:{...S},getValueSequence(e,l),n,t)}}c=m,m+=E}return s.forEach((e,a)=>{for(let l in e){let r=e[l];r.sort(compareByTime);let s=[],u=[],o=[];for(let e=0;e<r.length;e++){let{at:t,value:n,easing:a}=r[e];s.push(n),u.push((0,S.Y)(0,h,t)),o.push(a||"easeOut")}0!==u[0]&&(u.unshift(0),s.unshift(s[0]),o.unshift("easeInOut")),1!==u[u.length-1]&&(u.push(1),s.push(null)),i.has(a)||i.set(a,{keyframes:{},transition:{}});let c=i.get(a);c.keyframes[l]=s,c.transition[l]={...t,duration:h,ease:o,times:u,...n}}}),i}(e,t,n);return r.forEach(({keyframes:e,transition:t},n)=>{let l;l=(0,b.i)(n)?(0,p.D)(n,e.default,t.default):animateElements(n,e,t),a.push(l)}),new GroupPlaybackControls(a)}(e,t,a):"object"!=typeof t||Array.isArray(t)?(0,p.D)(e,t,n):animateElements(e,t,n,a),a&&a.animations.push(r),r}},37301:function(e,t,n){n.d(t,{I:function(){return resolveElements}});var a=n(45487);function resolveElements(e,t,n){var l;if("string"==typeof e){let r=document;t&&((0,a.k)(!!t.current,"Scope provided, but no element detected."),r=t.current),n?(null!==(l=n[e])&&void 0!==l||(n[e]=r.querySelectorAll(e)),e=n[e]):e=r.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}}}]);