import "./styles.css";

function Button({ name, type }) {

  return 
  (<div className="main-button">

    <button type={type}>
    {name}
  </button>
  </div>
  );
}

export default Button;