import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';
import { Book } from '../Models/Book';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private httpClient:HttpClient) { }

  getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }

  deleteUser(id: any) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }

  getBooks(){
    return this.httpClient.get<Book[]>('http://localhost:8080/books/allbooks');
  }

  addBook(newBook: Book){
    return this.httpClient.post<Book>('http://localhost:8080/books/savebook',newBook);

  }

  deleteBook(id : any) {
    return this.httpClient.delete<Book>('http://localhost:8080/books/' + id);
  }




}
