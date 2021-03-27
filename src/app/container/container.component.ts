import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public imgSrc: string = '';
  public tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    let myTask = new Task('Quitar caca Sansón', 1, 'Lo ha vuelto a hacer otra vez');
    this.tasks.push(myTask);
    this.tasks.push(new Task('Comprar', 2, 'Como minimo 10 curasan'));
  }
}
