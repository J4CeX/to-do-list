let list = [{
  id: 1,
  content: "task1",
  hidden: true
}, {
  id: 2,
  content: "task2",
  hidden: true
}, {
  id: 3,
  content: "task3",
  hidden: true
}, {
  id: 4,
  content: "task4",
  hidden: true
}];

const add = `<li><button class="add">+</button></li>`;
const toDoList = document.querySelector(".list");

const actualise = () => {
  let listContent = '';
  list.forEach((task) => {
    listContent += `
      <li><button class="check check-button"><img src="check-mark-button.png" alt="check" width="60px" height="60px" class="hidden"></button><p class="content">${task.content}</p><button class="remove remove-button">x</button></li>
    `;
  });
  toDoList.innerHTML = listContent + add;

  const addButton = document.querySelector('.add');
  addButton.addEventListener('click', () => {
    list.push({
      id: list.length+1,
      content: `task${list.length+1}`
    });
    actualise();
  });
};

const removeTask = (taskId) => {
  newList = [];
  list.forEach((element) => {
    if(element.id !== taskId) {
      newList.push(element);
    }
  });
  list = newList;
  actualise();
}

actualise();