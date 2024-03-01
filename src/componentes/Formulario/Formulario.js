import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import "./Formulario.css";
import ListaSuspensa from "../ListaSuspensa";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [bairro, setBairro] = useState("");
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");

  function aoSalvar(evento) {
    evento.preventDefault();

    props.aoColaboradorCadastrado({
      nome,
      bairro,
      texto,
    });

    setNome("");
    setBairro("");
    setEmail("");
    setTexto("");
  }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Faça aqui o seu SOS Recife:</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Bairro"
          placeholder="Digite o seu Bairro"
          valor={bairro}
          aoAlterado={(valor) => setBairro(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="E-mail"
          placeholder="Digite seu e-mail"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Escreva aqui o seu SOS"
          placeholder="Escreva o que se passa em seu bairro"
          valor={texto}
          aoAlterado={(valor) => setTexto(valor)}
        />

        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
