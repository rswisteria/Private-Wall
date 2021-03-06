define(["lib/jquery", "lib/underscore", "lib/backbone", "view/post", "model/post"], function($, _, Backbone, PostView, Post) {
           
    var WallView = Backbone.View.extend({
        el: $('#wall'),

        events: {
            "click #submit-post" : "onSubmitPost"
        },

        initialize: function() {
            this.model.bind("add", this.add, this);
            this.model.bind("remove", this.remove, this);
            var self = this;
            this.model.fetch({
                success: function(resp, xhr) {
                    _.each(resp.toJSON(), function(post) {
                        self.model.add(new Post(post));
                    });
                }
            });
        },
        
        onSubmitPost: function() {
            var contents = $("#post-input").val();
            var post = new Post({ "contents" : contents, "image_url" : "https://twimg0-a.akamaihd.net/profile_images/921527235/1.jpg", "name" : "とよたよういち" });
            this.model.unshift(post);
            $("#post-input").val("");
        },

        add: function (model, self, options) {
            var postView = new PostView({ model : model });
            if (options.index == 0) {
                this.addPostViewTop(postView);
            } else {
                this.addPostViewBottom(postView);
            }
        },

        remove: function () {
        },

        addPostViewTop: function (postView) {
            if ($('#post-list').children().length == 0) {
                $('#post-list').append(postView.render().el);
            } else {
                $('#post-list div:first').before(postView.render().el);
            }
        },

        addPostViewBottom: function (postView) {
            $('#post-list').append(postView.render().el);
        }
        
    });

    return WallView;
});
