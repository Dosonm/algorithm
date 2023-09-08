let result = 1;
function factorial(k){
    result = result*k;
    k=k-1;
    if(k===0){
        return result;
    } else{
        console.log(result);
        factorial(k);      
    }
}
factorial(10)

//좀 더 쉽게 간단하게 만들어보자

function newFactorial(x){
    if(x===1){
        return x;
    } else{
        x=x*newFactorial(x-1);
        return x;
    }
}

console.log(newFactorial(10))