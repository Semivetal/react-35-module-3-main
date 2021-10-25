import { ImSpinner } from "react-icons/im";
import PokemonDataView from "./PokemonDataView";
import pendingImage from "./pending.webp";

const styles = {};

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div style={StyleSheet.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Loading...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
