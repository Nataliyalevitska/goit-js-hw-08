import throttle from 'lodash.throttle';

const LOCAL_KEY_EMAIL = 'feedback-mail';
const LOCAL_KEY_MESSAGE = 'feedback-sms';
// const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
///
refs.form.addEventListener('submit', onFormSubmit);

///
// refs.form.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(LOCAL_KEY_MESSAGE, JSON.stringify(formData));
//   console.log(formData);
// });
///
///
refs.input.addEventListener('input', throttle(onEmailInput, 500)); //added library Lodesh
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500)); //added library Lodesh
//
populateTextarea();
populateEmail();
function onFormSubmit(e) {
  e.preventDefault(); //чтобы не перезагружалась страничка
  e.target.reset(); //чистит форму после отправки
  localStorage.removeItem(LOCAL_KEY_MESSAGE); //чистим localStorage
  localStorage.removeItem(LOCAL_KEY_EMAIL);
}
//
function onTextareaInput(e) {
  const message = e.target.value;
  console.log(message);
  localStorage.setItem(LOCAL_KEY_MESSAGE, message);
}
//

//
function onEmailInput(e) {
  const email = e.target.value;
  console.log(email);
  localStorage.setItem(LOCAL_KEY_EMAIL, email);
}
//
//
function populateTextarea() {
  const savedMessage = localStorage.getItem(LOCAL_KEY_MESSAGE);
  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
//
//
function populateEmail() {
  const savedEmail = localStorage.getItem(LOCAL_KEY_EMAIL);
  if (savedEmail) {
    console.log(savedEmail);
    refs.input.value = savedEmail;
  }
}
