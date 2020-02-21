import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  public setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
