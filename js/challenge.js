let counter
let paused 

document.addEventListener("DOMContentLoaded", () => {
    beginTime()
    pauseTime()
    


});
function beginTime() {
    counter = setInterval(incrementTime, 1000)
    paused = false
  }

function incrementTime() { 
    let h1 = document.getElementById("counter")
    let timer = parseInt(h1.innerText) 
    let t = ++timer
    h1.innerText = t
 }

 function pauseTime() { 
    let pauseButton = document.getElementById("pause")
    pauseButton.addEventListener('click', handlePause)
 }

 function handlePause(e) {
        if (paused) {
            beginTime()
        } else {
            clearInterval(counter)
            paused = true
        }
    console.log(document.getElementById("counter").innerText) 
    }