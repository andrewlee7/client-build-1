(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["90f791f0"],{"41e2":function(e,t,r){},"7d7e":function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r("5640"),i=r.n(n),a=r("9530"),o=r.n(a);function s(){var e=i()(["\n  mutation ConvertImageMutation($key: String!, $tag: String!, $width: Int!){\n    convertImage(\n      key: $key\n      tag: $tag\n      width: $width\n    ){\n      success\n      error\n      info\n    }\n  }\n"]);return s=function(){return e},e}var c=o()(s())},"96a1":function(e,t,r){"use strict";var n=r("a60d");t["a"]=function(e,t){if(n["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(e,{openExternal:!0});var r=window.open(e,"_blank");if(r)return r.focus(),r;t&&t()}},"99d8":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.src?r("span",{attrs:{target:"_blank"},on:{click:e.openLink}},[r("q-btn",{style:e.showPrint&&"max-width: 80%",attrs:{label:e.src.title||e.src.name,icon:e.fileIcon,outline:"","no-caps":""}})],1):e._e(),e.showPrint?r("q-btn",{staticClass:"q-ml-md print-hide",attrs:{round:"",outline:""},on:{click:function(t){e.printAttachment({printable:e.link,type:"pdf",showModal:!0,modalMessage:"Retrieving document from external server..."})}}},[r("q-icon",{staticStyle:{"font-size":"24px"},attrs:{name:"print"}})],1):e._e()],1)},i=[];n._withStripped=!0;r("386d"),r("28a5"),r("7f7f");var a=r("3156"),o=r.n(a),s=(r("a481"),r("b54a"),r("96cf"),r("c973")),c=r.n(s),u=r("d67a"),l=r("9755"),d=r("96a1"),f=r("add5"),p=r.n(f),h=(r("551c"),function(e){return fetch(e).then(function(e){return e.blob()})}),m=function(e){return new Promise(function(t,r){var n=new FileReader;n.onerror=r,n.onload=function(){t(n.result)},n.readAsDataURL(e)})},b={name:"awsLink",props:{src:Object,resource:Object},asyncComputed:{link:function(){var e=c()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.src){e.next=2;break}return e.abrupt("return");case 2:if(!this.src.url){e.next=4;break}return e.abrupt("return",this.src.url);case 4:if(!this.src.secret){e.next=6;break}return e.abrupt("return",l["a"].get(this.src.secret));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},methods:{openLink:function(){var e=c()(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.link;case 2:t=e.sent,this.$q.platform.is.cordova?(r=this.$q.platform.is.android?"_system":"_blank",cordova.InAppBrowser.open(t,r,"location=yes,footer=yes,usewkwebview=yes,toolbarposition=top")):Object(d["a"])(t),this.$ma.trackEvent({action:"Resource Link Opened",properties:this.generateMixpanelProperties()});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),printAttachment:function(){var e=c()(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$q.platform.is.cordova){e.next=7;break}return e.next=3,this.link;case 3:r=e.sent,h(r).then(m).then(function(e){var t=e.replace("data:application/pdf;base64,","").replace("data:image/png;base64,","").replace("data:image/gif;base64,","").replace("data:image/jpeg;base64,","");window.plugins.PrintPDF.print({data:t,type:"Data",title:"Print Document",success:function(){},error:function(e){}})}),e.next=8;break;case 7:p()(t);case 8:this.$ma.trackEvent({action:"Resource Attachment Opened",properties:this.generateMixpanelProperties()});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),generateMixpanelProperties:function(){return o()({},{resourceId:this.resource.id,resourceName:this.resource.name,resourceTitle:this.resource.title,resourceSubtitle:this.resource.subtitle,resourceType:this.resource.type,resourceCategories:this.resource.categories.map(function(e){return e.category}),resourceDuration:this.resource.duration,resourceAgeFrom:this.resource.ageFrom,resourceAgeTo:this.resource.ageTo,resourceNumReviews:this.resource.numReviews,resourceRating:this.resource.rating,resourceFeatured:this.resource.featured,srcId:this.src.id,srcUrl:this.src.url,srcType:this.src.contentType,srcTitle:this.src.title,srcName:this.src.name},u["a"].getters.userForMixpanel)}},computed:{showPrint:function(){var e=this.src.contentType&&this.src.contentType.split("/")[0];return this.src&&("application/pdf"===this.src.contentType||"image"===e)},fileType:function(){if(this.src&&this.src.url){var e=this.src.url.split("?")[0];return e.split(".").pop()}},fileIcon:function(){if(!this.src.contentType&&this.src.url&&-1!==this.src.url.search("video"))return"far fa-file-video";if(!this.src.secret&&!this.src.contentType)return"fas fa-link";if(!this.src.contentType)return"fa fa-file";if("application/pdf"===this.src.contentType)return"far fa-file-pdf";var e=this.src.contentType.split("/")[0];return"image"===e?"fa fa-file-image":"video"===e?"far fa-file-video":void 0}}},y=b,g=(r("a8f5"),r("2877")),v=Object(g["a"])(y,n,i,!1,null,"3ab33a72",null);v.options.__file="awsLink.vue";t["a"]=v.exports},"9a4a":function(e,t,r){},a8f5:function(e,t,r){"use strict";var n=r("9a4a"),i=r.n(n);i.a},add5:function(e,t,r){(function(t,r){e.exports=r()})(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}({"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(/*! ./sass/index.scss */"./src/sass/index.scss");var n=r(/*! ./js/init */"./src/js/init.js"),i=a(n);function a(e){return e&&e.__esModule?e:{default:e}}var o=i.default.init;"undefined"!==typeof window&&(window.printJS=o),t.default=o},"./src/js/browser.js":
/*!***************************!*\
  !*** ./src/js/browser.js ***!
  \***************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={isFirefox:function(){return"undefined"!==typeof InstallTrigger},isIE:function(){return-1!==navigator.userAgent.indexOf("MSIE")||!!document.documentMode},isEdge:function(){return!n.isIE()&&!!window.StyleMedia},isChrome:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return!!e.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||-1!==navigator.userAgent.toLowerCase().indexOf("safari")}};t.default=n},"./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.addWrapper=u,t.capitalizePrint=l,t.collectStyles=d,t.addHeader=p,t.cleanUp=h,t.isRawHTML=m;var i=r(/*! ./modal */"./src/js/modal.js"),a=c(i),o=r(/*! ./browser */"./src/js/browser.js"),s=c(o);function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r="font-family:"+t.font+" !important; font-size: "+t.font_size+" !important; width:100%;";return'<div style="'+r+'">'+e+"</div>"}function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e,t){var r=document.defaultView||window,n="",i=r.getComputedStyle(e,"");return Object.keys(i).map(function(e){(-1!==t.targetStyles.indexOf("*")||-1!==t.targetStyle.indexOf(i[e])||f(t.targetStyles,i[e]))&&i.getPropertyValue(i[e])&&(n+=i[e]+":"+i.getPropertyValue(i[e])+";")}),n+="max-width: "+t.maxWidth+"px !important;"+t.font_size+" !important;",n}function f(e,t){for(var r=0;r<e.length;r++)if("object"===("undefined"===typeof t?"undefined":n(t))&&-1!==t.indexOf(e[r]))return!0;return!1}function p(e,t){var r=document.createElement("div");if(m(t.header))r.innerHTML=t.header;else{var n=document.createElement("h1"),i=document.createTextNode(t.header);n.appendChild(i),n.setAttribute("style",t.headerStyle),r.appendChild(n)}e.insertBefore(r,e.childNodes[0])}function h(e){if(e.showModal&&a.default.close(),e.onLoadingEnd&&e.onLoadingEnd(),(e.showModal||e.onLoadingStart)&&window.URL.revokeObjectURL(e.printable),e.onPrintDialogClose){var t="mouseover";(s.default.isChrome()||s.default.isFirefox())&&(t="focus");var r=function r(){window.removeEventListener(t,r),e.onPrintDialogClose()};window.addEventListener(t,r)}}function m(e){var t=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return t.test(e)}},"./src/js/html.js":
