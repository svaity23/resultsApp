import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsComponent } from './containers/results/results.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { ResultsRoutingModule } from './results-routing.module';
import { environment } from 'src/environments/environment';
import { ResultsService } from '../core/services/results.service';
import { ResultsServiceMock } from '../core/mock/results.service.mock';

@NgModule({
  declarations: [
    ResultsComponent,
    ResultsListComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule
  ],
  providers: [{ provide: ResultsService, useClass: environment.useMockService ? ResultsServiceMock : ResultsService }],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ResultsModule { }
