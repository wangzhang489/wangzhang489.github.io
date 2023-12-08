(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",[a("strong",[t._v("Username:")]),t._v(" "+t._s(t.currentUser.username)+" ")]),a("p",[a("strong",[t._v("Email:")]),t._v(" "+t._s(t.currentUser.email)+" ")]),a("strong",[t._v("Authorities:")]),a("ul",t._l(t.currentUser.roles,(function(e,s){return a("li",{key:s},[t._v(t._s(e))])})),0),a("v-row",{staticClass:"list px-3 mx-auto",attrs:{align:"center"}},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTitle,expression:"searchTitle"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search by title"},domProps:{value:t.searchTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchBooks(e)},input:function(e){e.target.composing||(t.searchTitle=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.page=1,t.retrieveBooks()}}},[t._v(" Search ")])])])]),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[a("v-card-title",[t._v("Books")]),a("v-row",t._l(t.books,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"6",lg:"4"}},[a("router-link",{attrs:{to:{name:"book-details",params:{id:e.id}}}},[a("v-card",{staticClass:"mb-3",attrs:{"max-width":"400",height:"100%"}},[a("v-responsive",{attrs:{"aspect-ratio":"1.5"}},[a("v-img",{attrs:{src:e.img,contain:""}})],1),a("v-card-title",{staticClass:"text-h6"},[t._v(t._s(e.title))])],1)],1)],1)})),1)],1)],1)],1),a("div",{staticClass:"col-md-12"},[a("b-pagination",{attrs:{"total-rows":t.count,"per-page":t.pageSize,"prev-text":"Prev","next-text":"Next"},on:{change:t.handlePageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},o=[],r=a("d111"),i={name:"Profile",data:function(){return{books:[],title:"",content:"",totalPages:0,currentPage:1,page:0,count:0,pageSize:4,searchTitle:"",headers:[{text:"ID",sortable:!1,value:"id"},{text:"Title",align:"start",sortable:!1,value:"title"},{text:"Author",value:"author",sortable:!1},{text:"Status",value:"status",sortable:!1},{text:"Actions",value:"actions",sortable:!1}]}},computed:{currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/login"),this.retrieveBooks()},methods:{getRequestParams:function(t,e,a){var s={};return t&&(s["title"]=t),e&&(s["page"]=e-1),a&&(s["size"]=a),s},searchBooks:function(){this.page=1,this.retrieveBooks()},retrieveBooks:function(){var t=this,e=this.getRequestParams(this.searchTitle,this.page,this.pageSize);r["a"].getmy(e).then((function(e){var a=e.data,s=a.books,o=a.totalItems;t.books=s,t.count=o,console.log(e.data)})).catch((function(t){console.log(t)}))},refreshList:function(){this.retrieveBooks()},handlePageChange:function(t){this.page=t,this.retrieveBooks()},editBook:function(t){this.$router.push({name:"book-details",params:{id:t}})},deleteBook:function(t){var e=this;r["a"].delete(t).then((function(){e.refreshList()})).catch((function(t){console.log(t)}))}}},n=i,l=a("2877"),c=a("6544"),u=a.n(c),d=a("b0af"),h=a("99d9"),v=a("62ad"),p=a("adda"),g=a("6b53"),m=a("0fd9"),f=Object(l["a"])(n,s,o,!1,null,null,null);e["default"]=f.exports;u()(f,{VCard:d["a"],VCardTitle:h["c"],VCol:v["a"],VImg:p["a"],VResponsive:g["a"],VRow:m["a"]})}}]);
//# sourceMappingURL=chunk-2d217357.119b70bb.js.map