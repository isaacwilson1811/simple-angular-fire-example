import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  constructor(private db: AngularFirestore) { }

  public readCollection(): any {
    const result = this.db.collection('playground');
    return result.snapshotChanges().pipe(
      map((document: any ) => document.map((document: any) => {
        return {
          "id": document.payload.doc.id,
          "name": document.payload.doc.data().name
        }
      }))
    )
  }

  public addDocument(): void {
    this.db.collection('playground').add({name: 'test'});
  }
}
