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

    //загрузка существительных в подлежащее
    $.ajax({
      url: '/dictionary/noun',
      success: function(data){
          //data = JSON.stringify(data);
          for(var i=0; i<data.length; i++){
            $('.podl .list-group:first').append('<span class="group list-group-item" group="'+data[i]+'">'+data[i]+'</span>')
          }
          //$('.col1 .list-group').
      }
    });

    //загрузка глаголов в сказуемое
    $.ajax({
      url: '/dictionary/verb',
      success: function(data){
          //data = JSON.stringify(data);
          for(var i=0; i<data.length; i++){
            $('.skaz .list-group:first').append('<span class="group list-group-item" group="'+data[i]+'">'+data[i]+'</span>')
          }
          //$('.col1 .list-group').
      }
    });

        //podl
        $('body').on('click','.group:not(.active)',function(){
          var part_sentence = $(this).parents( '[part_sentence]').attr('part_sentence');
          var group = $(this).attr('group');
          $(this).parents( '[part_sentence]').addClass('non-visible');
          $(this).parents( '[part_sentence]').find('.group').removeClass('active');
          $(this).addClass('active');
          console.log(group);
          if ( part_sentence == 'podl' ){

            $.ajax({
              url: '/dictionary/noun/'+group,
              success: function(data){
                  $('.'+part_sentence+' .list-group:last span').remove();
                  //data = JSON.stringify(data);
                  for(var i=0; i<data.length; i++){console.log(data[i].eng_word);
                    $('.'+part_sentence+' .list-group:last').append('<span class="word list-group-item" word="'+data[i].eng_word+'">'+data[i].rus_word+'</span>')
                  }
              }
            });

          }
        })

        $('body').on('click','.group.active',function(){
          var part_sentence = $(this).parents( '[part_sentence]').attr('part_sentence');
          var group = $(this).attr('group');
          $(this).parents( '[part_sentence]').addClass('non-visible');
          $(this).parents( '[part_sentence]').find('.group').removeClass('active');
          $(this).parents( '[part_sentence]').find('.english').text('');
          console.log(group);
          if ( part_sentence == 'podl' ){

            $.ajax({
              url: '/dictionary/noun/'+group,
              success: function(data){
                  $('.'+part_sentence+' .list-group:last span').remove();
                  //data = JSON.stringify(data);
                  for(var i=0; i<data.length; i++){console.log(data[i].eng_word);
                    $('.'+part_sentence+' .list-group:last').append('<span class="word list-group-item" word="'+data[i].eng_word+'">'+data[i].rus_word+'</span>')
                  }
              }
            });

          }
        })
        //skaz
        $('body').on('click','.group:not(.active)',function(){
          var part_sentence = $(this).parents( '[part_sentence]').attr('part_sentence');
          var group = $(this).attr('group');
          $(this).parents( '[part_sentence]').addClass('non-visible');
          $(this).parents( '[part_sentence]').find('.list-group:last').show();
          $(this).addClass('active');
          console.log(group);
          if ( part_sentence == 'skaz' ){

            $.ajax({
              url: '/dictionary/verb/'+group,
              success: function(data){
                  $('.'+part_sentence+' .list-group:last span').remove();
                  //data = JSON.stringify(data);
                  for(var i=0; i<data.length; i++){console.log(data[i].eng_word);
                    $('.'+part_sentence+' .list-group:last').append('<span class="word list-group-item" word="'+data[i].eng_word+'">'+data[i].rus_word+'</span>')
                  }
              }
            });

          }
        })

        $('body').on('click','.group.active',function(){
          var part_sentence = $(this).parents( '[part_sentence]').attr('part_sentence');
          var group = $(this).attr('group');
          $(this).parents( '[part_sentence]').removeClass('non-visible');
          $(this).removeClass('active');
          $(this).parents( '[part_sentence]').find('.list-group:last').hide();
          console.log(group);
        })

        //word
        $('body').on('click','.word',function(){
          var val = $(this).attr('word');
          $(this).parents( '[part_sentence]').find('.english').text(val);
          $(this).parents( '[part_sentence]').find('.word').removeClass('active');
          $(this).addClass('active');
        });




});
