import "./App.css";
import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";
import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";

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

    </div>
  )
}