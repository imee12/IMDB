posts= [
  {
  title: "Experimenter",
  photo: "images/experimenter_still.jpg",
  content: "In 1961, famed social psychologist Stanley Milgram designed a psychology experiment in which people think they're delivering electric shocks to an affable stranger strapped into a chair in another room.",
  release: "To Be Announced",
},
  {
  title: "Truth About Lies",
  photo: "images/truth.jpg",
  content: "Gilby Smalls (Fran Kranz) is an aimless guy. Fired from a dead-end job and dumped by his girlfriend, he is forced to move in with his mother when his apartment building burns down.",
}



],




$(function () {

  var postCollection = new PostCollection();

 postCollection.fetch().then(function () {
   var appView = new AppView({collection: postCollection});
 });






});
