import React, { useState } from "react";
import api from "../../services/api";
import "./styles.css";

export default function User() {
  const [users, setUsers] = useState([]);

  async function loadUser(name) {
    const res = await api.get(name);
    setUsers(res.data);
  }
  loadUser(window.location.pathname);

  return (
    <div className="body">
      <div className="container">
        <img src={users.avatar_url} alt="avatar do user" className="image" />
        <h2 className="text">Olá {users.login}</h2>
        <div className="text2">
          <p>{users.bio}</p>
        </div>
        <div className="buttons">
          <a className="url" href="/">
            home
          </a>
          <a className="url" href={users.html_url}>
            github
          </a>
        </div>
      </div>
    </div>
  );
}
