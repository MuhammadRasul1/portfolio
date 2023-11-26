const elHeaderburgerBtn = document.querySelector(".js-burger-btn")
const elHeader = document.querySelector(".header")

if(elHeaderburgerBtn) {
    elHeaderburgerBtn.addEventListener("click", () => {
        elHeader.classList.toggle("header--open")
    })
}
