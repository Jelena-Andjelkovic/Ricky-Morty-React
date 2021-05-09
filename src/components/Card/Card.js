import "./Card.scss";

const Card = (props) => {
  return (
    <div
      className="Card"
      onClick={() => props.setCharacter(props.character.id)}
    >
      <img src={props.character.image} alt="img" />
      <h1>{props.character.name}</h1>
      <button>Like</button>
    </div>
  );
};

export default Card;
