import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Task {
  taskName: string;
  isCompleted: boolean;
  isEditable: boolean;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray: Task[] = [{ taskName: 'Brush teeth', isCompleted: false, isEditable: false }];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
      isEditable: false
    });

    form.reset();
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onEdit(index: number) {
    this.taskArray[index].isEditable = true;
  }

  onSave(index: number, newTask: string) {
    this.taskArray[index].taskName = newTask;
    this.taskArray[index].isEditable = false;
  }
}
