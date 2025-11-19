function IniciarQuiz() {
    window.open("quiz.html", "_self");
}


    let pergunta = document.getElementById("text_pergunta");
    let opção1 = document.getElementById("opção1");
    let opção2 = document.getElementById("opção2");

    var numero = [
        [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    ];
    var resultado = [
        [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    ];

    var i=1;
    let resposta_true;
    let resposta_false;

    
    numero[1] = 'A tag head é usada para incluir metadados sobre o documento, como o conjunto de caracteres e o título da página, e não é exibida no corpo principal da página?';
    resultado[1]= 1;

    numero[2] = 'Para alterar a cor de fundo (background) de um elemento HTML, a propriedade color deve ser utilizada?';
    resultado[2] = 0;

    numero[3]= 'Em JavaScript, strings é o tipo de dado fundamental usado para representar texto, e é delimitado por aspas simples.';
    resultado[3] = 1;

    numero[4] = 'A tag HTML "li" é usada para criar uma lista não ordenada (com marcadores)?';
    resultado[4] = 0;

    numero[5] = 'A função submit é usada para exibir uma pequena caixa de diálogo com uma mensagem e um botão "enviar" para o usuário?';
    resultado[5] = 1;

    numero[6] = 'Qual atributo é usado em um campo de formulário (input) para garantir que o usuário preencha o campo antes de enviar o formulário, impedindo o envio caso esteja vazio? esse atributo é conhecido como "required"?';
    resultado[6]= 1;
   
    numero[7] = 'Em termos de especificidade CSS, o seletor que tem maior peso e será aplicado de forma prioritária o um seletor de ID (#meuID) sobre o seletor de Classe (.minhaClasse)?';
    resultado[7]= 1;
   
    numero[8] = 'Em JavaScript, o resultado da expressão 10 + "5" é 105?';
    resultado[8] = 1;
   
    numero[9] = 'Qual é a maneira semanticamente correta de marcar o principal conteúdo de uma página (o conteúdo único e central, excluindo navegação, rodapé, etc.) em HTML5? body?';
    resultado[9]= 0;
   
    numero[10] = 'Em CSS, a propriedade é usada para definir o espaçamento entre as linhas de texto dentro de um elemento é line-height?';
    resultado[10]= 1;
   
    numero[11] = 'Em JavaScript, o que a função parseInt("10.99") retornará? 10?';
    resultado[10] = 1;
   
    numero[12] = 'A propriedade em CSS você usaria para definir a distância entre o conteúdo de um elemento e sua borda (internamente) seria espaçamento?';
    resultado[12]= 0;
    
    numero[13] = 'Qual é a maneira semanticamente correta de marcar o principal conteúdo de uma página (o conteúdo único e central, excluindo navegação, rodapé, etc.) em HTML5? main?';
    resultado[13]= 1;
    
    numero[14] = 'Qual propriedade CSS deve ser usada para controlar se o conteúdo de um elemento que excede sua área definida deve ser cortado (hidden), exibido com barras de rolagem (scroll), ou gerenciado automaticamente pelo navegador (auto)? overflow?';
    resultado[14] = 1;
   
    numero[15] = 'Em JavaScript, qual é o resultado da expressão "5" + 3 é 8 ?';
    resultado[15]= 0;
   
    numero[16] = 'A tag HTML que é usada para definir o título de um documento, que é exibido na aba do navegador é "body?"';
    resultado[16] = 0;
   
    numero[17] = 'Em CSS, qual propriedade é usada para definir o espaçamento entre as linhas de texto dentro de um elemento é line-height?';
    resultado[17] = 1;
   
    numero[18] = 'Em JavaScript, o método que é usado para adicionar um novo elemento ao final de um array é push()?';
    resultado[18] = 1;
    
    numero[19] = 'O atributo em HTML que é usado para especificar o URL de destino de um link é "a" ?';
    resultado[19] = 0;
    
    numero[20]= 'Em CSS, a propriedade que é usada para definir a cor do texto de um elemento é "background-color"?';
    resultado[20] = 0;

function quiz() { 
    if (i <= 20) {
        pergunta.innerHTML = numero[i];
        
       
    } else { 
        localStorage.setItem('finalQuizScore', score);
        window.open("score.html", "_self");
    }
}

let score = 0;

function certo() {
    resposta_true = 1;
    if (resposta_true == resultado[i]) {
        document.getElementById("true").style.backgroundColor = "#69e36fff";
        score++;
    }
    if (resposta_true != resultado[i]) {
        document.getElementById("true").style.backgroundColor = "#DC143C";
    }
    i++;
    console.log("Valor de i:", i);
    console.log(score);
    quiz();
}

function errado() {
     resposta_false= 0;
    if (resposta_false == resultado[i]) {
       document.getElementById("false").style.backgroundColor = "#69e36fff";
       score++;

    }
    if (resposta_false != resultado[i]) {
        document.getElementById("false").style.backgroundColor = "#DC143C";

    }
     i++;
     console.log("Valor de i:", i);
     console.log(score);
     quiz();
     
 }

function Colors(){
    document.getElementById("true").style.backgroundColor = "";
    document.getElementById("false").style.backgroundColor = "";
 }


const finalScore = localStorage.getItem('finalQuizScore');
const displayElement = document.getElementById('score'); 
displayElement.innerHTML = ` ${finalScore}`;


