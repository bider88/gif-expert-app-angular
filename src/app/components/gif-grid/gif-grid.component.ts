import { Component, Input, OnInit } from '@angular/core';
import { GifInterface } from 'src/app/interfaces/gif.interface';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-gif-grid',
  templateUrl: './gif-grid.component.html',
  styleUrls: ['./gif-grid.component.scss']
})
export class GifGridComponent implements OnInit {

  @Input() category: string;
  loading = true;
  images: GifInterface[] = [];

  constructor(
    private gifService: GifService
  ) { }

  ngOnInit(): void {
    this.getGif(this.category);
  }

  getGif(category: string): void {
    this.gifService.getGifs(category).subscribe(
      res => {
        this.images = [ ...res, ...this.images ];
        this.loading = false;
      },
      error => {
        console.warn(error);
        this.loading = false;
      }
    )
  }

}
