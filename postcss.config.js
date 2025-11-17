module.exports = {
  plugins: [
    require('postcss-lightningcss')({
      targets: {
        chrome: 100 << 16,
        firefox: 100 << 16,
        safari: 15 << 16,
      },
      minify: true,
    })
  ],
};