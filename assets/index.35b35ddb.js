import{t as P,c as V,e as E,r as g,o as k,a as U,w as _,b as m,u as p,n as O,g as j,d as x,f as B,h as M,i as l,j as F,k as H,p as q,l as G,m as Q,q as S,s as T,v as z,x as D,B as K,I as C,F as J,T as L,S as W}from"./vendor.9fd69096.js";import X from"https://esm.sh/copy-to-clipboard";import Y from"https://cdn.jsdelivr.net/npm/codemirror/src/codemirror.js";const Z=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}};Z();var ee="/assets/github.78818959.svg",te="/assets/logo.c9f36a96.svg";const ae=["innerHTML"],ne={props:{content:String,loading:Boolean},setup(i){const r=i,{content:c,loading:o}=P(r),e=V(()=>E(c.value));return(a,d)=>{const h=g("a-spin");return k(),U(h,{spinning:p(o)},{default:_(()=>[m("div",O(j(a.$attrs)),[m("div",{innerHTML:p(e)},null,8,ae)],16)]),_:1},8,["spinning"])}}};var I=(i,r)=>{const c=i.__vccOpts||i;for(const[o,e]of r)c[o]=e;return c};const oe={class:"my-editor"},se={props:{content:{type:String},readonly:{type:Boolean,default:()=>!1},loading:Boolean},emits:["update:content"],setup(i,{expose:r,emit:c}){const o=i,{content:e,readonly:a,loading:d}=P(o);let h;const y=x(null);B(()=>{h=Y.fromTextArea(y.value,{lineNumbers:!0,readonly:!!a}),typeof e.value=="string"&&b(e.value),h.on("change",(w,t)=>{c("update:content",h.doc.getValue())})});function b(w){h.doc.setValue(w)}return r({update:b}),(w,t)=>(k(),M("div",oe,[m("textarea",{ref_key:"input",ref:y},null,512)]))}};var A=I(se,[["__scopeId","data-v-5439ba93"]]);const re={props:{content:String,loading:Boolean},setup(i){const r=i,{content:c,loading:o}=P(r);return(e,a)=>{const d=g("a-tab-pane"),h=g("a-tabs");return k(),U(h,{class:"render"},{default:_(()=>[l(d,{key:"1",tab:"Result"},{default:_(()=>[l(ne,{content:p(c),loading:p(o),class:"markdown",style:{"padding-left":"30px"}},null,8,["content","loading"])]),_:1}),l(d,{key:"2",tab:"Source"},{default:_(()=>[l(A,{content:p(c),loading:p(o),readonly:!0},null,8,["content","loading"])]),_:1})]),_:1})}}};const N=i=>(q("data-v-22a21f11"),i=i(),G(),i),le={style:{position:"relative"}},ie=N(()=>m("a",{href:"https://github.com/release-lab",target:"_blank",style:{position:"fixed",right:"0",top:"0"}},[m("img",{src:ee,style:{width:"60px",height:"60px"}})],-1)),ce={class:"toolbar"},ue=N(()=>m("img",{style:{"max-width":"100%","max-height":"100%"},src:te},null,-1)),pe=T(" Generate "),de=T(" Share "),_e={class:"container"},me={class:"left"},he={style:{display:"flex",height:"100%","padding-left":"10px"}},fe={class:"right"},ve={setup(i){const r=x(!1),c=x(null),o=x(""),e=F({repo:"https://github.com/release-lab/whatchanged.git",branch:"master",version:"HEAD~"}),a=P(e);function d(t){Q(()=>e[t],n=>{h(t,n)})}function h(t,n){const s=new URL(window.location.href);s.searchParams.has(t)?s.searchParams.set(t,n):s.searchParams.append(t,n),window.history.pushState(null,null,s)}d("branch"),d("repo"),d("version");const y=x("");function b(){const t=encodeURIComponent(o.value);r.value=!0;const n=Math.random()+"";S.info({key:n,message:"Generating",description:"This may take a few minutes..."});const s=new URL("https://whatchanged.herokuapp.com");s.searchParams.append("repo",e.repo||""),s.searchParams.append("branch",e.branch||""),s.searchParams.append("version",e.version||""),s.searchParams.append("template",t||""),fetch(s).then(u=>u.text()).then(u=>{S.close(n),y.value=u}).catch(u=>{S.close(n),S.error({message:"Error",description:u.message})}).finally(()=>{r.value=!1})}function w(){const t=new URL(window.location.href);t.searchParams.append("tpl",o.value),X(t.href),z.info("URL have been copy to clipboard.")}return B(()=>{const t=new URL(window.location.href);let n=0;if(t.searchParams.has("username")&&(e.username=t.searchParams.get("username"),n++),t.searchParams.has("repo")&&(e.repo=t.searchParams.get("repo"),n++),t.searchParams.has("branch")&&(e.repo=t.searchParams.get("branch"),n++),t.searchParams.has("version")&&(e.version=t.searchParams.get("version")),t.searchParams.has("tpl"))n++,o.value=t.searchParams.get("tpl");else{const s=new URL("https://whatchanged.herokuapp.com");s.pathname="/template",fetch(s).then(u=>u.text()).then(u=>{o.value=u,c.value.update(o.value)})}n===3&&e.username&&e.repo&&b()}),(t,n)=>{const s=g("a-input"),u=g("a-form-item"),R=g("a-button"),$=g("a-form");return k(),M("div",le,[ie,m("div",ce,[ue,l($,{layout:"inline",model:p(a),onSubmit:H(b,["prevent"])},{default:_(()=>[l(u,{label:"Repository",style:{width:"600px"}},{default:_(()=>[l(s,{value:p(a).repo.value,"onUpdate:value":n[0]||(n[0]=v=>p(a).repo.value=v)},null,8,["value"])]),_:1}),l(u,{label:"Branch"},{default:_(()=>[l(s,{value:p(a).branch.value,"onUpdate:value":n[1]||(n[1]=v=>p(a).branch.value=v)},null,8,["value"])]),_:1}),l(u,{label:"Version"},{default:_(()=>[l(s,{value:p(a).version.value,"onUpdate:value":n[2]||(n[2]=v=>p(a).version.value=v)},null,8,["value"])]),_:1}),l(u,null,{default:_(()=>[l(R,{type:"primary","html-type":"submit",loading:r.value},{default:_(()=>[pe]),_:1},8,["loading"]),l(R,{type:"default",onClick:w,style:{"margin-left":"20px"}},{default:_(()=>[de]),_:1})]),_:1})]),_:1},8,["model","onSubmit"])]),m("div",_e,[m("div",me,[m("div",he,[l(A,{ref_key:"editor",ref:c,template:o.value,"onUpdate:template":n[3]||(n[3]=v=>o.value=v),readonly:!0},null,8,["template"])])]),m("div",fe,[l(re,{content:y.value,loading:r.value},null,8,["content","loading"])])])])}}};var ge=I(ve,[["__scopeId","data-v-22a21f11"]]);const f=D(ge);f.use(K);f.use(C);f.use(C.TextArea);f.use(J);f.use(L);f.use(L.TabPane);f.use(L.TabContent);f.use(W);f.mount("#app");
