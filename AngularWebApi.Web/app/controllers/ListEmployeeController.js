function ListEmployeeController($scope, $http, $location){
    $http.get("http://localhost:13291/odata/Employees")
        .success(function (data, status) {
            $scope.Employees = data.value;
        });

    $scope.RemoveEmployee = function (emp) {
        $http.delete("http://localhost:13291/odata/Employees/(" + emp.EmployeeID + ")")
            .success(function () {
                alert("Employee Removed!");
                scope.$apply(function () { $location.path("/"); });
            });
    }
}