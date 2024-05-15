const taskList=document.querySelector('.taskList');
const btn=document.querySelector('.btn');
const inp=document.querySelector('.inp');

let tasks=[];

function addTaskToList(data){
    let li=document.createElement('li');
    li.classList.add('item');
    let str=`<div class="taskInput">
        <input type="checkbox" class="checkbox">
        <span class="task">${data[data.length-1]}</span>
    </div>
    <div class="buttons">
        <span class="upArrow">⬆</span>
        <span class="downArrow">⬇</span>
        <span class="deleteTask">🗑️</span>
    </div>`
    li.innerHTML=str;
    taskList.appendChild(li);

    // taskList.innerText='';
    // data.forEach(element=>{
    //     let li=document.createElement('li');
    //     li.innerText=element;
    //     taskList.appendChild(li);
    // })
}

btn.addEventListener('click',()=>{
    // console.log(inp.value);
    tasks.push(inp.value);

    addTaskToList(tasks);
    inp.value="";
})

// btn.addEventListener('click',()=>{
//     let li=document.createElement('li');
//     li.innerText=inp.value;
//     li.classList.add('item');
//     taskList.appendChild(li);
// })

// Adding Events
taskList.addEventListener('click',(e)=>{
    let kaunClickHua=e.target.getAttribute('class');
    // console.log(kaunClickHua);
    if(kaunClickHua=='upArrow'){
        let currentElement=e.target.parentElement.parentElement;
        // console.log(currentElement);
        let previousSibling=currentElement.previousElementSibling;
        // console.log(previousSibling);
        taskList.insertBefore(currentElement,previousSibling)
    }
    else if(kaunClickHua=='downArrow'){
        let currentElement=e.target.parentElement.parentElement;
        // console.log(currentElement);
        let nextSibling=currentElement.nextElementSibling;
        // console.log(previousSibling);
        taskList.insertBefore(nextSibling,currentElement)
    }
    else if(kaunClickHua=='deleteTask'){
        let currentElement=e.target.parentElement.parentElement;
        currentElement.remove();
    }
    else if(kaunClickHua=='checkbox'){
        let currentElement=e.target;
        let textJisprLineChangeHogi=currentElement.nextElementSibling;
        // console.log(currentElement);
        // console.log(textJisprLineChangeHogi);
        textJisprLineChangeHogi.classList.toggle('line-cut');
        // console.log(textJisprLineChangeHogi.classList);
    }
})