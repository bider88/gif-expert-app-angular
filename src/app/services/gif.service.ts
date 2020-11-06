import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GifInterface } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(
    private http: HttpClient
  ) { }

  getGifs(category: string): Observable<GifInterface[]> {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=OmEP12EHcWDbUDwqjtwufA7Yht6siNu4`;

    return this.http.get(url).pipe(
      map((res: any) => {
        return res.data.map((img: any) => ({
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url
        }));
      })
    );
  }
}
