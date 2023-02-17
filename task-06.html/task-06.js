const inputCheck = document.querySelector('#validation-input');

inputCheck.addEventListener("blur", event => {
   if (event.target.value.length == inputCheck.getAttribute('data-length')) {
    inputCheck.classList.add('valid')
    if (inputCheck.classList.contains('invalid')) {
        inputCheck.classList.remove('invalid')
    }
   } else {
    if (inputCheck.classList.contains('valid')) {
        inputCheck.classList.remove('valid')
    }
    inputCheck.classList.add('invalid')
   }   
});


