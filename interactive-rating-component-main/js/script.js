const body = document.querySelector("body");
const form = document.querySelector("form");
const ratingDiv = document.querySelector("#rating");
const confirmationDiv = document.querySelector("#confirmation");
const rateValueSpan = document.querySelector(".rate");
const errorSpan = document.querySelector(".error");
const submitButton = document.querySelector("input[type=submit]");

function confirmRating(rating){
    if(rating == null) {
        errorSpan.classList.remove("hidden");
    } else {
        ratingDiv.classList.add("hidden");
        confirmationDiv.classList.remove("hidden");
        rateValueSpan.textContent = rating;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const rating = formData.get('rate');
    confirmRating(rating);
});

body.addEventListener('click', (e) => {
    if(ratingDiv.classList.contains("hidden")) {
        location.reload();
    }
}, true) // <-- requires true because of bubbling. We need to capture.