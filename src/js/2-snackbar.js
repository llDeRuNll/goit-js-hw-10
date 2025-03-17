import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = parseInt(document.querySelector('.delay-input').value, 10);
  const state = document.querySelector('input[name="state"]:checked').value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        icon: false,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay} ms`,
        position: 'topRight',
        icon: false,
      });
    });
});
