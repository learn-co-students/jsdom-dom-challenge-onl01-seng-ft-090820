document.addEventListener("DOMContentLoaded", () => {
  startTimer()
  addEventListener()  
});

function startTimer() {
  counter = setInterval(increaseTimer, 1000)
  paused = false
}

function addEventListener() {
  const minusButton = document.querySelector("#minus")
  minusButton.addEventListener('click', decreaseTimer) 
    
  const plusButton = document.querySelector("#plus")
  plusButton.addEventListener('click', increaseTimer)

  const heartButton = document.querySelector("#heart")
  heartButton.addEventListener('click', likeTime)

  const pauseButton = document.querySelector("#pause")
  pauseButton.addEventListener('click', pauseTimer)
      
  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', submitComment)
}

function decreaseTimer() {
  let minusCounter = document.querySelector("#counter")
  let minusTime = parseInt(minusCounter.innerText)
  let x = --minusTime
  minusCounter.innerText = x
}

function increaseTimer() {
  let addCounter = document.querySelector("#counter")
  let addTime = parseInt(addCounter.innerText)
  let x = ++addTime
  addCounter.innerText = x
}

function pauseTimer(e) {
  let pauseCounter = document.querySelector("#pause")
  if (paused) {
    startTimer()
  } else {
    clearInterval(counter)
    paused = true
  }
}

function likeTime() {
  let found = false
  let like = document.querySelector(".likes")

  let counter = document.querySelector("#counter")
  let time = parseInt(counter.innerText)

  let li = document.createElement('li')
  li.innerText = `${time} has been liked 1 times!`
  like.appendChild(li)
}

function submitComment(e) {
  e.preventDefault()
  let input = e.target.querySelector("#comment-input").value
  let pTag = document.createElement('p')
  pTag.textContent = input 
  let comments = document.querySelector('.comments')
  comments.appendChild(pTag)
  e.target.querySelector("#comment-input").value = ""    
}