var PostModel = Backbone.Model.extend ({
  urlRoot:'http://tiy-fee-rest.herokuapp.com/collections/yorkiepoos',
  idAttribute: '_id',
  defaults: function () {
    return {

      title: "Experimenter",
      photo: "images/experimenter_still.jpg",
      content: "In 1961, famed social psychologist Stanley Milgram designed a psychology experiment in which people think they're delivering electric shocks to an affable stranger strapped into a chair in another room.",
      release: "To Be Announced",

    };

  },
    initialize: function () {
      console.log("model is created");
},

});
