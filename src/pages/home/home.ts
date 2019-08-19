import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  location:{
    city:string,
    country:string
  }

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider) {

  }

  //in the start that load for this location
  ionViewWillEnter(){
    this.location = {
      city: 'London',
      country: 'UK'
    }

    this.weatherProvider.getWeather(this.location.city, this.location.country)
    .subscribe(res => {
      console.log(res.main.temp); 
      console.log(res.weather[0].icon);
      console.log(res.sys.country);
      this.weather = res.weather[0].description; 
    });
  }

}
