<template>
  <div class="newsList">
    <div class="container">
      <ul class="media-list">
        <li class="media" v-for="article in articles">
          <div class="media-left">
            <a :href="article.url" target="_blank">
              <img class="media-object" :src="article.urlToImage">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">
              <a :href="article.url" target="_blank">{{article.title}}</a>
            </h4>
            <h5><i>by {{article.author}}</i></h5>
            <p>{{article.description}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const apiKey = 'c1e02a42ae0c48a0aac2a02513217019'

export default {
  name: 'newsList',
  props: ['source'],
  data () {
    return {
      articles: []
    }
  },
  methods: {
    updateSource: function (source) {
      this.$http.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`)
        .then(response => {
          this.articles = response.data.articles
        })
    }
  },
  watch: {
    source: function (val) {
      this.updateSource(val)
    }
  }
}
</script>

<style scoped>
  .media-object {
    width: 128px;
    padding: 10px;
  }
  .media {
    border-top: 1px solid lightgrey;
    padding-top: 20px;
  }
</style>
