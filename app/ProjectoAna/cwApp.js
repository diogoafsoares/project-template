var app = angular.module('cwApp', []);
app.controller('cwCtrl', function($scope) {
                                                            $scope.default_user = { firstname: "Patricia", lastname: "Ruivo"};
                                                            $scope.reset_form = function() {
                                                                           $scope.user = angular.copy($scope.default_user);
                                                            };
                                                            $scope.reset_form();
                                                            
                                                            $scope.fullname = function() {
                                                                           return $scope.user.firstname + " " + $scope.user.lastname;
                                                            };
                                                            $scope.count = 0;
                                             });
                                             
app.controller('coursesCtrl', function($scope, $http){
               $http.get("http://127.0.0.1:8090/cwData.json").then(function(response) {
                                             $scope.courses = response.data.courses;
               });
});

	
app.controller('patientsCtrl', function($scope, $http){
	$http.get("http://127.0.0.1:8090/patients.json").then(function(response){
			$scope.patients = response.data;
		});
	});
	
app.controller('requestsCtrl', function($scope, $http){
	$http.get("http://127.0.0.1:8090/requests.json").then(function(response){
			$scope.requests = response.data;
		});
	});