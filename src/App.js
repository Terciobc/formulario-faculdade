import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario/Formulario.js";
import Colaborador from "./componentes/Colaborador/index.js";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([
      ...colaboradores,
      { ...colaborador, id: new Date().getMilliseconds() },
    ]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {colaboradores.map((col) => (
        <Colaborador
          key={col.id}
          id={` Número de protocolo: ${col.id}`}
          bairro={col.bairro}
          nome={col.nome}
          texto={col.texto}
        />
      ))}
    </div>
  );
}

export default App;
