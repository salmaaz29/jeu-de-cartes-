import { Component } from '@angular/core';
import { CarteJeuComponent } from "./components/carte-jeu/carte-jeu.component";
import { Monster } from "./models/monster.model";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CarteJeuComponent]
})
export class AppComponent {
 monster1 !: Monster ;
 constructor(){
  this.monster1 = new Monster();
  this.monster1.name = "POKIMONE";
  this.monster1.hp = 40;
  this.monster1.figureCaption = "Num 002 POKIMONE";
 }
}
