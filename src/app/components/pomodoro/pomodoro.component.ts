import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.css'
})
export class PomodoroComponent {
  @ViewChild('btnIniciar') btnIniciar!: ElementRef

  minutos: number = 25;
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
    this.minutos = 25;
    this.segundos = 0;
    clearInterval(this.intervalo);
    this.rodando = false;
  }
}
