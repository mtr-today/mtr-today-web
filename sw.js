if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let a={};const r=e=>n(e,o),d={module:{uri:o},exports:a,require:r};i[o]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(s(...e),a)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-552026a4.js",revision:null},{url:"assets/logo-e3e8c117.svg",revision:null},{url:"assets/logoDark-3f476e13.svg",revision:null},{url:"assets/logoLight-fc0c0e63.svg",revision:null},{url:"favicon.ico",revision:"6b049f5e2ee86ab432179cbe6acbb33d"},{url:"faviconDark.png",revision:"22ee8df389788664fa4976ee8f34b253"},{url:"faviconLight.png",revision:"b9cde2f47aa21a99d88396decc462b3b"},{url:"images/icons/icon-128x128.png",revision:"1dccd35092664db0caf2a10591fcc9a6"},{url:"images/icons/icon-144x144.png",revision:"55acb7e5296165ae3df07719983a0429"},{url:"images/icons/icon-152x152.png",revision:"ddc6b0f795bc3a80cf13a80ab8d9add2"},{url:"images/icons/icon-192x192.png",revision:"ebe0ed92751a33c0fbcbc70dda48b980"},{url:"images/icons/icon-384x384.png",revision:"33347437d0f8a2c9c1034db132709cdd"},{url:"images/icons/icon-512x512.png",revision:"af04a90807e7751e2c1997c944c359f4"},{url:"images/icons/icon-72x72.png",revision:"553a83ff1253efbd167d901eeaaada61"},{url:"images/icons/icon-96x96.png",revision:"14a9841f2eabea3cf90096283a016880"},{url:"index.html",revision:"400bb330870e32cfabd024f1d4af610b"},{url:"ogImage.png",revision:"7e4710b6ee2e73772d3167157dcd9012"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icons/icon-72x72.png",revision:"553a83ff1253efbd167d901eeaaada61"},{url:"images/icons/icon-96x96.png",revision:"14a9841f2eabea3cf90096283a016880"},{url:"images/icons/icon-128x128.png",revision:"1dccd35092664db0caf2a10591fcc9a6"},{url:"images/icons/icon-144x144.png",revision:"55acb7e5296165ae3df07719983a0429"},{url:"images/icons/icon-152x152.png",revision:"ddc6b0f795bc3a80cf13a80ab8d9add2"},{url:"images/icons/icon-192x192.png",revision:"ebe0ed92751a33c0fbcbc70dda48b980"},{url:"images/icons/icon-384x384.png",revision:"33347437d0f8a2c9c1034db132709cdd"},{url:"images/icons/icon-512x512.png",revision:"af04a90807e7751e2c1997c944c359f4"},{url:"manifest.webmanifest",revision:"f1231bab5818b007da71c540452687d4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
