define(["lib/jquery", "lib/underscore", "lib/backbone"], function($, _, Backbone) {
    var PostView = Backbone.View.extend({
        tagName: 'div',

        className: 'clearfix',

        template: _.template($("#post-template").html()),

        initialize: function () {
            this.model.bind("change", this.render, this);
        },

        render: function () {
            var data = this.model.toJSON();
            var html = this.template(data);
            $(this.el).html(html);
            return this;
        }
    });

    return PostView;
});
