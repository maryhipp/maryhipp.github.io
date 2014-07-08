var SkillsView = Backbone.View.extend({
  el: "#main-container",

  initialize: function(){
    this.html = $("#skills-template").html();
  },

  render: function(){
    $('#contact-link').removeClass('current-nav');
    $('#work-link').removeClass('current-nav');
    $('#about-link').removeClass('current-nav')
    $('#skills-link').addClass('current-nav');
    return this.$el.html(this.html);
  },

});
