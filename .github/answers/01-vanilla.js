const trident = document.querySelector('#trident');
const red = document.querySelector('li.red');
const blue = document.querySelector('li.blue');
const orange = document.querySelector('li.orange');

red.addEventListener('click', function () {
  trident.classList.remove('colorBlue', 'colorOrange');
  trident.classList.add('colorRed');
});

blue.addEventListener('click', function () {
  trident.classList.remove('colorRed', 'colorOrange');
  trident.classList.add('colorBlue');
});

orange.addEventListener('click', function () {
  trident.classList.remove('colorRed', 'colorBlue');
  trident.classList.add('colorOrange');
});
