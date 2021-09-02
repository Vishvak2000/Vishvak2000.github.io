this.webpackChunk([26],{1593:function(e,a,t){e.exports=function(){var e=[],a=[],t={},n={},r={};function i(e){return"string"===typeof e?new RegExp("^"+e+"$","i"):e}function s(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function o(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,t){return a[t]||""}))}function l(e,a){return e.replace(a[0],(function(t,n){var r=o(a[1],arguments);return s(""===t?e[n-1]:t,r)}))}function u(e,a,n){if(!e.length||t.hasOwnProperty(e))return a;for(var r=n.length;r--;){var i=n[r];if(i[0].test(a))return l(a,i)}return a}function c(e,a,t){return function(n){var r=n.toLowerCase();return a.hasOwnProperty(r)?s(n,r):e.hasOwnProperty(r)?s(n,e[r]):u(r,n,t)}}function m(e,a,t,n){return function(n){var r=n.toLowerCase();return!!a.hasOwnProperty(r)||!e.hasOwnProperty(r)&&u(r,r,t)===r}}function d(e,a,t){return(t?a+" ":"")+(1===a?d.singular(e):d.plural(e))}return d.plural=c(r,n,e),d.isPlural=m(r,n,e),d.singular=c(n,r,a),d.isSingular=m(n,r,a),d.addPluralRule=function(a,t){e.push([i(a),t])},d.addSingularRule=function(e,t){a.push([i(e),t])},d.addUncountableRule=function(e){"string"!==typeof e?(d.addPluralRule(e,"$0"),d.addSingularRule(e,"$0")):t[e.toLowerCase()]=!0},d.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),r[e]=a,n[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return d.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return d.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return d.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[e\xe9]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d}()},2034:function(e,a,t){"use strict";var n=t(25),r=t(33);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=r(t(0)),s=(0,n(t(34)).default)(i.createElement("path",{d:"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"}),"ViewList");a.default=s},2064:function(e,a,t){"use strict";t.r(a);var n=t(9),r=t(174),i=t(944),s=t(948),o=t(946),l=t(947),u=t(945),c=t(205),m=t(904),d=t(905),h=t(682),p=t(941),$=t(913),f=t(912),v=t(162),g=t(99),b=t(466),y=t.n(b),w=t(2034),E=t.n(w),k=t(358),x=t(16),C=t(1593),S=t.n(C),z=t(0),O=t.n(z),j=Object(k.a)((function(e){return{root:{margin:e.spacing(1)},message:{padding:e.spacing(3)}}})),P=Object(x.observer)((function(e){var a=e.session,t=j(),n=JSON.parse(localStorage.getItem(a.previousAutosaveId)||"{}").session,r=(n||{}).views,i=void 0===r?[]:r,s=i.map((function(e){return e.tracks.length})).reduce((function(e,a){return e+a}),0);return n?O.a.createElement(v.a,{className:t.root},O.a.createElement(m.a,{subheader:O.a.createElement(f.a,null,"Previous autosaved entry")},O.a.createElement(d.a,{button:!0,onClick:function(){return a.loadAutosaveSession()}},O.a.createElement(h.a,null,O.a.createElement(E.a,null)),O.a.createElement($.a,{primary:n.name,secondary:a.name===n.name?"Currently open":"".concat(i.length," ").concat(S()("view",i.length),"; ").concat(s,"\n                           open ").concat(S()("track",s))})))):null})),R=Object(x.observer)((function(e){var a=e.session,t=j(),b=Object(z.useState)(null),w=Object(n.a)(b,2),k=w[0],x=w[1],C=Object(z.useState)(!1),R=Object(n.a)(C,2),L=R[0],q=R[1];function H(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&a.removeSavedSession(a.savedSessions[k]),x(null),q(!1)}var U=null!==k?a.savedSessions[k].name:"";return O.a.createElement(O.a.Fragment,null,O.a.createElement(P,{session:a}),O.a.createElement(v.a,{className:t.root},O.a.createElement(m.a,{subheader:O.a.createElement(f.a,null,"Saved sessions")},a.savedSessions.length?a.savedSessions.map((function(e,t){var n=e.views,r=void 0===n?[]:n,i=r.map((function(e){return e.tracks.length})).reduce((function(e,a){return e+a}),0);return O.a.createElement(d.a,{button:!0,disabled:a.name===e.name,onClick:function(){return a.activateSession(e.name)},key:e.name},O.a.createElement(h.a,null,O.a.createElement(E.a,null)),O.a.createElement($.a,{primary:e.name,secondary:a.name===e.name?"Currently open":"".concat(r.length," ").concat(S()("view",r.length),"; ").concat(i,"\n                           open ").concat(S()("track",i))}),O.a.createElement(p.a,null,O.a.createElement(c.a,{edge:"end",disabled:a.name===e.name,"aria-label":"Delete",onClick:function(){return function(e){x(e),q(!0)}(t)}},O.a.createElement(y.a,null))))})):O.a.createElement(g.a,{className:t.message},"No saved sessions found"))),O.a.createElement(i.a,{open:L,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},O.a.createElement(u.a,{id:"alert-dialog-title"},'Delete session "'.concat(U,'"?')),O.a.createElement(o.a,null,O.a.createElement(l.a,{id:"alert-dialog-description"},"This action cannot be undone")),O.a.createElement(s.a,null,O.a.createElement(r.a,{onClick:function(){return H()},color:"primary"},"Cancel"),O.a.createElement(r.a,{onClick:function(){return H(!0)},color:"primary",autoFocus:!0},"Delete"))))}));a.default=R}});
//# sourceMappingURL=26.755b57b40b029263b59b.worker.js.map