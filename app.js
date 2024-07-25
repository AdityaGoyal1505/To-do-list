let inputText=document.getElementById('input-text');
let inputDate=document.getElementById('input-Date');
let inputTime=document.getElementById('input-Time');
let listContainer=document.getElementById('list-container');

function addTask(){
    if(inputText.value==""){
        alert("Kindly fill the blank");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputText.value;
        listContainer.appendChild(li);
        let p=document.createElement('p');
        p.innerHTML=" on "+ inputDate.value+" at "+inputTime.value;
        li.appendChild(p);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputText.value="";
    inputDate.value="";
    inputTime.value="";
    saveData();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();