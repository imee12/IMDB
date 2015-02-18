// Model View

var PostView = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  initialize: function () {
    // console.log(this.el);

  },
  events: {
    "click .deletePost": "removePost",
    "click .showEditForm": "showEdit",
    "click .editWholePost": "editPost"
  },
  render: function () {
    // console.log(this.el);
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);

    return this;
  },
  removePost: function () {
    this.$el.remove();
    this.model.destroy();

  },

  showEdit: function () {
    // e.preventDefault();
    console.log("edit button works");
    ('.editForm').toggleClass('.show');
  },




  editPost: function (e) {
    e.preventDefault();

    //var thisIndex = $(this).closest('article').data('index')
    var editedPost = {

      title: $('.editTitle').find('input[name="title"]').val(),
      content: $('.editContent').find('textarea[name="content"]').val(),
      author: $('.editAuthor').find('input[name="author"]').val()
    };


  var editModelPost= new PostModel(editedPost);
    // editModelPost.splice(this.model, 1, editedPost);
    // this.$el.remove();
    // this.model.add();
console.log(editModelPost);
  //  editModelPost.add();

    //editModelPost.save();
    this.collection.add(editModelPost);
    this.addAllPosts();




},

});
// Collection View

var AppView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('app view initialized!');
    this.addAllPosts();
  //  renderAll();



  },
  events: {
    "click .showCreate": "showCreate",
    "submit #createPost": "createPost"
  },

  // renderAll: function (collection) {
  //   // console.log(this.el);
  //   var markup = this.template(this.collection.toJSON());
  //   $("section").html(markup);
  //
  //   return this;
  // },



  createPost: function (e) {
    e.preventDefault();
    var newPost = {
      title: $('#createPost').find('input[name="newTitle"]').val(),
      photo: $('#createPost').find('input[name="newPhoto"]').val(),
      content: $('#createPost').find('textarea[name="newContent"]').val(),
      release: $('#createPost').find('input[name="newrelease"]').val(),
    };

    // var newPost = {
    //   title: $('#createPost').find('input[name="newTitle"]').val(),
    //   content: $('#createPost').find('textarea[name="newContent"]').val(),
    //   author: $('#createPost').find('input[name="newAuthor"]').val()
    // };

    var newModelPost = new PostModel(newPost);
    newModelPost.save();
    console.log(this.collection.length);
    this.collection.add(newModelPost);
    console.log(this.collection.length);
    // this.addOnePost(newModelPost); // alternative method
    this.addAllPosts();
    this.$el.find('#createPost').find('input, textarea').val('');
    this.showCreate();


  },
  showCreate: function () {
    // e.preventDefault();
    console.log("add movie button works");
    this.$el.find('#createPost').toggleClass('show');
  },
  addOnePost: function (post) {

    var postView = new PostView({model: post});
    this.$el.append(postView.render().el);
  },
  addAllPosts: function () {
    _.each(this.collection.models, this.addOnePost, this)
  },
  alertMe: function () {
    alert("hi everyone!");
  },




});
