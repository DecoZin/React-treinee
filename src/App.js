import Hello from './Hello World';
import Membro from './Membro';
import Title from './Title';
import React,{ useState } from 'react';
import Selecionados from './Componentes';

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
    nome:"André Lamego",
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

  //UseState
  const [ membro, setMembro] = useState([/* valor inicial */]);

  function handleInputChange(e)
  {
    const key = e.target.name;
    const newMembro = {...membro}; // USAR ...
    newMembro[key] = e.target.value;

    setMembro(newMembro);
    console.log(newMembro);
  }

  const [ingredientes,setIngredientes] = useState([])

  function handleInputChangePizza(e)
  {
    const value = e.target.value;
    const newIngredientes = [...ingredientes];
    const index = ingredientes.indexOf(value);

    if(index === -1)
    {
      newIngredientes.push(value);
    }
    else
    {
      newIngredientes.splice(index,1);
    }
    setIngredientes(newIngredientes);
  }

  //UseEffect

   
  return (
    <div> 
      <div>
        <Hello  />
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
      <div>
        <Title title = "Membros">
          <Membro membro ={lamego} />
          <Membro membro ={botinha}/>
        </Title>
      </div>
      <div>
        <h1>Novo membro</h1>
        <input
         type = "text" 
         placeholder="Nome" 
         name='nome'
         onChange={handleInputChange} 
        />
        <br />
        <input 
          id = "GS" 
          type = "radio" 
          name='cargo' 
          value = "Gerente Scrum" 
          onChange={handleInputChange}
        />
        <label htmlFor = "GS">Gerente Scrum</label>
        <br />
        <input
         id = "GP" 
         type = "radio" 
         name='cargo' 
         value = "Gerente de Produtos" 
         onChange={handleInputChange}
        />
        <label htmlFor = "GP">Gerente de Produtos</label>
        <br />
        <input
         type = "text" 
         placeholder="Idade" 
         name='idade'
         onChange={handleInputChange} 
        />
        <br />
        <input
         type = "text" 
         placeholder="Curso" 
         name='curso'
         onChange={handleInputChange} 
        />
        <input 
          id = "N" 
          type = "radio" 
          name = 'turno' 
          value = "Noturno" 
          onChange={handleInputChange}
        />
        <label htmlFor = "N">Noturno</label>
        <input
         id = "D" 
         type = "radio" 
         name='turno' 
         value = "Diurno" 
         onChange={handleInputChange}
        />
        <label htmlFor = "D">Diurno</label>
        <br />
        <input
         type = "text" 
         placeholder="Estado" 
         name='estado'
         onChange={handleInputChange} 
        />
        <br />
        <input
         type = "text" 
         placeholder="Cidade" 
         name='cidade'
         onChange={handleInputChange} 
        />
        <br />
        <br />
        <p>Nome : {membro["nome"]}</p>
        <p>Cargo : {membro["cargo"]}</p>
        <p>Idade : {membro["idade"]}</p>
        <p>Curso : {membro["curso"]}</p>
        <p>Turno : {membro["turno"]}</p>
        <p>Estado : {membro["estado"]}</p>
        <p>Cidade : {membro["cidade"]}</p>
      </div>
      <div>
        <h1>Ingredientes de Pizza:</h1>
        
        <input
        id='Peperoni'
        type={'checkbox'}
        value = "Peperoni"
        onChange={handleInputChangePizza}
        />
        <label htmlFor='Peperoni'>Peperoni</label>
        <br/>
        <input
        id='Queijo'
        type={'checkbox'}
        value = "Queijo"
        onChange={handleInputChangePizza}
        />
        <label htmlFor='Queijo'>Queijo</label>
        <br/>
        <input
        id='Frango'
        type={'checkbox'}
        value = "Frango"
        onChange={handleInputChangePizza}
        />
        <label htmlFor='Frango'>Frango</label>
        <br/>
        <input
        id='Catupiry'
        type={'checkbox'}
        value = "Catupiry"
        onChange={handleInputChangePizza}
        />
        <label htmlFor='Catupiry'>Catupiry</label>
        <br/>
        <input
        id='Molho de Tomate'
        type={'checkbox'}
        value = "Molho de Tomate"
        onChange={handleInputChangePizza}
        />
        <label htmlFor='Molho de Tomate'>Molho de Tomate</label>
        <br/>
        <Selecionados selecionados={ingredientes}/>
      </div>
    </div>
  );
}

export default App;

