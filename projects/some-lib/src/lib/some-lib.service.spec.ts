import { TestBed, inject } from '@angular/core/testing';

import { SomeLibService } from './some-lib.service';

describe('SomeLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomeLibService]
    });
  });

  it('should be created', inject([SomeLibService], (service: SomeLibService) => {
    expect(service).toBeTruthy();
  }));
});
