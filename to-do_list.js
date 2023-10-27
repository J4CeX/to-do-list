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
let listContent = "";

list.forEach((task) => {
  listContent += `
    <li><button class="check check-${task.id}"><img src="check-mark-button.png" alt="check" width="60px" height="60px" class="hidden"></button><p class="content">${task.content}</p><button class="remove remove-${task.id}">x</button></li>
  `;
})
toDoList.innerHTML = listContent + add;

