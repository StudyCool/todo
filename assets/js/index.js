'use strict';

const tasks = [];

const taskInputElem = window.document.querySelector('input[name="task"]');

const createTaskButtonElem = document.getElementById('createTaskButton');

const taskListElem = window.document.getElementById('tasksList');


createTaskButtonElem.onclick = function (event) {
    const {value} = taskInputElem;
    if (value) {

        tasks.push(value);
        const taskItem = createTaskListItemElem({
            id: tasks.length - 1,
            value: value
        });
        taskListElem.prepend(taskItem);
        taskInputElem.value = "";

    }
};


function createTaskListItemElem(task) {
    const taskListItemElem = window.document.createElement('li');
    taskListItemElem.setAttribute("id", task.id);
    taskListItemElem.appendChild(createTaskCheckBoxElem(task));

    taskListItemElem.append(task.value);
    return taskListItemElem;
}

function createTaskCheckBoxElem(task) {
    const taskCheckBoxElem = window.document.createElement('input');
    taskCheckBoxElem.setAttribute("type", "checkbox");
    taskCheckBoxElem.setAttribute("data-taskid", task.id);
    taskCheckBoxElem.onchange = onCheckBoxCheckedHandler;
    return taskCheckBoxElem;
}

function onCheckBoxCheckedHandler(event) {

   // const taskListItemElem = document.getElementById(this.dataset.taskid);
    document.getElementById(this.dataset.taskid).classList[this.checked ? "add" : "remove"]('doneTask')

    /*if(this.checked){
        taskListItemElem.classList.add('doneTask');
    }else{
        taskListItemElem.classList.remove('doneTask');
    }*/

}