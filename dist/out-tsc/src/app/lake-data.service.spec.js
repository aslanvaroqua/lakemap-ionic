import { TestBed } from '@angular/core/testing';
import { LakeDataService } from './lake-data.service';
describe('LakeDataService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LakeDataService);
        expect(service).toBeTruthy();
    });
    it('should return a geojson feature set', function () {
        var service = TestBed.get(LakeDataService.lakeTemperatures());
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=lake-data.service.spec.js.map