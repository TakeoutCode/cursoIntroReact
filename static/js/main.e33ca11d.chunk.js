(this["webpackJsonplista-de-tareas"]=this["webpackJsonplista-de-tareas"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(3),r=n.n(a),s=(n(12),n(6)),l=n(2);var d=n(0),i=c.a.createContext();function u(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!0),d=Object(l.a)(s,2),i=d[0],u=d[1],j=c.a.useState(t),m=Object(l.a)(j,2),b=m[0],h=m[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),h(n),u(!1)}catch(a){r(a)}}),1e3)})),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),h(t)}catch(a){r(a)}},loading:i,error:a}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,u=c.a.useState(""),j=Object(l.a)(u,2),m=j[0],b=j[1],h=c.a.useState(!1),x=Object(l.a)(h,2),p=x[0],O=x[1],f=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!m.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=m.toLowerCase();return t.includes(n)}));return Object(d.jsx)(i.Provider,{value:{loading:a,error:r,totalTodos:v,completedTodos:f,serchValue:m,setSearchValue:b,searchedTodos:g,addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)},toggleCompleteTodos:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!c[t].completed,o(c)},deleteTodos:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},openModal:p,setOpenModal:O},children:e.children})}n(14);function j(){var e=c.a.useContext(i),t=e.totalTodos,n=e.completedTodos;return Object(d.jsxs)("h2",{className:"TodoCounter",children:["You have completed ",n," of ",t," TASK"]})}n(15);function m(){var e=c.a.useContext(i),t=e.serchValue,n=e.setSearchValue;return Object(d.jsx)("div",{className:"TodoSearch",children:Object(d.jsx)("input",{className:"TodoSearch-input",type:"text",placeholder:"Search Task",value:t,onChange:function(e){n(e.target.value)}})})}n(16);function b(e){var t=e.completed,n=e.text,o=e.onDelete,c=e.onComplete;return Object(d.jsxs)("li",{className:"TodoItem",children:[Object(d.jsx)("span",{className:"Icon-check ".concat(t?"Icon-check--active":""),onClick:c,children:"\u221a"}),Object(d.jsx)("p",{className:t?"TodoItem-p--complete":"",children:n}),Object(d.jsx)("span",{className:"icon-deleted",onClick:o,children:"X"})]})}n(17);function h(e){return Object(d.jsx)("section",{className:"TodoList",children:Object(d.jsx)("ul",{children:e.children})})}n(18);function x(){var e=c.a.useContext(i),t=e.openModal,n=e.setOpenModal;return Object(d.jsx)("button",{className:"CreateTodoButton",onClick:function(){n(!t)},children:Object(d.jsx)("span",{className:"CreateTodoButton-span",children:"+"})})}n(19);function p(e){var t=e.children;return r.a.createPortal(Object(d.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(20);function O(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(i),r=a.addTodo,s=a.setOpenModal,u=function(e){e.preventDefault(),""===n?console.log("actualizar estado de todo lleno o no"):(r(n),s(!1))};return Object(d.jsxs)("form",{action:"",onSubmit:u,className:"",children:[Object(d.jsx)("label",{children:"Write your new TASK"}),Object(d.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Buy balls for the game"}),Object(d.jsxs)("div",{className:"bottonContainer",children:[Object(d.jsx)("button",{type:"button",onClick:function(){s(!1)},className:"bottonForm bottonContainer-cancel",children:"Cancel"}),Object(d.jsx)("button",{type:"submit",onClick:u,className:"bottonForm bottonContainer-add",children:"Add"})]})]})}function f(){var e=c.a.useContext(i),t=e.error,n=e.loading,o=e.searchedTodos,a=e.toggleCompleteTodos,r=e.deleteTodos,s=e.openModal,l=e.setOpenModal;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(m,{}),Object(d.jsxs)(h,{children:[t&&Object(d.jsx)("p",{children:"Desesperate, hubo un error"}),n&&Object(d.jsx)("p",{children:"Estamos cargando, espera"}),!n&&!o.length&&Object(d.jsx)("p",{children:"Crea tu primer todo"}),o.map((function(e){return Object(d.jsx)(b,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),!!s&&Object(d.jsx)(p,{children:Object(d.jsx)(O,{})}),Object(d.jsx)(x,{setOpenModal:l,modal:s})]})}var v=function(){return Object(d.jsx)(u,{children:Object(d.jsx)(f,{})})};r.a.render(Object(d.jsx)(v,{}),document.getElementById("root")),document.getElementById("modal")}],[[21,1,2]]]);
//# sourceMappingURL=main.e33ca11d.chunk.js.map