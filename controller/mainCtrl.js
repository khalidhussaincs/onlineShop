/**
 * Created by HP on 12/30/2015.
 */
angular.module("entertainShop")
    .controller("mainCtrl",function ($scope,$location) {
        $scope.name = "Entertain Shop";

        $scope.gotoDashbaord = function (){
           $location.path('dashboard')
        }
    });