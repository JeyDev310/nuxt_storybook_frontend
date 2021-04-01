<template>
  <div class="bg-lighter-gray px-8">
    <div class="px-4 py-16 w-full max-w-screen-lg mx-auto">
      <div class="py-3 flex flex-col justify-center items-center">
        <div class="font-senkron text-brand text-sm">
          LET US HELP YOU
        </div>
        <div class="font-senkron text-28">
          Contact a Diamond Expert Today
        </div>
        <div class="py-6">
          <button class="font-senkron text-sm bg-gray-900 text-white rounded-sm py-2.5 px-6 outline-none">
            Book Your Experience
          </button>
        </div>
      </div>
      <div class="py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <div class="bg-no-repeat bg-center bg-cover w-316px h-246px avatar-1"></div>
            <div>
              <div class="text-gray-900 text-24 mt-3.5 py-4">
                Meet David
              </div>
              <hr class="w-6 text-brand pb-4">
              <div class="text-gray-400 text-sm pr-2">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed ferm entum elit enim, id blandit enim pre tium eget. Aenean eros augue, lacinia a arcu ac, tempus consectetur quam.
              </div>
            </div>
          </div>

          <div>
            <div class="bg-no-repeat bg-center bg-cover w-316px h-246px avatar-2"></div>
            <div>
              <div class="text-gray-900 text-24 mt-3.5 py-4">
                Meet Molly
              </div>
              <hr class="w-6 text-brand pb-4">
              <div class="text-gray-400 text-sm pr-2">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed ferm entum elit enim, id blandit enim pre tium eget. Aenean eros augue, lacinia a arcu ac, tempus consectetur quam.
              </div>
            </div>
          </div>

          <div>
            <div class="bg-no-repeat bg-center bg-cover w-316px h-246px avatar-3"></div>
            <div>
              <div class="text-gray-900 text-24 mt-3.5 py-4">
                Meet Ollie
              </div>
              <hr class="w-6 text-brand pb-4">
              <div class="text-gray-400 text-sm pr-3">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Sed ferm entum elit enim, id blandit enim pre tium eget. Aenean eros augue, lacinia a arcu ac, tempus consectetur quam.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ContactDiamondExpert"
    }
</script>

<style scoped>
  .avatar-1 {
    background-image: url(../assets/images/img-people-1.png);
  }
  .avatar-2 {
    background-image: url(../assets/images/img-people-2.png);
  }
  .avatar-3 {
    background-image: url(../assets/images/img-people-3.png);
  }
</style>
