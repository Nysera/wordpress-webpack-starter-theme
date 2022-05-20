const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBar = require('webpackbar');

// destructure paths from paths.js in the helpers folder
const { projectJsPath, projectDistPath } = require("./helpers/paths");

module.exports = {
    entry: path.resolve(projectJsPath, "main.js"),
    output: {
        // Set publicPath as empty to fix the appending of auto to generated menifest.json
        // Looks like a temporary fix, I couldn't find much on it
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new WebpackManifestPlugin({
            fileName: path.resolve(projectDistPath, "manifest.json")
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.resolve(projectDistPath)
            ]
        }),
        new WebpackBar()
    ]
};