import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { theme } from '../../../theme';

export default function LoginForm() {
  //state (état, donnée)
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  }
  const handleChange = (e) => { setInputValue(e.target.value) }



  //affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom"
        required
      />
      <button>Accéder à votre espace</button>
    </form>
  )
}

const LoginFormStyled = styled.form.attrs({ className: 'login-form-styled' })`
   
`
