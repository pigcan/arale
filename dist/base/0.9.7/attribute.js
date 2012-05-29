define("#base/0.9.7/attribute",[],function(a,b){function e(a){return c.call(a)==="[object String]"}function f(a){return a&&c.call(a)==="[object Object]"&&"isPrototypeOf"in a}function g(a,b){var c,e;for(c in b)e=b[c],d(e)?e=e.slice():f(e)&&(e=g(a[c]||{},e)),a[c]=e;return a}function i(a){a=g({},a);for(var b in a){var c=a[b];if(f(c)&&j(c,h))continue;a[b]={value:c}}return a}function j(a,b){for(var c=0,d=b.length;c<d;c++)if(a.hasOwnProperty(b[c]))return!0;return!1}function k(a){return"_onChange"+a.charAt(0).toUpperCase()+a.substring(1)}function l(a,b){var c=[],d=a.constructor.prototype;while(d)d[b]&&c.unshift(d[b]),d=d.constructor.superclass;var e={};for(var f=0,h=c.length;f<h;f++)e=g(e,i(c[f]));return e}function m(a,b){if(a===b)return!0;if(a==null||b==null)return a===b;var d=c.call(a);if(d!=c.call(b))return!1;switch(d){case"[object String]":return a==String(b);case"[object Number]":return a!=+a?b!=+b:a==0?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase;case"[object Array]":var e=a.toString(),g=b.toString();return e.indexOf("[object")===-1&&g.indexOf("[object")===-1&&e===g}if(typeof a!="object"||typeof b!="object")return!1;if(f(a)&&f(b)){for(var h in a)if(a[h]!==b[h])return!1;return!0}return!1}b.initAttrs=function(a){this.hasOwnProperty("attrs")||(this.attrs={});var b=this.attrs;g(b,l(this,"attrs"));var c={silent:!0};if(a)for(var d in a)this.set(d,a[d],c);for(d in b){var e=k(d);this[e]&&this.on("change:"+d,this[e])}},b.get=function(a){var b=this.attrs[a]||{},c=b.value;return b.getter?b.getter.call(this,c,a):c},b.set=function(a,b,c){var d={};e(a)?d[a]=b:(d=a,c=b),c||(c={});var h=this.attrs,i=c.silent,j=h.__pending||(h.__pending={});for(a in d){var k=h[a]||(h[a]={});b=d[a];if(k.readOnly)throw"This attribute is readOnly: "+a;if(k.validator){var l=k.validator.call(this,b,a);if(l!==!0){c.error&&c.error.call(this,l);continue}}k.setter&&(b=k.setter.call(this,b,a));var n=this.get(a);f(n)&&f(b)&&(b=g(g({},n),b)),h[a].value=b,m(n,b)||(i?j[a]=[b,n]:this.trigger("change:"+a,b,n,a))}},b.change=function(){var a=this.attrs.__pending;if(a){for(var b in a){var c=a[b];this.trigger("change:"+b,c[0],c[1],b)}delete this.attrs.__pending}};var c=Object.prototype.toString,d=Array.isArray||function(a){return c.call(a)==="[object Array]"},h=["value","getter","setter","validator","readOnly"]});