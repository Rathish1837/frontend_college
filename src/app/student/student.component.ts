import { Component } from '@angular/core';
import {ApiServiceService } from '../service/api-service.service'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {


  constructor( public api:  ApiServiceService){}

  StudentForm:any;

  ngOnInit(){
    this.StudentForm =new FormGroup({
      Name: new FormControl(),
      StudentID: new FormControl(),
      Department: new FormControl(),
      mobile: new FormControl(),
    })
    this.getstudentdata()
  }

  submit(){
    this.api.Studentsubmit(this.StudentForm.value).subscribe((res:any)=>{
      console.log(this.StudentForm.value)
      this.getstudentdata();
      this.StudentForm.reset()
    })  
    
  }

  studentData:any
  getstudentdata(){
    this.api.getstudentdata().subscribe((res:any)=>{
      this.studentData = res
      console.log(this.studentData,"Student")
    })  
  }

  deleteStudentData(id:any){
    this.api.deleteStudent(id).subscribe((res:any)=>{
      this.getstudentdata()
    })
  
  }


}
