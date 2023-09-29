import { splitArray, shuffleArray } from "./helpers";
import Pokedex from "./Pokedex";

import "./Pokegame.css";

const Pokegame = ({pokemon}) => {
    let hand1 = [];
    let hand2 = [];
    let deck = splitArray(pokemon);
    hand1 = deck[0];
    hand2 = deck[1];

    let experience1 = hand1.reduce((acc,i) => {
        return acc + i.base_experience
    }, 0); 
    let experience2 = hand2.reduce((acc,i) => {
        return acc + i.base_experience
    }, 0); 

    

    return (
        <div className="Pokegame">
            <Pokedex player='1' pokemon={hand1} exp={experience1} winner={experience1 > experience2} />
            <Pokedex player='2' pokemon={hand2} exp={experience2} winner={experience2 > experience1} />
        </div>
    );
}

export default Pokegame;