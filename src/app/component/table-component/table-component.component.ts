import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  searchTerm :any

  constructor() { }

  ngOnInit(): void {
  }


  public userDetails =[
       
    {
        StudentName:'Suleiman Ibrahim Inuwa',
        PhoneNumber:'08144832703',
        University:'Abubakar Tafawa Balewa Uni.',
        Course:'Computer and Comm. Engineering',
        LoanAmountRequested:'₦150,000',
        LoanAmountDisburse:'₦100,000',
        SponsorName:'Amb Musa Saban',
        ProfileVerifyStatus:"Yes"
    },
    {
      StudentName:'Suleiman Ibrahim Inuwa',
      PhoneNumber:'08144832703',
      University:'Abubakar Tafawa Balewa Uni.',
      Course:'Computer and Comm. Engineering',
      LoanAmountRequested:'₦150,000',
      LoanAmountDisburse:'₦100,000',
      SponsorName:'Amb Musa Saban',
      ProfileVerifyStatus:"Yes"
  },
  {
    StudentName:'Suleiman Ibrahim Inuwa',
    PhoneNumber:'08144832703',
    University:'University of Maiduguri.',
    Course:'Computer and Comm. Engineering',
    LoanAmountRequested:'₦150,000',
    LoanAmountDisburse:'₦100,000',
    SponsorName:'Amb Musa Saban',
    ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer Science',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Umar Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
},
{
  StudentName:'Suleiman Ibrahim Inuwa',
  PhoneNumber:'08144832703',
  University:'Abubakar Tafawa Balewa Uni.',
  Course:'Computer and Comm. Engineering',
  LoanAmountRequested:'₦150,000',
  LoanAmountDisburse:'₦100,000',
  SponsorName:'Amb Musa Saban',
  ProfileVerifyStatus:"Yes"
}
];


}
