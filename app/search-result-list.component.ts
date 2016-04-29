import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs/Observable';

import { Roast } from './roast.model';

@Component({
  selector: 'search-result-list',
  templateUrl: 'app/search-result-list.component.html'
})

export class SearchResultListComponent implements OnInit {
  constructor(private _firebaseService: FirebaseService) {}

  ngOnInit() {

  }
  
}