import {Component} from '@angular/core';
@Component({
    selector:'Employee',    
    template:'./Employee/Employee.Component.html',
})
export class EmployeeComponent
{
    Fname:string='naresh reddy';
    salary:number=30000;
    department:string="training";

    empName() : string{
        return this.Fname +' '+ this.department;
    }

}