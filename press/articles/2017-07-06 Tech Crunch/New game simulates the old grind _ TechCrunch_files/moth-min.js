window.grvBeaconActions=window.grvBeaconActions||[],window.gravityInsightsParams&&2!==gravityInsightsParams.v&&grvBeaconActions.push(gravityInsightsParams);var GravityInsights=function(a){function b(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=encodeURIComponent(c)+"="+encodeURIComponent(a[c])+"&");return b.length?b.substr(0,b.length-1):b}function c(a,c){var e=d(a,c),f=document.createElement("script");f.src=k+"/log?"+b(e),f.type="text/javascript";var g=document.getElementsByTagName("head")[0]||document.documentElement;g.insertBefore(f,g.firstChild)}function d(a,b){var c=new Date,d=document.getElementsByTagName("title")[0],e={cbust:c.getMilliseconds()+"-"+c.getSeconds(),site_guid:a.site_guid,action:g(a),user_guid:b,referrer:document.referrer,browser_useragent:navigator.userAgent,OS:h(),href:location.href,url:i(a),article_title:null==d?"":d.innerHTML};return a.super_site_guid&&(e.super_site_guid=a.super_site_guid),null!=a.thread_id&&(e.thread_id=a.thread_id),null!=a.forum_id&&(e.forum_id=a.forum_id),null!=a.user_id&&(e.user_id=a.user_id),null!=a.external_user_id&&(e.external_user_id=a.external_user_id),null!=a.article_id&&(e.article_id=a.article_id),null!=a.type&&(e.type=a.type),e}function e(){var a=document.createElement("script");a.src=k+"/initialize",a.type="text/javascript",a.async=!0;var b=document.getElementsByTagName("head")[0]||document.documentElement;b.insertBefore(a,b.firstChild)}function f(a){var b=encodeURI(a)+"=",c=document.cookie||"",d=c.indexOf(b);if(d==-1)return null;var e=d+b.length,f=c.indexOf(";",e),g=c.substring(e,f==-1?c.length:f);return decodeURI(g)}function g(a){return a.action||"beacon"}function h(){var a="Unknown OS";return navigator.appVersion.indexOf("Win")!==-1&&(a="Windows"),navigator.appVersion.indexOf("Mac")!==-1&&(a="MacOS"),navigator.appVersion.indexOf("X11")!==-1&&(a="UNIX"),navigator.appVersion.indexOf("Linux")!==-1&&(a="Linux"),a}function i(a){if(a.beaconCanonicalUrl)return a.beaconCanonicalUrl;for(var b=document.getElementsByTagName("link"),c=b.length,d="",e=0;e<c;e++){if(d=b[e].getAttribute("rel"),d&&0===d.indexOf("canonical")&&(b[e].getAttribute("href")||"").replace(/^\s+|\s+$/g,""))return b[e].getAttribute("href");if(e===c)break}return location.href}function j(a){var b,c=a?a.replace(/^\W*/,""):"";return c?(b=window.location.hostname.indexOf(c,window.location.hostname.length-c.length)!==-1,b?"; domain="+a:""):""}var k="https:"==document.location.protocol?"https://secure-api.gravity.com/v1/beacons":"http://rma-api.gravity.com/v1/beacons",l=f("grvinsights");if(l)for(;a.length;){var m=a.pop();c(m,l)}else e();return{cc:function(a,b,d){if(""!==a){var e=33696e6,f=new Date;f.setTime(f.getTime()+e);var g="; expires="+f.toUTCString(),h=j(d);for(document.cookie=a+"="+b+g+h+"; path=/";window.grvBeaconActions&&grvBeaconActions.length;){var i=grvBeaconActions.pop();c(i,b)}}},readCookie:f,beaconQueryParams:d,paramsToQueryString:b}}(grvBeaconActions);