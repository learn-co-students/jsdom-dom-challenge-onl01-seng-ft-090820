document.addEventListener("DOMContentLoaded", (event) => {
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
        counter--
        document.querySelector('h1#counter').innerText = counter

    });

    plus.addEventListener('click', () => {
        counter++
        document.querySelector('h1#counter').innerText = counter

    })

    pause.addEventListener('click', () => {
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
        likes++;
        li = document.createElement('li');
        let text = document.createTextNode(`${counter} has been liked ${likes} time(s).`)
        let hearts = document.querySelector('ul.likes');
        let lastLike = hearts.lastChild
        li.appendChild(text);
        if (likes > 1) {
            lastLike.replaceWith(li)
        } else {
            hearts.appendChild(li)
        }
    })

    form.addEventListener("submit", event => {
        event.preventDefault();
        addComment()
        input.value = "";
    })

}) 