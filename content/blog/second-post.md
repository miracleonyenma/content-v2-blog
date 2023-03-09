---
title: 'This is my second article!'
description: 'Guess what? Nuxt content is awesome!'
img: 'img/cover (2).JPG'
tags: [Nuxt, Content, Learning, second]
---

## My second blog post

Welcome to my second blog post using [content v2 module](https://content.nuxtjs.org/)

> Hey there! 👋🏾  This is my second blog post learning nuxt content.

I'm currently building it using the following:

- Nuxt.js
- Nuxt Content module
- TailwindCSS
  - TailwindCSS typography

## Nuxt.js

[Nuxt](https://nuxtjs.org/) is a powerful Vue framework that offers great development features such as server side rendering.

```bash
npx nuxi init nuxt-app
cd nuxt-app
yarn install
yarn dev -o
```

```ts
// ./nuxt.config.ts

export default defineNuxtConfig({
  // My Nuxt config
})
```

::InfoBox{type="info"}
Here's a handy bit of information for you!

#details
This will be rendered inside the `description` slot. _It's important_ to see how this **works**.
[More information can be found here](#)
::

## Nuxt content module

Empower your NuxtJS application with [@nuxt/content module](https://content.nuxtjs.org/): write in a content/ directory and fetch your Markdown, JSON, YAML, XML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.

You can get started with Nuxt Content by installing a fresh project

```bash
npx nuxi init content-app -t content
```

## TailwindCSS

Rapidly build modern websites without ever leaving your HTML. [TailwindCSS](https://tailwindcss.com/) is A utility-second CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.

### TailwindCSS Typography

[Typography](https://tailwindcss.com/docs/typography-plugin) is a plugin that provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don't control (like HTML rendered from Markdown, or pulled from a CMS).
