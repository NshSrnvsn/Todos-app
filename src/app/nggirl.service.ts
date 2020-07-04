import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NggirlService {

  constructor() { }
  onlcick(){
    alert("Hello service");
  }
}
