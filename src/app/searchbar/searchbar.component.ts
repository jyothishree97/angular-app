import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServeService } from '../serve.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
   @Output() public item = new EventEmitter();
  find: string ;
   response: any ;
  constructor( private serve: ServeService ) { }

  ngOnInit() {
  }
  search() {
    this.serve.getAtrtist(this.find).subscribe((response) => {
      this.response = response.results.artistmatches.artist ;
      console.log(response);
    });
    this.item.emit(this.response);
  }
}
