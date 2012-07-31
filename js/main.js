requirejs.config({
    shim: {
        "lib/jquery" : {
            exports: "jQuery"
        },
        "lib/jquery.mockjax" : {
            deps: ["lib/jquery"]
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

require(["view/wall", "model/wall",  "lib/jquery", "lib/jquery.mockjax"], function(WallView, Wall, $) {
    $.mockjax({
        url: "wall/",
        responseText: [
            {
                name : "とよたよういち",
                contents : "おはようございます！",
                image_url : "https://twimg0-a.akamaihd.net/profile_images/921527235/1.jpg"
            },
            {
                name : "なかやままさひろ",
                contents : "闇に飲まれよ！（お疲れ様です！）",
                image_url : "https://twimg0-a.akamaihd.net/profile_images/1430136863/NEC_0241.JPG"
            }

        ]
    });
    window.App = new WallView({ model : new Wall } );
});