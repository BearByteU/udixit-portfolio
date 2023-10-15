import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experienceData = [
    {
      title: 'Senior Software Engineer',
      company: 'Gunaatita Technology Pvt. Ltd.',
      description: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
      date: 'March 2022 - Present'
    },
    {
      title: 'Software Engineer',
      company: 'Gunaatita Technology Pvt. Ltd.',
      description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
      date: 'August 2020 - February 2022'
    },
    {
      title: '.Net Developer',
      company: 'SysQuo Innovation Pvt. Ltd.',
      description: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximize the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.',
      date: 'January 2020 - May 2020'
    },
    {
      title: 'Software Engineer',
      company: 'Codestore Technologies',
      description: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer-directed convergence without revolutionary ROI.',
      date: 'January 2019 - January 2020'
    }
  ];
}
