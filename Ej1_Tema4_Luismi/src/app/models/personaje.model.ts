export interface Habilidad {
  id: number;
  nombre: string;
  descripcion: string;
  personajeId: number;
}

export interface Personaje {
  id: number;
  nombre: string;
  tripulacion: string;
  habilidades: Habilidad[];
}
