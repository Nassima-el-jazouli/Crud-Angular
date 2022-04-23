import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8000/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor() { }
}
