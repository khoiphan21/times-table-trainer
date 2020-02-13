import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NumberSelectorComponent } from "./number-selector/number-selector.component";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, NumberSelectorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
