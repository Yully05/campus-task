import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { Tarea } from './tarea.model';


@Injectable({ providedIn: 'root' })
export class TareasService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  listar(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.apiUrl}/tareas`);
  }
  crear(titulo: string): Observable<Tarea> {
    return this.http.post<Tarea>(`${this.apiUrl}/tareas`, { titulo });
  }
  actualizar(id: number, titulo: string): Observable<Tarea> {
    return this.http.patch<Tarea>(`${this.apiUrl}/tareas/${id}`, { titulo });
  }

  eliminar(id: number): Observable<Tarea> {
    return this.http.delete<Tarea>(`${this.apiUrl}/tareas/${id}`);
  }
}
