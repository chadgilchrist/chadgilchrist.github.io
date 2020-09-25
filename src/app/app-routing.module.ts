import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReferencesComponent } from './components/references/references.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectpageComponent } from './components/projectpage/projectpage.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'references', component: ReferencesComponent},
  {path: 'project/:id', component: ProjectpageComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
