$(document).ready(function(){

  let miller = [];
  let rocas = [];
  let gianella = [];
  let scoreIncrement = [];

	$(".popup-01").hide();
	$(".popup-02").hide();
	$(".popup-03").hide();
//TABS SCORES

  $('.go-home-btn').on('click', function(){
    $(".body-content").hide();
    $(".body-content.all").show();
  });

  $("#card-sm").on('click', function(){
    $(".body-content").hide();
    $(".body-content.miller").show();
    if(localStorage.getItem("miller")){
      $('.results-content.result-miller').css('display', 'block');
      $('.score-miller').text(localStorage.getItem("miller"));
      $('.accordion-block.miller').css('display', 'block');
    }
  });

  $("#card-sr").on('click', function(){
    $(".body-content").hide();
    $(".body-content.rocas").show();
    if(localStorage.getItem("rocas")){
      $('.results-content.result-rocas').css('display', 'block');
      $('.score-rocas').text(localStorage.getItem("rocas"));
      $('.accordion-block.rocas').css('display', 'block');
    }
  });

  $("#card-sg").on('click', function(){
    $(".body-content").hide();
    $(".body-content.gia").show();
    if(localStorage.getItem("gianella")){
      $('.results-content.result-gia').css('display', 'block');
      $('.score-gia').text(localStorage.getItem("gianella"));
      $('.accordion-block.gia').css('display', 'block');
    }
  });

  $("#card-si").on('click', function(){
    $(".body-content").hide();
    $(".body-content.increment").show();
    if(localStorage.getItem("scoreIncrement")){
      $('.results-content.result-incr').css('display', 'block');
      $('.score-incr').text(localStorage.getItem("scoreIncrement"));
      $('.accordion-block.incr').css('display', 'block');
    }
  });

  $(".link.miller").on('click', function(){
    $(".body-content").hide();
    $(".body-content.miller").show();
    window.scrollTo(0, 0);
    if(localStorage.getItem("miller")){
      $('.results-content.result-miller').css('display', 'block');
      $('.score-miller').text(localStorage.getItem("miller"));
      $('.accordion-block.miller').css('display', 'block');
    }
  });

  $(".link.rocas").on('click', function(){
    $(".body-content").hide();
    $(".body-content.rocas").show();
    window.scrollTo(0, 0);
    if(localStorage.getItem("rocas")){
      $('.results-content.result-rocas').css('display', 'block');
      $('.score-rocas').text(localStorage.getItem("rocas"));
      $('.accordion-block.rocas').css('display', 'block');
    }
  });

  $(".link.gia").on('click', function(){
    $(".body-content").hide();
    $(".body-content.gia").show();
    window.scrollTo(0, 0);
    if(localStorage.getItem("gianella")){
      $('.results-content.result-gia').css('display', 'block');
      $('.score-gia').text(localStorage.getItem("gianella"));
      $('.accordion-block.gia').css('display', 'block');
    }
  });

  $(".link.incremendiv").on('click', function(){
    $(".body-content").hide();
    $(".body-content.increment").show();
    window.scrollTo(0, 0);
    if(localStorage.getItem("scoreIncrement")){
      $('.results-content.result-incr').css('display', 'block');
      $('.score-incr').text(localStorage.getItem("scoreIncrement"));
      $('.accordion-block.incr').css('display', 'block');
    }
  });

  $('.btn-process').on('click', function(){
    $(".body-content").hide();
    $(".body-content.compare").show();
    window.scrollTo(0, 0);
  })

//POPUP
	$(".ico-info").click(function(){
	    $(".popup-01").show();
	  });
	$(".close").click(function(){
	    $(".popup-01").hide();
	  });

    $(".ico-info-second").click(function(){
      $(".popup-02").show();
    });
  $(".popup-02 .close").click(function(){
      $(".popup-02").hide();
    });
	
	$(".ico-info-third").click(function(){
      $(".popup-03").show();
    });
  $(".popup-03 .close").click(function(){
      $(".popup-03").hide();
    });

//ACCORDION
const acordeon = document.getElementsByClassName('accordion-block');

for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
};

//CALCULADORA

  $('.anti-three-month').on('click', function(){
    if($('.anti-three-month').hasClass('active-answer')){
      $('.anti-three-month.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    miller[0] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.miller .active-answer')).length === 3){
      let millerTotal = miller.reduce((a, b) => a + b);
      $('.results-content.result-miller').css('display', 'block');
      $('.score-miller').text(millerTotal);
      $('.btn-save.miller').on('click', function(){
        localStorage.setItem("miller", millerTotal);
      });
      $('.accordion-block.miller').css('display', 'block');
    }
  });

  $('.inmu-three-month').on('click', function(){
    if($('.inmu-three-month').hasClass('active-answer')){
      $('.inmu-three-month.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    miller[1] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.miller .active-answer')).length === 3){
      let millerTotal = miller.reduce((a, b) => a + b);
      $('.results-content.result-miller').css('display', 'block');
      $('.score-miller').text(millerTotal);
      $('.btn-save.miller').on('click', function(){
        localStorage.setItem("miller", millerTotal);
      });
      $('.accordion-block.miller').css('display', 'block');
    }
  });

  $('.charlson-4').on('click', function(){
    if($('.charlson-4').hasClass('active-answer')){
      $('.charlson-4.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    miller[2] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.miller .active-answer')).length === 3){
      let millerTotal = miller.reduce((a, b) => a + b);
      $('.results-content.result-miller').css('display', 'block');
      $('.score-miller').text(millerTotal);
      $('.btn-save.miller').on('click', function(){
        localStorage.setItem("miller", millerTotal);
      });
      $('.accordion-block.miller').css('display', 'block');
    }
  });

  $('.anti-factor').on('click', function(){
    if($('.anti-factor').hasClass('active-answer')){
      $('.anti-factor.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    rocas[0] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.rocas .active-answer')).length === 3){
      let rocasTotal = rocas.reduce((a, b) => a + b);
      $('.results-content.result-rocas').css('display', 'block');
      $('.score-rocas').text(rocasTotal);
      $('.btn-save.rocas').on('click', function(){
        localStorage.setItem("rocas", rocasTotal);
      });
      $('.accordion-block.rocas').css('display', 'block');
    }
  });

  $('.hospi-factor').on('click', function(){
    if($('.hospi-factor').hasClass('active-answer')){
      $('.hospi-factor.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    rocas[1] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.rocas .active-answer')).length === 3){
      let rocasTotal = rocas.reduce((a, b) => a + b);
      $('.results-content.result-rocas').css('display', 'block');
      $('.score-rocas').text(rocasTotal);
      $('.btn-save.rocas').on('click', function(){
        localStorage.setItem("rocas", rocasTotal);
      });
      $('.accordion-block.rocas').css('display', 'block');
    }
  });

  $('.colo-factor').on('click', function(){
    if($('.colo-factor').hasClass('active-answer')){
      $('.colo-factor.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    rocas[2] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.rocas .active-answer')).length === 3){
      let rocasTotal = rocas.reduce((a, b) => a + b);
      $('.results-content.result-rocas').css('display', 'block');
      $('.score-rocas').text(rocasTotal);
      $('.btn-save.rocas').on('click', function(){
        localStorage.setItem("rocas", rocasTotal);
      });
      $('.accordion-block.rocas').css('display', 'block');
    }
  });

  //Gianella 

  // 1 Gianella

  $('.uci').on('click', function(){
    if($('.uci').hasClass('active-answer')){
      $('.uci.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    gianella[0] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.gia .active-answer')).length === 4 || Array.from($('.body-content.gia .active-answer')).length === 5){
      let gianellaTotal = gianella.reduce((a, b) => a + b);
      $('.results-content.result-gia').css('display', 'block');
      $('.score-gia').text(gianellaTotal);
      $('.btn-save.gia').on('click', function(){
        localStorage.setItem("gianella", gianellaTotal);
      });
      $('.accordion-block.gia').css('display', 'block');
    }
  });

  // 2 Gianella

  $('.inv-ab').on('click', function(){
    if($('.inv-ab').hasClass('active-answer')){
      $('.inv-ab.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    gianella[1] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.gia .active-answer')).length === 4 || Array.from($('.body-content.gia .active-answer')).length === 5){
      let gianellaTotal = gianella.reduce((a, b) => a + b);
      $('.results-content.result-gia').css('display', 'block');
      $('.score-gia').text(gianellaTotal);
      $('.score-gia').show();
      $('.btn-save.gia').on('click', function(){
        localStorage.setItem("gianella", gianellaTotal);
      });
      $('.accordion-block.gia').css('display', 'block');
    }
  });

