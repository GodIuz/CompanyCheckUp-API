import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonyosComponent } from './harmonyos.component';

describe('HarmonyosComponent', () => {
  let component: HarmonyosComponent;
  let fixture: ComponentFixture<HarmonyosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarmonyosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarmonyosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
