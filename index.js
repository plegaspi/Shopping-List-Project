let position = document.getElementById('shoppingList');

function addItem() {
  if (document.getElementById('addItem').value.length === 0) {
    document.getElementsByClassName('warning')[0].innerHTML = "Please enter a value into the input field.";
  }
  else if (document.getElementsByTagName('li').length < 7) {
    document.getElementsByClassName('warning')[0].innerHTML = "";
    let addedItem = document.getElementById('addItem').value;
    document.getElementById('addItem').value = "";
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(addedItem));
    position.appendChild(listItem);
  }
  else {
    document.getElementsByClassName('warning')[0].innerHTML = 'You cannot add more the 7 items to the list. Please remove some items if you want to do so.';
  }
}

function removeItem() {
  let removedItem = document.getElementById('removeItem').value - 1;
  document.getElementById('removeItem').value = "";
  position.removeChild(document.getElementsByTagName('li')[removedItem]);
  if (document.getElementsByTagName('li').length < 7) {
    document.getElementsByClassName('warning')[0].innerHTML = "";
  }
}