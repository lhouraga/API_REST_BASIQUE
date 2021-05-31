const express=require ('express');
const app = express();

var server=app.listen(4040,function(){ 
    var host= server.address().address
    var port= server.address().port

    console.log('Server starting at http://localhost',host,port);

} )
