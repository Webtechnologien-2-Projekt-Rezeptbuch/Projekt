import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecipeformComponent } from './addrecipeform.component';

describe('AddrecipeformComponent', () => {
  let component: AddrecipeformComponent;
  let fixture: ComponentFixture<AddrecipeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrecipeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrecipeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
