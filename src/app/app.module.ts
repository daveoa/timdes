import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MondayComponent } from "./monday/monday.component";
import { TuesdayComponent } from "./tuesday/tuesday.component";
import { WednesdayComponent } from "./wednesday/wednesday.component";
import { ThursdayComponent } from "./thursday/thursday.component";
import { FridayComponent } from "./friday/friday.component";
import { SaturdayComponent } from "./saturday/saturday.component";
import { SundayComponent } from "./sunday/sunday.component";

import { HeaderComponent } from "./navigation/header/header.component";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MondayComponent,
    TuesdayComponent,
    WednesdayComponent,
    ThursdayComponent,
    FridayComponent,
    SaturdayComponent,
    SundayComponent,
    HeaderComponent,
    SidenavListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
