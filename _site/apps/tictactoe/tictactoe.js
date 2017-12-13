'use strict'

$(document).ready(function() {
  var playerTurn = 'X'; 
  var win = false;
  $('[data-cell]').click(function() {
        if($(this).text()!=='') {
          alert('This cell is already marked.');
        return;
        }
        $(this).text(playerTurn);
        checkForWin();

        playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    
  });

  $('.restart').click(function(){
    restart();
  });


  function horizontalWin() {
      return ($('[data-cell="0"]').text() === playerTurn) && ($('[data-cell="1"]').text() === playerTurn) && ($('[data-cell="2"]').text() === playerTurn) ||
             ($('[data-cell="3"]').text() === playerTurn) && ($('[data-cell="4"]').text() === playerTurn) && ($('[data-cell="5"]').text() === playerTurn) ||
             ($('[data-cell="6"]').text() === playerTurn) && ($('[data-cell="7"]').text() === playerTurn) && ($('[data-cell="8"]').text() === playerTurn)
  };

  function verticalWin() {
      return ($('[data-cell="0"]').text() === playerTurn) && ($('[data-cell="3"]').text() === playerTurn) && ($('[data-cell="6"]').text() === playerTurn) ||
             ($('[data-cell="1"]').text() === playerTurn) && ($('[data-cell="4"]').text() === playerTurn) && ($('[data-cell="7"]').text() === playerTurn) ||
             ($('[data-cell="2"]').text() === playerTurn) && ($('[data-cell="5"]').text() === playerTurn) && ($('[data-cell="8"]').text() === playerTurn)
  };

  function diagonalWin() {
      return ($('[data-cell="0"]').text() === playerTurn) && ($('[data-cell="4"]').text() === playerTurn) && ($('[data-cell="8"]').text() === playerTurn)|| 
             ($('[data-cell="2"]').text() === playerTurn) && ($('[data-cell="4"]').text() === playerTurn) && ($('[data-cell="6"]').text() === playerTurn) 
  };

  function checkForWin() {
    if ( horizontalWin() || verticalWin() || diagonalWin() ) {
      $('#announce-winner').html('<span>Player ' +  playerTurn + ' Won!</span>');
      $('[data-cell]').text('');
      $('#announce-winner span').fadeOut('slow');
      }
  }

  function restart() {
      for(var i=0; i < $('[data-cell]').length; i++) {
        $($('[data-cell]')[i]).html('');
      }
  }

  $(function() {
      FastClick.attach(document.body);
  });

});
