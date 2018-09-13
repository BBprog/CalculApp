<template>
  <div class="board">
    <Card></Card>
    <Card></Card>
  </div>
</template>

<script>
import Card from './Card'

export default {
  data () {
    return {}
  },
  components: {
    Card
  }
}
</script>

<style>
.board{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5%;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 160%;
}
</style>
