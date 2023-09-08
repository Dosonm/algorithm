function keyWhile(){
    let checkbox = ["1","2","3","key","5","6"];
    let emptyBox = [];

    while(checkbox.length>0){
        for(let i=0;i<checkbox.length;i++){
            if(checkbox[i]==="key"){
                alert(i+"번째 박스에서 열쇠를 찾았습니다");
                console.log(checkbox)
                console.log(emptyBox)
                return;
            } else{
                emptyBox.push(checkbox[i]);
                delete checkbox[i];
            }
        }
    }
}
keyWhile();
