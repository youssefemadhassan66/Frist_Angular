import { Component } from '@angular/core';


 interface CourseSchema{
  id:number;
  name:string;
  dis:string;
  imgUrl:string;
  isActive:boolean;
}

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {




      myCourses:CourseSchema[] = [
        { id: 0, name: 'mongodb', dis: 'database engine', imgUrl: 'imgs/m.png',isActive:true},
        { id: 1, name: 'Angular', dis: 'JS framework', imgUrl: 'imgs/A.jpg',isActive:true },
        { id: 2, name: 'node', dis: 'JS runtime Environment', imgUrl: 'imgs/N.png',isActive:true },
        { id: 3, name: 'Express', dis: 'Node js package manager', imgUrl: 'imgs/E.png',isActive:true }
      ];

      remove_course (id:number){
        this.myCourses = this.myCourses.filter((item)=>item.id != id);
      }



    isvisible = true;
    hideList(){
      this.isvisible = !this.isvisible;
    }

   friendslist = [
    {
      name: 'Nishant',
      age: 25
    },
    {
      name: 'Shailesh',
      age: 45
    },
    {
      name: 'Abhishek',
      age: 36
    },
    {
      name: 'Akshay',
      age: 65
    },
    {
      name: 'Ashish',
      age: 12
    },
    {
      name: 'Uday',
      age: 31
    },
    {
      name: 'Mayank',
      age: 45
    },
    {
      name: 'Raju',
      age: 74
    },
  ]


}
