import React, { useState } from "react";
import './Card.css';



function Formulario() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [exibirResultado, setExibirResultado] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "senha") {
      setSenha(value);
    }
  };

  const handleCheckboxChange = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExibirResultado(true);
  };

  return (
    <div>
      {!exibirResultado ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={handleInputChange}
          />

          <br/><br/>

          <label htmlFor="senha">Senha:</label>
          <input
            type={mostrarSenha ? "text" : "password"}
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={handleInputChange}
          />

          <br/><br/>

          <label>
            <input
              type="checkbox"
              checked={mostrarSenha}
              onChange={handleCheckboxChange}
            />{" "}
            Mostrar senha
          </label>

          <br/><br/>

          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div>
          <p>Email digitado:</p>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}

export default Formulario;



