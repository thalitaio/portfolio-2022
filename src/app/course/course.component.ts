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
    {'id':1, 'name':'Aprenda JavaScript', 'description':'Curso gratuito com os primeiros passos de JavaScript', 'image':'../../assets/cursos.jpg', 'href':'https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm'},
    {'id':2, 'name':'Full Stack JavaScript Profissional', 'description':'A forma que eu melhor aprendo é praticando. Esse curso é completão, com aulas, exercícios com resolução e projetos reais de forma totalmente prática, focado no mercado de trabalho. ', 'image':'../../assets/cursos.jpg', 'href':'https://go.hotmart.com/U65802408K'},
    {'id':3, 'name':'Java para Web', 'description':'Com o ramo da programação em constante crescimento, a linguagem Java para Web é considerada uma das mais utilizadas e bem remuneradas.', 'image':'../../assets/cursos.jpg', 'href':'https://go.hotmart.com/P65820588O'},
    {'id':4, 'name':'Angular', 'description':'Desenvolvi esse site usando Angular, que é um framework de JavaScript. Gosto muito da tecnologia, então separei esse curso para que você possa desenvolver sites como esse.', 'image':'../../assets/cursos.jpg', 'href':'https://go.hotmart.com/D65820799G'}
  ]
}
