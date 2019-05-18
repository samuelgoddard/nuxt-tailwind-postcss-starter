const path = require("path");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");
const postcssNested = require("postcss-nested");
const postcssImport = require("postcss-import");
const postcssResolver = require("postcss-import-resolver");

module.exports = {
  plugins: [
    autoprefixer(),
    postcssImport({
      resolve: postcssResolver({
        alias: {
          "@": path.resolve(__dirname, "assets/css"),
        },
        extensions: [".css, .postcss"],
        modules: ["node_modules"],
      }),
    }),
    postcssPresetEnv({ stage: 2 }),
    tailwindcss("./tailwind.config.js"),
    postcssNested({ unwrap: ["screen"] }),
  ]
}
