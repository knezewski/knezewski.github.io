(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{327:function(t,o,s){},364:function(t,o,s){"use strict";var e=s(327);s.n(e).a},389:function(t,o,s){"use strict";s.r(o);var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"works-section"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"page-title"},[t._v(t._s(t.pageTitle))])]),s("div",{staticClass:"works-container"},[s("div",{staticClass:"container container--mobile-wide"},[t.showForm?s("add-new-work-form",{attrs:{mode:t.mode},on:{closeForm:function(o){t.showForm=!1}}}):t._e(),s("ul",{staticClass:"works"},[s("li",{staticClass:"works__item"},[s("add-new-button",{on:{click:t.openAddingForm}})],1),t._l(t.works,function(o){return s("li",{staticClass:"works__item"},[s("works-item",{attrs:{work:o},on:{updateWork:t.updateWork}})],1)})],2)],1)])])};e._withStripped=!0;var i=s(30),r={props:{pageTitle:{type:String,default:""}},components:{addNewButton:()=>s.e(6).then(s.bind(null,404)),addNewWorkForm:()=>Promise.all([s.e(3),s.e(13)]).then(s.bind(null,403)),worksItem:()=>s.e(15).then(s.bind(null,401))},data:()=>({showForm:!1,mode:"add"}),computed:{...Object(i.e)("works",{works:t=>t.works})},methods:{...Object(i.b)("works",["fetchWorks"]),...Object(i.b)("tooltips",["showTooltip"]),openAddingForm(){this.showForm=!0,this.mode="add"},async collectWorks(){try{await this.fetchWorks()}catch(t){this.showTooltip({type:"error",text:"Ошибка при загрузке работ"})}},updateWork(){this.mode="edit",this.showForm=!0}},created(){this.collectWorks()}},n=(s(364),s(92)),a=Object(n.a)(r,e,[],!1,null,"0c1d3217",null);a.options.__file="src/admin/components/pages/works.vue";o.default=a.exports}}]);