(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{329:function(t,s,e){},366:function(t,s,e){"use strict";var n=e(329);e.n(n).a},400:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login"},[e("div",{staticClass:"login__content"},[e("form",{staticClass:"login__form",on:{submit:function(s){return s.preventDefault(),t.login(s)}}},[e("div",{staticClass:"login__form-title"},[t._v("Авторизация")]),e("div",{staticClass:"login__row"},[e("app-input",{attrs:{title:"Логин",icon:"user"},model:{value:t.user.name,callback:function(s){t.$set(t.user,"name",s)},expression:"user.name"}})],1),e("div",{staticClass:"login__row"},[e("app-input",{attrs:{title:"Пароль",icon:"key",type:"password"},model:{value:t.user.password,callback:function(s){t.$set(t.user,"password",s)},expression:"user.password"}})],1),t._m(0)])])])};n._withStripped=!0;var a=e(93),i={components:{appInput:()=>e.e(0).then(e.bind(null,396))},data:()=>({user:{name:"ls-admin",password:"ls-admin"}}),methods:{async login(){try{const{data:{token:t}}=await a.a.post("/login",this.user);localStorage.setItem("token",t),a.a.defaults.headers.Authorization=`Bearer ${t}`,this.$router.replace("/")}catch(t){}}}},o=(e(366),e(92)),r=Object(o.a)(i,n,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"login__btn"},[s("button",{staticClass:"login__send-data",attrs:{type:"submit"}},[this._v("Отправить")])])}],!1,null,null,null);r.options.__file="src/admin/components/pages/login.vue";s.default=r.exports}}]);