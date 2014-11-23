function UpdateEmployeeController($scope, $http, $routeParams) {
    var id = $routeParams.EmployeeId
    //$scope.EEmployee = {};
    $http.get("http://localhost:13291/odata/Employees/("+id+")")
        .success(function (data, status) {
            $scope.EEmployee = data
        });

    $scope.UpdateEmployee = function (employee) {
        $http.put("http://localhost:13291/odata/Employees/(" + employee.EmployeeID + ")", employee)
        .success()
        {
            alert("Employee with ID: " + employee.EmployeeID + " has been updated");
        }
    };
}