var b=Object.defineProperty;var a=(e,o)=>b(e,"name",{value:o,configurable:!0});import{r as h,R as c}from"./index-35d2303c.js";var y=h.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),W=a(function(o,n,t){var r=t.get(o);return r?r(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function m(e,o){if(e==null)return{};var n={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(o.indexOf(r)>=0)&&(n[r]=e[r]);return n}a(m,"_objectWithoutPropertiesLoose");var x=h.forwardRef(function(e,o){var n=e.alt,t=e.color,r=e.size,i=e.weight,w=e.mirrored,v=e.children,C=e.renderPath,z=m(e,["alt","color","size","weight","mirrored","children","renderPath"]),l=h.useContext(y),s=l.color,u=s===void 0?"currentColor":s,d=l.size,g=l.weight,P=g===void 0?"regular":g,f=l.mirrored,_=f===void 0?!1:f,I=m(l,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:r??d,height:r??d,fill:t??u,viewBox:"0 0 256 256",transform:w||_?"scale(-1, 1)":void 0},I,z),!!n&&c.createElement("title",null,n),v,c.createElement("rect",{width:"256",height:"256",fill:"none"}),C(i??P,t??u))});x.displayName="IconBase";const $=x;export{$ as I,W as r};
//# sourceMappingURL=IconBase.esm-7134aa6b.js.map
