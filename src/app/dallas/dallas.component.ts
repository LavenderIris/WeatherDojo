import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DallasComponent implements OnInit {
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
    this.weather = this._weatherService.getWeather('dallas', (forecast) => {
      this.temp = Math.floor(forecast.main.temp * (9/5) - 459.67);
      this.status = forecast.weather[0].description;
      this.humidity = forecast.main.humidity;
      this.maxTemp = Math.floor(forecast.main.temp_max * (9/5) - 459.67);
      this.minTemp = Math.floor(forecast.main.temp_min * (9/5) - 459.67);
    });
  }


}
