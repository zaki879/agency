(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8204],{21044:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorials",function(){return n(34283)}])},33745:function(e,t,n){"use strict";n.d(t,{Z:function(){return animationPreview_Index}});var i=n(85893),r=n(67294),a=n(25675),s=n.n(a),o=n(38940),l=n(42708);function Index(e){let{src:t,priority:n}=e,{ref:a,inView:c}=(0,l.YD)({threshold:.2,triggerOnce:!0}),[u,d]=(0,r.useState)(!1);return(0,i.jsx)(o.E.div,{ref:a,variants:{initial:{opacity:0},enter:{opacity:1,transition:{duration:.4,ease:[.33,1,.68,1]}}},initial:"initial",animate:u&&c?"enter":"",className:"imageWrapper",children:(0,i.jsx)(s(),{src:"https:".concat(t),fill:!0,style:{objectFit:"cover"},priority:n,onLoadingComplete:()=>{d(!0)},alt:"image",sizes:"500px"})})}var c=n(41664),u=n.n(c),d=n(51526),h=n(55144);let m={initial:{opacity:0,y:5},enter:{opacity:1,y:0,transition:{duration:.2,ease:"easeOut"}},exit:{opacity:0,y:5,transition:{duration:.2,ease:"easeOut"}}},f={initial:{y:0},open:{y:0,transition:{duration:.5,ease:"easeOut"}},closed:{y:0,transition:{duration:.5,ease:"easeOut"}}};function animationPreview_Index(e){let{title:t,image:n,handle:a,description:s,tag:c,tutorialLink:v,preview:g,date:p}=e.animation,[x,w]=(0,r.useState)(!1),j=(0,r.useRef)(null),{ref:y,inView:b,entry:N}=(0,l.YD)({threshold:0,triggerOnce:!0});return(0,r.useEffect)(()=>{b&&j.current.load()},[b,g]),(0,r.useEffect)(()=>{j.current&&(x?j.current.play():j.current.pause())},[x]),(0,i.jsxs)(o.E.div,{variants:f,initial:"initial",animate:b?"open":"closed",ref:y,className:"animationPreview",children:[(0,i.jsxs)("div",{onMouseOver:()=>{w(!0)},onMouseLeave:()=>{w(!1)},className:"imageContainer",children:[(0,i.jsx)(u(),{href:"/tutorials/".concat(a),children:(0,i.jsx)(Index,{src:n.src,priority:!0})}),(0,i.jsx)(d.M,{mode:"wait",children:x&&(0,i.jsx)(o.E.div,{className:"tags",variants:m,initial:"initial",animate:"enter",exit:"exit",children:(0,i.jsx)(u(),{href:"/demos/".concat(a),legacyBehavior:!0,children:(0,i.jsxs)("a",{className:"tag",rel:"noopener noreferrer",target:"_blank",children:["Demo",(0,i.jsx)("svg",{width:"9",height:"8",viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8.49966 1.01851C8.50988 0.742553 8.29446 0.510563 8.01851 0.500342L3.52159 0.33379C3.24564 0.32357 3.01365 0.538989 3.00343 0.814942C2.99321 1.09089 3.20862 1.32288 3.48458 1.33311L7.48184 1.48115L7.33379 5.47841C7.32357 5.75436 7.53899 5.98635 7.81494 5.99657C8.09089 6.0068 8.32288 5.79138 8.3331 5.51542L8.49966 1.01851ZM1.34023 7.8664L8.34023 1.3664L7.65977 0.633603L0.659774 7.1336L1.34023 7.8664Z",fill:"white"})})]})})})}),b&&(0,i.jsx)(u(),{href:"/tutorials/".concat(a),children:(0,i.jsx)("div",{className:"video",children:(0,i.jsx)("video",{ref:j,preload:"none",muted:!0,loop:!0,poster:n.src,children:(0,i.jsx)("source",{src:"https:".concat(g.src)})})})})]}),(0,i.jsxs)("div",{className:"body",children:[(0,i.jsxs)("div",{className:"info",children:[(0,i.jsx)("p",{children:(()=>{let e=new Date(p),t=e.getFullYear(),n=h.z[e.getMonth()],i=e.getDate();return"".concat(n," ").concat(i,", ").concat(t)})()}),(0,i.jsx)("div",{className:"tagContainer",children:(0,i.jsx)("a",{className:"pill",children:c})})]}),(0,i.jsxs)("div",{className:"text",children:[(0,i.jsx)(u(),{href:"/tutorials/".concat(a),children:(0,i.jsx)("h2",{children:t})}),(0,i.jsx)("p",{children:s})]})]})]})}},61072:function(e,t,n){"use strict";n.d(t,{Z:function(){return Index}});var i=n(85893);n(58688);var r=n(41846);function Index(e){let{children:t,tabs:n}=e;return(0,i.jsxs)("div",{className:"page",children:[(0,i.jsx)(r.Z,{tabs:n}),t]})}},34283:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return tutorials_Index}});var i=n(85893),r=n(67294),a=n(33745);function Index(e){let{animations:t,tags:n}=e,[s,o]=(0,r.useState)(t),[l,c]=(0,r.useState)("Recent"),[u,d]=(0,r.useState)(1),[h,m]=(0,r.useState)(!1),[f,v]=(0,r.useState)("");(0,r.useRef)(null),(0,r.useEffect)(()=>{window.scrollTo({left:0,top:0,behavior:"smooth"}),""==f&&m(!1)},[l]),(0,r.useEffect)(()=>{let e="Recent"!=l&&"Popular"!=l?l:null;reorderByRecent(e,f)},[f]);let managePopularityTag=()=>{reorderByPopularity(),c("Popular")},manageRecentTag=()=>{reorderByRecent(),c("Recent")},manageTags=e=>{reorderByRecent(e),c(e)},reorderByPopularity=()=>{o(e.animations.sort((e,t)=>e.visits<t.visits?1:e.visits>t.visits?-1:0))},reorderByRecent=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=e.animations;t&&(i=i.filter(e=>e.tag==t)),n&&(i=i.filter(e=>e.title.includes(n))),i.sort((e,t)=>{let n=new Date(e.date),i=new Date(t.date);return n<i?1:n>i?-1:0}),o(i)};return(0,i.jsxs)("div",{className:"home-tutorials",children:[(0,i.jsxs)("div",{className:"filterContainer",children:[(0,i.jsx)("a",{onClick:()=>{manageRecentTag()},className:"tag ".concat("Recent"==l?"tag-active":""),children:"Recent"}),(0,i.jsx)("a",{onClick:()=>{managePopularityTag()},className:"tag ".concat("Popular"==l?"tag-active":""),children:"Popular"}),n.map((e,t)=>(0,i.jsx)("a",{onClick:()=>{manageTags(e)},className:"tag ".concat(l==e?"tag-active":""),children:e},t))]}),(0,i.jsx)("h1",{children:"All Tutorials"}),(0,i.jsx)("div",{className:"animationContainer",children:s.map((e,t)=>{if(t<15*u)return(0,i.jsx)(a.Z,{animation:e,priority:t<9},t)})}),(0,i.jsx)("div",{className:"seeMore",children:s.length>15*u&&(0,i.jsx)("a",{onClick:()=>{d(u+1)},children:"See more"})})]})}var s=n(9008),o=n.n(s),l=n(61072),c=!0;function tutorials_Index(e){let{animations:t,tags:n,tabs:r}=e;return(0,i.jsxs)(l.Z,{tabs:r,children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Olivier Larose's blog - All Tutorials"}),(0,i.jsx)("meta",{name:"description",content:"Here's a list of all the web animations tutorials we've done so far. From Awwwards website to CSS awards websites, we like to reverse engineer the most creative animations."}),(0,i.jsx)("meta",{property:"og:title",content:"All Tutorials"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:"https://blog.olivierlarose.com/"}),(0,i.jsx)("meta",{name:"twitter:title",content:"All Tutorials"}),(0,i.jsx)("meta",{name:"twitter:description",content:"Here's a list of all the web animations tutorials we've done so far. From Awwwards website to CSS awards websites, we like to reverse engineer the most creative animations."}),(0,i.jsx)("meta",{name:"twitter:site",content:"https://blog.olivierlarose.com/"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@MeshDojo"})]}),(0,i.jsx)(Index,{animations:t,tags:n})]})}},58688:function(e,t,n){},55144:function(e,t,n){"use strict";var i,r;n.d(t,{z:function(){return i}}),(r=i||(i={}))[r.Jan=0]="Jan",r[r.Feb=1]="Feb",r[r.March=2]="March",r[r.April=3]="April",r[r.May=4]="May",r[r.June=5]="June",r[r.Jul=6]="Jul",r[r.Aug=7]="Aug",r[r.Sept=8]="Sept",r[r.Oct=9]="Oct",r[r.Nov=10]="Nov",r[r.Dec=11]="Dec"},9008:function(e,t,n){e.exports=n(79201)},42708:function(e,t,n){"use strict";n.d(t,{YD:function(){return useInView}});var i=n(67294),r=Object.defineProperty,a=new Map,s=new WeakMap,o=0,l=void 0;function useInView({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:c,triggerOnce:u,skip:d,initialInView:h,fallbackInView:m,onChange:f}={}){var v;let[g,p]=i.useState(null),x=i.useRef(),[w,j]=i.useState({inView:!!h,entry:void 0});x.current=f,i.useEffect(()=>{let i;if(!d&&g)return i=function(e,t,n={},i=l){if(void 0===window.IntersectionObserver&&void 0!==i){let r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:r,observer:c,elements:u}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(s.has(n)||(o+=1,s.set(n,o.toString())),s.get(n)):"0":e[t]}`}).toString(),n=a.get(t);if(!n){let i;let r=new Map,s=new IntersectionObserver(t=>{t.forEach(t=>{var n;let a=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach(e=>{e(a,t)})})},e);i=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:r},a.set(t,n)}return n}(n),d=u.get(e)||[];return u.has(e)||u.set(e,d),d.push(t),c.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(u.delete(e),c.unobserve(e)),0===u.size&&(c.disconnect(),a.delete(r))}}(g,(e,t)=>{j({inView:e,entry:t}),x.current&&x.current(e,t),t.isIntersecting&&u&&i&&(i(),i=void 0)},{root:c,rootMargin:r,threshold:e,trackVisibility:n,delay:t},m),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,g,c,r,u,d,n,m,t]);let y=null==(v=w.entry)?void 0:v.target,b=i.useRef();g||!y||u||d||b.current===y||(b.current=y,j({inView:!!h,entry:void 0}));let N=[p,w.inView,w.entry];return N.ref=N[0],N.inView=N[1],N.entry=N[2],N}i.Component}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=21044)}),_N_E=e.O()}]);