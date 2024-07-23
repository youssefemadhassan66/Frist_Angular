import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForComponent } from './for/for.component';
import { HeaderStoreComponent } from './header-store/header-store.component';

@NgModule({
  declarations: [
    AppComponent,
    ForComponent,
    HeaderStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
