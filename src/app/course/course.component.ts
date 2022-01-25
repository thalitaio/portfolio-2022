import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    {'id':1, 'name':'Aprenda X', 'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 'image':'../../assets/cursos.jpg'},
    {'id':2, 'name':'Aprenda Z', 'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 'image':'../../assets/cursos.jpg'},
    {'id':3, 'name':'Aprenda Y', 'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 'image':'../../assets/cursos.jpg'},
    {'id':4, 'name':'Aprenda W', 'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 'image':'../../assets/cursos.jpg'}
  ]
}
