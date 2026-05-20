import "./App.css";
import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";
import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";
import Exercicio3 from "./paginas/Exercicio3";
import Exercicio4 from "./paginas/Exercicio4";
import Exercicio5 from "./paginas/exercicio5";
import Exercicio6 from "./paginas/Exercicio6";



export default function App()
{
  return(
    <div>
      <h1>Aula 02 - Estudo de Componentes e Props</h1>

      <div className="card"> 
        <h3>Chamada para o Exemplo 1</h3>
        <Exemplo1 numero={33}/>
        <Exemplo1 numero={44}/>
        <Exemplo1 numero={55}/>
      </div>
      <div className="card">
        <h3>Chamada para o Exemplo 2</h3>
        <Exemplo2 numero1={20} numero2={20}/>
        <Exemplo2 numero1={20} numero2={-200}/>
        <Exemplo2 numero1={2.6} numero2={2.7}/>

      </div>
      <div className="card">
        <h3>Chamada para o Exercicio 1</h3>
        <Exercicio1 fanhe ={30}/>
      </div>
      <div className="card">
        <h3>Chamada para o Exercicio 2</h3>
        <Exercicio2 peso ={60} altura={1.68}/>

      </div>

      <div className="card">
        <h3>Chamada para o Exercicio 3</h3>
        <Exercicio3 nota1 ={10} nota2={10}/>
      </div>

      <div className="card">
        <h3>Chamada para o Exercicio 4</h3>
        <Exercicio4 base ={10} altura={10}/>
      </div>

      <div className="card">
        <h3>Chamada para o Exercicio 5</h3>
        <Exercicio5 consultas={100}/>
      </div>

      <div className="card">
        <h3>Chamada para o Exercicio 5</h3>
        <Exercicio6 capital={1000} juros={5} tempo={6}/>
      </div>

    </div>
  )
}