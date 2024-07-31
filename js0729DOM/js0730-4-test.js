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
 
    
    // 3.顯示資料

    // 有被勾選的項目:
let str1="";
if(arrResult.length >0){
    str1="<div><ul id=''>有被勾選的項目:";

    for(i=0;i<arrResult.length;i++){
        str1=str1+`<li>${arrResult[i]}</li>`;
    }

    str1=str1+"</ul></div>";    
}

// 沒有被勾選的項目:
let str2="";
if(arrResultNot.length >0){
    str2="<div><ul id=''>沒有被勾選的項目";

    for(i=0;i<arrResultNot.length;i++){
        str2=str2+`<li>${arrResultNot[i]}</li>`;
    }
    
    str2=str2+"</ul></div>";
}

// id=''是留給未來CSS用的


// 寫回HTML資料
let showdata=document.getElementById('showData');
showdata.innerHTML=str1+str2;



});
