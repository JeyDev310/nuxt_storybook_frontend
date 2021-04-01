<template>
  <div class="main-wrapper">
    <div class="flex px-10 py-5">
      <div class="mr-5">
        <LargePrimaryButton text="BTN TEXT"/>
      </div>
      <div>
        <LargeSecondaryButton text="BTN TEXT"/>
      </div>
    </div>

    <div class="flex px-10 py-5">
      <div class="mr-5">
        <MediumPrimaryButton text="Btn Text"/>
      </div>
      <div>
        <MediumSecondaryButton text="Btn Text"/>
      </div>
    </div>

    <div class="mt-20">
      <Subscribe/>
    </div>

    <div class="mt-20">
      <ContactDiamondExpert/>
    </div>

  </div>
</template>

<script>
  import LargePrimaryButton from "../components/LargePrimaryButton";
  import LargeSecondaryButton from "../components/LargeSecondaryButton";
  import MediumPrimaryButton from "../components/MediumPrimaryButton";
  import MediumSecondaryButton from "../components/MediumSecondaryButton";
  import Subscribe from "../components/Subscribe";
  import ContactDiamondExpert from "../components/ContactDiamondExpert";

  export default {
    components: {
      LargePrimaryButton,
      LargeSecondaryButton,
      MediumPrimaryButton,
      MediumSecondaryButton,
      Subscribe,
      ContactDiamondExpert,
    }
  }
</script>

<style>
  .main-wrapper {
    background-color: white;
    width: 100% !important;
    min-height: 100vh!important;
    margin: 0!important;
  }
</style>
