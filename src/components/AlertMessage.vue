<template>
  <v-alert :value="true" type="warning" outline style="width: 100%">
    <span style="font-weight: bold"
      >Arup's deployment of Speckle v2 is now live for project work!</span
    >
    <br />
    <span
      >Visit Arup's new v2 server
      <a href="https://v2.speckle.arup.com/">here</a>. Check out the Arup
      Speckle <a href="https://speckle.arup.com/overview/">docs site</a> to
      learn more about Speckle v2 and our ongoing migration to this version, and
      to find new case studies, tutorials and getting started resources!</span
    >
  </v-alert>
</template>
<script>
export default {
  name: "AlertMessage",
};
</script>
<style scoped lang='scss'>
.a {
  color: inherit;
  text-decoration: none;
}
</style>
