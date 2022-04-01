import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form';

const data = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('textarea[name="message"]'),
  email: document.querySelector('input[name="email"]'),
};

const onInput = e => {
  if (e.target.name == refs.email.name) {
    data.email = e.target.value;
  }
  if (e.target.name == refs.message.name) {
    data.message = e.target.value;
  }
  const inputJson = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, inputJson);
};

const onFormSubmit = e => {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

function populateMessageOutput() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);
  const newData = JSON.parse(savedMsg);
  if (savedMsg) {
    refs.email.value = newData.email;
    refs.message.value = newData.message;
  }
}
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

populateMessageOutput();
