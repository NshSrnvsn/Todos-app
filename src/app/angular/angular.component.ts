import { NggirlService } from './../nggirl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent implements OnInit {
  constructor(private service: NggirlService) {}

  ngOnInit(): void {}
  todo: string;
  todos: string[] = [];

  onsave() {
    this.todos.push(this.todo);

  }
  ondelete(to){

    this.todos.splice(this.todos.indexOf(to),1);

  }
}
