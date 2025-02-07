import { Component, Input } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-carte-jeu',
  imports: [],
  templateUrl: './carte-jeu.component.html',
  styleUrl: './carte-jeu.component.css'
})
export class CarteJeuComponent {
@Input() monster : Monster = new Monster();



}
