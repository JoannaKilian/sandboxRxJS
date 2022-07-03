import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Person } from './services/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hidden = true;
  person: Person = { firstName: '', lastName: '' };
  constructor(private dataServis: DataService) {}

  add(): void {
    this.dataServis.addPerson(this.person);
  }
}
