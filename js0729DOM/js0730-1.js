let myBtn=document.querySelector('#btn');

myBtn.addEventListener('click',function(){
    let resulit="";
    let subjects=document.getElementsByName('subject');
// 取出所有subject的按鈕

for(i=0;i<subjects.length;i++){
    if(subjects[i].checked){
        resulit=subjects[i].value;
        break;
        // 因為是單選
    }
}
console.log('科目:'+resulit);

});