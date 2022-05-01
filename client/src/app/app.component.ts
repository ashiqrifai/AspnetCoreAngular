import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'This is a Development Application';
  subtitle = "Development Staging Test";
  users : any;  // define any to users variable to accept any type

  constructor(private http:HttpClient){}
  ngOnInit() {

    this.getUsers();

  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    })
  }


}
