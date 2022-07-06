import { editTasks } from './script.js'
//class constructor
class TaskManager {
  static id = 0
  constructor(
    newTaskName,
    newAssignTo,
    newDueDate,
    newSelectStatus,
    newAddDescription,
  ) {
    this.newTaskName = newTaskName;
    this.newAssignTo = newAssignTo;
    this.newDueDate = newDueDate;
    this.newSelectStatus = newSelectStatus;
    this.newAddDescription = newAddDescription;
    this.id = TaskManager.id
  }

  storeData(obj){ 
    let task = {id: ++TaskManager.id, ...obj}
    console.log(task)
    localStorage.setItem(task.id, JSON.stringify(task));
  }

  render(card, divToInsert, task){
    const newDiv = document.createElement("div");
    divToInsert.appendChild(newDiv);
    newDiv.classList.add("card1");
    newDiv.addEventListener("click", () => {
      editTasks(task), window.scrollTo(0, 0);
    });
    newDiv.innerHTML = card;
    this.storeData(task)
  }

}
export { TaskManager };