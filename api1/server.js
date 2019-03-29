console.log('server is starting');

var express= require('express'); //this returns a function so the whole express is actually a fucntion
var app= express();
var server= app.listen(3000, listening);
function listening(){
    
    console.log("listening...");
}

app.use(express.static('website'));

app.get('/search/:flower/:num', sendFlower); //second is a callback funciton

function sendFlower(request, response){
    var data = request.params;
    var num = data.num;
    var reply="";
    for(var i=0;i<num;i++)
        {
            reply+= "I love "+ data.flower + " too ";
        }
    response.send(reply);
    
}