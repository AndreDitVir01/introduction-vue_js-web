<template>
  <div>
      <!-- {{ $store.state.message }} -->
      {{ message }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    mounted(){
        // console.log(this.$store.state.message)
    },

    computed: {
        ...mapState(['message'])
    }
}
</script>