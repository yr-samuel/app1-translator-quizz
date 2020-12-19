import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {Coracao} from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number = 0;

  constructor() {
    
   }

  ngOnInit() { 
    
  }

  ngOnChanges(){
    if(this.tentativas !== (this.coracoes.length)){
      this.coracoes.shift();
      this.coracoes.push(new Coracao(false));
    }

  }

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]  
}
