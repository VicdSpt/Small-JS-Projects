const animatedInput = document.querySelector(".animated-input")
const inputGroup = document.querySelector(".input-group")
const validation = document.querySelector(".validation")

animatedInput.addEventListener("input", doInput)

function doInput(e){
    if(e.target.value !== ""){
        inputGroup.classList.add ("filled-input")
    }
    else if (e.target.value === ""){
        inputGroup.classList.remove ("filled-input")
    }
    if(e.target.value.includes("$",)){
        inputGroup.classList.add ("error")
        validation.classList.add("active")
        validation.textContent = "Special characters are not allowed"
    }
    else{
        animatedInput.classList.remove ("error")
        validation.classList.remove ("active")
    }
}