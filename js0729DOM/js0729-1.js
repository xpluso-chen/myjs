// 取得元素結點


// 應用1:取出標籤內容
let myli=document.getElementsByTagName('li');
console.log(myli.item(0).textContent);//取出指定某個li
console.log(myli[0].textContent);//取出指定某個li
// console.log(myli);僅能取出所有li id
// console.log(myli.textContent)->undefined

// 取出所有li內容的正確寫法
for(let i=0;i<myli.length;i++){
    console.log(myli[i].textContent);
}

let myh1=document.getElementsByTagName('h1');
console.log(myh1.item(0).textContent);


// 應用2:取出ID內容
let myjs1=document.getElementById('name1');
console.log(myjs1.textContent);

let myjs2=document.querySelector('#name2');
console.log(myjs2.textContent);


// 應用3:取出class內容
let friendClass=document.getElementsByClassName('friend');
console.log(friendClass['name1'].textContent);//取出指定某個id

// 取出class所有內容的正確寫法
for(let i=0;i<friendClass.length;i++){
    console.log(friendClass[i].textContent);
}

// 用法比較:
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);
