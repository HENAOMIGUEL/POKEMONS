import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class pokemonService {

constructor(private httpClient : HttpClient){}

    pokeTipo = "";

    getPokemons(){
       return this.httpClient.get('https://pokeapi.co/api/v2/pokemon');        
    }

    
    searchPokemons(pokeNombre : string){
        let pokemonesEncontrados = [];

       this.httpClient.get('https://pokeapi.co/api/v2/pokemon/?limit=964').subscribe((data : any)=>{

       pokeNombre = pokeNombre.toLowerCase();
        
        for(var i = 0 ; i < data.results.length; i++){
            if(data.results[i].name.indexOf(pokeNombre)>=0){

                let pokeNombre = data.results[i].name;
                var pokemon = {};

               this.getPokeImgByUrl(data.results[i].url).subscribe((data2 : any)=>{

                //si se filtró por tipo de pokemon 

                if(this.pokeTipo!=""){
                    for (let index = 0; index < data2.types.length; index++) {
                        if(this.pokeTipo==data2.types[index].type.name){
                            var sprites = data2.sprites;
                            var types = data2.types
                            pokemon = {sprites : sprites,nombre : pokeNombre ,pokeTipo : types};

                            pokemonesEncontrados.push(pokemon);

                        }
                    }
                
                }else if(this.pokeTipo==""){
                    var sprites = data2.sprites;
                    var types = data2.types
                    pokemon = {sprites : sprites,nombre : pokeNombre ,pokeTipo : types};

                    pokemonesEncontrados.push(pokemon);

                }else{
                    pokemonesEncontrados = [];

                }
                   
                



               });

            }
        }
        });  
        console.log(pokemonesEncontrados);      

        return pokemonesEncontrados;
     }

    getPokeImgByUrl(url :string){

        return  this.httpClient.get(url);
         
    }

    getPokeTipos(){
        return  this.httpClient.get('https://pokeapi.co/api/v2/type/');

    }

}