<template>
  <button class="font-senkron border-primary-600 border text-sm text-primary-600 hover:border-primary-700 hover:text-primary-700 rounded-sm outline-none w-195px h-50px">
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
  .btn {
    /*font-family: Senkron sans-serif;*/
    font-size: 14px;
    border-radius: 4px;
    width: 195px;
    height: 50px;
    color: #0891B2;
    font-weight: 400;
    outline: none;
    text-transform: uppercase;
  }
  .btn-border-primary {
    border: 1px solid #0891B2;
  }
  .btn-border-primary:hover {
    border: 1px solid #0E7490;
  }
</style>
