!function(t){var e={};function o(l){if(e[l])return e[l].exports;var n=e[l]={i:l,l:!1,exports:{}};return t[l].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,l){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(l,n,function(e){return t[e]}.bind(null,n));return l},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var o,l=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:l.prototype.scroll||c,scrollIntoView:l.prototype.scrollIntoView},r=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?v.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):v.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var t=arguments[0].left,e=arguments[0].top;v.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var o=d(this),l=o.getBoundingClientRect(),r=this.getBoundingClientRect();o!==e.body?(v.call(this,o,o.scrollLeft+r.left-l.left,o.scrollTop+r.top-l.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function s(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function f(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function a(e,o){var l=t.getComputedStyle(e,null)["overflow"+o];return"auto"===l||"scroll"===l}function u(t){var e=f(t,"Y")&&a(t,"Y"),o=f(t,"X")&&a(t,"X");return e||o}function d(t){for(;t!==e.body&&!1===u(t);)t=t.parentNode||t.host;return t}function p(e){var o,l,n,i,c=(r()-e.startTime)/468;i=c=c>1?1:c,o=.5*(1-Math.cos(Math.PI*i)),l=e.startX+(e.x-e.startX)*o,n=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,l,n),l===e.x&&n===e.y||t.requestAnimationFrame(p.bind(t,e))}function v(o,l,i){var s,f,a,u,d=r();o===e.body?(s=t,f=t.scrollX||t.pageXOffset,a=t.scrollY||t.pageYOffset,u=n.scroll):(s=o,f=o.scrollLeft,a=o.scrollTop,u=c),p({scrollable:s,method:u,startTime:d,startX:f,startY:a,x:l,y:i})}}}}()},function(t,e,o){"use strict";o.r(e);var l=o(0),n=o.n(l);const r=650,i=1,c=3,s=document.querySelector(".gallery");s.style.display="none";const f=new function({container:t,item:e}){let o,l,n=[[]],r=[],i=0;const c=document.querySelector(t),s=c.querySelectorAll(e);function f(t,o){!function(){for(e of s)e.style.height=""}();for(let t of s){let e=getComputedStyle(t),o=parseFloat(e.marginTop)+parseFloat(e.marginBottom),l=t.offsetHeight,n=l+o;i+=n,r.push(n),t.style.height=`${l}px`}}function a(){return n[n.length-1]}function u(){let t=a().slice();n.push(t)}function d(t,e){let o=a(),l={sum:t,colIndex:e},n=o.findIndex(t=>t.colIndex==e);~n?o[n]=l:o.push(l)}this.init=function(t){window.innerWidth;f(),function(t){o=i/t}(t),function t(e,l=0){let n=0;for(;l<r.length;){if(n+=r[l],l++,n>o&&e>1)return d(n,--e),t(e,l),l--,n-=r[l],d(n,e),t(e,l),void(n==o&&(l--,n-=r[l],d(n,e),t(e,l)));if(l==r.length)return d(n,--e),void u()}}(t),function(){let t=[];n.forEach(e=>{let o=e.reduce((t,e)=>t.sum>e.sum?t:e);t.push(o.sum)}),l=Math.min(...t)}(),c.style.height=`${l}px`,n=[[]],r=[],i=0,o=0,l=0}}({container:".gallery",item:".gallery__item"});new function({elementParent:t,classToggle:e}){document.querySelector(".toggle").addEventListener("click",(function(){t.classList.toggle(e)}))}({elementParent:document.querySelector(".parent"),classToggle:"parent__menu_visible"});n.a.polyfill();const a=new function({navClass:t,navLinkClass:e,navLinkActiveClass:o}){let l,n,r,i,c=document.querySelector(t),s=!1,f=new Map;function a(t){let e=t.getAttribute("href");return!!e.startsWith("#")&&e.slice(1)}function u(t){l||(l=window.pageYOffset);let e=t.getBoundingClientRect();return{top:e.top+l,bottom:e.bottom+l}}function d(){let t=function(){let t=window.pageYOffset;if(!t)return i;n||(n=window.innerHeight/2);let e=t+n;for(let t of f){let o=t[1].contentBorders;if(o.top<=e&&o.bottom>=e)return t[0]}}();t!=r&&t&&(r&&r.classList.remove(o),t.classList.add(o),r=t)}this.init=function(){l=n=null,function(){let t,o,l=c.querySelectorAll(e);for(let e of l){let l=a(e);if(!l)continue;let n=document.getElementById(l),r=u(n);(!t||top<o)&&(t=e,o=r.top),f.set(e,{content:n,contentBorders:r})}i=t}(),d(),window.addEventListener("scroll",(function(t){var e,o;e=d,o=100,s||(e(),s=!0,setTimeout(()=>{e(),s=!1},o))})),c.addEventListener("click",(function(t){let o=t.target.closest(e);o&&(t.preventDefault(),f.get(o).content.scrollIntoView({behavior:"smooth"}))}))}}({navClass:".nav",navLinkClass:".nav__link",navLinkActiveClass:"nav__link_active"});window.addEventListener("load",(function(){s.style.display="",window.innerWidth>=r&&f.init(c),a.init()})),window.addEventListener("resize",(function(){window.innerWidth<r?f.init(i):f.init(c),a.init()}))}]);