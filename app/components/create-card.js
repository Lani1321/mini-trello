import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createCard() {
      // Ember is able to pull the value based on the action
      // New card value is being pulled from template
      var cardName = this.get("newCard")
      
      // Seeing if it's false or empty and returning it if it is then 
      // itll never make it to addobject
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