<template>
  <div id="app">
    <div style="text-align: center">
      <img alt="Vue logo" src="./assets/logo.png" width="20%" />
      <br>
      <router-link :to="'/users'">
        <button :class="{active: $route.path.startsWith('/users')}">Users</button>
      </router-link>
      <router-link :to="'/calculator'">
        <button :class="{active: $route.path === '/calculator'}">Calculator</button>
      </router-link>
      <br>
      <hr>
      <br>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import '../public/style.css'
export default {
  name: "App",
};
</script>

<style scope>
  .active {
    box-shadow: 0 0 0 2px #0096bfab;
    font-weight: bold;
  }
</style>