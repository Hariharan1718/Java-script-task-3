const form = document.querySelector('form');
const output = document.querySelector('#output');
form.addEventListener('submit', e => {
  e.preventDefault();
  const num = parseInt(document.querySelector('#num-input').value);
  if (isNaN(num) || num < 1) {
    output.textContent = 'Invalid input.';
    return;
  }
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  output.textContent = arr.join(', ');
});
