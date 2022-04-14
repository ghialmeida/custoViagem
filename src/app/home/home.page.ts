import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  vlrGasolina: number = 0;
  kmViagem: number = 0;
  autonomia: number = 0;
  gasto: number = 0;

  constructor() {}

  calcularGasto() {
    this.gasto = (this.kmViagem / this.autonomia) * this.vlrGasolina;
  }

}
