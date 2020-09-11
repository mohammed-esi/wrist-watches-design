$(document).ready(function () {
  function makeTimer() {
    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    var endTime = new Date('01 January 2021 00:00:00 GMT+01:00');
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < '10') {
      hours = '0' + hours;
    }
    if (minutes < '10') {
      minutes = '0' + minutes;
    }
    if (seconds < '10') {
      seconds = '0' + seconds;
    }

    $('#day').html(days + '<h6>Days</h6>');
    $('#hour').html(hours + '<h6>Hours</h6>');
    $('#minute').html(minutes + '<h6>Minutes</h6>');
    $('#second').html(seconds + '<h6>Seconds</h6>');
  }
  setInterval(function () {
    makeTimer();
  }, 1000);

  // sticky circles;
  let scroll_height = 2000;
  function circlesScrolling() {
    if ($(window).length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= scroll_height) {
          $('li').addClass('li-scroll');
        } else {
          $('li').removeClass('li-scroll');
        }
      });
    }
  }

  circlesScrolling();

  // Get the current year for the copyright
  $('#year').text(new Date().getFullYear());

  // Smooth Scrolling
  $('#main-circles a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
