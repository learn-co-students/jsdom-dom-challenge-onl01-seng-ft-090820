let counter
let paused 

document.addEventListener("DOMContentLoaded", "" => )

});

function startTime(){
    counter=setInterval(incrementTime,1000)
    paused = false
}

function incrementTime(){
    let h1 = document.getElementById("counter")
    let timer = parseInt(h1.innertext)
    let t = ++timer
    h1.innerText = t
}

function minusTime(){
    let minus = document.getElementById("minus")
    minus.addEventListener(' click' ,decrementTime)
}

function decrementTime(e){
    let counterText = document.getElementById("counter")
    let counterTime = parseInt(counterText.innerText)
    let n = --counterTime
    counterText.innerText = n
}

function addTime(){
    let plus = document.getElementById("plus")
    plus.addEventListener('click',addMoreTime)
}