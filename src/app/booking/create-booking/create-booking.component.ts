import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingSchedule } from 'src/app/models/interface/booking-schedule';
import { BookingScheduleService } from 'src/app/services/booking-schedule.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  schedule_details : Array<BookingSchedule>=[];
  id:number=0;

  constructor(private fb: FormBuilder,private BookingService:BookingScheduleService,
    private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    this.getScheduleDetailsbyid()
  }

  getScheduleDetailsbyid(){
    return this.BookingService.getScheduleById(this.id).subscribe((res:any)=>{
      console.log(res.result);
      this.schedule_details=res.result;

    })
  }


}
