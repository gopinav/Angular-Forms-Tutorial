import { TestBed, inject } from '@angular/core/testing';

import { EnrollmentService } from './enrollment.service';

describe('EnrollmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnrollmentService]
    });
  });

  it('should be created', inject([EnrollmentService], (service: EnrollmentService) => {
    expect(service).toBeTruthy();
  }));
});
