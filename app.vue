<!-- ./app.vue -->
<script setup>
useHead({
  title: "Nuxt 3 + Content v2 Starter",
  meta: [
    { name: 'description', content: 'Nuxt 3 + Content v2 Starter built by Miracleio' }
  ],
})
</script>
<template>
  <div>
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>
