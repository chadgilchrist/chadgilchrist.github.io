import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css']
})
export class ProjectpageComponent implements OnInit {

  project: any
  projectid: any

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute
  ) { }

  
  ngOnInit(): void {

    this.afs.collection('projects').doc(this.route.snapshot.params['id']).ref.get().then(doc => {
      if(doc.exists) {
        this.project = doc.data();
        console.log(this.project);
        console.log(this.project.images);
      }
    });
  }

}
