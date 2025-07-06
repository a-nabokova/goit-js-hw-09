const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput  = document.querySelector('[name="message"]');
const formData = {
  email: "",
  message: "", 
}

const STORAGE_KEY = 'feedback-form-state'; 
savedData();



form.addEventListener('input', handleInput)
form.addEventListener('submit', handleSubmit)
 
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
        'Fill please all fields'
      );
    return;
    } else {
    
    console.log(formData);

    }

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = ''; 
    formData.message = '';
   
}


function savedData() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
      const { email, message } = JSON.parse(savedMessage);
      emailInput.value = email; 
    messageInput.value = message; 
    
    formData.email = emailInput.value.trim();
    formData.message = messageInput.value.trim();
  }

}