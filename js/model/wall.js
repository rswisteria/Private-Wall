define(["lib/underscore", "lib/backbone", "model/post"], function(_, Backbone, Post) {
    var Wall = Backbone.Collection.extend({
        model : Post,
        url: "wall/"
    });

    return Wall;
});
