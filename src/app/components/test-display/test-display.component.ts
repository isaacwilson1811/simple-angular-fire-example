import { Component, OnInit } from '@angular/core';
import { FireDbService } from '../../services/fire-db-crud.service';

@Component({
  selector: 'app-test-display',
  templateUrl: './test-display.component.html',
  styleUrls: ['./test-display.component.css']
})
export class TestDisplayComponent implements OnInit {

  documents$: any = [];

  constructor( private FireDbService: FireDbService) { }

  ngOnInit(): void {
    this.getCollection()
  }

  createDocument(): void {
    this.FireDbService.addDocument();
  }

  getCollection(): any {
    // this.FireDbService.readCollection().subscribe((data: any)=>{this.people = data});
    this.documents$ = this.FireDbService.readCollection();
  }

}
