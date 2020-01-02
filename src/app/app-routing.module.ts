import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MondayComponent } from "./monday/monday.component";
import { AppComponent } from "./app.component";
import { SundayComponent } from "./sunday/sunday.component";
import { SaturdayComponent } from "./saturday/saturday.component";
import { FridayComponent } from "./friday/friday.component";
import { ThursdayComponent } from "./thursday/thursday.component";
import { WednesdayComponent } from "./wednesday/wednesday.component";
import { TuesdayComponent } from "./tuesday/tuesday.component";

const routes: Routes = [
  { path: "", redirectTo: "/1", pathMatch: "full" },
  { path: "1", component: MondayComponent },
  { path: "2", component: TuesdayComponent },
  { path: "3", component: WednesdayComponent },
  { path: "4", component: ThursdayComponent },
  { path: "5", component: FridayComponent },
  { path: "6", component: SaturdayComponent },
  { path: "7", component: SundayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
