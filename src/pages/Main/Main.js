import "./Main.scss";
import Card from "../../components/Card/Card";

const Main = (props) => {
  return (
    <div className="Main">
      <div className="Card-wrapper">
        {props.characters.map((char) => (
          <Card character={char} setCharacter={props.setCharacter} />
        ))}
      </div>
    </div>
  );
};

export default Main;
