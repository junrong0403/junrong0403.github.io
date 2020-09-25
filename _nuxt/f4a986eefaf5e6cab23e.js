(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{164:function(t,e,n){"use strict";var c=n(20),component=Object(c.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"border-t-2 border-red-300 mx-4"})}),[],!1,null,null,null);e.a=component.exports},165:function(t,e,n){t.exports=n.p+"img/05b50b5.png"},166:function(t,e,n){t.exports=n.p+"img/1cdd6b7.png"},167:function(t,e,n){t.exports=n.p+"img/32ce472.png"},168:function(t,e,n){t.exports=n.p+"img/091c090.png"},169:function(t,e,n){t.exports=n.p+"img/aaa7212.png"},170:function(t,e,n){var content=n(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("655b24a5",content,!0,{sourceMap:!1})},224:function(t,e,n){"use strict";var c=n(170);n.n(c).a},225:function(t,e,n){(e=n(21)(!1)).push([t.i,".img-btn-text[data-v-4413d270]{padding:1rem;color:#e53e3e;font-weight:500;font-size:.75rem}@media (min-width:768px){.img-btn-text[data-v-4413d270]{font-size:1rem}}",""]),t.exports=e},238:function(t,e,n){"use strict";n.r(e);var c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-6 my-6 text-gray-900 text-sm md:text-base"},[t._v("\b\n                  負責處理各式Restful API開發，\b讓APP可以處理複雜的動作或是需要和資料庫存取的狀況或使用排程定時觸發\b需定時處理的操作等。\b\b\b"),n("br"),t._v(" "),n("ul",{staticClass:"p-3 text-base font-medium"},[n("li",[t._v("1. Firebase Cloud Messaging個別推播")]),t._v(" "),n("li",[t._v("2. 股票webstock連接")]),t._v(" "),n("li",[t._v("3. Sign in with Apple(JWT)")]),t._v(" "),n("li",[t._v("4. 財政部發票條碼相關")])]),t._v("\n                   ...等Restful API之開發\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex px-4"},[e("div",{staticClass:"w-1/3 p-2"},[e("img",{staticClass:"shadow-md",attrs:{src:n(165),alt:""}})]),this._v(" "),e("div",{staticClass:"w-1/3 p-2"},[e("img",{staticClass:"shadow-md",attrs:{src:n(166),alt:""}})]),this._v(" "),e("div",{staticClass:"w-1/3 p-2"},[e("img",{staticClass:"shadow-md",attrs:{src:n(167),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex px-4"},[e("div",{staticClass:"w-1/2 p-2"},[e("img",{staticClass:"shadow-md",attrs:{src:n(168),alt:""}})]),this._v(" "),e("div",{staticClass:"w-1/2 p-2"},[e("img",{staticClass:"shadow-md",attrs:{src:n(169),alt:""}})])])}],r={components:{Myhr:n(164).a},methods:{goBack:function(){this.$router.push({path:"/"})}}},l=(n(224),n(20)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-screen-lg  mx-auto"},[n("div",{staticClass:"bg-red-400 h-3 sticky"}),t._v(" "),n("div",{staticClass:"items-center mb-6"},[n("span",{staticClass:"px-4 py-1 text-2xl font-medium text-white back bg-red-400 cursor-pointer",on:{click:function(e){return t.goBack()}}},[n("fa",{staticClass:"pr-1",attrs:{icon:["fas","chevron-left"]}}),t._v(" 返回\n        ")],1),t._v(" "),n("h1",{staticClass:"m-4 text-3xl font-medium text-gray-900"},[n("fa",{staticClass:"pr-1",attrs:{icon:["fas","cogs"]}}),t._v("\n                Restful API\n            ")],1),t._v(" "),n("myhr"),t._v(" "),t._m(0),t._v(" "),n("myhr"),t._v(" "),n("h1",{staticClass:"m-4 text-2xl font-medium"},[t._v("\n                1. Firebase Cloud Messaging個別推播\n            ")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"m-6 text-gray-800 text-sm md:text-base"},[t._v("\b\n                  透過分別處理各APP各裝置的FCM_token將其開發成API供APP上傳到DB存下，後端封裝成model觸發，處理各式各樣的操作，\n                像\b存錢通知、自訂股票通知、口罩地圖通知、訂單完成通知...等。\n            ")]),t._v(" "),n("myhr"),t._v(" "),n("h1",{staticClass:"m-4 text-2xl font-medium"},[t._v("\n                2. 股票webstock連接\n            ")]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"m-6 text-gray-800 text-sm md:text-base"},[t._v("\b\n                  使用node-red圖形化操作，以stomp.js操作webstock供app連接接收股票即時價格，並利用FCM立即推播通知使用者即時的股價。\n            ")]),t._v(" "),n("myhr"),t._v(" "),n("h1",{staticClass:"m-4 text-2xl font-medium"},[t._v("\n                3. Sign in with Apple\n            ")]),t._v(" "),n("div",{staticClass:"m-6 text-gray-800 text-sm md:text-base"},[t._v("\b\n                  \b串接Apple登入，這次採用JWT的方式，以PHP\b\b接收redirect的code，再與POST到AppleAPI確認取得本次授權的email，\n                開發過程中由於PHP沒有完整的套件或是\b加密的格式需管換的問題(.p8 .pem)\b、JWK轉換成公鑰、Base64(url safe)等處理上花了許多的時間\b，做後也成功完成串接。\n            ")]),t._v(" "),n("myhr"),t._v(" "),n("h1",{staticClass:"m-4 text-2xl font-medium"},[t._v("\n                4. 財政部發票條碼相關\n            ")]),t._v(" "),n("div",{staticClass:"m-6 text-gray-800 text-sm md:text-base"},[t._v("\b\n                  開發以PHP模擬財政部登入、註冊API嵌入APP，讓使用者可直接在APP裡完成操作。發票操作上之接利用財政部API，\n                可自動排程同步發票資訊到DB中，並利用FCM立即推播通知使用者。\n            ")]),t._v(" "),n("myhr"),t._v(" "),n("div",{staticClass:"h-6"})],1)])}),c,!1,null,"4413d270",null);e.default=component.exports}}]);