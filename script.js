const user = prompt('Ismingizni kiriting');

const nameElement = document.createElement('div');
nameElement.textContent = user;

nameElement.style.fontsize = '500px';
nameElement.style.color = 'yellow';
nameElement.style.fontWeight = 'bold';
nameElement.style.fontAlign = 'center';
nameElement.style.position = 'absolute';
nameElement.style.top = '50%';
nameElement.style.left = '50%';
nameElement.style.transform = 'translate(-50%,-50%);';
document.body.appendChild(nameElement)