 Knockout JavaScript library v2.2.1
 (c) Steven Sanderson - httpknockoutjs.com
 License MIT (httpwww.opensource.orglicensesmit-license.php)

(function() {function j(w){throw w;}var m=!0,p=null,r=!1;function u(w){return function(){return w}};var x=window,y=document,ga=navigator,F=window.jQuery,I=void 0;
function L(w){function ha(a,d,c,e,f){var g=[];a=b.j(function(){var a=d(c,f)[];0g.length&&(b.a.Ya(M(g),a),e&&b.r.K(e,p,[c,a,f]));g.splice(0,g.length);b.a.P(g,a)},p,{Wa,Kafunction(){return 0==g.length!b.a.X(g[0])}});return{Mg,ja.pa()aI}}function M(a){for(;a.length&&!b.a.X(a[0]);)a.splice(0,1);if(1a.length){for(var d=a[0],c=a[a.length-1],e=[d];d!==c;){d=d.nextSibling;if(!d)return;e.push(d)}Array.prototype.splice.apply(a,[0,a.length].concat(e))}return a}function S(a,b,c,e,f){var g=Math.min,
h=Math.max,k=[],l,n=a.length,q,s=b.length,v=s-n1,G=n+s+1,J,A,z;for(l=0;l=n;l++){A=J;k.push(J=[]);z=g(s,l+v);for(q=h(0,l-1);q=z;q++)J[q]=qla[l-1]===b[q-1]A[q-1]g(A[q]G,J[q-1]G)+1q+1l+1}g=[];h=[];v=[];l=n;for(q=s;lq;)s=k[l][q]-1,q&&s===k[l][q-1]h.push(g[g.length]={statusc,valueb[--q],indexq})l&&s===k[l-1][q]v.push(g[g.length]={statuse,valuea[--l],indexl})(g.push({statusretained,valueb[--q]}),--l);if(h.length&&v.length){a=10n;var t;for(b=c=0;(fba)&&(t=h[c]);c++){for(e=
0;k=v[e];e++)if(t.value===k.value){t.moved=k.index;k.moved=t.index;v.splice(e,1);b=e=0;break}b+=e}}return g.reverse()}function T(a,d,c,e,f){f=f{};var g=a&&N(a),g=g&&g.ownerDocument,h=f.templateEngineO;b.za.vb(c,h,g);c=h.renderTemplate(c,e,f,g);(number!=typeof c.length0c.length&&number!=typeof c[0].nodeType)&&j(Error(Template engine must return an array of DOM nodes));g=r;switch(d){case replaceChildrenb.e.N(a,c);g=m;break;case replaceNodeb.a.Ya(a,c);g=m;break;case ignoreTargetNodebreak;
defaultj(Error(Unknown renderMode +d))}g&&(U(c,e),f.afterRender&&b.r.K(f.afterRender,p,[c,e.$data]));return c}function N(a){return a.nodeTypea0a.lengtha[0]p}function U(a,d){if(a.length){var c=a[0],e=a[a.length-1];V(c,e,function(a){b.Da(d,a)});V(c,e,function(a){b.s.ib(a,[d])})}}function V(a,d,c){var e;for(d=b.e.nextSibling(d);a&&(e=a)!==d;)a=b.e.nextSibling(e),(1===e.nodeType8===e.nodeType)&&c(e)}function W(a,d,c){a=b.g.aa(a);for(var e=b.g.Q,f=0;fa.length;f++){var g=a[f].key;if(e.hasOwnProperty(g)){var h=
e[g];function===typeof h(g=h(a[f].value))&&j(Error(g))hj(Error(This template engine does not support the '+g+' binding within its templates))}}a=ko.__tr_ambtns(function($context,$element){return(function(){return{ +b.g.ba(a)+ } })()});return c.createJavaScriptEvaluatorBlock(a)+d}function X(a,d,c,e){function f(a){return function(){return k[a]}}function g(){return k}var h=0,k,l;b.j(function(){var n=c&&c instanceof b.zcnew b.z(b.a.d(c)),q=n.$data;e&&b.eb(a,n);if(k=(function==typeof d
d(n,a)d)b.J.instance.getBindings(a,n)){if(0===h){h=1;for(var s in k){var v=b.c[s];v&&8===a.nodeType&&!b.e.I[s]&&j(Error(The binding '+s+' cannot be used with virtual elements));if(v&&function==typeof v.init&&(v=(0,v.init)(a,f(s),g,q,n))&&v.controlsDescendantBindings)l!==I&&j(Error(Multiple bindings (+l+ and +s+) are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.)),l=s}h=2}if(2===h)for(s in k)(v=b.c[s])&&function==
typeof v.update&&(0,v.update)(a,f(s),g,q,n)}},p,{Wa});return{Nbl===I}}function Y(a,d,c){var e=m,f=1===d.nodeType;f&&b.e.Ta(d);if(f&&cb.J.instance.nodeHasBindings(d))e=X(d,p,a,c).Nb;e&&Z(a,d,!f)}function Z(a,d,c){for(var e=b.e.firstChild(d);d=e;)e=b.e.nextSibling(d),Y(a,d,c)}function $(a,b){var c=aa(a,b);return c0c.lengthc[c.length-1].nextSiblinga.nextSiblingp}function aa(a,b){for(var c=a,e=1,f=[];c=c.nextSibling;){if(H(c)&&(e--,0===e))return f;f.push(c);B(c)&&e++}bj(Error(Cannot find closing comment tag to match +
a.nodeValue));return p}function H(a){return 8==a.nodeType&&(Ka.texta.nodeValue).match(ia)}function B(a){return 8==a.nodeType&&(Ka.texta.nodeValue).match(ja)}function P(a,b){for(var c=p;a!=c;)c=a,a=a.replace(ka,function(a,c){return b[c]});return a}function la(){var a=[],d=[];this.save=function(c,e){var f=b.a.i(a,c);0=fd[f]=e(a.push(c),d.push(e))};this.get=function(c){c=b.a.i(a,c);return 0=cd[c]I}}function ba(a,b,c){function e(e){var g=b(a[e]);switch(typeof g){case booleancase numbercase stringcase functionf[e]=
g;break;case objectcase undefinedvar h=c.get(g);f[e]=h!==Ihba(g,b,c)}}c=cnew la;a=b(a);if(!(object==typeof a&&a!==p&&a!==I&&!(a instanceof Date)))return a;var f=a instanceof Array[]{};c.save(a,f);var g=a;if(g instanceof Array){for(var h=0;hg.length;h++)e(h);function==typeof g.toJSON&&e(toJSON)}else for(h in g)e(h);return f}function ca(a,d){if(a)if(8==a.nodeType){var c=b.s.Ua(a.nodeValue);c!=p&&d.push({sba,Fbc})}else if(1==a.nodeType)for(var c=0,e=a.childNodes,f=e.length;cf;c++)ca(e[c],
d)}function Q(a,d,c,e){b.c[a]={initfunction(a){b.a.f.set(a,da,{});return{controlsDescendantBindingsm}},updatefunction(a,g,h,k,l){h=b.a.f.get(a,da);g=b.a.d(g());k=!c!==!g;var n=!h.Za;if(ndk!==h.qb)n&&(h.Za=b.a.Ia(b.e.childNodes(a),m)),k(nb.e.N(a,b.a.Ia(h.Za)),b.Ea(ee(l,g)l,a))b.e.Y(a),h.qb=k}};b.g.Q[a]=r;b.e.I[a]=m}function ea(a,d,c){c&&d!==b.k.q(a)&&b.k.T(a,d);d!==b.k.q(a)&&b.r.K(b.a.Ba,p,[a,change])}var b=undefined!==typeof ww{};b.b=function(a,d){for(var c=a.split(.),e=b,f=0;f
c.length-1;f++)e=e[c[f]];e[c[c.length-1]]=d};b.p=function(a,b,c){a[b]=c};b.version=2.2.1;b.b(version,b.version);b.a=new function(){function a(a,d){if(input!==b.a.u(a)!a.typeclick!=d.toLowerCase())return r;var c=a.type;returncheckbox==cradio==c}var d=^(su00A0)+(su00A0)+$g,c={},e={};c[Firefox2i.test(ga.userAgent)KeyboardEventUIEvents]=[keyup,keydown,keypress];c.MouseEvents=click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave.split( );
for(var f in c){var g=c[f];if(g.length)for(var h=0,k=g.length;hk;h++)e[g[h]]=f}var l={propertychangem},n,c=3;f=y.createElement(div);for(g=f.getElementsByTagName(i);f.innerHTML=x3c!--[if gt IE + ++c+]ii![endif]--x3e,g[0];);n=4ccI;return{Na[authenticity_token,^__RequestVerificationToken(_.)$],ofunction(a,b){for(var d=0,c=a.length;dc;d++)b(a[d])},ifunction(a,b){if(function==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var d=0,c=a.length;d
c;d++)if(a[d]===b)return d;return-1},lbfunction(a,b,d){for(var c=0,e=a.length;ce;c++)if(b.call(d,a[c]))return a[c];return p},gafunction(a,d){var c=b.a.i(a,d);0=c&&a.splice(c,1)},Gafunction(a){a=a[];for(var d=[],c=0,e=a.length;ce;c++)0b.a.i(d,a[c])&&d.push(a[c]);return d},Vfunction(a,b){a=a[];for(var d=[],c=0,e=a.length;ce;c++)d.push(b(a[c]));return d},fafunction(a,b){a=a[];for(var d=[],c=0,e=a.length;ce;c++)b(a[c])&&d.push(a[c]);return d},Pfunction(a,b){if(b instanceof Array)a.push.apply(a,
b);else for(var d=0,c=b.length;dc;d++)a.push(b[d]);return a},extendfunction(a,b){if(b)for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a},kafunction(a){for(;a.firstChild;)b.removeNode(a.firstChild)},Hbfunction(a){a=b.a.L(a);for(var d=y.createElement(div),c=0,e=a.length;ce;c++)d.appendChild(b.A(a[c]));return d},Iafunction(a,d){for(var c=0,e=a.length,g=[];ce;c++){var f=a[c].cloneNode(m);g.push(db.A(f)f)}return g},Nfunction(a,d){b.a.ka(a);if(d)for(var c=0,e=d.length;ce;c++)a.appendChild(d[c])},
Yafunction(a,d){var c=a.nodeType[a]a;if(0c.length){for(var e=c[0],g=e.parentNode,f=0,h=d.length;fh;f++)g.insertBefore(d[f],e);f=0;for(h=c.length;fh;f++)b.removeNode(c[f])}},bbfunction(a,b){7na.setAttribute(selected,b)a.selected=b},Dfunction(a){return(a).replace(d,)},Rbfunction(a,d){for(var c=[],e=(a).split(d),f=0,g=e.length;fg;f++){var h=b.a.D(e[f]);!==h&&c.push(h)}return c},Obfunction(a,b){a=a;return b.lengtha.lengthra.substring(0,b.length)===b},tbfunction(a,b){if(b.compareDocumentPosition)return 16==
(b.compareDocumentPosition(a)&16);for(;a!=p;){if(a==b)return m;a=a.parentNode}return r},Xfunction(a){return b.a.tb(a,a.ownerDocument)},ufunction(a){return a&&a.tagName&&a.tagName.toLowerCase()},nfunction(b,d,c){var e=n&&l[d];if(!e&&undefined!=typeof F){if(a(b,d)){var f=c;c=function(a,b){var d=this.checked;b&&(this.checked=b.nb!==m);f.call(this,a);this.checked=d}}F(b).bind(d,c)}else!e&&function==typeof b.addEventListenerb.addEventListener(d,c,r)undefined!=typeof b.attachEventb.attachEvent(on+
d,function(a){c.call(b,a)})j(Error(Browser doesn't support addEventListener or attachEvent))},Bafunction(b,d){(!b!b.nodeType)&&j(Error(element must be a DOM node when calling triggerEvent));if(undefined!=typeof F){var c=[];a(b,d)&&c.push({nbb.checked});F(b).trigger(d,c)}elsefunction==typeof y.createEventfunction==typeof b.dispatchEvent(c=y.createEvent(e[d]HTMLEvents),c.initEvent(d,m,m,x,0,0,0,0,0,r,r,r,r,0,b),b.dispatchEvent(c))j(Error(The supplied element doesn't support dispatchEvent))
undefined!=typeof b.fireEvent(a(b,d)&&(b.checked=b.checked!==m),b.fireEvent(on+d))j(Error(Browser doesn't support triggering events))},dfunction(a){return b.$(a)a()a},uafunction(a){return b.$(a)a.t()a},dafunction(a,d,c){if(d){var e=[w-]+g,f=a.className.match(e)[];b.a.o(d.match(e),function(a){var d=b.a.i(f,a);0=dcf.splice(d,1)c&&f.push(a)});a.className=f.join( )}},cbfunction(a,d){var c=b.a.d(d);if(c===pc===I)c=;if(3===a.nodeType)a.data=c;else{var e=b.e.firstChild(a);
!e3!=e.nodeTypeb.e.nextSibling(e)b.e.N(a,[y.createTextNode(c)])e.data=c;b.a.wb(a)}},abfunction(a,b){a.name=b;if(7=n)try{a.mergeAttributes(y.createElement(input name='+a.name+'),r)}catch(d){}},wbfunction(a){9=n&&(a=1==a.nodeTypeaa.parentNode,a.style&&(a.style.zoom=a.style.zoom))},ubfunction(a){if(9=n){var b=a.style.width;a.style.width=0;a.style.width=b}},Lbfunction(a,d){a=b.a.d(a);d=b.a.d(d);for(var c=[],e=a;e=d;e++)c.push(e);return c},Lfunction(a){for(var b=[],d=0,c=a.length;d
c;d++)b.push(a[d]);return b},Pb6===n,Qb7===n,Zn,Oafunction(a,d){for(var c=b.a.L(a.getElementsByTagName(input)).concat(b.a.L(a.getElementsByTagName(textarea))),e=string==typeof dfunction(a){return a.name===d}function(a){return d.test(a.name)},f=[],g=c.length-1;0=g;g--)e(c[g])&&f.push(c[g]);return f},Ibfunction(a){returnstring==typeof a&&(a=b.a.D(a))x.JSON&&x.JSON.parsex.JSON.parse(a)(new Function(return +a))()p},xafunction(a,d,c){(undefined==typeof JSONundefined==typeof JSON.stringify)&&
j(Error(Cannot find JSON.stringify(). Some browsers (e.g., IE  8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from httpwww.json.orgjson2.js));return JSON.stringify(b.a.d(a),d,c)},Jbfunction(a,d,c){c=c{};var e=c.params{},f=c.includeFieldsthis.Na,g=a;if(object==typeof a&&form===b.a.u(a))for(var g=a.action,h=f.length-1;0=h;h--)for(var k=b.a.Oa(a,f[h]),l=k.length-1;0=l;l--)e[k[l].name]=k[l].value;d=b.a.d(d);var n=y.createElement(form);
n.style.display=none;n.action=g;n.method=post;for(var w in d)a=y.createElement(input),a.name=w,a.value=b.a.xa(b.a.d(d[w])),n.appendChild(a);for(w in e)a=y.createElement(input),a.name=w,a.value=e[w],n.appendChild(a);y.body.appendChild(n);c.submitterc.submitter(n)n.submit();setTimeout(function(){n.parentNode.removeChild(n)},0)}}};b.b(utils,b.a);b.b(utils.arrayForEach,b.a.o);b.b(utils.arrayFirst,b.a.lb);b.b(utils.arrayFilter,b.a.fa);b.b(utils.arrayGetDistinctValues,b.a.Ga);b.b(utils.arrayIndexOf,
b.a.i);b.b(utils.arrayMap,b.a.V);b.b(utils.arrayPushAll,b.a.P);b.b(utils.arrayRemoveItem,b.a.ga);b.b(utils.extend,b.a.extend);b.b(utils.fieldsIncludedWithJsonPost,b.a.Na);b.b(utils.getFormFields,b.a.Oa);b.b(utils.peekObservable,b.a.ua);b.b(utils.postJson,b.a.Jb);b.b(utils.parseJson,b.a.Ib);b.b(utils.registerEventHandler,b.a.n);b.b(utils.stringifyJson,b.a.xa);b.b(utils.range,b.a.Lb);b.b(utils.toggleDomNodeCssClass,b.a.da);b.b(utils.triggerEvent,b.a.Ba);b.b(utils.unwrapObservable,
b.a.d);Function.prototype.bind(Function.prototype.bind=function(a){var b=this,c=Array.prototype.slice.call(arguments);a=c.shift();return function(){return b.apply(a,c.concat(Array.prototype.slice.call(arguments)))}});b.a.f=new function(){var a=0,d=__ko__+(new Date).getTime(),c={};return{getfunction(a,d){var c=b.a.f.la(a,r);return c===IIc[d]},setfunction(a,d,c){c===I&&b.a.f.la(a,r)===I(b.a.f.la(a,m)[d]=c)},lafunction(b,f){var g=b[d];if(!g!(null!==g&&c[g])){if(!f)return I;g=b[d]=ko+
a++;c[g]={}}return c[g]},clearfunction(a){var b=a[d];return b(delete c[b],a[d]=p,m)r}}};b.b(utils.domData,b.a.f);b.b(utils.domData.clear,b.a.f.clear);b.a.F=new function(){function a(a,d){var e=b.a.f.get(a,c);e===I&&d&&(e=[],b.a.f.set(a,c,e));return e}function d(c){var e=a(c,r);if(e)for(var e=e.slice(0),k=0;ke.length;k++)e[k](c);b.a.f.clear(c);function==typeof F&&function==typeof F.cleanData&&F.cleanData([c]);if(f[c.nodeType])for(e=c.firstChild;c=e;)e=c.nextSibling,8===c.nodeType&&d(c)}
var c=__ko_domNodeDisposal__+(new Date).getTime(),e={1m,8m,9m},f={1m,9m};return{Cafunction(b,d){function!=typeof d&&j(Error(Callback must be a function));a(b,m).push(d)},Xafunction(d,e){var f=a(d,r);f&&(b.a.ga(f,e),0==f.length&&b.a.f.set(d,c,I))},Afunction(a){if(e[a.nodeType]&&(d(a),f[a.nodeType])){var c=[];b.a.P(c,a.getElementsByTagName());for(var k=0,l=c.length;kl;k++)d(c[k])}return a},removeNodefunction(a){b.A(a);a.parentNode&&a.parentNode.removeChild(a)}}};b.A=b.a.F.A;b.removeNode=
b.a.F.removeNode;b.b(cleanNode,b.A);b.b(removeNode,b.removeNode);b.b(utils.domNodeDisposal,b.a.F);b.b(utils.domNodeDisposal.addDisposeCallback,b.a.F.Ca);b.b(utils.domNodeDisposal.removeDisposeCallback,b.a.F.Xa);b.a.ta=function(a){var d;if(undefined!=typeof F)if(F.parseHTML)d=F.parseHTML(a);else{if((d=F.clean([a]))&&d[0]){for(a=d[0];a.parentNode&&11!==a.parentNode.nodeType;)a=a.parentNode;a.parentNode&&a.parentNode.removeChild(a)}}else{var c=b.a.D(a).toLowerCase();d=y.createElement(div);
c=c.match(^(theadtbodytfoot))&&[1,table,table]!c.indexOf(tr)&&[2,tabletbody,tbodytable](!c.indexOf(td)!c.indexOf(th))&&[3,tabletbodytr,trtbodytable][0,,];a=ignoreddiv+c[1]+a+c[2]+div;for(function==typeof x.innerShivd.appendChild(x.innerShiv(a))d.innerHTML=a;c[0]--;)d=d.lastChild;d=b.a.L(d.lastChild.childNodes)}return d};b.a.ca=function(a,d){b.a.ka(a);d=b.a.d(d);if(d!==p&&d!==I)if(string!=typeof d&&(d=d.toString()),
undefined!=typeof F)F(a).html(d);else for(var c=b.a.ta(d),e=0;ec.length;e++)a.appendChild(c[e])};b.b(utils.parseHtmlFragment,b.a.ta);b.b(utils.setHtml,b.a.ca);var R={};b.s={rafunction(a){function!=typeof a&&j(Error(You can only pass a function to ko.memoization.memoize()));var b=(4294967296(1+Math.random())0).toString(16).substring(1)+(4294967296(1+Math.random())0).toString(16).substring(1);R[b]=a;returnx3c!--[ko_memo+b+]--x3e},hbfunction(a,b){var c=R[a];c===I&&j(Error(Couldn't find any memo with ID +
a+. Perhaps it's already been unmemoized.));try{return c.apply(p,b[]),m}finally{delete R[a]}},ibfunction(a,d){var c=[];ca(a,c);for(var e=0,f=c.length;ef;e++){var g=c[e].sb,h=[g];d&&b.a.P(h,d);b.s.hb(c[e].Fb,h);g.nodeValue=;g.parentNode&&g.parentNode.removeChild(g)}},Uafunction(a){return(a=a.match(^[ko_memo(.)]$))a[1]p}};b.b(memoization,b.s);b.b(memoization.memoize,b.s.ra);b.b(memoization.unmemoize,b.s.hb);b.b(memoization.parseMemoText,b.s.Ua);b.b(memoization.unmemoizeDomNodeAndDescendants,
b.s.ib);b.Ma={throttlefunction(a,d){a.throttleEvaluation=d;var c=p;return b.j({reada,writefunction(b){clearTimeout(c);c=setTimeout(function(){a(b)},d)}})},notifyfunction(a,d){a.equalityComparer=always==du(r)b.m.fn.equalityComparer;return a}};b.b(extenders,b.Ma);b.fb=function(a,d,c){this.target=a;this.ha=d;this.rb=c;b.p(this,dispose,this.B)};b.fb.prototype.B=function(){this.Cb=m;this.rb()};b.S=function(){this.w={};b.a.extend(this,b.S.fn);b.p(this,subscribe,this.ya);b.p(this,extend,
this.extend);b.p(this,getSubscriptionsCount,this.yb)};b.S.fn={yafunction(a,d,c){c=cchange;var e=new b.fb(this,da.bind(d)a,function(){b.a.ga(this.w[c],e)}.bind(this));this.w[c](this.w[c]=[]);this.w[c].push(e);return e},notifySubscribersfunction(a,d){d=dchange;this.w[d]&&b.r.K(function(){b.a.o(this.w[d].slice(0),function(b){b&&b.Cb!==m&&b.ha(a)})},this)},ybfunction(){var a=0,b;for(b in this.w)this.w.hasOwnProperty(b)&&(a+=this.w[b].length);return a},extendfunction(a){var d=this;if(a)for(var c in a){var e=
b.Ma[c];function==typeof e&&(d=e(d,a[c]))}return d}};b.Qa=function(a){returnfunction==typeof a.ya&&function==typeof a.notifySubscribers};b.b(subscribable,b.S);b.b(isSubscribable,b.Qa);var C=[];b.r={mbfunction(a){C.push({haa,La[]})},endfunction(){C.pop()},Wafunction(a){b.Qa(a)j(Error(Only subscribable things can act as dependencies));if(0C.length){var d=C[C.length-1];d&&!(0=b.a.i(d.La,a))&&(d.La.push(a),d.ha(a))}},Kfunction(a,b,c){try{return C.push(p),a.apply(b,c[])}finally{C.pop()}}};
var ma={undefinedm,booleanm,numberm,stringm};b.m=function(a){function d(){if(0arguments.length){if(!d.equalityComparer!d.equalityComparer(c,arguments[0]))d.H(),c=arguments[0],d.G();return this}b.r.Wa(d);return c}var c=a;b.S.call(d);d.t=function(){return c};d.G=function(){d.notifySubscribers(c)};d.H=function(){d.notifySubscribers(c,beforeChange)};b.a.extend(d,b.m.fn);b.p(d,peek,d.t);b.p(d,valueHasMutated,d.G);b.p(d,valueWillMutate,d.H);return d};b.m.fn={equalityComparerfunction(a,
b){return a===ptypeof a in maa===br}};var E=b.m.Kb=__ko_proto__;b.m.fn[E]=b.m;b.ma=function(a,d){return a===pa===Ia[E]===Ira[E]===dmb.ma(a[E],d)};b.$=function(a){return b.ma(a,b.m)};b.Ra=function(a){returnfunction==typeof a&&a[E]===b.mfunction==typeof a&&a[E]===b.j&&a.zbmr};b.b(observable,b.m);b.b(isObservable,b.$);b.b(isWriteableObservable,b.Ra);b.R=function(a){0==arguments.length&&(a=[]);a!==p&&(a!==I&&!(lengthin a))&&j(Error(The argument passed when initializing an observable array must be an array, or null, or undefined.));
var d=b.m(a);b.a.extend(d,b.R.fn);return d};b.R.fn={removefunction(a){for(var b=this.t(),c=[],e=function==typeof aafunction(b){return b===a},f=0;fb.length;f++){var g=b[f];e(g)&&(0===c.length&&this.H(),c.push(g),b.splice(f,1),f--)}c.length&&this.G();return c},removeAllfunction(a){if(a===I){var d=this.t(),c=d.slice(0);this.H();d.splice(0,d.length);this.G();return c}return!a[]this.remove(function(d){return 0=b.a.i(a,d)})},destroyfunction(a){var b=this.t(),c=function==typeof aafunction(b){return b===
a};this.H();for(var e=b.length-1;0=e;e--)c(b[e])&&(b[e]._destroy=m);this.G()},destroyAllfunction(a){return a===Ithis.destroy(u(m))!a[]this.destroy(function(d){return 0=b.a.i(a,d)})},indexOffunction(a){var d=this();return b.a.i(d,a)},replacefunction(a,b){var c=this.indexOf(a);0=c&&(this.H(),this.t()[c]=b,this.G())}};b.a.o(pop push reverse shift sort splice unshift.split( ),function(a){b.R.fn[a]=function(){var b=this.t();this.H();b=b[a].apply(b,arguments);this.G();return b}});b.a.o([slice],
function(a){b.R.fn[a]=function(){var b=this();return b[a].apply(b,arguments)}});b.b(observableArray,b.R);b.j=function(a,d,c){function e(){b.a.o(z,function(a){a.B()});z=[]}function f(){var a=h.throttleEvaluation;a&&0=a(clearTimeout(t),t=setTimeout(g,a))g()}function g(){if(!q)if(n&&w())A();else{q=m;try{var a=b.a.V(z,function(a){return a.target});b.r.mb(function(c){var d;0=(d=b.a.i(a,c))a[d]=Iz.push(c.ya(f))});for(var c=s.call(d),e=a.length-1;0=e;e--)a[e]&&z.splice(e,1)[0].B();n=m;h.notifySubscribers(l,
beforeChange);l=c}finally{b.r.end()}h.notifySubscribers(l);q=r;z.lengthA()}}function h(){if(0arguments.length)returnfunction===typeof vv.apply(d,arguments)j(Error(Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.)),this;ng();b.r.Wa(h);return l}function k(){return!n0z.length}var l,n=r,q=r,s=a;s&&object==typeof s(c=s,s=c.read)(c=c{},s(s=c.read));function!=typeof s&&j(Error(Pass a function that returns the value of the ko.computed));
var v=c.write,G=c.disposeWhenNodeIsRemovedc.Wp,w=c.disposeWhenc.Kau(r),A=e,z=[],t=p;d(d=c.owner);h.t=function(){ng();return l};h.xb=function(){return z.length};h.zb=function===typeof c.write;h.B=function(){A()};h.pa=k;b.S.call(h);b.a.extend(h,b.j.fn);b.p(h,peek,h.t);b.p(h,dispose,h.B);b.p(h,isActive,h.pa);b.p(h,getDependenciesCount,h.xb);c.deferEvaluation!==m&&g();if(G&&k()){A=function(){b.a.F.Xa(G,arguments.callee);e()};b.a.F.Ca(G,A);var D=w,w=function(){return!b.a.X(G)D()}}return h};
b.Bb=function(a){return b.ma(a,b.j)};w=b.m.Kb;b.j[w]=b.m;b.j.fn={};b.j.fn[w]=b.j;b.b(dependentObservable,b.j);b.b(computed,b.j);b.b(isComputed,b.Bb);b.gb=function(a){0==arguments.length&&j(Error(When calling ko.toJS, pass the object you want to convert.));return ba(a,function(a){for(var c=0;b.$(a)&&10c;c++)a=a();return a})};b.toJSON=function(a,d,c){a=b.gb(a);return b.a.xa(a,d,c)};b.b(toJS,b.gb);b.b(toJSON,b.toJSON);b.k={qfunction(a){switch(b.a.u(a)){case optionreturn a.__ko__hasDomDataOptionValue__===
mb.a.f.get(a,b.c.options.sa)7=b.a.Za.getAttributeNode(value).specifieda.valuea.texta.value;case selectreturn 0=a.selectedIndexb.k.q(a.options[a.selectedIndex])I;defaultreturn a.value}},Tfunction(a,d){switch(b.a.u(a)){case optionswitch(typeof d){case stringb.a.f.set(a,b.c.options.sa,I);__ko__hasDomDataOptionValue__in a&&delete a.__ko__hasDomDataOptionValue__;a.value=d;break;defaultb.a.f.set(a,b.c.options.sa,d),a.__ko__hasDomDataOptionValue__=m,a.value=number===typeof d
d}break;case selectfor(var c=a.options.length-1;0=c;c--)if(b.k.q(a.options[c])==d){a.selectedIndex=c;break}break;defaultif(d===pd===I)d=;a.value=d}}};b.b(selectExtensions,b.k);b.b(selectExtensions.readValue,b.k.q);b.b(selectExtensions.writeValue,b.k.T);var ka=@ko_token_(d+)@g,na=[true,false],oa=^([$_a-z][$w](.+)(.s[$_a-z][$w][.+]))$i;b.g={Q[],aafunction(a){var d=b.a.D(a);if(3d.length)return[];{===d.charAt(0)&&(d=d.substring(1,d.length-1));a=[];for(var c=
p,e,f=0;fd.length;f++){var g=d.charAt(f);if(c===p)switch(g){case ''case 'case c=f,e=g}else if(g==e&&!==d.charAt(f-1)){g=d.substring(c,f+1);a.push(g);var h=@ko_token_+(a.length-1)+@,d=d.substring(0,c)+h+d.substring(f+1),f=f-(g.length-h.length),c=p}}e=c=p;for(var k=0,l=p,f=0;fd.length;f++){g=d.charAt(f);if(c===p)switch(g){case {c=f;l=g;e=};break;case (c=f;l=g;e=);break;case [c=f,l=g,e=]}g===lk++g===e&&(k--,0===k&&(g=d.substring(c,f+1),a.push(g),h=@ko_token_+(a.length-
1)+@,d=d.substring(0,c)+h+d.substring(f+1),f-=g.length-h.length,c=p))}e=[];d=d.split(,);c=0;for(f=d.length;cf;c++)k=d[c],l=k.indexOf(),0l&&lk.length-1(g=k.substring(l+1),e.push({keyP(k.substring(0,l),a),valueP(g,a)}))e.push({unknownP(k,a)});return e},bafunction(a){var d=string===typeof ab.g.aa(a)a,c=[];a=[];for(var e,f=0;e=d[f];f++)if(0c.length&&c.push(,),e.key){var g;a{g=e.key;var h=b.a.D(g);switch(h.length&&h.charAt(0)){case 'case ''break a;defaultg='+h+'}}e=e.value;
c.push(g);c.push();c.push(e);e=b.a.D(e);0=b.a.i(na,b.a.D(e).toLowerCase())e=r(h=e.match(oa),e=h===prh[1]Object(+h[1]+)+h[2]e);e&&(0a.length&&a.push(, ),a.push(g+  function(__ko_value) { +e+ = __ko_value; }))}else e.unknown&&c.push(e.unknown);d=c.join();0a.length&&(d=d+, '_ko_property_writers'  { +a.join()+ } );return d},Ebfunction(a,d){for(var c=0;ca.length;c++)if(b.a.D(a[c].key)==d)return m;return r},eafunction(a,d,c,e,f){if(!a!b.Ra(a)){if((a=d()._ko_property_writers)&&
a[c])a[c](e)}else(!fa.t()!==e)&&a(e)}};b.b(expressionRewriting,b.g);b.b(expressionRewriting.bindingRewriteValidators,b.g.Q);b.b(expressionRewriting.parseObjectLiteral,b.g.aa);b.b(expressionRewriting.preProcessBindings,b.g.ba);b.b(jsonExpressionRewriting,b.g);b.b(jsonExpressionRewriting.insertPropertyAccessorsIntoJson,b.g.ba);var K=x3c!--test--x3e===y.createComment(test).text,ja=K^x3c!--sko(s+(.+s[sS]))s--x3e$^sko(s+(.+s[sS]))s$,ia=K^x3c!--skos--x3e$
^skos$,pa={ulm,olm};b.e={I{},childNodesfunction(a){return B(a)aa(a)a.childNodes},Yfunction(a){if(B(a)){a=b.e.childNodes(a);for(var d=0,c=a.length;dc;d++)b.removeNode(a[d])}else b.a.ka(a)},Nfunction(a,d){if(B(a)){b.e.Y(a);for(var c=a.nextSibling,e=0,f=d.length;ef;e++)c.parentNode.insertBefore(d[e],c)}else b.a.N(a,d)},Vafunction(a,b){B(a)a.parentNode.insertBefore(b,a.nextSibling)a.firstChilda.insertBefore(b,a.firstChild)a.appendChild(b)},Pafunction(a,d,c){cB(a)a.parentNode.insertBefore(d,
c.nextSibling)c.nextSiblinga.insertBefore(d,c.nextSibling)a.appendChild(d)b.e.Va(a,d)},firstChildfunction(a){return!B(a)a.firstChild!a.nextSiblingH(a.nextSibling)pa.nextSibling},nextSiblingfunction(a){B(a)&&(a=$(a));return a.nextSibling&&H(a.nextSibling)pa.nextSibling},jbfunction(a){return(a=B(a))a[1]p},Tafunction(a){if(pa[b.a.u(a)]){var d=a.firstChild;if(d){do if(1===d.nodeType){var c;c=d.firstChild;var e=p;if(c){do if(e)e.push(c);else if(B(c)){var f=$(c,m);fc=fe=[c]}else H(c)&&
(e=[c]);while(c=c.nextSibling)}if(c=e){e=d.nextSibling;for(f=0;fc.length;f++)ea.insertBefore(c[f],e)a.appendChild(c[f])}}while(d=d.nextSibling)}}}};b.b(virtualElements,b.e);b.b(virtualElements.allowedBindings,b.e.I);b.b(virtualElements.emptyNode,b.e.Y);b.b(virtualElements.insertAfter,b.e.Pa);b.b(virtualElements.prepend,b.e.Va);b.b(virtualElements.setDomNodeChildren,b.e.N);b.J=function(){this.Ha={}};b.a.extend(b.J.prototype,{nodeHasBindingsfunction(a){switch(a.nodeType){case 1return a.getAttribute(data-bind)!=
p;case 8return b.e.jb(a)!=p;defaultreturn r}},getBindingsfunction(a,b){var c=this.getBindingsString(a,b);return cthis.parseBindingsString(c,b,a)p},getBindingsStringfunction(a){switch(a.nodeType){case 1return a.getAttribute(data-bind);case 8return b.e.jb(a);defaultreturn p}},parseBindingsStringfunction(a,d,c){try{var e;if(!(e=this.Ha[a])){var f=this.Ha,g,h=with($context){with($data{}){return{+b.g.ba(a)+}}};g=new Function($context,$element,h);e=f[a]=g}return e(d,c)}catch(k){j(Error(Unable to parse bindings.nMessage +
k+;nBindings value +a))}}});b.J.instance=new b.J;b.b(bindingProvider,b.J);b.c={};b.z=function(a,d,c){d(b.a.extend(this,d),this.$parentContext=d,this.$parent=d.$data,this.$parents=(d.$parents[]).slice(0),this.$parents.unshift(this.$parent))(this.$parents=[],this.$root=a,this.ko=b);this.$data=a;c&&(this[c]=a)};b.z.prototype.createChildContext=function(a,d){return new b.z(a,this,d)};b.z.prototype.extend=function(a){var d=b.a.extend(new b.z,this);return b.a.extend(d,a)};b.eb=function(a,d){if(2==
arguments.length)b.a.f.set(a,__ko_bindingContext__,d);else return b.a.f.get(a,__ko_bindingContext__)};b.Fa=function(a,d,c){1===a.nodeType&&b.e.Ta(a);return X(a,d,c,m)};b.Ea=function(a,b){(1===b.nodeType8===b.nodeType)&&Z(a,b,m)};b.Da=function(a,b){b&&(1!==b.nodeType&&8!==b.nodeType)&&j(Error(ko.applyBindings first parameter should be your view model; second parameter should be a DOM node));b=bx.document.body;Y(a,b,m)};b.ja=function(a){switch(a.nodeType){case 1case 8var d=b.eb(a);if(d)return d;
if(a.parentNode)return b.ja(a.parentNode)}return I};b.pb=function(a){return(a=b.ja(a))a.$dataI};b.b(bindingHandlers,b.c);b.b(applyBindings,b.Da);b.b(applyBindingsToDescendants,b.Ea);b.b(applyBindingsToNode,b.Fa);b.b(contextFor,b.ja);b.b(dataFor,b.pb);var fa={classclassName,forhtmlFor};b.c.attr={updatefunction(a,d){var c=b.a.d(d()){},e;for(e in c)if(string==typeof e){var f=b.a.d(c[e]),g=f===rf===pf===I;g&&a.removeAttribute(e);8=b.a.Z&&e in fa(e=fa[e],ga.removeAttribute(e)
a[e]=f)ga.setAttribute(e,f.toString());name===e&&b.a.ab(a,gf.toString())}}};b.c.checked={initfunction(a,d,c){b.a.n(a,click,function(){var e;if(checkbox==a.type)e=a.checked;else if(radio==a.type&&a.checked)e=a.value;else return;var f=d(),g=b.a.d(f);checkbox==a.type&&g instanceof Array(e=b.a.i(g,a.value),a.checked&&0ef.push(a.value)!a.checked&&0=e&&f.splice(e,1))b.g.ea(f,c,checked,e,m)});radio==a.type&&!a.name&&b.c.uniqueName.init(a,u(m))},updatefunction(a,d){var c=b.a.d(d());
checkbox==a.typea.checked=c instanceof Array0=b.a.i(c,a.value)cradio==a.type&&(a.checked=a.value==c)}};b.c.css={updatefunction(a,d){var c=b.a.d(d());if(object==typeof c)for(var e in c){var f=b.a.d(c[e]);b.a.da(a,e,f)}else c=String(c),b.a.da(a,a.__ko__cssValue,r),a.__ko__cssValue=c,b.a.da(a,c,m)}};b.c.enable={updatefunction(a,d){var c=b.a.d(d());c&&a.disableda.removeAttribute(disabled)!c&&!a.disabled&&(a.disabled=m)}};b.c.disable={updatefunction(a,d){b.c.enable.update(a,function(){return!b.a.d(d())})}};
b.c.event={initfunction(a,d,c,e){var f=d(){},g;for(g in f)(function(){var f=g;string==typeof f&&b.a.n(a,f,function(a){var g,n=d()[f];if(n){var q=c();try{var s=b.a.L(arguments);s.unshift(e);g=n.apply(e,s)}finally{g!==m&&(a.preventDefaulta.preventDefault()a.returnValue=r)}q[f+Bubble]===r&&(a.cancelBubble=m,a.stopPropagation&&a.stopPropagation())}})})()}};b.c.foreach={Safunction(a){return function(){var d=a(),c=b.a.ua(d);if(!cnumber==typeof c.length)return{foreachd,templateEngineb.C.oa};
b.a.d(d);return{foreachc.data,asc.as,includeDestroyedc.includeDestroyed,afterAddc.afterAdd,beforeRemovec.beforeRemove,afterRenderc.afterRender,beforeMovec.beforeMove,afterMovec.afterMove,templateEngineb.C.oa}}},initfunction(a,d){return b.c.template.init(a,b.c.foreach.Sa(d))},updatefunction(a,d,c,e,f){return b.c.template.update(a,b.c.foreach.Sa(d),c,e,f)}};b.g.Q.foreach=r;b.e.I.foreach=m;b.c.hasfocus={initfunction(a,d,c){function e(e){a.__ko_hasfocusUpdating=m;var f=a.ownerDocument;activeElementin
f&&(e=f.activeElement===a);f=d();b.g.ea(f,c,hasfocus,e,m);a.__ko_hasfocusUpdating=r}var f=e.bind(p,m),g=e.bind(p,r);b.a.n(a,focus,f);b.a.n(a,focusin,f);b.a.n(a,blur,g);b.a.n(a,focusout,g)},updatefunction(a,d){var c=b.a.d(d());a.__ko_hasfocusUpdating(ca.focus()a.blur(),b.r.K(b.a.Ba,p,[a,cfocusinfocusout]))}};b.c.html={initfunction(){return{controlsDescendantBindingsm}},updatefunction(a,d){b.a.ca(a,d())}};var da=__ko_withIfBindingData;Q(if);Q(ifnot,r,m);Q(with,m,r,function(a,
b){return a.createChildContext(b)});b.c.options={updatefunction(a,d,c){select!==b.a.u(a)&&j(Error(options binding applies only to SELECT elements));for(var e=0==a.length,f=b.a.V(b.a.fa(a.childNodes,function(a){return a.tagName&&option===b.a.u(a)&&a.selected}),function(a){return b.k.q(a)a.innerTexta.textContent}),g=a.scrollTop,h=b.a.d(d());0a.length;)b.A(a.options[0]),a.remove(0);if(h){c=c();var k=c.optionsIncludeDestroyed;number!=typeof h.length&&(h=[h]);if(c.optionsCaption){var l=y.createElement(option);
b.a.ca(l,c.optionsCaption);b.k.T(l,I);a.appendChild(l)}d=0;for(var n=h.length;dn;d++){var q=h[d];if(!q!q._destroyk){var l=y.createElement(option),s=function(a,b,c){var d=typeof b;returnfunction==db(a)string==da[b]c},v=s(q,c.optionsValue,q);b.k.T(l,b.a.d(v));q=s(q,c.optionsText,v);b.a.cb(l,q);a.appendChild(l)}}h=a.getElementsByTagName(option);d=k=0;for(n=h.length;dn;d++)0=b.a.i(f,b.k.q(h[d]))&&(b.a.bb(h[d],m),k++);a.scrollTop=g;e&&valuein c&&ea(a,b.a.ua(c.value),m);b.a.ub(a)}}};
b.c.options.sa=__ko.optionValueDomData__;b.c.selectedOptions={initfunction(a,d,c){b.a.n(a,change,function(){var e=d(),f=[];b.a.o(a.getElementsByTagName(option),function(a){a.selected&&f.push(b.k.q(a))});b.g.ea(e,c,value,f)})},updatefunction(a,d){select!=b.a.u(a)&&j(Error(values binding applies only to SELECT elements));var c=b.a.d(d());c&&number==typeof c.length&&b.a.o(a.getElementsByTagName(option),function(a){var d=0=b.a.i(c,b.k.q(a));b.a.bb(a,d)})}};b.c.style={updatefunction(a,
d){var c=b.a.d(d(){}),e;for(e in c)if(string==typeof e){var f=b.a.d(c[e]);a.style[e]=f}}};b.c.submit={initfunction(a,d,c,e){function!=typeof d()&&j(Error(The value for a submit binding must be a function));b.a.n(a,submit,function(b){var c,h=d();try{c=h.call(e,a)}finally{c!==m&&(b.preventDefaultb.preventDefault()b.returnValue=r)}})}};b.c.text={updatefunction(a,d){b.a.cb(a,d())}};b.e.I.text=m;b.c.uniqueName={initfunction(a,d){if(d()){var c=ko_unique_+ ++b.c.uniqueName.ob;b.a.ab(a,
c)}}};b.c.uniqueName.ob=0;b.c.value={initfunction(a,d,c){function e(){h=r;var e=d(),f=b.k.q(a);b.g.ea(e,c,value,f)}var f=[change],g=c().valueUpdate,h=r;g&&(string==typeof g&&(g=[g]),b.a.P(f,g),f=b.a.Ga(f));if(b.a.Z&&(input==a.tagName.toLowerCase()&&text==a.type&&off!=a.autocomplete&&(!a.formoff!=a.form.autocomplete))&&-1==b.a.i(f,propertychange))b.a.n(a,propertychange,function(){h=m}),b.a.n(a,blur,function(){h&&e()});b.a.o(f,function(c){var d=e;b.a.Ob(c,after)&&(d=function(){setTimeout(e,
0)},c=c.substring(5));b.a.n(a,c,d)})},updatefunction(a,d){var c=select===b.a.u(a),e=b.a.d(d()),f=b.k.q(a),g=e!=f;0===e&&(0!==f&&0!==f)&&(g=m);g&&(f=function(){b.k.T(a,e)},f(),c&&setTimeout(f,0));c&&0a.length&&ea(a,e,r)}};b.c.visible={updatefunction(a,d){var c=b.a.d(d()),e=none!=a.style.display;c&&!ea.style.display=!c&&e&&(a.style.display=none)}};b.c.click={initfunction(a,d,c,e){return b.c.event.init.call(this,a,function(){var a={};a.click=d();return a},c,e)}};b.v=function(){};b.v.prototype.renderTemplateSource=
function(){j(Error(Override renderTemplateSource))};b.v.prototype.createJavaScriptEvaluatorBlock=function(){j(Error(Override createJavaScriptEvaluatorBlock))};b.v.prototype.makeTemplateSource=function(a,d){if(string==typeof a){d=dy;var c=d.getElementById(a);cj(Error(Cannot find template with ID +a));return new b.l.h(c)}if(1==a.nodeType8==a.nodeType)return new b.l.O(a);j(Error(Unknown template type +a))};b.v.prototype.renderTemplate=function(a,b,c,e){a=this.makeTemplateSource(a,e);
return this.renderTemplateSource(a,b,c)};b.v.prototype.isTemplateRewritten=function(a,b){return this.allowTemplateRewriting===rmthis.makeTemplateSource(a,b).data(isRewritten)};b.v.prototype.rewriteTemplate=function(a,b,c){a=this.makeTemplateSource(a,c);b=b(a.text());a.text(b);a.data(isRewritten,m)};b.b(templateEngine,b.v);var qa=([a-z]+d(s+(!data-bind=)[a-z0-9-]+(=([^]'[^']')))s+)data-bind=(['])([sS])5gi,ra=x3c!--skobs([sS])s--x3eg;b.za={vbfunction(a,
d,c){d.isTemplateRewritten(a,c)d.rewriteTemplate(a,function(a){return b.za.Gb(a,d)},c)},Gbfunction(a,b){return a.replace(qa,function(a,e,f,g,h,k,l){return W(l,e,b)}).replace(ra,function(a,e){return W(e,x3c!-- ko --x3e,b)})},kbfunction(a){return b.s.ra(function(d,c){d.nextSibling&&b.Fa(d.nextSibling,a,c)})}};b.b(__tr_ambtns,b.za.kb);b.l={};b.l.h=function(a){this.h=a};b.l.h.prototype.text=function(){var a=b.a.u(this.h),a=script===atexttextarea===avalueinnerHTML;if(0==arguments.length)return this.h[a];
var d=arguments[0];innerHTML===ab.a.ca(this.h,d)this.h[a]=d};b.l.h.prototype.data=function(a){if(1===arguments.length)return b.a.f.get(this.h,templateSourceData_+a);b.a.f.set(this.h,templateSourceData_+a,arguments[1])};b.l.O=function(a){this.h=a};b.l.O.prototype=new b.l.h;b.l.O.prototype.text=function(){if(0==arguments.length){var a=b.a.f.get(this.h,__ko_anon_template__){};a.Aa===I&&a.ia&&(a.Aa=a.ia.innerHTML);return a.Aa}b.a.f.set(this.h,__ko_anon_template__,{Aaarguments[0]})};b.l.h.prototype.nodes=
function(){if(0==arguments.length)return(b.a.f.get(this.h,__ko_anon_template__){}).ia;b.a.f.set(this.h,__ko_anon_template__,{iaarguments[0]})};b.b(templateSources,b.l);b.b(templateSources.domElement,b.l.h);b.b(templateSources.anonymousTemplate,b.l.O);var O;b.wa=function(a){a!=I&&!(a instanceof b.v)&&j(Error(templateEngine must inherit from ko.templateEngine));O=a};b.va=function(a,d,c,e,f){c=c{};(c.templateEngineO)==I&&j(Error(Set a template engine before calling renderTemplate));
f=freplaceChildren;if(e){var g=N(e);return b.j(function(){var h=d&&d instanceof b.zdnew b.z(b.a.d(d)),k=function==typeof aa(h.$data,h)a,h=T(e,f,k,h,c);replaceNode==f&&(e=h,g=N(e))},p,{Kafunction(){return!g!b.a.X(g)},Wg&&replaceNode==fg.parentNodeg})}return b.s.ra(function(e){b.va(a,d,c,e,replaceNode)})};b.Mb=function(a,d,c,e,f){function g(a,b){U(b,k);c.afterRender&&c.afterRender(b,a)}function h(d,e){k=f.createChildContext(b.a.d(d),c.as);k.$index=e;var g=function==typeof a
a(d,k)a;return T(p,ignoreTargetNode,g,k,c)}var k;return b.j(function(){var a=b.a.d(d)[];undefined==typeof a.length&&(a=[a]);a=b.a.fa(a,function(a){return c.includeDestroyeda===Ia===p!b.a.d(a._destroy)});b.r.K(b.a.$a,p,[e,a,h,c,g])},p,{We})};b.c.template={initfunction(a,d){var c=b.a.d(d());if(string!=typeof c&&!c.name&&(1==a.nodeType8==a.nodeType))c=1==a.nodeTypea.childNodesb.e.childNodes(a),c=b.a.Hb(c),(new b.l.O(a)).nodes(c);return{controlsDescendantBindingsm}},updatefunction(a,
d,c,e,f){d=b.a.d(d());c={};e=m;var g,h=p;string!=typeof d&&(c=d,d=c.name,ifin c&&(e=b.a.d(c[if])),e&&ifnotin c&&(e=!b.a.d(c.ifnot)),g=b.a.d(c.data));foreachin ch=b.Mb(da,e&&c.foreach[],c,a,f)e(f=datain cf.createChildContext(g,c.as)f,h=b.va(da,f,c,a))b.e.Y(a);f=h;(g=b.a.f.get(a,__ko__templateComputedDomDataKey__))&&function==typeof g.B&&g.B();b.a.f.set(a,__ko__templateComputedDomDataKey__,f&&f.pa()fI)}};b.g.Q.template=function(a){a=b.g.aa(a);return 1==a.length&&a[0].unknown
b.g.Eb(a,name)pThis template engine does not support anonymous templates nested within its templates};b.e.I.template=m;b.b(setTemplateEngine,b.wa);b.b(renderTemplate,b.va);b.a.Ja=function(a,b,c){a=a[];b=b[];return a.length=b.lengthS(a,b,added,deleted,c)S(b,a,deleted,added,c)};b.b(utils.compareArrays,b.a.Ja);b.a.$a=function(a,d,c,e,f){function g(a,b){t=l[b];w!==b&&(z[a]=t);t.na(w++);M(t.M);s.push(t);A.push(t)}function h(a,c){if(a)for(var d=0,e=c.length;de;d++)c[d]&&b.a.o(c[d].M,
function(b){a(b,d,c[d].U)})}d=d[];e=e{};var k=b.a.f.get(a,setDomNodeChildrenFromArrayMapping_lastMappingResult)===I,l=b.a.f.get(a,setDomNodeChildrenFromArrayMapping_lastMappingResult)[],n=b.a.V(l,function(a){return a.U}),q=b.a.Ja(n,d),s=[],v=0,w=0,B=[],A=[];d=[];for(var z=[],n=[],t,D=0,C,E;C=q[D];D++)switch(E=C.moved,C.status){case deletedE===I&&(t=l[v],t.j&&t.j.B(),B.push.apply(B,M(t.M)),e.beforeRemove&&(d[D]=t,A.push(t)));v++;break;case retainedg(D,v++);break;case addedE!==I
g(D,E)(t={UC.value,nab.m(w++)},s.push(t),A.push(t),k(n[D]=t))}h(e.beforeMove,z);b.a.o(B,e.beforeRemoveb.Ab.removeNode);for(var D=0,k=b.e.firstChild(a),H;t=A[D];D++){t.Mb.a.extend(t,ha(a,c,t.U,f,t.na));for(v=0;q=t.M[v];k=q.nextSibling,H=q,v++)q!==k&&b.e.Pa(a,q,H);!t.Ab&&f&&(f(t.U,t.M,t.na),t.Ab=m)}h(e.beforeRemove,d);h(e.afterMove,z);h(e.afterAdd,n);b.a.f.set(a,setDomNodeChildrenFromArrayMapping_lastMappingResult,s)};b.b(utils.setDomNodeChildrenFromArrayMapping,b.a.$a);b.C=function(){this.allowTemplateRewriting=
r};b.C.prototype=new b.v;b.C.prototype.renderTemplateSource=function(a){var d=!(9b.a.Z)&&a.nodesa.nodes()p;if(d)return b.a.L(d.cloneNode(m).childNodes);a=a.text();return b.a.ta(a)};b.C.oa=new b.C;b.wa(b.C.oa);b.b(nativeTemplateEngine,b.C);b.qa=function(){var a=this.Db=function(){if(undefined==typeof F!F.tmpl)return 0;try{if(0=F.tmpl.tag.tmpl.open.toString().indexOf(__))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,c,e){e=e{};2a&&j(Error(Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.));
var f=b.data(precompiled);f(f=b.text(),f=F.template(p,{{ko_with $item.koBindingContext}}+f+{{ko_with}}),b.data(precompiled,f));b=[c.$data];c=F.extend({koBindingContextc},e.templateOptions);c=F.tmpl(f,b,c);c.appendTo(y.createElement(div));F.fragments={};return c};this.createJavaScriptEvaluatorBlock=function(a){return{{ko_code ((function() { return +a+ })()) }}};this.addTemplate=function(a,b){y.write(script type='texthtml' id='+a+'+b+x3cscript)};0a&&(F.tmpl.tag.ko_code=
{open__.push($1  '');},F.tmpl.tag.ko_with={openwith($1) {,close} })};b.qa.prototype=new b.v;w=new b.qa;0w.Db&&b.wa(w);b.b(jqueryTmplTemplateEngine,b.qa)}function===typeof require&&object===typeof exports&&object===typeof moduleL(module.exportsexports)function===typeof define&&define.amddefine([exports],L)L(x.ko={});m;
})();