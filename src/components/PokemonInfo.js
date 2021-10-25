import { Component } from "react";
import PokemonErrorView from "./PokemonErrorView";
import PokemonDataView from "./PokemonDataView";
import PokemonPendingView from "./PokemonPendingView";
import pokemonAPI from "./services/pokemon-api";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    status: "idle",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: "pending" });

      pokemonAPI
        .fetchPokemon(nextName)
        .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === "idle") {
      return <div>Type pokemon name</div>;
    }

    if (status === "pending") {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === "rejected") {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === "resolved") {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

/* 
    render() {
        const { status, pokemon, error } = this.state;

        switch(status) {
            case 'idle':
                return <h1>Введите имя покемона!</h1>;

            case 'pending':
                return <PokemonPendingView pokemonName={this.props.pokemonName} />;

            case 'rejected':
                return <PokemonErrorView message={error.message} />;

            case 'resolved':
                return <PokemonDataView pokemon={pokemon} />;
            
            default:
                return null;
        }
    }


    if (status === 'resolved') {
            return (
                <div>
                    <p>{pokemon.name}</p>
                    <img
                        src={pokemon.sprites.other['official-artwork'].
                            front_default}
                        alt={pokemon.name}
                        width="240"
                    />
                </div>
            );
        }
*/
