(self.webpackChunkblessing_skin_server=self.webpackChunkblessing_skin_server||[]).push([[595],{1570:(e,t)=>{t.w=function(e){return e}},3291:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var i=s(5893);s(3804);const a=e=>(0,i.jsx)("a",Object.assign({href:"#",title:e.title,className:"ml-2",onClick:e.onClick},{children:(0,i.jsx)("i",{className:"fas fa-edit"},void 0)}),void 0)},5996:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var i=s(5893);s(3804);const a=()=>(0,i.jsx)("div",Object.assign({className:"container text-center",title:"Loading..."},{children:(0,i.jsx)("i",{className:"fas fa-sync fa-spin"},void 0)}),void 0)},6595:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>v});var i=s(5893),a=s(3804),n=s(1570),r=s(88),c=s(6703),o=s(439),d=s(5996),l=s(3291);const h=e=>{const{app:t}=e;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:t.id},void 0),(0,i.jsxs)("td",{children:[(0,i.jsx)("span",{children:t.name},void 0),(0,i.jsx)(l.Z,{title:(0,r.t)("user.oauth.modifyName"),onClick:e.onEditName},void 0)]},void 0),(0,i.jsx)("td",{children:t.secret},void 0),(0,i.jsxs)("td",{children:[(0,i.jsx)("span",{children:t.redirect},void 0),(0,i.jsx)(l.Z,{title:(0,r.t)("user.oauth.modifyUrl"),onClick:e.onEditRedirect},void 0)]},void 0),(0,i.jsx)("td",{children:(0,i.jsx)("button",Object.assign({className:"btn btn-danger",onClick:e.onDelete},{children:(0,r.t)("report.delete")}),void 0)},void 0)]},void 0)};var u=s(2794);const j=e=>{const[t,s]=(0,a.useState)(""),[n,c]=(0,a.useState)("");return(0,i.jsxs)(u.Z,Object.assign({show:e.show,onConfirm:()=>{e.onCreate(t,n)},onDismiss:()=>{s(""),c("")},onClose:e.onClose},{children:[(0,i.jsxs)("div",Object.assign({className:"form-group"},{children:[(0,i.jsx)("label",Object.assign({htmlFor:"new-app-name"},{children:(0,r.t)("user.oauth.name")}),void 0),(0,i.jsx)("input",{value:t,onChange:e=>{s(e.target.value)},className:"form-control",id:"new-app-name",type:"text",required:!0},void 0)]}),void 0),(0,i.jsxs)("div",Object.assign({className:"form-group"},{children:[(0,i.jsx)("label",Object.assign({htmlFor:"new-app-redirect"},{children:(0,r.t)("user.oauth.redirect")}),void 0),(0,i.jsx)("input",{value:n,onChange:e=>{c(e.target.value)},className:"form-control",id:"new-app-redirect",type:"url",required:!0},void 0)]}),void 0)]}),void 0)},v=(0,n.w)((()=>{const[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(!0),[l,u]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{(async()=>{n(!0);const e=await c.U2("/oauth/clients");t(e),n(!1)})()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",Object.assign({className:"btn btn-primary",onClick:()=>u(!0)},{children:(0,r.t)("user.oauth.create")}),void 0),(0,i.jsx)("div",Object.assign({className:"card mt-2"},{children:(0,i.jsx)("div",Object.assign({className:"card-body p-0"},{children:(0,i.jsxs)("table",Object.assign({className:"table table-striped"},{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,r.t)("user.oauth.id")},void 0),(0,i.jsx)("th",{children:(0,r.t)("user.oauth.name")},void 0),(0,i.jsx)("th",{children:(0,r.t)("user.oauth.secret")},void 0),(0,i.jsx)("th",{children:(0,r.t)("user.oauth.redirect")},void 0),(0,i.jsx)("th",{children:(0,r.t)("admin.operationsTitle")},void 0)]},void 0)},void 0),(0,i.jsx)("tbody",{children:0===e.length?(0,i.jsx)("tr",{children:(0,i.jsx)("td",Object.assign({className:"text-center",colSpan:5},{children:s?(0,i.jsx)(d.Z,{},void 0):(0,r.t)("general.noResult")}),void 0)},void 0):e.map(((e,s)=>(0,i.jsx)(h,{app:e,onEditName:()=>(async(e,s)=>{let i;try{const{value:t}=await(0,o.K)({mode:"prompt",title:(0,r.t)("user.oauth.name"),input:e.name});i=t}catch(e){return}const a=await c.gz("/oauth/clients/"+e.id,Object.assign(Object.assign({},e),{name:i}));"id"in a?t((t=>(t[s]=Object.assign(Object.assign({},e),{name:i}),t.slice()))):o.A.error(a.message)})(e,s),onEditRedirect:()=>(async(e,s)=>{let i;try{const{value:t}=await(0,o.K)({mode:"prompt",title:(0,r.t)("user.oauth.redirect"),input:e.redirect});i=t}catch(e){return}const a=await c.gz("/oauth/clients/"+e.id,Object.assign(Object.assign({},e),{redirect:i}));"id"in a?t((t=>(t[s]=Object.assign(Object.assign({},e),{redirect:i}),t.slice()))):o.A.error(a.message)})(e,s),onDelete:()=>(async e=>{try{await(0,o.K)({text:(0,r.t)("user.oauth.confirmRemove"),okButtonType:"danger"})}catch(e){return}await c.IV("/oauth/clients/"+e.id),t((t=>t.filter((t=>t.id!==e.id))))})(e)},e.id)))},void 0)]}),void 0)}),void 0)}),void 0),(0,i.jsx)(j,{show:l,onCreate:async(e,s)=>{const i=await c.v_("/oauth/clients",{name:e,redirect:s});"id"in i?t((e=>[...e,i])):o.A.error(i.message)},onClose:()=>u(!1)},void 0)]},void 0)}))}}]);