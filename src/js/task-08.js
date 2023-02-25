const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const email = loginForm.elements.email.value; 
  const password = loginForm.elements.password.value; 

  if (email && password) { 
    const formData = { email, password }; 
    console.log(formData); 
    loginForm.reset(); 
  } else {
    alert('Все поля должны быть заполнены!'); 
  }
});

