import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokemonService } from 'src/app/servicios/pokemon-service';

@Component({
  selector: 'app-search-poke',
  templateUrl: './search-poke.component.html',
  styleUrls: ['./search-poke.component.css']
})
export class SearchPokeComponent implements OnInit {

  pokemones : any [] = [];

  constructor(private activatedRoute : ActivatedRoute,
              private pokeService : pokemonService) { }

  ngOnInit() {
    console.log(3);
    this.activatedRoute.params.subscribe(param=>{
      console.log(4);

        this.pokemones=this.pokeService.searchPokemons(param['id']);
        console.log(5);

    });
  }

}
