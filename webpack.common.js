const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/index.js', // Archivo principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    filename: 'bundle.js',
    clean: true, // Limpia la carpeta dist antes de cada build
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/, // Para archivos JS y JSX
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Para estilos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Para fuentes
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensiones soportadas
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Ruta al archivo HTML
      filename: 'index.html', // Nombre del archivo de salida
    }),
  ],
};

