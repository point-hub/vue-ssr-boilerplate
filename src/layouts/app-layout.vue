<script setup>
import AppHeader from '../components/app-header.vue';
import AppFooter from '../components/app-footer.vue';
</script>

<template>
  <div class="flex flex-col h-full min-h-screen container mx-auto">
    <app-header />
    <div class="flex-1">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>