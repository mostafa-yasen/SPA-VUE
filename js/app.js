$(function () {
    $(".loader").css('width', '0');

    Vue.component('todo-item', {
        props: ['todo'],
        template: '\
            <div class="mb-2">\
                <button v-on:click="$emit(\'remove\')" class="text-danger btn">\
                    <i class="fas fa-times"></i>\
                </button>\
                <button class="btn-success btn" v-if="todo.done" v-on:click="$emit(\'uncomplete\')">\
                    <i class="fas fa-check"></i>\
                </button>\
                <button class="btn-light btn text-success" v-on:click="$emit(\'complete\')" v-else>\
                    <i class="fas fa-check"></i>\
                </button>\
                {{ todo.text }}\
            </div>'
    });

    var app = new Vue({
        el: "#app",
        data: {
            first_name: "Mostafa",
            last_name: "Yasin",
            title: "TO-DO Examples",
            classObj: {
                'text-dark': true,
            },
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
            },
            complete_all: function () {
                this.todos.forEach(todo => {
                    todo.done = true
                });
            },
            uncomplete_all: function () {
                this.todos.forEach(todo => {
                    todo.done = false
                });
            },
            delete_completed: function () {
                // this.todos.forEach( (todo, i) => {
                //     todo.done ? this.todos.splice(this.todos.indexOf, 1) : ''
                // });
                this.todos = this.todos.filter(function (todo) {
                    return !todo.done
                });
            }
        },
        computed: {
            full_name: {
              // getter
              get: function () {
                return this.first_name + ' ' + this.last_name
              },
              // setter
              set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
              }
            },
            time: function () {
                return new Date().toLocaleTimeString();
            }
          },
          watch: {
            todos: function () {
                console.log("Watched.");
            },
          }
    })
});