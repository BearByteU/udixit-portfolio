import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectsData = [
    {
      name: 'TRU (Technical Risk Underwriters):',
      company: 'Gunaatita Technology Pvt.Ltd.',
      description: 'We have developed a portal that ensures under-construction buildings are resilient in the face of natural disasters like earthquakes, wind storms, floods, terrorism, and other perils. This platform offers comprehensive coverage, safeguarding construction projects against a range of potential hazards.'
    },
    {
      name: 'CRS (Contract Report System):',
      company: 'Gunaatita Technology Pvt.Ltd.',
      description: 'Description of Project 2',
    },
    {
      name: 'HRMS (Human Resource Management System): ',
      company: 'SysQuo Innovation Pvt Ltd.',
      description: 'Implemented real-time attendance tracking functionality, including writing business logic using Web API and developing .NET Core, Swagger, and SQL Server components for streamlined management.'
    },
    {
      name: 'Collaboration/Task Management App: ',
      company: 'Codestore Technologies',
      description: 'Developed a common API portal for Authentication and Authorization in .NET Core using JWT tokens, focused on Issuer and Audience management. This centralized platform empowers users to efficiently oversee multiple child portals. Additionally, contributed to creating backend components for social media-style applications and implemented the backend system for simple chat systems.'
    }
  ];
}
