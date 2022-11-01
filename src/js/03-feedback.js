import throttle from 'lodash.throttle';

const STORAGE_INPUT_FORM = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  msg: document.querySelector('.feedback-form textarea'),
};

let dataObj = { email: '', message: '' };
const emailInput = document.querySelector('[name="email"]');
const msgInput = document.querySelector('[name="message"]');

refs.form.addEventListener('input', throttle(onFeedbackFormInput, 500));
refs.form.addEventListener('submit', onFeedbackFormSubmit);

onLoadingPage();

function onFeedbackFormInput(evt) {
  if (evt.target.nodeName === 'INPUT') {
    dataObj.email = evt.target.value;
  }
  if (evt.target.nodeName === 'TEXTAREA') {
    dataObj.message = evt.target.value;
  }
  localStorage.setItem(STORAGE_INPUT_FORM, JSON.stringify(dataObj));
}

function onFeedbackFormSubmit(evt) {
  evt.preventDefault();

  evt.target.reset();
  localStorage.removeItem(STORAGE_INPUT_FORM);
  console.log(dataObj);
}

function onLoadingPage() {
  const dataObj = JSON.parse(localStorage.getItem(STORAGE_INPUT_FORM));

  if (dataObj) {
    emailInput.value = dataObj.email;
    msgInput.value = dataObj.message;
  }
}
