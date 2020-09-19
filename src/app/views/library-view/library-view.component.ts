import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-view',
  templateUrl: './library-view.component.html',
  styleUrls: ['./library-view.component.scss']
})
export class LibraryViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items=[{"name":"Parvathi","year":3,"pages":250,"rating":4},{"name":"Athul","year":4,"pages":225,"rating":3},{"name":"Abhinav","year":2,"pages":15,"rating":5},{"name":"Naveen","year":1,"pages":25,"rating":4},{"name":"Naveen's achan","year":2,"pages":275,"rating":3}]

}
