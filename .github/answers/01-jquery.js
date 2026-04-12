$('li.red').on('click', function () {
  $('#trident').removeClass('colorBlue colorOrange').addClass('colorRed');
});

$('li.blue').on('click', function () {
  $('#trident').removeClass('colorRed colorOrange').addClass('colorBlue');
});

$('li.orange').on('click', function () {
  $('#trident').removeClass('colorRed colorBlue').addClass('colorOrange');
});
