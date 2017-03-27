Vue.component('todo-item', {
  template: `
    <li>
      {{ title }}
      <button v-on:click="$emit('remove')">X</button>
    </li>
  `,
  props: ['title']
})

new Vue({
  el: '#todo-list',
  data: {
    newTodo: '',
    todos: [
      'Sleep',
      'Eat',
      'Play'
    ]
  },
  methods: {
    addTodo: function() {
      this.todos.push(this.newTodo)
      this.newTodo = ''
    }
  }
})
