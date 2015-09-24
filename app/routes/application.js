import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    if (false) {
      this.render('application');
    } else {
      this.render('home');
    }
  }

});
