let inputs = document.getElementById("inp");
let texts = document.querySelector(".text");
let textUpdate = document.querySelector(".textUpdat");

// let editValue = false
let editingElement = null;

function add() {
  let inputValue = inputs.value.trim();
  console.log(inputValue);

  if (inputValue == "") {
    alert("Enter your Task");
  } else {
    if (textUpdate.innerHTML === "Update" && editingElement) {
      editingElement.textContent = inputValue;
      textUpdate.innerText = "Add";
      textUpdate.style.width = "60px";
      inputs.value = "";
      editingElement = null;
      return;
    }

    // Checking for duplicates and removing old ones
    let existingTasks = [...texts.getElementsByTagName("ul")];
    existingTasks.forEach((task) => {
      if (task.innerText.trim() === inputValue) {
        task.remove();
      }
    });

    let newEle = document.createElement("ul");
    let listItem = document.createElement("li");
    let deleteimg = document.createElement("img");
    let edit = document.createElement("img");

    deleteimg.id = "deleteimg";
    edit.id = "editimg";

    deleteimg.src = "./delete_.png";
    edit.src = "./plus_.png";

    edit.style.width = "20px";

    edit.style.position = "absolute";
    edit.style.right = "36px";

    deleteimg.style.width = "20px";
    deleteimg.style.right = "10px";

    deleteimg.style.position = "absolute";

    listItem.textContent = inputValue;
    listItem.appendChild(edit);
    listItem.appendChild(deleteimg);
    newEle.appendChild(listItem);
    texts.appendChild(newEle);

    inputs.value = "";

    deleteimg.addEventListener("click", function () {
      newEle.remove();
    });

    edit.addEventListener("click", function () {
      inputs.value = listItem.firstChild.textContent;
      editingElement = listItem.firstChild;
      textUpdate.innerText = "Update";
      textUpdate.style.width = "78px";
    });
  }
}
