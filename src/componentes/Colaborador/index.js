import "./Colaborador.css";

const Colaborador = (props) => {
  return (
    <div className="box">
      <div className="colaborador">
        <div className="cabecalho">
          {props.id}
          <h2>{props.bairro}</h2>
          <h4>{props.nome}</h4>
        </div>
        <div className="rodape">
          <h5>{props.texto}</h5>
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
