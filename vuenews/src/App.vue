<template>
  <div id="app" class="container">
    <SourceSelection @sourceChanged="sourceChanged"></SourceSelection>
    <NewsList :source="source"></NewsList>
  </div>
</template>

<script>
import SourceSelection from './components/SourceSelection'
import NewsList from './components/NewsList'

export default {
  name: 'app',
  components: {
    SourceSelection,
    NewsList
  },
  data () {
    return {
      source: ""
    }
  },
  methods: {
    sourceChanged: function (source) {
      this.source = source
    }
  }
}
</script>

<style>
#app {
  padding-top: 20px
}
</style>
