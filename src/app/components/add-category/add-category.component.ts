import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  @Output() newCategory: EventEmitter<string> = new EventEmitter<string>(null);

  constructor() { }

  ngOnInit(): void {
  }

  emitNewCategory(category: any): void {
    if (category.value && category.value.trim().length > 0) {
      this.newCategory.emit(category.value);
      category.value = '';
    }
  }

}
