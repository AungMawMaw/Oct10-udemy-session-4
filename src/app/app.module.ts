import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { UserInputModule } from './user-input/user-input.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultComponent],
  imports: [RouterOutlet, BrowserModule, FormsModule, UserInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
