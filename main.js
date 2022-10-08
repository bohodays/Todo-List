const input = document.querySelector('.textInput__input');
const addBtn = document.querySelector('.textInput__btn');
const items = document.querySelector('.items');

function onAdd() {
  const text = input.value;

  const item = createItem(text);

  items.appendChild(item);
  item.scrollIntoView({ block : 'center'});
  input.value = '';
  input.focus();
};

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item')
  itemRow.appendChild(item);
  
  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;
  item.appendChild(name);
  
  const btns = document.createElement('div');
  btns.setAttribute('class', 'btns');
  item.appendChild(btns);

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  btns.appendChild(deleteBtn);
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const divider = document.createElement('div');
  divider.setAttribute('class', 'btn__divider');
  btns.appendChild(divider);

  const checkBtn = document.createElement('button');
  checkBtn.setAttribute('class', 'item__check');
  btns.appendChild(checkBtn);
  checkBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  checkBtn.addEventListener('click', () => {
    name.classList.toggle('line-through');
  })

  return itemRow;
};

addBtn.addEventListener('click', () => {
  onAdd();

});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

const allDeleteBtn = document.querySelector('.all-delete__button');
allDeleteBtn.addEventListener('click', () => {
  items.innerHTML = '';
})