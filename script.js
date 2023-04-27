"use strict";

const App = {
  // All of our selected HTML elements
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]')
  },

  init() {
    App.registerEventListners()

  },

  state: {
    currentPlayer: 1,
  },

  registerEventListners() {
    console.log(App.$.squares);

    App.$.menu.addEventListener('click', (event) => {
      App.$.menuItems.classList.toggle('hidden');
    });

    App.$.resetBtn.addEventListener('click', event => {
      console.log('Reset the game');
    })

    App.$.newRoundBtn.addEventListener('click', event => {
      console.log('Add a new round');
    });

    //TODO
    App.$.squares.forEach(square => {
      square.addEventListener('click', event => {
        console.log(`Square with id: ${event.target.id}`);
        console.log(`The current player is ${App.state.currentPlayer}`);

        const currentPlayer = App.state.currentPlayer;

        const icon = document.createElement('i');

        if (currentPlayer === 1) {
          icon.classList.add('fa-solid', 'fa-x')
        } else {
          icon.classList.add('fa-solid', 'fa-o', 'circle-color')
        }

        App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1;



        event.target.replaceChildren(icon)


        // <i class="fa-solid fa-x"></i>
        // <i class="fa-solid fa-o"></i>
      })
    });
  }

}

window.addEventListener('load', App.init)