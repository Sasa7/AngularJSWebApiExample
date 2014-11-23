function NewEmployeeController($scope, $http) {
    $scope.AddEmployee = function () {
        $http.post("http://localhost:13291/odata/Employees", $scope.Employee)
            .success(function () {
                alert("Employee saved!")
            });
    }

    
}