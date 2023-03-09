<template>
    <footer class="site-footer">
        <div class="wrapper">
            <div class="footer-info">
                <p class="text-xl font-bold">
                    <a href="http://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt 3</a> + <a
                        href="https://content.nuxtjs.org/" target="_blank" rel="noopener noreferrer"> Content v2</a> Starter
                </p>
                <span>Built with 💖 by <a href="http://miracleio.me" target="miracleio"
                        rel="noopener noreferrer">Miracleio</a></span>
            </div>
            <ul class="footer-links">
                <li class="link-item">
                    <a href="https://github.com/miracleonyenma/content-v2-blog" target="_blank"
                        rel="noopener noreferrer">View Code on GitHub </a>
                </li>
            </ul>
        </div>
    </footer>
</template>
<style scoped>
.site-footer {
    @apply bg-white px-4 py-12 border-t border-slate-100;
}

.site-footer>.wrapper {
    @apply flex flex-wrap gap-16 justify-between m-auto max-w-6xl;
}
</style>