import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SportTypeKey } from 'src/app/core/enums/sport-type.enum';
import { ResultsServiceMock } from 'src/app/core/mock/results.service.mock';
import { ResultsService } from 'src/app/core/services/results.service';

import { ResultsListComponent } from './results-list.component';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;
  let mockData: any
  let resultsSericeMock;
  
  beforeEach(async () => {
    mockData = jasmine.createSpyObj(['getAll']);
    resultsSericeMock = new ResultsServiceMock().getAll().subscribe(data => {
      mockData = data;
    });
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ResultsListComponent ],
      providers: [
        { provide: ResultsService, useValue: mockData }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should show all sports results', () => {
    component.selectedSport = SportTypeKey.all;
    component.tennisResults = mockData.tennis;
    component.nbaResults = mockData.nba;
    component.f1Results = mockData.f1;
    fixture.detectChanges();

    const tennisHTMLElement = fixture.nativeElement.querySelector('.tennis-results');
    const nbaElement = fixture.nativeElement.querySelector('.nba-Results');
    const f1Element = fixture.nativeElement.querySelector('.f1-Results');

    expect(tennisHTMLElement).toBeTruthy();
    expect(nbaElement).toBeTruthy();
    expect(f1Element).toBeTruthy();
  });
});
