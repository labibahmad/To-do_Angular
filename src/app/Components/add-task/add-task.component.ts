import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text: string | undefined;
  day!: string;
  reminder: boolean = false;


  onSubmit(){
    if(!this.text)
    alert('Please add task!');
    return;
  }

  const newTask = {
    text: this.text,
    day: this.day,
    reminder: this.reminder
  }



  this.text = ''; 
}