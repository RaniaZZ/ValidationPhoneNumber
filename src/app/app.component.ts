import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { MessageModel } from './models/message.model';
import { ValidationService } from './services/validation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  title = 'Task';
  number : string ='';
  countryCode : string ='1';
  numberToSend : string = '';
  messageModel = new MessageModel();

   constructor( public validationService : ValidationService ) {
    
   }  

  submit(){    
    this.numberToSend=this.countryCode+this.number;
    this.validationService.Validate(this.numberToSend).subscribe((res:any)=>{
      console.log(res);
      if(res.valid==true && /^\d+$/.test(this.numberToSend))
      Swal.fire(
        this.messageModel.country_name = res.country_name,
        this.messageModel.carrier = res.carrier
      );
      else
      {
        if(!/^\d+$/.test(this.numberToSend))  
          Swal.fire(
            'Invalid data type'
          )
        else
          Swal.fire(
            'Invalid data length'
          )
      }
    });
  }
  
  reset(){
    this.number='';
  }

  onCountryChange(event: any){
    this.number='';
    this.countryCode=event.dialCode;
  }
  }  
