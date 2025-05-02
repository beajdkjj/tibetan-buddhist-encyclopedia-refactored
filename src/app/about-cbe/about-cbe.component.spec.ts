import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCbeComponent } from './about-cbe.component';

describe('AboutCbeComponent', () => {
  let component: AboutCbeComponent;
  let fixture: ComponentFixture<AboutCbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCbeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
