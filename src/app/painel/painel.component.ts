import { Component, Output, EventEmitter } from '@angular/core';
import Frase from './../shared/frase.model';
import {FRASES} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent{

  public randomNumber: number = Math.floor(Math.random()*4);
  public inst: string = "Traduza a frase:"
  public frases: Frase[] = FRASES; 
  public texto: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase;
  public erros: number = 0;

  public progresso: number = 0;
  public tentativas: number = 3;

  @Output() encerrarJogo = new EventEmitter();

  constructor() {  
    this.atualizaRodada();
  }

  attResponse(event: Event){
    this.texto = (<HTMLInputElement>event.target).value;
  }

  confirma(){
    if(this.rodadaFrase.fBr === this.texto){
      
      this.progresso = this.progresso + (100/this.frases.length);
      this.rodada++;
      
      if(this.rodada === 4 ){
        this.encerrarJogo.emit('ganhou')      
      }
      
      this.atualizaRodada();
     
      
    }else{
      this.tentativas--;
      
      if(this.tentativas === -1){
        this.encerrarJogo.emit('perdeu')
      }
    }
    
  }

  atualizaRodada() : void{
    this.rodadaFrase = this.frases[this.rodada];
    this.texto = '';
  }
}
