<template>
  <div class="sourceSelection">
    <div class="jumbotron">
      <h2><span class="glyphicon glyphicon-list-alt"></span> News List</h2>
      <h4>Select News source</h4>
      <select class="form-control" @change="sourceChanged">
        <option :value="source.id" v-for="source in sources">{{source.name}}</option>
      </select>

      <div v-if="source">
        <h6>{{source.description}}</h6>
        <a :href="source.url" class="btn btn-primary" target="_blank">Go To {{source.name}} Website</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sourceSelection',
  data () {
    return {
      sources: [],
      source: ""
    }
  },
  created: function () {
    this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(response => {
        this.sources = response.data.sources;
      })
  },
  methods: {
    sourceChanged: function (e) {
      for (var i = 0; i < this.sources.length; i++) {
        if (this.sources[i].id === e.target.value) {
          this.source = this.sources[i]
        }
      }
      this.$emit('sourceChanged', e.target.value)
    }
  }
}
</script>

<style scoped>
</style>
