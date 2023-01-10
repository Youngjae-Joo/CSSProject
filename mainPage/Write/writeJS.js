var btn_create = document.querySelector(".btn-create");
var btn_back = document.querySelector(".btn-back");
var title = document.querySelector(".title-content");
var content = document.querySelector(".content");
var index = localStorage.length-1;

btn_create.onclick = function(){
    
    index++;
    localStorage.setItem("title"+index, (title.value));
    localStorage.setItem("content"+index, (content.value));

    if(confirm('작성하시겠습니까?') === true){
        location.href="/mainPage/mainHTML.html";
    }

}
btn_back.onclick = function(){
    
    if(confirm('작성 내용이 사라집니다. 돌아가시겠습니까?') === true){
        location.href="/mainPage/mainHTML.html";
    }

}