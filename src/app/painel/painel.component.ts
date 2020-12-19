import { Component, OnInit } from '@angular/core';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';
import { IfObservable } from 'rxjs/observable/IfObservable';
import Frase from './../shared/frase.model';
import {FRASES} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public randomNumber: number = Math.floor(Math.random()*4);
  public inst: string = "Traduza a frase:"
  public frases: Frase[] = FRASES; 
  public texto: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase;
  public erros: number = 0;

  public progresso: number = 0;
  public tentativas: number = 3;

  constructor() {  
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  attResponse(event: Event){
    this.texto = (<HTMLInputElement>event.target).value;
  }

  confirma(){
    if(this.rodadaFrase.fBr === this.texto){
      alert('Acertou');

      this.rodada++;
      this.progresso = this.progresso + (100/this.frases.length);

      this.atualizaRodada();
      
    }else{
      this.tentativas--;

      if(this.tentativas === -1){
        alert('Você perdeu todas as chances')
      }
    }
    
  }

  atualizaRodada() : void{
    this.rodadaFrase = this.frases[this.rodada];
    this.texto = '';
  }
}
