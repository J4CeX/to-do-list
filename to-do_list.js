const addInput = document.querySelector('.add-input');
const listContainer = document.querySelector('.list-container');

const addButton = document.querySelector('.add-button');

addButton.addEventListener('click', () => {
  if(addInput.value === '') {
    alert("it's empty!");
  } else {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = addInput.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(p);
    li.appendChild(span);
  }
  addInput.value = '';
  setData();
});

listContainer.addEventListener('click', (event) => {
  if(event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    setData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    setData();
  }
});

const setData = () => {
  localStorage.setItem("data", JSON.stringify(listContainer.innerHTML));
}

const getData = () => {
  listContainer.innerHTML = JSON.parse(localStorage.getItem("data"));
}

getData();