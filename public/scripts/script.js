$(document).ready(function(){

  console.log('1');
  //
  $('.word').click(function(){
    //delete selected
    $(this).parents('.col1').find('.word').removeClass('active');
    $(this).addClass('active');

    $(this).parents('.col1').find('.english');
    var word = $(this).attr('eng_word');
    $(this).parents('.col1').find('.english').text(word);
  });

});
