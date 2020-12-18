let intervalID; 
let timerFlag; 

document.addEventListener("DOMContentLoaded", () => {
    startTimer()
    addEventListeners()
}) 


function startTimer() {
    intervalID = window.setInterval(incrementTimer, 1000)
    timerFlag = true 
}

function addEventListeners() {
    document.querySelector("#minus").addEventListener("click", decrementTimer)
    document.querySelector("#plus").addEventListener("click", incrementTimer)
    document.querySelector("#heart").addEventListener("click", likeTimer)
    document.querySelector("#pause").addEventListener("click", pauseTimer)
    // document.querySelector("#comment-form").addEventListener("submit", addComment)
}

function decrementTimer() {
    let counter = document.querySelector('#counter')
    let count = parseInt(counter.innerText)
    count-=1
    counter.innerText = count
    // console.log("decrement")
}

function incrementTimer() {
    let counter = document.querySelector('#counter')
    let count = parseInt(counter.innerText)
    count+=1
    counter.innerText = count
    // console.log("increment")
}

function likeTimer() {
    let ul = document.querySelector('.likes')
    let counter = document.querySelector('#counter')
    let count = parseInt(counter.innerText)
    // if it HAS been liked before
    let found = false 
    forEach

    // if it has NOT been liked before, do this
    let li = document.createElement('li')
    li.innerText = `${count} has been liked 1 times!`
    ul.appendChild(li)
}

function pauseTimer() {
    if (timerFlag) {
        clearInterval(intervalID)
        timerFlag = false 
    } else {
        startTimer()
    }
    // console.log("pause")
}