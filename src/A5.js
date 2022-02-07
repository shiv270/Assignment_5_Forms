function fetch(){
    var na= document.getElementById('name').value;
    var ag=parseInt(document.getElementById('age').value);
    console.log(ag);
    var wei=parseInt(document.getElementById('weight').value);
    var output="";
    output=submit(na,ag,wei);
    display(output);

} 

function submit(na,ag,wei) {
    var result=""
    if (ag =>5 && ag <= 7){
        if (wei<15){
           result="Hello "+na+" !!! Your weight is less than the recommended value of 15kg at an age of "+ ag;
        }
        else if(wei>20){
                result="Hello "+na+"!!! Your weight is greater than recommended value of 20kg at an age of "+ag;
            }
            else{
                result="Hello "+na+"!!!Your Weight is perfect";
            }

        }
    else if(ag=>8 && ag<=10){
        if (wei<21){
            result="Hello "+na+"!!! Your weight is less than the recommended value of 15kg at an age of "+ag;
        }
        else if(wei>25){
            result="Hello "+na+"Your weight is greater than the recommended value of 25kg at an age of "+ag;
        }
        else{
            result="Hello "+na+"Your Weight is perfect"
        }
    }
    else if(ag=>11 && ag<=15){
        if (wei<26){
            result="Hello "+na+"!!! Your weight is less than the recommended value of 26kg at an age of  "+ag;
        }
        else if(wei>30){
            result="Hello "+na+"Your weight is greater than the recommended value of 30kg at an age of "+ag;
        }
        else{
            result="Hello "+na+"Your Weight is perfect"
        }
    }
    else if(ag=>16 && ag<=20){
        if (wei<31){
            result="Hello "+na+"!!! Your weight is less than the recommended value of 15kg at an age of "+ag;
        }
        else if(wei>40){
            result="Hello "+na+"Your weight is greater than the recommended value of 25kg at an age of "+ag;
        }
        else{
            result="Hello "+na+"Your Weight is perfect"
        }
    }
    return result;
}

function display(output){
    document.getElementById("print").innerHTML= output;
}