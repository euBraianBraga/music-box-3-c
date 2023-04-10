import React, { useState } from "react";

function Candidato(props) {
  const [votos, setVotos] = useState(0);

  function votar() {
    setVotos(votos + 1);
  }

  return (
    <>
      <h1>{props.nome}</h1>
      <h2>Votos: {votos}</h2>
      <button onClick={votar}>Votar</button>
    </>
  );
}

export default Candidato;
