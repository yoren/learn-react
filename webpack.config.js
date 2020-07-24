const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

var entry = ["./app/index.js"];

if (mode === "development") {
  entry = [
    `${require.resolve("webpack-dev-server/client")}?/`,
    require.resolve("webpack/hot/dev-server")
  ].concat(entry);
}

module.exports = {
  mode: mode,
  entry: entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.(css)$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./app/index.html"
    })
  ]
};
