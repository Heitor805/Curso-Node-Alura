//até a versão 13 o node usa uma outra forma de importar bibliotecas q era "const chalk = require('chalk');" mas foi substituida pelo "import chalk from 'chalk';" 

//lembrar: ctrl+l limpa terminal no node

//LEMBRAR: CONFERIR A DOCUMENTAÇÃO PARA DESCOBRIR AS FUNÇÕES DISPONÍVEIS NAS BIBLIOTECAS

import fs from 'fs';
//A BIBLIOTECA ACIMA NÃO HÁ NECESSIDADE DE INSTALAR PQ ELA JÁ É NATIVA DO NODE
import chalk from 'chalk';


function trataerro (erro) {
    console.log(erro)
    //throw new Error(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
    // throw é usado para lançar erros no programa para serem tratados 
    // Error é um objeto do javascript q existe justamente para lidar com erros
    // Todo objeto erro tem um código dentro e pra isso serve o .code
}
function pegaarquivo(caminhodoarquivo) {
    const encoding = "utf-8"
    fs.readFile(caminhodoarquivo, encoding, (erro, texto) => {
    // A dunção acima é para ler um arquivo, ela está atrelada a própria função em q está inserida, a variável encoding para decidir o formato do encoding e o (erro e texto) sendo erro uma variiável para um caso de erro e texto uma variável para oq deve ser escrito    
        if (erro) {
            trataerro(erro);
        } else {
        console.log(chalk.green(texto));
        }
    })
    // Ak a função está lendo um arquivo e analisando se possui um erro ou não, em caso de erro o erro será passado para o objeto (erro) e irá na outra função para ser tratado
}

//pegaarquivo('./arquivos/texto.md');
pegaarquivo('./arquivos/');