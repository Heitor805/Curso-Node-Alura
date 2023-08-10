//até a versão 13 o node usa uma outra forma de importar bibliotecas q era "const chalk = require('chalk');" mas foi substituida pelo "import chalk from 'chalk';" 

//lembrar: ctrl+l limpa terminal no node

//LEMBRAR: CONFERIR A DOCUMENTAÇÃO PARA DESCOBRIR AS FUNÇÕES DISPONÍVEIS NAS BIBLIOTECAS

import fs from 'fs';
//A BIBLIOTECA ACIMA NÃO HÁ NECESSIDADE DE INSTALAR PQ ELA JÁ É NATIVA DO NODE
import chalk from 'chalk';

function pegaarquivo(caminhodoarquivo) {
    const encoding = "utf-8"
    fs.readFile(caminhodoarquivo, encoding, (erro, texto) => {
    // A dunção acima é para ler um arquivo, ela está atrelada a própria função em q está inserida, a variável encoding para decidir o formato do encoding e o (erro e texto) sendo erro uma variiável para um caso de erro e texto uma variável para oq deve ser escrito    
        console.log(chalk.green(texto))
    })
}

pegaarquivo('./arquivos/texto.md');