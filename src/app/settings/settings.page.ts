import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ChatsPage } from '../chats/chats.page';
import { addIcons } from 'ionicons';
import { addCircleOutline, arrowBackOutline, keyOutline, scan, lockClosedOutline, apertureOutline, heartOutline, chatboxOutline, notificationsOutline, stopOutline, globeOutline, helpCircleOutline, peopleOutline, logoInstagram, logoFacebook, atOutline, qrCodeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ChatsPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsPage implements OnInit {

  constructor() { addIcons({qrCodeOutline,addCircleOutline,lockClosedOutline,apertureOutline,heartOutline,chatboxOutline,notificationsOutline,stopOutline,globeOutline,helpCircleOutline,peopleOutline,logoInstagram,logoFacebook,atOutline,scan,arrowBackOutline,keyOutline});}

  ngOnInit() {
  }

}
