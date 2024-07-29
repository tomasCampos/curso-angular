import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuPrimeiroComponent, MeuSegundoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-angular';
}
