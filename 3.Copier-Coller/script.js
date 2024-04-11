const copyToClipboardButton = document.querySelector(".copy-clipboard-btn")

copyToClipboardButton.addEventListener("click", clickCopyToClipboard)

let runningAnimation = false
function clickCopyToClipboard(event){
    navigator.clipboard.writeText(event.target.nextElementSibling.textContent)

    if(!runningAnimation) {
        runningAnimation = true
        event.target.textContent = "🎉 Copié 🎉"

        setTimeout(() => {
            event.target.textContent = "Copier 📚"
            runningAnimation = false
        }, 1000)
    }
}