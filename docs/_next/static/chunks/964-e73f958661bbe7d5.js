(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{5565:(e,t,r)=>{"use strict";r.d(t,{default:()=>i.a});var n=r(4146),i=r.n(n)},7970:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(306),i=r(9955),o=r(5155),a=i._(r(2115)),l=n._(r(7650)),u=n._(r(6107)),s=r(666),d=r(1159),c=r(3621);r(2363);let f=r(3576),p=n._(r(5514)),g=r(5353),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:u,decoding:s,className:d,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:b,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:E,setShowAltText:S,sizesInput:O,onLoad:x,onError:j,...C}=e,P=(0,a.useCallback)(e=>{e&&(j&&(e.src=e.src),e.complete&&h(e,p,_,w,E,v,O))},[r,p,_,w,E,j,v,O]),R=(0,g.useMergedRef)(t,P);return(0,o.jsx)("img",{...C,...y(f),loading:m,width:u,height:l,decoding:s,"data-nimg":b?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:R,onLoad:e=>{h(e.currentTarget,p,_,w,E,v,O)},onError:e=>{S(!0),"empty"!==p&&E(!0),j&&j(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,o.jsx)(u.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{var e;let t=m||n||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:o}},[n]),{onLoad:l,onLoadingComplete:u}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let h=(0,a.useRef)(u);(0,a.useEffect)(()=>{h.current=u},[u]);let[y,_]=(0,a.useState)(!1),[w,E]=(0,a.useState)(!1),{props:S,meta:O}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...S,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:E,sizesInput:e.sizes,ref:t}),O.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=r(2115);function i(e,t){let r=(0,n.useRef)(()=>{}),i=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),i.current()):(r.current=o(e,n),i.current=o(t,n))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext({})},675:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},666:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(2363);let n=r(5859),i=r(1159);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r,l;let u,s,d,{src:c,sizes:f,unoptimized:p=!1,priority:g=!1,loading:m,className:h,quality:y,width:v,height:b,fill:_=!1,style:w,overrideSrc:E,onLoad:S,onLoadingComplete:O,placeholder:x="empty",blurDataURL:j,fetchPriority:C,decoding:P="async",layout:R,objectFit:M,objectPosition:T,lazyBoundary:k,lazyRoot:I,...A}=e,{imgConf:N,showAltText:L,blurComplete:V,defaultLoader:z}=t,D=N||i.imageConfigDefault;if("allSizes"in D)u=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t),n=null==(r=D.qualities)?void 0:r.sort((e,t)=>e-t);u={...D,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===z)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=A.loader||z;delete A.loader,delete A.srcSet;let U="__next_img_default"in F;if(U){if("custom"===u.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(R){"fill"===R&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!f&&(f=t)}let W="",q=a(v),G=a(b);if((l=c)&&"object"==typeof l&&(o(l)||void 0!==l.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,d=e.blurHeight,j=j||e.blurDataURL,W=e.src,!_){if(q||G){if(q&&!G){let t=q/e.width;G=Math.round(e.height*t)}else if(!q&&G){let t=G/e.height;q=Math.round(e.width*t)}}else q=e.width,G=e.height}}let B=!g&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:W)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,B=!1),u.unoptimized&&(p=!0),U&&!u.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(p=!0);let $=a(y),H=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:T}:{},L?{}:{color:"transparent"},w),J=V||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:G,blurWidth:s,blurHeight:d,blurDataURL:j||"",objectFit:H.objectFit})+'")':'url("'+x+'")',X=J?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:o,width:u[d]})}}({config:u,src:c,unoptimized:p,width:q,quality:$,sizes:f,loader:F});return{props:{...A,loading:B?"lazy":m,fetchPriority:C,width:q,height:G,decoding:P,className:h,style:{...H,...X},sizes:Y.sizes,srcSet:Y.srcSet,src:E||Y.src},meta:{unoptimized:p,priority:g,placeholder:x,fill:_}}}},6107:(e,t,r)=>{"use strict";var n=r(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return f}});let i=r(306),o=r(9955),a=r(5155),l=o._(r(2115)),u=i._(r(1172)),s=r(3003),d=r(1147),c=r(675);function f(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2363);let g=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=g.length;e<t;e++){let t=g[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:i})})}let h=function(e){let{children:t}=e,r=(0,l.useContext)(s.AmpStateContext),n=(0,l.useContext)(d.HeadManagerContext);return(0,a.jsx)(u.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5859:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,u=i?40*i:r,s=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3621:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(306)._(r(2115)),i=r(1159),o=n.default.createContext(i.imageConfigDefault)},1159:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},4146:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},getImageProps:function(){return l}});let n=r(306),i=r(666),o=r(7970),a=n._(r(5514));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=o.Image},5514:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:n,width:i,quality:o}=e,a=o||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+a+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},3576:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext(null)},1172:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(2115),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,a=i?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),l()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},3027:(e,t,r)=>{"use strict";var n=r(2115),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,a=n.useEffect,l=n.useLayoutEffect,u=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,d=n[1];return l(function(){i.value=r,i.getSnapshot=t,s(i)&&d({inst:i})},[e,r,t]),a(function(){return s(i)&&d({inst:i}),e(function(){s(i)&&d({inst:i})})},[e]),u(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:d},4236:(e,t,r)=>{"use strict";e.exports=r(3027)},6937:e=>{e.exports={style:{fontFamily:"'Space Mono', 'Space Mono Fallback'",fontStyle:"normal"},className:"__className_7dd02c"}},2786:e=>{e.exports={style:{fontFamily:"'Poppins', 'Poppins Fallback'",fontStyle:"normal"},className:"__className_5d6309"}},293:e=>{e.exports={style:{fontFamily:"'Poppins', 'Poppins Fallback'",fontStyle:"normal"},className:"__className_5d6309"}},5480:e=>{e.exports={style:{fontFamily:"'Space Mono', 'Space Mono Fallback'",fontStyle:"normal"},className:"__className_7dd02c"}},860:(e,t,r)=>{"use strict";let n;r.d(t,{Ay:()=>en});var i=r(2115),o=r(4236),a=Object.prototype.hasOwnProperty;let l=new WeakMap,u=()=>{},s=u(),d=Object,c=e=>e===s,f=e=>"function"==typeof e,p=(e,t)=>({...e,...t}),g=e=>f(e.then),m={},h={},y="undefined",v=typeof window!=y,b=typeof document!=y,_=()=>v&&typeof window.requestAnimationFrame!=y,w=(e,t)=>{let r=l.get(e);return[()=>!c(t)&&e.get(t)||m,n=>{if(!c(t)){let i=e.get(t);t in h||(h[t]=i),r[5](t,p(i,n),i||m)}},r[6],()=>!c(t)&&t in h?h[t]:!c(t)&&e.get(t)||m]},E=!0,[S,O]=v&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[u,u],x={initFocus:e=>(b&&document.addEventListener("visibilitychange",e),S("focus",e),()=>{b&&document.removeEventListener("visibilitychange",e),O("focus",e)}),initReconnect:e=>{let t=()=>{E=!0,e()},r=()=>{E=!1};return S("online",t),S("offline",r),()=>{O("online",t),O("offline",r)}}},j=!i.useId,C=!v||"Deno"in globalThis,P=e=>_()?window.requestAnimationFrame(e):setTimeout(e,1),R=C?i.useEffect:i.useLayoutEffect,M="undefined"!=typeof navigator&&navigator.connection,T=!C&&M&&(["slow-2g","2g"].includes(M.effectiveType)||M.saveData),k=new WeakMap,I=(e,t)=>d.prototype.toString.call(e)==="[object ".concat(t,"]"),A=0,N=e=>{let t,r;let n=typeof e,i=I(e,"Date"),o=I(e,"RegExp"),a=I(e,"Object");if(d(e)!==e||i||o)t=i?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=k.get(e))return t;if(t=++A+"~",k.set(e,t),Array.isArray(e)){for(r=0,t="@";r<e.length;r++)t+=N(e[r])+",";k.set(e,t)}if(a){t="#";let n=d.keys(e).sort();for(;!c(r=n.pop());)c(e[r])||(t+=r+":"+N(e[r])+",");k.set(e,t)}}return t},L=e=>{if(f(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?N(e):"",t]},V=0,z=()=>++V;var D={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function F(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let[n,i,o,a]=t,u=p({populateCache:!0,throwOnError:!0},"boolean"==typeof a?{revalidate:a}:a||{}),d=u.populateCache,m=u.rollbackOnError,h=u.optimisticData,y=e=>"function"==typeof m?m(e):!1!==m,v=u.throwOnError;if(f(i)){let e=[];for(let t of n.keys())!/^\$(inf|sub)\$/.test(t)&&i(n.get(t)._k)&&e.push(t);return Promise.all(e.map(b))}return b(i);async function b(e){let r;let[i]=L(e);if(!i)return;let[a,p]=w(n,i),[m,b,_,E]=l.get(n),S=()=>{let t=m[i];return(f(u.revalidate)?u.revalidate(a().data,e):!1!==u.revalidate)&&(delete _[i],delete E[i],t&&t[0])?t[0](2).then(()=>a().data):a().data};if(t.length<3)return S();let O=o,x=z();b[i]=[x,0];let j=!c(h),C=a(),P=C.data,R=C._c,M=c(R)?P:R;if(j&&p({data:h=f(h)?h(M,P):h,_c:M}),f(O))try{O=O(M)}catch(e){r=e}if(O&&g(O)){if(O=await O.catch(e=>{r=e}),x!==b[i][0]){if(r)throw r;return O}r&&j&&y(r)&&(d=!0,p({data:M,_c:s}))}if(d&&!r&&(f(d)?p({data:d(O,M),error:s,_c:s}):p({data:O,error:s,_c:s})),b[i][1]=z(),Promise.resolve(S()).then(()=>{p({_c:s})}),r){if(v)throw r;return}return O}}let U=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},W=(e,t)=>{if(!l.has(e)){let r=p(x,t),n={},i=F.bind(s,e),o=u,a={},d=(e,t)=>{let r=a[e]||[];return a[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},c=(t,r,n)=>{e.set(t,r);let i=a[t];if(i)for(let e of i)e(r,n)},f=()=>{if(!l.has(e)&&(l.set(e,[n,{},{},{},i,c,d]),!C)){let t=r.initFocus(setTimeout.bind(s,U.bind(s,n,0))),i=r.initReconnect(setTimeout.bind(s,U.bind(s,n,1)));o=()=>{t&&t(),i&&i(),l.delete(e)}}};return f(),[e,i,f,o]}return[e,l.get(e)[4]]},[q,G]=W(new Map),B=p({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:(e,t,r,n,i)=>{let o=r.errorRetryCount,a=i.retryCount,l=~~((Math.random()+.5)*(1<<(a<8?a:8)))*r.errorRetryInterval;(c(o)||!(a>o))&&setTimeout(n,l,i)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:T?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:T?5e3:3e3,compare:function e(t,r){var n,i;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array){if((i=t.length)===r.length)for(;i--&&e(t[i],r[i]););return -1===i}if(!n||"object"==typeof t){for(n in i=0,t)if(a.call(t,n)&&++i&&!a.call(r,n)||!(n in r)||!e(t[n],r[n]))return!1;return Object.keys(r).length===i}}return t!=t&&r!=r},isPaused:()=>!1,cache:q,mutate:G,fallback:{}},{isOnline:()=>E,isVisible:()=>{let e=b&&document.visibilityState;return c(e)||"hidden"!==e}}),$=(e,t)=>{let r=p(e,t);if(t){let{use:n,fallback:i}=e,{use:o,fallback:a}=t;n&&o&&(r.use=n.concat(o)),i&&a&&(r.fallback=p(i,a))}return r},H=(0,i.createContext)({}),J=v&&window.__SWR_DEVTOOLS_USE__,X=J?window.__SWR_DEVTOOLS_USE__:[],Y=e=>f(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],Z=()=>p(B,(0,i.useContext)(H)),K=X.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=L(t),[,,,i]=l.get(q);if(n.startsWith("$inf$"))return r(...e);let o=i[n];return c(o)?r(...e):(delete i[n],o)});return e(t,i,n)}),Q=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}};J&&(window.__SWR_DEVTOOLS_REACT__=i);let ee=()=>{};ee(),new WeakMap;let et=i.use||(e=>{switch(e.status){case"pending":throw e;case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}}),er={dedupe:!0};d.defineProperty(e=>{let{value:t}=e,r=(0,i.useContext)(H),n=f(t),o=(0,i.useMemo)(()=>n?t(r):t,[n,r,t]),a=(0,i.useMemo)(()=>n?o:$(r,o),[n,r,o]),l=o&&o.provider,u=(0,i.useRef)(s);l&&!u.current&&(u.current=W(l(a.cache||q),o));let d=u.current;return d&&(a.cache=d[0],a.mutate=d[1]),R(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,i.createElement)(H.Provider,p(e,{value:a}))},"defaultValue",{value:B});let en=(n=(e,t,r)=>{let{cache:n,compare:a,suspense:u,fallbackData:d,revalidateOnMount:m,revalidateIfStale:h,refreshInterval:y,refreshWhenHidden:v,refreshWhenOffline:b,keepPreviousData:_}=r,[E,S,O,x]=l.get(n),[M,T]=L(e),k=(0,i.useRef)(!1),I=(0,i.useRef)(!1),A=(0,i.useRef)(M),N=(0,i.useRef)(t),V=(0,i.useRef)(r),U=()=>V.current,W=()=>U().isVisible()&&U().isOnline(),[q,G,B,$]=w(n,M),H=(0,i.useRef)({}).current,J=c(d)?c(r.fallback)?s:r.fallback[M]:d,X=(e,t)=>{for(let r in H)if("data"===r){if(!a(e[r],t[r])&&(!c(e[r])||!a(el,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},Y=(0,i.useMemo)(()=>{let e=!!M&&!!t&&(c(m)?!U().isPaused()&&!u&&!1!==h:m),r=t=>{let r=p(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=q(),i=$(),o=r(n),a=n===i?o:r(i),l=o;return[()=>{let e=r(q());return X(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>a]},[n,M]),Z=(0,o.useSyncExternalStore)((0,i.useCallback)(e=>B(M,(t,r)=>{X(r,t)||e()}),[n,M]),Y[0],Y[1]),K=!k.current,ee=E[M]&&E[M].length>0,en=Z.data,ei=c(en)?J&&g(J)?et(J):J:en,eo=Z.error,ea=(0,i.useRef)(ei),el=_?c(en)?ea.current:en:ei,eu=(!ee||!!c(eo))&&(K&&!c(m)?m:!U().isPaused()&&(u?!c(ei)&&h:c(ei)||h)),es=!!(M&&t&&K&&eu),ed=c(Z.isValidating)?es:Z.isValidating,ec=c(Z.isLoading)?es:Z.isLoading,ef=(0,i.useCallback)(async e=>{let t,n;let i=N.current;if(!M||!i||I.current||U().isPaused())return!1;let o=!0,l=e||{},u=!O[M]||!l.dedupe,d=()=>j?!I.current&&M===A.current&&k.current:M===A.current,p={isValidating:!1,isLoading:!1},g=()=>{G(p)},m=()=>{let e=O[M];e&&e[1]===n&&delete O[M]},h={isValidating:!0};c(q().data)&&(h.isLoading=!0);try{if(u&&(G(h),r.loadingTimeout&&c(q().data)&&setTimeout(()=>{o&&d()&&U().onLoadingSlow(M,r)},r.loadingTimeout),O[M]=[i(T),z()]),[t,n]=O[M],t=await t,u&&setTimeout(m,r.dedupingInterval),!O[M]||O[M][1]!==n)return u&&d()&&U().onDiscarded(M),!1;p.error=s;let e=S[M];if(!c(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return g(),u&&d()&&U().onDiscarded(M),!1;let l=q().data;p.data=a(l,t)?l:t,u&&d()&&U().onSuccess(t,M,r)}catch(r){m();let e=U(),{shouldRetryOnError:t}=e;!e.isPaused()&&(p.error=r,u&&d()&&(e.onError(r,M,e),(!0===t||f(t)&&t(r))&&(!U().revalidateOnFocus||!U().revalidateOnReconnect||W())&&e.onErrorRetry(r,M,e,e=>{let t=E[M];t&&t[0]&&t[0](D.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return o=!1,g(),!0},[M,n]),ep=(0,i.useCallback)((...e)=>F(n,A.current,...e),[]);if(R(()=>{N.current=t,V.current=r,c(en)||(ea.current=en)}),R(()=>{if(!M)return;let e=ef.bind(s,er),t=0,r=Q(M,E,(r,n={})=>{if(r==D.FOCUS_EVENT){let r=Date.now();U().revalidateOnFocus&&r>t&&W()&&(t=r+U().focusThrottleInterval,e())}else if(r==D.RECONNECT_EVENT)U().revalidateOnReconnect&&W()&&e();else if(r==D.MUTATE_EVENT)return ef();else if(r==D.ERROR_REVALIDATE_EVENT)return ef(n)});return I.current=!1,A.current=M,k.current=!0,G({_k:T}),eu&&(c(ei)||C?e():P(e)),()=>{I.current=!0,r()}},[M]),R(()=>{let e;function t(){let t=f(y)?y(q().data):y;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!q().error&&(v||U().isVisible())&&(b||U().isOnline())?ef(er).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[y,v,b,M]),(0,i.useDebugValue)(el),u&&c(ei)&&M){if(!j&&C)throw Error("Fallback data is required when using Suspense in SSR.");N.current=t,V.current=r,I.current=!1;let e=x[M];if(c(e)||et(ep(e)),c(eo)){let e=ef(er);c(el)||(e.status="fulfilled",e.value=!0),et(e)}else throw eo}return{mutate:ep,get data(){return H.data=!0,el},get error(){return H.error=!0,eo},get isValidating(){return H.isValidating=!0,ed},get isLoading(){return H.isLoading=!0,ec}}},function(...e){let t=Z(),[r,i,o]=Y(e),a=$(t,o),l=n,{use:u}=a,s=(u||[]).concat(K);for(let e=s.length;e--;)l=s[e](l);return l(r,i||a.fetcher||null,a)})}}]);