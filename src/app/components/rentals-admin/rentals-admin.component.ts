import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/core/services/rental.service';

@Component({
  selector: 'app-rentals-admin',
  templateUrl: './rentals-admin.component.html',
  styleUrls: ['./rentals-admin.component.css']
})
export class RentalsAdminComponent implements OnInit {
  waitingRentals!:any[]
  pendingRentals!:any[]
  confirmedRentals!:any[]
  rejectedRentals!:any[]
  constructor(private _RentalService:RentalService){
  }
  ngOnInit(): void {
   this.getAllPendingrentals();
   this.getAllWaitingrentals();
   this.getAllConfirmedRentals();
   this.getAllRejectedRentals();
  }

  getAllPendingrentals(){
    this._RentalService.getAllPendingRentals().subscribe({
      next:res=>{
        this.pendingRentals=res

      }
    })
  }
  getAllWaitingrentals(){
    this._RentalService.getAllWaitingRentals().subscribe({
      next:res=>{
        this.waitingRentals=res

      }
    })
  }
  getAllConfirmedRentals(){
    this._RentalService.getAllConfirmedRentals().subscribe({
      next:res=>{
        this.confirmedRentals=res

      }
    })
  }
  getAllRejectedRentals(){
    this._RentalService.getAllRejectedRentals().subscribe({
      next:res=>{
        this.rejectedRentals=res

      }
    })
  }


}
