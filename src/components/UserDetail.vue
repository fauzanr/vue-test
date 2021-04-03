<template>
  <div v-if="user" style="text-align: center">
    <img :src="user.avatar" width="200">
    <h2>{{ user.first_name + ' ' + user.last_name }}</h2>
    <p>{{ user.email }}</p>
  </div>
  <div v-else style="text-align: center">
    <h2>{{ status }}</h2>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  data() {
    return {
      USER_URL: "https://reqres.in/api/users/",
      user: null,
      status: 'Loading',
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const res = await fetch(this.USER_URL+this.$route.params.id);
      const data = await res.json();
      this.user = data.data;
      this.status = 'User not found'
    }
  },
}
</script>