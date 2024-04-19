let input = document.getElementById("input");
let taskholder = document.getElementById("task-holder");
let adding = document.getElementById("adding");
let arr = [];

function addtask(){
    arr.push(input.value)
    taskholder.innerHTML = ""
    if(input.value == ""){
        alert("input field cannot be empty")
    }else{
        input.value = ""
        for (let index = 0; index < arr.length; index++) {
            taskholder.innerHTML += `
                <li>
                    ${arr[index]}
                    <div class="button-div">
                        <button onclick="edit(${index})" id ="edit"><i class="fa-solid fa-pen" id="icon"></i></button>
                        <button onclick="del(${index})" id ="delete"><i class="fa-solid fa-xmark" id="icon"></i></button>
                    </div>
                </li>
            `
        }
    }
}

function edit(index){
    let newlist = prompt("Enter new task")
    arr.splice(index, 1,newlist)
    taskholder.innerHTML = ""
    for (let index = 0; index < arr.length; index++) {
        taskholder.innerHTML += `
            <li>
                ${arr[index]}
                <div>
                    <button onclick="edit(${index})" id ="edit">Edit</button>
                    <button onclick="del(${index})" id ="delete">Delete</button>
                </div>
            </li>
        `
    }
}

function del(index){
    arr.splice(index, 1,)
    taskholder.innerHTML = ""
    for (let index = 0; index < arr.length; index++) {
        taskholder.innerHTML += `
            <li>
                ${arr[index]}
                <div>
                    <button onclick="edit(${index})" id ="edit">Edit</button>
                    <button onclick="del(${index})" id ="delete">Delete</button>
                </div>
            </li>
        `
    }
}
