import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  darkModeEnabled: boolean = false;
  modo: string = 'Modo Dia';

  @Output()
  darkModeEvent: EventEmitter<any> = new EventEmitter<any>();

  darkMode() {
    this.darkModeEnabled = !this.darkModeEnabled;
    this.darkModeEnabled ? this.modo = 'Modo Dia' : this.modo = 'Modo Noturna';
    this.darkModeEvent.emit(this.darkModeEnabled);
    document.body.classList.toggle('dark-mode');
    document.querySelector('.dark-theme')?.classList.toggle('dark-mode');
  }
}
