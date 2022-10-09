const input = document.querySelector('.textInput__input');
const addBtn = document.querySelector('.textInput__btn');
const items = document.querySelector('.items');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block : 'center'});
  input.value = '';
  input.focus();
};

let id = 0;
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
      <div class="item">
        <span class="item__name" data-id=${id}>${text}</span>
        <div class="btns">
          <button class="item__delete">
            <i class="fa-solid fa-trash-can delete__icon" data-id=${id}></i>
          </button>
          <div class="btn__divider">
          </div>
          <button class="item__check">
            <i class="fa-regular fa-circle-check check__icon" data-id=${id}></i>
          </button>
        </div>
      </div>
  `;
  id++;
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

// 이벤트 위임
items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    if (event.target.classList.contains('delete__icon')) {
      const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
      toBeDeleted.remove();
    } else if (event.target.classList.contains('check__icon')) {
      const toBeLineThrough = document.querySelector(`.item__name[data-id="${id}"]`);
      console.log(toBeLineThrough);
      toBeLineThrough.classList.toggle('line-through');
    }
  }
});
