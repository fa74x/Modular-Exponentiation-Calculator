import React, { useState, useEffect, useRef } from "react";
import "./style.css";

function convertDecimalToBinary(number) {
  if (number === 0) {
    return "0";
  }

  let binary = "";
  while (number > 0) {
    binary = (number % 2) + binary;
    number = Math.floor(number / 2);
  }

  return binary;
}

function calculateExpModular(base, exp, mod) {
  if (
    Number.isInteger(Number(base)) &&
    Number.isInteger(Number(exp)) &&
    Number.isInteger(Number(mod)) &&
    base > 0 &&
    exp > 0 &&
    mod > 0
  ) {
    let x = 1;
    let expstr = convertDecimalToBinary(exp);

    for (let i = 0; i < expstr.length; i++) {
      const character = expstr[i];
      if (character === "1") {
        x = (Math.pow(x, 2) * base) % mod;
      } else {
        x = Math.pow(x, 2) % mod;
      }
    }

    return x;
  } else {
    return " ";
  }
}

function App() {
  const [base, setBase] = useState("");
  const [exp, setExp] = useState("");
  const [mod, setMod] = useState("");
  const [res, setRes] = useState("");

  const baseInputRef = useRef(null);
  const expInputRef = useRef(null);
  const modInputRef = useRef(null);
  const resInputRef = useRef(null);

  useEffect(() => {
    if (baseInputRef.current) {
      const baseInput = baseInputRef.current;
      if (baseInput.value.length === 0) {
        baseInput.style.width = `1ch`;
        baseInput.style.maxWidth = `1ch`;
      } else {
        baseInput.style.width = `${baseInput.value.length}ch`;
        baseInput.style.maxWidth = `${baseInput.value.length}ch`;
      }
    }
    if (expInputRef.current) {
      const expInput = expInputRef.current;
      if (expInput.value.length === 0) {
        expInput.style.width = `1ch`;
        expInput.style.maxWidth = `1ch`;
      } else {
        expInput.style.width = `${expInput.value.length}ch`;
        expInput.style.maxWidth = `${expInput.value.length}ch`;
      }
    }
    if (modInputRef.current) {
      const modInput = modInputRef.current;
      if (modInput.value.length === 0) {
        modInput.style.width = `1ch`;
        modInput.style.maxWidth = `1ch`;
      } else {
        modInput.style.width = `${modInput.value.length}ch`;
        modInput.style.maxWidth = `${modInput.value.length}ch`;
      }
    }
    if (resInputRef.current) {
      const resInput = resInputRef.current;
      resInput.style.width = `${resInput.value.length}ch`;
      resInput.style.maxWidth = `${resInput.value.length}ch`;
    }
  }, [base, exp, mod, res]);

  useEffect(() => {
    setRes(calculateExpModular(base, exp, mod));
  }, [base, exp, mod]);

  const handleInput1Change = (event) => {
    setBase(event.target.value);
  };

  const handleInput2Change = (event) => {
    setExp(event.target.value);
  };

  const handleInput3Change = (event) => {
    setMod(event.target.value);
  };

  return (
    <form id="form">
      <input
        id="base"
        type="number"
        name="base-input"
        placeholder="a"
        value={base}
        className="hidden-number-input"
        onChange={handleInput1Change}
        ref={baseInputRef}
      />
      <input
        id="exp"
        type="number"
        name="exp-input"
        placeholder="b"
        value={exp}
        className="hidden-number-input"
        onChange={handleInput2Change}
        ref={expInputRef}
      />
      <p id="modtext">mod</p>
      <input
        id="mod"
        type="number"
        name="mod-input"
        placeholder="n"
        value={mod}
        className="hidden-number-input"
        onChange={handleInput3Change}
        ref={modInputRef}
      />
      <p id="equals">=</p>
      <p id="res" >{res}</p>
    </form>
  );
}

export default App;