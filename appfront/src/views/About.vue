<template>
  <div class="home">
    <MainHeader />
    <MainMenu />
    <transition name="slide" apper>
      <router-view></router-view>
    </transition>
5656
  </div>
</template>