// 3 Gianella

  $('.quimio-radio').on('click', function(){
    if($('.quimio-radio').hasClass('active-answer')){
      $('.quimio-radio.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    gianella[2] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.gia .active-answer')).length === 4 || Array.from($('.body-content.gia .active-answer')).length === 5){
      let gianellaTotal = gianella.reduce((a, b) => a + b);
      $('.results-content.result-gia').css('display', 'block');
      $('.score-gia').text(gianellaTotal);
      $('.score-gia').show();
      $('.btn-save.gia').on('click', function(){
        localStorage.setItem("gianella", gianellaTotal);
      });
      $('.accordion-block.gia').css('display', 'block');
    }
  });

  // 4 Gianella

  $('.colo-rec').on('click', function(){
    if($('.colo-rec').hasClass('active-answer')){
      $('.colo-rec.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    gianella[3] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.gia .active-answer')).length === 4 || Array.from($('.body-content.gia .active-answer')).length === 5){
      let gianellaTotal = gianella.reduce((a, b) => a + b);
      $('.results-content.result-gia').css('display', 'block');
      $('.score-gia').text(gianellaTotal);
      $('.score-gia').show();
      $('.btn-save.gia').on('click', function(){
        localStorage.setItem("gianella", gianellaTotal);
      });
      $('.accordion-block.gia').css('display', 'block');
    }
  });

  $('.optional').on('click', function(){
    if($('.optional').hasClass('active-answer')){
      $('.optional.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    gianella[3] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.gia .active-answer')).length === 4 || Array.from($('.body-content.gia .active-answer')).length === 5){
      let gianellaTotal = gianella.reduce((a, b) => a + b);
      $('.results-content.result-gia').css('display', 'block');
      $('.score-gia').text(gianellaTotal);
      $('.score-gia').show();
      $('.btn-save.gia').on('click', function(){
        localStorage.setItem("gianella", gianellaTotal);
      });
      $('.accordion-block.gia').css('display', 'block');
    }
  });

  $('.no-button').on('click', function(){
    // When "no" is clicked in the .colo-rec method, 
    // reset the value in the .optional method by removing the active-answer class and resetting gianella[4]
      $('.optional.active-answer').removeClass('active-answer');
      gianella[3] = 5;
      let gianellaTotal = gianella.reduce((a, b) => a + b);
      $('.results-content.result-gia').css('display', 'block');
      $('.score-gia').text(gianellaTotal);
      $('.score-gia').show();
      $('.btn-save.gia').on('click', function(){
        localStorage.setItem("gianella", gianellaTotal);
      });
      $('.accordion-block.gia').css('display', 'block');
    });

