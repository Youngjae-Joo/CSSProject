let btn_create = document.querySelector(".btn-create");
let titleBox = document.querySelector(".titleBox");
let title = null;

btn_create.onclick = function () {
    location.href = "Write/write.html";
}

// console.log(localStorage);
for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes('title')) {
        title = document.createElement("input");
        title.value = localStorage.getItem(localStorage.key(i));
        titleBox.appendChild(title);
        title.classList.add("title");
        title.classList.add("title-toggle");
        title.readOnly = 'readonly';
    }
}

let contentBox = document.querySelector('.contentBox');
for(let i = 0; i < localStorage.length; i++){
    if(localStorage.key(i).includes('content')){
        let content = document.createElement('input');
        content.value = localStorage.getItem(localStorage.key(i));
        contentBox.appendChild(content);
        content.classList.add("content");
    }
}
titleBox.onclick = function(){
    if(event.target.tagName !== 'INPUT')return;

}