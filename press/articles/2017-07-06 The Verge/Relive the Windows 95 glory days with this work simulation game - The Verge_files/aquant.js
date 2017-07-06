/*
 Quantcast measurement tag
 Copyright (c) 2008-2017, Quantcast Corp.
*/
window.__qc=function(c){if(c.__qc)return c.__qc;var p=c.document,z=c.navigator,R="4dcfa7079941 127fdf7967f31 588ab9292a3f 32f92b0727e5 22f9aa38dfd3 a4abfe8f3e04 18b66bc1325c 958e70ea2f28 bdbf0cb4bbb 65118a0d557 40a1d9db1864 18ae3d985046 3b26460f55d".split(" "),ga=!1,S=0,T=[],Aa=[],U=[],Ba={tcYgbCswcTSeq:1,"01-0VIaSjnOLg":1,aD1qr93XuF6aC:1,"56WJ0KtIxWJ_2":1,T1nhLcmCjVzQS:1,zddNYNtUkUhdQ:1,"59TntzuqummDw":1,P7x87XHnVfbWr:1,HGAVM7nQJ_sep:1,"w9vzus-GKCA0U":1,"00TsOkvHvnsZU":1,effSsmMYCbAck:1,PFW5FesqXn206:1,
"0dYLvhSGGqUWo":1,c1rF4kxgLUzNc:1,"5brKQLtleyIQU":1,"mEzuYq24VEJ-3":1,"57OGVHgSOoedo":1,"e7wR0qsM6-pDa":1,"8tgFhCTDYhV2V":1,"82MbSinIaQJw2":1,buQ2dAnrdTGCS:1,"49SVsgIZlUqPk":1,eeFYJkotb1rUU:1,EzVU5HfAMVqEV:1,"45nh8QKbsf2Xk":1,sLJ2v5QaN4z2Y:1,"5cvC4NOeGmtNA":1,"573scDfDoUH6o":1,"915Y6SMHQQJHI":1,z0zMG4nCgXzzj:1,"124BfeS-bwiSE":1,"ZzStSGgW6hG-4":1,KUMT4fYgcdEeg:1,d9vfr8QTWnv1E:1,fug7wP0GuN1h6:1,cd12aNCzw_ZaB:1,"51zXP5Cc9sxvQ":1,"4dIM5nVs2rFio":1,"8fZNjMQsH1Ews":1,C6W3aFrWFMS7m:1,N7ekbgK3G3jrt:1,dfQGRefil9mes:1,
"9axVJDmh4EHIM":1,NPcfSf1E0V1T1:1,"72V4-XKpaKDrE":1,"8cV3w6ZJH0sXI":1,sHwqAaPHqVjee:1,b15U9CAASyBMc:1},v=[],w={},C=0,D=[],x=null,V={},r={},ha=null,s,W=[].slice,ia,X,I,k,y,Y,J,ja,ka,la,E,Z,K,L,ma,F,na,oa,pa,qa,t,ra,A,M,sa,$,ta,ua,aa,u,va,ba,N,O,wa,xa,P,ya,ca,da,za,ea,B,G,H,Q,fa,n=function(a){try{return{init:L,hash:K,rules:wa,hasRules:P,defaults:za,__qc:function(){return!0}}[a].apply(null,W.call(arguments,1))}catch(b){return!1}};n.evts=0;n.v=2;n.SD=R;n.qpixelsent=[];O=function(a){var b=a?a.length||
0:0,d;for(d=0;d<b;d++)if(!a[d])return!1;return!0};da=function(a){(a=a||c._qacct)&&(aa(v,a)||v.push(a))};aa=function(a,b){var d=a.length,e;for(e=0;e<d;e++)if(a[e]===b)return!0;return!1};ba=function(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()};N=function(a){var b,d;b=ba(a);if("array"===b)return a.slice(0);if("object"===b){b={};for(d in a)a.hasOwnProperty(d)&&(b[d]=a[d]);return b}return"string"===b?""+a:a};P=function(a){return aa(U,a)};za=function(a,b){var d;a&&((d=V[a])&&(b=
Q(b,d)),b.qacct&&delete b.qacct,V[a]=b)};ea=function(a){var b,d;if(k(a))for(b in a)if("string"==typeof a[b]){b=a.event||"load";d=a.media||"webpage";"rule"!==b&&"load"!==b||"webpage"!==d&&"ad"!==d?t(a):(d=a.qacct||c._qacct,a.qacct=d,b=(b=r[d])?Q(b,a):a,r[d]=b);da(a.qacct);break}else"object"==typeof a[b]&&null!=a[b]&&ea(a[b])};Q=function(a,b){var d={};d.qacct=a.qacct||b.qacct;d.event="load"===a.event||"load"===b.event?"load":a.event&&b.event?a.event||b.event:null;d.media=null;d.media="webpage"===a.media||
"webpage"===b.media?"webpage":"ad"===a.media||"ad"===b.media?"ad":a.media||b.media;$(d,a,b);$(d,b,a);d.event||delete d.event;d.media||delete d.media;return d};$=function(a,b,d){var e,c,h,q,k,l;for(e in b)b.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&(c=b[e],h=d[e],q="",k=!!c&&"string"==typeof c,l=!!h&&"string"==typeof h,k&&(q=c),k&&l&&(q+=","),l&&(q+=h),a[e]=q)};B=function(){var a=[],b,d;if(!(0<C)){va();for(b in r)r.hasOwnProperty(b)&&r[b]&&(d=r[b],a.push(d),delete r[b]);1==a.length&&t(a[0]);1<a.length&&
t(a)}};G=function(a){var b=[],d,c;for(d=0;d<a.length;d++)c=a[d],Ba.hasOwnProperty(c.substring(2))?w[c]=5:P(c)||b.push(c);if(0===b.length)B();else for(d=0;d<b.length;d++)c=b[d],U.push(c),ta(c)};ua=function(){for(var a;D[0]&&("loaded"==D[0].readyState||"complete"==D[0].readyState);)a=D.shift(),a.onreadystatechange=null,x.parentNode.insertBefore(a,x),H()};ta=function(a){var b,d;b=("https:"===p.location.protocol?"https://":"http://")+"rules.quantcount.com/rules-"+a+".js";x=x||p.scripts[0];C++;d=p.createElement("script");
"async"in d?(d.src=b,d.async=!1,d.onload=function(){w[a]=0;H()},d.onerror=function(){w[a]=1;H()},x.parentNode.insertBefore(d,x)):d.readyState?(w[a]=2,D.push(d),d.onreadystatechange=ua,d.src=b):(w[a]=4,H())};H=function(){C-=0<C?1:0;B()};wa=function(){var a=!0,b,d,c;if(arguments.length){c=function(b){a?ea(b):t(b,!0)};for(b=0;b<arguments.length;b++)d=W.call(arguments[b],0),d.splice(1,0,c),xa.apply(null,d);a=!1;ga&&B()}};xa=function(a,b){var d=[],c=[],g=b||t,h,q,k,l,m;if((h=W.call(arguments,2))&&h.length){q=
h[0]||O;k=h[1];l=h[2];h=l.length;for(m=0;m<h;m++)d.push(!1),c.push(null);d={p:a,f:d,r:q,c:l,a:k,v:c};P(a)||U.push(a);Aa.push(d);ya(d,g)}};ya=function(a,b){var d=a?a.c?a.c.length:0:0,c;for(c=0;c<d;c++)(function(d){var c,e;try{c=a.c[d][0],e=a.c[d].slice(1),e.splice(0,0,function(c){a.f[d]=!0;a.v[d]=c;ca(a,b)}),c.apply(null,e)}catch(k){a.f[d]=!0,a.v[d]=!1,ca(a,b)}})(c)};ca=function(a,b){var d=a.a,c=a.v,g=a.r||O,h,k,n,l,m,f;(h=O(a.f))&&(h=h&&g(c));if(h)for(c=0;c<d.length;c++)try{k=d[c][0];n=1<d[c].length?
d[c].slice(1):[];n=n.concat(a.v);l=k.apply(null,n);m={qacct:a.p,event:"rule"};for(f in l)l.hasOwnProperty(f)&&"qacct"!==f&&(m[f]=l[f]);b(m)}catch(p){}};ia=function(){return X(0)!==X(6)?1:0};X=function(a){a=new Date(2E3,a,1,0,0,0,0);var b=a.toGMTString(),b=new Date(b.substring(0,b.lastIndexOf(" ")-1));return a-b};I=function(a){return a.replace(/\./g,"%2E").replace(/,/g,"%2C")};y="function"===typeof encodeURIComponent?encodeURIComponent:I;k=function(a){return"undefined"!=typeof a&&null!=a};Y=function(){return Math.round(2147483647*
Math.random())};J=function(a){var b="",d=p.cookie,c;if(!d)return b;c=d.indexOf(a+"\x3d");a=c+a.length+1;-1<c&&(b=d.indexOf(";",a),0>b&&(b=d.length),b=d.substring(a,b));return b};ja=function(){var a="",b=E(),d,c,g;if(1===S)return";fpan\x3du;fpa\x3d";d=K(b);for(c=0;c<R.length;c++)if(R[c]===d)return";fpan\x3du;fpa\x3d";d=new Date;c=J("__qca");if(0<c.length){try{g=+c.split("-")[2],338688E5<d-g&&(p.cookie=["__qca\x3d",c,"; expires\x3d",(new Date(g+338688E5)).toGMTString(),"; path\x3d/; domain\x3d",b].join(""))}catch(h){}a+=
";fpan\x3d0;fpa\x3d"+c}0===J("__qca").length&&(c="P0-"+Y()+"-"+d.getTime(),p.cookie=["__qca\x3d",c,"; expires\x3d",(new Date(d.getTime()+338688E5)).toGMTString(),"; path\x3d/; domain\x3d",b].join(""),c=J("__qca"),a=0<c.length?a+(";fpan\x3d1;fpa\x3d"+c):a+";fpan\x3du;fpa\x3d");return a};ka=function(a){p.cookie=a+"\x3d; expires\x3dThu, 01 Jan 1970 00:00:01 GMT; path\x3d/; domain\x3d"+E()};E=function(){var a,b,c,e;a=p.domain;"www."===a.substring(0,4)&&(a=a.substring(4,a.length));b=a.split(".");e=b.length;
if(3>e)return a;c=b[e-1];return 3>c.length?a:a=b[e-2]+"."+c};Z=function(a,b){var c;for(c=0;c<b.length;c++)a^=b.charCodeAt(c),a+=(a<<1)+(a<<4)+(a<<7)+(a<<8)+(a<<24);return a};K=function(a){var b;b=Z(2166136261,a);a=Z(3386659096,a);return Math.round(Math.abs(b*a)/65536).toString(16)};M=function(a,b,d){var e="",g=c._qacct,h=null,q="webpage",p="load",l={},m,f,g=b?b.qacct||c._qacct:c._qacct;m=r[g];b?m&&(b=Q(b,m)):b=m;g&&delete r[g];if(null!=b)for(f in b)l[f]=!0,b.hasOwnProperty(f)&&"string"===typeof f&&
"string"===typeof b[f]&&("uid"===f||"uh"===f?(ma()||(h=K(b[f])),delete b[f]):"qacct"!==f&&(0<b[f].length?e+=";"+f+a+"\x3d"+y(b[f]):l[f]=!1,"media"===f&&(q=b[f]),"event"===f&&(p=b[f])));if("string"!==typeof g){if(!k(c._qacct)||0===c._qacct.length)return"";g=c._qacct}if(g&&(m=V[g]))for(f in m)"string"===typeof f&&m.hasOwnProperty(f)&&!l[f]&&(e+=";"+f+a+"\x3d"+y(m[f]),"media"===f&&(q=m[f]),"event"===f&&(p=m[f]));l=w[g];k(l)||(l=3);e+=";rf"+a+"\x3d"+l;"string"===typeof h&&(b.uh=h,e+=";uh"+a+"\x3d"+y(h));
if("webpage"===q&&"load"===p){for(b=0;b<n.qpixelsent.length;b++)if(n.qpixelsent[b]===g&&!d)return"";n.qpixelsent.push(g)}"ad"===q&&(S=1);return";a"+a+"\x3d"+g+e};sa=function(){var a=p.getElementsByTagName("meta"),b="",c,e,g,h;for(c=0;c<a.length;c++){g=a[c];if(1E3<=b.length)return b;k(g)&&k(g.attributes)&&k(g.attributes.property)&&k(g.attributes.property.value)&&k(g.content)&&(e=g.attributes.property.value,g=g.content,3<e.length&&"og:"===e.substring(0,3)&&(0<b.length&&(b+=","),h=80<g.length?80:g.length,
b+=I(e.substring(3,e.length))+"."+I(g.substring(0,h))))}return y(b)};la=function(a){return"object"===typeof a?["p","approved"===a.consent?"a":"d","asserted"===a.source?"e":"i"].join(""):""};ma=function(){var a=!1;k(c.external)&&(a=c.external,a="function"===typeof a.InPrivateFilteringEnabled&&!0===a.InPrivateFilteringEnabled());return a||"1"==z.doNotTrack||"yes"===z.doNotTrack||"1"==z.msDoNotTrack};t=function(a,b){var d="function"===typeof encodeURIComponent?"n":"s",e=Y(),g="",h="",q="",u="",l="",
m="u",f="1",s=0,t=[],r,v,w,x;S=0;k(n.qpixelsent)||(n.qpixelsent=[]);if(k(a))for(r in a)if("string"==typeof a[r]){h=M("",a,b);break}else"object"==typeof a[r]&&null!=a[r]&&(++s,h+=M("."+s,a[r],b));else"string"===typeof _qacct&&(h=M("",null,b));0!==h.length&&(s=z.cookieEnabled?"1":"0","undefined"!=typeof z.javaEnabled&&(m=z.javaEnabled()?"1":"0"),k(c._qmeta)&&(q=";m\x3d"+y(c._qmeta),c._qmeta=null),self.screen&&(g=screen.width+"x"+screen.height+"x"+screen.colorDepth),v=new Date,w=ia(),x=ja(),c.location&&
c.location.href&&(u=y(c.location.href)),p&&p.referrer&&(l=y(p.referrer)),c.self===c.top&&(f="0"),r=sa(),t.push("/pixel;r\x3d"+e+h+x+";ns\x3d"+f+";ce\x3d"+s),t.push(";je\x3d"+m+";sr\x3d"+g+";enc\x3d"+d+";dst\x3d"+w+";et\x3d"+v.getTime()+";tzo\x3d"+v.getTimezoneOffset()+q+";ref\x3d"+l+";url\x3d"+u+";ogl\x3d"+r),T.push(t),A())};ra=function(a){var b=new Image;a=[c.location.protocol,"//pixel.",na(s)?"quantserve.com":"quantcount.com",a[0],";cm\x3d",la(s),a[1]].join("");b.alt="";b.src=a;b.onload=function(){b&&
"number"==typeof b.width&&3===b.width&&ka("__qca")}};A=function(){if(s)for(;T.length;)ra(T.shift());else qa()};na=function(a){return!0===a||1===a||1===a||k(a)&&"approved"===a.consent?!0:!1};qa=function(){if(!k(s)){if(c.top===c.self){if("object"===typeof PrivacyManagerAPI&&"function"===typeof PrivacyManagerAPI.callApi){oa("getConsent","advertising");return}}else if(c.postMessage&&"object"===typeof JSON){pa("getConsent","advertising");return}s=1}A()};oa=function(a,b){s=PrivacyManagerAPI.callApi(a,"quantserve.com",
E(),"truste.com",b);A()};pa=function(a,b){var d={PrivacyManagerAPI:{timestamp:(new Date).getTime(),action:a,self:"quantserve.com",domain:E(),authority:"truste.com",type:b}};if(c.addEventListener)c.addEventListener("message",F,!1);else if(c.attachEvent)c.attachEvent("onmessage",F);else{s=!0;A();return}try{c.top.postMessage(JSON.stringify(d),"*")}catch(e){}ha=setTimeout(function(){k(s)||(s=!0,A())},25)};F=function(a){var b=null;if(a.source===window.top){try{b="object"===typeof JSON&&JSON.parse(a.data)}catch(d){}b&&
"object"===typeof b.PrivacyManagerAPI&&(clearTimeout(ha),c.removeEventListener?window.removeEventListener("message",F,!1):c.detachEvent&&window.detachEvent("onmessage",F),s=b.PrivacyManagerAPI,A())}};fa=function(){var a=arguments,b,c;u([].slice.call(a));for(c=0;c<a.length;c++)b=a[c],t(b);v.length?G(v.slice(0)):B()};u=function(a){var b=ba(a);if("array"===b)for(b=0;b<a.length;b++)u(a[b]);else"object"===b&&da(a.qacct||c._qacct)};va=function(){var a;c._qevents.length||c.ezt.length||"undefined"===typeof _qacct||
t({qacct:c._qacct});if(!n.evts){for(a in c._qevents)c._qevents.hasOwnProperty(a)&&t(c._qevents[a]);for(a in c.ezt)c.ezt.hasOwnProperty(a)&&t(c.ezt[a]);c._qevents={push:fa};c.ezt.push=function(){var a=arguments,d;if(k(c.queueManager))for(d=0;d<a.length;d++)c.queueManager.push(a[d]);else fa.apply(this,arguments)};n.evts=1}};L=function(){var a;k(c._qevents)||(c._qevents=[]);k(c.ezt)||(c.ezt=[]);c._qoptions&&(a=N(c._qoptions),u(c._qoptions),c._qevents.push(a),c._qoptions=null);c.qcdata&&(a=N(c.qcdata),
u(c.qcdata),c._qevents.push(a),c.qcdata=null);c.smarttagdata&&(a=N(c.smarttagdata),u(c.smarttagdata),c._qevents.push(a),c.smarttagdata=null);n.evts||(c._qevents.push=function(){u([].slice.call(arguments));G(v.slice(0));return[].push.apply(c._qevents,arguments)},c.ezt.push=function(){u([].slice.call(arguments));G(v.slice(0));return[].push.apply(c.ezt,arguments)});u(c.ezt);u(c._qevents);u({qacct:c._qacct});c._qoptions=null;v.length?G(v.slice(0)):B();ga=!0};c.quantserve=c.quantserve||L;n.quantserve=
L;return n}(window);try{__qc("hasRules","p-d9vfr8QTWnv1E")||function(c,p,z){}("p-d9vfr8QTWnv1E",window,document)}catch(nfe$$3){}quantserve();try{window.smarttagdata&&window._qevents.push(window.smarttagdata),window.qcdata&&window._qevents.push(window.qcdata)}catch(nfe$$4){};