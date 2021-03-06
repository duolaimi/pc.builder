// Generated by CoffeeScript 1.9.1
define(['_lib/lazyload', './index/slider', './index/vmctrl'], function(lazyload, Slider, vmctrl) {
  var init;
  init = function() {
    Slider.init();
    $('img').lazyload({
      placeholder: STATIC_PATH + "/_img/dot.png"
    });
    vmctrl.run(function() {
    $(window).resize(function() {
        $("#iBar").css({
          'height': $(window).height()
        });
      });
    });
  };
  init();
});