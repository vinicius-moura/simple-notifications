import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class AppComponent {
    messageContent: string = '';
    notifications: { messageContent: string; status: string }[] = [];

  createNotification() {
    if (!this.messageContent.trim()) {
      return;
    }

    const newNotification = {
      messageContent: this.messageContent.trim(),
      status: 'Enviado'
    };

    this.notifications.push(newNotification);
    this.messageContent = '';
  }
}
