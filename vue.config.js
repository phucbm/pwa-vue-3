const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: '',
    pwa: {
        'name': 'Todo MVC'
    },
    transpileDependencies: true
})