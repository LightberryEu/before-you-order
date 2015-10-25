/// <reference path="./types.ts"/>
var lbconf = angular.module('lbconf', ['ngRoute', 'ngMaterial']).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html'
    }).otherwise({
        redirectTo: '/'
    });
}).config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('pink');
});
//# sourceMappingURL=lbconf.jsjs.map
