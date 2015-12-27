var server = require('./../index.js')
var resources = require('./../resources')

server.route({
  method: 'GET',
  path: '/hello',
  handler: resources.hello.get
})

server.route({
  method: 'POST',
  path: '/hello',
  handler: resources.hello.post
})

server.route({
	method: 'GET',
	path: '/diogopanila',
	handler: resources.hello.diogo
})

server.route({
	method: 'GET',
	path: '/getpatients',
	handler: resources.hello.getpatients
})

server.route({
	method: 'GET',
	path: '/getrequests',
	handler: resources.hello.getrequests
})

server.route({
	method: 'GET',
	path: '/getacts',
	handler: resources.hello.getacts
})

server.route({
	method: 'GET',
	path: '/getreimb',
	handler: resources.hello.getreimb
})

server.route({
	method: 'GET',
	path: '/getdoctors',
	handler: resources.hello.getdoctors
})

server.route({
  method: 'POST',
  path: '/postlogin',
  handler: resources.hello.postlogin
})