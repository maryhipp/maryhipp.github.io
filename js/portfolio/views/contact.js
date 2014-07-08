var ContactView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    this.html = $("#contact-template").html();
  },

  render: function(){
    $('#work-link').removeClass('current-nav');
    $('#skills-link').removeClass('current-nav');
    $('#about-link').removeClass('current-nav');
    $('#contact-link').toggleClass('current-nav');
    return this.$el.html(this.html);
  },

});
