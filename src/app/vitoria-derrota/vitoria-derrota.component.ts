import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vitoria-derrota',
  templateUrl: './vitoria-derrota.component.html',
  styleUrls: ['./vitoria-derrota.component.css']
})
export class VitoriaDerrotaComponent implements OnInit {

  @Input() public resultado: string;
  @Output() public jogarNovamente = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  btnJogarNovamente(){
    this.jogarNovamente.emit(); 
  }

}
