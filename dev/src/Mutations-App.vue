<template>
  <div>
      {{ message }}
      <button @click="update">Update</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState(['message'])
    },

    methods: {
        ...mapMutations(['updateMessage']),
        update(){
            // this.$store.commit('updateMessage', 'Selamat datang di Vuex')
            this.updateMessage('Selamat datang di Vuex')
        }
    }
}
</script>