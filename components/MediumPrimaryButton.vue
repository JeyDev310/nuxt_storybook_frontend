<template>
  <button class="font-senkron bg-primary-600 hover:bg-primary-700 text-sm text-white rounded-sm outline-none w-195px h-40px">
    {{text}}
  </button>
</template>

<script>
  export default {
    name: "Button",
    props: ['text'],
    mounted() {
    }
  }
</script>

<style scoped>
</style>
