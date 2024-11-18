<template>
  <div class="container">
    <header class="header bg">
      <vhes />
    </header>
    <nav class="sidebar bg"></nav>
    <main class="main-content bg">
    <slot />
    </main>
    <footer class="footer bg"></footer>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 250px 1fr; /* 2 колонки: одна фиксированная шириной 200px для боковой панели, другая гибкая для основного контента */
  grid-template-rows: 60px 1fr 60px; /* 3 ряда: верхняя панель 60px, основной контент гибкий, нижняя панель 60px */
  grid-template-areas:
    "header header"
    "sidebar main-content"
    "footer footer"; /* Определяем области */

  gap: 25px;
}

.bg {
  background-color: #fff;
}
.header {
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 999999;
  width: 100%;
}

.sidebar {
  grid-area: sidebar;
  overflow-x: auto;
}

.main-content {
  grid-area: main-content;
  padding: 20px;
}

.footer {
  grid-area: footer;
}
</style>

<script>
import vhes from "@/components/vHeader.vue";
export default {
  components: {
    vhes,
  },
};
</script>
