// 取得表單內容
let myDrink=document.getElementsByName('drinks');

for(let i=0;i<myDrink.length;i++){
    console.log(myDrink[i].value);
}

// 取得以勾選的表單項目
// 1.找到按鈕
let myBtn=document.querySelector('#btn');
// 2.檢查是否被勾選，如果有就存起來
myBtn.addEventListener('click',function(){
    let arrResult=[];
    let arrResultNot=[];
    let myDrink=document.getElementsByName('drinks');
    for(let i=0;i<myDrink.length;i++){
        if(myDrink[i].checked){
            arrResult.push(myDrink[i].value);
        }
        if(!myDrink[i].checked){
            arrResultNot.push(myDrink[i].value);
        }
    }
console.log('有被勾選的項目:'+arrResult);
console.log('沒有被勾選的項目:'+arrResultNot);
});


