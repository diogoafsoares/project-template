var app = angular.module('cwApp', []);

app.controller('defaultCtrl', function($scope, $http){
	$http.get("http://127.0.0.1:8090/cwData.json").then(function(response) {
               $scope.courses = response.data.courses;
               });
			   $http.get("http://127.0.0.1:8090/patients.json").then(function(response){
			$scope.patients = response.data;
		});
		$http.get("http://127.0.0.1:8090/requests.json").then(function(response){
			$scope.requests = response.data;
		});
		
		$scope.first=true;
		$scope.second=false;
		$scope.third=false;
		
		$scope.gotosecond = function (){
			$scope.first=false;
		$scope.third=false;
		$scope.second=true;
		}
		$scope.gotothird = function(p){
			$scope.patient = p.name;
			$scope.policy = p.policy_number;
			$scope.policytype = p.policy_type;
			$scope.patid = p.patID;
			$scope.first=false;
		$scope.second=false;
		$scope.third=true;
		}
			   
})
                                             
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