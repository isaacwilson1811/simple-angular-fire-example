import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

  // using snapshotChanges()
  readCollection_Hard( collection: string ): Observable<any[]> {
    return this.db.collection(collection)
    .snapshotChanges()
    .pipe(
      map( (documentChangeActionArray: DocumentChangeAction<any>[]): any[] => {
        return documentChangeActionArray.map( (documentChangeAction: DocumentChangeAction<any>) => {
          return {
            id: documentChangeAction.payload.doc.id,
            name: documentChangeAction.payload.doc.data().name
          }
        })
      })
    )
  }

  // using valueChanges()
  readCollection_Easy( collection: string ): Observable<any[]> {
    return this.db.collection(collection).valueChanges({idField: 'id'}) // option to include document ids in the data
  }

  addDocument( collection: string ): void {
    const c = collection.trim();
    this.db.collection(c).add({name: 'test'});
  }
}
