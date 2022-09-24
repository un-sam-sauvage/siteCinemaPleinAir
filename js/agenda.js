let images = document.querySelectorAll(".poster-film");
let info = document.querySelector(".info-container");
images.forEach((image) =>{
    image.addEventListener('click', () => {
        info.style.display = "flex";
    })
})

info.addEventListener("click" , () => {
    info.style.display = "none";
})