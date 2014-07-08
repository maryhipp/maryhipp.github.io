var AboutView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    this.html = $("#about-template").html();
  },

  render: function(){
    $('#contact-link').removeClass('current-nav');
    $('#work-link').removeClass('current-nav');
    $('#skills-link').removeClass('current-nav')
    $('#about-link').addClass('current-nav');
    return this.$el.html(this.html);
  },

});
