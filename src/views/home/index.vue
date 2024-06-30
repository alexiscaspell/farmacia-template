<template>
  <div class="home-wrapper">
    <div class="main-content">
      <p>Tu Farmacia en todo momento, no importa el lugar.</p>
      <router-link :to="PATH.PRODUCTS">
        <b-button class="btn">Order Now</b-button>
      </router-link>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
