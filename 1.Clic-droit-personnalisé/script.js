const customMenu = document.querySelector(".custom-menu");
const customMenuBtns = document.querySelectorAll(".custom-menu button");

document.addEventListener("contextmenu", hideContextMenu)

function  hideContextMenu(event){
    event.preventDefault()

    customMenu.style.display = "block"
    customMenu.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`
}

document.addEventListener("click", handleLeftClick)

function handleLeftClick(){
    customMenu.style.display = "none"
}

customMenuBtns.forEach(btn => btn.addEventListener("click", changeColors))

function changeColors(event){
    event.stopPropagation()
    document.body.style.backgroundColor = `${event.target.dataset.color}`
}