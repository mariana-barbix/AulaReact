export default function Exercicio5({consultas})
{
    let bruto, inss, liquido;
    bruto=Number(consultas)*150;
    inss=Number(bruto)*0.08;
    liquido=Number(bruto)-Number(inss);
    return(
        <div>
            O seu salário bruto é de {bruto} o desconto do INSS é de {inss} e seu salário liquido será de {liquido};
        </div>
    )
}