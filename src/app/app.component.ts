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
  changebase(baseValue: string) {
    this.base = baseValue;
    console.log(this.base + ' ' + this.converted);
  }

  changeToBeConverted(convertedValue: string) {
    this.converted = convertedValue;
    console.log(this.base + ' ' + this.converted);
  }
  constructor(private currency: CurrencyapidataService) {}
  convert() {
    this.currency.getcurrencydata(this.base, this.converted).subscribe((data) => {
      this.currjson = data
      this.result = this.currjson.result   
    });
    

  }
}
