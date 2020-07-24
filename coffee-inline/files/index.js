var getRawBody = require('raw-body')
var version = 'coffee-'+process.env.VERSION
module.exports.handler = function (request, response, context) {
    var respBody = new Buffer('Hello ' + version + '\n')
    response.setStatusCode(200)
    response.setHeader('content-type', 'application/json')
    response.send(respBody)
};