///////FIN Gianella //////////////



  $('.sepsis').on('click', function(){
    if($('.sepsis').hasClass('active-answer')){
      $('.sepsis.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    scoreIncrement[0] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.increment .active-answer')).length === 5){
      let scoreIncrementTotal = scoreIncrement.reduce((a, b) => a + b);
      $('.results-content.result-incr').css('display', 'block');
      $('.score-incr').text(scoreIncrementTotal);
      $('.btn-save.incr').on('click', function(){
        localStorage.setItem("scoreIncrement", scoreIncrementTotal);
      });
      $('.accordion-block.incr').css('display', 'block');
    }
  });

  $('.pitt').on('click', function(){
    if($('.pitt').hasClass('active-answer')){
      $('.pitt.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    scoreIncrement[1] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.increment .active-answer')).length === 5){
      let scoreIncrementTotal = scoreIncrement.reduce((a, b) => a + b);
      $('.results-content.result-incr').css('display', 'block');
      $('.score-incr').text(scoreIncrementTotal);
      $('.btn-save.incr').on('click', function(){
        localStorage.setItem("scoreIncrement", scoreIncrementTotal);
      });
      $('.accordion-block.incr').css('display', 'block');
    }
  });

  $('.charlson-2').on('click', function(){
    if($('.charlson-2').hasClass('active-answer')){
      $('.charlson-2.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    scoreIncrement[2] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.increment .active-answer')).length === 5){
      let scoreIncrementTotal = scoreIncrement.reduce((a, b) => a + b);
      $('.results-content.result-incr').css('display', 'block');
      $('.score-incr').text(scoreIncrementTotal);
      $('.btn-save.incr').on('click', function(){
        localStorage.setItem("scoreIncrement", scoreIncrementTotal);
      });
      $('.accordion-block.incr').css('display', 'block');
    }
  });

  $('.bacteriemia-option').on('click', function(){
    if($('.bacteriemia-option').hasClass('active-answer')){
      $('.bacteriemia-option.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    scoreIncrement[3] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.increment .active-answer')).length === 5){
      let scoreIncrementTotal = scoreIncrement.reduce((a, b) => a + b);
      $('.results-content.result-incr').css('display', 'block');
      $('.score-incr').text(scoreIncrementTotal);
      $('.btn-save.incr').on('click', function(){
        localStorage.setItem("scoreIncrement", scoreIncrementTotal);
      });
      $('.accordion-block.incr').css('display', 'block');
    }
  });

  $('.antimicr-inad').on('click', function(){
    if($('.antimicr-inad').hasClass('active-answer')){
      $('.antimicr-inad.active-answer').removeClass('active-answer');
    }
    $(this).addClass('active-answer');
    scoreIncrement[4] = Number($(this).attr('data-value'));
    if(Array.from($('.body-content.increment .active-answer')).length === 5){
      let scoreIncrementTotal = scoreIncrement.reduce((a, b) => a + b);
      $('.results-content.result-incr').css('display', 'block');
      $('.score-incr').text(scoreIncrementTotal);
      $('.btn-save.incr').on('click', function(){
        localStorage.setItem("scoreIncrement", scoreIncrementTotal);
      });
      $('.accordion-block.incr').css('display', 'block');
    }
  });

  $(document).ready(function() {
    $('.yes-button').click(function() {
      $('.optional').show();
      $('.btn-optional').show();
      $('.factor-04-1').show();
      $('.text-factor-1').show();
      $('.subtitle-factor').show();
      $('.text-factor-1 p').show();



      $('.no-button').click(function() {
        $('.optional').hide();
        $('.btn-optional').hide();
        $('.factor-04-1').hide();
        $('.text-factor-1').hide();

      });
      
    });
  });
  


});