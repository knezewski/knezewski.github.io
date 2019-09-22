(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{320:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return s});var i=r(93);const a=e=>{const t=new FileReader;return new Promise((r,i)=>{try{t.readAsDataURL(e),t.onloadend=(()=>{r(t.result)})}catch(e){throw new Error("Ошибка при чтении файла")}})},s=e=>{return`${i.a.defaults.baseURL}/${e}`}},325:function(e,t){},339:function(e,t,r){},376:function(e,t,r){"use strict";var i=r(339);r.n(i).a},398:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("adding-form",{attrs:{title:e.title,disabled:e.disableForm,buttonsPadding:"0 20% 0 0"},on:{submit:function(t){"add"===e.mode?e.addNewReview():e.editCurrentReview()},cancel:e.closeForm}},[r("div",{staticClass:"reviews__form-content",attrs:{slot:"form-content"},slot:"form-content"},[r("div",{staticClass:"reviews__form-userpic"},[r("label",{staticClass:"reviews__form-avatar-upload",class:{error:e.validation.hasError("review.photo")}},[r("input",{staticClass:"reviews__form-file-input",attrs:{type:"file"},on:{change:e.handlePhotoUpload}}),r("div",{staticClass:"reviews__form-pic"},[r("div",{staticClass:"reviews__form-avatar-empty",class:{filled:e.renderedAvatar.length},style:{backgroundImage:e.userAvatarUrl}})]),r("div",{staticClass:"reviews__form-addphoto"},[e._v("Добавить фото")]),r("div",{staticClass:"reviews__avatar-error"},[r("errors-tooltip",{attrs:{errorText:e.validation.firstError("review.photo")}})],1)])]),r("div",{staticClass:"reviews__form-col"},[r("div",{staticClass:"reviews__form-row"},[r("div",{staticClass:"reviews__form-block"},[r("app-input",{attrs:{title:"Имя автора",errorText:e.validation.firstError("review.author")},model:{value:e.review.author,callback:function(t){e.$set(e.review,"author",t)},expression:"review.author"}})],1),r("div",{staticClass:"reviews__form-block"},[r("app-input",{attrs:{title:"Титул автора",errorText:e.validation.firstError("review.occ")},model:{value:e.review.occ,callback:function(t){e.$set(e.review,"occ",t)},expression:"review.occ"}})],1)]),r("div",{staticClass:"reviews__form-row"},[r("div",{staticClass:"reviews__form-block"},[r("app-input",{attrs:{title:"Отзыв","field-type":"textarea",errorText:e.validation.firstError("review.text")},model:{value:e.review.text,callback:function(t){e.$set(e.review,"text",t)},expression:"review.text"}})],1)])])])])};i._withStripped=!0;var a=r(30),s=r(320),o=r(319),l={mixins:[r(319).mixin],validators:{"review.author":e=>o.Validator.value(e).required("Заполните автора"),"review.occ":e=>o.Validator.value(e).required("Укажите роль автора"),"review.text":e=>o.Validator.value(e).required("Введите текст отзыва"),"review.photo":e=>o.Validator.value(e).required("Вставьте аватар")},components:{appInput:()=>r.e(0).then(r.bind(null,396)),appButton:()=>r.e(4).then(r.bind(null,409)),addingForm:()=>r.e(7).then(r.bind(null,410)),errorsTooltip:()=>r.e(5).then(r.bind(null,406))},data:()=>({renderedAvatar:"",disableForm:!1,review:{id:0,author:"",occ:"",text:"",photo:""}}),props:{title:{type:String,default:"Новый отзыв"},mode:{type:String,default:"add",validator:e=>["add","edit"].includes(e)}},computed:{...Object(a.e)("reviews",{currentReview:e=>e.currentReview}),userAvatarUrl(){return`url(${this.renderedAvatar})`}},watch:{currentReview(e){"edit"===this.mode&&this.fillFormWithCurrentReviewData()}},created(){"edit"===this.mode&&this.fillFormWithCurrentReviewData()},methods:{...Object(a.b)("reviews",["addReview","updateReview"]),...Object(a.b)("tooltips",["showTooltip"]),closeForm(){this.review={},this.$emit("cancel")},async editCurrentReview(){if(!1!==this.$validate()){this.disableForm=!0;try{await this.updateReview(this.review);this.$emit("cancel"),this.showTooltip({type:"success",text:"Работа обновлена"})}catch(e){this.showTooltip({type:"error",text:e.message})}finally{this.disableForm=!1,this.validation.reset()}}},async addNewReview(){if(!1!==await this.$validate()){this.disableForm=!0;try{await this.addReview(this.review);this.clearFormFields(),this.showTooltip({type:"success",text:"Отзыв добавлен"})}catch(e){this.showTooltip({type:"error",text:e.message})}finally{this.disableForm=!1,this.valdation.reset()}}},clearFormFields(){this.review={},this.renderedAvatar=""},fillFormWithCurrentReviewData(){this.review={...this.currentReview},this.renderedAvatar=Object(s.a)(this.currentReview.photo)},async handlePhotoUpload(e){const t=e.target.files[0];this.review.photo=t;try{const e=await Object(s.b)(t);this.renderedAvatar=e}catch(e){this.showTooltip({type:"error",text:"Ошибка во время обработки файла"})}}}},n=(r(376),r(92)),d=Object(n.a)(l,i,[],!1,null,"46b6a48f",null);d.options.__file="src/admin/components/reviews-add.vue";t.default=d.exports}}]);