document.addEventListener('DOMContentLoaded', function() {
  var game = document.querySelector('div.game_board');
  var intro = document.querySelector('.intro');
  var button = document.querySelector('button');

  button.addEventListener('click',function(){
    intro.style.display = 'none';
    game.style.display = 'inline';
  })
})
