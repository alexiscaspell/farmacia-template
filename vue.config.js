const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/_colors.scss";`
      }
    }
  }
})
