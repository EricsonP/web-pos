<template>
  <main>
      <NuxtPage />
  </main>
</template>

<script setup>
const { $api } = useNuxtApp()
const response = await $api.get('/api/home')
</script>