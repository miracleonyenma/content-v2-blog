<!-- ./pages/blog/index.vue -->

<script setup>
// const print = (wareev) => {
//   console.log(wareev);
// };

definePageMeta({
  key: (route) => route.fullPath,
});

// get tag query
const {
  query: { tags },
} = useRoute();

// const router = useRouter();

const filter = ref(tags?.split(","));
console.log({ filter });

// watch(filter, (value) => {
//   console.log({ value });
//   router.push({
//     path: "/blog",
//     query: { tags: value },
//   });
// });

// set meta for page
useHead({
  title: "All articles",
  meta: [{ name: "description", content: "Here's a list of all my great articles" }],
});
</script>
<template>
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">All articles</h1>
        <p class="font-medium text-lg">Here's a list of all my great articles</p>
      </div>
    </header>
    <section class="page-section">
      <Tags />

      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fieldsin the `:query` prop -->
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="article-list">
            <li v-for="article in list" :key="article._path" class="article-item">
              <NuxtLink :to="article._path">
                <div class="wrapper">
                  <div class="img-cont w-32">
                    <img :src="`/${article.img}`" :alt="article.title" class="rounded-lg max-h-[8rem]" />
                  </div>
                  <header>
                    <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <ul class="article-tags">
                      <li class="tag !py-0.5" v-for="(tag, n) in article.tags" :key="n">{{ tag }}</li>
                    </ul>
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>

        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<style scoped>
/* .page-heading {
  @apply p-12 bg-slate-50;
}
.page-heading > .wrapper {
  @apply max-w-3xl m-auto;
}

.page-section {
  @apply p-4 py-8 m-auto max-w-3xl;
}

.article-list {
  @apply flex flex-col gap-6;
}

.article-item {
  @apply pt-6 first-of-type:border-none border-t border-slate-200;
}

.article-item a {
  @apply no-underline;
}

.article-item > * > .wrapper {
  @apply flex items-start gap-4;
} */
</style>
