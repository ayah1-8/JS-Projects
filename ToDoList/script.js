const btnAdd = document.getElementById("btnadd");
const taskInput = document.querySelector(".addinput");
const myAlert = document.querySelector(".myAlert");
const tasks = document.querySelector(".tasks");
const activeTab = document.querySelector(".activeTab");
const completedTab = document.querySelector(".completedTab");
const allTab = document.querySelector(".allTab");

const active = [];
const completed = [];
let all = [];

//3############################################################################################
function Tab(type) {
  const html = type
    .map((item) => {
      return `<li class="list-group-item singleTask">
            <input class="form-check-input me-1" type="checkbox" value="">
            ${item}
        </li>`;
    })
    .join("");
  return html;
}

//3############################################################################################

function AddTask() {
  if (taskInput.value == "") {
    myAlert.removeAttribute("hidden");
    return;
  }
  active.push(taskInput.value);
  const html = Tab(active);
  document.querySelector(".tasks").innerHTML = html;
  taskInput.value = "";

  //THIS BULLSSHHIHIIIITTT RIGHT HERE ISTHE THING THAT DROVE ME NUTS
  //SO I WAS ASSIGNING BY value where i would asssign htis down there to singleTasks and then i would print it. which results into it printing the OLLLLDDDDDDD innerHTML

  //const singleTasks = document.querySelectorAll(".singleTask");
  //const chkboxes = document.querySelectorAll('input[type = "checkbox"]');
  //arrChkboxes = Array.from(chkboxes);

  //console.log(singleTasks);
  //console.log(chkboxes);
  //console.log(arrChkboxes);

  //chkboxes.forEach((box) => box.addEventListener("click", handleCheck));
}
btnAdd.addEventListener("click", AddTask);

//3############################################################################################
function ShowActive() {
  const html = Tab(active);
  document.querySelector(".tasks").innerHTML = html;
}

function ShowAll() {
  all = [...active, ...completed];
  const html = Tab(all);
  tasks.innerHTML = html;
}
function ShowComplete() {
  const html = Tab(completed);
  tasks.innerHTML = html;
}

activeTab.addEventListener("click", ShowActive);
completedTab.addEventListener("click", ShowComplete);
allTab.addEventListener("click", ShowAll);
//3############################################################################################

function handleCheck(e) {
  if (this.checked == true) {
    let temp = e.path[1].innerText;
    active.pop(temp);
    completed.push(temp);
    console.log(completed);
    ShowActive();
  }
}

document
  .querySelectorAll('input[type = "checkbox"]')
  //.addEventListener("click", () => console.log("f"));
  .forEach((box) => box.addEventListener("click", handleCheck));

setInterval(() => {
  console.log(
    Array.from(document.querySelectorAll('input[type = "checkbox"]'))
  );
  document
    .querySelectorAll('input[type = "checkbox"]')
    //.addEventListener("click", () => console.log("f"));
    .forEach((box) => box.addEventListener("click", handleCheck));
}, 2000);
