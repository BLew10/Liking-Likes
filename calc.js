
var nums = document.querySelectorAll(".nums");
var display = document.getElementById("display");
var operations = document.querySelectorAll(".operation")
console.log(operations[0].innerHTML)
var store = 0;
var operationUsed = ""
var isDarkMode = false;
function displayNum(e) {
    if (display.innerHTML === '0') {
        display.innerHTML = e.innerHTML;
    } else {
        display.innerHTML += e.innerHTML;
        // display.innerHTML = display.innerHTML
    }
}

function operationEvent(e) {
    store = parseFloat(display.innerHTML)
    display.innerHTML = 0;
    operationUsed = e.innerHTML;
}
document.querySelector('#clears').addEventListener("click", function () {
    display.innerHTML = 0;
})
document.querySelector('#decimals').addEventListener("click", function () {
    display.innerHTML = `${display.innerHTML}.`;
})


function equals() {
    if (operationUsed === "+") {
        display.innerHTML = store + parseFloat(display.innerHTML)
    } else if (operationUsed === "-") {
        display.innerHTML = store - parseFloat(display.innerHTML)
    } else if (operationUsed === "/") {
        display.innerHTML = store / parseFloat(display.innerHTML)
    } else if (operationUsed === "*") {
        display.innerHTML = store * parseFloat(display.innerHTML)
    }
}
for (var i = nums.length - 1; i >= 0; i--) {
    nums[i].addEventListener("click", function () {
        displayNum(this)
    })
}
for (var i = operations.length - 1; i >= 0; i--) {
    operations[i].addEventListener("click", function () {
        operationEvent(this)
    })
}
