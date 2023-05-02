import View from "./view.js"

// const App = {
//   // All of our selected HTML elements
//   $: {
//     menu: document.querySelector('[data-id="menu"]'),
//     menuItems: document.querySelector('[data-id="menu-items"]'),
//     resetBtn: document.querySelector('[data-id="reset-btn"]'),
//     newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
//     squares: document.querySelectorAll('[data-id="square"]'),
//     modal: document.querySelector('[data-id="modal"]'),
//     modalText: document.querySelector('[data-id="modal-text"]'),
//     modalBtn: document.querySelector('[data-id="modal-btn"]'),
//     turn: document.querySelector('[data-id="turn"]'),
//   },

//   init() {
//     App.registerEventListners()

//   },

//   state: {
//     moves: []
//   },

//   getGamestatus(moves) {


//     const p1Moves = moves.filter(move => move.playerId === 1).map(move => +move.squareId)
//     const p2Moves = moves.filter(move => move.playerId === 2).map(move => +move.squareId)

//     const winningPatterns = [
//       [1, 2, 3],
//       [1, 5, 9],
//       [1, 4, 7],
//       [2, 5, 8],
//       [3, 5, 7],
//       [3, 6, 9],
//       [4, 5, 6],
//       [7, 8, 9],
//     ];


//     let winner = null;

//     winningPatterns.forEach(pattern => {
//       const p1Wins = pattern.every(v => p1Moves.includes(v));
//       const p2Wins = pattern.every(v => p2Moves.includes(v));


//       if (p1Wins) {
//         winner = 1;
//       }
//       if (p2Wins) {
//         winner = 2;
//       }
//     });

//     return {
//       status: moves.length === 9 || winner != null ? 'complete' : 'in-progress', // in-progress | complete
//       winner
//     };
//   },

//   registerEventListners() {
//     console.log(App.$.squares);

//     App.$.menu.addEventListener('click', (event) => {
//       App.$.menuItems.classList.toggle('hidden');
//     });

//     App.$.resetBtn.addEventListener('click', event => {
//       console.log('Reset the game');
//     });

//     App.$.newRoundBtn.addEventListener('click', event => {
//       console.log('Add a new round');
//     });

//     App.$.modalBtn.addEventListener("click", event => {
//       App.state.moves = [];
//       App.$.squares.forEach((square) => {
//         square.replaceChildren()
//       })
//       App.$.modal.classList.add('hidden');
//     })

//     //TODO
//     App.$.squares.forEach(square => {
//       square.addEventListener('click', event => {

//         // Check if there  is already play, return early if so

//         const hasMove = (squareId) => {
//           const existingMove = App.state.moves.find(move => move.squareId === squareId);
//           return existingMove !== undefined;
//         }

//         if (hasMove(+square.id)) {
//           return;
//         }

//         // Determine which player icon to add to the square

//         const lastMove = App.state.moves.at(-1);
//         const getOppositePlayer = (playerId) => (playerId === 1 ? 2 : 1);
//         const currentPlayer =
//           App.state.moves.length === 0
//             ? 1
//             : getOppositePlayer(lastMove.playerId)
//         const nextPlayer = getOppositePlayer(currentPlayer)

//         const squareIcon = document.createElement('i');
//         const turnIcon = document.createElement('i');
//         const turnLabel = document.createElement('p')
//         turnLabel.innerText = `Player ${nextPlayer}, you are up!`

//         if (currentPlayer === 1) {
//           squareIcon.classList.add('fa-solid', 'fa-x', 'x-color');
//           turnIcon.classList.add('fa-solid', 'fa-o', 'circle-color');
//           turnLabel.classList = 'circle-color';
//         } else {
//           squareIcon.classList.add('fa-solid', 'fa-o', 'circle-color')
//           turnIcon.classList.add('fa-solid', 'fa-x', 'x-color');
//           turnLabel.classList = 'x-color';
//         }

//         App.$.turn.replaceChildren(turnIcon, turnLabel);

//         App.state.moves.push({
//           squareId: +square.id,
//           playerId: currentPlayer
//         })


//         square.replaceChildren(squareIcon)


//         // Check if there is a winner or a tie game
//         const game = App.getGamestatus(App.state.moves);

//         if (game.status === 'complete') {

//           App.$.modal.classList.remove("hidden");

//           let message = "";

//           if (game.winner) {
//             message = `Player ${game.winner} wins!`
//           } else {
//             message = `The game ended in a tie.`
//           }

//           App.$.modalText.textContent = message;
//         }
//       });
//     });
//   },
// }

// window.addEventListener('load', App.init)

function init() {
  const view = new View();

  view.bindGameResetEvent(event => {
    console.log('Resent event');
    console.log(event);
  });

  view.bindNewRoundEvent(event => {
    console.log('New round event');
    console.log(event);
  });

  view.bindPlayerMoveEvent(event => {
    console.log('Player move event');
    console.log(event);
  });
}

window.addEventListener('load', init)