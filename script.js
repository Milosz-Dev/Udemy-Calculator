const input = document.querySelector('#input-number');
const answer = document.querySelector('.answer');
const p = document.querySelector('#hero p');

input.addEventListener('input', function () {
  let number = Number(input.value);
  answer.innerHTML = Math.floor((number / 328) * 100);

  number > 4 ? p.classList.add('active') : p.classList.remove('active');
})


