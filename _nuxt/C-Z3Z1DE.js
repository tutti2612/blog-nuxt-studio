import{d,ay as f,y as _,I as o,b as x,c as z,a1 as I,M as a,l as S}from"./B0JsjnVR.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;f(s=>({"353d3d59":a(m)}));const e=_();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const n=l,p=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),m=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=o(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(x(),z("span",{style:I({width:a(c),height:a(c)})},null,4))}}),g=S(y,[["__scopeId","data-v-5ffe27a3"]]);export{g as default};
