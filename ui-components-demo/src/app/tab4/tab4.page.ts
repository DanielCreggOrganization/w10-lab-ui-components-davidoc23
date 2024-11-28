import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonTitle, IonToolbar, ToastController } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class Tab4Page {
  constructor(private alertController: AlertController, private toastController: ToastController) {}
  
  // Show alert
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Action',
      message: 'Are you sure you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelled');
          }
        },
        {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
            this.showDeleteSuccess();
          }
        },
        {
          text: 'Save',
          cssClass: 'primary',
          handler: () => {
            console.log('Saved');
          }
        }
      ]
    });
    await alert.present();
  }

  // Show toast
  async showToast() {
    const toast = await this.toastController.create({
      message: 'Task completed successfully',
      duration: 3000,
      buttons: [
        {
          text: 'UNDO',
          role: 'cancel',
          handler: () => { console.log('Undo clicked'); }
        }
      ]
    });
    await toast.present();
  }

  async showDeleteConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.showDeleteSuccess();
          }
        }
      ]
    });
    await alert.present();
  }
  async showDeleteSuccess() {
    const toast = await this.toastController.create({
      message: 'Item deleted successfully',
      duration: 2000,
      position: 'top',
      color: 'success',
      icon: 'checkmark-circle',
      translucent: true
    });
    await toast.present();
  }  

}
