import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChicagoComponent implements OnInit {
  info: any;
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  status;

  constructor(private _weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weather = this._weatherService.getWeather('chicago', (forecast) => {
      this.temp = Math.floor(forecast.main.temp * (9/5) - 459.67);
      this.status = forecast.weather[0].description;
      this.humidity = forecast.main.humidity;
      this.maxTemp = Math.floor(forecast.main.temp_max * (9/5) - 459.67);
      this.minTemp = Math.floor(forecast.main.temp_min * (9/5) - 459.67);
    });
  }

}
