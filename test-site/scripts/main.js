let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/top.png') {
      myImage.setAttribute ('src','images/top2.png');
    } else {
      myImage.setAttribute ('src','images/top.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        localStorage.setItem('name', '');
        myHeading.innerHTML = 'Mozilla is cool !';
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    if(!storedName || storedName === null) {
        myHeading.innerHTML = 'Mozilla is cool !';
    } else {
      myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
    }
}

myButton.onclick = function() {
    setUserName();
}