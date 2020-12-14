document.addEventListener('DOMContentLoaded', (event) => {
    // console.log('Dom is loaded!')
    let counter = document.querySelector('h1#counter').innerText;
    let form = document.querySelector('form#comment-form')
    let heart = document.querySelector('button#heart');
    let li = document.createElement('li');
    let input = document.querySelector('input');
    let likes = 0;
    let minus = document.querySelector('button#minus');
    let pause = document.querySelector('button#pause');
    let plus = document.querySelector('button#plus');
    
    let myTimer = setInterval(myCounter, 1000);
    
    function addComment() {
        let comments = document.querySelector('div#list');
        li = document.createElement('li');
        li.innerText = input.value
        comments.appendChild(li)
    }

    function myCounter() {
        parseInt(counter);
        counter++;
        counter = counter.toString()
        document.querySelector('h1#counter').innerText = counter

        likes = 0
    };

    minus.addEventListener('click', () => {
        // console.log("Minus has been clicked")
        counter--
        document.querySelector('h1#counter').innerText = counter

    });

    plus.addEventListener('click', () => {
        // console.log("Plus has been clicked")
        counter++
        document.querySelector('h1#counter').innerText = counter

    })

    pause.addEventListener('click', () => {
        // console.log("Pause has been clicked")
        if (pause.innerText == "pause") {
            clearInterval(myTimer);
            pause.innerText = "resume";
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
        } else {
            myTimer = setInterval(myCounter, 1000);
            pause.innerText = "pause";
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            
        }
    })

    heart.addEventListener('click', () => {
        // console.log("Heart has been clicked")
        // let found = false
        let lis = document.querySelectorAll('li')
        let lastLike
        lis.forEach( l => {
            let li_split = l.innerText.split(" ")
            if (li_split[0] === counter) {
                likes = parseInt(li_split[4])
                lastLike = l
            } 
        } )
        likes++;
        
        li = document.createElement('li');
        let text = document.createTextNode(`${counter} has been liked ${likes} time(s).`)
        let ul = document.querySelector('ul.likes');
        li.appendChild(text);
        if (likes > 1) {
            lastLike.replaceWith(li)
        } else {
            ul.appendChild(li)
        }
    })

    form.addEventListener("submit", event => {
        event.preventDefault();
        addComment()
        input.value = "";
      })

})