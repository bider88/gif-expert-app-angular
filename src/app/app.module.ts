import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { GifGridComponent } from './components/gif-grid/gif-grid.component';
import { GifGridItemComponent } from './components/gif-grid-item/gif-grid-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    GifGridComponent,
    GifGridItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
