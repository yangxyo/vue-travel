import { createApp } from "vue"
import App from "./App"
import router from "./router"
import "normalize.css"
import "./assets/styles/iconfont.css"

createApp(App)
  .use(router)
  .mount("#app")
