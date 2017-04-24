<template>
  <div id="app" class="container">
    <b-breadcrumb :items="items" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        text: 'Admin',
        link: '#',
      }, {
        text: 'Manage',
        link: 'http://google.com',
      }, {
        text: 'Library',
        active: true
      }]
    }
  }
}
</script>
