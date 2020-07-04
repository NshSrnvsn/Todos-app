import { TestBed } from '@angular/core/testing';

import { NggirlService } from './nggirl.service';

describe('NggirlService', () => {
  let service: NggirlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NggirlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