/*!************************!*\
  !*** ./src/js/html.js ***!
  \************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(/*! ./functions */"./src/js/functions.js"),i=r(/*! ./print */"./src/js/print.js"),a=o(i);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var r=e.cloneNode(),i=!0,a=!1,o=void 0;try{for(var c,u=e.childNodes[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var l=c.value;if(-1===t.ignoreElements.indexOf(l.id)){var d=s(l,t);r.appendChild(d)}}}catch(e){a=!0,o=e}finally{try{!i&&u.return&&u.return()}finally{if(a)throw o}}switch(t.scanStyles&&1===e.nodeType&&r.setAttribute("style",(0,n.collectStyles)(e,t)),e.tagName){case"SELECT":r.value=e.value;break;case"CANVAS":r.getContext("2d").drawImage(e,0,0);break}return r}t.default={print:function(e,t){var r=document.getElementById(e.printable);r?(e.printableElement=s(r,e),e.header&&(0,n.addHeader)(e.printableElement,e),a.default.send(e,t)):window.console.error("Invalid HTML element id: "+e.printable)}}},"./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(/*! ./functions */"./src/js/functions.js"),i=r(/*! ./print */"./src/js/print.js"),a=o(i);function o(e){return e&&e.__esModule?e:{default:e}}t.default={print:function(e,t){e.printable.constructor!==Array&&(e.printable=[e.printable]),e.printableElement=document.createElement("div"),e.printable.forEach(function(t){var r=document.createElement("img");r.setAttribute("style",e.imageStyle),r.src=t;var n=document.createElement("div");n.appendChild(r),e.printableElement.appendChild(n)}),e.header&&(0,n.addHeader)(e.printableElement,e),a.default.send(e,t)}}},"./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(/*! ./browser */"./src/js/browser.js"),a=g(i),o=r(/*! ./modal */"./src/js/modal.js"),s=g(o),c=r(/*! ./pdf */"./src/js/pdf.js"),u=g(c),l=r(/*! ./html */"./src/js/html.js"),d=g(l),f=r(/*! ./raw-html */"./src/js/raw-html.js"),p=g(f),h=r(/*! ./image */"./src/js/image.js"),m=g(h),b=r(/*! ./json */"./src/js/json.js"),y=g(b);function g(e){return e&&e.__esModule?e:{default:e}}var v=["pdf","html","image","json","raw-html"];t.default={init:function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(e){throw e},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:null,onPdfOpen:null,onBrowserIncompatible:function(){return!0},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],imageStyle:"max-width: 100%;",repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1},t=arguments[0];if(void 0===t)throw new Error("printJS expects at least 1 attribute.");switch("undefined"===typeof t?"undefined":n(t)){case"string":e.printable=encodeURI(t),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":for(var r in e.printable=t.printable,e.base64="undefined"!==typeof t.base64,e.fallbackPrintable="undefined"!==typeof t.fallbackPrintable?t.fallbackPrintable:e.printable,e.fallbackPrintable=e.base64?"data:application/pdf;base64,"+e.fallbackPrintable:e.fallbackPrintable,e)"printable"!==r&&"fallbackPrintable"!==r&&"base64"!==r&&(e[r]="undefined"!==typeof t[r]?t[r]:e[r]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+("undefined"===typeof t?"undefined":n(t)))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||"string"!==typeof e.type||-1===v.indexOf(e.type.toLowerCase()))throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&s.default.show(e),e.onLoadingStart&&e.onLoadingStart();var i=document.getElementById(e.frameId);i&&i.parentNode.removeChild(i);var o=void 0;switch(o=document.createElement("iframe"),o.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute;"),o.setAttribute("id",e.frameId),"pdf"!==e.type&&(o.srcdoc="<html><head><title>"+e.documentTitle+"</title>",e.css&&(Array.isArray(e.css)||(e.css=[e.css]),e.css.forEach(function(e){o.srcdoc+='<link rel="stylesheet" href="'+e+'">'})),o.srcdoc+="</head><body></body></html>"),e.type){case"pdf":if(a.default.isFirefox()||a.default.isEdge()||a.default.isIE())try{if(console.info("PrintJS currently doesn't support PDF printing in Firefox, Internet Explorer and Edge."),!0===e.onBrowserIncompatible()){var c=window.open(e.fallbackPrintable,"_blank");c.focus(),e.onPdfOpen&&e.onPdfOpen()}}catch(t){e.onError(t)}finally{e.showModal&&s.default.close(),e.onLoadingEnd&&e.onLoadingEnd()}else u.default.print(e,o);break;case"image":m.default.print(e,o);break;case"html":d.default.print(e,o);break;case"raw-html":p.default.print(e,o);break;case"json":y.default.print(e,o);break}}}},"./src/js/json.js":
