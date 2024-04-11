const emojis = ["🤬","😵","😭","😠","🙁","😐","🙂","😁", "🤩", "😍"]

// const emojis = ["⭐","⭐⭐","⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐⭐",
// "⭐⭐⭐⭐⭐⭐","⭐⭐⭐⭐⭐⭐⭐","⭐⭐⭐⭐⭐⭐⭐⭐", 
// "⭐⭐⭐⭐⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐"]

const emojisTxt = ["Garbage Answer", "Kill me now", "For the love of God", "Can you read ?", "Not Happy", "Huh ?", "Thank you", "Nice !!", "Great thx", "Fckg Amazing", "I LOVE U !" ]

const emojiIcon = document.querySelector(".emoji-value")
const emojiTxt = document.querySelector(".emoji-txt")

const range = document.querySelector(".range-input")

range.addEventListener("input", selectEmoji)
range.addEventListener("input", selectEmojiText)

function selectEmoji(e){
    emojiIcon.textContent = `${emojis[e.target.value - 1]}`
}

function selectEmojiText(e){
    emojiTxt.textContent = `${emojisTxt[e.target.value - 1]}`
}

