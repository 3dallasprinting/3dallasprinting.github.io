jQuery(function ($) {
  $('.logo, .nav a').on('click', function (event) {
    var $hash = $(event.currentTarget.hash),
        offset = $hash.offset().left,
        width = parseInt($('.sidebar').css('width'), 10);

    $('html, body').animate({ scrollLeft: offset - width });
    $hash.animate({ scrollTop: 0 });
    event.preventDefault();
  });

  $('#examples a').on('click', function (event) {
    var href = event.currentTarget.href;

    $('#lightbox').css('background-image', 'url("' + href + '")');
    $('.lightbox').css('display', 'block');
    event.preventDefault();
  });

  $('.lightbox').on('click', function (event) {
    $('.lightbox').css('display', 'none');
    event.preventDefault();
  });

  $('html').on('keydown', function (event) {
    if (event.keyCode === 27) {
      $('.lightbox').css('display', 'none');
    }
  });
});