/*!************************!*\
  !*** ./src/js/json.js ***!
  \************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(/*! ./functions */"./src/js/functions.js"),a=r(/*! ./print */"./src/js/print.js"),o=s(a);function s(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.printable,r=e.properties,n='<table style="border-collapse: collapse; width: 100%;">';e.repeatTableHeader&&(n+="<thead>"),n+="<tr>";for(var a=0;a<r.length;a++)n+='<th style="width:'+r[a].columnSize+";"+e.gridHeaderStyle+'">'+(0,i.capitalizePrint)(r[a].displayName)+"</th>";n+="</tr>",e.repeatTableHeader&&(n+="</thead>"),n+="<tbody>";for(var o=0;o<t.length;o++){n+="<tr>";for(var s=0;s<r.length;s++){var c=t[o],u=r[s].field.split(".");if(u.length>1)for(var l=0;l<u.length;l++)c=c[u[l]];else c=c[r[s].field];n+='<td style="width:'+r[s].columnSize+e.gridStyle+'">'+c+"</td>"}n+="</tr>"}return n+="</tbody></table>",n}t.default={print:function(e,t){if("object"!==n(e.printable))throw new Error("Invalid javascript data object (JSON).");if("boolean"!==typeof e.repeatTableHeader)throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!e.properties||!Array.isArray(e.properties))throw new Error("Invalid properties array for your JSON data.");e.properties=e.properties.map(function(t){return{field:"object"===("undefined"===typeof t?"undefined":n(t))?t.field:t,displayName:"object"===("undefined"===typeof t?"undefined":n(t))?t.displayName:t,columnSize:"object"===("undefined"===typeof t?"undefined":n(t))&&t.columnSize?t.columnSize+";":100/e.properties.length+"%;"}}),e.printableElement=document.createElement("div"),e.header&&(0,i.addHeader)(e.printableElement,e),e.printableElement.innerHTML+=c(e),o.default.send(e,t)}}},"./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={show:function(e){var t="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",r=document.createElement("div");r.setAttribute("style",t),r.setAttribute("id","printJS-Modal");var i=document.createElement("div");i.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var a=document.createElement("div");a.setAttribute("class","printClose"),a.setAttribute("id","printClose"),i.appendChild(a);var o=document.createElement("span");o.setAttribute("class","printSpinner"),i.appendChild(o);var s=document.createTextNode(e.modalMessage);i.appendChild(s),r.appendChild(i),document.getElementsByTagName("body")[0].appendChild(r),document.getElementById("printClose").addEventListener("click",function(){n.close()})},close:function(){var e=document.getElementById("printJS-Modal");e.parentNode.removeChild(e)}};t.default=n},"./src/js/pdf.js":
