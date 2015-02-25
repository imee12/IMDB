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
    "click .editWholePost": "submitEdit"

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
    this.$('.editForm').show();
  },




  submitEdit: function (e) {
    e.preventDefault();
    this.model.set({
      title: $('.editTitle').find('input[name="title"]').val(),
      photo: $('.editPhoto').find('input[name="photo"]').val(),
      content: $('.editContent').find('textarea[name="content"]').val(),
      release: $('.editRelease').find('input[name="release"]').val()
    });
    this.model.save();
    this.render();





},


});

// Collection View

var AppView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('app view initialized!');
    this.addAllPosts();
  },
  events: {
    "click .showCreate": "showCreate",
    "submit #createPost": "createPost"
  },
  createPost: function (e) {
    e.preventDefault();
    var newPost = {
      title: this.$('#createPost').find('input[name="newTitle"]').val(),
      content: this.$('#createPost').find('textarea[name="newContent"]').val(),
      release: this.$('#createPost').find('input[name="newRelease"]').val(),
      photo: this.$('#createPost').find('input[name="newPhoto"]').val()
    };

    var newModelPost = new PostModel(newPost);
    //newModelPost.set(newPost);
    if(newModelPost.isValid()) {
      newModelPost.save();
    } else {
      for(var i=0; i< newModelPost.validationError.length; i++) {
        alert(newModelPost.validationError[i]);
      }
    }

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
  }
});
