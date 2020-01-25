module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          constants: './src/constants',
          colors: './src/constants/colors',
          store: './src/store',
          views: './src/views',
          services: './src/services',
          router: './src/router',
          assets: './src/assets',
          images: './src/assets/images',
        },
      },
    ],
  ],
};
