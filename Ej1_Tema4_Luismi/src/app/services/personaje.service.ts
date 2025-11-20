import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../models/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  // Usa la ruta relativa para que funcione con el proxy
  private apiUrl = '/api/personajes';

  constructor(private http: HttpClient) { }

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.apiUrl);
  }

  getPersonajeById(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/${id}`);
  }
}
