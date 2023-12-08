(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226517"],{e7c2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTitle,expression:"searchTitle"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search by title"},domProps:{value:t.searchTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchBooks(e)},input:function(e){e.target.composing||(t.searchTitle=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.page=1,t.retrieveBooksbyList()}}},[t._v(" Search ")])])])]),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[a("v-card-title",[t._v("Books")]),a("v-row",t._l(t.books,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"6",lg:"4"}},[a("router-link",{attrs:{to:{name:"book-details",params:{id:e.id}}}},[a("v-card",{staticClass:"mb-3",attrs:{"max-width":"400",height:"100%"}},[a("v-responsive",{attrs:{"aspect-ratio":"1.5"}},[a("v-img",{attrs:{src:e.img,contain:""}})],1),a("v-card-title",{staticClass:"text-h6"},[t._v(t._s(e.title))]),a("b-button",[t._v("View Details")])],1)],1)],1)})),1)],1)],1),a("div",{staticClass:"col-md-12"},[a("b-pagination",{attrs:{"total-rows":t.count,"per-page":t.pageSize,"prev-text":"Prev","next-text":"Next"},on:{change:t.handlePageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},i=[],o=a("d111"),n={name:"Bbooklist-details",data:function(){return{content:"",books:[],title:"",searchTitle:"",headers:[{text:"ID",sortable:!1,value:"id"},{text:"Title",align:"start",sortable:!1,value:"title"},{text:"Author",value:"author",sortable:!1},{text:"Status",value:"status",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],totalPages:0,currentPage:1,page:1,count:0,pageSize:6}},methods:{getRequestParams:function(t,e,a){var s={};return t&&(s["title"]=t),e&&(s["page"]=e-1),a&&(s["size"]=a),s},searchBooks:function(){this.page=1,this.retrieveBooksbyList()},retrieveBooksbyList:function(t){var e=this,a=this.getRequestParams(this.searchTitle,this.page,this.pageSize);o["a"].getbyList(t,a).then((function(t){var a=t.data,s=a.books,i=a.totalItems;e.books=s,e.count=i,console.log(t.data)})).catch((function(t){console.log(t)}))},handlePageSizeChange:function(t){this.pageSize=t.target.value,this.page=1,this.retrieveBooksbyList()},handlePageChange:function(t){this.page=t,this.retrieveBooksbyList()},refreshList:function(){this.retrieveBooksbyList()},editBook:function(t){this.$router.push({name:"book-details",params:{id:t}})},deleteBook:function(t){var e=this;o["a"].delete(t).then((function(){e.refreshList()})).catch((function(t){console.log(t)}))},onPageChange:function(t){this.retrieveBooksbyList(t)}},mounted:function(){this.retrieveBooksbyList(this.$route.params.id)}},r=n,l=a("2877"),c=a("6544"),u=a.n(c),d=a("b0af"),h=a("99d9"),p=a("62ad"),v=a("adda"),g=a("6b53"),b=a("0fd9"),k=Object(l["a"])(r,s,i,!1,null,null,null);e["default"]=k.exports;u()(k,{VCard:d["a"],VCardTitle:h["c"],VCol:p["a"],VImg:v["a"],VResponsive:g["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-2d226517.b8315b9f.js.map