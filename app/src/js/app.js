/* globals bl */

var app =angular.module('cwApp', []);


app.controller('defaultCtrl', function($scope, $http){
	
	$http.get("http://localhost:9000/getpatients").then(function(response) {
		$scope.patient = response.data;
	});

	$http.get("http://localhost:9000/getrequests").then(function(response){
		$scope.request = response.data;
	});

	$http.get("http://localhost:9000/getacts").then(function(response){
		$scope.act = response.data;
	});

	$http.get("http://localhost:9000/getreimb").then(function(response){
		$scope.rmb = response.data;
	});

	$http.get("http://localhost:9000/getdoctors").then(function(response){
		$scope.doctor = response.data;
	});


	$scope.first=true;
	$scope.second=false;
	$scope.third=false;

	$scope.add=false;
	$scope.newact=false;

	$scope.tableacts = [{'a':'def', 'b':'def', 'c':'def', 'd':'def'},]

	$scope.gotosecond = function (user, pswrd){
		
		$scope.u= user;
		$scope.p = pswrd;
		$scope.verify = false;

		var doc = eval($scope.doctor);

		for(var i = 0; i < doc.length; i++){
		if($scope.u == doc[i].user && $scope.p == doc[i].pass){
			$scope.verify = true;
		}
	}
		if($scope.verify == true){
			$scope.first=false;
			$scope.third=false;
			$scope.second=true;
		}
		else{
			alert("Error: Password or Username invalid");/*displays error message*/
		}

		}

		$scope.gotosec = function (){
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

	$scope.gototerc = function (){
		$scope.second=false;
		$scope.first=false;
		$scope.third=true;
	}

	$scope.shownewact = function (){
		$scope.newact=true;
	}

	$scope.hidenewact = function (){
		$scope.newact=false;
	}

	$scope.delete = function (a){
		var index = $scope.acttable.indexOf(a);
		$scope.acttable.splice(index, 1);
	}

	$scope.createact = function (a){
		$scope.actname = a.name;
		$scope.actid = a.actID;
		$scope.actcost = a.cost;
		$scope.acttable.push(a.name);
		

		$http.get("http://localhost:9000/getreimb").then(function(response){
		$scope.rmb = response.data;
		});


		for(var i = 0; i < rmb.length; i++){
			if (actid === rmb.actid){
				$scope.reimbursement = rmb.reimb_percentage;
			}

		}

	}

	$scope.removeRow = function(name){				
		var index = -1;		
		var tableacts = eval( $scope.tableacts );
		for( var i = 0; i < tab.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.companies.splice( index, 1 );		
	};
)}


})


