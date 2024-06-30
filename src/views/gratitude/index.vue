<template>
  <div class="gratitude-wrapper">
    <div class="gratitude-wrapper__title-main">
      <b></b><span>Confirmación de Pedido y Página de Agradecimiento</span><b></b>
    </div>
    <div>
      <p>
        ¡Gracias por tu compra! ¡Felicidades por tu pedido! Queremos expresar nuestra sincera gratitud por elegirnos. Tu apoyo significa mucho para nosotros.
      </p>
      <p>
        Estamos emocionados de tener la oportunidad de servirte y no podemos esperar para ofrecerte una experiencia excepcional. Tu confianza en nuestros productos es invaluable y estamos comprometidos a asegurarnos de que tu compra cumpla con tus expectativas.
      </p>
      <p>
        Si tienes alguna pregunta o necesitas asistencia, nuestro dedicado equipo de soporte está aquí para ayudarte. No dudes en contactarnos en YYY.XXX.XXX.
      </p>
      <p>
        Una vez más, gracias por tu compra. Esperamos hacer que tu experiencia sea extraordinaria.
      </p>
    </div>
    <router-link :to="PATH.PRODUCTS">
      <b-button variant="outline-dark" class="btn m-auto"
        >Seguir Comprando<b-icon
          icon="arrow-right"
          style="margin-left: 8px"
        ></b-icon
      ></b-button>
    </router-link>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
