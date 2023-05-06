"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),g=o,f=s["".concat(c,".").concat(g)]||s[g]||d[g]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={id:"running-the-cli",title:"Running the CLI",slug:"/running-the-cli",sidebar_position:6},a=void 0,l={unversionedId:"GettingStarted/running-the-cli",id:"GettingStarted/running-the-cli",title:"Running the CLI",description:"We believe that getting your cloud emissions data should be easy. If you are looking to quickly get an output of data, the CLI is a great option. It allows you to specify exactly what data you\u2019re looking for, including the date range, regions, groupings and output type.",source:"@site/docs/GettingStarted/RunningTheCli.md",sourceDirName:"GettingStarted",slug:"/running-the-cli",permalink:"/docs/running-the-cli",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"running-the-cli",title:"Running the CLI",slug:"/running-the-cli",sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Run with Docker",permalink:"/docs/run-with-docker"},next:{title:"Creating a Lookup Table",permalink:"/docs/creating-a-lookup-table"}},c={},u=[{value:"Local",id:"local",level:4},{value:"CLI Options",id:"cli-options",level:4}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We believe that getting your cloud emissions data should be easy. If you are looking to quickly get an output of data, the CLI is a great option. It allows you to specify exactly what data you\u2019re looking for, including the date range, regions, groupings and output type."),(0,o.kt)("h4",{id:"local"},"Local"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn start-cli <options>\n")),(0,o.kt)("h4",{id:"cli-options"},"CLI Options"),(0,o.kt)("p",null,"You can run the tool interactively with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," flag; CLI will ask for the options/parameters"),(0,o.kt)("p",null,"Or you can choose to pass the parameters in a single line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--startDate YYYY-MM-DD \\\n--endDate YYYY-MM-DD \\\n--region [us-east-1 | us-east-2] \\\n--groupBy [day | dayAndService | service] \\\n--format [table | csv]\n")))}d.isMDXComponent=!0}}]);