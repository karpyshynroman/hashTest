(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],{22:function(t,e,n){t.exports=n(34)},27:function(t,e,n){},28:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),l=(n(27),n(15)),i=n(16),u=n(20),s=n(17),m=n(21),h=(n(28),function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Contact"))}),p=function(t){return console.log(t),c.a.createElement("div",null,c.a.createElement("h1",null,"Home"))},E=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Project"))},d=n(5),f=n(7),b=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(c)))).state={path:""},n.setPathName=function(t){n.setState({path:t.target.innerText})},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return console.log(this.props),c.a.createElement("div",{className:"App"},c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:p}),c.a.createElement(d.a,{path:"/contact",component:h}),c.a.createElement(d.a,{path:"/project",component:E})),c.a.createElement(f.b,{to:"/contact"},!this.state.path.includes("contact")&&c.a.createElement("button",{onClick:this.setPathName},"click go to contact")),c.a.createElement(f.b,{to:"/project"},!this.state.path.includes("project")&&c.a.createElement("button",{onClick:this.setPathName},"click go to project")))}}]),e}(c.a.Component),v=Object(d.f)(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f.a,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f2e9a01b.chunk.js.map