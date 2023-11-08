import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../service/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {


  Studentid: any;
  studentData:any;

  constructor( public api:  ApiServiceService,public router: ActivatedRoute,public route: Router){}
  editStudentForm:any;
  ngOnInit(){
    this.editStudentForm = new FormGroup({
      Name: new FormControl(),
      StudentID: new FormControl(),
      Department: new FormControl(),
      mobile: new FormControl()
    })
    this.router.queryParams.subscribe((res:any)=>{
      this.Studentid = res.id;
      console.log(this.Studentid,"Student id")
    })
    this.getStudentDataSpecific();

}

getStudentDataSpecific(){
  this.api.getStudentDataSpecific(this.Studentid).subscribe((res:any)=>{
    this.studentData = res[0];
    this.editStudentForm.patchValue({
      Name: this.studentData.Name,
      StudentID:this.studentData.StudentID,
      Department:this.studentData.Department,
      mobile:this.studentData.mobile
    })
  })
}


update(){
  this.api.updateStudent(this.Studentid, this.editStudentForm.value).subscribe((res:any)=>{
    this.route.navigate(['../student'])   

  })
}

}
