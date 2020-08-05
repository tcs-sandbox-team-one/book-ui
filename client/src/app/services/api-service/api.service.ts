import { Injectable } from '@angular/core';
import { BookingData } from 'src/app/models/booking-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' , Accept: 'application/json', 'Access-Control-Allow-Origin': '*' } )
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'https://book-api-rail-ticket-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud';
  constructor(private httpClient: HttpClient) { }

  saveBookingData(bookingData: BookingData) {
      return this.httpClient.post(`${this.API_URL}/manageBooking/bookTickets?`
      + `bookingId=` + bookingData.bookingId
      + `&ticketNo=` + bookingData.ticketNo
      + `&journeyFrom=` + bookingData.fromStation
      + `&journeyTo=` + bookingData.toStation
      + `&fromDate=` + bookingData.journeyDate
      + `&toDate=` + bookingData.journeyDate
      + `&trainName=` + bookingData.selectedTrain
      + `&firstName=` + bookingData.firstName
      + `&lastName=` + bookingData.lastName
      + `&email=` + bookingData.email
      , httpOptions);
  }

  cancelBooking(bookingId: string) {
    return this.httpClient.post(`${this.API_URL}/manageBooking/cancelBooking?`
    + `bookingId=` + bookingId
    , httpOptions);
  }

  getPnrStatus(bookingId: string) {
    return this.httpClient.get(`${this.API_URL}/pnrInquiry/getPNRStatus?`
    + `bookingId=` + bookingId
    , httpOptions);
  }
}
