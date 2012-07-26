define(["lib/underscore", "lib/backbone", "view"], function(_, Backbone, view) {
    var Hashbang = Backbone.Controller.extend({
        routes: {
            "!/" : "root",
            "!/list/" : "list"
        },

        root : function () {
        },

        list : function() {
        }
    });
});