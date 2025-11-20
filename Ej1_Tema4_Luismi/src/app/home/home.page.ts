import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner } from '@ionic/angular/standalone';
import { EarthquakeService } from '../services/earthquake.service';
import { Feature } from '../models/earthquake.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, CommonModule],
})
export class HomePage {
  latestEarthquake: Feature | null = null;
  loading: boolean = false;
  error: string = '';

  constructor(
    private earthquakeService: EarthquakeService,
    private router: Router
  ) {}

  getLatestEarthquake() {
    this.loading = true;
    this.error = '';
    this.latestEarthquake = null;

    this.earthquakeService.getLatestEarthquake().subscribe({
      next: (data) => {
        if (data.features && data.features.length > 0) {
          // Obtener el terremoto más reciente (el primero del array)
          this.latestEarthquake = data.features[0];
        } else {
          this.error = 'No se encontraron terremotos recientes';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener terremotos:', err);
        this.error = 'Error al obtener información de terremotos';
        this.loading = false;
      }
    });
  }

  getDate(timestamp: number): string {
    return new Date(timestamp).toLocaleString('es-ES');
  }

  goToPersonajes() {
    this.router.navigate(['/personajes']);
  }
}
