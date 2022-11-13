function addToList(list, input) {
  if (input.value != "") {
    let container = document.createElement("article");
    container.className = "list-element " + input.value;

    let deleteIcon = document.createElement("img");
    deleteIcon.src = "pictures/delete.png";
    deleteIcon.className = "delete icon " + input.value;

    let upIcon = document.createElement("img");
    upIcon.src = "pictures/arrow.png";
    upIcon.className = "arrow up icon";

    let downIcon = document.createElement("img");
    downIcon.src = "pictures/arrow.png";
    downIcon.className = "arrow down icon";

    let arrowContainer = document.createElement("div");
    arrowContainer.className = "arrows " + input.value;

    let element = document.createElement("p");
    element.textContent = input.value;

    arrowContainer.appendChild(upIcon);
    arrowContainer.appendChild(downIcon);

    container.appendChild(deleteIcon);
    container.appendChild(element);
    container.appendChild(arrowContainer);

    list.appendChild(container);
    input.value = "";
  }
}

function removeItem(list, item){
    list.removeChild(item);
}

function moveItemUp(item){
    let before=item.previousElementSibling;

    insertBefore(item, before);
}

function moveItemDown(item){
    let after=item.nextElementSibling;

    insertAfter(item,after)
}

function insertAfter(item, next){
    let parent=item.parentNode;
    let after=next.nextElementSibling;

    if(after!=null){
        parent.insertBefore(item,after);
    }else{
        parent.appendChild(item);
    }
}
function insertBefore(item,previous){
    let parent=item.parentNode;

    parent.insertBefore(item,previous);
}