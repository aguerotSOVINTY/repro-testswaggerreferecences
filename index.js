//var express = require('express');
//

//var app = express();
//app.use(express.static('/schemas'));
//app.use(cors());
//app.options('*', cors()); // required to allow pre-flight request => https://www.npmjs.com/package/cors#enabling-cors-pre-flight

var path = require('path');
var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());
app.options('*', cors());
var publicStaticPath = path.join(__dirname, '/public');
app.use(express.static(publicStaticPath));

var swaggerStaticPath = path.join(__dirname, './node_modules/swagger-ui/dist');
app.use('/swagger', express.static(swaggerStaticPath));

console.log('Public: \t' + publicStaticPath);
console.log('Swagger: \t' + swaggerStaticPath);

app.listen(8888, function() {
  console.log('listening');
});