(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(154),s=a(156),l=a(158),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return o.a.createElement(s.a,{location:this.props.location,title:e},o.a.createElement(l.a,{title:"stackcheats",keywords:["stackcheats","stories","blogs","athiththan11"]}),o.a.createElement("div",{className:"container my-5"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("h1",{className:"display-3 h-100 font-weight-lighter text-muted"},e)))),o.a.createElement("div",{className:"container card-columns"},a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug,n=e.frontmatter,r=n.intro,i=n.author,s=n.updated;return o.a.createElement("div",{className:"card rounded-5",key:e.fields.slug},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},o.a.createElement(c.a,{style:{textDecoration:"none"},to:e.fields.slug},a)),o.a.createElement("p",{className:"card-text"},r),o.a.createElement("footer",{className:"blockquote-footer"},o.a.createElement("small",{className:"text-muted"},i," on ",s))))})))},e}(o.a.Component);e.default=d;var u="3860781074"},154:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(153),s=a.n(c);a.d(e,"a",function(){return s.a});a(155),a(33);var l=r.a.createContext({}),d=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(t,e,a){var n;t.exports=(n=a(157))&&n.default||n},156:function(t,e,a){"use strict";var n=a(7),r=a.n(n),i=(a(160),a(0)),o=a.n(i),c=a(154),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?o.a.createElement("div",{className:"container pt-5"}):o.a.createElement("h4",{className:"display-5 py-5 px-3 font-weight-light text-muted"},o.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{className:"container"},t,r)},e}(o.a.Component);e.a=s},157:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(53),s=a(2),l=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},158:function(t,e,a){"use strict";var n=a(159),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(161),l=a.n(s),d=a(154);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(d.b,{query:m,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=u;var m="2515784693"},159:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"stackcheats","description":"Static Site Generator for stackcheats","author":"Athiththan"}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-b19e09a2546db533edf0.js.map