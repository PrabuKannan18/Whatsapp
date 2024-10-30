import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonSearchbar, IonGrid, IonRow, IonCol, IonAvatar, IonLabel, IonText, IonList, IonItem, IonBadge, IonFab, IonFabButton, IonChip, IonImg, IonPopover } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { camera, checkmark, scan, settings, checkmarkDoneOutline, image, ellipsisVertical, add, chatbox, cameraOutline, videocam, lockClosedOutline, qrCodeOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import lottie from 'lottie-web';
import { Router, RouterLink } from '@angular/router';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss'],
  standalone: true,
  imports: [RouterLink,IonPopover, IonImg, IonChip, IonFabButton, IonFab, IonBadge, IonItem, CommonModule, IonList, IonText, IonLabel, IonAvatar, IonCol, IonRow, IonGrid, IonSearchbar, IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
schemas:[CUSTOM_ELEMENTS_SCHEMA]
 
})
export class ChatsPage implements AfterViewInit {
  @ViewChild('animationContainer', { static: true }) animationContainer!: ElementRef;

  
  constructor(private router:Router) { addIcons({qrCodeOutline,cameraOutline,ellipsisVertical,chatbox,checkmarkDoneOutline,videocam,image,lockClosedOutline,scan,camera,add,settings,checkmark}); }
  contacts = [
    { name: 'Prabu (you)', date: '9/11/24', img: 'https://i.pravatar.cc/150?img=12', status: 'video' },
    { name: 'Sesha', date: '10/01/24', img: 'https://i.pravatar.cc/150?img=56', status: 'Photo' },
    { name: 'Sundar', date: '10/02/24', img: 'https://i.pravatar.cc/150?img=57', status: 'Solu la', no: '3' },
    { name: 'Mari', date: '7:37 AM', img: 'https://i.pravatar.cc/150?img=11', status: 'Elai prabu', no: '1' },
    { name: 'Bhuvanesh', date: '10/04/24', img: 'https://i.pravatar.cc/150?img=41', status: 'Photo' },
    { name: 'Bhai', date: '10/05/24', img: 'https://i.pravatar.cc/150?img=61', status: 'Okay', no: '2' },
    { name: 'Udhaya', date: '9:50 AM', img: 'https://i.pravatar.cc/150?img=33', status: 'Thanks la', no: '1' },
    { name: 'Surya', date: '1:00 PM', img: 'https://i.pravatar.cc/150?img=67', status: 'video' },
    { name: 'Muthu', date: '10/08/24', img: 'https://i.pravatar.cc/150?img=53', status: 'Photo' },
    { name: 'Shajith', date: '10/09/24', img: 'https://i.pravatar.cc/150?img=13', status: 'video' },
    { name: 'Sri', date: '10/02/24', img: 'https://i.pravatar.cc/150?img=57', status: 'Solu la', no: '3' },
    { name: 'Raja', date: '7:37 AM', img: 'https://i.pravatar.cc/150?img=11', status: 'Mmm', no: '1' },
    { name: 'Pravin', date: '10/04/24', img: 'https://i.pravatar.cc/150?img=41', status: 'Photo' },
    { name: 'Omar', date: '10/05/24', img: 'https://i.pravatar.cc/150?img=61', status: 'Okay', no: '2' },
    { name: 'Anbu', date: '9:50 AM', img: 'https://i.pravatar.cc/150?img=33', status: 'Thanks la', no: '1' },
    { name: 'Manoj', date: '1:00 PM', img: 'https://i.pravatar.cc/150?img=67', status: 'video' },
    { name: 'Dani', date: '10/08/24', img: 'https://i.pravatar.cc/150?img=53', status: 'Photo' },
    { name: 'karthi', date: '10/02/24', img: 'https://i.pravatar.cc/150?img=57', status: 'Ok da', no: '3' },
    { name: 'Siva', date: '7:37 AM', img: 'https://i.pravatar.cc/150?img=11', status: ' prabu', no: '1' },
    { name: 'Nikil', date: '10/04/24', img: 'https://i.pravatar.cc/150?img=41', status: 'Photo' },
    { name: 'Ramji', date: '10/05/24', img: 'https://i.pravatar.cc/150?img=61', status: 'Rytuu ok', no: '2' },
    { name: 'Udhaya', date: '9:50 AM', img: 'https://i.pravatar.cc/150?img=33', status: 'Seri lae', no: '1' },
  ];
  ngAfterViewInit() {
    lottie.loadAnimation({
      container: this.animationContainer.nativeElement, 
      path: 'assets/icon/animation/Animation - 1729919314703.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
    });
  }
  gotoChat(contact: any) {  
    this.router.navigate(['/chat', contact.name, contact.img]);  
   } 

   takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt,
      // saveToGallery:true,
      
    });
    console.log(image)
  }
 
//  async startScan(){
//     try{
//       const barcode = await CapacitorBarcodeScanner.scanBarcode({
//         hint: 17,
//         cameraDirection: 1
//       })
//       console.log(barcode);
//       return ( barcode).ScanResult;
//     }catch(error){
//       throw(error)
//     }
//   }
}

