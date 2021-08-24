import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-display-the-data',
  templateUrl: './display-the-data.component.html',
  styleUrls: ['./display-the-data.component.css']
})
export class DisplayTheDataComponent implements OnInit {

  outputMessage: string = 'Get Ready for your JSON';
  collectionName: string = '';
  documents$: any;

  constructor( private firestoreService: FirestoreService) { }

  ngOnInit(): void {
  }

  createDocument(collection: string): void {
    this.firestoreService.addDocument(collection);
  }

  getCollection(collection: string): void {
    if (collection.length < 1) {
      this.outputMessage = 'You gave me an empty string. I wanted the name of a collection.';
      return;
    }
    this.outputMessage = 'Loading...';

    // switch between these two service methods to see the difference:
    this.documents$ = this.firestoreService.readCollection_Easy(collection);
    // this.documents$ = this.firestoreService.readCollection_Hard(collection);
  }

}
