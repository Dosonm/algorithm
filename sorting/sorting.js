let arr=[6,4,2,7,3,1,5];
let smallest = arr[0];
let newarr=[];

function findsmallest(){
    for(let i=1;i<arr.length;i++){
        if(smallest>arr[i]){
            smallest = arr[i];
        } 
    }
    newarr.push(smallest);
    return smallest;
}
console.log(findsmallest());
console.log(newarr)