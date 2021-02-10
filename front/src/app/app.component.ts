import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor( public http: HttpClient ) {}

  logout() {
    console.log('LOGGING OUT');
    const headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');

    this.http.post('/logout', {}, {headers: headers, withCredentials: true})
      .subscribe((data: any) => {
        console.log(data);
        window.location.href = "/login";
      }, error => {
        console.error('REVOKE TOKEN ERROR', error);
      });
  }
}
