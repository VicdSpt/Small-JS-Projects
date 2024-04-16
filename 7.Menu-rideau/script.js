const burgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

burgerButton.addEventListener("click", useNav)

function useNav(){
    burgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}