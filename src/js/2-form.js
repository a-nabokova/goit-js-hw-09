const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput  = document.querySelector('[name="message"]');

form.addEventListener('input', handleInput)
form.addEventListener('submit', handleSubmit)

const STORAGE_KEY = 'feedback-form-state'; 



const formData = {
    email: "",
    message: "", 
}

savedData();

function handleInput() {
    formData.email = emailInput.value.trim(); 
    formData.message = messageInput.value.trim(); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

 

function handleSubmit(event) {
    event.preventDefault(); 

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (email === '' || message === '') {
        alert(
          'The Please fill in all fields before submitting the form can not be empty'
        );
        return;
      } else {
        console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
      }

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}
 

function savedData() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
     console.log(savedMessage);

    if (savedMessage) {
        const { email, message } = JSON.parse(savedMessage);
        emailInput.value = email; 
        messageInput.value = message; 
    }

}

 