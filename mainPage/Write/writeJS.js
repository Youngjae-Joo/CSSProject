let btn_create = document.querySelector(".btn-create");
let btn_back = document.querySelector(".btn-back");
let title = document.querySelector(".title-content");
let content = document.querySelector(".content");

btn_create.onclick = function(){

    localStorage.setItem("title", (title.value));
    localStorage.setItem("content", (content.value));

    if(confirm('작성하시겠습니까?') === true){
        location.href="/mainPage/mainHTML.html";
    }

}
btn_back.onclick = function(){
    
    if(confirm('작성 내용이 사라집니다. 돌아가시겠습니까?') === true){
        location.href="/mainPage/mainHTML.html";
    }

}