import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./css/main.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import axios from "axios";


// axios({
//   baseURL: 'http://localhost:8088/v1/',
//   changeOrigin: true,
//   timeout: 5000, // 请求超时时间
//   withCredentials: true
// })

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus);
// axios.defaults.baseURL = "/api";
// axios.defaults.headers.post["Content-Type"] = "application/json";

// app.use(service);
app.mount("#app");