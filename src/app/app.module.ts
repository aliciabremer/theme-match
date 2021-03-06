import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AppFirebaseModule } from './app-firebase.module';
import { NewThemeModule } from './new-theme/new-theme.module';
import { JoinThemeModule } from './join-theme/join-theme.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppFirebaseModule,
    FormsModule,
    HttpClientModule,
    NewThemeModule,
    JoinThemeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
