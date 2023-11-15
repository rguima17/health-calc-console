const  {IMCCalculator, MacroCalculator, generos, atividade, objetivo}  = require('health-calculator-js');

function imc () {
    const peso = 86.7;
    const altura = 1.86;
    const imc = IMCCalculator.calcular(peso, altura);
    const classificacao = IMCCalculator.classificar(imc);
    console.log({
        altura:`${altura} metros`,
        peso:`${peso} kg`,
        IMC:imc, 
        classificacao:classificacao
    })
    const genero = generos.MASCULINO;
    const nivelAtividade = atividade.MUITO_ATIVO;
    const nivelObjetivo = objetivo.BULKING;
    const idade = 25;
    const tmb = MacroCalculator.calcularTMB(peso, altura, idade, genero);
    const tdee = MacroCalculator.calcularTDEE(tmb, nivelAtividade)
    const macros = MacroCalculator.calcularMacros( peso, altura, idade, genero, nivelAtividade , nivelObjetivo)
    console.log({
        TMB: `${tmb} Kcal`,
        TDEE: `${tdee} Kcal`,
        Proteinas: `${macros.Proteinas} g`,
        Carboidratos: `${macros.Carboidratos} g`,
        Gorduras: `${macros.Gorduras} g`,
    })

}

imc()