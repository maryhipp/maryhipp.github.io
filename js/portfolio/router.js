var PortfolioRouter = Backbone.Router.extend({
  routes: {
    'about': 'about',
    'skills': 'skills',
    'work': 'work',
    'contact' : 'contact',
    '*default': 'about'
  },

  about: function() {
    this.view = new AboutView();
    this.view.render().fadeIn(600)
  },

  skills: function() {
    this.view = new SkillsView();
    this.view.render().fadeIn(600);
  },

  work: function() {
    this.view = new WorkView();
    this.view.render().fadeIn(600);
  },

  contact: function() {
    this.view = new ContactView();
    this.view.render().fadeIn(600);
  }

});

var portfolioRouter = new PortfolioRouter();

Backbone.history.start();
