var $body = $('body');

$('html').on('keydown', function () {
  var $ball = $('<div>');
  var newLeft = Math.random() * 1000;
  var newTop = Math.random() * 1000;

  $body.append($ball);
  $ball.css('left', newLeft);
  $ball.addClass('ball');
  $ball.css('top', newTop);
});
