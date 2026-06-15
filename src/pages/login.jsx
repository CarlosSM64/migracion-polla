import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../services/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const loginGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/polla");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Polla Mundialista</h1>
      <button onClick={loginGoogle}>
        Iniciar sesión con Google c:
      </button>
    </div>
  );
}

export default Login;