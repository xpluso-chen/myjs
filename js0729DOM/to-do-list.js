// 1.找到按鈕
let newTask = document.querySelector('#btnNew');


// 2.執行按鈕任務
newTask.addEventListener('click', () => {

    let thetask = document.querySelector('#task');
    // 接收文字

    // 顯示新增文字
    // 1.宣告標籤節點
    let newLi = document.createElement('li');
    // 2.宣告文字節點
    let newText = document.createTextNode(thetask.value);
    // 3.將文字加進標籤(合在一起)
    newLi.appendChild(newText);
   

    // 4.取得指定位置
    let showTask = document.querySelector('#showTasks');
    // 5.將3新增到指定位置=>div
    showTask.appendChild(newLi);


    // 1.宣告標籤節點
    let span = document.createElement('span');
    // 2.宣告文字節點
    let txt = document.createTextNode('X');
    // 3.將文字加進標籤(合在一起)
    span.appendChild(txt);
    newLi.appendChild(span);

    // 新增一條li的同時添加點選事件監聽器(來刪除li)
    span.addEventListener('click', function () {
        // showTask.removeChild(newLi);
        // newLi.style.display = 'none';
        // 刪除線
        newLi.style.textDecoration = 'line-through';
    });






});




// newDelBtn.addEventListener('click', () => {

//     let removeLi = document.getElementsByClassName('li'+[i]);
//     // 找到父節點
//     let parentElm = removeLi.parentNode;
//     // 從父節點移除
//     parentElm.removeChild(removeLi)
// })






