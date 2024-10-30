import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonLabel, IonAvatar, IonItem, IonFooter, IonInput, IonList, IonBackButton, IonText } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { cameraOutline, videocamOutline, callOutline, ellipsisVertical, happyOutline, attachOutline, micOutline, heart } from 'ionicons/icons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonText, IonBackButton, IonList, IonInput, IonFooter, IonItem, IonAvatar, IonLabel, IonButtons, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatPage implements OnInit {
  name: string |null=null;
  img: string |null=null;

  constructor(private router:Router,private route:ActivatedRoute) {addIcons({videocamOutline,callOutline,ellipsisVertical,micOutline,heart,happyOutline,attachOutline,cameraOutline}); }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');  
    this.img = this.route.snapshot.paramMap.get('img');  
  }

}
