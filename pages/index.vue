<!-- ./pages/index.vue -->
<template>
  <main>
    <section class="hero-section">
      <div class="wrapper">
        <header>
          <h1 class="font-black text-7xl">Welcome to my Nuxt 3 + Content v2 Starter</h1>
          <p>Take a look at <NuxtLink to="/blog">my blog</NuxtLink></p>
        </header>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-section {
  @apply flex justify-center p-4 w-full h-screen bg-slate-50 text-slate-700;
}

.hero-section > .wrapper {
  @apply  m-auto max-w-6xl;
}
</style>