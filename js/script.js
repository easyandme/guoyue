$(function() {

  "use strict";

$('body').bind('touchstart', function() {});
  FastClick.attach(document.body);

var q, k, m;
var l = 0;
var s = 0;
var n = 1;
var t = 13;
var qar = [];
var playN = 0;
var rhythm = 0, sense = 0, memo = 0, know = 0;
var r, w, x, y, z, o; 
var isPlaying = false;


function first() {
    q = qar; 
    k = 0;
    $('.quiz_text>p').html(q[k].describe).append(q[k].music);
}

/* add overlay mask using pure js */
function addOverlay() { 
        var myOverlay = document.createElement('div');
        myOverlay.id = 'overlay';
        document.body.appendChild(myOverlay); 
        myOverlay.style.position = 'absolute';
        myOverlay.style.top = 0;  
        myOverlay.style.opacity = 0.8;  
        myOverlay.style.width = window.innerWidth + 'px';
        myOverlay.style.height = window.innerHeight + 'px';
        myOverlay.style.top = window.pageYOffset + 'px';
        myOverlay.style.left = window.pageXOffset + 'px';
        myOverlay.style.zIndex = 999;
        myOverlay.style.backgroundColor = '#000'; 
}

function listen() { 
 /* if (n !== 7 && n !== 8 && n !== 9) { */
  /* document.getElementById('song').onplaying = function() {
    setTimeout(function() {
      $('.choice').prop('disabled', false);
    }, 1000);
  }  */
  document.getElementById('song').addEventListener('ended', function(){
    $('.play_btn>img').removeClass('spin begin');
    playN += 1;
    isPlaying = false;
   /* $('.choice').prop('disabled', false); */
    if (playN > 1) {
      $('.play_btn>img').attr('src','./images/CDg.png');
      $('.intro').text('已播放2次，请作答');
      $('#song').remove();
    } else {
      $('.intro').text('还剩1次播放机会');
    }
  });
}

$('#start_btn').click(function() {
      $('.prelude, .slogan, img[alt="title"]').fadeOut(500);
      $('#start').prepend(p);
      $('#progressbar').fadeIn(1000);
      setTimeout(function() {
      $('.quiz').fadeIn(500);
      }, 1000);
      first();
      $('#start_audio, .prelude').remove();
      $('.wrapper').css({'border':'border: 2px solid #CAC5C5;','background-color':'#fdf3e9'});
})

$('.choice').click(function() {
      n += 1;
      l += 25/3; 
      $("#progressbar>div").css("width", l + "%");
      var u = $(this).attr("data-choice");
      o = q[k]; 
      if (k < 12) {
      m = o[u].bonus || 0;
      s += m; 
      r = o[u].r_score || 0;
      rhythm += r;
      w = o[u].sense_score || 0;
      sense += w;
      x = o[u].memo_score || 0;
      memo += x; 
      z = o[u].knowledge_score || 0;
      know += z;  
      $("#pg").text(k + 1 + "/12");
      if ($('.quiz').hasClass('fadeInRight animated')) {$('.quiz').removeClass('fadeInRight animated')};
      if ($('.play_btn>img').hasClass('spin begin')) {$('.play_btn>img').removeClass('spin begin')};
      $('.quiz').addClass('fadeOutLeft animatedFast');
     /* $('.choice').prop('disabled', true); */
      setTimeout(function() {
      k += 1;
      $('.quiz_text>p').html(q[k].describe).append(q[k].music);
      document.getElementById('song').oncanplaythrough = document.getElementById('song').play();
      isPlaying = true;
      listen(); 
      $('.play_btn>img').addClass('spin begin'); 
      if (q[k].hasOwnProperty('C')) {$('#choiceC').css('display', 'block')} else {$('#choiceC').css('display', 'none')};
      if (q[k].hasOwnProperty('D')) {$('#choiceD').css('display', 'block');$('.choice').css('margin', '-6px auto')} else {$("#choiceD").css('display', 'none');$('.choice').css('margin', '2px auto')};
      $("#choiceA").html(q[k].A.describe);
      $("#choiceB").html(q[k].B.describe);
      if (q[k].hasOwnProperty('C')) {$('#choiceC').html(q[k].C.describe)};
      if (q[k].hasOwnProperty('D')) {$('#choiceD').html(q[k].D.describe)};
      $(".quiz").removeClass('fadeOutLeft animatedFast').addClass('fadeInRight animated');
      $('.intro').text(' ');
      $('.play_btn>img').attr('src','./images/CD.png');
      }, 200);
      playN = 0;
      console.log(rhythm);
    }
      if (n > 12) {
      document.getElementById("song").pause();
        $('.quiz, #progressbar').remove();
        $('.result, .slogan').css('display', 'block').addClass('fadeInUp animatedSlow');
      var pretext = ''; 
      var perc, quotient, final_txt, middle;
      if (s >= 100) {
        perc = 99;
        quotient = '乐圣'
        middle = '竟有';
        pretext = "空前绝后！";
        final_txt = "级别！击败了"+perc+'的人...';
      } else if ( s > 60 && s < 100) { 
        perc = Math.floor(Math.random()*15) + 80;
        middle = '高达';
        quotient = '乐师'
        final_txt = "级，击败了"+perc+'%的人...'
      } else if ( s > 30 && s <= 60) { 
        perc = Math.floor(Math.random()*30) + 50;
        middle = '已足够成为';
        quotient = '乐友'
        final_txt = "，击败了"+perc+'的人...'
      } else if ( s >= 0 && s <= 30) { 
        pretext = '不意外！'
        perc = Math.floor(Math.random()*10) + 20;
        middle = '只有';
        quotient = '乐盲'
        final_txt = "级...击败了"+perc+'的人...'
      }  
        $('.percent').fadeIn(500);
        $('#final_perc').text(perc + '%');
        $('.final').text(quotient); 
      document.title = pretext + '我的国乐造诣' + middle + quotient + final_txt;
      if (sense == 3) {
        $('.a3').addClass('highlighted');
      } else if (rhythm >= 1) {
        $('.a2').addClass('highlighted');  
      } else {
        $('.a1').addClass('highlighted');  
      }
      if (rhythm == 3) {
        $('.b3').addClass('highlighted');
      } else if (rhythm >= 1) {
        $('.b2').addClass('highlighted');  
      } else {
        $('.b1').addClass('highlighted');  
      }
      if (memo == 3) {
        $('.c3').addClass('highlighted');
      } else if (memo >= 1) {
        $('.c2').addClass('highlighted');  
      } else {
        $('.c1').addClass('highlighted');  
      } 
      if (know == 3) {
        $('.d3').addClass('highlighted');
      } else if (know >= 1) {
        $('.d2').addClass('highlighted');  
      } else {
        $('.d1').addClass('highlighted');  
      }
    }
});

$('.play_btn>img').click(function() {
    if (!isPlaying) {
        t = t - 1;
        if (playN < 2) { 
          $(this).addClass('spin begin');
        };
      document.getElementById('song').oncanplaythrough = document.getElementById('song').play();
      isPlaying = true;
      listen();
    }
});
setInterval(function(){
  $("#start_btn").toggleClass("shake animatedDelayed3");
  $(".pointer").toggleClass("bounce animated"); 
}, 2500);

/*All the appending stuff*/
var p = "<div hidden id='progressbar'><div><span id='pg'>1/12</span></div></div></div>";
 
$.getJSON("data/data.json", function(e){
        $.extend(qar, e);
});

$('.share').click(function() {
        addOverlay();   
        $('img[alt="guitar"],.share_txt').show();
        $('#overlay').click(function() {
            $(this).remove(); 
            $('img[alt="guitar"],.share_txt').hide();
        });

});

$('.follow').click(function() { 
        addOverlay(); 
        $('img[alt="QR"], img[alt="des"],.share_txt_2').show();
        $('#overlay').click(function() {
            $(this).remove(); 
            $('img[alt="QR"], img[alt="des"], .share_txt_2').hide();
        });
});
});