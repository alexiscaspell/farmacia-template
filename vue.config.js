const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/farmacia-template/'
  : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/_colors.scss";`
      }
    }
  }
})
