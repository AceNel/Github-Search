import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';

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

  
  constructor(public gitRepoRequest: SearchRequestService ) { }

  ngOnInit() {
  }

}
