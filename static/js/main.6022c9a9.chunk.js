(this["webpackJsonplista-de-tareas"]=this["webpackJsonplista-de-tareas"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(3),r=n.n(a),s=(n(12),n(6)),l=n(2);var i=n(0),d=c.a.createContext();function u(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!0),i=Object(l.a)(s,2),d=i[0],u=i[1],j=c.a.useState(t),b=Object(l.a)(j,2),m=b[0],O=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),O(n),u(!1)}catch(a){r(a)}}),1e3)})),{item:m,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),O(t)}catch(a){r(a)}},loading:d,error:a}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,u=c.a.useState(""),j=Object(l.a)(u,2),b=j[0],m=j[1],O=c.a.useState(!1),h=Object(l.a)(O,2),p=h[0],x=h[1],f=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(i.jsx)(d.Provider,{value:{loading:a,error:r,totalTodos:v,completedTodos:f,serchValue:b,setSearchValue:m,searchedTodos:g,addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)},toggleCompleteTodos:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!c[t].completed,o(c)},deleteTodos:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},openModal:p,setOpenModal:x},children:e.children})}n(14);function j(){var e=c.a.useContext(d),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOS"]})}n(15);function b(){var e=c.a.useContext(d),t=e.serchValue,n=e.setSearchValue;return Object(i.jsx)("div",{className:"TodoSearch",children:Object(i.jsx)("input",{className:"TodoSearch-input",type:"text",placeholder:"Cebolla",value:t,onChange:function(e){n(e.target.value)}})})}n(16);function m(e){var t=e.completed,n=e.text,o=e.onDelete,c=e.onComplete;return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)("span",{className:"Icon-check ".concat(t?"Icon-check--active":""),onClick:c,children:"\u221a"}),Object(i.jsx)("p",{className:t?"TodoItem-p--complete":"",children:n}),Object(i.jsx)("span",{className:"icon-deleted",onClick:o,children:"X"})]})}n(17);function O(e){return Object(i.jsx)("section",{className:"TodoList",children:Object(i.jsx)("ul",{children:e.children})})}n(18);function h(){var e=c.a.useContext(d),t=e.openModal,n=e.setOpenModal;return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){n(!t)},children:Object(i.jsx)("span",{className:"CreateTodoButton-span",children:"+"})})}n(19);function p(e){var t=e.children;return r.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(20);function x(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(d),r=a.addTodo,s=a.setOpenModal,u=function(e){e.preventDefault(),r(n),s(!1)};return Object(i.jsxs)("form",{action:"",onSubmit:u,className:"",children:[Object(i.jsx)("label",{children:"Escribe tu nueva tarea "}),Object(i.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Cortar cebolla para el almuerzo"}),Object(i.jsxs)("div",{className:"bottonContainer",children:[Object(i.jsx)("button",{type:"button",onClick:function(){s(!1)},className:"bottonForm bottonContainer-cancel",children:"cancelar"}),Object(i.jsx)("button",{type:"submit",onClick:u,className:"bottonForm bottonContainer-add",children:"anniadir"})]})]})}function f(){var e=c.a.useContext(d),t=e.error,n=e.loading,o=e.searchedTodos,a=e.toggleCompleteTodos,r=e.deleteTodos,s=e.openModal,l=e.setOpenModal;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(b,{}),Object(i.jsxs)(O,{children:[t&&Object(i.jsx)("p",{children:"Desesperate, hubo un error"}),n&&Object(i.jsx)("p",{children:"Estamos cargando, espera"}),!n&&!o.length&&Object(i.jsx)("p",{children:"Crea tu primer todo"}),o.map((function(e){return Object(i.jsx)(m,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),!!s&&Object(i.jsx)(p,{children:Object(i.jsx)(x,{})}),Object(i.jsx)(h,{setOpenModal:l,modal:s})]})}var v=function(){return Object(i.jsx)(u,{children:Object(i.jsx)(f,{})})};r.a.render(Object(i.jsx)(v,{}),document.getElementById("root")),document.getElementById("modal")}],[[21,1,2]]]);
//# sourceMappingURL=main.6022c9a9.chunk.js.map