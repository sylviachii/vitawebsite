<template>
  <div class="home">
    <MainHeader />
    <MainMenu />
    <transition name="slide" apper>
      <router-view></router-view>
    </transition>
1234
  </div>
</template>

<script setup>
const Home = { template: '<div>This is Home Page.</div>' }
const About = { template: '<div>This is About Page.</div>' }


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]


const router = VueRouter.createRouter({

  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})


// 5. Create and mount the root instance.
const app = Vue.createApp({});

app.use(router);
app.mount('#app');
</script>

<style>

  html,body{
    height: 100%;
    widows: 100%;
    overflow: hidden;
  }
  .home .slide-enter-active,
  .home .slide-leave-active {
    transition: transform .5s;
  }
  .home .slide-enter{
    transform: translateY(0vh) translateX(-100%);
  }
  .home .slide-leave-to {
    transform: translateY(0vh) translateX(100%);
  }

</style>
