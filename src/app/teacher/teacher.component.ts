import { Component } from '@angular/core';
import {ApiServiceService } from '../service/api-service.service'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  constructor( public api:  ApiServiceService){}

  TeacherForm:any;

  ngOnInit(){
    this.TeacherForm =new FormGroup({
      Name: new FormControl(),
      Department: new FormControl(),
      Qualification: new FormControl(),
      mobile: new FormControl(),
    })
    this.getteacherdata()
  }

  submit(){
    this.api.Teachersubmit(this.TeacherForm.value).subscribe((res:any)=>{
      console.log(this.TeacherForm.value)
      this.getteacherdata();
      this.TeacherForm.reset()
    })  
    
  }

  teacherData:any
  getteacherdata(){
    this.api.getteacherdata().subscribe((res:any)=>{
      this.teacherData = res
      console.log(this.teacherData,"Teacher")
    })  
  }

  deleteTeacherData(id:any){
    this.api.deleteTeacher(id).subscribe((res:any)=>{
      this.getteacherdata()
    })
  
  }

}
