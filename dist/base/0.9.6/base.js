define("#base/0.9.6/base",["class","events","./aspect","./attribute"],function(a,b,c){function k(a){var b=a.match(j),c=b[1]?"change:":"";return c+=b[2].toLowerCase()+b[3],c}var d=a("class"),e=a("events"),f=a("./aspect"),g=a("./attribute"),h=d.create({Implements:[e,f,g],initialize:function(a){for(var b in a){var c=a[b],d;typeof c=="function"&&(d=b.match(i))&&(this[d[1]](k(d[2]),c),delete a[b])}this.initAttrs(a)},destroy:function(){for(var a in this)this.hasOwnProperty(a)&&delete this[a]}});c.exports=h;var i=/^(on|before|after)([A-Z].*)$/,j=/^(Change)?([A-Z])(.*)/});