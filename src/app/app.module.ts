import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CVComponent } from './cv/cv.component';
import { GithubComponent } from './github/github.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubComponent,
    CVComponent,
    BlogComponent
      ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatTabsModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
