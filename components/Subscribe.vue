<template>
  <div class="max-w-screen-lg w-full mx-auto bg-white p-3">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-px">
      <div class="image-box bg-left-42% bg-no-repeat bg-cover min-h-440px"></div>
      <div class="flex flex-col p-4 justify-center">
        <div class="py-4">
          <div class="font-senkron text-brand text-sm">
            DON'T MISS OUT ON GREAT OFFERS
          </div>
          <div class="font-senkron text-28 pb-5">
            Subscribe to our newsletter
          </div>
          <div class="font-senkron text-14 text-gray-600">
            Subscribe to our informative newletter to keep up to date on all the latest events, our new collections and fabulous offers. Be among the first of your straight to your inbox.
          </div>
        </div>
        <div class="py-4">
          <input
            type="text"
            class="bg-light-gray placeholder-gray-700 rounded-sm py-2 px-4 mr-4"
            placeholder="Your email"
          >
          <button class="bg-gray-900 text-white text-sm px-5 rounded-sm outline-none w-113px h-40px">
            Subscribe
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Subscribe"
  }
</script>

<style scoped>
  input {
    width: 279px;
  }
  input::placeholder {
    font-size: 14px;
  }
  .image-box {
    background-image: url(./assets/images/img1.png);
  }

</style>
