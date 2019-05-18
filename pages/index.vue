<template>
  <section class="container bg-red-200">
    <div>
      <logo />
      <h1 class="text-red-600">Title</h1>
      <h3 class="font-serif font-medium">My dazzling Nuxt.js project</h3>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>