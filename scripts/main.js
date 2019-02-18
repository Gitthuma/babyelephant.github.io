var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/animated-elephant-image-0456.gif') {
        myImage.setAttribute('src', 'images/indian-elephant-popcorn-animation-baby-elephant-eating-popcorn-thumb.jpg')
    } else {
        myImage.setAttribute('src', 'images/animated-elephant-image-0456.gif')
    }
}