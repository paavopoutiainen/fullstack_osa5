(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(14),c=t.n(o),l=(t(20),t(4)),u=t(2),i=function(e){var n=e.searchWord,t=e.callback;return a.a.createElement("div",null,"Search name",a.a.createElement("input",{value:n,type:"text",placeholder:"Search..",onChange:t}))},m=function(e){return a.a.createElement("form",{onSubmit:e.addCallback},a.a.createElement("div",null,"name:",a.a.createElement("input",{value:e.person.name,onChange:e.changeCallback,name:"name"})),a.a.createElement("div",null,"number:",a.a.createElement("input",{value:e.person.number,onChange:e.changeCallback,name:"number"})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))},s=function(e){var n=e.name,t=e.number,r=e.deletePerson;return a.a.createElement("tr",null,a.a.createElement("td",null,n),a.a.createElement("td",null,t),a.a.createElement("td",null,a.a.createElement("button",{onClick:r},"delete")))},d=t(3),f=t.n(d),b="/api/persons",p={getAll:function(){return f.a.get(b).then(function(e){return e.data})},update:function(e,n){return f.a.put("".concat(b,"/").concat(n),e).then(function(e){return e.data})},create:function(e){return f.a.post(b,e).then(function(e){return e.data})},deletePerson:function(e){return f.a.delete("".concat(b,"/").concat(e))}},h=function(e){var n=e.persons,t=e.searchWord,r=e.setPersons,o=e.setMessage,c=n.map(function(e){return e.name.toLowerCase().includes(t.toLowerCase())?a.a.createElement(s,{key:e.name,name:e.name,number:e.number,deletePerson:function(){return function(e){console.log("the person of id ".concat(e," was clicked"));var t=n.find(function(n){return n.id===e});window.confirm("Delete ".concat(t.name,"?"))&&(console.log("got here"),p.deletePerson(e).then(r(n.filter(function(n){return n.id!==e}))),o("".concat(t.name," deleted")),setTimeout(function(){o(null)},5e3))}(e.id)}}):""});return a.a.createElement("table",null,a.a.createElement("tbody",null,c))},g=function(e){var n=e.message,t=e.errorMessage;return null===n&&null===t?null:null===t&&null!==n?a.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n):a.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},t)};function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var v=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)({name:"",number:""}),s=Object(u.a)(c,2),d=s[0],f=s[1],b=Object(r.useState)(""),v=Object(u.a)(b,2),O=v[0],y=v[1],j=Object(r.useState)(null),w=Object(u.a)(j,2),k=w[0],P=w[1],S=Object(r.useState)(null),C=Object(u.a)(S,2),D=C[0],T=C[1];return Object(r.useEffect)(function(){p.getAll().then(function(e){return o(e)})},[]),a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(g,{message:k,errorMessage:D}),a.a.createElement(i,{searchWord:O,callback:function(e){y(e.target.value)}}),a.a.createElement("h2",null,"Add new contact"),a.a.createElement(m,{person:d,changeCallback:function(e){f(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(t,!0).forEach(function(n){Object(l.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},d,Object(l.a)({},e.target.name,e.target.value)))},addCallback:function(e){if(e.preventDefault(),t.some(function(e){return e.name===d.name})){var n=t.find(function(e){return e.name===d.name});window.confirm("".concat(d.name," is already added to phonebook, replace the old number with a new one?"))&&p.update(d,n.id).then(function(e){o(t.filter(function(n){return n.name!==e.name}).concat(e)),P("Number changed"),setTimeout(function(){P(null)},5e3)}).catch(function(e){T("Information of ".concat(d.name," has already been removed from the server")),o(t.filter(function(e){return d.name!==e.name})),setTimeout(function(){T(null)},5e3)})}else p.create(d).then(function(e){o(t.concat(e)),P("Added ".concat(d.name)),setTimeout(function(){return P(null)},5e3)}).catch(function(e){console.log(e.response.data.error),T("".concat(e.response.data.error)),setTimeout(function(){return T(null)},5e3)});f({name:"",number:""})}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(h,{persons:t,searchWord:O,setPersons:o,setMessage:P}))};c.a.render(a.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7c5c69b4.chunk.js.map