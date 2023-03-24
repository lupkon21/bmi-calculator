'use strict';
let mass;
let height;
let bmi;
const calculate = document.querySelector('.submit');

calculate.addEventListener('click', function () {
  mass = Number(document.getElementById('mass').value);
  height = Number(document.getElementById('height').value);
  bmi = (mass / (height * height)).toFixed(2);

  document.querySelector('.bmi').classList.remove('hidden');
  if (mass <= 0 || height <= 0) {
    document.querySelector('.bmi').textContent = 'Error 😥';
  } else {
    document.querySelector('.bmi').textContent = bmi;
  }
});
