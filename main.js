// array with generated numbers;
let resultsArray = [];
// function to draw numbers and place them as a divs in DOM;
function lotteryNumbers() {
    // check length of result array;
    if (resultsArray.length === 6) {
        // if it's equal to 6, then stop function;
        return;
    }
    // draw lottery numbers between 1 and 59;
    let drawResult = Math.floor(Math.random() * 58 + 1);
    // check if drawResult exist in resultsArray. For first run the array is empty;
    for (let i = 0; i < resultsArray.length; i++) {
        if (drawResult === resultsArray[i]) {
            return lotteryNumbers;
        }
    }
    // create div element with class = balls and generated number as a text;
    const div = document.createElement('div');
    div.classList.add("balls");
    div.textContent = drawResult;
    // put lottery number into resultsArray;
    resultsArray.push(drawResult);

    // place div with lottery number in right place in body;
    const numbersContainer = document.getElementById("container");

    numbersContainer.appendChild(div);
}

// hide modal function;
function hideModal(el) {
    el.style.display = "none";
}


// show the modal if the lottery not finished;
function modalActive() {
    // the modal element;
    const modal = document.getElementById("modal");
    // modal button to hide it;
    const modalBtn = document.getElementById("modal-btn");
    // show modal;
    modal.style.display = "block";
    // listen for click on modal btn to hide modal;
    modalBtn.addEventListener("click", function () {
        hideModal(modal);
    });
    // listen for click arround modal to hide it;
    window.addEventListener("click", function (ev) {
        if (ev.target === modal) {
            hideModal(modal);
        }
    })
}

// function to reset container for numbers if the lottery has been finished (6 numbers drawed) if not then show message to finish lottery;
function resetContainer() {
    if (resultsArray.length < 6) {
        // call function to show modal;
        modalActive();
    } else {
        const container = document.getElementById("container");
        container.innerHTML = "";
        resultsArray = [];
        //        clickListener();
    }
}

// reset container when Reset Numbers button has been clicked;
let resetBtn = document.getElementById("reset-numbers");
resetBtn.addEventListener("click", resetContainer);

// start listening when DOM loaded;
function clickListener() {
    // generate random numbers when Generate button has been clicked;
    let generateBtn = document.getElementById("draw-number");
    generateBtn.addEventListener('click', lotteryNumbers);
}
// call function to listen for click on Generate button when DOM loaded;
document.addEventListener('DOMContentLoaded', clickListener);
