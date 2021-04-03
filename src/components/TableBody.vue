<script>
import router from '../router/index'

export default {
  name: 'TableBody',
  props: {
    users: Array,
    showCount: Number,
    size: Number,
  },
  methods: {
    userDetail: userId => {
      router.push('/users/'+userId)
    }
  }
}
</script>

<template>
  <tbody>
    <tr v-for="(user, index) in users.slice(0, showCount || size)" :key="user.id" class="pointer" @click="() => userDetail(user.id)">
      <td>{{index + 1}}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.first_name + " " + user.last_name }}</td>
    </tr>
  </tbody>
</template>

<style scoped>
  tr:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>