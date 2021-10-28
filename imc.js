/* Seletores */
const altura=document.querySelector(".altura");
const peso=document.querySelector(".peso");
const botao=document.querySelector(".botao");
const condicao=document.querySelector(".condicao");
const chek=document.querySelector("#mascu");
const chek1=document.querySelector("#femi");


/* Funções */
botao.addEventListener("click", calcImc);


/*Implementações */
function calcImc(event){
    if(event.type == "click"){
      event.preventDefault();

      //pegando os valores nos campos de texto
        var alt=altura.value;
        console.log("altuta:"+alt);
        var pes=peso.value;
        console.log("peso:"+pes);
        var sexo=chek.value;
        var sexo1=chek1.value;

       // caso for selecionado o botao Masculino
        if(sexo == "Masculino"){
         var imc=pes / (Math.pow(alt,2));
         console.log("IMC:"+imc);
           if(imc>= 0 && imc <20.7){
            condicao.value="Abaixo do peso";
        }else if(imc >= 20.7 && imc <26.4){
            condicao.value="Peso normal";
        }else if(imc >= 26.4 && imc < 27.8){
          condicao.value="Marginalmente Acima do Peso"; 
        }else if(imc >=27.8 && imc <31.1){
          condicao.value="Acima do Peso Ideal";
        }else if(imc >= 31.1){
          condicao.value="Obeso";
        }
      } 
      // caso for selecionado o botão Feminino
      if(sexo1 == "Feminino" ){  /*&& chek.checked == true*/
            imc=pes / (Math.pow(alt,2));
            //console.log("IMC:"+imc);
            if(imc>= 0 && imc <19.1){
              condicao.value="Abaixo do peso";
          }else if(imc >= 19.1 && imc <25.8){
              condicao.value="Peso normal";
          }else if(imc >= 25.8 && imc < 27.3){
            condicao.value="Marginalmente Acima do Peso";
          }else if(imc >=27.3 && imc <32.3){
            condicao.value="Acima do Peso Ideal";
          }else if(imc >= 32.3){
            condicao.value="Obeso";
        }
    } 
  }

}