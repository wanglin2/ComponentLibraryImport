const Components = require('unplugin-vue-components/webpack')

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        mode: 'production',
        plugins: [
            Components({
                resolvers: [{
                    type: "component",
                    resolve: (name) => {
                        if (name.startsWith("X")) {
                            const partialName = name.slice(1);
                            return {
                                importName: partialName,
                                path: "xui/packages/" + partialName.toLowerCase(),
                                sideEffects: 'xui/theme-chalk/' + partialName.toLowerCase() + '.css'
                            };
                        }
                    }
                }]
            })
        ]
    }
}