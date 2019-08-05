import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LakeDataService } from './lake-data.service';

describe('LakeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LakeDataService = TestBed.get(LakeDataService);
    expect(service).toBeTruthy();
  });

  it('should return a geojson feature set', () => {
    const service: LakeDataService = TestBed.get(LakeDataService);

    expect(service).toBeTruthy();
  });
});
