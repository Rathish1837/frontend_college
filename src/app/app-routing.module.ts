import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  {
    path: 'teacher',component: TeacherComponent
  },
  {
    path: 'student',component: StudentComponent
  },
  {
    path: 'teacherEdit',component: TeacherEditComponent
  },
  {
    path: 'studentEdit',component: StudentEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
