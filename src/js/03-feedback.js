import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form';

const data = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('textarea[name="message"]'),
  email: document.querySelector('input[name="email"]'),
};

const onInput = e => {
  data[e.target.name] = e.target.value;
  const inputJson = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, inputJson);
};

const onFormSubmit = e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.target.reset();
  delete data.message;
  delete data.email;
  console.log(data);
  localStorage.removeItem(STORAGE_KEY);
};

function populateMessageOutput() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);
  const newData = JSON.parse(savedMsg);
  if (savedMsg) {
    if (newData.email) {
      refs.email.value = newData.email;
    }
    if (newData.message) {
      refs.message.value = newData.message;
    }
  }
}
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
populateMessageOutput();
