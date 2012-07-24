requirejs.config({
    shim: {
        "lib/jquery" : {
            exports: "jQuery"
        },
        "lib/underscore" : {
            exports: "_"
        },
        "lib/backbone" : {
            deps: ["lib/jquery", "lib/underscore"],
            exports: "Backbone"
        }
    }
});