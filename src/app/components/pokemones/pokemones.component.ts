import { Component, OnInit } from '@angular/core';
import { pokemonService } from 'src/app/servicios/pokemon-service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html'
})
export class PokemonesComponent implements OnInit {

  pokemones : any[] = [];
  constructor(private pokeService : pokemonService) { }

  ngOnInit() {

      this.pokeService.getPokemons()
          .subscribe((data : any)=>{
              //this.pokemones = data.results;
              console.log(data);
              for(var i = 0 ; i < data.results.length; i++){

                let pokeNombre = data.results[i].name;
                var pokemon = {};

                this.pokeService.getPokeImgByUrl(data.results[i].url).subscribe((data2 : any)=>{

                  var sprites = data2.sprites;
                  var types = data2.types
                  pokemon = {sprites : sprites,nombre : pokeNombre ,pokeTipo : types};
                  this.pokemones.push(pokemon);

                });
              }
              console.log( this.pokemones);

          });

          }



  }

 
