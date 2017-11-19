$(document).ready(function(){

  console.log('1');
  //
  $('.word').click(function(){
    //delete selected
    $(this).parents('[class^="col"]').find('.word').removeClass('active');
    $(this).addClass('active');

    $(this).parents('[class^="col"]').find('.english');
    var word = $(this).attr('eng_word');
    $(this).parents('[class^="col"]').find('.english').text(word);
  });

});
