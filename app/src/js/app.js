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

	$http.get("http://localhost:9000/getreports").then(function(response){
	$scope.report = response.data;
	});


	$scope.first=true;
	$scope.second=false;
	$scope.third=false;

	$scope.add=false;
	$scope.newact=false;
	

	$scope.gotosecond = function (user, pswrd){

		$http.post("http://localhost:9000/postlogin", {user: user, pswrd: pswrd}).then(function(response) {
			$scope.login = response.data[0];
			$scope.dados = response.data[1];


			if($scope.login ==true){
				$scope.docname = $scope.dados.name;
				$scope.docesp = $scope.dados.speciality;
				$scope.docid = $scope.dados.doc_ID;

				$scope.first=false;
				$scope.third=false;
				$scope.second=true;
			}
			else{
				alert("Error: Password or Username invalid");/*displays error message*/
			}
		});
	
		
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

	$scope.gotofirst = function (){
		$scope.second=false;
		$scope.third=false;
		$scope.first=true;
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

	
	$scope.tableacts = [ ];

	$scope.addRow = function(a){	

		$scope.actname = a.name;
		$scope.actid = a.actID;
		$scope.actcost = a.cost;

		$http.get("http://localhost:9000/getreimb").then(function(response){
		$scope.rmb = response.data;
		});

		var r = eval($scope.rmb);

		for(var i = 0; i < r.length; i++){
			if ($scope.policytype == r[i].policy_type){
				$scope.reimbursement = r[i].reimb_percentage;
			}

		}

	$scope.tableacts.push({ 'actid':$scope.actid, 'name': $scope.actname, 'cost': $scope.actcost, 'rmb': $scope.reimbursement});
		
	}

	$scope.removeRow = function(act){		
		$scope.name = act.name;
		var index = -1;		
		var tab = eval( $scope.tableacts );

		for( var i = 0; i < tab.length; i++ ) {
			if( tab[i].name == $scope.name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.tableacts.splice( index, 1 );		

	}


})


