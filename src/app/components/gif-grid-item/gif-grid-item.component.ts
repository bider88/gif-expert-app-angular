import { Component, Input, OnInit } from '@angular/core';
import { GifInterface } from 'src/app/interfaces/gif.interface';

@Component({
  selector: 'app-gif-grid-item',
  templateUrl: './gif-grid-item.component.html',
  styleUrls: ['./gif-grid-item.component.scss']
})
export class GifGridItemComponent implements OnInit {

  @Input() image: GifInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
