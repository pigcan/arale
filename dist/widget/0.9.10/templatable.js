define("#widget/0.9.10/templatable",["handlebars","$","./daparser"],function(a,b,c){function h(a){return e(k(a))}function k(a){return a.replace(i,"<!--$1-->")}function l(a){return a.replace(j,"$1")}function m(a){return a[0].outerHTML!==undefined?a[0].outerHTML:a.wrap("<div></div>").html()}var d=a("handlebars"),e=a("$"),f=a("./daparser"),g={templateHelpers:null,templateElement:null,parseElementFromTemplate:function(){this.templateElement=h(this.template),this.get("data-api")&&(this.dataset=f.parse(this.templateElement[0]),this.template=this._getTemplate()),this.element=e(this.compile())},compile:function(a,b){a||(a=this.template),b||(b=this.model);var c=this.templateHelpers;if(c)for(var e in c)c.hasOwnProperty(e)&&d.registerHelper(e,c[e]);var f=d.compile(a)(b);if(c)for(e in c)c.hasOwnProperty(e)&&delete d.helpers[e];return f},renderPartial:function(a,b){var c=this._getTemplate(a),d=this.compile(c,b);return this.$(a).html(d),this},_getTemplate:function(a){var b;return a?b=this.templateElement.find(a).html():b=m(this.templateElement),l(b)}};c.exports=g;var i=/({{[^{}]+}})/g,j=/(?:<|&lt;)!--({{[^{}]+}})--(?:>|&gt;)/g});