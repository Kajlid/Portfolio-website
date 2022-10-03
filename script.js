
const animationContainerEl = document.querySelector(".animationContainer")
document.addEventListener('mousemove', onMouseMove);
const header = document.querySelector('.navbar');

animationContainerEl.innerHTML = ""
 
window.onscroll = function() {
    let top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

