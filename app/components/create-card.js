import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createCard() {
      var cardName = this.get("newCard")

      if(!cardName){return false;}
      if(!cardName.trim()) {return;}

      this.list.cards.addObject({
        id: this.list.cards.length + 1, 
        name: cardName, 
        list_id: this.list.id
      });

      // Clear out text field 
      this.set('newCard', '')
    }
  }
});