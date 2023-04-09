const backgroundEl = document.getElementById(".bg-image");

window.addEventListener("scroll", ()=>{
    updateImage()
})

function updateImage(){
    backgroundEl.style.opacity = 1 - window.pageYOffset / 800;
}