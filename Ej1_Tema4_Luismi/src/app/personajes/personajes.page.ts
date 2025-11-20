import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { PersonajeService } from '../services/personaje.service';
import { Personaje } from '../models/personaje.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, IonList, IonItem, IonLabel, CommonModule, FormsModule]
})
export class PersonajesPage implements OnInit {
  personajes: Personaje[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(
    private personajeService: PersonajeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getPersonajes() {
    this.loading = true;
    this.error = '';
    this.personajes = [];

    this.personajeService.getPersonajes().subscribe({
      next: (data) => {
        this.personajes = data;
        if (!data || data.length === 0) {
          this.error = 'No hay personajes registrados en la base de datos.';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener personajes:', err);
        this.error = 'Error al obtener los personajes. Verifica la conexión con la API.';
        this.loading = false;
      }
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
