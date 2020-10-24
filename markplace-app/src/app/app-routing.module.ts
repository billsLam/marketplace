import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component'; 
import { AboutComponent } from './components/about/about/about.component';
import { WorkshopMainComponent } from './components/workshop/workshop-main/workshop-main.component';
import { OutlineMainComponent } from './components/outlines/outline-main/outline-main.component';
import { BlogMainComponent } from './components/blogs/blog-main/blog-main.component';
const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'workshop', component: WorkshopMainComponent},
  {path: 'outlines', component: OutlineMainComponent },
  {path: 'blogs', component: BlogMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
