import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrealComponent } from './genreal.component';

describe('GenrealComponent', () => {
  let component: GenrealComponent;
  let fixture: ComponentFixture<GenrealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenrealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
