import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string  = "https://pokeapi.co/api/v2"

  constructor(private http : HttpClient) { }

  getPokemons(index:any) {
    return this.http.get<any>(`${this.url}/pokemon/${index}`)
  }
  getType(index:any){
    return this.http.get<any>(`${this.url}/type/${index}` )
  }
}
