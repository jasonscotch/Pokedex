import "./Pokecard.css";

const Pokecard = ({id, name, type, base_experience}) => {
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="Pokecard">
            <h4 className="Pokecard-title">{name}</h4>
            <div className="Pokecard-img-container"> 
                <img className="Pokecard-img" src={url} />
            </div>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
        )
}

export default Pokecard;