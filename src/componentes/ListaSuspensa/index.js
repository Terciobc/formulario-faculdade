import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <textarea
        placeholder={props.placeholder}
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
      />
    </div>
  );
};

export default ListaSuspensa;
