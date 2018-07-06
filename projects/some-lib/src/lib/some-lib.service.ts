import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeLibService {

  getDate(): Date {
    return new Date();
  }
}

