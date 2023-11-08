import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http: HttpClient) { }

  //POST method

  Teachersubmit(data:any){
    return this.http.post("http://localhost:3000/Teacher/add", data)
  }

// GET method

  getteacherdata(){
    return this.http.get("http://localhost:3000/get/Teacher")
  }

// GET specific Teacher data

getTeacherDataSpecific(id:any){
  return this.http.get("http://localhost:3000/get/specific/Teacher/"+id)

}


  // PUT method

  updateTeacher(id:any, data:any){
    return this.http.put("http://localhost:3000/put/edit/Teacher/"+id, data)
  }

  //Delete method

  deleteTeacher(id:any){
    return this.http.delete("http://localhost:3000/delete/Teacher/"+id)
    }



  //POST method

  Studentsubmit(data:any){
    return this.http.post("http://localhost:3000/Student/add", data)
  }

// GET method

  getstudentdata(){
    return this.http.get("http://localhost:3000/get/Student")
  }

// GET specific Student data

getStudentDataSpecific(id:any){
  return this.http.get("http://localhost:3000/get/specific/Student/"+id)

}


  // PUT method

  updateStudent(id:any, data:any){
    return this.http.put("http://localhost:3000/put/edit/Student/"+id, data)
  }

  //Delete method

  deleteStudent(id:any){
    return this.http.delete("http://localhost:3000/delete/Student/"+id)
    }



}
