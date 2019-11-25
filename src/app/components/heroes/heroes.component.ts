import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroes } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[];

  // tslint:disable-next-line:variable-name
  constructor(private _heroesService: HeroesService,
              private _servicio: HeroesService,
              private aR: ActivatedRoute,
              private router: Router
    ){ }

  ngOnInit() {
    let parametro: any;
    this.aR.params.subscribe( i => {
      parametro = i;
    });

    if (parametro.hiro)
    {
      console.log(parametro.hiro)
      this.cargarHeroesPorNombre( parametro.hiro )
    }
    else
    {
      this.cargarHeroes();
    }
  }

  cargarHeroesPorNombre( texto: string )
  {
    if ( texto.length > 0 )
    {
      let heroes = this._servicio.buscarHeroes(texto);
      this.heroes = heroes;
    }
    else
    {
      this.router.navigate(['/Heroes']);
    }
  }

  cargarHeroes()
  {
    this.heroes = this._heroesService.getHeroes();
  }

}
