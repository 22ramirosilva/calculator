import "./App.css";
import { useState } from "react";
import Boton from "./Componentes/Boton";
import Pantalla from "./Componentes/Pantalla";
import BotonClear from "./Componentes/BotonClear";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const regex = /^(\d+(\.\d+)?)([+\-*/](\d+(\.\d+)?))*$/;

  const agregarInput = (valor) => {
    if (input === "Error") {
      setInput(valor);
    } else if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/"
    ) {
      const inputArray = input.split("");
      const ultimoCaracter = inputArray[inputArray.length - 1];
      if (
        ultimoCaracter === "+" ||
        ultimoCaracter === "-" ||
        ultimoCaracter === "*" ||
        ultimoCaracter === "/"
      ) {
        inputArray[inputArray.length - 1] = valor;
        setInput(inputArray.join(""));
      } else {
        setInput(input + valor);
      }
    } else {
      setInput(input + valor);
    }
  };

  const calcularResultado = () => {
    if (
      input.includes("+") ||
      input.includes("-") ||
      input.includes("*") ||
      input.includes("/")
    ) {
      const ultimpoCaracter = input[input.length - 1];
      if (
        ultimpoCaracter === "+" ||
        ultimpoCaracter === "-" ||
        ultimpoCaracter === "*" ||
        ultimpoCaracter === "/"
      ) {
        setInput("Error");
      } else if (regex.test(input)) {
        setInput(evaluate(input));
      } else {
        setInput("Error");
      }
    } else {
      setInput("Error");
    }
  };

  const eliminarUltimoCaracter = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <BotonClear handleClear={() => setInput("")} />
          <Boton handleClick={eliminarUltimoCaracter}>CE</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>1</Boton>
          <Boton handleClick={agregarInput}>2</Boton>
          <Boton handleClick={agregarInput}>3</Boton>
          <Boton handleClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>4</Boton>
          <Boton handleClick={agregarInput}>5</Boton>
          <Boton handleClick={agregarInput}>6</Boton>
          <Boton handleClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>7</Boton>
          <Boton handleClick={agregarInput}>8</Boton>
          <Boton handleClick={agregarInput}>9</Boton>
          <Boton handleClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>0</Boton>
          <Boton handleClick={agregarInput}>.</Boton>
          <Boton handleClick={calcularResultado}>=</Boton>
          <Boton handleClick={agregarInput}>-</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
