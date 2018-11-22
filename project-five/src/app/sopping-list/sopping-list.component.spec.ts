/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SoppingListComponent } from './sopping-list.component';

describe('SoppingListComponent', () => {
  let component: SoppingListComponent;
  let fixture: ComponentFixture<SoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
