(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(t,e,a){"use strict";a.r(e);var n=a(8),r=a.n(n),i=a(0),c=a.n(i),o=a(162),s=a(165),l=(a(56),a(172)),u=a.n(l),d=a(160),m=a(183);function p(t){var e=t.tags,a=u()(t,["tags"]);return e&&0!=e.length?c.a.createElement("div",a,c.a.createElement("div",{className:"col"},e.map(function(t){return c.a.createElement(d.a,{key:t,to:"/tags/"+m.kebabCase(t)+"/",className:"badge badge-primary"},t)}))):null}a.d(e,"pageQuery",function(){return f});var h=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title;return c.a.createElement(o.a,{location:this.props.location,title:e},c.a.createElement(s.a,{title:t.frontmatter.title,description:t.excerpt}),c.a.createElement("div",{className:"container stackcheat-container my-5"},c.a.createElement("div",{className:"row mb-2"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"stackcheat--title"},t.frontmatter.title),c.a.createElement("h4",{className:"stackcheat--sub-title text-secondary font-weight-light"},t.frontmatter.intro))),c.a.createElement(p,{className:"row stackcheat-tags",tags:t.frontmatter.tags}),c.a.createElement("div",{className:"row stackcheat-body pt-4"},c.a.createElement("div",{className:"col",dangerouslySetInnerHTML:{__html:t.html}}))))},e}(c.a.Component),f=(e.default=h,"2788755925")},160:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(159),s=a.n(o);a.d(e,"a",function(){return s.a});a(28),a(161),a(40);var l=r.a.createContext({}),u=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},161:function(t,e,a){var n;t.exports=(n=a(163))&&n.default||n},162:function(t,e,a){"use strict";var n=a(8),r=a.n(n),i=a(0),c=a.n(i),o=a(160);a(167),a(164),a(168),a(170);var s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?c.a.createElement("div",{className:"container pt-5"}):c.a.createElement("h4",{className:"display-5 py-5 px-3 font-weight-light text-muted"},c.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),c.a.createElement("div",{className:"container"},t,r)},e}(c.a.Component);e.a=s},163:function(t,e,a){"use strict";a.r(e);a(41);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(57),s=a(1),l=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=l},165:function(t,e,a){"use strict";var n=a(166),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(171),l=a.n(s),u=a(160);function d(t){var e=t.description,a=t.lang,r=t.meta,c=t.keywords,o=t.title;return i.a.createElement(u.b,{query:m,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=d;var m="2515784693"},166:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"stackcheats","description":"Static Site Generator for stackcheats","author":"Athiththan"}}}}')}}]);
//# sourceMappingURL=component---src-templates-stackcheat-template-js-8502fd9a6b92000c3a06.js.map