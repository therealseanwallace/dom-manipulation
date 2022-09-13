const container = document.querySelector('#container');
const newPara = document.createElement("p");
newPara.textContent = "Hey I\'m red!";
newPara.style.color = "red";
container.appendChild(newPara);
const newH3 = document.createElement("h3");
newH3.textContent = "I\'m a blue h3!";
newH3.style.cssText = "color: blue;"
container.append(newH3);
const newDiv = document.createElement("div");
newDiv.setAttribute('style', 'background: pink; border-style: solid; border-width: 5px; border-color: black')
console.dir(container.firstElementChild);
const newH1 = document.createElement("h1");
newH1.textContent = "I\'m in a div";
const newPara2 = document.createElement("p")
newPara2.textContent = "ME TOO!"
newDiv.append(newH1, newPara2);
container.append(newDiv);