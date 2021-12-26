export default [
  {
    path: "/",
    component: () => import("./layouts/app-layout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("./pages/home.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("./pages/about.vue"),
      }
    ],
  },
];