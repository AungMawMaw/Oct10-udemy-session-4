import { Component, computed, inject } from '@angular/core';
import { InvestmenService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  // standalone: true,
  // imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  // @Input({ required: true }) results?: AnnualData[];
  // results = input<AnnualData[]>();

  private investmentservice = inject(InvestmenService);
  // get results() {
  //   return this.investmentservice.annualData();
  // }

  // results = computed(() => this.investmentservice.annualData());
  results = () => this.investmentservice.annualData();
  // /*  */results = this.investmentservice.annualData.asReadonly();
  // results = this.investmentservice.annualData();
}
