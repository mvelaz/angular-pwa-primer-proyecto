import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
  public titulo : string = 'Hola Mundo desde Angular';
  color : String = 'red';
  public alumnos : Array<String> = ['Juan', 'Pedro', 'Maria', 'Luis', 'Ana'];
}
