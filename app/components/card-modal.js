import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal: function(){
      this.set('enabled', false);
    },
    deleteCard: function(card) {
      if (confirm("Are you sure you want to delete this card?")) {
        this.list.cards.removeObject(card);
      }
      this.set('enabled', false);
    },
  }
});