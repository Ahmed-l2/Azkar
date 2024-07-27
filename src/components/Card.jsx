
function Card(props) {
    return (
        <div className="Card" onClick={props.onClick}>
            <h1>{props.title}</h1>
        </div>
    );
}

export default Card;
