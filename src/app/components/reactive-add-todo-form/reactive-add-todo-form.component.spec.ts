import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddTodoFormComponent } from './reactive-add-todo-form.component';

describe('ReactiveAddTodoFormComponent', () => {
  let component: ReactiveAddTodoFormComponent;
  let fixture: ComponentFixture<ReactiveAddTodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAddTodoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAddTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
