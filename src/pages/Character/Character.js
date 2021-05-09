import "./Character.scss";

const Character = (props) => {
  return (
    <div className="Character">
      <button onClick={() => props.setCharacter(null)}>Back</button>
      <h1>{props.character.name}</h1>
      <img src={props.character.image} alt="img" />
      <p>Gender: {props.character.gender}</p>
      <p>Origin: {props.character.origin.name}</p>
      <p>Species: {props.character.species}</p>
      <p>Status: {props.character.status}</p>
    </div>
  );
};

export default Character;
