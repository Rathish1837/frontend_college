import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../service/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent {
  Teacherid: any;
  teacherData:any;

  constructor( public api:  ApiServiceService,public router: ActivatedRoute,public route: Router){}
  editTeacherForm:any;
  ngOnInit(){
    this.editTeacherForm = new FormGroup({
      Name: new FormControl(),
      Department: new FormControl(),
      Qualification: new FormControl(),
      mobile: new FormControl()
    })
    this.router.queryParams.subscribe((res:any)=>{
      this.Teacherid = res.id;
      console.log(this.Teacherid,"Teacher id")
    })
    this.getTeacherDataSpecific();

}

getTeacherDataSpecific(){
  this.api.getTeacherDataSpecific(this.Teacherid).subscribe((res:any)=>{
    this.teacherData = res[0];
    this.editTeacherForm.patchValue({
      Name: this.teacherData.Name,
      Qualification: this.teacherData.Qualification,
      mobile: this.teacherData.mobile,
      Department: this.teacherData.Department
    })
  })
}


update(){
  this.api.updateTeacher(this.Teacherid, this.editTeacherForm.value).subscribe((res:any)=>{
    this.route.navigate(['../teacher'])   

  })
}


}