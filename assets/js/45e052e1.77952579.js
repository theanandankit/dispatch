"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8962],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>b});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(r),f=i,b=l["".concat(d,".").concat(f)]||l[f]||p[f]||o;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(8168),i=(r(6540),r(5680));const o={description:"How to get useful metrics.",sidebar_position:1},a="Dashboards",s={unversionedId:"user-guide/dashboard/index",id:"user-guide/dashboard/index",title:"Dashboards",description:"How to get useful metrics.",source:"@site/docs/user-guide/dashboard/index.mdx",sourceDirName:"user-guide/dashboard",slug:"/user-guide/dashboard/",permalink:"/dispatch/docs/user-guide/dashboard/",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/main/docs/docs/user-guide/dashboard/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"How to get useful metrics.",sidebar_position:1},sidebar:"userGuideSidebar",previous:{title:"Introduction",permalink:"/dispatch/docs/user-guide/"},next:{title:"Incidents",permalink:"/dispatch/docs/user-guide/dashboard/incident"}},d={},c=[],u={toc:c},l="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(l,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"dashboards"},"Dashboards"),(0,i.yg)("p",null,"Dispatch provides basic dashboarding and reporting functionality that allows users to understand how incidents impact their organization. It comes preconfigured with useful aggregations like the number of incidents by type and priority."),(0,i.yg)("p",null,"Additionally, all of the dashboard graphs are dynamic. This dynamism allows us to identify interesting subsets of data by filtering by different incident facets."))}p.isMDXComponent=!0}}]);