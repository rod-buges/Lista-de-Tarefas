let counter = 0;
let input = document.getElementById('input-task');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('list-area');

function addTask(){
    let inputValue = input.value;


    if((inputValue !=="") && (inputValue !==null) && (inputValue !==undefined)){

        ++counter;

         let newItem = `<div id="${counter}" class="item">
         <div onclick="markTask(${counter})" class="item-icon">
             <i id="icone_${counter}" class="mdi mdi-circle-outline"></i>
         </div>
         
         <div onclick="markTask(${counter})" class="item-name">
           ${inputValue}
         </div>
         
         <div class="item-button">
         <button onclick="del(${counter})" class="delete"><i class="mdi mdi-delete"></i>Apagar</button>
         </div>
         </div>`;

         main.innerHTML += newItem;//main new item


        //empty block
        input.value = ""; 
        input.focus();

        

    }
}

function del(id){
     var task = document.getElementById(id);
     task.remove();
}

function markTask(id){
     var item = document.getElementById(id);
     var classe = item.getAttribute('class');
     console.log(classe);

     if(classe=="item"){
        item.classList.add('click');

        var icone = document.getElementById('icone_'+id) 

        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);


     }else{
        item.classList.remove('click');

        var icone = document.getElementById('icone_'+id) 

        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
     }
}

input.addEventListener("keyup", function(event){

    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})
