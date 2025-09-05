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

    //mock 20% error
    const isError = Math.random() < 0.2;

    const newNotification = {
      messageContent: this.messageContent.trim(),
      status: isError ? 'Erro' : 'Enviado'
    };

    this.notifications.push(newNotification);
    this.messageContent = '';
  }
}
