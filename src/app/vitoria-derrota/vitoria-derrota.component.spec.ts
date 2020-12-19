import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitoriaDerrotaComponent } from './vitoria-derrota.component';

describe('VitoriaDerrotaComponent', () => {
  let component: VitoriaDerrotaComponent;
  let fixture: ComponentFixture<VitoriaDerrotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitoriaDerrotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitoriaDerrotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
