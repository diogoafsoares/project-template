exports = module.exports


var patients = require('./patients.json');
var requests = require('./requests.json');
var acts = require('./acts.json');
var reimb = require('./acts-rmb.json');
var doctors = require('./doctors.json');

exports.sayHello = function (name) {
  return 'Hello ' + (name || 'World')
}

exports.Diogo = function() {
	return 'Diogo é panila'
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

