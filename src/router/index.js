import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddCity from "../views/AddCity";
import EditCity from "../views/EditCity";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-city",
    name: "addcity",
    component: AddCity,
  },
  {
    path: "/cities/:cityId",
    name: "editcity",
    component: EditCity,
  },
  {
    path: "/about",
    name: "bAbout",

    component: () => import("../views/bAbout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
