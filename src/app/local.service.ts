import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  constructor(private http: HttpClient) { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  storeLoginEmailIdPassword(emailId: string, password: string) {
    localStorage.setItem('emailId', emailId);
    localStorage.setItem('password', password);
  }

  getLoginEmailIdPassword() {
    const emailId = localStorage.getItem('emailId');
    const password = localStorage.getItem('password');
    return { emailId, password };
  }

  
}
