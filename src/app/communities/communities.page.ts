import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon, IonButton, IonList, IonItem, IonText, IonFabButton, IonFab, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { camera, scan,people, settings, ellipsisVertical, personOutline, peopleSharp, chatbox, cameraOutline, add, qrCodeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-communities',
  templateUrl: 'communities.page.html',
  styleUrls: ['communities.page.scss'],
  standalone: true,
  imports: [IonLabel, IonFab, IonFabButton, IonText, IonItem, IonList, IonButton, IonIcon, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class CommunitiesPage {
  constructor() {addIcons({qrCodeOutline,cameraOutline,ellipsisVertical,add,scan,people,camera,chatbox,peopleSharp,personOutline,settings});}
}
