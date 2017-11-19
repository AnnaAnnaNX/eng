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
  $('#button1').on('click',function(){
    alert(1);
    $.ajax({
      url: '/ajax',
      success: function(data){
          $('#data').text(JSON.stringify(data));
      }
    });
  })



});
