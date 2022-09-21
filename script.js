var likes = document.querySelectorAll(".like")
var dislikes = document.querySelectorAll(".dislikes-button")
var likesButton = document.querySelectorAll(".button")

function addLike(e) {
    console.log(e)
    likes[e.id-1].innerHTML = parseInt(likes[e.id-1].innerHTML) + 1;
}

for (var i = 0; i < likesButton.length; i++) {
    likesButton[i].addEventListener("click", function () {
        addLike(this)})
}

for (var i = likesButton.length - 1; i >= 0; i--) {
    likesButton[i].addEventListener("click", function () {
        addLike(this)
    })
}

function removeLike(element) {
    if (element.id === "dislike-button1") {
        likesOne.innerHTML = parseInt(likesOne.innerHTML) - 1;
    } else if (element.id === "dislike-button2") {
        likesTwo.innerHTML = parseInt(likesTwo.innerHTML) - 1;
    } else {
        likesThree.innerHTML = parseInt(likesThree.innerHTML) - 1;
    }
}

