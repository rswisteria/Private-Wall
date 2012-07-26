define(["lib/underscore", "lib/backbone"], function(_, Backbone) {
    var Post = Backbone.Model.extend({
    });

    var User = Backbone.Model.extend({
    });

    var Comment = Backbone.Model.extend({
    });
    
    var CommentCollection = Backbone.Collection.extend({
    });

    var Wall = Backbone.Collection.extend({
        model : Post,
        url: "wall/"
    });

    return {
        "Wall" : Wall,
        "Post" : Post,
        "User" : User,
        "Comment" : Comment,
        "CommentCollection" : CommentCollection
    };
});