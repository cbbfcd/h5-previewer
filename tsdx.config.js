const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        inject: true,
        extract: !!options.writeMeta,
        modules: true,
        camelCase: true,
      })
    );
    return config;
  },
};
