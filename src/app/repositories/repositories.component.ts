import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { SearchRequestService } from '../search-service/search-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repository: Repository;
    public searchRepo: string;
    public resultCount = 12;

    //Search repos function
    searchRepos() {
      this.searchRepo = '';
      this.resultCount = 10;
      this.getDataFunction();

  }

  //Repositories component class to consume the SearchRequest Service within the constructor.
  constructor(public gitRepoRequest: SearchRequestService ) { }

  ngOnInit() {
    this.resultCount = 5;
      this.gitRepoRequest.gitRepos(this.searchRepo);
  }

  getDataFunction() {
    this.gitRepoRequest.gitRepos(this.searchRepo);

}

}
