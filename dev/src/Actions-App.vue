<template>
  <div>
      {{ message }}
      <input type="text" v-model="newMessage">
      <button @click="update">Update</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    data(){
        return {
            newMessage : ''
        }
    },

    computed: {
        ...mapState(['message'])
    },

    methods: {
        ...mapActions(['updateWithNewMessage']),
        update(){
            // this.$store.dispatch('updateWithNewMessage', this.newMessage)
            this.updateWithNewMessage(this.newMessage);
        }
    }
}
</script>