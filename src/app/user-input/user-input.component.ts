import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculateInvest } from '../calculateInvest.model';
import { InvestmenService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<CalculateInvest>();
  // entered_initial_investment = '0';
  // entered_annual_investment = '0';
  // entered_expected_return = '0';
  // entered_duration = '0';
  //
  // calculate = output<CalculateInvest>();
  entered_initial_investment = signal('0');
  entered_annual_investment = signal('0');
  entered_expected_return = signal('0');
  entered_duration = signal('0');

  constructor(private investmentService: InvestmenService) {}

  onSubmit() {
    let tmp: CalculateInvest = {
      initialInvestment: +this.entered_initial_investment(),
      annualInvestment: +this.entered_annual_investment(),
      expectedReturn: +this.entered_expected_return(),
      duration: +this.entered_duration(),
    };
    // this.calculate.emit(tmp);
    this.investmentService.calculateInvestmentResults(tmp);
    this.entered_initial_investment.set('0');
    this.entered_annual_investment.set('0');
    this.entered_expected_return.set('0');
    this.entered_duration.set('0');

    console.log(
      'entered_initial_investment' + this.entered_initial_investment(),
    );
    console.log('entered_annual_investment' + this.entered_annual_investment());
    console.log('entered_expected_return' + this.entered_expected_return());
    console.log('entered_duration' + this.entered_duration());
  }
}
