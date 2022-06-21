import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'currency-converter';
  currjson: any = [];
  base = 'USD';
  converted = 'UAH';
  result: string = '1';
  changeValues = '';
  firstAmount: number = 1;
  secondAmount: number = 1;
  changebase(baseValue: string) {
    if (this.converted == baseValue) {
      var temporary = this.base;
      this.base = this.converted;
      this.converted = temporary;
    }
    this.base = baseValue;
    console.log(this.base + ' ' + this.converted);
  }

  changeToBeConverted(convertedValue: string) {
    if (this.base == convertedValue) {
      var temporary = this.base;
      this.base = this.converted;
      this.converted = temporary;
    }
    this.converted = convertedValue;
    console.log(this.base + ' ' + this.converted);
  }
  constructor(private currency: CurrencyapidataService) {}
  convert() {
    this.currency
      .getcurrencydata(this.base, this.converted)
      .subscribe((data) => {
        this.currjson = data;
        var multiple = String(+this.firstAmount * +this.currjson.result);
        this.result = multiple;
      });
  }
}
