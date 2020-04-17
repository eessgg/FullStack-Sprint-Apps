const outputCards = document.querySelector(".tasks-main-box");
const taskInput = document.querySelector(".task-input");
const taskInputBtn = document.querySelector(".task-input-box button");
const closeBtn = document.querySelector(".close-btn");
const editBtn = document.querySelector('.edit')

taskInputBtn.addEventListener("click", function (e) {
  let taskvalue = taskInput.value;

  if (taskvalue.length > 0) {
    createTaskCard(taskvalue);
  }
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
});

editBtn.addEventListener("click", function() {
  console.log('oi')
})

function handleCloseClick(closeBtn) {
  if (closeBtn) {
    console.log(closeBtn);
    handleCloseClick(closeBtn);
  }
}

function createTaskCard(taskvalue) {
  outputCards.innerHTML += `
    <div class="task-card">
      <div class="header">
        <h4><span> <i class="large material-icons">bookmark</i> </span> PERSONAL TASK</h4>
        <span class="close-btn"> <i class="large material-icons">close</i> </span>
      </div>
      <div class="body">
        <p class="sentence">${taskvalue}  </p>
        <span class="edit"> <i class="large material-icons">edit</i></span>
      </div>
    </div>
  `;
}

// function removeCard() {
//   alert('quer excluir?')
// }
