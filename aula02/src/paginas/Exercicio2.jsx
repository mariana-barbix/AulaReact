export default function Exercicio2({peso, altura})
{
    let imc; 
    imc = peso /(altura*altura);
    return(
        <div>
            O indice de massa corporal é {imc}
        </div>
    )
}