import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class Tab3Page {
  isModalOpen = false;  // Track modal state
  name = '';
  email = '';

  constructor(private modalController: ModalController) {}

  // Open modal
  openModal() {
    this.isModalOpen = true;
  }

  // Close modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Handle form submission
  submitForm() {
    console.log('Form submitted:', { name: this.name, email: this.email });
    this.closeModal();  // Close the modal after form submission
  }
}
