// Generated by CoffeeScript 1.9.1
define('mods/ggmod/poptips',['_base/class','_tpl/ggmod'],function(Class, Tpl) {
  return Class.create({
    initialize: function() {
      var $body;
      $body = $('body');
      this.tpl_poptips = $(Tpl._poptips);
      return this.tpl_poptips.appendTo($body);
    }
  });
});
