import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { SearchPokeComponent } from './components/search-poke/search-poke.component';
import { AppRutas } from './app-rutas';
import { HttpClientModule } from '@angular/common/http';
import { pokemonService } from './servicios/pokemon-service';
import { FormularioComponent } from './components/formulario/formulario.component';


import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PokemonesComponent,
    SearchPokeComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRutas,
    HttpClientModule,
    FormsModule    
  ],
  providers: [pokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
