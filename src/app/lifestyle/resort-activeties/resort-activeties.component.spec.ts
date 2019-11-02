import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortActivetiesComponent } from './resort-activeties.component';

describe('ResortActivetiesComponent', () => {
  let component: ResortActivetiesComponent;
  let fixture: ComponentFixture<ResortActivetiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortActivetiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortActivetiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
