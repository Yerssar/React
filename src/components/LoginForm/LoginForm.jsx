import "./styles.css";
import Input from '../Input/Input';
import Button from '../Button/Button';

function LoginForm (){
  return (
    <div className="login-form-container">
      <h2 className="login-heading">Login form</h2>
      <form className="login-form">
        <Input
          name="username"
          type="text"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
        <Button name="login" type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
