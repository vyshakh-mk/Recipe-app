import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRecipiesComponent } from './manage-recipies.component';

describe('ManageRecipiesComponent', () => {
  let component: ManageRecipiesComponent;
  let fixture: ComponentFixture<ManageRecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageRecipiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
