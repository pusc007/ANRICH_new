(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{440:function(t,e,a){},486:function(t,e,a){"use strict";a(440)},523:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"section d-flex align-center vh-md-70 min-h-md-700",attrs:{id:"section04"}},[a("v-container",{staticClass:"d-flex flex-column align-center justify-start py-0"},[a("div",{staticClass:"title text-h5 text-md-h4 in_animate1 text-no-wrap text-center"},[t._v("產品")]),t._v(" "),a("div",{staticClass:"line my-4 in_animate2"}),t._v(" "),a("div",{staticClass:"itemsG d-flex flex-column align-center"},[a("div",{staticClass:"items row ma-0"},t._l(t.$store.state.productItems,(function(e){return a("div",{key:e.name,staticClass:"item col-12 col-sm-6 col-md-4",attrs:{id:e.name}},[a("div",{staticClass:"box"},[a("v-card",{staticClass:"in_animate3",attrs:{flat:"",outlined:"",to:e.to}},[a("v-img",{attrs:{height:"250",src:e.img.default}}),t._v(" "),a("v-card-title",[t._v(t._s(e.text))]),t._v(" "),a("v-card-text",[t._v(t._s(e.textTag)+" ")])],1)],1)])})),0)])])],1)};i._withStripped=!0;var s={components:{},data:function(){return{}},mounted:function(){var t=new TimelineMax,e=TweenMax.fromTo("#section04 .in_animate1",.3,{scaleX:5,scaleY:0,opacity:0},{scaleX:1,scaleY:1,opacity:1,ease:Sine.easeOut});t.add(e,0);var a=TweenMax.fromTo("#section04 .in_animate2",.3,{scaleX:0,opacity:0},{scaleX:1,opacity:1,ease:Sine.easeOut});t.add(a,.2);var i=TweenMax.staggerFromTo("#section04 .in_animate3",.3,{y:"50",opacity:0},{y:"0",opacity:1,ease:Sine.easeOut},.1);t.add(i,.5);var s=TweenMax.staggerFromTo("#section04 .in_animate4",.4,{y:"50",opacity:0},{y:"0",opacity:1,ease:Back.easeOut},.2);t.add(s,1.4);var n=this.$scrollmagic.scene({triggerElement:"#section04",triggerHook:.75,reverse:!1}).setTween(t);this.$scrollmagic.addScene(n)},methods:{},computed:{}},n=(a(486),a(115)),c=Object(n.a)(s,i,[],!1,null,"d2771db6",null);c.options.__file="src/vue/pages/product/index/section/Section04.vue";e.default=c.exports}}]);