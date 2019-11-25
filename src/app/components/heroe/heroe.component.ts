import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private aR: ActivatedRoute, 
               private _heroes: HeroesService,
  )
  {
    this.aR.params.subscribe( i => {
      this.heroe = this._heroes.getHeroe(i.id);
    });

  }

  ngOnInit() {
  }

}
