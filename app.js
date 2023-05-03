import View from "./view.js"
import Store from './store.js'


const players = [
  {
    id: 1,
    name: "Player 1",
    iconClass: "fa-x",
    colorClass: "x-color",
  },
  {
    id: 2,
    name: "Player 2",
    iconClass: "fa-o",
    colorClass: "circle-color",
  },
];

function init() {
  const view = new View();
  const store = new Store('live t3-storage-key', players);

  function intitView() {
    view.closeAll();
    view.clearMoves();
    view.setTurnIndicator(store.game.currentPlayer);
    view.updateScoreBoard(store.stats.playerWithStats[0].wins, store.stats.playerWithStats[1].wins, store.stats.ties);

    view.initializeMoves(store.game.moves);
  }

  window.addEventListener('storage', () => {
    console.log('state changed from another tab');
    intitView();
  })

  intitView();

  view.bindGameResetEvent(event => {
    store.reset();
    intitView();
  });


  view.bindNewRoundEvent(event => {
    store.newRound();
    intitView();
  });

  view.bindPlayerMoveEvent(square => {

    const existingMove = store.game.moves.find(move => move.squareId === +square.id)

    if (existingMove) {
      return
    }

    // Place an icon of the current player in a square 
    view.handlePlayerMove(square, store.game.currentPlayer);

    // Advance to the next by pushing move to the moves array. 

    store.playerMove(+square.id)

    if (store.game.status.isComplete) {
      view.openModal(store.game.status.winner ? `${store.game.status.winner.name} is the winner` : `It's a tie.`)
      return
    }


    // Set the next players turn indicator
    view.setTurnIndicator(store.game.currentPlayer);
  });

}

window.addEventListener('load', init)