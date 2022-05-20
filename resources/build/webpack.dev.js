const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const BrowserSyncPlugin = require("Browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// destructure paths from paths.js in the helpers folder
const { projectDistPath } = require("./helpers/paths");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(projectDistPath, "scripts"),
    },
    plugins: [
        new BrowserSyncPlugin({
            host: "localhost",
            port: 3000,
            proxy: "wordpress-webpack-starter-theme.test",
            files: [
                "./*.php",
                "./template-parts/*/*.php"
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "../../dist/styles/[name].css"
        }),
    ]
});