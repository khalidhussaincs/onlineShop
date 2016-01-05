
angular.module("entertainShop")
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/login.html'
                    //controller: 'AddOrderController'
                })
                .when('/dashboard', {
                    templateUrl: 'views/dashbaord.html',
                    controller: 'dashboardCtrl'
                })

                .when('/leptop', {
                    templateUrl: 'views/leptop.html',
                    controller: 'leptopCtrl'
                })

                .when('/phone', {
                    templateUrl: 'views/smartPhone.html',
                    controller: 'smartphoneCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);