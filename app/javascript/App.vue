<script>
  import EmployeeNewPage from './EmployeeNewPage.vue';

  import axios from 'axios';
  export default {
    data () {
      return {
        employees: []
      }
    },
    mounted () {
      axios
        .get('/api/v1/employees.json')
        .then(response => (this.employees = response.data))
    }
  }
</script>

<template>
  <EmployeeNewPage />

  <div id="vue-app">
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>birth</th>
          <th>department</th>
          <th>gender</th>
        </tr>
        <tr v-for="e in employees" :key="e.id">
          <td>{{ e.id }}</td>
          <td>{{ e.name }}</td>
          <td>{{ e.birth }}</td>
          <td>{{ e.department }}</td>
          <td>{{ e.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>