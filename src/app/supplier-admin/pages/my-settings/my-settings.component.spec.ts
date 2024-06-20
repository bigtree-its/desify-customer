import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySettingsComponent } from './my-settings.component';

describe('MySettingsComponent', () => {
  let component: MySettingsComponent;
  let fixture: ComponentFixture<MySettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySettingsComponent]
    });
    fixture = TestBed.createComponent(MySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
