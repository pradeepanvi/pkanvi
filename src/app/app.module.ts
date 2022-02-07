import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { CustomProjectFilterPipe } from './shared/project-filter.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TotalYearsOfExperiencePipe } from './shared/years-of-experience.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    CustomProjectFilterPipe,
    TotalYearsOfExperiencePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [TotalYearsOfExperiencePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
