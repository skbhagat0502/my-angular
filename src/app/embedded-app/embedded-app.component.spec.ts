import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedAppComponent } from './embedded-app.component';

describe('EmbeddedAppComponent', () => {
  let component: EmbeddedAppComponent;
  let fixture: ComponentFixture<EmbeddedAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbeddedAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmbeddedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
