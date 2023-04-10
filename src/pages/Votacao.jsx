import React from "react";
import Candidato from "../components/Candidato"; // importando componente Candidato

function Votacao() { // função que representa o componente <Votacao />, que será exportado ao final
  return (
    <>
      <Candidato nome="mequi"/>
      <Candidato nome="bk"/>
    </>
  );
}

export default Votacao;  // exportando componente Votacao para ser usado em outros módulos
