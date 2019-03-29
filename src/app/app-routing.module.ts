import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CVComponent } from './cv/cv.component';
import { GithubComponent } from './github/github.component';

const routes = [
  { path: 'Home', component: HomeComponent, useAsDefault: true },
  { path: 'Github', component: GithubComponent},
  { path: 'CV', component: CVComponent },
  { path: 'Blog', component: BlogComponent },
  { path: '**', redirectTo: 'Home' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
