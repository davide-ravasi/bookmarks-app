import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  searchform: FormGroup;
  searchQuery: string;

  constructor() { }

  ngOnInit() {
    this.searchform = new FormGroup({
      search: new FormControl('', [
        Validators.required
    ])});
  }

  onSubmit() {
    let searchQuery = this.searchform.value.search;
    console.log(searchQuery);
  }

}
