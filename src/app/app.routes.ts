
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './view/login/login.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './view/dashboard/dashboard.component';

import { AuthServiceComponent } from './view/auth-service/auth-service.component';
import { ProfileComponent } from './profile/profile.component';

import { EmployeelistComponent } from './employeelist/employeelist.component';
import { TaskComponent } from './task/task.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LeaveComponent } from './leave/leave.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { DepartmentsComponent } from './departments/departments.component';


export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'employeelist',
    component: EmployeelistComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'attendance',
    component:AttendanceComponent
  },
  {
    path: 'adduser',
    component:AdduserComponent
  },
  {
    path: 'holidays',
    component:HolidaysComponent
  },

  {
    path: 'leave',
    component:LeaveComponent
  },
  
  {
    path: '**',
    component: LoginComponent
  },
  {
    path: 'authservicecomponent',
    component: AuthServiceComponent
  },
  { 
    path: '', redirectTo: '/login', pathMatch: 'full'
   },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
  static forRoot(RoutingModule: typeof AppRoutingModule): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
