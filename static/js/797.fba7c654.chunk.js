"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{687:function(e,t,r){r.d(t,{Y5:function(){return o},mv:function(){return c},uV:function(){return p},wr:function(){return s}});var n=r(861),a=r(757),i=r.n(a),u=r(759);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"62b7926c91251984ba38d06783ddb132"};var s=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},315:function(e,t,r){r.d(t,{e:function(){return c}});var n=r(87),a=r(689),i=r(184),u=function(e){var t=e.id,r=e.title,u=e.moviepath,s=(0,a.TH)();return u?(0,i.jsx)("li",{children:(0,i.jsxs)(n.rU,{to:"/movies/".concat(t),state:{from:s,movieTitle:"Random string that i want to pass"},children:[(0,i.jsx)("img",{width:"260",height:"330",src:"https://image.tmdb.org/t/p/w500".concat(u),alt:r}),(0,i.jsx)("h4",{children:r})]})},t):null},s="movieList_movieUl__hwNJP",c=function(e){var t=e.movies;return(0,i.jsx)("ul",{className:s,children:t.map((function(e){var t=e.id,r=e.title,n=e.backdrop_path;return(0,i.jsx)(u,{id:t,title:r,moviepath:n},t)}))})}},797:function(e,t,r){r.r(t);var n=r(861),a=r(439),i=r(757),u=r.n(i),s=r(791),c=r(687),o=r(315),p=r(87),v=r(689),l=r(779),d=r(184);t.default=function(){var e,t=(0,s.useState)([]),r=(0,a.Z)(t,2),i=r[0],f=r[1],m=(0,p.lr)(),h=(0,a.Z)(m,2),x=h[0],g=h[1],_=null!==(e=x.get("query"))&&void 0!==e?e:"Friends",w=(0,v.UO)().movieId,Z=(0,s.useState)(!1),b=(0,a.Z)(Z,2),k=b[0],j=b[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_.trim()){e.next=2;break}return e.abrupt("return");case 2:return j(!0),e.prev=3,e.next=6,(0,c.mv)(_);case 6:t=e.sent,f(t),j(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),j(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]),(0,d.jsxs)("div",{children:[!w&&(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:l.Z.inputWrapper,children:(0,d.jsx)("input",{type:"text",className:l.Z.input,onChange:function(e){return t=e.target.value,void g(""!==t?{query:t}:{});var t},placeholder:"Search movies..."})}),k?(0,d.jsx)("p",{style:{textAlign:"center"},children:"Loading..."}):(0,d.jsx)(o.e,{movies:i})]}),(0,d.jsx)(v.j3,{})]})}},779:function(e,t){t.Z={inputWrapper:"MoviePage_inputWrapper__JKoBL",input:"MoviePage_input__QL4+I",movieDetailsPageDiv:"MoviePage_movieDetailsPageDiv__ERRly",movieDetailsPageDivAdd:"MoviePage_movieDetailsPageDivAdd__WdEO4"}}}]);
//# sourceMappingURL=797.fba7c654.chunk.js.map