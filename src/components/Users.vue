<template>
  <div>
    <h1 style="text-align: center">Users <span v-if="size">({{size}})</span></h1>
    <div>
      <div class="col-auto">
        <label><strong>Showing</strong></label>
        <select v-model.number="showCount" @change="handleChange">
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option :value="size">All</option>
        </select>
      </div>
    </div>

    <div>{{size ? showCount || size : 0}} of {{size}} data</div>

    <div style="overflow-x: auto">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th
              v-for="th in th"
              :key="th['key']"
              class="pointer"
              v-on:click="() => th['key'] ? sort(th['key']) : null"
            >
              <div>
                {{ th.title }}
                <span v-if="sortBy.col === th['key'] && sortBy.orders === 'asc'" style="color:#E77D00">&#8648;</span>
                <span v-else-if="sortBy.col === th['key'] && sortBy.orders === 'desc'" style="color:#E77D00">&#8650;</span>
                <span v-else style=" color:#C0C0C0">&#8645;</span>
              </div>
            </th>
          </tr>
        </thead>
        <TableBody v-bind:users="filtered" v-bind:showCount="showCount" v-bind:size="size" />
      </table>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import TableBody from './TableBody'

export default {
  name: "Users",
  components: {
    TableBody
  },
  data() {
    return {
      USERS_URL: "https://reqres.in/api/users",
      th: [
        {
          title: "Email",
          key: "email",
        },
        {
          title: "Name",
          key: "first_name",
        },
      ],
      users: [],
      filtered: [],
      size: 0,
      showCount: parseInt(localStorage.getItem('showCount'), 10) || 5,
      sortBy: {
        col: '',
        orders: 'asc',
      },

    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const res = await fetch(this.USERS_URL+'?page=1');
      const res2 = await fetch(this.USERS_URL+'?page=2');
      const data = await res.json();
      const data2 = await res2.json();
      this.users = data.data;
      this.users = [...this.users, ...data2.data];
      this.filtered = this.users
      this.size = data.total
    },
    sort(col) {
      if (this.sortBy.col && this.sortBy.col === col) {
        this.sortBy.orders = this.sortBy.orders === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortBy.col = col
        this.sortBy.orders = 'asc'
      }
      this.filtered = _.orderBy(this.filtered, [col], this.sortBy.orders)
    },
    handleChange() {
      localStorage.setItem('showCount', this.showCount)
    }
  },
};
</script>

<style>
  .pointer {
    cursor: pointer;
    user-select: none;
  }
  table {
    border-collapse:collapse; 
    border-spacing: 0 1em;
  }
</style>