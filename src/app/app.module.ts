import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AppRoutingModule } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthServiceComponent } from './view/auth-service/auth-service.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { NavComponent } from './modules/nav/nav.component';
import { AdduserComponent } from './adduser/adduser.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TaskComponent } from './task/task.component';
import { LeaveComponent } from './leave/leave.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { DepartmentsComponent } from './departments/departments.component';






@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
       
        AuthServiceComponent,
                ProfileComponent,
                AdduserComponent,
                TopWidgetsComponent,
                AttendanceComponent,
                TaskComponent,
                EmployeelistComponent,
                HeaderComponent,
                FooterComponent,
                NavComponent,
                LeaveComponent,
                HolidaysComponent,
                DepartmentsComponent,
               
    
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
      
        
    ]
})
export class AppModule { }
