import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Main import for all Ionic components

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule],  // Importing IonicModule covers all Ionic components
})
export class Tab1Page {
  constructor() {}
}
