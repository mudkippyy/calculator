console.log("s")

function clearResult(){
    document.getElementById("result").value = "";
    
}

function display(value){
    length = document.getElementById("result").value.length;
    if(length == 10){
        return;
    }

    document.getElementById("result").value += value;
}

function calc(){
    var x = document.getElementById("result").value;
    try{
        var p = eval(x);
        
        document.getElementById("result").value = p;
        
    }
    catch(err){
        document.getElementById("result").value = "ERROR";
    }
}

