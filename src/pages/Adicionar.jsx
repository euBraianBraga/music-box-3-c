import React from "react";
import imgLateral from "../html-css-template/imagens/half-circles-pink-blue.png";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Adicionar() {
  const navigate = useNavigate();

  function cadastrar(e) {
    e.preventDefault();

    const novaMusica = {
      nome: e.target.nome.value,
      artista: e.target.artista.value,
      genero: e.target.genero.value,
      ano: e.target.ano.value,
      imagem: e.target.imagem.value
    };

    api
      .post("/", novaMusica)
      .then(() => {
        navigate("/musicas");
      })
      .catch((erro) => {
        alert("DEU ERRO TEM MUITA GENTE TESTANDO", erro);
      });
  }

  return (
    <>
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>adicionar</h1>

            <br />

            <form onSubmit={cadastrar}>
              <label>
                Música: <br />
                <input name="nome" type="text" />
              </label>
              <br />
              <label>
                Artista: <br />
                <input name="artista" type="text" />
              </label>
              <br />
              <label>
                Genêro: <br />
                <input name="genero" type="text" />
              </label>
              <br />
              <label>
                Ano de Lançamento: <br />
                <input name="ano" type="text" />
              </label>
              <br />
              <label>
                {" "}
                Imagem (url): <br />
                <input name="imagem" type="text" />
              </label>
              <br />
              <button className="btn" type="submit">
                Enviar
              </button>
            </form>
          </div>

          <div className="img-lateral">
            <img src={imgLateral} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Adicionar;
