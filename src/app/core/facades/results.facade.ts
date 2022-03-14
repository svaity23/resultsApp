import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// services
import { ResultsService } from "../services/results.service";

// models
import { Sports } from "../models/sports.model";


@Injectable({ providedIn: 'root' })
export class ResultsFacade {  
  results$: Observable<Sports> | undefined;

  constructor(private service: ResultsService) { }

  loadResults(): Observable<Sports> {    
    return this.service.getAll();
  }
}