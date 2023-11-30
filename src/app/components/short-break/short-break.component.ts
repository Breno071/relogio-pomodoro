import { Component } from '@angular/core';

@Component({
  selector: 'app-short-break',
  templateUrl: './short-break.component.html',
  styleUrl: './short-break.component.css'
})
export class ShortBreakComponent {
  minutos: number = 5;
  segundos: number = 0;
  intervalo: any
  rodando: boolean = false;

  iniciar() {
    this.intervalo = setInterval(() => {
      this.rodando = true;
      if (this.segundos > 0) {
        this.segundos--;
      }
      else if (this.minutos > 0) {
        this.segundos = 59;
        this.minutos--;
      }
      else {
        clearInterval(this.intervalo);
        this.rodando = false;
      }
    }, 1000);
  }

  pausar() {
    clearInterval(this.intervalo);
    this.rodando = false;
  }

  reiniciar() {
    this.minutos = 5;
    this.segundos = 0;
    clearInterval(this.intervalo);
    this.rodando = false;
  }
}
