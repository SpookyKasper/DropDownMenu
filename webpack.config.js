import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const mode = "development";
export const entry = "./src/scripts/index.js";
export const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/template.html",
  }),
];
export const devtool = "inline-source-map";
export const devServer = {
  watchFiles: ["./dist", "./src/template.html"],
};
export const output = {
  filename: "bundle.js",
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, "dist"),
  clean: true,
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(csv|tsv)$/i,
      use: ["csv-loader"],
    },
  ],
};
