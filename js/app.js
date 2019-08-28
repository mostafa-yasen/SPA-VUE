$(function () {
    $(".loader").css('width', '0');

    var app = new Vue({
        el: "#app",
        data: {
            welcome_message: "Hello Vue.js",
            date: "you loaded this page at " + new Date().toLocaleTimeString(),
            seen: true,
            todos: [{
                    text: "Learn ERP Next.",
                    done: true
                },
                {
                    text: "Build Resource Planning Page.",
                    done: true
                },
                {
                    text: "Build Feature 'Trip Planning'.",
                    done: false
                }
            ]
        }
    })
});