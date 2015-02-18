var PostCollection = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/yorkiepoos',
  model: PostModel
});
