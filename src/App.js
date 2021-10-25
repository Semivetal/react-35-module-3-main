import "./App.css";
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import PokemonForm from "./components/PokemonForm";
import PokemonInfo from "./components/PokemonInfo";
// import Clock from './components/Clock/Clock';
// import Modal from './components/Modal';
// import Tabs from './components/Tabs/Tabs';

export default class App extends Component {
  state = {
    pokemonName: "",
  };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

/* 
  state = {
    pokemon: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }))
        .finally(() => this.setState({ loading: false }));
    }, 1000);
  }

{this.state.loading && <h1>Загружаем...</h1>}
{this.state.pokemon && <div>{this.state.pokemon.name}</div>}
*/

/* 
 <Tabs /> 
 
 class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  render() {
    const { todos, filter, showModal } = this.state;

    return (
      <div className="App">
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Контент модалки как children</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. </p>
            <button type="button" onClick={this.toggleModal}>
            Закрыть
        </button>
        </Modal>
        )}
        <Clock />
      </div>
    );
  }
}
*/
