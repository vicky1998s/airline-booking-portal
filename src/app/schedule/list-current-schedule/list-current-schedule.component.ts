import { Component, OnInit } from '@angular/core';
import { BookingSchedule } from 'src/app/models/interface/booking-schedule';
import { BookingScheduleService } from 'src/app/services/booking-schedule.service';

@Component({
  selector: 'app-list-current-schedule',
  templateUrl: './list-current-schedule.component.html',
  styleUrls: ['./list-current-schedule.component.css']
})
export class ListCurrentScheduleComponent implements OnInit {
  schedule_details : Array<BookingSchedule>=[];
  id:number=0;

  constructor(private scheduleService:BookingScheduleService) { }

  ngOnInit() {
    this.getAllSchedule();
  }
  getAllSchedule(){
    return this.scheduleService.getSchedule().subscribe(
     (res:any) => {this.schedule_details=res.result}
    )
  }

  // getScheduleById(){
  //   return this.scheduleService.getScheduleById(this.id).subscribe((res:any)=>{console.log(res.result)})
  // }
  //  removeSchedule(scheduleId:number)
  //  {
  //    this.scheduleService.deleteScheduleByID(scheduleId)
  //    .subscribe(
  //      data=>{
  //        console.log(data);
  //        this.getAllSchedule();
  //      },
  //      error => console.log(error));
  //  }

}
