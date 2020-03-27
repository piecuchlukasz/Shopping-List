const button = document.getElementById("enter");
const buttonprint = document.getElementById("print");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const body = document.body;

const inputLength = () => { 
	return input.value.length;
};

const createListElement = () => {	
	const newLi = document.createElement("li");
	const div = document.createElement('div');
	const p = document.createElement("p");
	const newText = document.createTextNode(input.value);
	const newBtnDel = document.createElement("button");
	const newBtnImp = document.createElement("button");
	p.addEventListener("click", addLineThrought);
	newBtnDel.innerHTML = "Delete";
	newBtnImp.innerHTML = "!";
	newBtnDel.setAttribute('class', 'delete');
	newBtnImp.setAttribute('class', 'importancebtn');
	p.setAttribute('class', 'newText animated bounceInDown');
	/*p.setAttribute('class', '');*/
	div.setAttribute('class', 'btnsdiv');
	newBtnDel.addEventListener("click", delListItem);
	newBtnImp.addEventListener("click", addImportance);
	p.appendChild(newText);
	div.appendChild(newBtnDel);
	div.appendChild(newBtnImp);
	newLi.appendChild(p);
	newLi.appendChild(div);	
	ul.appendChild(newLi);
	input.value = "";
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addLineThrought() {
	this.classList.toggle("done");
}

function addImportance() {
	this.parentElement.parentElement.classList.toggle('importance');
}

function delListItem() {
	this.parentElement.parentElement.remove();
}

const printList = () => {
	const originalContents = document.body.innerHTML;
	document.body.innerHTML = '';
	const div = document.createElement('div');
	const h1 = document.createElement('h1');	
	div.setAttribute('class', 'container');
	div.appendChild(h1);
	div.appendChild(ul);
	body.appendChild(div);
	document.querySelector('h1').innerHTML = 'Shopping List';
	const allbtnsdiv = document.getElementsByClassName('btnsdiv');
	for (let i=0;i<allbtnsdiv.length;i++) {
		document.getElementsByClassName('btnsdiv')[i].style.display = 'none'
	}
	window.print();
	document.body.innerHTML = originalContents;
}

button.addEventListener("click", addListAfterClick);
buttonprint.addEventListener("click", printList);
input.addEventListener("keypress", addListAfterKeypress);