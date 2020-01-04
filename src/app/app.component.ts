import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "lv"]);
    translate.setDefaultLang("lv");
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|lv/) ? browserLang : "lv");
  }
}
