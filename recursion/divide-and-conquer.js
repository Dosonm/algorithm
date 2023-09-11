//매게변수로 배열 넣기
function sum(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total = total + arr[i] 
    }
    console.log(total)
}
sum([1,2,3,4]);
