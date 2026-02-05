import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./LoginForm.css"

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

  const titreH1 = {
    backgroundColor: "red", color: "white", fontSize: 24
  }

  //affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1 style={titreH1}>Bienvenue chez nous !</h1>
      <br />
      <h2 className="bonbon">Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom"
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  )
}


/** 
 * 4 méthodes pour ajouter du style à un composant 
 * 1. inline style -> ajouter un cas en guise de test
 * 2. global style -> utile pour les conditional rendering
 * 3. modules CSS (avec className) -> un autre fichier qu'on importera
 * 4. global style (index.css) -> les règles 
 * **/