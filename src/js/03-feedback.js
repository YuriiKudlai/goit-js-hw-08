import throttle from 'lodash.throttle';

const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const form = document.querySelector('.feedback-form');
populateTextarea();

form.addEventListener('input', throttle(onFieldsInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFieldsInput() {
  const createObjForm = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(createObjForm));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    const savedDataForm = JSON.parse(savedMessage);
    email.value = savedDataForm.email;
    message.value = savedDataForm.message;
  }
}


