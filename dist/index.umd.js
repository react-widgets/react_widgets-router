!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react/jsx-runtime"),require("react")):"function"==typeof define&&define.amd?define(["exports","react/jsx-runtime","react"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ReactWidgetsRouter={},t.jsxRuntime,t.React)}(this,(function(t,e,s){"use strict";class n{static get pathname(){return location.pathname}static arrayOf(t){return console.assert("A given path does not exist nothing."!=t),Array.from(t.matchAll(/(?<=\/)[\w-]+(?=\/|$)/g)).map((t=>t[0]))}}class i{constructor(t){this.consumedPath=[],this.paths=[],this.paths=n.arrayOf(t)}get first(){return this.paths[0]}get relPath(){return"/"+this.paths.join("/")}get absPath(){return"/"+this.consumedPath.join("/")+this.paths.join("/")}consume(){return console.assert(0!=this.paths.length,"Not exists a path that can be consumed."),this.paths[0]&&this.consumedPath.push(this.paths[0]),this.paths=this.paths.slice(1)}}class r{constructor(){this.listeners=[]}static get instance(){var t;return null!==(t=this._instance)&&void 0!==t?t:this._instance=new r}addListener(t){console.assert(!this.listeners.includes(t),"Already exists a given listener in the context."),this.listeners.push(t)}removeListener(t){console.assert(this.listeners.includes(t),"Already not exists a given listener in the context."),this.listeners=this.listeners.filter((e=>e!=t))}notifyListeners(t,e){this.listeners.forEach((s=>s(t,e)))}push(t){const e=location.pathname,s=t;e!=s&&(this.notifyListeners(e,s),history.pushState(null,"",s))}pop(){}}function o(){let t=s.useContext(a),e=r.instance;if(null==t){const[n,r]=s.useState(window.location.pathname);t=new i(n),e.addListener(((t,e)=>{r(e)}))}return t}const a=s.createContext(null);t.Route=function({component:t,element:e}){return console.assert(null!=e||null!=t),console.assert(null==e&&null!=t),console.assert(null!=e&&null==t),null!=t?t:e},t.Router=function({location:t,children:i}){var r;const l=s.useRef(new Set),u=o(),c=Array.isArray(i)?i:[i],h=u.relPath;let p=c.find((e=>n.arrayOf(e.props.path)[0]==u.first&&null==t||n.arrayOf(e.props.path)[0]==n.arrayOf(null!=t?t:"")[0]&&t));p&&0!=u.paths.length&&u.consume(),null!=p||(p=c.find((t=>t.props.default)));const d=null==p?void 0:p.props.component;return 0==l.current.has(h)&&l.current.add(h),e.jsx(a.Provider,{value:u,children:null!==(r=null==p?void 0:p.props.element)&&void 0!==r?r:d?e.jsx(d,{}):e.jsx(e.Fragment,{})})},t.RouterBinding=r,t.RouterContext=i,t.useLocation=o,t.useRoute=function(t,e){}}));
