Vue.component('myComponent', {
  template: `<div>{{myMessage}}</div>`,
  props: ['myMessage']
})

new Vue({
  el: '#example',
  data: {
    parentMsg: ''
  }
})

const simpleCounter = {
  template: `<button @click="counter += 1">{{counter}}</button>`,
  data () {
    return {
      counter: 0
    }
  }
}

new Vue({
  el: '#example-2',
  components: {simpleCounter}
})

const buttonCounter = {
  template: `<button @click="increment">{{counter}}</button>`,
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increment () {
      this.counter += 1
      this.$emit('increment')
    }
  }
}

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal () {
      this.total += 1
    }
  },
  components: {buttonCounter}
})
