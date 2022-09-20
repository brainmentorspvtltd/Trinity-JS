function add(){
    //console.log("I am the Add ");
    var sum = 0;
    for(var i = 0 ; i<arguments.length; i++){
        sum = sum + (isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
    }
    return sum;
}
