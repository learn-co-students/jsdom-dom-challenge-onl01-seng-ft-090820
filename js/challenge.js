// Basic Counter

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('plus').addEventListener('click', incrementSeconds)
  document.getElementById('minus').addEventListener('click', subtractSeconds)
  document.getElementById('pause').addEventListener('click', pauseTimer)
  document.getElementById('heart').addEventListener('click', addLike)
  document.getElementById('comment-form').addEventListener('submit', function(event) { 
    event.preventDefault()
    addComment() 
  })
  startTimer()
})

let counter = document.getElementById('counter')
let likes = document.getElementsByClassName('likes')

let timerId
let timerStarted

function incrementSeconds() {

  let seconds = parseInt(counter.innerHTML) 
  seconds += 1
  counter.innerHTML = seconds 

}

function startTimer() {
  timerId = setInterval(incrementSeconds, 1000)
  timerStarted = true
}

// Add and subtract from counter


function subtractSeconds() {
  let seconds = parseInt(counter.innerHTML) 
  seconds -= 1
  counter.innerHTML = seconds 
}

// Like a number

// counter.innerHTML + "was liked etc."

function addLike() {
  let likesBullets = likes[0].innerText.split('.')
  let likedNumber = likesBullets.find( x => x.split(' ')[0] == parseInt(counter.innerHTML))
  // debugger
  if ( !!likedNumber == true ) {
    // debugger
    let index = likesBullets.findIndex( x => x.split(' ')[0] == parseInt(counter.innerHTML))
    let newCount = parseInt(likedNumber.split(' ')[3]) + 1
    likes[0].children[index].innerHTML = `${counter.innerHTML} was liked ${newCount} time(s).`
  } else {
    let likeCount = document.createElement('li')
    likeCount.innerHTML = counter.innerHTML + " was liked " + 1 + " time(s)."
    likes[0].appendChild(likeCount)
  }
}

// <li>7 was liked 1 time!</li>

// 1.) put count and number into dataset
// 2.) li.split(' ') [0], [3]
// -----> found flag

// }

// Pause Counter

function pauseTimer() {
    if (timerStarted) {
      clearInterval(timerId);
      timerStarted = false

      document.getElementById('plus').disabled = true
      document.getElementById('minus').disabled = true
      document.getElementById('heart').disabled = true
      document.getElementById('pause').innerHTML = "resume"

    } else {
      startTimer()

      document.getElementById('plus').disabled = false
      document.getElementById('minus').disabled = false
      document.getElementById('heart').disabled = false
      document.getElementById('pause').innerHTML = "pause"

    }    
}


// Leave Comment

function addComment() {
  let comment = document.createElement('div')
  let input = document.getElementById('comment-input').value
  comment.innerHTML = `<p>${input}</p>`
  let list = document.getElementById("list")
  list.appendChild(comment)
}