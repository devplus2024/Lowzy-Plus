window.onload = function(){
    document.getElementsById("autoplay").play();
}

document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');