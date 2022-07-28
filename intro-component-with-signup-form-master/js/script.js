const patterns = {
 email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
 fname:/(?!^$)([^\s])/, //not empty, no spaces
 lname:/(?!^$)([^\s])/,
 password:/(?!^$)([^\s])/,
}    
const inputs = document.querySelectorAll("input");

function validate(input, regex){
    return regex.test(input.value) ? input.className = 'valid' : input.className = 'invalid'
}

inputs.forEach(input => {
    input.addEventListener("blur", (e) => {
        validate(e.target,patterns[e.target.attributes.name.value]);
        });
});

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    inputs.forEach(input => {
        validate(input,patterns[input.attributes.name.value]);
    });
});