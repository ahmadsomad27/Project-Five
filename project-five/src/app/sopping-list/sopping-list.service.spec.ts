/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SoppingListService } from './sopping-list.service';

describe('Service: SoppingList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoppingListService]
    });
  });

  it('should ...', inject([SoppingListService], (service: SoppingListService) => {
    expect(service).toBeTruthy();
  }));
});
