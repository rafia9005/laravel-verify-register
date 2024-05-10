import axios from "axios";

async function productAll() {
  return axios.get("https://dummyjson.com/products");
}

export { productAll };
