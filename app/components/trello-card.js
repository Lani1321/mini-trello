import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteCard: function(card) {
      this.list.cards.removeObject(card);
    },
    openModal: function() {
      this.set('enabled', true);
    }
  }
});