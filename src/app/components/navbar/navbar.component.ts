import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  darkModeEnabled: boolean = false;
  modo: string = this.darkModeEnabled ? 'Modo Dia' : 'Modo Noturno';

  @Output()
  darkModeEvent: EventEmitter<any> = new EventEmitter<any>();

  darkMode() {
    this.darkModeEnabled = !this.darkModeEnabled;
    this.darkModeEnabled ? this.modo = 'Modo Dia' : this.modo = 'Modo Noturno';
    this.darkModeEvent.emit(this.darkModeEnabled);
    document.body.classList.toggle('dark-mode');
  }
}
