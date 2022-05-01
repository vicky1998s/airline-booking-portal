import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpclient:HttpClient) { }

addNormalUser(user:object){
  return this.httpclient.post( environment.baseurl + 'User/Register',user);
}

addAdminUser(admin:object){
  return this.httpclient.post( environment.baseurl + 'Admin/Register',admin);
}

login(login:object){
  return this.httpclient.post( environment.baseurl + 'Login',login);
}

}
