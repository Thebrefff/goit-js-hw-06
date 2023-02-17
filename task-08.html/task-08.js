const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", (event) => {

	event.preventDefault();

    const {
    elements: { email, password },
  } = event.currentTarget;

if (email.value === '' || password.value === '') {
alert("All fields should be filled!");
}
  const userDetails = { email: email.value, Password: password.value }    
    console.log(userDetails)
    event.currentTarget.reset()
});



