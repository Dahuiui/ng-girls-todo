import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  public todoList: TodoItem[];

  constructor(private todoListService: TodoListService) { }

  public ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  public addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  public removeItem(item) {
    this.todoListService.deleteItem(item);
  }

  public updateItem(item, changes) {
    this.todoListService.updateItem(item, changes);
  }
}
