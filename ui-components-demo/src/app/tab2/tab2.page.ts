import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone  : true,
  imports: [IonicModule]
})
export class Tab2Page {
  
  // Example method for handling click actions
  handleAction(action: string) {
    console.log(`${action} clicked`);
    // Add more logic here (e.g., favorite or delete action)
  }
}
