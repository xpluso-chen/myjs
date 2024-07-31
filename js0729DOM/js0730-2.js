let result="";//放選取結果
let myBtn=document.querySelector('#btn');
myBtn.addEventListener('click',function(){
    let myCity=document.querySelector('#city');
    // 逐一檢查選項是否被選取=>selected
    for(i=0;i < myCity.length ; i++){
        if(myCity[i].selected){
            
            if(myCity[i].value == ""){
                result = "尚未選擇";
            }else{
                result = myCity[i].value;
            }
            break;
        }
    }
    console.log('縣市'+result);

});