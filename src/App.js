import React from 'react';
import Title from './Hello World';
import Membro from './Membro';

function App() 
{

  //Funções
  function clicou(dividir)
  {
    mutavel=mutavel+1;
    if(dividir === true)
    {
      var varr = mutavel/2;
    }
    alert(mutavel);
    alert(varr);

  }

  //jeito alternativo para função
  const funcao = () =>
  {
    alert("Voce clicou aqui! 3"); 
  }

  //Variáveis
  let mutavel=0;
  /*    
  var f_escopo;
  const imutavel;
  */    
  
  //Vetores
  //         0 1 2 3 4
  let n = [1,2,3,4,5];
  function vetor()
  {
    /*for(let i=0; i < n.length;i++)
    {
      console.log(i);     
    }  
    */ 
   n.forEach((elemento, index) => {console.log(elemento+":)"+index)}); // apenas ação
  }
  function map() //Retornar algo com o vetor
  {
    n = n.map((elemento, posicao) => {return elemento*2})
  }

  //Json
  const endereco = {
    rua: "assis chateaubriand",
    numero: 414,
  };
  
  const pessoa = {
    nome: "Arthur",
    idade: 19,
    altura: 1.65,
    endereco: endereco,

  };
  
  function json()
  {
    let key = Object.keys(pessoa);
    key.forEach((element)=>
    {
      console.log(pessoa[element])
    });

    console.log(pessoa.idade);
    pessoa.idade = 20;
    console.log(pessoa.idade);

    //Campo novo
    pessoa.comida_favorita = "Macarrao";
    //Deletar campo
    delete pessoa.nome;
  }

  //Props
  const lamego = {
    nome:"Amdré Lamego",
    idade: 19,
    faculdade:"UFMG",
    curso:"Engenharia elétrica",
  };
  const botinha = {
    nome:"Ana Laura Botinha",
    idade: 19,
    faculdade:"PUC",
    curso:"Direito",
  };
  
   

  return (
    <div> 
      <div>
        <Title  />
        <button onClick={()=> clicou(false)}>
        1 -Contador!
      </button>
      <button onClick={()=>{alert("Voce clicou aqui! 2")}}>
        2 -Clique aqui!
      </button>
      <button onClick={funcao}>
        3 -Clique aqui!
      </button>
      <button onClick={()=> clicou(true)}>
        4 -Soma e divide!
      </button>
      <button onClick={()=> {alert(n)}}>
        5 -Vetor!
      </button>
      <button onClick={()=> {vetor()}}>
        6 -For!
      </button>
      <button onClick={()=> {map()}}>
        7 -Map!
      </button>
      <button onClick={()=> {json()}}>
        8 -Objeto!
      </button>
      </div>
        <h1>Membros</h1>
        <Membro />
    </div>
  );
}

export default App;

