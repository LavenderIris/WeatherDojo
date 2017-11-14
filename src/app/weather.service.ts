import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {
  api_key = 'YOUR_OWN_API_KEY'
  url = 'http://api.openweathermap.org/data/2.5/weather?q=';

  info: any;

  constructor(private _http: Http) { }

  getWeather(location, callback) {
    console.log('get weather');
      const mystr = this.url + location + '&appid=' + this.api_key;
      console.log(mystr);
      return this._http.get(this.url + location + '&appid=' + this.api_key).subscribe(
        (success) => { callback(success.json()) ; }, // <— first method
        (error) => { callback(null); } // <— second method
      );
    }
}
