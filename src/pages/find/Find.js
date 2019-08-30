import React, { useState } from "react";
import api from "../../services/api";
import "./styles.css";

import logo from "../../assets/GitHub-Mark-Light-120px-plus.png";

export default function Find({ history }) {
  const [username, setUser] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.get(username);

    const { login } = response.data;
    history.push(`${login}`);
  }

  return (
    <div className="box">
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Digite seu usuario no Github"
          value={username}
          onChange={e => setUser(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
    </div>
  );
}
