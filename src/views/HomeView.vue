<template>
  <h1>hello</h1>
</template>

<script>
import {productAll} from '../api/product';
export default {
  data(){
    return{
      data: null
    }
  },
  async created() {
    const data = productAll();
    console.log(import.meta.env.VITE_API_URL)
  },
}
</script>
