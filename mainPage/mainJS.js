let btn_create = document.querySelector(".btn-create");
let contentBox = document.querySelector(".contentBox");

btn_create.onclick = function(){
    location.href="Write/write.html";
}

// console.log(localStorage);

if(localStorage.length >= 0){
    let content = document.createElement("input");
    content.value = localStorage.getItem("title");
    contentBox.appendChild(content);
}