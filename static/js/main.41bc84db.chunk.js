(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),l=a.n(c),i=(a(13),a(14),a(15),a(7)),r=a(1);a(5),a(16);function d(e){var t=e.value,a=e.id,c=e.dateProperty,l=e.descriptionProperty,i=e.doneProperty,d=Object(n.useState)({todoValue:t,todoDescription:l}),s=Object(r.a)(d,2),u=s[0],m=s[1],p=Object(n.useState)(!1),f=Object(r.a)(p,2),b=f[0],v=f[1],E=Object(n.useState)("fa fa-pencil fa-fw"),g=Object(r.a)(E,2),h=g[0],y=g[1],w=Object(n.useState)(i),D=Object(r.a)(w,2),k=D[0],N=D[1];function j(e,t){v(!b),y(b?"fa fa-pencil fa-fw":"fa fa-check fa-fw"),document.getElementById(t).disabled=b}function O(e){console.log("Clicked on edit"),m({todoValue:e.trim()})}return o.a.createElement("div",{id:"todo"+a,className:"todo-wrapper"},o.a.createElement("div",{className:"todo-title-date"},o.a.createElement("input",{type:"checkbox",id:"check"+a,onClick:function(){N(!k)}}),o.a.createElement("label",{htmlFor:"check"+a}),o.a.createElement("h5",null,o.a.createElement("input",{type:"text",value:u.todoValue,id:"title"+a,className:k?"done":"",onChange:function(e){return O(e.target.value)},disabled:!0}),o.a.createElement("i",{className:h,onClick:function(e){return j(e.target,"title"+a)}})),o.a.createElement("span",null,"Created on: ",c)),o.a.createElement("div",{className:"description-wrapper"},o.a.createElement("div",{className:"todo-description"},o.a.createElement("input",{type:"text",value:u.todoDescription,id:"description"+a,className:k?"done":"",onChange:function(e){return O(e.target.value)},disabled:!0}),o.a.createElement("i",{className:h,onClick:function(e){return j(e.target,"description"+a)}})),o.a.createElement("div",{className:"function-buttons"},o.a.createElement("button",{onClick:function(){},type:"button",className:"btn btn-secondary button-todo btn btn-danger"},o.a.createElement("i",{className:"fa fa-trash-o fa-lg"})," Delete"))))}a(17);function s(){var e=Object(n.useState)([{value:"Finish group work assignment",date:(new Date).toLocaleDateString(),description:"Work on UI and do data manipulation",isDone:!1},{value:"Buy toilet paper",date:(new Date).toLocaleDateString(),description:"Try at least 3 stores...Germans love to eat toilet paper!",isDone:!1},{value:"Take the dog to the vet",date:(new Date).toLocaleDateString(),description:"",isDone:!1}]),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(r.a)(l,2),u=s[0],m=s[1],p=Object(n.useState)(""),f=Object(r.a)(p,2),b=f[0],v=f[1];var E=a.map((function(e,t){return o.a.createElement(d,{key:t,value:e.value,id:t,dateProperty:e.date,descriptionProperty:e.description,doneProperty:e.isDone})}));return o.a.createElement("div",null,o.a.createElement("div",{className:"header-menu-wrapper"},o.a.createElement("div",{className:"header-menu"},o.a.createElement("h1",null,"To Do List"),o.a.createElement("button",{onClick:function(){document.getElementById("addTodo").classList.add("enabled")},type:"button",className:"btn btn-secondary button-todo"},o.a.createElement("i",{className:"fa fa-plus"}),"Add new To Do"))),o.a.createElement("div",{id:"todoList"},E),o.a.createElement("div",{id:"addTodo"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("Add new Todo"),c([].concat(Object(i.a)(a),[{value:u,date:(new Date).toLocaleDateString(),description:b,isDone:!1}])),console.log(a),document.getElementById("addTodo").classList.remove("enabled")}},o.a.createElement("button",{id:"cancelButton",onClick:function(e){e.preventDefault(),document.getElementById("addTodo").classList.remove("enabled")}},o.a.createElement("i",{className:"fa fa-remove fa-2x"})),o.a.createElement("input",{type:"text",placeholder:"Todo Title",value:u,onChange:function(e){m(e.target.value)}}),o.a.createElement("textarea",{placeholder:"Todo Desciption",value:b,onChange:function(e){v(e.target.value)}}),o.a.createElement("button",{className:"btn btn-lg btn-success",type:"submit"},"Add Todo"))))}function u(){return o.a.createElement("div",{className:"App"},o.a.createElement(s,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.41bc84db.chunk.js.map