/*!***********************!*\
  !*** ./src/js/pdf.js ***!
  \***********************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(/*! ./print */"./src/js/print.js"),i=o(n),a=r(/*! ./functions */"./src/js/functions.js");function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){var n=new window.Blob([r],{type:"application/pdf"});n=window.URL.createObjectURL(n),t.setAttribute("src",n),i.default.send(e,t)}t.default={print:function(e,t){if(e.base64){var r=Uint8Array.from(atob(e.printable),function(e){return e.charCodeAt(0)});s(e,t,r)}else{e.printable=/^(blob|http)/i.test(e.printable)?e.printable:window.location.origin+("/"!==e.printable.charAt(0)?"/"+e.printable:e.printable);var n=new window.XMLHttpRequest;n.responseType="arraybuffer",n.addEventListener("load",function(){if(-1===[200,201].indexOf(n.status))return(0,a.cleanUp)(e),void e.onError(n.statusText);s(e,t,n.response)}),n.open("GET",e.printable,!0),n.send()}}}},"./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(/*! ./browser */"./src/js/browser.js"),i=o(n),a=r(/*! ./functions */"./src/js/functions.js");function o(e){return e&&e.__esModule?e:{default:e}}var s={send:function(e,t){document.getElementsByTagName("body")[0].appendChild(t);var r=document.getElementById(e.frameId);r.onload=function(){if("pdf"!==e.type){var t=r.contentWindow||r.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),"pdf"!==e.type&&e.style){var n=document.createElement("style");n.innerHTML=e.style,t.head.appendChild(n)}var i=t.getElementsByTagName("img");i.length>0?u(i).then(function(){return c(r,e)}):c(r,e)}else c(r,e)}}};function c(e,t){try{if(e.focus(),i.default.isEdge()||i.default.isIE())try{e.contentWindow.document.execCommand("print",!1,null)}catch(t){e.contentWindow.print()}else e.contentWindow.print()}catch(e){t.onError(e)}finally{(0,a.cleanUp)(t)}}function u(e){var t=[],r=!0,n=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;t.push(l(s))}}catch(e){n=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw i}}return Promise.all(t)}function l(e){return new Promise(function(t){var r=function r(){e&&"undefined"!==typeof e.naturalWidth&&0!==e.naturalWidth&&e.complete?t():setTimeout(r,500)};r()})}t.default=s},"./src/js/raw-html.js":
