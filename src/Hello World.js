import React from "react";
import Subtitle from './Subtitle';

function Hello()
{

  const frase = "Hello World!";
  const numero = 0;

  return (
    <div>
      <h1>{numero + 1} {"-" + frase + "  :)" }</h1>
      <Subtitle  />
    </div>
    );
}

export default Hello;