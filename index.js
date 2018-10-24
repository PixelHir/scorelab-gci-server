var http = require('http');
var server = http.createServer(function (req, res) {
	res.end('PixelHir, loves contributing to Scorelab.');
});
server.listen('8080');

