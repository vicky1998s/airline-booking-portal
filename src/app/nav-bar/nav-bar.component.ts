import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  role:number=0;
  constructor(private router:Router) {
    this.role=Number(sessionStorage.getItem('role'));
  }

  ngOnInit() {
  }

  logout(){
    sessionStorage.setItem("role","");
    this.router.navigate(['']);

  }

}
