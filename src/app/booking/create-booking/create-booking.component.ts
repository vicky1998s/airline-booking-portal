import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/class/booking';
import { BookingSchedule } from 'src/app/models/interface/booking-schedule';
import { BookingScheduleService } from 'src/app/services/booking-schedule.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  schedule_details : Array<BookingSchedule>=[];
  booking: Booking=new Booking();
  id:number=0;
  submitted=false;
  addBookingForm: FormGroup;
  addBookingMeta: FormGroup;
  Passengers:any[]=[];


  constructor(private fb: FormBuilder,private BookingService:BookingScheduleService,
    private router: Router,private route:ActivatedRoute) {

      this.addBookingMeta =  this.fb.group({
        name: [null, Validators.required],
        emailId: [null, Validators.required],
        noOfSeats: [null, Validators.required],
        couponCode: [null, Validators.required]
    });

      this.addBookingForm =  this.fb.group({
        passengerName: [null, Validators.required],
        passengerGender: [null, Validators.required],
        passengerAge: [null, Validators.required],
        typeOfSeats: [null, Validators.required],
        optForMeal: [null, Validators.required]
    });



     }

  ngOnInit() {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    this.getScheduleDetailsbyid()
  }

  AddPassenger(){
    this.Passengers.push(this.addBookingForm.value);
    this.addBookingForm.reset();

  }

  deletePassenger(pname:string,age:number){
    this.Passengers = this.Passengers.filter(obj => obj.passengerName !== pname
      && obj.passengerAge!==age);
  }

  onBookTicket(){
    let Finaloutput = Object.assign({},{'passenger':this.Passengers},this.addBookingMeta.value);
    if (this.addBookingForm.valid) {
      this.BookingService.addBooking(Finaloutput).subscribe((res) =>
      {
        console.log(res);
          this.onReset();
      });

  }
  }


  onReset() {
    this.addBookingMeta.reset();
    this.addBookingForm.reset();
  }

  userData(): Booking {
    return this.booking = {
      scheduleDetailsId:this.id,
      userId: 1,
      name: "Vishnuu",
      emailId: "Vishnuu@gmail.com",
      noOfSeats: this.noOfSeats.value,
      passengerName: this.passengerName.value,
      passengerGender: this.passengerGender.value,
      passengerAge: this.passengerAge.value,
      typeOfSeats: this.typeOfSeats.value,
      optForMeal: this.optForMeal.value,
      couponCode: this.couponCode.value,
    };
  }

  get  scheduleDetailsId() {
    return this.addBookingForm.get('scheduleDetailsId') as FormControl;
    }
    get name() {
      return this.addBookingMeta.get('name') as FormControl;
      }
      get emailId() {
        return this.addBookingMeta.get('emailId') as FormControl;
        }

    get noOfSeats() {
    return this.addBookingMeta.get('noOfSeats') as FormControl;
    }
    get passengerName() {
    return this.addBookingForm.get('passengerName') as FormControl;
    }

    get passengerGender() {
    return this.addBookingForm.get('passengerGender') as FormControl;
    }

    get passengerAge() {
    return this.addBookingForm.get('passengerAge') as FormControl;
    }
    get typeOfSeats() {
    return this.addBookingForm.get('typeOfSeats') as FormControl;
    }
    get optForMeal() {
    return this.addBookingForm.get('optForMeal') as FormControl;
    }

    get couponCode() {
    return this.addBookingMeta.get('couponCode') as FormControl;
    }

  getScheduleDetailsbyid(){
    return this.BookingService.getScheduleById(this.id).subscribe((res:any)=>{
      this.schedule_details=res.result;

    })
  }


}
