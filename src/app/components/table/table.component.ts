import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  pokemons: any[] = [];
  stat: any[] = [];
  /* class: string = 'stats' */
  display: string = ''





  constructor(private pokeService : PokemonService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getPokemons();
    this.getStat();
    this.display = 'stats'
  }

  getPokemons() {
    let pokemonData;

    for(let i = 1; i <= 150; i++) {
      this.pokeService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            type: res.types,
            stat: res.stats
          }
          this.pokemons.push(pokemonData)
        },
        err =>{
          console.log(err)

        }

      );
    }
  }
  getStat() {
    let pokeStat;

    for(let i = 1; i <= 150; i++) {
      this.pokeService.getPokemons(i).subscribe(
        res => {
          pokeStat = {
            value: res.stats[0].base_stat,
            name: res.stats[0].stat.name,

          }
          this.stat.push(pokeStat)
        },
        err =>{
          console.log(err)

        }

      );
    }
  }
 handleDisplay(id: any) {
  let pokemon = document.getElementById(id)
  if (pokemon?.className == 'display') {
    pokemon?.setAttribute('class', 'stats')

  } else {
    pokemon?.setAttribute('class', 'display')
  }
 }

}
