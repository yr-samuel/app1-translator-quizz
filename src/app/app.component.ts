import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public jogoEmAndamento: boolean = true;
  public resultado: string;

  jogarNovamente(){
    this.jogoEmAndamento = true;
  }

  encerrarJogo(tipo: string): void{
    this.resultado = tipo;
    this.jogoEmAndamento = false;
  }

}
