let counter
let paused 

document.addEventListener("DOMContentLoaded", () => {
    beginTime()
    minusTime() 
    addTime()
    likeButton()
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
    // .toString()
    h1.innerText = t
  }

  function minusTime() {
      let minus = document.getElementById("minus")
      minus.addEventListener ('click', decrementTime)
  }

  function decrementTime(e) {
    let counterText = document.getElementById("counter")
    let counterTime = parseInt(counterText.innerText)
    let n = --counterTime
    // .toString()
    counterText.innerText = n
  }

  function addTime() {
    let minus = document.getElementById("plus")
    minus.addEventListener ('click', addMoreTime)
}

function addMoreTime(e) {
  let counterText = document.getElementById("counter")
  let counterTime = parseInt(counterText.innerText)
  let n = ++counterTime
  // .toString()
  counterText.innerText = n
}

function likeButton() {
    let heart = document.getElementById("heart")
    heart.addEventListener('click', likeNum)
}

function likeNum(e) {
    let found = false
    let counterText = document.getElementById("counter")
    let counterTime = parseInt(counterText.innerText)
    let lis = Array.from(document.querySelectorAll('li'))
    let li = lis.find(l => l.dataset.time == counterTime)
    if (li) { 
        let count = parseInt(li.dataset.num)
        count+=1 
        li.dataset.num = count
        li.innerText = `${counterTime} liked ${li.dataset.num} times`
    } else {
        const li_likes = document.createElement('li')
        li_likes.setAttribute('data-num', '1')
        li_likes.setAttribute('data-time', counterTime)
    
        const likeClass = document.querySelector('.likes')
        likeClass.appendChild(li_likes)
        li_likes.innerText = `${counterTime} liked ${li_likes.dataset.num} times`
        console.log(li_likes.innerText)
    }   
}

function pauseTime() { 
let pauseButton = document.getElementById("pause")
pauseButton.addEventListener('click', handlePause)
}

function handlePause(e) {
// let counter = setInterval(incrementTime, 1000)
    if (paused) {
        beginTime()
    } else {
        clearInterval(counter)
        paused = true
    }
console.log(document.getElementById("counter").innerText) 
}