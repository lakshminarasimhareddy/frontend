import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderFormsComponent } from './sender-forms.component';

describe('SenderFormsComponent', () => {
  let component: SenderFormsComponent;
  let fixture: ComponentFixture<SenderFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
