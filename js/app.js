$(function () {
    $(".loader").css('width', '0');

    Vue.component('todo-item', {
        props: ['todo'],
        template: '<div class="mb-2">\
        <button class="text-danger btn">\
            <i class="fas fa-times"></i>\
        </button>\
        <button class="btn-success btn" v-if="todo.done">\
            <i class="fas fa-check"></i>\
        </button>\
        <button class="btn-light btn text-success" v-else>\
            <i class="fas fa-check"></i>\
        </button>\
        {{ todo.text }}\
    </div>'
    });

    var app = new Vue({
        el: "#app",
        data: {
            welcome_message: "Vue.js",
            new_item_demo: "",
            date: "you loaded this page at " + new Date().toLocaleTimeString(),
            seen: true,
            todos: [{
                    id: 0,
                    text: "Learn ERP Next.",
                    done: true
                },
                {
                    id: 1,
                    text: "Build Resource Planning Page.",
                    done: true
                },
                {
                    id: 2,
                    text: "Build Feature 'Trip Planning'.",
                    done: false
                }
            ]
        },
        methods: {
            add_item: function () {
                if ($("#new_item_value").val()) {
                    new_item = {
                        text: $("#new_item_value").val(),
                        done: false
                    }
                    this.todos.push(new_item);
                }
                this.clear_input();
            },
            clear_input: function () {
                $("#new_item_value").val("");
                this.new_item_demo = "";
            }
        },
        computed: {
            time: function () {
                return new Date().toLocaleTimeString();
            }   
        }
    })
});