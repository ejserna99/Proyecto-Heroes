import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[];

  // tslint:disable-next-line:variable-name
  constructor( private _heroesService: HeroesService ) { 
   console.log( this._heroesService.getHeroes());
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

}
