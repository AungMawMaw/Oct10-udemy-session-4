import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [
  //   RouterOutlet,
  //   HeaderComponent,
  //   UserInputComponent,
  //   InvestmentResultComponent],
  // ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Oct9_Udemy_Section4_2';

  // annualData?: AnnualData[];
  // annualData = signal<AnnualData[] | undefined>(undefined);
  //
  // onCalculate(data: CalculateInvest) {
  //   let tmp = calculateInvestmentResults(data);
  //   console.log(tmp);
  //
  //   // this.annualData = tmp;
  //   this.annualData.set(tmp);
  // }
}
