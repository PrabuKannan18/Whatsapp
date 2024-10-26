import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonSearchbar, IonGrid, IonRow, IonCol, IonAvatar, IonLabel, IonText, IonList, IonItem, IonBadge, IonFab, IonFabButton, IonChip, IonImg } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { camera, checkmark, scan, settings, checkmarkDoneOutline, image, ellipsisVertical, add, chatbox, cameraOutline, videocam } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import lottie from 'lottie-web';

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss'],
  standalone: true,
  imports: [IonImg, IonChip, IonFabButton, IonFab, IonBadge, IonItem,CommonModule, IonList, IonText, IonLabel, IonAvatar, IonCol, IonRow, IonGrid, IonSearchbar, IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class ChatsPage implements AfterViewInit{
  @ViewChild('animationContainer', { static: true }) animationContainer!: ElementRef;
  constructor() {addIcons({scan,cameraOutline,ellipsisVertical,chatbox,checkmarkDoneOutline,videocam,image,camera,add,settings,checkmark});}
  contacts = [
    { name: 'Prabu (you)', date: '9/11/24', img: 'https://i.pravatar.cc/150?img=12', status: 'video' },
    { name: 'Sesha', date: '10/01/24', img: 'https://i.pravatar.cc/150?img=56', status: 'Photo' },
    { name: 'Sundar', date: '10/02/24', img: 'https://i.pravatar.cc/150?img=57',status: 'Solu la', no: '3'  },
    { name: 'Mari', date: '7:37 AM', img: 'https://i.pravatar.cc/150?img=11', status: 'Elai prabu', no: '1' },
    { name: 'Bhuvanesh', date: '10/04/24', img: 'https://i.pravatar.cc/150?img=41', status: 'Photo' },
    { name: 'Bhai', date: '10/05/24', img: 'https://i.pravatar.cc/150?img=61',status: 'Okay', no: '2' },
    { name: 'Udhaya', date: '9:50 AM', img: 'https://i.pravatar.cc/150?img=33', status: 'Thanks la', no: '1' },
    { name: 'Surya', date: '1:00 PM', img: 'https://i.pravatar.cc/150?img=67',status:'video' },
    { name: 'Muthu', date: '10/08/24', img: 'https://i.pravatar.cc/150?img=53', status: 'Photo' },
    { name: 'Shajith', date: '10/09/24', img: 'https://i.pravatar.cc/150?img=13', status: 'video' },
    { name: 'Sri', date: '10/02/24', img: 'https://i.pravatar.cc/150?img=57',status: 'Solu la', no: '3'  },
    { name: 'Raja', date: '7:37 AM', img: 'https://i.pravatar.cc/150?img=11', status: 'Mmm', no: '1' },
    { name: 'Pravin', date: '10/04/24', img: 'https://i.pravatar.cc/150?img=41', status: 'Photo' },
    { name: 'Omar', date: '10/05/24', img: 'https://i.pravatar.cc/150?img=61',status: 'Okay', no: '2' },
    { name: 'Anbu', date: '9:50 AM', img: 'https://i.pravatar.cc/150?img=33', status: 'Thanks la', no: '1' },
    { name: 'Manoj', date: '1:00 PM', img: 'https://i.pravatar.cc/150?img=67',status:'video' },
    { name: 'Dani', date: '10/08/24', img: 'https://i.pravatar.cc/150?img=53', status: 'Photo' },
];
ngAfterViewInit() {
  lottie.loadAnimation({
    container: this.animationContainer.nativeElement, // Reference to the container div
    path: 'assets/icon/animation/Animation - 1729919314703.json', // Path to your animation JSON
    renderer: 'svg',
    loop: true,
    autoplay: true
  });
}


}
