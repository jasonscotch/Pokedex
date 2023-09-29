import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({player, pokemon, exp, winner}) => {
    let winnerMsg = null;
    if (winner) {winnerMsg = <span className="Pokedex-winner">THIS HAND WINS!</span>}

    return (
        <div className="Pokedex">
            <h2 className="Pokedex-title">Player {player} Pokedex</h2>
            <div className="Pokedex-cards">
                {pokemon.map(p => (
                    <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
                ))}
            </div>
            <h4>Total Experience: {exp} {winnerMsg}</h4>
            
        </div>
    );
}

export default Pokedex;