/*!****************************!*\
  !*** ./src/js/raw-html.js ***!
  \****************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(/*! ./print */"./src/js/print.js"),i=a(n);function a(e){return e&&e.__esModule?e:{default:e}}t.default={print:function(e,t){e.printableElement=document.createElement("div"),e.printableElement.setAttribute("style","width:100%"),e.printableElement.innerHTML=e.printable,i.default.send(e,t)}}},"./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */function(e,t,r){},0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */function(e,t,r){e.exports=r(/*! ./src/index.js */"./src/index.js")}})["default"]})},bd43:function(e,t,r){"use strict";var n=r("41e2"),i=r.n(n);i.a},fcab:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fill"},[e.imageUrl?r("img",{attrs:{src:e.imageUrl}}):e._e()])},i=[];n._withStripped=!0;r("96cf");var a=r("c973"),o=r.n(a),s=(r("c5f6"),r("9755")),c=r("d67a"),u=r("7d7e"),l={name:"awsImage",props:{src:Object,default:String,expires:{type:Number,default:86400},tag:String,imageWidth:Number},methods:{tokenExpired:function(){var e=o()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].dispatch("getCurrentSession");case 2:if(t=e.sent.getAccessToken().getJwtToken(),this.$store.state.app.jwtToken!==t){e.next=5;break}return e.abrupt("return",!1);case 5:return this.$store.dispatch("app/setJwtToken",t),e.abrupt("return",!0);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),cachedUrl:function(){var e=o()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.src.url){e.next=2;break}return e.abrupt("return",this.src.url);case 2:return e.next=4,this.tokenExpired();case 4:if(!e.sent){e.next=7;break}return this.$store.dispatch("app/clearAwsCache"),e.abrupt("return");case 7:return e.abrupt("return",this.$store.getters["app/getAwsUrl"](this.awsSecret));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),generateThumbnail:function(){var e=o()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$apollo.mutate({mutation:u["a"],variables:{key:this.src.secret,tag:this.tag,width:this.imageWidth}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},computed:{isThumbnail:function(){return!!(this.src.secret&&this.tag&&this.imageWidth)},awsSecret:function(){return this.isThumbnail?"".concat(this.src.secret,"_").concat(this.tag):this.src.secret}},asyncComputed:{imageUrl:function(){var e=o()(regeneratorRuntime.mark(function e(){var t,r,n,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.src){e.next=2;break}return e.abrupt("return",this.default);case 2:return e.next=4,this.cachedUrl();case 4:if(t=e.sent,!t){e.next=7;break}return e.abrupt("return",t);case 7:if(!this.awsSecret){e.next=24;break}if(n=this.awsSecret,!this.isThumbnail){e.next=18;break}return e.next=12,s["a"].list(this.awsSecret);case 12:if(i=e.sent,i.length){e.next=18;break}return e.next=16,this.generateThumbnail();case 16:a=e.sent,a&&a.data&&a.data.convertImage&&a.data.convertImage.success||(n=this.src.secret);case 18:return e.next=20,s["a"].get(n,{expires:this.expires});case 20:return t=e.sent,r=(new Date).getTime()+1e3*(this.expires-60),this.$store.dispatch("app/cacheAwsUrl",{key:this.awsSecret,expiration:r,url:t}),e.abrupt("return",t);case 24:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},d=l,f=(r("bd43"),r("2877")),p=Object(f["a"])(d,n,i,!1,null,null,null);p.options.__file="awsImage.vue";t["a"]=p.exports}}]);