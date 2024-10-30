import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonButton, IonList, IonItem, IonLabel, IonText, IonAvatar, IonFab, IonFabButton, IonPopover } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera, ellipseOutline, scan, search, cameraOutline, ellipsisVertical, heart, call, callOutline, lockClosedOutline, qrCodeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
  standalone: true,
  imports: [IonPopover, IonFabButton, IonFab, CommonModule, IonAvatar, IonText, IonLabel, IonItem, IonList, IonButton, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CallsPage implements OnInit {

  constructor() { addIcons({qrCodeOutline,cameraOutline,search,ellipsisVertical,heart,callOutline,lockClosedOutline,scan,call}); }

  ngOnInit() {
  }

  contacts = [

    {
      name: 'Sesha',
      img: 'https://i.pravatar.cc/150?img=56',
      date: 'October 2, 3:15 PM'
    },
    {
      name: 'Sundar',
      img: 'https://i.pravatar.cc/150?img=57',
      date: 'October 3, 1:45 PM'
    },
    {
      name: 'Mari',
      img: 'https://i.pravatar.cc/150?img=11',
      date: 'October 4, 11:30 AM'
    },
    {
      name: 'Bhuvanesh',
      img: 'https://i.pravatar.cc/150?img=41',
      date: 'October 5, 10:05 AM'
    }, {
      name: 'Mari',
      img: 'https://i.pravatar.cc/150?img=11',
      date: 'October 4, 11:30 AM'
    },
    {
      name: 'Bhai',
      img: 'https://i.pravatar.cc/150?img=61',
      date: 'October 6, 4:20 PM'
    }, {
      name: 'Sundar',
      img: 'https://i.pravatar.cc/150?img=57',
      date: 'October 3, 1:45 PM'
    },
    {
      name: 'Udhaya',
      img: 'https://i.pravatar.cc/150?img=33',
      date: 'October 7, 9:10 AM'
    },
    {
      name: 'Surya',
      img: 'https://i.pravatar.cc/150?img=67',
      date: 'October 8, 5:55 PM'
    },
    {
      name: 'Muthu',
      img: 'https://i.pravatar.cc/150?img=53',
      date: 'October 9, 6:30 AM'
    },
    {
      name: 'Shajith',
      img: 'https://i.pravatar.cc/150?img=13',
      date: 'October 10, 7:45 PM'
    }, {
      name: 'Bhuvanesh',
      img: 'https://i.pravatar.cc/150?img=41',
      date: 'October 5, 10:05 AM'
    }, {
      name: 'Mari',
      img: 'https://i.pravatar.cc/150?img=11',
      date: 'October 4, 11:30 AM'
    },
    {
      name: 'Bhai',
      img: 'https://i.pravatar.cc/150?img=61',
      date: 'October 6, 4:20 PM'
    }, {
      name: 'Sundar',
      img: 'https://i.pravatar.cc/150?img=57',
      date: 'October 3, 1:45 PM'
    },
    {
      name: 'Udhaya',
      img: 'https://i.pravatar.cc/150?img=33',
      date: 'October 7, 9:10 AM'
    },   {
      name: 'Bhuvanesh',
      img: 'https://i.pravatar.cc/150?img=41',
      date: 'October 5, 10:05 AM'
    }, {
      name: 'Mari',
      img: 'https://i.pravatar.cc/150?img=11',
      date: 'October 4, 11:30 AM'
    },
    {
      name: 'Bhai',
      img: 'https://i.pravatar.cc/150?img=61',
      date: 'October 6, 4:20 PM'
    }, {
      name: 'Sundar',
      img: 'https://i.pravatar.cc/150?img=57',
      date: 'October 3, 1:45 PM'
    },
    {
      name: 'Udhaya',
      img: 'https://i.pravatar.cc/150?img=33',
      date: 'October 7, 9:10 AM'
    },
    {
      name: 'Surya',
      img: 'https://i.pravatar.cc/150?img=67',
      date: 'October 8, 5:55 PM'
    },
  ];


}
