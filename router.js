// Router
var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
        "posts/:id":"getPost"
    },

    initialize:function () {

    },

    list:function () {
        this.postList = new PostCollection();

    },

    movieDetails:function (id) {

    }

});

var app = new AppRouter();
