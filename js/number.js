function isEvenNumber(a){
    var result;
    result = a % 2 == 0
    return result;
    
}

function isAcceptableNumber(a){
    var result;
    result = (a % 2 != 0) && (a % 3 != 0)
    return result;
}

function isMultipleOf5(number){
    if(number % 5 == 0){
       return 1;
    }
    else{
       return 0; 
    }
}

function divideBy2(){
}
