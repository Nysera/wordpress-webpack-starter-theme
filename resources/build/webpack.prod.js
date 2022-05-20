const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// destructure paths from paths.js in the helpers folder
const { projectDistPath } = require("./helpers/paths");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(projectDistPath, "scripts"),
    },
    module: {
        // modules
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../../dist/styles/[name].[contenthash].css"
        })
    ]
});