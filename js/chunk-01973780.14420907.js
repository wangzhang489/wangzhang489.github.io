(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01973780"],{"0cd8":function(t,o,r){"use strict";r.r(o);var n=function(){var t=this,o=t.$createElement,r=t._self._c||o;return t.currentBook?r("div",{staticClass:"book-details py-3"},[r("v-container",{staticClass:"details-container"},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-img",{attrs:{src:t.currentBook.img,alt:"Book Cover",contain:""}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h2",[t._v(t._s(t.currentBook.title))]),r("p",[r("strong",[t._v("Author:")]),t._v(" "+t._s(t.currentBook.author))]),r("p",[r("strong",[t._v("Format:")]),t._v(" "+t._s(t.currentBook.bookformat))]),r("p",[r("strong",[t._v("ISBN:")]),t._v(" "+t._s(t.currentBook.isbn))]),r("p",[r("strong",[t._v("Genre:")]),t._l(t.currentBook.genre.split(","),(function(o,n){return r("v-chip",{key:n,staticClass:"mr-2",attrs:{outlined:""}},[t._v(" "+t._s(o.trim())+" ")])}))],2),r("p",[r("strong",[t._v("Pages:")]),t._v(" "+t._s(t.currentBook.pages))]),r("p",[r("strong",[t._v("Rating:")]),t._v(" "+t._s(t.currentBook.rating))]),r("p",[r("strong",[t._v("Reviews:")]),t._v(" "+t._s(t.currentBook.reviews))]),r("p",[r("strong",[t._v("Price:")]),t._v(" "+t._s(t.currentBook.price))]),t.showAdminBoard?r("p",[r("strong",[t._v("Status:")]),t._v(" "+t._s(t.currentBook.published?"Published":"Pending"))]):t._e(),r("p",[r("strong",[t._v("Description:")]),t._v(" "+t._s(t.currentBook.description))])])],1),r("v-divider",{staticClass:"my-5"}),r("v-row",[r("v-col",{attrs:{cols:"12"}},[t.showAdminBoard?r("div",[t.currentBook.published?r("v-btn",{staticClass:"mr-2",attrs:{color:"primary",small:""},on:{click:function(o){return t.updatePublished(!1)}}},[t._v(" UnPublish ")]):r("v-btn",{staticClass:"mr-2",attrs:{color:"danger",small:""},on:{click:function(o){return t.updatePublished(!0)}}},[t._v(" Publish ")]),r("v-btn",{staticClass:"mr-2",attrs:{color:"danger",small:""},on:{click:t.deleteBook}},[t._v(" Delete ")]),r("v-btn",{attrs:{color:"danger",small:""},on:{click:t.updateBook}},[t._v(" Update ")])],1):t._e(),t.currentUser?r("div",[r("v-btn",{attrs:{color:"danger",small:""},on:{click:t.checkower}},[t._v(" Buy ")]),r("v-btn",{attrs:{color:"danger",small:""},on:{click:t.addToCart}},[t._v(" Add to Cart ")])],1):t._e()])],1)],1)],1):r("div",[r("p",[t._v("Please click on a Book...")])])},e=[],s=(r("a4d3"),r("e01a"),r("caad"),r("2532"),r("d111")),c={name:"book",data:function(){return{currentBook:null}},methods:{getBook:function(t){var o=this;s["a"].get(t).then((function(t){o.currentBook=t.data,console.log(t.data)})).catch((function(t){console.log(t)}))},updatePublished:function(t){var o=this,r={id:this.currentBook.id,title:this.currentBook.title,description:this.currentBook.description,published:t};s["a"].update(this.currentBook.id,r).then((function(r){o.currentBook.published=t,console.log(r.data)})).catch((function(t){console.log(t)}))},updateBook:function(){var t=this;s["a"].update(this.currentBook.id,this.currentBook).then((function(o){console.log(o.data),t.$router.push({name:"books"})})).catch((function(t){console.log(t)}))},checkower:function(){var t=this,o={userid:this.currentUser.id,bookid:this.currentBook.id};s["a"].checkowner(o).then((function(o){console.log(o.data),0===o.data?t.$router.push({name:"buybookpage",params:{id:t.currentBook.id}}):alert("you already owned this book")})).catch((function(t){console.log(t)}))},deleteBook:function(){var t=this;s["a"].delete(this.currentBook.id).then((function(o){console.log(o.data),t.$router.push({name:"books"})})).catch((function(t){console.log(t)}))},addToCart:function(){this.$store.commit("addToCart",this.currentBook),alert("Book added to cart!")}},mounted:function(){this.getBook(this.$route.params.id)},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")}}},a=c,i=(r("1d6c"),r("2877")),u=r("6544"),l=r.n(u),d=r("8336"),h=r("cc20"),v=r("62ad"),k=r("a523"),p=r("ce7e"),_=r("adda"),B=r("0fd9"),g=Object(i["a"])(a,n,e,!1,null,"3b4d10ea",null);o["default"]=g.exports;l()(g,{VBtn:d["a"],VChip:h["a"],VCol:v["a"],VContainer:k["a"],VDivider:p["a"],VImg:_["a"],VRow:B["a"]})},"1d6c":function(t,o,r){"use strict";var n=r("3126"),e=r.n(n);e.a},3126:function(t,o,r){}}]);
//# sourceMappingURL=chunk-01973780.14420907.js.map