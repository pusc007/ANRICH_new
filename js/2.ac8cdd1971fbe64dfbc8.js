(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{399:function(t,e,n){},400:function(t,e,n){},401:function(t,e,n){},402:function(t,e,n){},403:function(t,e,n){"use strict";n(399)},404:function(t,e,n){"use strict";n(400)},405:function(t,e,n){"use strict";n(401)},406:function(t,e,n){"use strict";n(402)},407:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var s=n(408),i=n.n(s);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var r=function(t,e){var n=0,s=t.length,i=t.map((function(t){return t.src.then((function(t){return n++,e(n,s),Promise.resolve(t)}))}));return Promise.all(i).then((function(e){return e.map((function(e,n){return c(c({},t[n]),{},{component:e.default})}))}))}},408:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},409:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"app_bar",attrs:{app:"",elevation:"3","elevate-on-scroll":""}},[n("v-container",{staticClass:"pa-0 fill-height"},[n("div",{staticClass:"d-flex flex-md-column align-center"},[n("img",{staticClass:"logo",attrs:{src:t.logo}})]),t._v(" "),n("v-spacer"),t._v(" "),n("Menu",{staticClass:"d-none d-md-flex align-self-end"}),t._v(" "),n("v-app-bar-nav-icon",{staticClass:"d-flex d-md-none",on:{click:function(e){t.$refs.sidebar.isOpen=!t.$refs.sidebar.isOpen}}})],1)],1),t._v(" "),n("Sidebar",{ref:"sidebar",scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{staticClass:"d-flex pa-4"},[n("v-spacer"),t._v(" "),n("v-icon",{on:{click:function(e){t.$refs.sidebar.isOpen=!1}}},[t._v("\n          mdi-close\n        ")])],1),t._v(" "),n("Menu",{staticClass:"sidebarMenu d-flex flex-column"})]},proxy:!0}])})],1)};s._withStripped=!0;var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"pageItem px-2",attrs:{depressed:"",text:"",to:{name:"Home"},"active-class":"active"},on:{click:function(e){return t.pageItem_click("Home")}}},[t._v("首頁")]),t._v(" "),n("v-btn",{staticClass:"pageItem px-2",attrs:{depressed:"",text:"",to:{name:"Company"},"active-class":"active"},on:{click:function(e){return t.pageItem_click("Company")}}},[t._v("公司與團隊")]),t._v(" "),n("v-btn",{staticClass:"pageItem px-2",attrs:{depressed:"",text:"",to:{name:"Business"},"active-class":"active"},on:{click:function(e){return t.pageItem_click("Business")}}},[t._v("營業範疇")]),t._v(" "),n("v-btn",{staticClass:"pageItem px-2",attrs:{depressed:"",text:"",to:{name:"Product"},"active-class":"active"},on:{click:function(e){return t.pageItem_click("Product")}}},[t._v("\n    產品技術與服務\n  ")]),t._v(" "),n("v-btn",{staticClass:"pageItem px-2",attrs:{depressed:"",text:"",to:{name:"Case"},"active-class":"active"}},[t._v("成功案例分享")])],1)};i._withStripped=!0;var a={components:{},data:function(){return{}},mounted:function(){},methods:{pageItem_click:function(t){this.$route.name===t&&window.scroll({top:0,left:0,behavior:"smooth"})}},computed:{}},c=(n(403),n(115)),r=Object(c.a)(a,i,[],!1,null,null,null);r.options.__file="src/vue/pages/components/Menu.vue";var o=r.exports,l=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{staticClass:"sidebar",attrs:{right:"",app:"",temporary:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._t("content")],2)};l._withStripped=!0;var u={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var t=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){t.isOpen&&t.$vuetify.breakpoint.mdAndUp&&(t.isOpen=!1)}),300)}},computed:{}},v=Object(c.a)(u,l,[],!1,null,"2e4a0ea0",null);v.options.__file="src/vue/pages/components/Sidebar.vue";var p=v.exports,d=n.p+"img/logo.c9e7ef77a476a9cc65b071ae0f8a6b1f.png",f={components:{Menu:o,Sidebar:p},data:function(){return{logo:d}},mounted:function(){},methods:{},computed:{}},m=(n(404),n(405),Object(c.a)(f,s,[],!1,null,"023c3669",null));m.options.__file="src/vue/pages/components/Header.vue";e.a=m.exports},410:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer py-4"},[n("v-container",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-4 item px-2 py-0"},[n("div",{staticClass:"textTitle text-h6 bold tri"},[t._v("聯絡我們")]),t._v(" "),n("div",{staticClass:"textContent"},[n("ul",{staticClass:"contactInfo d-inline-flex flex-column ma-0 pa-0"},[n("li",{staticClass:"item"},[n("div",{staticClass:"title text-subtitle-2"},[n("v-icon",[t._v("mdi-map-marker-radius")]),t._v(" "),n("span",[t._v("地址")])],1),t._v(" "),n("a",{staticClass:"pl-5 text-caption",attrs:{href:"https://www.google.com.tw/maps?q=高雄市前鎮區復興四路12號2樓之9",target:"_blank"}},[t._v("80661 高雄市前鎮區復興四路12號2樓之9")])]),t._v(" "),n("li",{staticClass:"item"},[n("div",{staticClass:"title text-subtitle-2"},[n("v-icon",[t._v("mdi-phone-check")]),t._v(" "),n("span",[t._v("電話")])],1),t._v(" "),n("a",{staticClass:"pl-5 text-caption",attrs:{href:"tel:+886-7-3389791"}},[t._v("(07)338-9791")]),t._v(" "),n("a",{staticClass:"pl-5 mt-2 text-caption",attrs:{href:"tel:+886-0911662616"}},[t._v("0911-662-616")])])])])]),t._v(" "),n("div",{staticClass:"col-12 col-sm-4 item px-2 py-0"},[n("div",{staticClass:"textTitle text-h5 bold d-none d-sm-block"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"textContent"},[n("ul",{staticClass:"contactInfo d-inline-flex flex-column ma-0 pa-0"},[n("li",{staticClass:"item"},[n("div",{staticClass:"title text-subtitle-2"},[n("v-icon",[t._v("mdi-fax")]),t._v(" "),n("span",[t._v("傳真")])],1),t._v(" "),n("a",{staticClass:"pl-5 text-caption",attrs:{href:"tel:+886-7-3312156"}},[t._v("(07)331-2156")])]),t._v(" "),n("li",{staticClass:"item"},[n("div",{staticClass:"title text-subtitle-2"},[n("v-icon",[t._v("mdi-email-receive")]),t._v(" "),n("span",[t._v("信箱")])],1),t._v(" "),n("a",{staticClass:"pl-5 text-caption",attrs:{href:"mailto:mengyu@n-way.net"}},[t._v("mengyu@n-way.net")]),t._v(" "),n("a",{staticClass:"pl-5 text-caption",attrs:{href:"mailto:butter@n-way.net"}},[t._v("butter@n-way.net")])])])])]),t._v(" "),n("div",{staticClass:"col-12 col-sm-4 item pa-2"},[n("div",{staticClass:"textTitle text-h6 bold tri"},[t._v("合作夥伴")]),t._v(" "),n("div",{staticClass:"textContent"})])])])],1)};s._withStripped=!0;var i={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},a=(n(406),n(115)),c=Object(a.a)(i,s,[],!1,null,"3dec5b12",null);c.options.__file="src/vue/pages/components/Footer.vue";e.a=c.exports},413:function(t,e,n){},439:function(t,e,n){"use strict";n(413)},469:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"content"},[n("Header"),t._v(" "),n("v-main",{staticClass:"main"},[n("div",{staticClass:"titleBar"},[n("v-container",{staticClass:"d-flex justify-center"},[n("div",{staticClass:"word"},[t._v("營業範疇")])])],1),t._v(" "),t.finished?[n(t.Section01,{tag:"component"}),t._v(" "),n("div",{staticClass:"barLine barLine-60 barLine-sm-80 barLine-md-100 barLine-lg-140 inlayTop",attrs:{id:"barLine_01_02"}}),t._v(" "),n(t.Section02,{tag:"component"}),t._v(" "),n("div",{staticClass:"barLine barLine-60 barLine-sm-80 barLine-md-100 barLine-lg-140",attrs:{id:"barLine_02_03"}}),t._v(" "),n(t.Section03,{tag:"component"}),t._v(" "),n("div",{staticClass:"barLine barLine-60 barLine-sm-80 barLine-md-100 barLine-lg-140",attrs:{id:"barLine_03_end"}})]:[n("div",{staticClass:"vh-70 d-flex align-center justify-center"},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[t._v(t._s(Math.round(100*t.progress))+"%")])],1)]],2),t._v(" "),n("Footer")],1)};s._withStripped=!0;var i=n(409),a=n(410),c=n(407),r={components:{Header:i.a,Footer:a.a},data:function(){return{finished:!1,progress:0,Section01:null,Section02:null,Section03:null}},mounted:function(){this.loadComponents()},methods:{loadComponents:function(){var t=this;Object(c.a)([{name:"Section01",src:n.e(8).then(n.bind(null,483))},{name:"Section02",src:n.e(9).then(n.bind(null,484))},{name:"Section03",src:n.e(10).then(n.bind(null,485))}],(function(e,n){t.progress=e/n})).then((function(e){e.forEach((function(e){t[e.name]=e.component,t.finished=!0}))}))}},computed:{}},o=(n(439),n(115)),l=Object(o.a)(r,s,[],!1,null,"f326e1e6",null);l.options.__file="src/vue/pages/Business.vue";e.default=l.exports}}]);