import { TestBed } from '@angular/core/testing';

import { Servicename } from './servicename';

describe('Servicename', () => {
  let service: Servicename;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicename);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
