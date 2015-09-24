import Ember from 'ember';

export default Ember.Controller.extend({
  init: function(){
    $(window).bind("resize", function () {
        if ($(this).width() < 769) {
            $('body').addClass('body-small')
        } else {
            $('body').removeClass('body-small')
        }
    });
    // $('#side-menu').metisMenu();
  },

  actions: {
    toggleMiniNavbar(){
      $("body").toggleClass("mini-navbar");
      this.smoothlyMenu();
    }
  },

  smoothlyMenu: function() {
      if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
          // Hide menu in order to smoothly turn on when maximize menu
          $('#side-menu').hide();
          // For smoothly turn on menu
          setTimeout(
              function () {
                  $('#side-menu').fadeIn(500);
              }, 100);
      } else if ($('body').hasClass('fixed-sidebar')) {
          $('#side-menu').hide();
          setTimeout(
              function () {
                  $('#side-menu').fadeIn(500);
              }, 300);
      } else {
          // Remove all inline style from jquery fadeIn function to reset menu state
          $('#side-menu').removeAttr('style');
      }
  }
})
