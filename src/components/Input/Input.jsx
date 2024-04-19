import "./styles.css"

function Input({ name, type, placeholder, label }){
    return (
      <div className="input-wrapper">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
        />
      </div>
    );
  };
  
  export default Input;