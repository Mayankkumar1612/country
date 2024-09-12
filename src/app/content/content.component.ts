import { Component } from '@angular/core';
import { CountrycardComponent } from '../countrycard/countrycard.component';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import * as countryData from '../../../src/asset/data.json';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ContentComponent, CommonModule, CountrycardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  data = countryData;
}
