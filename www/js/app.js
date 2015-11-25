//var ionicio = require('ionic-platform-web-client');
//console.log('ionicio is ', ionicio);

console.log('Ionic Platform is ', Ionic);
Ionic.io();

angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
