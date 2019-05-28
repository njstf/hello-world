var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello Folks For GCP Webinar 2019 V1.2!");
}
var www = http.createServer(handleRequest);
www.listen(8080);