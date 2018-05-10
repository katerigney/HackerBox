var app = angular.
    module("main", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: '/scripts/app/pages/dashboard.html',
        controller: 'homeController'
    });

    $routeProvider.when("/product", {
        templateUrl: '/scripts/app/pages/productProfile.html',
        controller: 'productController'
    });

    $routeProvider.when("/product-sign-up", {
        templateUrl: '/scripts/app/pages/product-sign-up.html',
        controller: 'product-sign-upController'
    });

    $routeProvider.when("/admin", {
        templateUrl: '/scripts/app/pages/adminEntry.html',
        controller: 'adminEntryController'
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});

