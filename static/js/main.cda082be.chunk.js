(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(n,t,e){n.exports=e.p+"static/media/logo2.4ea2a2c4.jpeg"},25:function(n,t,e){n.exports=e.p+"static/media/logo1.3dd26169.jpeg"},26:function(n,t,e){n.exports=e.p+"static/media/ios_qr.38c1157d.png"},27:function(n,t,e){n.exports=e.p+"static/media/sara_qr.cfd2efa6.jpeg"},29:function(n,t,e){n.exports=e(59)},57:function(n,t,e){},58:function(n,t,e){},59:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(9),c=e.n(i),o=e(4),u=e(5),l=e(7),s=e(6),m=e(8),p=e(2),d=e(3),f=e(21),b=e.n(f);function j(){var n=Object(p.a)(["\n  margin: 12px;\n  height: 56px;\n"]);return j=function(){return n},n}function h(){var n=Object(p.a)(["\n  display: flex;\n  border-bottom: 2px solid var(--light);\n"]);return h=function(){return n},n}var g=d.a.div(h()),v=d.a.img.attrs({src:b.a})(j()),O=function(n){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(v,null))}}]),t}(a.Component),x=e(24),E=e.n(x);function w(){var n=Object(p.a)(["\n  width: 100%;\n  height: 250px;\n  object-fit: contain;\n"]);return w=function(){return n},n}function y(){var n=Object(p.a)(["\n  width: 330px;\n  display: inline-block;\n  margin: 1.2rem;\n  padding: 0.5rem;\n  line-height: 1.5;\n  box-shadow: 0 0 3px #999;\n  border-radius: 5px;\n  transition: all 0.2s ease-out;\n  &:hover {\n    transform: scale(1.05);\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(p.a)(["\n  max-width: 1280px;\n  min-width: 375\n  margin: 0.5rem auto;\n  padding: 0.5rem;\n  text-align: center;\n"]);return k=function(){return n},n}var C=d.a.div(k()),_=d.a.div(y()),q=d.a.img(w()),J=function(n){function t(n){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this,n))).state={items:[]},e}return Object(m.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,this.state.items.map(function(n,t){return r.a.createElement(_,{key:n.name},r.a.createElement(q,{src:n.preview_url}),n.name,r.a.createElement("br",null),"$",n.price,".00",r.a.createElement("br",null),"\u5e93\u5b58\uff1a",n.count,r.a.createElement("br",null),"\u5355\u4f4d\u51c0\u91cd\uff1a",n.weight," lbs")}))}},{key:"componentDidMount",value:function(){var n=this;E.a.get("api/list_items.json").then(function(t){var e=t.data.data;n.setState(function(){return{items:e}})})}}]),t}(a.Component);e(57);function A(){var n=Object(p.a)(["\n  width: 120px;\n  margin: 1rem;\n  display: inline-block;\n  object-fit: contain;\n  animation: logoanim 2s infinite;\n"]);return A=function(){return n},n}function B(){var n=Object(p.a)(["\n  width: 330px;\n  display: inline-block;\n  object-fit: contain;\n"]);return B=function(){return n},n}function D(){var n=Object(p.a)(["\n  min-width: 375\n  margin: 0.5rem auto;\n  padding: 0.5rem;\n  border-top: 2px solid var(--light);\n  \n"]);return D=function(){return n},n}var F=d.a.div(D()),I=d.a.img(B()),M=d.a.img(A()),N=e(25),S=e.n(N),$=e(26),z=e.n($),G=e(27),H=e.n(G),K=function(n){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{src:S.a}),r.a.createElement(F,null,r.a.createElement(I,{src:H.a}),r.a.createElement(I,{src:z.a})))}}]),t}(a.Component),L=(e(58),function(n){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(J,null),r.a.createElement(K,null))}}]),t}(a.Component));c.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.cda082be.chunk.js.map