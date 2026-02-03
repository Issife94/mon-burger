import React, { useState } from 'react'

export default function LoginForm() {
  //state (état, donnée)
  const [inputValue, setInputValue] = useState("");
  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  }
  const handleChange = (e) => { setInputValue(e.target.value) }
  //affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenur chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
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
