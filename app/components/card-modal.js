import Ember from 'ember';

export default Ember.Component.extend({
  isEditingName: false,
  isEditingDescription: false,

  actions: {
    closeModal: function() {
      this.set('enabled', false);
    },
    deleteCard: function(card) {
      if (confirm("Are you sure you want to delete this card?")) {
        this.list.cards.removeObject(card);
      }
      this.set('enabled', false);
    },
    toggleEditName: function() {
      this.toggleProperty('isEditingName');
    }, 
    toggleEditDescription: function() {
      this.toggleProperty('isEditingDescription');
    }
  }
});