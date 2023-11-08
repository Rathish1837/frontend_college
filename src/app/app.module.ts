import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { StudentEditComponent } from './student-edit/student-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TeacherComponent,
    StudentComponent,
    TeacherEditComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
