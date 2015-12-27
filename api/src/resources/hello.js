var bl = require('../../../bl/src')

exports = module.exports

exports.get = function handler (request, reply) {
  reply(bl.sayHello())
}

exports.post = function handler (request, reply) {
  reply(bl.sayHello(request.payload.name))
}

exports.diogo = function handler(request, reply) {
	reply(bl.Diogo())
}

exports.getpatients = function handler(request, reply) {
	reply(bl.getpatients())
}

exports.getrequests = function handler(request, reply) {
	reply(bl.getrequests())
}

exports.getacts = function handler(request, reply) {
	reply(bl.getacts())
}

exports.getreimb = function handler(request, reply) {
	reply(bl.getreimb())
}

exports.getdoctors = function handler(request, reply) {
	reply(bl.getdoctors())
}