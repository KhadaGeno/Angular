import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Component_type } from './component-list/component';

const URL = 'https://667dd175297972455f666909.mockapi.io/api/v1/components'

@Injectable({
  providedIn: 'root'
})
export class ComponentDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Component_type[]> {
    return this.http.get<Component_type[]>(URL)
            .pipe(
              tap((components: Component_type[]) => components.forEach(component => component.quantity = 0))
            );
  }
}
