const jsSpoiler = document.querySelectorAll(".js-spoiler")

jsSpoiler.forEach(spoiler => spoiler.addEventListener("click", showSpoiler))

function showSpoiler(e){
    e.target.classList.add("js-spoiler-revealed")
}