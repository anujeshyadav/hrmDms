import axios from "axios";

const instance = axios.create({
  // baseURL: "https://node.rupioo.com/",
  // baseURL: "http://3.80.177.158:8050/",
  baseURL: "https://customer-node.rupioo.com/",
});

export default instance;
