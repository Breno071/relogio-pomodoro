import { Component } from '@angular/core';

@Component({
  selector: 'app-long-break',
  templateUrl: './long-break.component.html',
  styleUrl: './long-break.component.css'
})
export class LongBreakComponent {
  minutos: number = 15;
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
    this.minutos = 15;
    this.segundos = 0;
    clearInterval(this.intervalo);
    this.rodando = false;
  }
}
