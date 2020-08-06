import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pokemonService } from 'src/app/servicios/pokemon-service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  pokeTipos : any [] = [""];
  pokeTipoSeleccionado = "";

  constructor(private router : Router,
              private pokeService : pokemonService) { }

  ngOnInit() {
    this.pokeService.getPokeTipos().subscribe( (data : any)=>{
      console.log("consulta"+data)
        for (let index = 0; index < data.results.length; index++) {
          this.pokeTipos.push(data.results[index].name);          
        }
        
      console.log(this.pokeTipos);
    });
  }


  
  buscarPokemones(cadena : string){
    this.pokeService.pokeTipo = this.pokeTipoSeleccionado;
    console.log(1);
    this.router.navigate(['pokemonesEncontrados',cadena]);
    console.log(2);

  }


  onChange(event,cadena){
    this.buscarPokemones(cadena);
  }
}
