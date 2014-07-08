var WorkView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    this.html = $("#work-template").html();
  },

  render: function(){
    $('#contact-link').removeClass('current-nav');
    $('#skills-link').removeClass('current-nav');
    $('#about-link').removeClass('current-nav');
    $('#work-link').toggleClass('current-nav');
    return this.$el.html(this.html);
  },

});
