import { Component, OnInit, Input } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-playbutton',
  templateUrl: './playbutton.component.html',
  styleUrls: ['./playbutton.component.css']
})
export class PlaybuttonComponent implements OnInit {
  @Input() public item1;
  playresponse: any;
  constructor( private serve: ServeService) { }

  ngOnInit() {
  }
  playtrack() {
    window.open(this.item1);
  }

}
