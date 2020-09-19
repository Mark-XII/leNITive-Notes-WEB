import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items=[{"name":"Parvathi","year":3,"pages":250,"rating":4},{"name":"Athul","year":4,"pages":225,"rating":3},{"name":"Abhinav","year":2,"pages":15,"rating":5},{"name":"Naveen","year":1,"pages":25,"rating":4},{"name":"Naveen's achan","year":2,"pages":275,"rating":3}]

}

