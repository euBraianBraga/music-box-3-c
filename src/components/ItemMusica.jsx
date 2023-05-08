import api from "../api";
import React from "react";
import capaPadrao from "../html-css-template/imagens/capa.png";
import editIcon from "../html-css-template/imagens/edit-icon.png";
import deleteIcon from "../html-css-template/imagens/delete-icon.png";
import { useState } from "react";

function ItemMusica(props) {
  const estiloCard = {
    backgroundImage: `url(${props.capa ? props.capa : capaPadrao})`
  };

  const [nome, setNome] = useState(props.nome);
  const [artista, setArtista] = useState(props.artista);
  const [genero, setGenero] = useState(props.genero);
  const [ano, setAno] = useState(props.ano);

  const [editing, setEditing] = useState(false);

  function atualizarMusica() {
    const musicaAtualizada = {
      nome,
      artista,
      genero,
      ano
    };

    api
      .put(`/${props.id}`, musicaAtualizada)
      .then((res) => {
        alert("MUSICA ATUALIZADA");
      })
      .catch((error) => {
        alert("DEU ERRO, CHAMA O AMIGO");
      });
  }

  return (
    <>
      <div className="card-music" style={estiloCard}>
        <div className="icons">
          <img
            src={editIcon}
            alt="Icone de um lapis"
            onClick={() => setEditing(true)}
          />
          <img src={deleteIcon} alt=""
            onClick={() => props.funcaoDeletar(props.id)}
          />
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input
              type="text"
              disabled={!editing}
              className={
                editing ? "input-music-enable" : "input-music-disabled"
              }
              defaultValue={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input
              disabled={!editing}
              className={
                editing ? "input-music-enable" : "input-music-disabled"
              }
              type="text"
              defaultValue={artista}
              onChange={(e) => setArtista(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input
              disabled={!editing}
              className={
                editing ? "input-music-enable" : "input-music-disabled"
              }
              type="text"
              defaultValue={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input
              disabled={!editing}
              className={
                editing ? "input-music-enable" : "input-music-disabled"
              }
              type="text"
              defaultValue={ano}
              onChange={(e) => setAno(e.target.value)}
            />
          </p>
          <button onClick={atualizarMusica} className="btn-salvar-enable">
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemMusica;
