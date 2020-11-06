import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifGridItemComponent } from './gif-grid-item.component';

describe('GifGridItemComponent', () => {
  let component: GifGridItemComponent;
  let fixture: ComponentFixture<GifGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
