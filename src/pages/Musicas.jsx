import React, { useEffect } from "react";
import api from "../api"; // importando a instância do Axios de "api.js"
import { useState } from "react";
import ItemMusica from "../components/ItemMusica";

function Musicas() {
  const [musicas, setMusicas] = useState([]); // criando estado de vetor para uma lista de músicas

  useEffect(() => {
    api
      .get() // invocando o método "get" do axios utilizando a URL base instanciada em "api.js"
      .then((respostaObtida) => {
        // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
        console.log(respostaObtida.data); // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
        setMusicas(respostaObtida.data); // utilizando o setter para alterar o valor do estado (useState) de "musicas"
      })
      .catch((erroObtido) => {
        // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
        console.log(erroObtido); // exibindo o erro que ocorreu na requisição
      });
  }, []);

  return (
    <>


      <div className="container">
        <div className="filter">
          <button className="btn">Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
          {musicas.map((musica) => (
            <React.Fragment key={musica.id}>
            <ItemMusica
              id={musica.id}
              nome={musica.nome}
              artista={musica.artista}
              genero={musica.genero}
              ano={musica.ano}
              capa={musica.imagem}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Musicas;
