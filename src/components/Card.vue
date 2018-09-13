<template>
  <div class="card">
    <div class="grid">
      <div v-for="i in nbItems" v-bind:key="i">
        <div class="item" v-on:click="addItem()">
          {{i}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'card',
  data () {
    return {
      isActive: true
    }
  },
  computed: {
    ...mapGetters(['nbItems'])
  },
  methods: {
    ...mapActions(['updateNbItems']),
    addItem () {
      this.updateNbItems(this.nbItems + 1)
      console.log(this.nbItems);
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #FFFDDF;
  border-radius: 20px;
  text-align: center;
  padding: 5%;
  margin-bottom: 20%;
}

.grid {
  display: grid;
  grid-row-gap: 3vh;
}

.item {
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #CCC;
  height: 15vh;
}

.value {
  margin: 0 auto;
  pointer-events: none;
}

.item.green {
  background-color: green;
}
.item.red {
  background-color: red;
}
</style>
