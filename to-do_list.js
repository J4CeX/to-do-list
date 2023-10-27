let list = [{
  id: 1,
  content: "task1"
}, {
  id: 2,
  content: "task2"
}, {
  id: 3,
  content: "task3"
}, {
  id: 4,
  content: "task4"
}];

const add = `<li><button class="add">+</button></li>`;
const toDoList = document.querySelector(".list");

const actualise = () => {
  let listContent = "";
  list.forEach((task) => {
    listContent += `
      <li><button class="check"><img src="check-mark-button.png" alt="check" width="60px" height="60px" class="hidden"></button><p class="content">${task.content}</p><button class="remove">x</button></li>
    `;
  });
  toDoList.innerHTML = listContent + add;

  const addButton= document.querySelector('.add');
  addButton.addEventListener("click", (event) => {
    list.push({
      id: list.length+1,
      content: `task${list.length+1}`
    });
    actualise();
  });
}

actualise();