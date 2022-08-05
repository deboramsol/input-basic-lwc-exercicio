import { LightningElement } from "lwc";

export default class App extends LightningElement {
    nome;
    peso;
    altura;
    calculo;

    handleOnChangeNome(event){
        this.nome = event.detail.value;
        console.log('Nome: ' + this.nome);
    }

    handleOnChangePeso(event){
      this.peso = event.detail.value;
      console.log('Peso: ' + this.peso);
    }

    handleOnChangeAltura(event){
      this.altura = event.detail.value;
      console.log('Altura: ' + this.altura);
    }

    CalcularImc(event){
      this.calculo = this.peso/(this.altura*this.altura);
      console.log('O IMC é : ' + this.calculo.toFixed(2));
      }
}