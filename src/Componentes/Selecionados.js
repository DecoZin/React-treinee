import React, { useEffect, useState } from "react";

function Selecionados({selecionados})
{

    const [ingredientes,setIngredientes] = useState(selecionados);
    const [showWarning,setShowWarning] = useState(false);

    useEffect(() => 
    {
        const newIngredientes = [];

        for (let index = 0; index < selecionados.length && index < 3; index++) 
        {
            const element = selecionados[index];  
            newIngredientes.push(element);
        }

        setIngredientes(newIngredientes);
        setShowWarning(selecionados.length >= 3);

    },[selecionados])

    return(
        <div>
            <h3>Selecionados:</h3>
            <p>{ingredientes.join(", ")}</p>
            {showWarning && <h4>Número máximo de ingredientes atingido</h4>}
        </div>
    );
}

export default Selecionados;