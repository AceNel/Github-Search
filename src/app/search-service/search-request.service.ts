import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {

  repository: Repository;
  users: User;
  newRepository: any;
  searchRepo: any;
//create a property http which is of type HTTPCLient and instanciate class repo and users
  constructor(private http: HttpClient) {
    this.repository = new Repository('', '', '', new Date());
    this.users = new User('', '', '', 0, '', new Date(), 0, 0);
}
}
