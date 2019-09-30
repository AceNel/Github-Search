import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { SearchRequestService } from '../search-service/search-request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchMe = '';
  public githubUser: string;

  users: User;
  repository: Repository;
  public searchRepo: string;
  public resultCount = 5;


  //find user function taking a username argument
  findUser(username) {
    this.githubUser = '';
    this.searchMe = username;
    this.ngOnInit();
  }


  constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService) { }

  ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
  }
  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 5;

  }

}
