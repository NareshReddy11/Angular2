import {Component} from '@angular/core';
@Component({
    selector:'Employee',    
    templateUrl :'Employee.Component.html',
    
})
export class EmployeeComponent
{
    Fname:string='naresh reddy';
    salary:number=30000;
    department:string="training";
    imgPath:string="C:\Users\Lokesh\Pictures\Camera Roll\public\favPic.jpg"
  clr:string="red";
  bgclr:string="skyblue";

    showDetails: boolean= false;

    empName() : string{
        return this.Fname +' '+ this.department;
    }
    displayDetails(): void{
        this.showDetails = !this.showDetails;
    }
}