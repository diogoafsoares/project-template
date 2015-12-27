exports = module.exports


var patients = require('./patients.json');
var requests = require('./requests.json');
var acts = require('./acts.json');
var reimb = require('./acts-rmb.json');
var doctors = require('./doctors.json');
var reports = require('./reports.json');

exports.sayHello = function (name) {
  return 'Hello ' + (name || 'World')
}


exports.getpatients = function() {
	return patients
}

exports.getrequests = function() {
	return requests
}

exports.getacts = function() {
	return acts
}


exports.getreimb = function() {
	return reimb
}

exports.getdoctors = function() {
	return doctors
}

exports.postlogin = function (user, pswrd) {


	for(var i = 0; i < doctors.length; i++){

	if(user === doctors[i]["user"] && pswrd === doctors[i]["pass"]){
			
			return [true, doctors[i]];
		}
	}

	return [false, ''];
}

exports.getreports = function() {
	return reports
}
