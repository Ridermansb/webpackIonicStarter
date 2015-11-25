var AngularPlugin = require('angular-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, '/www/js/app.js'),
    devtool: 'eval',
    output: {
        path: __dirname + "/www",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', 'html'],
        root: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'bower_components')
        ],
        moduleDirectories: [
            'bower_components',
            'node_modules'
        ],
        alias: {
            //'Ionic': 'ionic-platform-web-client'
            //'ui.router': 'angular-ui-router',
            //'ngMaterial': 'angular-material',
            //'ngAnimate': 'angular-animate',
            //'ngAria': 'angular-aria',
            //'ngMdIcons': 'angular-material-icons',
            //'ngMessages': 'angular-messages',
            //'ngResource': 'angular-resource',
            //'ngCookies': 'angular-cookies',
            //'ngCordova': 'cordova'
        }
    },
    externals: {
        'Ionic': 'Ionic'
    },
    plugins: [
        //new AngularPlugin()
        //,new webpack.ResolverPlugin(
        //    [
        //        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        //    ], ["normal", "loader"]
        //),
        new webpack.ProvidePlugin({
            Ionic: 'Ionic'
        })
    ]
};

