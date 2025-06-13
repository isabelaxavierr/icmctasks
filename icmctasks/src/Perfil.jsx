import React from 'react';
import './Perfil.css';

const Perfil = () => {
  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <div className="perfil-header">
          <img
            className="perfil-avatar"
            src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
            alt="Avatar"
          />
          <div className="perfil-info">
            <h2>Nome do Usuário</h2>
            <p>nomedousuario@email.com</p>
          </div>
        </div>

        <div className="perfil-form">
          <label>Nome:</label>
          <input type="text" value="Nome do Usuário" readOnly />

          <label>Email:</label>
          <input type="email" value="emaildousuario@email.com" readOnly />

          <label>Data de nasc.:</label>
          <input type="text" value="01/01/2000" readOnly />

          <label>CPF:</label>
          <input type="text" value="999.999.999-33" readOnly />

          <label>Senha:</label>
          <div className="senha-container">
            <input type="password" value="12345678" readOnly />
            <button className="btn-small">ALTERAR SENHA</button>
          </div>

          <div className="perfil-buttons">
            <button className="btn-primary">ALTERAR DADOS</button>
            <button className="btn-delete">EXCLUIR CONTA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;