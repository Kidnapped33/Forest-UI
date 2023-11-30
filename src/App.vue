<script setup lang="ts">

</script>
 
<template>
  <div>
    <nav>
      Home
      <router-link to="/">Home</router-link>
      <router-link to="/HelloWorld">HelloWorld</router-link>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
nav
{
  /* border: 1px solid red; */
  height: 50px;
  background-color: #728af2;
  color: white;
  font-size: 20px;
  font-weight: 400;
}

</style>
