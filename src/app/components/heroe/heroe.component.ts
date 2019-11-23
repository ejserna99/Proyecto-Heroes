import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor( private aR: ActivatedRoute) {
    this.aR.params.subscribe( i => {
      console.log(i);
    });
   }

  ngOnInit() {
  }

}
