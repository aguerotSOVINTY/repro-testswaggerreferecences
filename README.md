# repro-testswaggerreferecences
Test project to repro issue in swagger ui with external references

Repro steps:

launch express server: node index.js
navigate to http://petstore.swagger.io
enter http://localhost:8888/test.json and click on explore
expand Queries / /get/{id}
on 200 response, click on model
 -> http://localhost:8888/test.json#/definitions/ErrorResponse {}
    this is resolved as a remote $ref whereas it is defined as local in test.json
 -> http://localhost:8888/Customer.json#/definitions/Customer {}
    this reference exists but is not found  
 => are not resolved

same on Commands / post /myCustomActionName
 -> http://localhost:8888/test.json#/definitions/ErrorResponse {}

if I merge the content of customer.json and toto.json with test.json everything works fine