var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello Centurylink 21st Century 2019 V1.0!");
}
var www = http.createServer(handleRequest);
www.listen(8080);
