(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe524208"],{"1cb2":function(t,e,s){"use strict";var a=s("43fc"),i=s.n(a);i.a},"317d":function(t,e,s){"use strict";var a=s("49b1"),i=s.n(a);i.a},"43fc":function(t,e,s){},"49b1":function(t,e,s){},"8f44":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",{class:{"stream-card":!0,selected:t.selected},attrs:{"md-with-hover":""}},[s("md-card-header",{on:{click:function(e){t.selected=!t.selected}}},[s("md-card-header-text",[s("router-link",{attrs:{to:"/projects/"+t.project._id}},[s("div",{staticClass:"md-title"},[t._v(t._s(t.project.name))]),s("div",{staticClass:"md-subhead md-small-hide",attrs:{stlye:"user-select:all;"}},[t._v(t._s(t.project._id))]),s("div",{staticClass:"md-caption md-small-hide",domProps:{innerHTML:t._s(t.compiledDescription)}})])],1)],1),s("md-card-content",[s("div",{staticClass:"md-layout md-alignment-center-center"},[s("div",{staticClass:"md-layout-item md-size-10"},[s("md-icon",[t._v("access_time")])],1),s("div",{staticClass:"md-layout-item md-caption"},[s("strong",[s("timeago",{attrs:{datetime:t.project.updatedAt}})],1)]),s("div",{staticClass:"md-layout-item md-size-10"},[s("md-icon",[t._v("create")])],1),s("div",{staticClass:"md-layout-item md-caption"},[t._v("\n        "+t._s(t.createdAt)+"\n      ")]),s("div",{staticClass:"md-layout-item md-size-100",staticStyle:{padding:"10px 0px"}},[s("div",{staticClass:"md-layout md-alignment-center-left"},[s("div",{staticClass:"md-layout-item md-size-10"},[s("md-icon",[t._v("person")])],1),s("div",{staticClass:"md-layout-item xxxmd-size-10 md-caption"},[s("strong",[t._v(t._s(t.projectTeamMembers.length))]),t._v(" team members.\n          ")]),s("div",{staticClass:"md-layout-item md-size-10"},[s("md-icon",[t._v("import_export")])],1),s("div",{staticClass:"md-layout-item xxxmd-size-25 md-caption"},[s("strong",[t._v(t._s(t.project.streams.length))]),t._v(" streams.\n          ")])])]),s("div",{staticClass:"md-layout-item md-size-100 md-small-hide"},[s("md-chips",{staticClass:"stream-chips",attrs:{"md-placeholder":"add tags"},on:{input:t.updateTags},model:{value:t.project.tags,callback:function(e){t.$set(t.project,"tags",e)},expression:"project.tags"}})],1)])]),s("md-card-actions",[s("md-button",{directives:[{name:"show",rawName:"v-show",value:t.isOwner,expression:"isOwner"}],staticClass:"md-accent",nativeOn:{click:function(e){return t.archiveProject(e)}}},[t._v("Archive")]),s("md-button",{staticClass:"md-raised-xxx",attrs:{to:"/projects/"+t.project._id}},[t._v("More...")])],1)],1)},i=[],c=s("f7fe"),r=s.n(c),n=(s("c36e"),s("13bb")),d=s.n(n),o=s("0e54"),m=s.n(o),l={name:"ProjectCard",props:{resource:Object},watch:{selected:function(){this.$emit("selected",this.project)}},computed:{project:function(){return this.resource},projectTeamMembers:function(){return d()(this.project.canRead,this.project.canWrite)},createdAt:function(){var t=new Date(this.project.createdAt);return t.toLocaleString("en",{year:"numeric",month:"long",day:"numeric"})},compiledDescription:function(){return m()(this.project.description.substring(0,400)+" ...",{sanitize:!0})},canEdit:function(){return!!this.isOwner||-1!==this.project.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.project.owner===this.$store.state.user._id}},data:function(){return{selected:!1}},methods:{archiveProject:function(){this.$store.dispatch("updateProject",{_id:this.project._id,deleted:!0})},updateTags:r()(function(t){this.$store.dispatch("updateProject",{_id:this.project._id,tags:this.project.tags})},1e3)},mounted:function(){var t=this;bus.$on("unselect-all",function(){t.selected=!1})}},u=l,p=(s("1cb2"),s("2877")),h=Object(p["a"])(u,a,i,!1,null,"d1eef9b4",null);h.options.__file="ProjectCard.vue";e["a"]=h.exports},acca:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0===t.projects.length?s("md-empty-state",{attrs:{"md-icon":"business","md-label":"","md-description":"By creating a project, you'll be able to group streams together and share them with a team."}},[s("md-button",{staticClass:"md-primary md-raised",nativeOn:{click:function(e){return t.createProject(e)}}},[t._v("Create your first project!")])],1):s("div",{staticClass:"md-layout"},[s("md-card",{staticClass:"md-elevation-0 md-layout-item md-size-100"},[s("md-card-content",[s("h1",{staticClass:"md-display-2"},[t._v("Projects")]),s("p",[t._v("Projects allow you to group streams together with a team of users.")])])],1),s("md-card",{staticClass:"md-primary-xx main-toolbar md-elevation-3"},[s("md-card-content",{staticClass:"md-layout md-alignment-center-space-between"},[s("div",{staticClass:"md-layout-item md-size-95 md-small-size-70"},[s("md-field",{attrs:{"md-clearable":""}},[s("md-icon",[t._v("search")]),s("label",[t._v("search by name")]),s("md-input",{attrs:{spellcheck:"false"},on:{input:function(t){}}})],1)],1),s("div",{staticClass:"md-layout-item md-size-5 md-small-size-30 text-right"},[s("md-button",{staticClass:"md-icon-button md-raised md-primary",nativeOn:{click:function(e){return t.createProject(e)}}},[s("md-icon",[t._v("add")])],1)],1)])],1),t._l(t.projects,function(t){return s("div",{staticClass:"md-layout-item md-small-size-100 md-medium-size-50 md-large-size-50 md-xlarge-size-33"},[s("project-card",{attrs:{resource:t}})],1)})],2)],1)},i=[],c=(s("cadf"),s("551c"),s("097d"),s("8f44")),r={name:"ProjectsView",components:{ProjectCard:c["a"]},computed:{projects:function(){return this.$store.state.projects.filter(function(t){return!1===t.deleted})}},data:function(){return{}},methods:{createProject:function(){var t=this;this.$store.dispatch("createProject",{name:"A brand new speckle project"}).then(function(e){t.$router.push("/projects/".concat(e._id))})}},created:function(){}},n=r,d=(s("317d"),s("2877")),o=Object(d["a"])(n,a,i,!1,null,"0e002628",null);o.options.__file="Projects.vue";e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-fe524208.e8f53c89.js.map