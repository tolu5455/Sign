(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,a,t){e.exports=t(413)},205:function(e,a,t){},359:function(e,a,t){},413:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),c=t(196),r=t.n(c),l=(t(205),t(31)),i=t(32),m=t(36),o=t(33),u=t(37),d=t(35),p=t(11),h=t(8),f=(t(359),t(183));t(189);var E=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(!Object(h.isLoaded)(this.props.users))return n.a.createElement("div",null,"Loadding...");if(Object(h.isEmpty)(this.props.users))return n.a.createElement("div",null,"No user");var e=[],a=0,t=f.database().ref(".info/connected"),s=f.database().ref("users/"+this.props.uid.uid+"/connections");for(var c in t.on("value",function(e){if(e.val()){f.database().ref(".info/serverTimeOffset").on("value",function(e){var t=e.val();a=(new Date).getTime()+t});var t=new Date(a),n=t.getHours(),c="0"+t.getMinutes(),r="0"+t.getSeconds(),l=n+":"+c.substr(-2)+":"+r.substr(-2);s.onDisconnect().set("last online "+l),s.set("online")}}),this.props.users)e.push(n.a.createElement("li",{className:"clearfix",key:this.props.users[c].displayName},n.a.createElement("img",{src:this.props.users[c].avatarUrl,alt:"avatar",style:{width:"40px"}}),n.a.createElement("div",{className:"about"},n.a.createElement("div",{className:"name"},this.props.users[c].displayName),n.a.createElement("div",{className:"status"},n.a.createElement("i",null,this.props.users[c].connections)))));return n.a.createElement("div",null,n.a.createElement("div",{className:"container clearfix"},n.a.createElement("div",{className:"people-list",id:"people-list"},n.a.createElement("div",{className:"search"},n.a.createElement("input",{type:"text",placeholder:"search"}),n.a.createElement("i",{className:"fa fa-search"})),n.a.createElement("ul",{className:"list"},e)),n.a.createElement("div",{className:"chat"},n.a.createElement("div",{className:"chat-header clearfix"},n.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg",alt:"avatar"}),n.a.createElement("div",{className:"chat-about"},n.a.createElement("div",{className:"chat-with"},"Chat with Vincent Porter"),n.a.createElement("div",{className:"chat-num-messages"},"already 1 902 messages")),n.a.createElement("i",{className:"fa fa-star"})),n.a.createElement("div",{className:"chat-history"},n.a.createElement("ul",null,n.a.createElement("li",{className:"clearfix"},n.a.createElement("div",{className:"message-data align-right"},n.a.createElement("span",{className:"message-data-time"},"10:10 AM, Today")," \xa0 \xa0",n.a.createElement("span",{className:"message-data-name"},"Olia")," ",n.a.createElement("i",{className:"fa fa-circle me"})),n.a.createElement("div",{className:"message other-message float-right"},"Hi Vincent, how are you? How is the project coming along?")),n.a.createElement("li",null,n.a.createElement("div",{className:"message-data"},n.a.createElement("span",{className:"message-data-name"},n.a.createElement("i",{className:"fa fa-circle online"})," Vincent"),n.a.createElement("span",{className:"message-data-time"},"10:12 AM, Today")),n.a.createElement("div",{className:"message my-message"},"Are we meeting today? Project has been already finished and I have results to show you.")),n.a.createElement("li",{className:"clearfix"},n.a.createElement("div",{className:"message-data align-right"},n.a.createElement("span",{className:"message-data-time"},"10:14 AM, Today")," \xa0 \xa0",n.a.createElement("span",{className:"message-data-name"},"Olia")," ",n.a.createElement("i",{className:"fa fa-circle me"})),n.a.createElement("div",{className:"message other-message float-right"},"Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?")),n.a.createElement("li",null,n.a.createElement("div",{className:"message-data"},n.a.createElement("span",{className:"message-data-name"},n.a.createElement("i",{className:"fa fa-circle online"})," Vincent"),n.a.createElement("span",{className:"message-data-time"},"10:20 AM, Today")),n.a.createElement("div",{className:"message my-message"},"Actually everything was fine. I'm very excited to show this to our team.")),n.a.createElement("li",null,n.a.createElement("div",{className:"message-data"},n.a.createElement("span",{className:"message-data-name"},n.a.createElement("i",{className:"fa fa-circle online"})," Vincent"),n.a.createElement("span",{className:"message-data-time"},"10:31 AM, Today")),n.a.createElement("i",{className:"fa fa-circle online"}),n.a.createElement("i",{className:"fa fa-circle online",style:{color:"#AED2A6"}}),n.a.createElement("i",{className:"fa fa-circle online",style:{color:"#DAE9DA"}})))),n.a.createElement("div",{className:"chat-message clearfix"},n.a.createElement("textarea",{name:"message-to-send",id:"message-to-send",placeholder:"Type your message",rows:"3"}),n.a.createElement("i",{className:"fa fa-file-o"})," \xa0\xa0\xa0",n.a.createElement("i",{className:"fa fa-file-image-o"}),n.a.createElement("button",null,"Send")))))}}]),a}(s.Component),g=Object(p.c)(Object(h.firebaseConnect)(function(e){return[{path:"users"}]}),Object(d.b)(function(e,a){return{uid:e.firebase.auth,users:e.firebase.data.users}}))(E),b=t(199),v=t(183),N=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(h.isLoaded)(this.props.auth)?Object(h.isEmpty)(this.props.auth)?n.a.createElement("div",null,n.a.createElement(b.GoogleLoginButton,{style:{width:"300px"},onClick:function(){return e.props.firebase.login({provider:"google",type:"redirect"})}},"Log in with Google")):n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){v.database().goOffline(),e.props.firebase.logout()}}," Logout"),n.a.createElement(g,null)):null}}]),a}(s.Component),y=Object(p.c)(Object(h.firebaseConnect)(),Object(d.b)(function(e){return{auth:e.firebase.auth}}))(N),j=(t(190),t(119)),w=t.n(j),O=(t(411),t(412),t(189),{apiKey:"AIzaSyDnRdyqOyCN3g0H2Qkd4IyDXYlDRtZoURw",authDomain:"newchat-react.firebaseapp.com",databaseURL:"https://newchat-react.firebaseio.com",projectId:"newchat-react",storageBucket:"newchat-react.appspot.com",messagingSenderId:"583540147958"}),A=Object(p.b)({firebase:h.firebaseReducer});w.a.initializeApp(O);var x=[Object(h.reactReduxFirebase)(w.a,{userProfile:"users",enableLogging:!1})],k=p.c.apply(void 0,x),C=Object(p.d)(A,{},k),D=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h2",{style:{color:"black",fontSize:"40px"}},"Chat App"),n.a.createElement(d.a,{store:C},n.a.createElement("div",null,n.a.createElement(y,null)))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[200,2,1]]]);
//# sourceMappingURL=main.5eff9a37.chunk.js.map