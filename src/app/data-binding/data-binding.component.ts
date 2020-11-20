import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.scss']
  styles: [
    `.highlight {

      background-color: yellow;
      font-weight: bold;
  }`
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/g/400/200';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;


  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');

  }

  onkeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;


  }
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;


  }


  constructor() { }

  ngOnInit() {
  }

}
