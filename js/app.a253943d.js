(function(e){function t(t){for(var r,n,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d217357":"119b70bb","chunk-2d226517":"b8315b9f","chunk-31b7da78":"d51b1150","chunk-e5e14214":"3097551f","chunk-07709945":"44aa14d7","chunk-07d2937e":"11ff28c4","chunk-61a4a424":"7d4c5fc3","chunk-d64ce810":"c41f20c7","chunk-e9cb29b0":"44241b2c","chunk-881601d0":"43d1a95e","chunk-01973780":"14420907","chunk-c90ad870":"82f1878d"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-31b7da78":1,"chunk-e5e14214":1,"chunk-07709945":1,"chunk-07d2937e":1,"chunk-61a4a424":1,"chunk-d64ce810":1,"chunk-e9cb29b0":1,"chunk-881601d0":1,"chunk-01973780":1,"chunk-c90ad870":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d217357":"31d6cfe0","chunk-2d226517":"31d6cfe0","chunk-31b7da78":"59df22cc","chunk-e5e14214":"61a224b9","chunk-07709945":"e5a04aaf","chunk-07d2937e":"6f9a2505","chunk-61a4a424":"580e7915","chunk-d64ce810":"59df22cc","chunk-e9cb29b0":"2a9bc4ba","chunk-881601d0":"1951ebb0","chunk-01973780":"3ee39488","chunk-c90ad870":"f1211fd7"}[e]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[e],m.parentNode.removeChild(m),a(s)},m.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(m)})).then((function(){n[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1239:function(e,t,a){e.exports=a.p+"img/Welcome1.6bff1b19.gif"},"1f57":function(e,t,a){"use strict";var r=a("d4ec"),n=a("bee2"),o=a("bc3a"),s=a.n(o),i=a("c4c6"),c="http://localhost:8080/api/test/",u="http://localhost:8080/api/",l=function(){function e(){Object(r["a"])(this,e)}return Object(n["a"])(e,[{key:"getPublicContent",value:function(){return s.a.get(c+"open")}},{key:"getUserBoard",value:function(){return s.a.get(c+"user",{headers:Object(i["a"])()})}},{key:"getUserBooks",value:function(){return s.a.get(u+"mybook",{headers:Object(i["a"])()})}},{key:"getAdminBoard",value:function(){return s.a.get(c+"admin",{headers:Object(i["a"])()})}}]),e}();t["a"]=new l},"31fa":function(e,t,a){"use strict";var r=a("58b0"),n=a.n(r);n.a},"3cac":function(e,t,a){"use strict";var r=a("eff1"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[a("div",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[a("font-awesome-icon",{attrs:{icon:"home"}}),e._v(" The BOOK STORE ")],1)],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/booklist"}},[e._v(" BookList ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[e._v(" About ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/privacy"}},[e._v(" Privacy ")])],1),e.showAdminBoard?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[e._v(" Manage Books ")])],1):e._e(),e.showAdminBoard?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/manageuser"}},[e._v(" Manage users ")])],1):e._e(),e.showAdminBoard?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/add"}},[e._v(" Add book ")])],1):e._e(),e.currentUser?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[a("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),e._v(" Cart ")],1)],1):e._e()]),e.currentUser?e._e():a("div",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[a("font-awesome-icon",{attrs:{icon:"user-plus"}}),e._v(" Sign Up ")],1)],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[a("font-awesome-icon",{attrs:{icon:"sign-in-alt"}}),e._v(" Login ")],1)],1)]),e.currentUser?a("div",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[a("font-awesome-icon",{attrs:{icon:"user"}}),e._v(" "+e._s(e.currentUser.username)+" ")],1)],1),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[a("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),e._v(" LogOut ")],1)])]):e._e()]),a("div",{staticClass:"container"},[a("router-view")],1)])},o=[],s=(a("caad"),a("2532"),{name:"app",computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}}),i=s,c=a("2877"),u=Object(c["a"])(i,n,o,!1,null,null,null),l=u.exports,d=a("f309");r["default"].use(d["a"]);var m=new d["a"]({}),v=(a("d3b7"),a("8c4f")),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cart-container"},[a("h2",{staticStyle:{color:"black","font-weight":"bold"}},[e._v("Shopping Cart")]),a("table",[e._m(0),a("tbody",e._l(e.cartItems,(function(t){return a("tr",{key:t.id},[a("td",{staticStyle:{color:"black"}},[e._v(e._s(t.title))]),a("td",{staticStyle:{color:"black"}},[e._v(e._s(t.price))]),a("td",[a("button",{staticClass:"action-button",on:{click:function(a){return e.removeFromCart(t.id)}}},[e._v("Remove")])])])})),0)]),e.showTotal?a("p",{staticStyle:{color:"black","font-weight":"bold"}},[e._v("Total Price: "+e._s(e.totalPrice))]):e._e(),a("button",{staticClass:"clear-cart-button",on:{click:e.clearCart}},[e._v("Clear Cart")]),a("div",{staticClass:"payment-section"},[a("h2",{staticStyle:{color:"black","font-weight":"bold","border-bottom":"2px solid black","padding-bottom":"10px"}},[e._v("Payment Information")]),a("div",{staticClass:"payment-inputs"},[a("div",{staticClass:"input-group",staticStyle:{"background-color":"#333"}},[a("label",{attrs:{for:"cardNumber"}},[e._v("Card Number:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.cardNumber,expression:"cardNumber"}],attrs:{type:"text",id:"cardNumber",required:""},domProps:{value:e.cardNumber},on:{input:function(t){t.target.composing||(e.cardNumber=t.target.value)}}})]),a("div",{staticClass:"input-group",staticStyle:{"background-color":"#333"}},[a("label",{attrs:{for:"expirationMonth"}},[e._v("MM:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.expirationMonth,expression:"expirationMonth"}],attrs:{type:"text",id:"expirationMonth",maxlength:"2",required:""},domProps:{value:e.expirationMonth},on:{input:function(t){t.target.composing||(e.expirationMonth=t.target.value)}}})]),a("div",{staticClass:"input-group",staticStyle:{"background-color":"#333"}},[a("label",{attrs:{for:"expirationYear"}},[e._v("YY:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.expirationYear,expression:"expirationYear"}],attrs:{type:"text",id:"expirationYear",maxlength:"2",required:""},domProps:{value:e.expirationYear},on:{input:function(t){t.target.composing||(e.expirationYear=t.target.value)}}})]),a("div",{staticClass:"input-group",staticStyle:{"background-color":"#333"}},[a("label",{attrs:{for:"cvv"}},[e._v("CVV:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.cvv,expression:"cvv"}],attrs:{type:"text",id:"cvv",maxlength:"3",required:""},domProps:{value:e.cvv},on:{input:function(t){t.target.composing||(e.cvv=t.target.value)}}})])])]),a("button",{staticClass:"checkout-button",on:{click:e.checkoutAndStore}},[e._v("Checkout and Store to Collection")])])},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{color:"black","font-weight":"bold"}},[e._v("Title")]),a("th",{staticStyle:{color:"black","font-weight":"bold"}},[e._v("Price")]),a("th",{staticStyle:{color:"black","font-weight":"bold"}},[e._v("Action")])])])}],f=(a("4160"),a("13d5"),a("159b"),a("d111")),g={computed:{cartItems:function(){return this.$store.state.cart.cartItems},showTotal:function(){return this.cartItems.length>0},totalPrice:function(){return this.cartItems.reduce((function(e,t){return e+t.price}),0)},currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")}},data:function(){return{showPaymentForm:!1,cardNumber:"",cvv:""}},methods:{removeFromCart:function(e){this.$store.commit("removeFromCart",e)},clearCart:function(){this.$store.commit("clearCart")},checkoutAndStore:function(){var e=this;this.cartItems.forEach((function(t){e.buyBook(t.id)}))},buyBook:function(e){var t=this,a={userid:this.currentUser.id,bookid:e};f["a"].buybook(a).then((function(e){console.log(e.data),"OK"===e.data.status&&t.$router.push("/profile")})).catch((function(e){console.log(e)}))}}},b=g,k=(a("6814"),Object(c["a"])(b,p,h,!1,null,"1425f181",null)),y=k.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"search-section"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"input-group mb-3",staticStyle:{"background-color":"rgba(255, 255, 255, 0.8)"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTitle,expression:"searchTitle"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search by title"},domProps:{value:e.searchTitle},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchBooks(t)},input:function(t){t.target.composing||(e.searchTitle=t.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(t){e.page=1,e.retrieveBooks()}}},[e._v(" Search ")])])])])]),a("div",{staticClass:"book-grid-section",staticStyle:{"background-color":"rgba(255, 255, 255, 0.8)","backdrop-filter":"blur(10px)"}},[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[a("v-card-title",{staticClass:"text-primary"},[e._v("Books")]),a("v-row",e._l(e.books,(function(t){return a("v-col",{key:t.id,attrs:{cols:"12",md:"6",lg:"4"}},[a("router-link",{attrs:{to:{name:"book-details",params:{id:t.id}}}},[a("v-card",{staticClass:"mb-3",staticStyle:{"background-color":"transparent"},attrs:{"max-width":"400",height:"100%"}},[a("v-responsive",{attrs:{"aspect-ratio":"1.5"}},[a("v-img",{attrs:{src:t.img,contain:""}})],1),a("v-card-title",{staticClass:"text-h6"},[e._v(e._s(t.title))])],1)],1)],1)})),1)],1)],1)],1),a("div",{staticClass:"pagination-section"},[a("div",{staticClass:"col-md-12"},[a("b-pagination",{attrs:{"total-rows":e.count,"per-page":e.pageSize,"prev-text":"Prev","next-text":"Next"},on:{change:e.handlePageChange},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)])])},w=[],C=(a("25f0"),a("1f57")),x={name:"Admin",data:function(){return{content:"",books:[],title:"",searchTitle:"",headers:[{text:"ID",sortable:!1,value:"id"},{text:"Title",align:"start",sortable:!1,value:"title"},{text:"Author",value:"author",sortable:!1},{text:"Status",value:"status",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],totalPages:0,currentPage:1,page:1,count:0,pageSize:25,pageSizes:[3,6,9]}},methods:{getRequestParams:function(e,t,a){var r={};return e&&(r["title"]=e),t&&(r["page"]=t-1),a&&(r["size"]=a),r},searchBooks:function(){this.page=1,this.retrieveBooks()},retrieveBooks:function(){var e=this,t=this.getRequestParams(this.searchTitle,this.page,this.pageSize);f["a"].getAll(t).then((function(t){var a=t.data,r=a.books,n=a.totalItems;e.books=r,e.count=n,console.log(t.data)})).catch((function(e){console.log(e)}))},handlePageSizeChange:function(e){this.pageSize=e.target.value,this.page=1,this.retrieveBooks()},handlePageChange:function(e){this.page=e,this.retrieveBooks()},refreshList:function(){this.retrieveBooks()},editBook:function(e){this.$router.push({name:"book-details",params:{id:e}})},deleteBook:function(e){var t=this;f["a"].delete(e).then((function(){t.refreshList()})).catch((function(e){console.log(e)}))},onPageChange:function(e){this.retrieveBooks(e)}},mounted:function(){var e=this;C["a"].getAdminBoard().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})),this.retrieveBooks()}},P=x,S=(a("cccb"),a("6544")),O=a.n(S),j=a("b0af"),I=a("99d9"),T=a("62ad"),B=a("adda"),$=a("6b53"),N=a("0fd9"),A=Object(c["a"])(P,_,w,!1,null,null,null),E=A.exports;O()(A,{VCard:j["a"],VCardTitle:I["c"],VCol:T["a"],VImg:B["a"],VResponsive:$["a"],VRow:N["a"]});var U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.errors.has("username")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Username is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.errors.has("password")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:e.loading}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),r("span",[e._v("Login")])])]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-danger btn-block",attrs:{disabled:e.loading},on:{click:e.googleLogin}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),r("span",[e._v("Login with Google")])])]),r("div",{staticClass:"form-group"},[e.message?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()]),r("b-form-group",{staticClass:"text-center"},[r("p",[e._v(" Don't have an account? You can "),r("router-link",{attrs:{to:"/signup"}},[e._v("create one by Github ")])],1),r("b-button",{staticClass:"social-button",on:{click:e.socialGithubLogin}},[r("img",{attrs:{src:a("8125"),width:"20"}})])],1)],1)])])},L=[],q=(a("96cf"),a("1da1")),M=a("d4ec"),W=function e(t,a,r){Object(M["a"])(this,e),this.username=t,this.email=a,this.password=r},R={name:"Login",data:function(){return{user:new W("",""),loading:!1,message:"",email:"",password:"",username:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){t?e.user.username&&e.user.password&&e.$store.dispatch("auth/login",e.user).then((function(){e.$router.push("/profile")}),(function(t){e.loading=!1,e.message=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})):e.loading=!1}))},googleLogin:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$auth.loginWith("google");case 3:a=t.sent,console.log(a),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},Y=R,z=(a("3cac"),Object(c["a"])(Y,U,L,!1,null,"1aeffe40",null)),D=z.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card card-container"},[a("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),a("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e.successful?e._e():a("div",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[e._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.submitted&&e.errors.has("username")?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("username")))]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e.submitted&&e.errors.has("email")?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("email")))]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.submitted&&e.errors.has("password")?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("password")))]):e._e()]),e._m(0),e._m(1)])]),e.message?a("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])])},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary btn-block"},[e._v("Sign Up")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary btn-block"},[e._v("Sign up via Google")])])}],V={name:"Register",data:function(){return{user:new W("","",""),submitted:!1,successful:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("auth/register",e.user).then((function(t){e.message=t.message,e.successful=!0}),(function(t){e.message=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),e.successful=!1}))}))}}},G=V,H=(a("f6c9"),Object(c["a"])(G,F,J,!1,null,"4d05b776",null)),K=H.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"welcome-container",style:{backgroundImage:"url("+a("1239")+")"}},[r("h1",[e._v("About Us")]),r("h1",[e._v("Welcome to our Website!")]),r("p",[e._v("This is the website of Group 12. This website allows users to inquire and purchase books.")]),r("router-link",{staticClass:"enter-button",attrs:{to:"/home"}},[e._v("Enter")])],1)},X=[],Z=(a("c735"),{}),ee=Object(c["a"])(Z,Q,X,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},re=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"container"},[a("header",[a("h1",[e._v("About Online Bookstore")])]),a("section",{attrs:{id:"mission"}},[a("h2",[e._v("Our Mission")]),a("p",[e._v("We believe in the transformative power of books. Our mission is to connect readers with their next favorite read, foster a love for literature, and create a vibrant community of book lovers. Whether you're a seasoned reader or just starting your reading journey, we're here to inspire, guide, and celebrate the magic of storytelling.")])]),a("section",{attrs:{id:"explore"}},[a("h2",[e._v("Explore, Discover, Delight")]),a("p",[e._v("Navigate through our extensive collection of books spanning various genres, from timeless classics to contemporary bestsellers. Our curated book lists and personalized recommendations make it easy for you to discover hidden gems and explore new worlds within the pages of a book. We're not just a bookstore; we're your companion on a literary adventure.")])]),a("section",{attrs:{id:"features"}},[a("h2",[e._v("Features That Set Us Apart")]),a("ul",[a("li",[a("strong",[e._v("Personalized Recommendations:")]),e._v(" Our advanced algorithms tailor book suggestions based on your reading history, preferences, and browsing habits.")]),a("li",[a("strong",[e._v("Book Lists for Every Mood:")]),e._v(" Whether you're in the mood for a heartwarming romance, a gripping thriller, or an enlightening non-fiction piece, our thoughtfully curated book lists have you covered.")]),a("li",[a("strong",[e._v("Community Connection:")]),e._v(" Join book clubs, participate in discussions, and connect with fellow readers who share your literary interests. Your next bookish friend might be just a click away!")])])]),a("section",{attrs:{id:"journey"}},[a("h2",[e._v("Your Literary Journey Starts Here")]),a("p",[e._v("Online Bookstore is more than a bookstore; it's a celebration of stories waiting to be explored. Join us on this literary journey, where every page turned is an adventure, and every book is a new friend waiting to be discovered.")]),a("p",[e._v("Embark on your reading adventure today. Let the pages turn, and the stories unfold.")])])])])}],ne={name:"About",data:function(){return{}}},oe=ne,se=(a("31fa"),Object(c["a"])(oe,ae,re,!1,null,"240e5825",null)),ie=se.exports,ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ue=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"container"},[a("header",[a("h1",[e._v("Privacy Policy")])]),a("section",{attrs:{id:"information"}},[a("p",[e._v("Your privacy is important to us. It is Online Bookstore's policy to respect your privacy regarding any information we may collect from you across our website.")])]),a("section",{attrs:{id:"information-collected"}},[a("h2",[e._v("Information We Collect")]),a("p",[e._v("We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.")]),a("p",[e._v("Types of information we may collect include:")]),a("ul",[a("li",[e._v("Contact information, such as your name and email address.")]),a("li",[e._v("Demographic information, such as your location and preferences.")]),a("li",[e._v("Information about your interactions with our website, such as pages visited and books viewed.")])])]),a("section",{attrs:{id:"use-of-information"}},[a("h2",[e._v("How We Use Your Information")]),a("p",[e._v("We use the information we collect in various ways, including to:")]),a("ul",[a("li",[e._v("Personalize and improve your experience on our website.")]),a("li",[e._v("Send you newsletters, updates, and promotional materials.")]),a("li",[e._v("Analyze and monitor usage patterns to enhance our services.")])])]),a("section",{attrs:{id:"security"}},[a("h2",[e._v("Security")]),a("p",[e._v("We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage, is 100% secure and reliable, and we cannot guarantee its absolute security.")])]),a("section",{attrs:{id:"third-parties"}},[a("h2",[e._v("Third-Party Services")]),a("p",[e._v("We may employ third-party companies and individuals due to the following reasons:")]),a("ul",[a("li",[e._v("To facilitate our service.")]),a("li",[e._v("To provide the service on our behalf.")]),a("li",[e._v("To perform service-related services.")])]),a("p",[e._v("These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.")])]),a("section",{attrs:{id:"changes"}},[a("h2",[e._v("Changes to This Privacy Policy")]),a("p",[e._v("We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.")])]),a("section",{attrs:{id:"contact"}},[a("h2",[e._v("Contact Us")]),a("p",[e._v("If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at "),a("a",{attrs:{href:"mailto:privacy@onlinebookstore.com"}},[e._v("privacy@onlinebookstore.com")]),e._v(".")])])])])}],le={name:"Privacy",data:function(){return{}}},de=le,me=(a("e37a"),Object(c["a"])(de,ce,ue,!1,null,"21915724",null)),ve=me.exports;r["default"].use(v["a"]);var pe=new v["a"]({mode:"history",routes:[{path:"/",component:te},{path:"/home",component:E},{path:"/add",name:"add",component:function(){return Promise.all([a.e("chunk-e5e14214"),a.e("chunk-07709945"),a.e("chunk-07d2937e")]).then(a.bind(null,"b887"))}},{path:"/books/:id",name:"book-details",component:function(){return Promise.all([a.e("chunk-e5e14214"),a.e("chunk-881601d0"),a.e("chunk-01973780")]).then(a.bind(null,"0cd8"))}},{path:"/booklist",name:"booklist",component:function(){return a.e("chunk-31b7da78").then(a.bind(null,"db3a"))}},{path:"/booklist/:id",name:"booklist-details",component:function(){return a.e("chunk-2d226517").then(a.bind(null,"e7c2"))}},{path:"/buybooks/:id",name:"buybookpage",component:function(){return Promise.all([a.e("chunk-e5e14214"),a.e("chunk-881601d0"),a.e("chunk-c90ad870")]).then(a.bind(null,"54ec"))}},{path:"/login",component:D},{path:"/register",component:K},{path:"/about",component:ie},{path:"/privacy",component:ve},{path:"/profile",name:"profile",component:function(){return a.e("chunk-2d217357").then(a.bind(null,"c66d"))}},{path:"/cart",name:"cart",component:y},{path:"/admin",name:"admin",component:function(){return Promise.all([a.e("chunk-e5e14214"),a.e("chunk-07709945"),a.e("chunk-61a4a424"),a.e("chunk-e9cb29b0")]).then(a.bind(null,"b295"))}},{path:"/manageuser",name:"manageuser",component:function(){return Promise.all([a.e("chunk-e5e14214"),a.e("chunk-07709945"),a.e("chunk-61a4a424"),a.e("chunk-d64ce810")]).then(a.bind(null,"ba51"))}}]}),he=pe,fe=a("2f62"),ge=a("bee2"),be=a("bc3a"),ke=a.n(be),ye="http://localhost:8080/api/auth/",_e=function(){function e(){Object(M["a"])(this,e)}return Object(ge["a"])(e,[{key:"login",value:function(e){return ke.a.post(ye+"signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return ke.a.post(ye+"signup",{username:e.username,email:e.email,password:e.password})}}]),e}(),we=new _e,Ce=JSON.parse(localStorage.getItem("user")),xe=Ce?{status:{loggedIn:!0},user:Ce}:{status:{loggedIn:!1},user:null},Pe={namespaced:!0,state:xe,actions:{login:function(e,t){var a=e.commit;return we.login(t).then((function(e){return a("loginSuccess",e),Promise.resolve(e)}),(function(e){return a("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;we.logout(),t("logout")},register:function(e,t){var a=e.commit;return we.register(t).then((function(e){return a("registerSuccess"),Promise.resolve(e.data)}),(function(e){return a("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}},Se=(a("4de4"),{state:{cartItems:[]},mutations:{addToCart:function(e,t){e.cartItems.push(t)},removeFromCart:function(e,t){e.cartItems=e.cartItems.filter((function(e){return e.id!==t}))},clearCart:function(e){e.cartItems=[]}},actions:{}});r["default"].use(fe["a"]);var Oe=new fe["a"].Store({modules:{auth:Pe,cart:Se}}),je=a("5f5b"),Ie=(a("f9e3"),a("2dd8"),a("4989"),a("ab8b"),a("7bb1")),Te=a("ecee"),Be=a("ad3d"),$e=a("c074");Te["c"].add($e["a"],$e["d"],$e["e"],$e["b"],$e["c"]),r["default"].config.productionTip=!1,r["default"].use(Ie["a"]),r["default"].component("font-awesome-icon",Be["a"]),r["default"].use(fe["a"]),r["default"].use(je["a"]),new r["default"]({router:he,vuetify:m,store:Oe,render:function(e){return e(l)}}).$mount("#app")},"58b0":function(e,t,a){},"5ced":function(e,t,a){},6814:function(e,t,a){"use strict";var r=a("df57"),n=a.n(r);n.a},8125:function(e,t,a){e.exports=a.p+"img/github_logo.ef7a02b6.png"},c427:function(e,t,a){"use strict";var r=a("bc3a"),n=a.n(r);t["a"]=n.a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}})},c4c6:function(e,t,a){"use strict";function r(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}a.d(t,"a",(function(){return r}))},c735:function(e,t,a){"use strict";var r=a("f50b"),n=a.n(r);n.a},cccb:function(e,t,a){"use strict";var r=a("5ced"),n=a.n(r);n.a},cf57:function(e,t,a){},d111:function(e,t,a){"use strict";var r=a("d4ec"),n=a("bee2"),o=a("c427"),s=a("c4c6"),i=function(){function e(){Object(r["a"])(this,e)}return Object(n["a"])(e,[{key:"getAll",value:function(e){return o["a"].get("/books",{params:e})}},{key:"getBooklist",value:function(e){return o["a"].get("/booklists",{params:e})}},{key:"getbyList",value:function(e){return o["a"].get("/booklists/".concat(e))}},{key:"get",value:function(e){return o["a"].get("/books/".concat(e))}},{key:"getmy",value:function(e){return o["a"].get("/mybook",{params:e,headers:Object(s["a"])()})}},{key:"create",value:function(e){return o["a"].post("/books",e,{headers:Object(s["a"])()})}},{key:"buybook",value:function(e){return o["a"].post("/buybook",e,{headers:Object(s["a"])()})}},{key:"checkowner",value:function(e){return o["a"].post("/checkowner",e,{headers:Object(s["a"])()})}},{key:"update",value:function(e,t){return o["a"].put("/books/".concat(e),t,{headers:Object(s["a"])()})}},{key:"delete",value:function(e){return o["a"].delete("/books/".concat(e),{headers:Object(s["a"])()})}},{key:"findByTitle",value:function(e){return o["a"].get("/books?title=".concat(e))}}]),e}();t["a"]=new i},d883:function(e,t,a){},df57:function(e,t,a){},e37a:function(e,t,a){"use strict";var r=a("d883"),n=a.n(r);n.a},eff1:function(e,t,a){},f50b:function(e,t,a){},f6c9:function(e,t,a){"use strict";var r=a("cf57"),n=a.n(r);n.a}});
//# sourceMappingURL=app.a253943d.js.map