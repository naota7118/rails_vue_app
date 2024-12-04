<template>
  <form @submit.prevent="createEmployee">
    <div v-if="errors.length != 0">
      <ul>
        <li v-for="e in errors" :key="e">
          <font color="red">{{ e }}</font>
        </li>
      </ul>
    </div>
    <div>
      <label>Name</label>
      <input v-model="employee.name" type="text">
    </div>
    <div>
      <label>Department</label>
      <input v-model="employee.department" type="text">
    </div>
    <div>
      <label>Gender</label>
      <select v-model="employee.gender">
        <option>other</option>
        <option>male</option>
        <option>female</option>
      </select>
    </div>
    <div>
      <label>Birth</label>
      <input v-model="employee.birth" type="date">
    </div>
    <div>
      <label>Joined Date</label>
      <input v-model="employee.joined_date" type="date">
    </div>
    <div>
      <label>Payment</label>
      <input v-model="employee.payment" type="number" min="0">
    </div>
    <div>
      <label>Note</label>
      <input v-model="employee.note" type="text">
    </div>
    <button type="submit">Commit</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const employee = ref({
      name: '',
      department: '',
      gender: '',
      birth: '',
      joined_date: '',
      payment: '',
      note: ''
    });

    const errors = ref([]);
    const router = useRouter();

    const createEmployee = async () => {
      try {
        const response = await axios.post('/api/v1/employees', employee.value);
        const e = response.data;
        router.push({ name: 'EmployeeDetailPage', params: { id: e.id } });
      } catch (error) {
        console.error(error);
        if (error.response?.data?.errors) {
          errors.value = error.response.data.errors;
        }
      }
    };

    return {
      employee,
      errors,
      createEmployee
    };
  }
};
</script>

<style scoped>
</style>