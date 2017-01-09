//	Visit localhost:3000 to view readout from the server

/*
*	Require the http module from node.js
*	Listen on port 3000
*/
const http = require('http')
const port = 3000


/*
*	Log the request that is made to the server
*	Provide a response from the server
*/
const requestHandler = (request, response) => {
	console.log(request.url)
	response.end('Hello. World! From Node.js Server')
}
const server = http.createServer(requestHandler)


/*
*	Error handling:
*	If error, log error message
*	If no error, log the port that the server is listening to
*/
server.listen(port, (err) => {
	if (err) {
		return console.log('Error, check your stuff!', err)
	}
	console.log(`Server is listening on ${port}`)  // Log port that the server is listening to
})