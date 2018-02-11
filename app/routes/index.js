import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
      id: 1,
      name: 'Default List',
      cards: [{   
        id: 1,
        name: 'Learn EmberJS',
        description: 'High learning curve',
        list_id: 1
      }]
    }]
  }
});