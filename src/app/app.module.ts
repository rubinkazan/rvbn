import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CVComponent } from './cv/cv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule, MatChipList } from '@angular/material';
import { GithubComponent } from './github/github.component';

const routes =[
  {path: 'Home', component: HomeComponent, useAsDefault: true},
  { path: 'CV', component: CVComponent },
  { path: 'Blog', component: BlogComponent },
  { path: '**', redirectTo: 'Home' }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    CVComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
