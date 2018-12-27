(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51713ce4"],{"2f21":function(t,e,s){"use strict";var a=s("79e5");t.exports=function(t,e){return!!t&&a(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,s){"use strict";var a=s("5ca1"),i=s("d8e8"),n=s("4bf8"),r=s("79e5"),c=[].sort,d=[1,2,3];a(a.P+a.F*(r(function(){d.sort(void 0)})||!r(function(){d.sort(null)})||!s("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(n(this)):c.call(n(this),i(t))}})},6882:function(t,e,s){},"6e14":function(t,e,s){"use strict";var a=s("6882"),i=s.n(a);i.a},a344:function(t,e,s){},cf8c:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0===t.streams.length?s("md-empty-state",{attrs:{"md-icon":"import_export","md-label":"","md-description":"You don't have any streams yet."}}):s("div",{staticClass:"md-layout"},[s("md-card",{staticClass:"md-elevation-0 md-layout-item md-size-100"},[s("md-card-content",[s("h1",{staticClass:"md-display-2"},[t._v("Streams")]),s("p",[t._v("Streams are the place where your project data (objects and other information) is kept.")])])],1),s("md-card",{staticClass:"md-primary-xx main-toolbar md-elevation-3"},[s("md-card-content",{staticClass:"md-layout md-alignment-center-space-between"},[s("div",{staticClass:"md-layout-item md-size-95 md-small-size-70"},[s("md-field",{attrs:{"md-clearable":""}},[s("md-icon",[t._v("search")]),s("label",[t._v("filter query")]),s("md-input",{attrs:{spellcheck:"false"},on:{input:t.updateSearch}})],1)],1),s("div",{staticClass:"md-layout-item md-size-5 md-small-size-30 text-right"},[s("md-button",{staticClass:"md-icon-button md-raised md-primary",nativeOn:{click:function(e){return t.createStream(e)}}},[s("md-icon",[t._v("add")])],1)],1),t.selectedStreams.length>0?s("div",{staticClass:"md-layout-item md-size-100",staticStyle:{"margin-top":"10px"}},[s("md-button",{staticClass:"md-raised md-dense md-primary",nativeOn:{click:function(e){return t.clearSelection(e)}}},[t._v("clear selection ("+t._s(t.selectedStreams.length)+")")]),s("md-button",{staticClass:"md-raised-xx md-dense md-accent",nativeOn:{click:function(e){return t.deleteStreams(e)}}},[t._v("delete")]),s("md-button",{staticClass:"md-raised md-dense",nativeOn:{click:function(e){return t.togglePermissions(e)}}},[t._v("Make "+t._s(t.defaultPermission))]),s("md-button",{staticClass:"md-raised md-dense",nativeOn:{click:function(e){return t.createProjectFromSelection(e)}}},[t._v("Create Project")])],1):t._e()])],1),t._l(t.paginatedStreams,function(e){return s("div",{key:e._id,staticClass:"md-layout-item md-small-size-100 md-medium-size-50 md-large-size-50 md-xlarge-size-33"},[s("stream-card",{attrs:{stream:e},on:{selected:t.selectThis,deleted:t.clearSelection}})],1)}),s("div",{staticClass:"md-layout-item md-size-100"},[s("md-card",{staticClass:"md-elevation-0"},[s("md-button",{staticClass:"md-raised btn-no-margin md-primary",attrs:{disabled:t.paginatedStreams.length===t.filteredStreams.length},nativeOn:{click:function(e){t.endIndex+=12}}},[t._v("\n        Show More ("+t._s(t.paginatedStreams.length)+" / "+t._s(t.filteredStreams.length)+")\n      ")])],1)],1)],2)},i=[],n=(s("20d6"),s("6762"),s("2fdb"),s("28a5"),s("ac6a"),s("55dd"),s("cadf"),s("551c"),s("097d"),s("f7fe")),r=s.n(n),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",{class:{"stream-card":!0,selected:t.selected},attrs:{"md-with-hover":""}},[s("md-card-header",{on:{click:function(e){t.selected=!t.selected}}},[s("md-card-header-text",[s("router-link",{attrs:{to:"/streams/"+t.stream.streamId}},[s("div",{staticClass:"md-title"},[t._v(t._s(t.stream.name))]),s("div",{staticClass:"md-subhead",attrs:{stlye:"user-select:all;"}},[t._v(t._s(t.stream.streamId))]),s("div",{staticClass:"md-caption md-small-hide",domProps:{innerHTML:t._s(t.compiledDescription)}})])],1),s("md-checkbox",{attrs:{value:"1"},nativeOn:{click:function(e){t.$emit("selected",t.stream)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),s("md-card-content",[s("div",{staticClass:"md-layout md-alignment-center-center"},[s("div",{staticClass:"md-layout-item md-size-10"},[s("md-icon",[t._v("access_time")])],1),s("div",{staticClass:"md-layout-item md-caption"},[s("strong",[s("timeago",{attrs:{datetime:t.stream.updatedAt}})],1)]),s("div",{staticClass:"md-layout-item md-size-10"},[s("md-icon",[t._v("create")])],1),s("div",{staticClass:"md-layout-item md-caption"},[t._v("\n        "+t._s(t.createdAt)+"\n      ")]),s("div",{staticClass:"md-layout-item md-size-100 md-small-hide"},[s("md-chips",{staticClass:"stream-chips",attrs:{"md-placeholder":"add tags"},on:{input:t.updateTags},model:{value:t.stream.tags,callback:function(e){t.$set(t.stream,"tags",e)},expression:"stream.tags"}})],1)])]),s("md-card-actions",[s("md-button",{directives:[{name:"show",rawName:"v-show",value:t.isOwner,expression:"isOwner"}],staticClass:"md-accent",nativeOn:{click:function(e){return t.deleteStream(e)}}},[t._v("Archive")]),s("md-button",{staticClass:"md-raised-xxx",attrs:{to:"/streams/"+t.stream.streamId}},[t._v("Details")])],1)],1)},d=[],o=s("0e54"),l=s.n(o),m={name:"StreamCard",props:{stream:Object},watch:{selected:function(){this.$emit("selected",this.stream)}},computed:{createdAt:function(){var t=new Date(this.stream.createdAt);return t.toLocaleString("en",{year:"numeric",month:"long",day:"numeric"})},compiledDescription:function(){return l()(this.stream.description.substring(0,220)+" ...",{sanitize:!0})},canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id}},data:function(){return{selected:!1}},methods:{deleteStream:function(){this.$store.dispatch("updateStream",{streamId:this.stream.streamId,deleted:!0}),this.$emit("deleted")},updateTags:r()(function(t){this.$store.dispatch("updateStream",{streamId:this.stream.streamId,tags:this.stream.tags})},1e3)},mounted:function(){var t=this;bus.$on("unselect-all",function(){t.selected=!1})}},u=m,f=(s("6e14"),s("2877")),h=Object(f["a"])(u,c,d,!1,null,"bf8ec61a",null);h.options.__file="StreamCard.vue";var p=h.exports,v={name:"StreamsView",components:{StreamCard:p},computed:{streams:function(){return this.$store.state.streams.filter(function(t){return null==t.parent&&!1===t.deleted}).sort(function(t,e){return new Date(e.updatedAt)-new Date(t.updatedAt)})},filteredStreams:function(){return this.$store.getters.filteredStreams(this.filters)},paginatedStreams:function(){return this.filteredStreams.slice(this.startIndex,this.endIndex)}},data:function(){return{startIndex:0,itemsPerPage:12,endIndex:12,selectedStreams:[],searchfilter:"",filters:[],defaultPermission:"private"}},watch:{selectedStreams:function(){var t=0,e=0;this.selectedStreams.forEach(function(s){s.private?t++:e++}),this.defaultPermission=t>e?"public":"private"}},methods:{createStream:function(){var t=this;this.$store.dispatch("createStream",{name:"A New Speckle Stream",onlineEditable:!0}).then(function(e){t.$router.push("/streams/".concat(e.streamId))}).catch(function(t){console.error(t)})},createProjectFromSelection:function(){var t=this;this.$store.dispatch("createProject",{name:"Speckle Project",streams:this.selectedStreams.map(function(t){return t.streamId})}).then(function(e){t.clearSelection(),t.$router.push("/projects/".concat(e._id))})},togglePermissions:function(){var t=this;this.selectedStreams.forEach(function(e){t.$store.dispatch("updateStream",{streamId:e.streamId,private:"private"===t.defaultPermission})}),this.defaultPermission="private"===this.defaultPermission?"public":"private"},deleteStreams:function(){var t=this;this.selectedStreams.forEach(function(e){t.$store.dispatch("updateStream",{streamId:e.streamId,deleted:!0})}),this.clearSelection()},updateSearch:r()(function(t){this.searchfilter=t;try{var e=this.searchfilter.split(" ").map(function(t){return t.includes(":")?{key:t.split(":")[0],value:t.split(":")[1]}:t.includes("public")||t.includes("private")||t.includes("mine")||t.includes("shared")?{key:t,value:null}:{key:"name",value:t}});this.filters=e}catch(s){this.filters=[{key:"name",value:t}]}},1e3),selectThis:function(t){var e=this.selectedStreams.findIndex(function(e){return e.streamId===t.streamId});-1===e?this.selectedStreams.unshift(t):this.selectedStreams.splice(e,1)},clearSelection:function(){this.defaultPermission="private",bus.$emit("unselect-all")},checkSelection:function(){this.selectedStreams=this.selectedStreams.filter(function(t){return!t.deleted})}},created:function(){}},S=v,b=(s("d0cc"),Object(f["a"])(S,a,i,!1,null,"366daa5e",null));b.options.__file="Streams.vue";e["default"]=b.exports},d0cc:function(t,e,s){"use strict";var a=s("a344"),i=s.n(a);i.a},f7fe:function(t,e,s){(function(e){var s="Expected a function",a=NaN,i="[object Symbol]",n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,o=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,u=l||m||Function("return this")(),f=Object.prototype,h=f.toString,p=Math.max,v=Math.min,S=function(){return u.Date.now()};function b(t,e,a){var i,n,r,c,d,o,l=0,m=!1,u=!1,f=!0;if("function"!=typeof t)throw new TypeError(s);function h(e){var s=i,a=n;return i=n=void 0,l=e,c=t.apply(a,s),c}function b(t){return l=t,d=setTimeout(x,e),m?h(t):c}function g(t){var s=t-o,a=t-l,i=e-s;return u?v(i,r-a):i}function _(t){var s=t-o,a=t-l;return void 0===o||s>=e||s<0||u&&a>=r}function x(){var t=S();if(_(t))return w(t);d=setTimeout(x,g(t))}function w(t){return d=void 0,f&&i?h(t):(i=n=void 0,c)}function k(){void 0!==d&&clearTimeout(d),l=0,i=o=n=d=void 0}function $(){return void 0===d?c:w(S())}function O(){var t=S(),s=_(t);if(i=arguments,n=this,o=t,s){if(void 0===d)return b(o);if(u)return d=setTimeout(x,e),h(o)}return void 0===d&&(d=setTimeout(x,e)),c}return e=C(e)||0,y(a)&&(m=!!a.leading,u="maxWait"in a,r=u?p(C(a.maxWait)||0,e):r,f="trailing"in a?!!a.trailing:f),O.cancel=k,O.flush=$,O}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){return!!t&&"object"==typeof t}function _(t){return"symbol"==typeof t||g(t)&&h.call(t)==i}function C(t){if("number"==typeof t)return t;if(_(t))return a;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var s=c.test(t);return s||d.test(t)?o(t.slice(2),s?2:8):r.test(t)?a:+t}t.exports=b}).call(this,s("c8ba"))}}]);
//# sourceMappingURL=chunk-51713ce4.bf944700.js.map