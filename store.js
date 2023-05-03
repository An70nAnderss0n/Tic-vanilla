const initialValue = {
  moves: [],
}


export default class Store {

  #state = initialValue;

  constructor() {

  }

  get game() {
    return 'Dummy value'
  }

  #getState() {
    return this.#state;
  }

  #saveState(stateOrFn) {
    const prevState = this.#getState();

    let newState;

    switch (typeof stateOrFn) {
      case 'function':
        newState = stateOrFn(prevState)
        break;
      case 'object':
        newState = prevState;
        break;
      default:
        throw new Error('Invalid argument passed to saveState')
    }
    this.#state = newState;
  }
}