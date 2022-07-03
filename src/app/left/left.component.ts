import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { Person } from '../services/interface';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
})
export class LeftComponent implements OnInit {
  persons: Person[] = [];
  private subscriptions = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const sub = this.dataService.list.subscribe((data: Person[]) => {
      this.persons = data;
      console.log('Update list subscribe', this.persons);
    });

    this.subscriptions.add(sub);
  }
  ngOnDestory(): void {
    this.subscriptions.unsubscribe();
  }
}
