import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CVComponent } from './cv/cv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import { GithubComponent } from './github/github.component';
import { RouterModule, Routes } from '@angular/router';

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
    MatChipsModule,
    MatTabsModule,
    MatCardModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
