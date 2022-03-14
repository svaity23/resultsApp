import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultsFacade } from 'src/app/core/facades/results.facade';
import { Sports } from 'src/app/core/models/sports.model';
import { ResultsService } from 'src/app/core/services/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {  
  results$: Observable<Sports> | undefined;

  constructor(private facade: ResultsFacade) { }
  
  ngOnInit(): void {
    this.results$ = this.facade.loadResults();
  }
}
