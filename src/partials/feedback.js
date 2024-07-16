'use strict';

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = 'feedback-form-state';

if (localStorage.getItem(localStorageKey) != null) {
  email.value = JSON.parse(localStorage.getItem(localStorageKey)).email ?? '';
  message.value =
    JSON.parse(localStorage.getItem(localStorageKey)).message ?? '';
}

form.addEventListener('input', () => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({ email: email.value.trim(), message: message.value.trim() })
  );
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log({
    email: email.value.trim(),
    message: message.value.trim(),
  });
  localStorage.removeItem(localStorageKey);
  form.reset();
});
