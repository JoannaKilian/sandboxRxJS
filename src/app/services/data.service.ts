import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';
import { DataBaseService } from './data-base.service';
import { Person } from './interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  list = new BehaviorSubject<Person[]>([]);

  constructor(private dataBaseService: DataBaseService) {
    this.init;
  }

  addPerson(person: Person) {
    this.dataBaseService.addPerson(person).subscribe(this.observer());
  }

  private init(): void {
    this.dataBaseService.fetchPersons().subscribe(this.observer());
  }

  private observer(): Observer<Person[]> {
    return {
      next: (persons: Person[]) => {
        this.list.next(persons);
      },
      error: (error) => console.log(error),
      complete: () => console.log('ok'),
    };
  }
}
