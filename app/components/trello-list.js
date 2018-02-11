import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createList() {
      var listName = this.get("newList")

      if(!listName){return false;}
      if(!listName.trim()) {return;}
      
      this.trelloList.addObject({
        id: this.trelloList.length + 1, 
        name: listName, 
        cards: []
      });

      // Clear out text field 
      this.set('newList', '')
    }, 

    deleteList: function(list) {
      this.trelloList.removeObject(list);
    }, 
  }
});