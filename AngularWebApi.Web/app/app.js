var app = angular.module('MyApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: "/app/partials/List.html",
        controller: "ListEmployeeController"
    })
    .when('/AddEmployee', {
        templateUrl: "/app/partials/NewEmployee.html",
        controller: "NewEmployeeController"
    })
    .when('/EditEmployee/:EmployeeId', {
        templateUrl: "/app/partials/UpdateEmployee.html",
        controller: "UpdateEmployeeController"
    });

    //$locationProvider.html5Mode(true);
});

app.controller('NewEmployeeController', NewEmployeeController)
    .controller("ListEmployeeController", ListEmployeeController)
.controller("UpdateEmployeeController", UpdateEmployeeController);