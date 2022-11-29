import { createRouter, createWebHistory } from "vue-router";

import dashboardPageIndex from "../views/backend/index.vue";

import frontendPageIndex from "../views/frontend/index.vue";

import notFoundPage from "../views/notfound.vue";

const routes = [
    //admin
    {
        path: '/admin',
        name: 'admin',
        component: dashboardPageIndex
    },
    //frontend
    {
        path: '/',
        name: 'home',
        component: frontendPageIndex
    },

    //404 page
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFoundPage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
