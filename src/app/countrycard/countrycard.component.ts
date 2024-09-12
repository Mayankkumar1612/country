import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countrycard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countrycard.component.html',
  styleUrl: './countrycard.component.css',
})
export class CountrycardComponent {
  @Input() country = {}; // decorate the property with @Input()
}
