const formRef = document.querySelector('.feedback-form');

const savedData = () => JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData()) {formRef.email.value  = savedData().email;
  formRef.message.value  = savedData().message;} else {const formDataInitial = {
    email: '',
    message: '',
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formDataInitial));}


formRef.addEventListener('input', callback);
function callback(event) {
    const { email, message } = event.currentTarget;
    
    const formData = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));}


    formRef.addEventListener('submit', onFormSubmit);
    function onFormSubmit(event) {event.preventDefault(); console.log(savedData()); localStorage.removeItem('feedback-form-state'); }