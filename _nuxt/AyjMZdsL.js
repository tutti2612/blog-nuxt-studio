import{M as m,I as p,d as c,aa as i,r as l,N as e,l as u}from"./B4XdRgp1.js";import{u as d}from"./BQ3itk5v.js";import f from"./DfQmY7n6.js";import y from"./DXVHxcWC.js";import"./D-8_DvWc.js";import"./DffrQigl.js";import"./DOtlrBCk.js";import"./Ssb2i-fp.js";import"./DQWG_sbf.js";import"./RW7OmIhu.js";import"./YwpzOdma.js";import"./B_g_PE34.js";import"./jAu0FHO0.js";import"./DCDQIpqp.js";import"./CjPZrEho.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-6f4ad041"]]);export{V as default};