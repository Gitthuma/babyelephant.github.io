var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/animated-elephant-image-0456.gif') {
        myImage.setAttribute('src', 'images/indian-elephant-popcorn-animation-baby-elephant-eating-popcorn-thumb.jpg')
    } else {
        myImage.setAttribute('src', 'images/animated-elephant-image-0456.gif')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'BabyElephant' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'BabyElephant' + storedName;
}