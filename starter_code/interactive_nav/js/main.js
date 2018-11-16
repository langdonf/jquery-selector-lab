$('li:eq(0)').on('click', function(){
  $('#women').slideToggle();
  $('#men, #home, #blog, #sale').hide()
});

$('li:eq(1)').on('click', function(){
  $('#men').slideToggle();
  $('#women, #home, #blog, #sale').hide()
});

$('li:eq(2)').on('click', function(){
  $('#home').slideToggle();
  $('#women, #men, #blog, #sale').hide()
});

$('li:eq(3)').on('click', function(){
  $('#blog').slideToggle();
  $('#women, #home, #men, #sale').hide()
});

$('li:eq(4)').on('click', function(){
  $('#sale').slideToggle();
  $('#women, #home, #blog, #men').hide()
});

