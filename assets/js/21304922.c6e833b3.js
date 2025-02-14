"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1956],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var i=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(y,a(a({ref:t},p),{},{components:n})):i.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(8168),r=(n(6540),n(5680));const o={},a="Notification",s={unversionedId:"administration/settings/incident/notification",id:"administration/settings/incident/notification",title:"Notification",description:"Notifications allow you to specify who should be sent incident notifications (in addition to those directly involved).",source:"@site/docs/administration/settings/incident/notification.mdx",sourceDirName:"administration/settings/incident",slug:"/administration/settings/incident/notification",permalink:"/dispatch/docs/administration/settings/incident/notification",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/main/docs/docs/administration/settings/incident/notification.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Incident Types",permalink:"/dispatch/docs/administration/settings/incident/incident-type"},next:{title:"Workflows",permalink:"/dispatch/docs/administration/settings/incident/workflow"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.yg)(d,(0,i.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"notification"},"Notification"),(0,r.yg)("p",null,"Notifications allow you to specify who should be sent incident notifications (in addition to those directly involved)."),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("p",null,(0,r.yg)("img",{src:n(8746).A,width:"493",height:"797"}))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Name:")," The name you wish to present to the user."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Description:")," The description presented to the user when the notification is viewed."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type:")," The plugin type that should be used to send the notification (email or conversation)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Target:")," The recipient of the notification whatever makes sense for the selected plugin type. (e.g. a Slack conversation name without ",(0,r.yg)("inlineCode",{parentName:"p"},"#")," or an email address.)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Filters:")," The search filter which will be used to determine when a notification should be sent."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Enabled:")," Whether the notification is enabled or not."))}u.isMDXComponent=!0},8746:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/admin-ui-notifications-d270dbe4cf6168304fbd4946a23c494e.png"}}]);