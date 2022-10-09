# Todo-List

HTML, CSS, JS를 이용하여 만든 Todo List입니다. 😀

https://bohodays.github.io/Todo-List/

2022.10.09 코드 개선

```javascript
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
```

기존의 코드는 위와 같이 새로 만드는 아이템마다 일일이 만들어서 추가하다보니

코드의 길이가 길고 효율적이지 않았습니다. 그래서 템플릿 리터럴 백틱(``)을 사용하여 코드를 줄였습니다.

그리고 이벤트 위임을 이용해서 코드를 개선했습니다.

아이템마다 고유한 아이디를 지정한 후 delete 버튼에도 아이디를 기억하게 해서 버튼을 클릭하면

버튼에 할당되어져있는 아이디 이용해서 원하는 아이템을 삭제하도록 하였습니다.

<br>

#### 앞으로 추가할 기능

`localstorage`
