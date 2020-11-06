import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories: string[] = ['Dragon Ball'];

  addNewCategory(category: string): void {
    console.log(category);
    if (category) {
      this.categories = [ category, ...this.categories ];
    }
  }
}
