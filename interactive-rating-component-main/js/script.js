const submitButton = document.querySelector('button');
const radioButtons = document.querySelectorAll("input[type=radio]");
const ratingDiv = document.querySelector("#rating");
const confirmationDiv = document.querySelector("#confirmation");
const rateValueSpan = document.querySelector(".rate");
const errorSpan = document.querySelector(".error");
const body = document.querySelector("body");

let selectedRating ;

function getRating() {
    for (const radioButton of radioButtons) {
        if(radioButton.checked) {
            selectedRating = radioButton.value;
            break;
        }
    }
}
function confirmRating(){
    if(selectedRating == undefined) {
        errorSpan.classList.remove("hidden");
    } else {
        ratingDiv.classList.add("hidden");
        confirmationDiv.classList.remove("hidden");
        rateValueSpan.textContent = selectedRating;
    }
}

submitButton.addEventListener('click', () => {
    getRating();
    confirmRating();
});
body.addEventListener('click', () => {
    if(ratingDiv.classList.contains("hidden")) {
        location.reload();
    }
}, true) // <-- requires true because of bubbling. We need to capture.