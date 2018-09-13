<template>
<div class="game">
  <Board></Board>
</div>
</template>

<script>
import Board from '@/components/Board.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'game',
  data () {
    return {}
  },
  components: {
    Board,
    Footer
  }
}
</script>

<style scoped>
.footer {
  bottom: 0;
  margin: 0 auto;
  background-color: white;
}
</style>
