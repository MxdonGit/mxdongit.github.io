if(!self.define){let e,t={};const o=(o,n)=>(o=new URL(o+".js",n).href,t[o]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=t,document.head.appendChild(e)}else e=o,importScripts(o),t()})).then((()=>{let e=t[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(t[s])return;let i={};const c=e=>o(e,s),l={module:{uri:s},exports:i,require:c};t[s]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),i)))}}define(["./workbox-8688a1a7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
