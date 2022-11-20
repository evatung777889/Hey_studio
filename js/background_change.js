var i = 0;
var images = ['carousel_1.png','carousel_2.png'];
var slideTime = 5000;
let num1=document.querySelector('.num1');
let num2=document.querySelector('.num2');
let num3=document.querySelector('.num3');
let num4=document.querySelector('.num4');
let top_pic = document.querySelector('.top_pic');

console.log(images);

// images[0] = 'C:/Users/Tibame_T14/Desktop/Hey_studio/front_page/pic/carousel_1.png';
// images[1] = 'C:/Users/Tibame_T14/Desktop/Hey_studio/front_page/pic/carousel_2.png';


// console.log(images);

function changePicture() {
    top_pic.style.backgroundImage = `url("../pic/${images[i]}")`;

    if (i < images.length - 1) {
        i++;
        num1.style.display='block'
        num2.style.display='block'
        num3.style.display='none'
        num4.style.display='none'
    } else {
        i = 0;
        num1.style.display='none'
        num2.style.display='none'
        num3.style.display='block'
        num4.style.display='block'
    }
    setTimeout(changePicture, slideTime);
}


window.onload = changePicture;