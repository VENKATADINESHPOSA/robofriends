(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),o=(n(12),n(4)),i=n(5),h=n(7),l=n(6),b=n(0),d=function(e){var t=e.id,n=e.name,c=e.email;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robots"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:c})]})]})},u=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},j=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},g=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(b.jsx)("h1",{className:"tc",children:"Page Loading"}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(j,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(u,{robots:t})})]})}}]),n}(r.a.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(15);a.a.render(Object(b.jsx)(g,{}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.6f4e0f2b.chunk.js.map