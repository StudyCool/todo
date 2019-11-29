'use strict';

const tasks = [];

const task createTaskItemValue

createTaskButtonElem.onclick = function (event) {
    const {value} = taskInputElem;
if (value) {

    tasks.push(value);
    const taskItem = createTaskListItemElem( {
        id:tasks.length - 1,
        value: value
    });
    taskListElem.prepend(taskItem);
    taskInputElem.value = "";

}
};

