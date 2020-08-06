import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { SearchPokeComponent } from './components/search-poke/search-poke.component';

const routes: Routes = [
    { path: 'pokemones', component: PokemonesComponent },
    { path: 'pokemonesEncontrados/:id', component: SearchPokeComponent },
    { path: '**', component: PokemonesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRutas {}
