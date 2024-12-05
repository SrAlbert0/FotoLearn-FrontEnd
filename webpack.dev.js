const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: './dist', // Carpeta a servir
    hot: true, // Habilita HMR (Hot Module Replacement)
    port: 3000, // Cambia el puerto si es necesario
  },
});
