import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import tasks, { Task } from '../tasks/tasks';
import { Output, EventEmitter } from '@angular/core'
@Injectable()
export class AppService {
  isLoggedin = false;
  
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor(private sanitizer: DomSanitizer) { }

  /**
   * @author Ahsan Ayaz
   * @desc Returns an array of tasks to be done as exercise
   */
  
  getTasks(): Array<Task> {
    return tasks.map((task) => {
      const updatedTask: Task = {description: ''};
      if (task.links && task.links.length) {
        for (const link of task.links) {
          updatedTask.description = task.description.replace('{{link}}', `<a href='${link}'>${link}</a>`);
        }
      } else if (task.routerLinks && task.routerLinks.length) {
        for (const link of task.routerLinks) {
          updatedTask.description = task.description.replace('{{link}}', `<a href='#/${link}' routerLink="${link}">'${link} route'</a>`);
        }
      }
      updatedTask.description = this.sanitizer.bypassSecurityTrustHtml(updatedTask.description) as string;
      return Object.assign({}, task, updatedTask);
    });
  }
  
  setLoggedStatus(logged) {
    this.isLoggedin = logged;
    this.change.emit(this.isLoggedin);
  }
}
