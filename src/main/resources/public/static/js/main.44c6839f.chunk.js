(this["webpackJsonpprova-front"]=this["webpackJsonpprova-front"]||[]).push([[0],{142:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),s=(a(86),a(61),a(180)),c=a(179),i=a(50),u=a(75),m=Object(u.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:i.a.A400},background:{default:"#fff"}}}),d=(a(89),a(44)),h=a.n(d),f=a(76),p=a(24),g=a(25),E=a(28),b=a(27),v=a(26),C=a(45),y=function(e){return r.a.createElement(C.b,Object.assign({activeStyle:{fontWeight:"bold"}},e))},j=function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper indigo lighten-2"},r.a.createElement(y,{to:"/",className:"brand-logo",activeStyle:{}},"Prova BRD"),r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(y,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(y,{to:"/caselist"},"Cases")),r.a.createElement("li",null,r.a.createElement(y,{to:"/case"},"New Case")))))},O={findAll:function(){return fetch("repositorycase").then((function(e){return O.treatError(e)})).then((function(e){return e.json()}))},findById:function(e){return fetch("repositorycase/".concat(e)).then((function(e){return O.treatError(e)})).then((function(e){return e.json()}))},put:function(e,t){return fetch("repositorycase/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:t}).then((function(e){return O.treatError(e)})).then((function(e){return e.json()}))},post:function(e){return fetch("repositorycase",{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then((function(e){return O.treatError(e)})).then((function(e){return e.json()}))},treatError:function(e){if(console.log(e),!e.ok)throw Error(e.responseText);return e}},k=O,T={exibeMensagem:function(e,t){"success"===e&&h.a.toast({html:t,classes:"green",displayLength:2e3}),"error"===e&&h.a.toast({html:t,classes:"red",displayLength:2e3})}},w=a(23),N=a(11),x={routeProps:{path:"/case",component:function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state.case;console.log(t.tags),t.tags?t.tags=t.tags.split(","):t.tags=[],"new"===n.state.case.id?(t.id=void 0,t.access="PUBLIC",t=JSON.stringify(t),console.log(t),k.post(t).then((function(e){n.tratarResp(e),n.setState({case:e}),T.exibeMensagem("success","New case successfully submited.")})).catch((function(e){T.exibeMensagem("error","Communication error, try again later.")}))):(console.log(JSON.stringify(t)),k.put(t.id,JSON.stringify(t)).then((function(e){n.tratarResp(e),n.setState({case:e}),T.exibeMensagem("success","Case successfully submited.")})).catch((function(e){T.exibeMensagem("error","Communication error, try again later.")})))},n.state={case:{id:e.location.state&&"new"!==e.location.state.id?e.location.state.id:"new",folder:"",client:"",title:"",responsible:"",tags:"",description:"",comments:""}},n.onChangeDefault=n.onChangeDefault.bind(Object(E.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(E.a)(n)),n.tratarResp=n.tratarResp.bind(Object(E.a)(n)),n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.case.id&&"new"!==this.state.case.id&&k.findById(this.state.case.id).then((function(t){e.tratarResp(t),e.setState({case:t})})).catch((function(e){T.exibeMensagem("error","Communication error, try again later.")}))}},{key:"onChangeDefault",value:function(e){var t;t="checkbox"===e.currentTarget.type?e.currentTarget.checked:e.currentTarget.value;var a=this.state.case;a[e.currentTarget.id]=t,this.setState({case:a})}},{key:"tratarResp",value:function(e){var t="";if(e.tags){var a,n=Object(f.a)(e.tags);try{for(n.s();!(a=n.n()).done;){t+=a.value}}catch(r){n.e(r)}finally{n.f()}e.tags=t}}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"container mb-10 center"},r.a.createElement("h1",null,"Case ",this.state.case.id," ")),r.a.createElement("div",{className:"container mb-10 center"},r.a.createElement(N.Card,null,r.a.createElement(w.ValidatorForm,{noValidate:!0,ref:"form",onSubmit:this.handleSubmit,onError:function(e){return console.log(e)}},r.a.createElement(N.Row,null,r.a.createElement(N.Col,{className:"s8"},r.a.createElement(w.TextValidator,{fullWidth:!0,type:"input",ref:"folder",label:"Folder",onChange:this.onChangeDefault,name:"folder",id:"folder",value:this.state.case.folder,maxLength:"40"}))),r.a.createElement(N.Row,null,r.a.createElement(N.Col,{className:"s8"},r.a.createElement(w.TextValidator,{fullWidth:!0,type:"input",ref:"client",label:"Client",onChange:this.onChangeDefault,name:"client",id:"client",value:this.state.case.client,validators:["required"],maxLength:"250",errorMessages:["Client is required"]}))),r.a.createElement(N.Row,null,r.a.createElement(N.Col,{className:"s8"},r.a.createElement(w.TextValidator,{fullWidth:!0,type:"input",ref:"title",label:"Title",id:"title",onChange:this.onChangeDefault,name:"title",value:this.state.case.title,validators:["required"],errorMessages:["Title is required"]}))),r.a.createElement(N.Row,null,r.a.createElement(N.Col,{className:"s6"},r.a.createElement(w.TextValidator,{fullWidth:!0,type:"input",ref:"responsible",label:"Responsible",id:"responsible",onChange:this.onChangeDefault,name:"responsible",value:this.state.case.responsible,validators:["required"],errorMessages:["Responsible is required"]}))),r.a.createElement(N.Row,null,r.a.createElement(N.Col,{className:"s6"},r.a.createElement(w.TextValidator,{fullWidth:!0,type:"input",ref:"tags",id:"tags",label:"Tags",onChange:this.onChangeDefault,name:"tags",value:this.state.case.tags}))),r.a.createElement(N.Row,null,r.a.createElement(N.Col,{className:"s6"},r.a.createElement(w.TextValidator,{fullWidth:!0,type:"input",id:"description",ref:"description",label:"Description",onChange:this.onChangeDefault,name:"description",value:this.state.case.description}))),r.a.createElement(N.Row,null,r.a.createElement(N.Col,{className:"s12"},r.a.createElement(w.TextValidator,{fullWidth:!0,type:"input",ref:"comments",id:"comments",label:"Comments",onChange:this.onChangeDefault,name:"comments",value:this.state.case.comments}))),r.a.createElement(N.Row,null,this.state.case.id&&"new"!==this.state.case.id?r.a.createElement(N.Button,{type:"submit"},"Update"):r.a.createElement(N.Button,{type:"submit"},"Create"))))))}}]),a}(n.Component)},name:"Case"},R=(a(142),{routeProps:{path:"/",component:function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(p.a)(this,a),t.call(this,e)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"container mb-10"},r.a.createElement("h1",null,"Home")))}}]),a}(n.Component),exact:!0},name:"Home"}),S={routeProps:{component:function(){return r.a.createElement("div",null," Notfound ")}},name:"Notfound"},D=a(181),M=a(178),W=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(p.a)(this,a),t.call(this,e)}return Object(g.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("table",{className:"centered highlight"},r.a.createElement("thead",null,r.a.createElement("tr",{key:"title"},this.props.columns.map((function(e){return r.a.createElement("th",{key:e.title}," ",e.title)})),this.props.actions&&this.props.actions.length>0?r.a.createElement("th",{key:"acoes"}," A\xe7\xf5es "):null)),r.a.createElement("tbody",null,this.props.data&&this.props.data.length>0?this.props.data.map((function(t){return r.a.createElement("tr",{key:"".concat(t.id)},e.props.columns.filter((function(e){return e.field})).map((function(e){return r.a.createElement("td",{key:"".concat(t.id).concat(t[e.field])}," ",t[e.field]," ")})),e.props.actions&&e.props.actions.length>0?e.props.actions.map((function(e){return r.a.createElement("td",{key:"".concat(t.id).concat(e.id)},r.a.createElement("div",null,r.a.createElement(D.a,{variant:"contained",color:"primary",endIcon:r.a.createElement(M.a,null,e.icon),onClick:function(a){return e.click(t)}},e.title)))})):null)})):null))}}]),a}(n.Component),P=a(19),V={Routes:[x,{routeProps:{path:"/caselist",component:function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).goToCase=n.goToCase.bind(Object(E.a)(n)),n.state={columns:[{title:"Folder",field:"folder"},{title:"Client",field:"client"},{title:"Title",field:"title"}],actions:[{title:"Detalhe",icon:"send",id:"detalhe",click:n.goToCase}],data:[],fgoToCase:!1},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.findAll().then((function(t){e.setState({data:t._embedded.case})})).catch((function(e){T.exibeMensagem("error","Communication error, try again later.")}))}},{key:"goToCase",value:function(e){var t=e.id||"new";this.setState({fgoToCase:!0,selectedCaseId:t})}},{key:"render",value:function(){return this.state.fgoToCase?r.a.createElement(P.a,{push:!0,to:{pathname:"/case",state:{id:this.state.selectedCaseId}}}):r.a.createElement(n.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"container mb-10"},r.a.createElement("h1",null,"Cases"),r.a.createElement(W,{data:this.state.data,columns:this.state.columns,actions:this.state.actions})))}}]),a}(n.Component),exact:!0},name:"CaseList"},R,S]};var B=function(){return r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement(P.d,null,V.Routes.map((function(e){return r.a.createElement(P.b,Object.assign({},e.routeProps,{key:e.name}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,{theme:m},r.a.createElement(s.a,null),r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a(143)},86:function(e,t,a){},89:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.44c6839f.chunk.js.map