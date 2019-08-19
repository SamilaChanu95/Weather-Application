import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = 'e62a6592698344002b2425ac4eec2de1';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  }

  getWeather(city,country)
  {
    
    return this.http.get(this.url+city+','+{country}+'&appid='+this.apiKey)
      .map(res => res.json());
  }

}
   