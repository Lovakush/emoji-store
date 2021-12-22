const myEmojis = ["👨", "😛", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")



function renderEmojis(){
    emojiContainer.innerText = ""
    const emoji = document.createElement('span')
    for(let i=0;i<myEmojis.length;i++){
        emoji.textContent += myEmojis[i]
    }
    emojiContainer.append(emoji)
    
}

renderEmojis()

pushBtn.addEventListener("click",function(){
    if(emojiInput) {
        myEmojis.push(emojiInput.value)
        emojiInput.value =""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click",function(){
    if(emojiInput) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value =""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})

    
    