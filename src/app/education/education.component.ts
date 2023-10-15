import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationData = [
    {
      institution: 'Institue Of Management Studies',
      degree: 'Masters of Computer Application',
      field: 'Computer Application',
      gpa: '73',
      date: 'July 2016 - May 2019'
    },
    {
      institution: 'Uttar Pradesh Rajarshi Tondon open University',
      degree: 'Bachelor Of Computer Application',
      gpa: '65',
      date: 'July 2013 - May 2016'
    },
    {
      institution: 'Adarsh seva Inter College',
      degree: 'Intermediate',
      gpa: '55',
      date: 'July 2011 - May 2012'
    },
    {
      institution: 'Besent Theosophical H.S. School',
      degree: 'High School',
      gpa: '50',
      date: 'July 2010 - May 2011'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
