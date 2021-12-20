import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-body',
  templateUrl: './to-do-body.component.html',
  styleUrls: ['./to-do-body.component.css'],
})
export class ToDoBodyComponent implements OnInit {
  item: any = [];

  addTask: string | undefined;

  constructor() {
    this.addTask;
  }

  ngOnInit(): void {}

  addTaskList() {
    if (this.addTask == '') {
    } else {
      this.item.push(this.addTask);
      this.addTask = '';
    }
  }
}
